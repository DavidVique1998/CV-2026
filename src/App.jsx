import { useState, useEffect, useRef, useMemo } from 'react'
import {
  useTweaks, TweaksPanel, TweakSection, TweakToggle,
  TweakColor, TweakSlider, TweakRadio
} from './TweaksPanel'
import ThreeScene from './ThreeScene'

const TWEAK_DEFAULTS = {
  primary: '#C6F24E',
  secondary: '#2D1B69',
  tertiary: '#FF5A36',
  borderW: 3,
  shadowOff: 6,
  rot: 2,
  displayWeight: 900,
  dark: true,
}

/* ===== CONTENT ===== */
const COPY = {
  en: {
    nav: { work: "Work", clients: "Clients", stack: "Stack", experience: "Experience", contact: "Contact" },
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
        { k: "9+", v: "products live" },
        { k: "1", v: "springer paper" },
        { k: "EC", v: "based in Ecuador" }
      ]
    },
    work: {
      label: "/ 02 — selected work",
      title: "A small selection of recent projects.",
      desc: "From enterprise AI systems to learning platforms — here's what I've been shipping.",
      filters: ["All", "AI", "LMS", "CRM", "Web", "Paper"],
      showMore: "Show more",
      showLess: "Show less"
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
    scrolly: {
      label: "/ 04 — how I build",
      title: "One developer. Every layer.",
      desc: "Design, code, automation, infra — the same person owns all of it. Here's the process, step by step."
    },
    craft: {
      label: "/ 06 — the craft",
      title: "Code is just the surface.",
      desc: "Spirit, mind, body — three pillars I train every day. Each one feeds the others. The code is just where it shows.",
      tesseract: "Below: a tesseract — the 4D equivalent of a cube. What you see is its shadow projected into 3D, rotating through a fourth dimension you can't look at directly.",
      showMedia: "Show media",
      hideMedia: "Hide media"
    },
    paper: {
      label: "/ 07 — published research",
      title: "Shooting Range Simulator.",
      venue: "BICA 2023 · Springer, Vol. 1130",
      desc: "Real-time shooting simulator with full-body motion tracking — built with Unity 3D, Microsoft Kinect 2, OpenCV, and a custom ESP32 hardware target. Presented at the 12th Annual International Conference on Biologically Inspired Cognitive Architectures.",
      cta: "Read the paper ↗",
      slides: [
        { src: "/shooter1.png", caption: "Game view — real-time shooting simulation interface." },
        { src: "/shooter2.png", caption: "Hardware placement — Kinect 2 and ESP32 target position in the physical scene." },
        { src: "/shooter3.png", caption: "Algorithm — visual graph of the motion-tracking and shot-detection pipeline." },
      ]
    },
    contact: {
      label: "/ 08 — get in touch",
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
    nav: { work: "Proyectos", clients: "Clientes", stack: "Stack", experience: "Experiencia", contact: "Contacto" },
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
        { k: "9+", v: "productos en vivo" },
        { k: "1", v: "paper springer" },
        { k: "EC", v: "desde Ecuador" }
      ]
    },
    work: {
      label: "/ 02 — proyectos seleccionados",
      title: "Una selección de proyectos recientes.",
      desc: "Desde sistemas IA empresariales hasta plataformas de aprendizaje.",
      filters: ["Todos", "IA", "LMS", "CRM", "Web", "Paper"],
      showMore: "Ver más",
      showLess: "Ver menos"
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
    scrolly: {
      label: "/ 04 — cómo construyo",
      title: "Un desarrollador. Todas las capas.",
      desc: "Diseño, código, automatización, infra — la misma persona lo dueña todo. Así es el proceso."
    },
    craft: {
      label: "/ 06 — el oficio",
      title: "El código es solo la superficie.",
      desc: "Espíritu, mente y cuerpo — tres pilares que entreno cada día. Cada uno alimenta a los demás. El código es solo donde se nota.",
      tesseract: "Abajo: un teseracto — el equivalente 4D de un cubo. Lo que ves es su sombra proyectada en 3D, girando en una cuarta dimensión que no puedes mirar directamente.",
      showMedia: "Mostrar media",
      hideMedia: "Ocultar media"
    },
    paper: {
      label: "/ 07 — investigación publicada",
      title: "Simulador de campo de tiro.",
      venue: "BICA 2023 · Springer, Vol. 1130",
      desc: "Simulador de tiro en tiempo real con rastreo corporal completo — construido con Unity 3D, Microsoft Kinect 2, OpenCV y hardware ESP32 personalizado. Presentado en la 12ª Conferencia Internacional Anual de Arquitecturas Cognitivas de Inspiración Biológica.",
      cta: "Leer el paper ↗",
      slides: [
        { src: "/shooter1.png", caption: "Vista del juego — interfaz del simulador de tiro en tiempo real." },
        { src: "/shooter2.png", caption: "Ubicación del hardware — posición del Kinect 2 y el objetivo ESP32 en la escena física." },
        { src: "/shooter3.png", caption: "Algoritmo — gráfica visual del pipeline de rastreo de movimiento y detección de disparo." },
      ]
    },
    contact: {
      label: "/ 08 — contáctame",
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
}

const PROJECTS = [
  {
    id: 1, title: "Benefit Match Center", cat: "Web",
    desc: { en: "Section 125 benefits platform — React 19 SPA on AWS S3+CloudFront, two serverless Lambda functions for form handling and a streaming AI chat widget, with Resend email delivery.", es: "Plataforma de beneficios Section 125 — SPA React 19 en AWS S3+CloudFront, dos funciones Lambda serverless para formularios y chat IA en streaming, con entrega de email vía Resend." },
    tech: ["React 19", "AWS Lambda", "SST", "CloudFront", "Claude API"],
    color: "#0F1A2E", textColor: "#C49B3C", link: "https://benefitmatchcenter.com/"
  },
  {
    id: 2, title: "UMI — Unified Meeting Intel", cat: "AI",
    desc: { en: "Multi-platform meeting integration for Google Meet, Zoom, and Teams — transcription analysis, third-party transcript uploads, AI chat flows, and real-time statistics.", es: "Integración de reuniones multi-plataforma (Meet, Zoom, Teams) con análisis de transcripciones, carga de transcripts externos, flujos de chat IA y estadísticas en tiempo real." },
    tech: ["NestJS", "Next.js", "AWS Lambda", "OpenAI", "PostgreSQL"],
    color: "#1C1D20", textColor: "#6366F1", link: "#"
  },
  {
    id: 3, title: "Commission Tracker (CT)", cat: "AI",
    desc: { en: "Serverless analyzer for 52 companies with dynamic prompts, PDF OCR, and queue-based flows for commission data validation. Deployed on AWS Lambda with GitHub Actions CI/CD.", es: "Analizador serverless para 52 empresas con prompts dinámicos, OCR de PDF y flujos de cola para validación de comisiones. Desplegado en AWS Lambda con CI/CD en GitHub Actions." },
    tech: ["AWS Lambda", "OpenAI", "OCR", "GitHub Actions", "Node.js"],
    color: "#121315", textColor: "#0EA5E9", link: "#"
  },
  {
    id: 4, title: "N8N Relatividad IA", cat: "AI",
    desc: { en: "Multiple self-hosted N8N chatbots, one per customer — orchestrating LLM conversations with isolated pipelines and guardrails.", es: "N8N multi-cliente auto-hospedado con chatbots aislados por cliente que orquestan conversaciones LLM." },
    tech: ["N8N", "Docker", "LangChain", "Evolution API"],
    color: "#000000", textColor: "#ffffff", link: "#"
  },
  {
    id: 5, title: "Atiende — CRM WhatsApp", cat: "CRM",
    desc: { en: "WhatsApp ticketing CRM wired into N8N automations — full customer lifecycle from first message to resolution.", es: "CRM de tickets WhatsApp conectado a N8N — ciclo completo del cliente desde el primer mensaje hasta la resolución." },
    tech: ["Next.js", "N8N", "Appwrite", "WhatsApp API"],
    color: "#C6F24E", textColor: "#111111", link: "#"
  },
  {
    id: 6, title: "Qubex LLM", cat: "AI",
    desc: { en: "A cutting-edge assistant exposing large language models through a polished chat UI.", es: "Asistente de punta que expone LLMs a través de una UI de chat pulida." },
    tech: ["Next.js", "React", "OpenAI", "Vercel"],
    color: "#0B1121", textColor: "#A78BFA", link: "https://qubex-global.vercel.app/"
  },
  {
    id: 7, title: "Fenix Conocimiento", cat: "LMS",
    desc: { en: "Learning management system for Fenix's internal knowledge base — custom theme, course catalog, and ChatBot LLM integration.", es: "LMS para la base de conocimiento interna de Fenix — tema personalizado, catálogo de cursos e integración ChatBot LLM." },
    tech: ["Moodle", "PHP", "MySQL", "Grafana"],
    color: "#111111", textColor: "#ffffff", link: "https://conocimiento.mysistemafenix.com"
  },
  {
    id: 8, title: "Taurhus Capacitaciones", cat: "LMS",
    desc: { en: "Full LMS for online courses with custom theme, enrollment flows, certificates, and Laravel Mix Vue.js integrations.", es: "LMS completo para cursos en línea con tema personalizado, flujos de matrícula, certificados e integraciones Laravel Mix Vue.js." },
    tech: ["Moodle", "Laravel", "Vue.js", "MySQL", "PHP"],
    color: "#2D1B69", textColor: "#ffffff", link: "https://taurhus.com.ec"
  },
  {
    id: 9, title: "Shooting Range Simulator", cat: "Paper",
    desc: { en: "Real-time shooting simulator with body tracking — Unity 3D, Kinect 2, OpenCV, and ESP32 hardware integration. Published at BICA 2023 (Springer, Volume 1130).", es: "Simulador de tiro en tiempo real con rastreo corporal — Unity 3D, Kinect 2, OpenCV e integración ESP32. Publicado en BICA 2023 (Springer, Volumen 1130)." },
    tech: ["Unity", "OpenCV", "Kinect 2", "ESP32", "Python"],
    color: "#111111", textColor: "#C6F24E", link: "#paper"
  }
]

const TESTIMONIALS = [
  {
    img: "/eli.jpeg",
    initials: "ET",
    name: "Eli Tabala",
    role: "Pinecrest Consulting",
    quote: {
      en: "What sets David apart is that he thinks like a product owner and executes like an engineer. Frontend, backend, infrastructure, automations — he handled all of it without ever needing to split the work. Reliable, fast, and genuinely invested in the outcome.",
      es: "Lo que distingue a David es que piensa como dueño de producto y ejecuta como ingeniero. Frontend, backend, infraestructura, automatizaciones — lo manejó todo sin necesidad de dividir el trabajo. Confiable, rápido y genuinamente comprometido con el resultado."
    }
  },
  {
    img: "/shaine.jpeg",
    initials: "SR",
    name: "Shaine Rucker",
    role: "Pinecrest Consulting",
    quote: {
      en: "David doesn't wait to be told what to build — he reads the requirements, proposes the architecture, and ships it. He took our product from a set of specs to a live AWS deployment faster than any developer I've worked with. The kind of engineer who owns the whole thing end to end.",
      es: "David no espera que le digan qué construir — lee los requisitos, propone la arquitectura y lo lanza. Llevó nuestro producto de unas especificaciones a un despliegue en vivo en AWS más rápido que cualquier desarrollador con el que haya trabajado. El tipo de ingeniero que dueña todo de punta a punta."
    }
  },
  {
    img: "/emilio.jpg",
    initials: "ER",
    name: "Emilio Rosado",
    role: "CEO, Relatividad IA",
    quote: {
      en: "David automated processes at Relatividad IA that we thought would require a full team. In weeks he had N8N workflows handling WhatsApp conversations, classifying leads, and routing support tickets — completely hands-off. The system he built became the backbone of our entire operation.",
      es: "David automatizó procesos en Relatividad IA que pensábamos requerirían un equipo completo. En semanas tenía workflows de N8N manejando conversaciones de WhatsApp, clasificando leads y enrutando tickets — completamente autónomo. El sistema que construyó se convirtió en la columna vertebral de nuestra operación."
    }
  },
  {
    img: "/wendy.jpeg",
    initials: "WE",
    name: "Wendy Espósito",
    role: "CEO, Taurhus Capacitaciones",
    quote: {
      en: "Working with David has been an enriching experience. His expertise in full-stack development, coupled with his commitment to meeting deadlines and exceeding expectations, truly set him apart. He was instrumental in building a Learning Management System with Moodle.",
      es: "Trabajar con David ha sido una experiencia enriquecedora. Su experiencia en full-stack y su compromiso con las fechas lo distinguen. Fue fundamental construyendo un LMS con Moodle."
    }
  },
  {
    img: "/maritza.png",
    initials: "MA",
    name: "Maritza Andrade",
    role: "Project Manager, Innovar Digital",
    quote: {
      en: "David is an exceptional developer and educator with a unique ability to turn ideas into reality. While working at Algoritmics, we taught programming to kids, creating a positive and engaging learning environment. His creativity and technical expertise make him an incredible asset.",
      es: "David es un desarrollador y educador excepcional con la habilidad única de convertir ideas en realidad. En Algoritmics enseñamos programación a niños creando un ambiente positivo. Su creatividad lo hacen un activo increíble."
    }
  },
  {
    img: "/jorge.jpg",
    initials: "JA",
    name: "Jorge Anchatuña",
    role: "CEO, Fenix Corp",
    quote: {
      en: "Collaborating with David was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Together we innovated in enterprise AI systems and knowledge platforms, where his expertise truly shone.",
      es: "Colaborar con David fue un placer absoluto. Su profesionalismo, puntualidad y dedicación a resultados excepcionales fueron evidentes durante todo el proyecto. Juntos innovamos en sistemas IA empresariales y plataformas de conocimiento."
    }
  }
]

const STACK = ["AWS Lambda", "Docker", "GitHub Actions", "Next.js", "React", "Node.js", "NestJS", "N8N", "LangChain", "OpenAI", "PostgreSQL", "Qdrant", "MongoDB", "Unity", "Cursor", "Moodle"]

const EXPERIENCES = [
  {
    badge: "PC",
    title: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    where: "Pinecrest Consulting",
    location: "United States",
    period: "Sept. 2025 — Present",
    desc: {
      en: "Built CT (Commission Tracker) and UMI (Unified Meeting Integrated) as serverless solutions on AWS Lambda with GitHub Actions CI/CD. CT analyzes 52 companies using dynamic prompts, OCR, and queue-based flows. UMI integrates Meet, Zoom, and Teams with AI transcription and chat. Also implemented automated social media post scheduling via Metricool API.",
      es: "Desarrollé CT (Commission Tracker) y UMI (Unified Meeting Integrated) como soluciones serverless en AWS Lambda con CI/CD en GitHub Actions. CT analiza 52 empresas con prompts dinámicos, OCR y flujos de cola. UMI integra Meet, Zoom y Teams con transcripción IA y chat. Implementé también publicación automática de redes sociales vía Metricool API."
    }
  },
  {
    badge: "D2",
    title: { en: "AI / Web Bot Developer", es: "Desarrollador AI / Web Bot" },
    where: "D2V",
    location: "Germany",
    period: "Aug. 2025 — Oct. 2025",
    desc: {
      en: "RAG Voice Chat, Notion–Mistral automations, Oura Ring API integrations, and custom AI tooling. Projects handled under strict NDA.",
      es: "RAG Voice Chat, automatizaciones Notion–Mistral, integraciones con Oura Ring API y tooling IA personalizado. Proyectos bajo estricta NDA."
    }
  },
  {
    badge: "RI",
    title: { en: "Full Stack / DevOps Developer", es: "Desarrollador Full Stack / DevOps" },
    where: "Relatividad IA",
    location: "Quito, Ecuador",
    period: "Dec. 2024 — Aug. 2025",
    desc: {
      en: "Developed a Logistic Tracker SaaS and WhatsApp CRM platform — N8N orchestration, Evolution API, AWS ECS deployment, and multi-tenant architecture.",
      es: "Desarrollé un SaaS de rastreo logístico y plataforma CRM WhatsApp — orquestación N8N, Evolution API, despliegue en AWS ECS y arquitectura multi-tenant."
    }
  },
  {
    badge: "FC",
    title: { en: "Full Stack / DevOps Developer", es: "Desarrollador Full Stack / DevOps" },
    where: "Fenix Corp",
    location: "Latacunga, Ecuador",
    period: "May 2024 — Dec. 2024",
    desc: {
      en: "Deployed a ChatBot LLM system, Grafana monitoring dashboards, Apache Guacamole remote access, and Moodle LMS for internal knowledge management.",
      es: "Desplegué un sistema ChatBot LLM, dashboards de monitoreo en Grafana, acceso remoto con Apache Guacamole y Moodle para gestión del conocimiento interno."
    }
  },
  {
    badge: "AL",
    title: { en: "Programming Instructor", es: "Instructor de Programación" },
    where: "Algorithmics International School",
    location: "Latacunga, Ecuador",
    period: "Sept. 2023 — Oct. 2024",
    desc: {
      en: "Taught Python, visual programming, and game design to children and teens — building structured curricula and fostering computational thinking in a bilingual environment.",
      es: "Enseñé Python, programación visual y diseño de videojuegos a niños y adolescentes — diseñando currículos estructurados y fomentando el pensamiento computacional en un entorno bilingüe."
    }
  },
  {
    badge: "TC",
    title: { en: "Full Stack / DevOps Developer", es: "Desarrollador Full Stack / DevOps" },
    where: "Taurhus Capacitaciones",
    location: "Illuchi, Ecuador",
    period: "Apr. 2023 — May 2024",
    desc: {
      en: "Built and deployed a Moodle-based LMS with Laravel Mix Vue.js integrations, custom enrollment flows, certificates, and API connectors for course management.",
      es: "Construí y desplegué un LMS basado en Moodle con integraciones Laravel Mix Vue.js, flujos de matrícula personalizados, certificados y conectores API."
    }
  },
  {
    badge: "ES",
    title: { en: "Game Engine / AI Developer", es: "Desarrollador Game Engine / IA" },
    where: "ESPE · Taurhus Capacitaciones",
    location: "Belisario Quevedo, Ecuador",
    period: "Aug. 2021 — Apr. 2023",
    desc: {
      en: "Designed and built a real-time shooting range simulator using Unity, OpenCV body tracking, Kinect 2, and ESP32 hardware. Research published at BICA 2023 (Springer, Volume 1130).",
      es: "Diseñé y construí un simulador de polígono de tiro en tiempo real con Unity, rastreo corporal OpenCV, Kinect 2 y hardware ESP32. Investigación publicada en BICA 2023 (Springer, Volumen 1130)."
    }
  }
]

const SCROLLY_STEPS = [
  {
    num: "01",
    title: { en: "Read the brief, own the problem", es: "Lee el brief, dueña el problema" },
    body: { en: "No PM in the middle. I read the requirements, map the data model, identify edge cases, and propose the stack — before writing a single line.", es: "Sin PM de por medio. Leo los requisitos, mapeo el modelo de datos, identifico casos borde y propongo el stack — antes de escribir una línea." },
    stat: { en: "3–5 days · discovery", es: "3–5 días · discovery" },
    project: { en: "↳ BMC — The client delivered a structured requirements doc covering Section 125 benefits logic, the chat widget flow, and the email capture form. I read it, modeled the data, proposed the stack (React + Lambda + SST), and started building the same week.", es: "↳ BMC — El cliente entregó un documento estructurado con la lógica de beneficios Section 125, el flujo del chat widget y el formulario de captura. Lo leí, modelé los datos, propuse el stack (React + Lambda + SST) y empecé a construir esa misma semana." }
  },
  {
    num: "02",
    title: { en: "Design, build, wire — in parallel", es: "Diseña, construye, conecta — en paralelo" },
    body: { en: "UI, backend, and API contracts move at the same time. Components are built as the system takes shape — no hand-off, no waiting for approvals.", es: "UI, backend y contratos de API avanzan al mismo tiempo. Los componentes se construyen a medida que el sistema toma forma — sin handoffs ni esperas." },
    stat: { en: "2–4 weeks · build", es: "2–4 semanas · construcción" },
    project: { en: "↳ UMI — Next.js frontend, NestJS backend, PostgreSQL, S3, and OpenAI all built in the same sprint. The recording upload UI, the transcription pipeline, and the AI chat interface shipped together — no layer waited for another.", es: "↳ UMI — Frontend en Next.js, backend en NestJS, PostgreSQL, S3 y OpenAI construidos en el mismo sprint. La UI de carga, el pipeline de transcripción y el chat IA salieron juntos — ninguna capa esperó a otra." }
  },
  {
    num: "03",
    title: { en: "Automate what repeats", es: "Automatiza lo que se repite" },
    body: { en: "Any manual step that runs more than once gets automated. N8N workflows, AI agents, OCR pipelines, webhooks — if a human is doing it on a schedule, a machine should do it instead.", es: "Cualquier paso manual que se repita más de una vez se automatiza. N8N, agentes IA, pipelines OCR, webhooks — si un humano lo hace con regularidad, una máquina debería hacerlo." },
    stat: { en: "−80% manual tasks", es: "−80% tareas manuales" },
    project: { en: "↳ Relatividad IA + CT — At Relatividad IA, N8N workflows replaced a support team's daily repetition: WhatsApp messages classified, routed, and resolved automatically. At CT, PDF commission reports flow through Tesseract OCR → OpenAI normalization → GitHub Actions — what took hours now takes seconds.", es: "↳ Relatividad IA + CT — En Relatividad IA, workflows de N8N reemplazaron la repetición diaria del equipo de soporte: mensajes de WhatsApp clasificados, enrutados y resueltos automáticamente. En CT, los reportes PDF de comisiones pasan por OCR → OpenAI → GitHub Actions — lo que tardaba horas ahora tarda segundos." }
  },
  {
    num: "04",
    title: { en: "Deploy it. Own it.", es: "Despliégalo. Dueñalo." },
    body: { en: "The same person who designed and built it ships it to production. SST, GitHub Actions, AWS Lambda — one command, zero downtime, no handoff to a DevOps team.", es: "La misma persona que diseñó y construyó lo despliega a producción. SST, GitHub Actions, AWS Lambda — un comando, cero downtime, sin pasarle el testigo a nadie." },
    stat: { en: "Live · zero downtime", es: "En vivo · cero downtime" },
    project: { en: "↳ UMI + BMC — Both run on AWS Lambda via SST v4. One `sst deploy` ships the full stack: API, frontend, database migrations, scheduled jobs. GitHub Actions handles CI. The developer who built it monitors it and fixes it — no tickets, no handoffs.", es: "↳ UMI + BMC — Ambos corren en AWS Lambda con SST v4. Un `sst deploy` lanza todo el stack: API, frontend, migraciones, jobs. GitHub Actions maneja el CI. El mismo desarrollador que lo construyó lo monitorea y lo arregla — sin tickets, sin pasos de mano." }
  }
]

const CRAFT_STEPS = [
  {
    num: "01",
    title: { en: "Body — Built for the finish line", es: "Cuerpo — Hecho para la meta" },
    body: { en: "Triathlon training — swim, bike, run — works the same loop as coding: push hard, recover right, go again. The discipline that gets you to the finish line is the same one that ships clean software.", es: "El triatlón — nada, bici, carrera — corre con el mismo ciclo que el código: empujar fuerte, recuperarse bien, volver. La disciplina que te lleva a la meta es la misma que te lleva al deploy." },
    stat: { en: "Swim · Bike · Run", es: "Nada · Bici · Carrera" },
    photo: { type: "embed", permalink: "https://www.instagram.com/p/DWNJlxEjm_3/", pos: "photo-tr" }
  },
  {
    num: "02",
    title: { en: "Mind — Trained by the craft", es: "Mente — Entrenada por el oficio" },
    body: { en: "Every hard project is a mental rep. Deep study, hard problems, deliberate practice. Systems thinking and clean architecture aren't talent — they're trained, same as any muscle.", es: "Cada proyecto difícil es una repetición mental. Estudio profundo, problemas duros, práctica deliberada. El pensamiento sistémico y la arquitectura limpia no son talento — se entrenan, como cualquier músculo." },
    stat: { en: "Study · Build · Reflect", es: "Estudia · Construye · Reflexiona" },
    photo: { type: "embed", permalink: "https://www.instagram.com/reel/DKuQIPAMqzG/", pos: "photo-bl" }
  },
  {
    num: "03",
    title: { en: "Spirit — Son of God", es: "Espíritu — Hijo de Dios" },
    body: { en: "I start every morning knowing who I am. Faith isn't separate from the work — it's what keeps me grounded under deadlines and building from purpose, not pressure.", es: "Comienzo cada mañana sabiendo quién soy. La fe no está separada del trabajo — es lo que me mantiene firme bajo los plazos y que me hace construir desde el propósito, no desde el miedo." },
    stat: { en: "Faith · Purpose · Peace", es: "Fe · Propósito · Paz" },
    photo: { type: "embed", permalink: "https://www.instagram.com/p/DJ_FTzWt34-/", pos: "photo-br-adj" }
  }
]

/* ===== Reveal hook ===== */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ===== Cursor sticker ===== */
function CursorSticker({ text, containerRef }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const parent = containerRef.current
    if (!el || !parent) return
    let x = 0, y = 0, tx = 0, ty = 0, raf
    const onMove = (e) => {
      const r = parent.getBoundingClientRect()
      tx = e.clientX - r.left
      ty = e.clientY - r.top
    }
    const loop = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      if (el) el.style.left = x + 'px'
      if (el) el.style.top = y + 'px'
      raf = requestAnimationFrame(loop)
    }
    parent.addEventListener('mousemove', onMove)
    tx = parent.offsetWidth * 0.78
    ty = 180
    loop()
    return () => {
      parent.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [containerRef])
  return (
    <div ref={ref} className="hero-sticker">
      {text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
    </div>
  )
}

/* ===== Components ===== */
function Nav({ lang, setLang, t, theme, setTheme }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <span className="nav-logo-mark">D</span>
        <span className="nav-logo-text">David<span className="nav-logo-dot">.dev</span></span>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-link">{t.nav.work}</a>
        <a href="#scrolly" className="nav-link">Case</a>
        <a href="#clients" className="nav-link">{t.nav.clients}</a>
        <a href="#stack" className="nav-link">{t.nav.stack}</a>
        <a href="#experience" className="nav-link">{t.nav.experience}</a>
        <a href="#contact" className="nav-link">{t.nav.contact}</a>
      </div>
      <div className="nav-actions">
        <button
          className="nb-pill"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{ cursor: 'pointer', background: 'var(--primary)', color: 'var(--on-primary)' }}
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
  )
}

