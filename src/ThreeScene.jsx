import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

// ── Step config ───────────────────────────────────────────────
const STEP_CONFIG = [
  { sphereOpacity: 0.55, linewidth: 0.8,  ringOpacity: 0.0,  bloom: 0.1, meshX: -1.6, meshY:  0.3 },
  { sphereOpacity: 0.75, linewidth: 1.2,  ringOpacity: 0.0,  bloom: 0.3, meshX:  1.6, meshY: -0.3 },
  { sphereOpacity: 0.92, linewidth: 1.8,  ringOpacity: 0.55, bloom: 0.7, meshX:  0.0, meshY:  0.0 },
]

function lp(a, b, t) { return a + (b - a) * t }

export default function ThreeScene({ step }) {
  const mountRef = useRef(null)
  const refs     = useRef({})
  const stepRef  = useRef(step)

  useEffect(() => { stepRef.current = step }, [step])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const w = mount.clientWidth
    const h = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100)
    camera.position.z = 5.5

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const pt1 = new THREE.PointLight(0xC6F24E, 4, 30)
    pt1.position.set(6, 6, 6)
    scene.add(pt1)
    const pt2 = new THREE.PointLight(0xFF5A36, 2, 20)
    pt2.position.set(-6, -4, 2)
    scene.add(pt2)

    // ── Geodesic sphere wireframe (icosahedron detail=3 → hex pattern) ──
    const icoGeo = new THREE.IcosahedronGeometry(1.55, 3)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    })
    const sphere = new THREE.Mesh(icoGeo, wireMat)
    sphere.position.set(-1.6, 0.3, 0)
    scene.add(sphere)

    // ── Inner solid sphere (subtle fill) ──
    const innerGeo = new THREE.IcosahedronGeometry(1.5, 3)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1a1a2e,
      transparent: true,
      opacity: 0.6,
    })
    const innerSphere = new THREE.Mesh(innerGeo, innerMat)
    sphere.add(innerSphere)

    // ── Orbiting ring ──
    const ringGeo = new THREE.TorusGeometry(2.0, 0.018, 8, 90)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xC6F24E, transparent: true, opacity: 0 })
    const ring    = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3.5
    scene.add(ring)

    // ── Second thinner ring (offset tilt) ──
    const ring2Geo = new THREE.TorusGeometry(2.15, 0.010, 8, 90)
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 })
    const ring2    = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = Math.PI / 5
    ring2.rotation.y = Math.PI / 4
    scene.add(ring2)

    // ── Background particles ──
    const pCount = 420
    const pPos   = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 36
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({ color: 0xC6F24E, size: 0.038, transparent: true, opacity: 0.45 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ── Post-processing ──
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.1, 0.4, 0.82)
    composer.addPass(bloom)

    refs.current = { sphere, wireMat, ring, ring2, ringMat, ring2Mat, bloom, composer, renderer, particles }

    const clock = new THREE.Clock()
    let animId

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t   = clock.getElapsedTime()
      const s   = stepRef.current
      const cfg = STEP_CONFIG[s] ?? STEP_CONFIG[0]

      if (!reduced) {
        // Slow dual-axis rotation for the geodesic sphere
        sphere.rotation.y = t * 0.18
        sphere.rotation.x = t * 0.09

        particles.rotation.y = t * 0.025
        ring.rotation.z      = t * 0.14
        ring2.rotation.z     = -t * 0.09

        const k = 0.028
        sphere.position.x = lp(sphere.position.x, cfg.meshX, k)
        sphere.position.y = lp(sphere.position.y, cfg.meshY, k)
        ring.position.x   = sphere.position.x
        ring.position.y   = sphere.position.y
        ring2.position.x  = sphere.position.x
        ring2.position.y  = sphere.position.y

        const m = 0.055
        wireMat.opacity  = lp(wireMat.opacity,  cfg.sphereOpacity, m)
        ringMat.opacity  = lp(ringMat.opacity,  cfg.ringOpacity,   m)
        ring2Mat.opacity = lp(ring2Mat.opacity, cfg.ringOpacity * 0.5, m)
        bloom.strength   = lp(bloom.strength,   cfg.bloom,         m)
      }

      composer.render()
    }
    animate()

    const onResize = () => {
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
      composer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="craft-canvas" />
}
