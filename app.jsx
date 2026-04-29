/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

/* ===== CONTENT ===== */
const COPY = {
  en: {
    nav: { work: "Work", clients: "Clients", stack: "Stack", experience: "Experience", approach: "Approach", contact: "Contact" },
    hero: {
      tag: "Available for new projects",
      title1: "Developer",
      title2: "building",
      title3: "seamless",
      title4: "UX.",
      sub: "Hi! I'm David — a multi-disciplinary developer and user-experience enthusiast based in Ecuador. I turn rough concepts into shippable, opinionated software.",
      cta1: "Show my work",
      cta2: "Email me",
      sticker: "Let's\nbuild\nsomething",
      meta: [
        { k: "5+", v: "yrs shipping" },
        { k: "12", v: "products live" },
        { k: "∞", v: "cups of lofi" },
        { k: "EC", v: "based in Ecuador" }
      ]
    },
    work: {
      label: "/ 02 — selected work",
      title: "A small selection of recent projects.",
      desc: "From enterprise AI systems to learning platforms — here's what I've been shipping.",
      filters: ["All", "AI", "LMS", "CRM", "Web"]
    },
    testimonials: {
      label: "/ 03 — kind words",
      title: "Kind words from satisfied clients.",
      desc: "A few notes from the people I've collaborated with over the years."
    },
    stack: { label: "Tools of the trade" },
    experience: {
      label: "/ 05 — experience",
      title: "My work experience.",
      desc: "Where I've been, what I shipped, what I learned."
    },
    approach: {
      label: "/ 06 — how I work",
      title: "My approach.",
      desc: "A transparent, three-phase process from first Zoom to launch day."
    },
    scrolly: {
      label: "/ 04 — case study",
      title: "How an AI chatbot ships, scroll-by-scroll.",
      desc: "A pinned walkthrough of the Relatividad IA build — from blueprint to live dashboard."
    },
    contact: {
      label: "/ 07 — get in touch",
      title1: "Let's build",
      title2: "something",
      title3: "loud.",
      sub: "Got a project in mind? Drop a line. I reply within 24 hours, usually with a tough question and a lofi recommendation.",
      emailLabel: "Email",
      telLabel: "Phone",
      copyHint: "Click to copy",
      copied: "Copied!",
      foot: "Built with React, CSS, and stubborn attention to detail."
    }
  },
  es: {
    nav: { work: "Proyectos", clients: "Clientes", stack: "Stack", experience: "Experiencia", approach: "Proceso", contact: "Contacto" },
    hero: {
      tag: "Disponible para nuevos proyectos",
      title1: "Developer",
      title2: "creando",
      title3: "experiencias",
      title4: "únicas.",
      sub: "¡Hola! Soy David — desarrollador multidisciplinario y entusiasta de la experiencia de usuario, radicado en Ecuador. Convierto conceptos difusos en software funcional y con carácter.",
      cta1: "Ver proyectos",
      cta2: "Escríbeme",
      sticker: "Hagamos\nalgo\njuntos",
      meta: [
        { k: "5+", v: "años desarrollando" },
        { k: "12", v: "productos en vivo" },
        { k: "∞", v: "tazas de lofi" },
        { k: "EC", v: "desde Ecuador" }
      ]
    },
    work: {
      label: "/ 02 — proyectos seleccionados",
      title: "Una selección de proyectos recientes.",
      desc: "Desde sistemas IA empresariales hasta plataformas de aprendizaje.",
      filters: ["Todos", "IA", "LMS", "CRM", "Web"]
    },
    testimonials: {
      label: "/ 03 — testimonios",
      title: "Palabras amables de clientes satisfechos.",
      desc: "Algunas notas de las personas con las que he colaborado."
    },
    stack: { label: "Herramientas" },
    experience: {
      label: "/ 05 — experiencia",
      title: "Mi experiencia laboral.",
      desc: "Dónde he estado, qué envié, qué aprendí."
    },
    approach: {
      label: "/ 06 — cómo trabajo",
      title: "Mi proceso.",
      desc: "Un proceso transparente en tres fases, desde la primera llamada al lanzamiento."
    },
    scrolly: {
      label: "/ 04 — caso de estudio",
      title: "Cómo se lanza un chatbot IA, scroll a scroll.",
      desc: "Recorrido pinneado del build de Relatividad IA — del blueprint al dashboard en vivo."
    },
    contact: {
      label: "/ 07 — contáctame",
      title1: "Hagamos",
      title2: "algo",
      title3: "fuerte.",
      sub: "¿Tienes un proyecto en mente? Escríbeme. Respondo en menos de 24 horas, generalmente con una pregunta difícil y una recomendación de lofi.",
      emailLabel: "Correo",
      telLabel: "Teléfono",
      copyHint: "Click para copiar",
      copied: "¡Copiado!",
      foot: "Hecho con React, CSS y atención obsesiva al detalle."
    }
  }
};