function Hero({ t }) {
  const ref = useRef(null)
  return (
    <section id="top" className="hero wrap" ref={ref}>
      <div className="hero-scribble">
        <img src="/david.JPG" alt="David" className="hero-photo" />
      </div>
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
  )
}

function Work({ t, lang }) {
  const defaultFilter = lang === 'es' ? "Todos" : "All"
  const [filter, setFilter] = useState(defaultFilter)
  const [visibleCount, setVisibleCount] = useState(4)
  useEffect(() => { setFilter(lang === 'es' ? "Todos" : "All") }, [lang])
  const filterMap = { "All": "All", "Todos": "All", "AI": "AI", "IA": "AI", "LMS": "LMS", "CRM": "CRM", "Web": "Web", "Paper": "Paper" }
  const shown = useMemo(() => {
    const key = filterMap[filter] || "All"
    return key === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === key)
  }, [filter])

  const handleFilter = (f) => { setFilter(f); setVisibleCount(4) }
  const visible = shown.slice(0, visibleCount)
  const hasMore = visibleCount < shown.length

  useEffect(() => {
    let io
    const raf = requestAnimationFrame(() => {
      const rows = document.querySelectorAll('.project-row.reveal:not(.in)')
      if (!rows.length) return
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
      }, { threshold: 0.05 })
      rows.forEach(el => io.observe(el))
    })
    return () => { cancelAnimationFrame(raf); io?.disconnect() }
  }, [shown, visibleCount])

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
            <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => handleFilter(f)}>{f}</button>
          ))}
        </div>
        <div>
          {visible.map((p, i) => (
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
              <a href={p.link} target={p.link.startsWith('#') ? '_self' : '_blank'} rel="noopener noreferrer" className="project-link" aria-label={`Open ${p.title}`}>↗</a>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="show-more-wrap">
            <button className="nb-btn show-more-btn" onClick={() => setVisibleCount(v => v + 4)}>
              ↓ {t.work.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function Testimonials({ t, lang }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 8000)
    return () => clearInterval(id)
  }, [])
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length)

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
                    {tm.img
                      ? <img src={tm.img} alt={tm.name} className="testimonial-avatar testimonial-avatar-photo" />
                      : <div className="testimonial-avatar">{tm.initials}</div>
                    }
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
  )
}

