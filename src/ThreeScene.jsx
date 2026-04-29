import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'

// ── 4D tesseract helpers ──────────────────────────────────────
function makeVerts4D() {
  const v = []
  for (let x = -1; x <= 1; x += 2)
    for (let y = -1; y <= 1; y += 2)
      for (let z = -1; z <= 1; z += 2)
        for (let w = -1; w <= 1; w += 2)
          v.push([x, y, z, w])
  return v
}

function makeEdges(verts) {
  const edges = []
  for (let i = 0; i < verts.length; i++)
    for (let j = i + 1; j < verts.length; j++) {
      let diff = 0
      for (let k = 0; k < 4; k++) if (verts[i][k] !== verts[j][k]) diff++
      if (diff === 1) edges.push([i, j])
    }
  return edges
}

function rotate4D(v, tXW, tZW, tYW) {
  let [x, y, z, w] = v
  let tmp
  // XW plane
  tmp = x * Math.cos(tXW) - w * Math.sin(tXW)
  w   = x * Math.sin(tXW) + w * Math.cos(tXW)
  x   = tmp
  // ZW plane
  tmp = z * Math.cos(tZW) - w * Math.sin(tZW)
  w   = z * Math.sin(tZW) + w * Math.cos(tZW)
  z   = tmp
  // YW plane
  tmp = y * Math.cos(tYW) - w * Math.sin(tYW)
  w   = y * Math.sin(tYW) + w * Math.cos(tYW)
  y   = tmp
  return [x, y, z, w]
}

function project4to3([x, y, z, w], d = 2.5, scale = 1.5) {
  const s = scale / (d - w)
  return [x * s, y * s, z * s]
}

const BASE_VERTS = makeVerts4D()  // 16 verts
const EDGES      = makeEdges(BASE_VERTS)  // 32 edges

// ── Step config ───────────────────────────────────────────────
const STEP_CONFIG = [
  {
    wireOpacity: 0.7, linewidth: 1.0,
    torusOpacity: 0.0,
    bloom: 0.1,
    meshX: -2.0, meshY: 0.4,
  },
  {
    wireOpacity: 0.85, linewidth: 1.8,
    torusOpacity: 0.0,
    bloom: 0.3,
    meshX: 2.0, meshY: -0.4,
  },
  {
    wireOpacity: 0.95, linewidth: 2.8,
    torusOpacity: 0.65,
    bloom: 0.65,
    meshX: 0.0, meshY: 0.0,
  },
]

function lp(a, b, t) { return a + (b - a) * t }

export default function ThreeScene({ step }) {
  const mountRef = useRef(null)
  const refs    = useRef({})
  const stepRef = useRef(step)

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

    // ── Tesseract (dynamic geometry updated every frame) ──
    const initPos = new Float32Array(EDGES.length * 6)
    const lineGeo = new LineSegmentsGeometry()
    lineGeo.setPositions(initPos)

    const wireMat = new LineMaterial({
      color: 0xFFFFFF, linewidth: 1.0,
      transparent: true, opacity: 0.7,
      resolution: new THREE.Vector2(w, h),
    })
    const wireMesh = new LineSegments2(lineGeo, wireMat)
    wireMesh.position.set(-2.0, 0.4, 0)
    scene.add(wireMesh)

    // ── Orbiting torus (step 3) ──
    const torusGeo = new THREE.TorusGeometry(2.3, 0.022, 8, 80)
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 })
    const torus    = new THREE.Mesh(torusGeo, torusMat)
    torus.rotation.x = Math.PI / 4
    scene.add(torus)

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

    refs.current = { wireMesh, lineGeo, torus, wireMat, torusMat, bloom, composer, renderer, particles }

    const clock = new THREE.Clock()
    let animId

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t   = clock.getElapsedTime()
      const s   = stepRef.current
      const cfg = STEP_CONFIG[s] ?? STEP_CONFIG[0]

      // ── 4D rotation → project → update geometry ──
      const tXW = t * 0.5
      const tZW = t * 0.31
      const tYW = t * 0.19

      const posArr = []
      for (const [i, j] of EDGES) {
        const p1 = project4to3(rotate4D(BASE_VERTS[i], tXW, tZW, tYW))
        const p2 = project4to3(rotate4D(BASE_VERTS[j], tXW, tZW, tYW))
        posArr.push(...p1, ...p2)
      }
      lineGeo.setPositions(posArr)

      if (!reduced) {
        particles.rotation.y = t * 0.025
        torus.rotation.z     = t * 0.18

        const k = 0.028
        wireMesh.position.x = lp(wireMesh.position.x, cfg.meshX, k)
        wireMesh.position.y = lp(wireMesh.position.y, cfg.meshY, k)
        torus.position.x    = wireMesh.position.x
        torus.position.y    = wireMesh.position.y

        const m = 0.055
        wireMat.opacity   = lp(wireMat.opacity,  cfg.wireOpacity, m)
        wireMat.linewidth = lp(wireMat.linewidth, cfg.linewidth,   m)
        torusMat.opacity  = lp(torusMat.opacity,  cfg.torusOpacity, m)
        bloom.strength    = lp(bloom.strength,    cfg.bloom,        m)
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
      wireMat.resolution.set(nw, nh)
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