const PROJECTS = [
  {
    id: 1,
    title: "N8N Relatividad IA",
    cat: "AI",
    desc: { en: "Multiple self-hosted N8N chatbots, one per customer — orchestrating LLM conversations.", es: "N8N multi-cliente auto-hospedado con varios chatbots orquestando conversaciones LLM." },
    tech: ["N8N", "Docker", "LLM"],
    color: "var(--secondary)",
    textColor: "var(--surface)",
    link: "#"
  },
  {
    id: 2,
    title: "Atiende Relatividad IA",
    cat: "CRM",
    desc: { en: "WhatsApp ticketing CRM wired directly into N8N automations — full customer lifecycle.", es: "CRM de tickets WhatsApp conectado a N8N — ciclo completo del cliente." },
    tech: ["Next.js", "N8N", "Appwrite", "WhatsApp API"],
    color: "var(--primary)",
    textColor: "var(--ink)",
    link: "#"
  },
  {
    id: 3,
    title: "Qubex LLM",
    cat: "AI",
    desc: { en: "A cutting-edge assistant exposing large language models through a polished chat UI.", es: "Asistente de punta que expone LLMs a través de una UI de chat pulida." },
    tech: ["Next.js", "React", "LLM", "Vercel"],
    color: "var(--tertiary)",
    textColor: "var(--ink)",
    link: "https://qubex-global.vercel.app/"
  },
  {
    id: 4,
    title: "Fenix Conocimiento",
    cat: "LMS",
    desc: { en: "Learning management system for Fenix's internal knowledge base and training.", es: "Sistema de gestión de aprendizaje para la base de conocimiento interna de Fenix." },
    tech: ["Moodle", "PHP", "MySQL", "Hostinger"],
    color: "var(--surface)",
    textColor: "var(--ink)",
    link: "https://conocimiento.mysistemafenix.com"
  },
  {
    id: 5,
    title: "Taurhus Capacitaciones",
    cat: "LMS",
    desc: { en: "Full LMS for online courses, custom theme, enrollment flows, and certificates.", es: "LMS completo para cursos en línea con tema personalizado, matrícula y certificados." },
    tech: ["Moodle", "React", "Stream", "Cloudinary", "MySQL", "PHP"],
    color: "var(--secondary)",
    textColor: "var(--surface)",
    link: "https://taurhus.com.ec"
  }
];

const TESTIMONIALS = [
  {
    initials: "JA",
    name: "Jorge Anchatuña",
    role: "CEO, Fenix Corp",
    quote: {
      en: "Collaborating with David was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Together we innovated in enterprise AI systems and knowledge platforms, where his expertise truly shone.",
      es: "Colaborar con David fue un placer absoluto. Su profesionalismo, puntualidad y dedicación a resultados excepcionales fueron evidentes durante todo el proyecto. Juntos innovamos en sistemas IA empresariales y plataformas de conocimiento."
    }
  },
  {
    initials: "WE",
    name: "Wendy Espósito",
    role: "CEO, Taurhus Capacitaciones",
    quote: {
      en: "Working with David has been an enriching experience. His expertise in full-stack development, coupled with his commitment to meeting deadlines and exceeding expectations, truly set him apart. He was instrumental in building a Learning Management System with Moodle.",
      es: "Trabajar con David ha sido una experiencia enriquecedora. Su experiencia en full-stack y su compromiso con las fechas lo distinguen. Fue fundamental construyendo un LMS con Moodle."
    }
  },
  {
    initials: "MA",
    name: "Maritza Andrade",
    role: "Project Manager, Innovar Digital",
    quote: {
      en: "David is an exceptional developer and educator with a unique ability to turn ideas into reality. While working at Algoritmics, we taught programming to kids, creating a positive and engaging learning environment. His creativity and technical expertise make him an incredible asset.",
      es: "David es un desarrollador y educador excepcional con la habilidad única de convertir ideas en realidad. En Algoritmics enseñamos programación a niños creando un ambiente positivo. Su creatividad lo hacen un activo increíble."
    }
  }
];