function TechStrip() {
  const items = [...STACK, ...STACK]
  return (
    <section id="stack" className="tech-strip">
      <div className="marquee">
        {items.map((s, i) => (
          <div key={i} className="marquee-item"><span className="dot"></span>{s}</div>
        ))}
      </div>
    </section>
  )
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
                <div className="meta">{e.where}{e.location ? ` · ${e.location}` : ''} · {e.period}</div>
                <p>{e.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function Scrolly({ t, lang }) {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setActive(SCROLLY_STEPS.length - 1); return }

    const isMobile = () => window.innerWidth <= 900
    // On mobile sticky takes ~47vh from top; focal point = center of remaining text area
    const getFocal = () => isMobile() ? window.innerHeight * 0.73 : window.innerHeight * 0.5
    const getMargin = () => isMobile() ? '-10% 0px -27% 0px' : '-50% 0px -50% 0px'

    const io = new IntersectionObserver(() => {
      const focal = getFocal()
      let best = { idx: -1, dist: Infinity }
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const dist = Math.abs(center - focal)
        if (dist < best.dist) best = { idx: i, dist }
      })
      if (best.idx >= 0) setActive(best.idx)
    }, { rootMargin: getMargin(), threshold: 0 })

    stepRefs.current.forEach(el => el && io.observe(el))

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const el = containerRef.current
        if (el) {
          const r = el.getBoundingClientRect()
          const vh = window.innerHeight
          const total = r.height - vh
          const done = Math.max(0, Math.min(1, -r.top / total))
          setProgress(done)
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

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
                {s.project && <div className="step-project">{s.project[lang]}</div>}
              </div>
            ))}
          </div>
          <div className="scrolly-sticky">
            <div className={`scrolly-viz s${active}`}>
              <div className="scrolly-progress" style={{ transform: `scaleX(${progress})` }}></div>
              <div className={`layer ${active === 0 ? 'active' : ''}`}>
                <div className="layer-wire">
                  <div className="block"></div>
                  <div className="block body"><div></div><div></div><div></div><div></div></div>
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
  )
}

