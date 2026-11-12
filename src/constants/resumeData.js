export const RESUME_DATA = {
  personal: {
    name: "Grover Choque Villca",
    role: "Desarrollador Full Stack | Estudiante de Ingeniería de Sistemas",
    location: "Santa Cruz, Bolivia",
    bio: "Desarrollador Full Stack con mentalidad emprendedora e innovadora, especializado en transformar ideas de negocio y requerimientos complejos en productos digitales escalables de alto impacto. Combino visión estratégica de producto con dominio técnico en arquitecturas modernas e Inteligencia Artificial para optimizar procesos y crear soluciones disruptivas desde cero. Enfocado en la entrega continua de valor, validación rigurosa de lógica de negocio y diseño centrado en la experiencia del usuario bajo metodologías ágiles.",
    avatarUrl: "/perfil.jpg",
    resumeUrl: "/cv.pdf",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/grover-choque-villca", label: "LinkedIn Perfil" },
      { name: "GitHub", url: "https://github.com/groverchv", label: "GitHub Perfil" },
      { name: "Telegram", url: "https://t.me/muerte60", label: "Telegram Perfil" },
      { name: "Email", url: "mailto:groverchoquevillca80@gmail.com", label: "Enviar Correo" },
      { name: "Teléfono", url: "tel:+59178023575", label: "Llamar por Teléfono" }
    ]
  },
  experience: [
    {
      role: "Pasante de Desarrollo y Analítica de Datos",
      company: "DataHub Analytics",
      period: "Agosto 2026 – Actualidad",
      description: "Desarrollador Full Stack e Investigador IA. Colaboración en el desarrollo y optimización de soluciones tecnológicas orientadas al procesamiento y análisis de datos para la toma de decisiones estratégicas.",
      tags: ["Analítica de Datos", "Procesamiento de Datos", "Decisiones Estratégicas", "Full Stack"]
    },
    {
      role: "Miembro Investigador — Área de Inteligencia Artificial",
      company: "Observatorio de Inteligencia Artificial, FICCT-UAGRM",
      period: "Agosto 2026 – Actualidad",
      description: "Impulso e investigación de iniciativas tecnológicas basadas en modelos de lenguaje (LLMs) y visión computacional aplicadas a la resolución de problemáticas reales.",
      tags: ["LLMs", "Visión Computacional", "Investigación", "IA Aplicada"]
    },
    {
      role: "Desarrollador Full Stack (Proyectos Académicos)",
      company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      period: "Agosto 2025 – Junio 2026",
      description: "Construcción del ERP 'Control Financiero' con arquitectura híbrida (React 19, Supabase y Hyperledger), validando flujos de integración para asegurar el 100% de inmutabilidad en auditorías de activos. Programación de 'CoachVirtual' con MediaPipe y LLaMA 3.1, realizando pruebas de diseño responsivo con ResponsivelyApp para detección y conteo de postura en tiempo real. Diseño de una herramienta de IA para generación de código con WebSockets y Spring Boot, acortando la maquetación en 40% tras validar la comunicación y endpoints con Postman. Desarrollo de un módulo OCR para identificar matrículas vehiculares, con pruebas de rendimiento ante diferentes condiciones de iluminación.",
      tags: ["React 19", "Supabase", "Hyperledger", "MediaPipe", "LLaMA 3.1", "Spring Boot", "WebSockets", "OCR", "Postman"]
    },
    {
      role: "Desarrollador Frontend (Pasantía)",
      company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      period: "Enero 2024 – Junio 2025",
      description: "Integración del algoritmo de ruta crítica (CPM) en el Sistema Planificador Académico, validando exhaustivamente prerrequisitos y lógica de negocio para acelerar la planificación académica en un 35%. Automatización de la asignación de horarios en el sistema de Gestión Logística, diseñando pruebas para escenarios límite (edge cases) y disminuyendo en un 30% los conflictos por choques de materias.",
      tags: ["JavaScript", "Algoritmo CPM", "Planificación Académica", "Automatización", "Pruebas de Escenarios Límite"]
    }
  ],
  education: [
    {
      role: "Ingeniería de Sistemas",
      company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      period: "Cursando 9no Semestre"
    },
    {
      role: "Operador de Computadoras",
      company: "IPTAB — Santa Cruz, Bolivia",
      period: "2017"
    }
  ],
  certifications: [
    {
      role: "Scrum Foundation Professional",
      company: "CertiProf",
      period: "2024"
    },
    {
      role: "Programa Liderando con Inteligencia Artificial",
      company: "Vital Dignity Academy",
      period: "2026"
    }
  ],
  projects: [
    {
      title: "Hubzi — Aprendizaje Gamificado con IA",
      description: "Plataforma web y móvil (PWA) de aprendizaje gamificado que transforma apuntes, PDFs y audios en batallas de cartas y mapas de memoria interactivos. Integra un mentor virtual con IA basada en síntesis RAG, módulo Zen de gestión de ansiedad pre-examen y modelo de negocio SaaS freemium.",
      tags: ["PWA", "IA Generativa", "RAG", "Gamificación", "SaaS", "EdTech"],
      link: "https://hubzy.duckdns.org/",
      previewType: "iframe",
      category: "ia"
    },
    {
      title: "Control Financiero (Blockchain ERP)",
      description: "Plataforma integral de gestión y control financiero desarrollada para la Asociación de Profesionales Financieros. Cuenta con arquitectura moderna en React e integra un Ledger Blockchain que garantiza inmutabilidad, seguridad y auditoría transparente del patrimonio y transacciones.",
      tags: ["React", "Supabase", "Hyperledger Fabric", "OCI", "Blockchain"],
      link: "https://control-financiero-v1.netlify.app/",
      images: ["/app/control1.webp", "/app/control2.webp"],
      previewType: "gallery",
      category: "blockchain"
    },
    {
      title: "Sistema de Registro de Placas (UAGRM)",
      description: "Software integral para automatizar el acceso vehicular en casetas universitarias. Utiliza modelos YOLOv9 (FastALPR) y FastPlateOCR para lectura automática de placas, detección de clase general con RF-DETR y clasificación de color mediante CLIP ONNX local sobre CPU.",
      tags: ["FastAPI", "React 18", "YOLOv9", "OCR", "ONNX", "PostgreSQL"],
      link: "https://placas-uagrm.netlify.app",
      images: ["/app/placa1.webp", "/app/placa2.webp"],
      previewType: "gallery",
      category: "ia"
    },
    {
      title: "Plataforma Inmobiliaria Web3 & AR",
      description: "Ecosistema descentralizado (dApp) para la tokenización y autogestión de bienes raíces mediante Smart Contracts. Incorpora motores de Realidad Aumentada (AR) en 3D para la previsualización inmersiva de propiedades desde cualquier dispositivo.",
      tags: ["Web3", "Smart Contracts", "Realidad Aumentada", "Three.js", "Solidity"],
      link: "https://github.com/groverchv",
      images: ["/app/inmobiliaria1.webp", "/app/inmobiliaria-2.webp"],
      previewType: "gallery",
      category: "blockchain"
    },
    {
      title: "ERP Mueblería CRUZ",
      description: "Sistema de planificación de recursos empresariales para la automatización de flujos de producción, inventario y gestión de pedidos. Arquitectura de alto rendimiento basada en Laravel 12, Vue.js 3, Inertia.js y TypeScript.",
      tags: ["Laravel 12", "Vue.js 3", "Inertia.js", "TypeScript", "PostgreSQL"],
      link: "https://github.com/groverchv",
      previewType: "mockup",
      category: "web"
    },
    {
      title: "Planificador Académico Inteligente",
      description: "Sistema algorítmico basado en el Método de la Ruta Crítica (CPM) para optimizar la trayectoria de los estudiantes de la UAGRM, minimizando el tiempo de titulación mediante el cálculo dinámico de pre-requisitos.",
      tags: ["JavaScript", "Algoritmo CPM", "Optimización", "UAGRM"],
      link: "https://educacion-planificador-academico.netlify.app/",
      previewType: "iframe",
      category: "web"
    },
    {
      title: "CoachVirtual (Computer Vision)",
      description: "Aplicación web interactiva que emplea modelos de Machine Learning y Visión Computacional para el análisis biomecánico y corrección postural en tiempo real, promoviendo la salud ergonómica.",
      tags: ["Computer Vision", "MediaPipe", "LLaMA 3.1", "Machine Learning"],
      link: "https://coach-virtual.netlify.app",
      images: ["/app/coach-1.webp", "/app/coach-2.webp", "/app/coach-3.webp"],
      previewType: "gallery",
      category: "ia"
    },
    {
      title: "Generador de Arquitecturas IA",
      description: "Herramienta de automatización que utiliza NLP e IA para transpilar diagramas de clases UML directamente a código fuente estructurado (Backend y Frontend), reduciendo drásticamente el Time-to-Market.",
      tags: ["IA", "NLP", "UML", "Spring Boot", "React"],
      link: "https://generador-full-stack.netlify.app/",
      images: ["/app/generador-1.webp"],
      previewType: "gallery",
      category: "ia"
    }
  ],
  contact: {
    title: "Contacto",
    email: "groverchoquevillca80@gmail.com"
  }
};