const STACK = ["Cloudinary", "Appwrite", "Hostinger", "Stream", "Docker", "Next.js", "React", "N8N", "Moodle", "PostgreSQL"];

const EXPERIENCES = [
  { badge: "FC", title: { en: "Lead Developer Full Stack", es: "Desarrollador Full Stack Líder" }, where: "Fenix Corp", period: "2023 — Now", desc: { en: "Developed and deployed web applications using React.js and Next.js. Led integration with enterprise Windows systems.", es: "Desarrollé y desplegué aplicaciones web con React.js y Next.js. Lideré integración con sistemas Windows empresariales." } },
  { badge: "TC", title: { en: "Full Stack Developer", es: "Desarrollador Full Stack" }, where: "Taurhus Capacitaciones", period: "2022 — 2023", desc: { en: "Built and deployed a Moodle-based LMS with custom API connectors and enrollment flows.", es: "Construí y desplegué un LMS basado en Moodle con conectores API personalizados y flujos de matrícula." } },
  { badge: "FL", title: { en: "Freelance Web App Developer", es: "Desarrollador Web Freelance" }, where: "Fenix Corp", period: "2021 — 2022", desc: { en: "Customized and deployed a connector for Fenix Windows systems via modern web protocols.", es: "Personalicé y desplegué un conector para los sistemas Windows de Fenix vía protocolos web modernos." } },
  { badge: "FE", title: { en: "Frontend Developer", es: "Desarrollador Frontend" }, where: "Agency work", period: "2020 — 2021", desc: { en: "Developed and maintained landing pages in React.js with rich, performant animations.", es: "Desarrollé y mantuve landing pages en React.js con animaciones ricas y performantes." } }
];

const PHASES = [
  { label: "Phase 01", labelEs: "Fase 01", title: { en: "Planning & Strategy", es: "Planeación y Estrategia" }, desc: { en: "We map out your site's goals, target audience, and key functionality — structure, navigation, content. No surprises.", es: "Mapeamos juntos los objetivos, la audiencia y la funcionalidad clave — estructura, navegación, contenido. Sin sorpresas." } },
  { label: "Phase 02", labelEs: "Fase 02", title: { en: "Design & Prototype", es: "Diseño y Prototipo" }, desc: { en: "I cue my lofi playlist and dive in. From initial sketches to polished components, you see progress every step.", es: "Pongo mi playlist de lofi y me sumerjo. Desde bocetos iniciales hasta componentes pulidos, ves el avance paso a paso." } },
  { label: "Phase 03", labelEs: "Fase 03", title: { en: "Development & Launch", es: "Desarrollo y Lanzamiento" }, desc: { en: "Approved design becomes functional code. I build, test, deploy, and hand off with documentation.", es: "El diseño aprobado se vuelve código funcional. Construyo, pruebo, despliego y entrego con documentación." } }
];

const SCROLLY_STEPS = [
  {
    num: "01",
    title: { en: "Blueprint the system", es: "Diagrama el sistema" },
    body: {
      en: "Every build starts with a wireframe. We map user flows, data boundaries, and failure modes — before a single line of code.",
      es: "Todo arranca con un wireframe. Mapeamos flujos de usuario, límites de datos y modos de falla — antes de escribir código."
    },
    stat: { en: "~1 week discovery", es: "~1 semana de discovery" }
  },
  {
    num: "02",
    title: { en: "Wire the AI agents", es: "Conecta los agentes IA" },
    body: {
      en: "N8N workflows orchestrate LLMs, WhatsApp, and CRM events. Each chatbot gets its own isolated pipeline and guardrails.",
      es: "Workflows de N8N orquestan LLMs, WhatsApp y eventos CRM. Cada chatbot tiene su pipeline y guardarraíles aislados."
    },
    stat: { en: "2–3 weeks build", es: "2–3 semanas de construcción" }
  },
  {
    num: "03",
    title: { en: "Measure what ships", es: "Mide lo que se lanza" },
    body: {
      en: "Live dashboards surface resolution rate, handoff events, and latency. We iterate on real numbers, not vibes.",
      es: "Dashboards en vivo muestran resolución, transferencias y latencia. Iteramos con datos reales, no corazonadas."
    },
    stat: { en: "94% auto-resolved", es: "94% auto-resuelto" }
  },
  {
    num: "04",
    title: { en: "Ship, then sharpen", es: "Lanza y afina" },
    body: {
      en: "Launch day isn't the finish line — it's the start of continuous refinement. Weekly reviews, zero-downtime deploys.",
      es: "El lanzamiento no es la meta — es el inicio de la mejora continua. Revisiones semanales, deploys sin downtime."
    },
    stat: { en: "Shipped · Live", es: "Lanzado · En vivo" }
  }
];