const CARD_POS = ['card-bl', 'card-tr', 'card-br']

function igEmbedHTML(permalink) {
  return `<blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:0;box-shadow:none;margin:0;padding:0;width:100%;"><div style="padding:16px;"><a href="${permalink}" style="background:#FFFFFF;line-height:0;padding:0 0;text-align:center;text-decoration:none;width:100%;" target="_blank"><div style="display:flex;flex-direction:row;align-items:center;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:40px;margin-right:14px;width:40px;"></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:100px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:60px;"></div></div></div><div style="padding:19% 0;"></div><div style="display:block;height:50px;margin:0 auto 12px;width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top:8px;"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:550;line-height:18px;">View this post on Instagram</div></div><div style="padding:12.5% 0;"></div><div style="display:flex;flex-direction:row;margin-bottom:14px;align-items:center;"><div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(0px) translateY(7px);"></div><div style="background-color:#F4F4F4;height:12.5px;transform:rotate(-45deg) translateX(3px) translateY(1px);width:12.5px;flex-grow:0;margin-right:14px;margin-left:2px;"></div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(9px) translateY(-18px);"></div></div><div style="margin-left:8px;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:20px;width:20px;"></div><div style="width:0;height:0;border-top:2px solid transparent;border-left:6px solid #f4f4f4;border-bottom:2px solid transparent;transform:translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left:auto;"><div style="width:0px;border-top:8px solid #F4F4F4;border-right:8px solid transparent;transform:translateY(16px);"></div><div style="background-color:#F4F4F4;flex-grow:0;height:12px;width:16px;transform:translateY(-4px);"></div><div style="width:0;height:0;border-top:8px solid #F4F4F4;border-left:8px solid transparent;transform:translateY(-4px) translateX(8px);"></div></div></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;margin-bottom:24px;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:224px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:144px;"></div></div></a></div></blockquote>`
}