/* ===== Reveal hook ===== */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ===== Cursor sticker ===== */
function CursorSticker({ text, containerRef }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const parent = containerRef.current;
    if (!el || !parent) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    };
    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      if (el) el.style.left = x + 'px';
      if (el) el.style.top = y + 'px';
      raf = requestAnimationFrame(loop);
    };
    parent.addEventListener('mousemove', onMove);
    // initial place
    tx = parent.offsetWidth * 0.78;
    ty = 180;
    loop();
    return () => {
      parent.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [containerRef]);
  return (
    <div ref={ref} className="hero-sticker">
      {text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
    </div>
  );
}

/* ===== Components ===== */
function Nav({ lang, setLang, t, theme, setTheme }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <span className="nav-logo-mark">D</span>
        <span>David<span style={{color:'var(--muted)'}}>.dev</span></span>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-link">{t.nav.work}</a>
        <a href="#scrolly" className="nav-link">Case</a>
        <a href="#clients" className="nav-link">{t.nav.clients}</a>
        <a href="#stack" className="nav-link">{t.nav.stack}</a>
        <a href="#experience" className="nav-link">{t.nav.experience}</a>
        <a href="#approach" className="nav-link">{t.nav.approach}</a>
        <a href="#contact" className="nav-link">{t.nav.contact}</a>
      </div>
      <div className="nav-actions">
        <button
          className="nb-pill"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{ cursor: 'pointer', background: theme === 'dark' ? 'var(--secondary)' : 'var(--primary)', color: theme === 'dark' ? 'var(--surface)' : 'var(--ink)' }}
          title="Toggle theme"
        >
          {theme === 'dark' ? '☾' : '☀'}
        </button>
        <div className="lang-toggle">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  const ref = useRef(null);
  return (
    <section id="top" className="hero wrap" ref={ref}>
      <div className="hero-scribble"></div>
      <div className="hero-scribble-2"></div>
      <CursorSticker text={t.hero.sticker} containerRef={ref} />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          {t.hero.tag}
        </div>
        <h1 className="display hero-title">
          {t.hero.title1}<br/>
          <span className="stroke">{t.hero.title2}</span>{" "}
          <span className="violet">{t.hero.title3}</span><br/>
          {t.hero.title4}
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-actions">
          <a href="#work" className="nb-btn">→ {t.hero.cta1}</a>
          <a href="#contact" className="nb-btn secondary">✉ {t.hero.cta2}</a>
        </div>
        <div className="hero-meta">
          {t.hero.meta.map((m, i) => (
            <div key={i} className="hero-meta-cell">
              <div className="k display">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work({ t, lang }) {
  const [filter, setFilter] = useState("All");
  const filterMap = { "All": "All", "Todos": "All", "AI": "AI", "IA": "AI", "LMS": "LMS", "CRM": "CRM", "Web": "Web" };
  const shown = useMemo(() => {
    const key = filterMap[filter] || "All";
    return key === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === key);
  }, [filter]);

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="section-label">{t.work.label}</div>
            <h2 className="display sec-title">{t.work.title}</h2>
          </div>
          <p className="sec-desc">{t.work.desc}</p>
        </div>
        <div className="filter-bar reveal">
          {t.work.filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div>
          {shown.map((p, i) => (
            <div key={p.id} className="project-row reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="project-num">0{p.id}</div>
              <div className="project-main">
                <h3>{p.title}</h3>
                <p>{p.desc[lang]}</p>
                <div className="project-tech">
                  {p.tech.map((t, j) => <span key={j} className="nb-pill">{t}</span>)}
                </div>
              </div>
              <div className="project-visual" style={{ background: p.color, color: p.textColor }}>
                <span style={{ position: 'relative', zIndex: 2 }}>{p.title}</span>
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${p.title}`}>↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t, lang }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 8000);
    return () => clearInterval(id);
  }, []);
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="clients" className="testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="section-label">{t.testimonials.label}</div>
            <h2 className="display sec-title">{t.testimonials.title}</h2>
          </div>
          <p className="sec-desc">{t.testimonials.desc}</p>
        </div>
        <div className="carousel reveal">
          <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {TESTIMONIALS.map((tm, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial-card">
                  <p className="testimonial-quote">{tm.quote[lang]}</p>
                  <div className="testimonial-person">
                    <div className="testimonial-avatar">{tm.initials}</div>
                    <div className="testimonial-name">{tm.name}</div>
                    <div className="testimonial-role mono">{tm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">←</button>
          <button className="carousel-btn" onClick={next} aria-label="Next">→</button>
          <div className="carousel-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`carousel-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Go to ${i+1}`}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStrip({ t }) {
  const items = [...STACK, ...STACK];
  return (
    <section id="stack" className="tech-strip">
      <div className="marquee">
        {items.map((s, i) => (
          <div key={i} className="marquee-item"><span className="dot"></span>{s}</div>
        ))}
      </div>
    </section>
  );
}

function Experience({ t, lang }) {
  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="section-label">{t.experience.label}</div>
            <h2 className="display sec-title">{t.experience.title}</h2>
          </div>
          <p className="sec-desc">{t.experience.desc}</p>
        </div>
        <div className="exp-grid">
          {EXPERIENCES.map((e, i) => (
            <div key={i} className="exp-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="exp-badge">{e.badge}</div>
              <div>
                <h4>{e.title[lang]}</h4>
                <div className="meta">{e.where} · {e.period}</div>
                <p>{e.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach({ t, lang }) {
  return (
    <section id="approach" className="approach">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="section-label">{t.approach.label}</div>
            <h2 className="display sec-title">{t.approach.title}</h2>
          </div>
          <p className="sec-desc">{t.approach.desc}</p>
        </div>
        <div className="phases">
          {PHASES.map((p, i) => (
            <div key={i} className="phase reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="phase-num">0{i+1}</div>
              <div className="phase-label mono">{lang === 'es' ? p.labelEs : p.label}</div>
              <h4>{p.title[lang]}</h4>
              <p>{p.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scrolly({ t, lang }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setActive(SCROLLY_STEPS.length - 1); return; }

    const io = new IntersectionObserver((entries) => {
      // Pick the step whose center is closest to viewport center
      const vh = window.innerHeight;
      let best = { idx: -1, dist: Infinity };
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < best.dist) best = { idx: i, dist };
      });
      if (best.idx >= 0) setActive(best.idx);
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    stepRefs.current.forEach(el => el && io.observe(el));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = containerRef.current;
        if (el) {
          const r = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const total = r.height - vh;
          const done = Math.max(0, Math.min(1, -r.top / total));
          setProgress(done);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <section id="scrolly" className="scrolly">
      <div className="wrap">
        <div className="scrolly-head sec-head reveal">
          <div>
            <div className="section-label">{t.scrolly.label}</div>
            <h2 className="display sec-title">{t.scrolly.title}</h2>
          </div>
          <p className="sec-desc">{t.scrolly.desc}</p>
        </div>
        <div className="scrolly-stage" ref={containerRef}>
          <div className="scrolly-text">
            {SCROLLY_STEPS.map((s, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`scrolly-step ${active === i ? 'active' : ''}`}
              >
                <div className="step-num">{s.num} / 04</div>
                <h3>{s.title[lang]}</h3>
                <p>{s.body[lang]}</p>
                <div className="stat">{s.stat[lang]}</div>
              </div>
            ))}
          </div>
          <div className="scrolly-sticky">
            <div className={`scrolly-viz s${active}`}>
              <div className="scrolly-progress" style={{ transform: `scaleX(${progress})` }}></div>
              <div className={`layer ${active === 0 ? 'active' : ''}`}>
                <div className="layer-wire">
                  <div className="block"></div>
                  <div className="block body">
                    <div></div><div></div><div></div><div></div>
                  </div>
                  <div className="block"></div>
                </div>
              </div>
              <div className={`layer ${active === 1 ? 'active' : ''}`}>
                <div className="layer-chat">
                  <div className="bubble bot">hola, soy el asistente</div>
                  <div className="bubble user">necesito mi factura</div>
                  <div className="bubble bot">claro, dame un segundo…</div>
                  <div className="bubble bot typing"></div>
                </div>
              </div>
              <div className={`layer ${active === 2 ? 'active' : ''}`}>
                <div className="layer-dash">
                  <div className="stat-tile"><div className="big">94%</div><div className="lbl">resolved</div></div>
                  <div className="stat-tile"><div className="big">1.2s</div><div className="lbl">avg latency</div></div>
                  <div className="stat-tile"><div className="big">12k</div><div className="lbl">msgs / wk</div></div>
                  <div className="stat-tile"><div className="big">4.8★</div><div className="lbl">csat</div></div>
                </div>
              </div>
              <div className={`layer ${active === 3 ? 'active' : ''}`}>
                <div className="layer-launch">
                  <div className="rocket">SHIPPED.</div>
                  <div className="tag">Live · v1.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, showToast }) {
  const email = "david@relatividad.dev";
  const phone = "+593 99 123 4567";
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => showToast(t.contact.copied));
  };
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="section-label contact-label">{t.contact.label}</div>
        <h2 className="display contact-title">
          {t.contact.title1}<br/>
          <span className="accent">{t.contact.title2}</span>{" "}
          {t.contact.title3}
        </h2>
        <p className="contact-sub">{t.contact.sub}</p>
        <div className="contact-card">
          <button className="contact-field" onClick={() => copy(email)}>
            <div>
              <div className="label">{t.contact.emailLabel}</div>
              <span className="value">{email}</span>
            </div>
            <span className="copy-hint">{t.contact.copyHint} ⎘</span>
          </button>
          <button className="contact-field" onClick={() => copy(phone)}>
            <div>
              <div className="label">{t.contact.telLabel}</div>
              <span className="value">{phone}</span>
            </div>
            <span className="copy-hint">{t.contact.copyHint} ⎘</span>
          </button>
        </div>
        <div className="socials">
          <a className="social-chip" href="#">GitHub ↗</a>
          <a className="social-chip" href="#">LinkedIn ↗</a>
          <a className="social-chip" href="#">Twitter ↗</a>
          <a className="social-chip" href="#">Dribbble ↗</a>
        </div>
        <div className="footer-bar">
          <div>© 2026 David — Ecuador 🇪🇨</div>
          <div>{t.contact.foot}</div>
        </div>
      </div>
    </section>
  );
}

/* ===== App ===== */
function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [toast, setToast] = useState({ show: false, msg: '' });
  const t = COPY[lang];
  useReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg }), 1800);
  };

  // Tweaks
  const defaults = window.__TWEAK_DEFAULTS;
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(defaults) : [defaults, () => {}];

  useEffect(() => {
    if (!tweaks) return;
    const r = document.documentElement.style;
    r.setProperty('--primary', tweaks.primary || '#C6F24E');
    r.setProperty('--secondary', tweaks.secondary || '#2D1B69');
    r.setProperty('--tertiary', tweaks.tertiary || '#FF5A36');
    r.setProperty('--border-w', (tweaks.borderW || 3) + 'px');
    r.setProperty('--shadow-off', (tweaks.shadowOff || 6) + 'px');
    r.setProperty('--rot', (tweaks.rot || 2) + 'deg');
    r.setProperty('--display-weight', tweaks.displayWeight || 900);
    if (tweaks.dark !== undefined) setTheme(tweaks.dark ? 'dark' : 'light');
  }, [tweaks]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} theme={theme} setTheme={setTheme} />
      <Hero t={t} />
      <Work t={t} lang={lang} />
      <Scrolly t={t} lang={lang} />
      <Testimonials t={t} lang={lang} />
      <TechStrip t={t} />
      <Experience t={t} lang={lang} />
      <Approach t={t} lang={lang} />
      <Contact t={t} showToast={showToast} />
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Theme" />
          <window.TweakToggle label="Dark mode" value={!!tweaks.dark} onChange={(v) => setTweak('dark', v)} />
          <window.TweakSection label="Colors" />
          <window.TweakColor label="Primary" value={tweaks.primary} onChange={(v) => setTweak('primary', v)} />
          <window.TweakColor label="Secondary" value={tweaks.secondary} onChange={(v) => setTweak('secondary', v)} />
          <window.TweakColor label="Tertiary" value={tweaks.tertiary} onChange={(v) => setTweak('tertiary', v)} />
          <window.TweakSection label="Brutalism" />
          <window.TweakSlider label="Border thickness" value={tweaks.borderW} min={1} max={8} step={1} unit="px" onChange={(v) => setTweak('borderW', v)} />
          <window.TweakSlider label="Shadow offset" value={tweaks.shadowOff} min={0} max={16} step={1} unit="px" onChange={(v) => setTweak('shadowOff', v)} />
          <window.TweakSlider label="Rotation" value={tweaks.rot} min={0} max={8} step={0.5} unit="°" onChange={(v) => setTweak('rot', v)} />
          <window.TweakSection label="Type" />
          <window.TweakRadio
            label="Display weight"
            value={tweaks.displayWeight}
            options={[400, 600, 700, 800, 900]}
            onChange={(v) => setTweak('displayWeight', v)}
          />
        </window.TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