function CraftInstagram({ permalink, posClass, visible }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!document.getElementById('ig-embed-js')) {
      const s = document.createElement('script')
      s.id = 'ig-embed-js'
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  useEffect(() => {
    if (!visible || !ref.current) return

    // Wipe whatever IG left (iframe) and restore fresh blockquote
    ref.current.innerHTML = igEmbedHTML(permalink)

    // Retry until embed.js is ready
    const tryProcess = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      } else {
        setTimeout(tryProcess, 250)
      }
    }
    tryProcess()
  }, [visible, permalink])

  // No dangerouslySetInnerHTML — ref owns the DOM entirely
  return (
    <div
      ref={ref}
      className={`craft-insta ${posClass} ${visible ? 'visible' : ''}`}
    />
  )
}

function Craft({ t, lang }) {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showMedia, setShowMedia] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onScroll = () => {
      const el = scrollRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      const total = el.offsetHeight - window.innerHeight
      const p = total > 0 ? Math.min(1, scrolled / total) : 0
      setProgress(p)
      setActive(Math.min(CRAFT_STEPS.length - 1, Math.floor(p * CRAFT_STEPS.length)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="craft" className="craft">
      <div className="wrap">
        <div className="craft-head sec-head reveal">
          <div>
            <div className="section-label">{t.craft.label}</div>
            <h2 className="display sec-title">{t.craft.title}</h2>
          </div>
          <p className="sec-desc">{t.craft.desc}</p>
          <p className="craft-tesseract-hint">{t.craft.tesseract}</p>
        </div>
      </div>
      <div className="wrap craft-scroll-space" ref={scrollRef}>
        <div className="craft-sticky-full">
          <div className="craft-scroll-bar">
            <div className="craft-scroll-fill" style={{ transform: `scaleX(${progress})` }} />
          </div>
          <img src="/signature.png" alt="" className="craft-signature" aria-hidden="true" />
          <ThreeScene step={active} />
          {CRAFT_STEPS.map((s, i) => (
            <div key={i} className={`craft-card ${CARD_POS[i]} ${active === i ? 'visible' : ''}`}>
              <div className="craft-card-num">{s.num} / 03</div>
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
              <div className="craft-card-stat">{s.stat[lang]}</div>
            </div>
          ))}
          {CRAFT_STEPS.map((s, i) => {
            if (!s.photo) return null
            if (s.photo.type === 'embed') {
              return (
                <CraftInstagram
                  key={`photo-${i}`}
                  permalink={s.photo.permalink}
                  posClass={s.photo.pos}
                  visible={showMedia && active === i}
                />
              )
            }
            return (
              <div
                key={`photo-${i}`}
                className={`craft-photo ${s.photo.pos} ${showMedia && active === i ? 'visible' : ''}`}
                style={{ '--photo-rot': s.photo.rot }}
              >
                <img src={s.photo.src} alt="" />
              </div>
            )
          })}
          <div className="craft-steps-indicator">
            {CRAFT_STEPS.map((_, i) => (
              <div key={i} className={`craft-dot ${active === i ? 'active' : ''}`} />
            ))}
          </div>
          <button
            className="craft-media-btn nb-btn"
            onClick={() => setShowMedia(v => !v)}
          >
            {showMedia ? t.craft.hideMedia : t.craft.showMedia}
          </button>
        </div>
      </div>
    </section>
  )
}

function Paper({ t }) {
  const [slide, setSlide] = useState(0)
  const slides = t.paper.slides
  const prev = () => setSlide(s => (s - 1 + slides.length) % slides.length)
  const next = () => setSlide(s => (s + 1) % slides.length)

  return (
    <section id="paper" className="paper-section">
      <div className="wrap">
        <div className="paper-top reveal">
          <div className="paper-top-text">
            <div className="section-label">{t.paper.label}</div>
            <h2 className="display sec-title">{t.paper.title}</h2>
            <p className="sec-desc">{t.paper.desc}</p>
          </div>
          <div className="paper-carousel">
            <div className="paper-carousel-img-wrap">
              <img
                key={slide}
                src={slides[slide].src}
                alt={slides[slide].caption}
                className="paper-carousel-img"
              />
            </div>
            <p className="paper-carousel-caption">{slides[slide].caption}</p>
            <div className="paper-carousel-nav">
              <button className="paper-nav-btn" onClick={prev} aria-label="Previous">←</button>
              <div className="paper-carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`paper-dot${i === slide ? ' active' : ''}`}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button className="paper-nav-btn" onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </div>
        <div className="paper-card reveal">
          <div className="paper-card-inner">
            <div className="paper-meta">
              <span className="paper-venue nb-pill">{t.paper.venue}</span>
            </div>
            <div className="paper-tech">
              {["Unity 3D", "Kinect 2", "OpenCV", "ESP32", "Python"].map((tech, i) => (
                <span key={i} className="nb-pill">{tech}</span>
              ))}
            </div>
            <a
              href="https://doi.org/10.1007/978-3-031-50381-8_99"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn paper-cta"
            >
              {t.paper.cta}
            </a>
          </div>
          <div className="paper-visual">
            <div className="paper-visual-inner">
              <div className="paper-doi mono">DOI: 10.1007/978-3-031-50381-8_99</div>
              <div className="paper-year">2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ t, showToast }) {
  const email = "albert98.developer@gmail.com"
  const phone = "+593 992 520 223"
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => showToast(t.contact.copied))
  }
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
          <a className="social-chip" href="https://github.com/DavidVique1998" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="social-chip" href="https://www.linkedin.com/in/david-vique-b29941206" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="social-chip" href="https://www.instagram.com/david_vique98/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <div className="footer-bar">
          <div>© 2026 David — Ecuador 🇪🇨</div>
          <div>{t.contact.foot}</div>
        </div>
      </div>
    </section>
  )
}

/* ===== App ===== */
export default function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')
  const [toast, setToast] = useState({ show: false, msg: '' })
  const t = COPY[lang]
  useReveal()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const showToast = (msg) => {
    setToast({ show: true, msg })
    setTimeout(() => setToast({ show: false, msg }), 1800)
  }

  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS)

  useEffect(() => {
    if (!tweaks) return
    const r = document.documentElement.style
    r.setProperty('--primary', tweaks.primary || '#C6F24E')
    r.setProperty('--secondary', tweaks.secondary || '#2D1B69')
    r.setProperty('--tertiary', tweaks.tertiary || '#FF5A36')
    r.setProperty('--border-w', (tweaks.borderW || 3) + 'px')
    r.setProperty('--shadow-off', (tweaks.shadowOff || 6) + 'px')
    r.setProperty('--rot', (tweaks.rot || 2) + 'deg')
    r.setProperty('--display-weight', tweaks.displayWeight || 900)
    if (tweaks.dark !== undefined) setTheme(tweaks.dark ? 'dark' : 'light')
  }, [tweaks])

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} theme={theme} setTheme={setTheme} />
      <Hero t={t} />
      <Work t={t} lang={lang} />
      <Scrolly t={t} lang={lang} />
      <Testimonials t={t} lang={lang} />
      <TechStrip />
      <Experience t={t} lang={lang} />
      <Craft t={t} lang={lang} />
      <Paper t={t} />
      <Contact t={t} showToast={showToast} />
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={!!tweaks.dark} onChange={(v) => setTweak('dark', v)} />
        <TweakSection label="Colors" />
        <TweakColor label="Primary" value={tweaks.primary} onChange={(v) => setTweak('primary', v)} />
        <TweakColor label="Secondary" value={tweaks.secondary} onChange={(v) => setTweak('secondary', v)} />
        <TweakColor label="Tertiary" value={tweaks.tertiary} onChange={(v) => setTweak('tertiary', v)} />
        <TweakSection label="Brutalism" />
        <TweakSlider label="Border thickness" value={tweaks.borderW} min={1} max={8} step={1} unit="px" onChange={(v) => setTweak('borderW', v)} />
        <TweakSlider label="Shadow offset" value={tweaks.shadowOff} min={0} max={16} step={1} unit="px" onChange={(v) => setTweak('shadowOff', v)} />
        <TweakSlider label="Rotation" value={tweaks.rot} min={0} max={8} step={0.5} unit="°" onChange={(v) => setTweak('rot', v)} />
        <TweakSection label="Type" />
        <TweakRadio label="Display weight" value={tweaks.displayWeight} options={[400, 600, 700, 800, 900]} onChange={(v) => setTweak('displayWeight', v)} />
      </TweaksPanel>
    </>
  )
}
