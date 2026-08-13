export const RESUME_DATA = {
  personal: {
    name: "Grover Choque Villca",
    role: "Desarrollador Full Stack | Estudiante de Ingeniería de Sistemas",
    location: "Santa Cruz, Bolivia",
    bio: "Desarrollador Full Stack e Ingeniero de Sistemas en formación en la Universidad Autónoma Gabriel René Moreno (UAGRM). Especializado en la arquitectura e implementación de plataformas web y móviles de alto rendimiento, con un enfoque en la integración de tecnologías como Inteligencia Artificial, Blockchain y Realidad Aumentada. Apasionado por resolver problemas complejos y automatizar procesos con soluciones scalables y seguras.",
    avatarUrl: "/perfil.jpg",
    resumeUrl: "#",
    socials: [
      { name: "GitHub", url: "https://github.com/groverchv", label: "GitHub Perfil" },
      { name: "Telegram", url: "https://t.me/muerte60", label: "Telegram Perfil" },
      { name: "Email", url: "mailto:groverchoquevillca80@gmail.com", label: "Enviar Correo" },
      { name: "Teléfono", url: "tel:+59178023575", label: "Llamar por Teléfono" }
    ]
  },
  experience: [
    {
      role: "Desarrollador Full Stack (Proyectos Académicos)",
      company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      period: "Agosto 2025 – Junio 2026",
      description: "Desarrollo de proyectos complejos integrando tecnologías emergentes. Creación del ERP 'Control Financiero' con arquitectura híbrida (React 19, Supabase y Hyperledger Fabric en OCI) asegurando 100% de inmutabilidad. Programación de 'CoachVirtual' usando visión computacional (MediaPipe) y LLMs (LLaMA 3.1) para corrección biomecánica. Codiseño de una herramienta de IA operada por voz y WebSockets para acelerar en un 40% el desarrollo de backends en Spring Boot.",
      tags: ["React 19", "Supabase", "Hyperledger Fabric", "OCI", "MediaPipe", "LLaMA 3.1", "Spring Boot", "WebSockets"]
    },
    {
      role: "Desarrollador Frontend (Pasantía)",
      company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      period: "Enero 2024 – Junio 2025",
      description: "Integración de algoritmo de ruta crítica (CPM) en el Sistema Planificador Académico para estimar fechas de graduación y prerrequisitos (35% de mejora en tiempos de planificación). Automatización de la asignación de horarios en el sistema de Gestión Logística, disminuyendo en un 30% los conflictos por choque de materias.",
      tags: ["JavaScript", "Algoritmo CPM", "Planificación Académica", "Automatización", "Logística"]
    }
  ],
  projects: [
    {
      title: "Control Financiero (Blockchain ERP)",
      description: "Plataforma integral de gestión y control financiero desarrollada para la Asociación de Profesionales Financieros. Cuenta con arquitectura moderna en React e integra un Ledger Blockchain que garantiza inmutabilidad, seguridad y auditoría transparente del patrimonio y transacciones.",
      tags: ["React", "Supabase", "Hyperledger Fabric", "OCI", "Blockchain"],
      link: "https://control-financiero-v1.netlify.app/",
      previewType: "mockup",
      category: "blockchain"
    },
    {
      title: "Sistema de Registro de Placas (UAGRM)",
      description: "Software integral para automatizar el acceso vehicular en casetas universitarias. Utiliza modelos YOLOv9 (FastALPR) y FastPlateOCR para lectura automática de placas, detección de clase general con RF-DETR y clasificación de color mediante CLIP ONNX local sobre CPU.",
      tags: ["FastAPI", "React 18", "YOLOv9", "OCR", "ONNX", "PostgreSQL"],
      link: "https://github.com/groverchv",
      previewType: "mockup",
      category: "ia"
    },
    {
      title: "Plataforma Inmobiliaria Web3 & AR",
      description: "Ecosistema descentralizado (dApp) para la tokenización y autogestión de bienes raíces mediante Smart Contracts. Incorpora motores de Realidad Aumentada (AR) en 3D para la previsualización inmersiva de propiedades desde cualquier dispositivo.",
      tags: ["Web3", "Smart Contracts", "Realidad Aumentada", "Three.js", "Solidity"],
      link: "https://github.com/groverchv",
      previewType: "mockup",
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
      link: "https://github.com/groverchv",
      previewType: "mockup",
      category: "ia"
    },
    {
      title: "Generador de Arquitecturas IA",
      description: "Herramienta de automatización que utiliza NLP e IA para transpilar diagramas de clases UML directamente a código fuente estructurado (Backend y Frontend), reduciendo drásticamente el Time-to-Market.",
      tags: ["IA", "NLP", "UML", "Spring Boot", "React"],
      link: "https://github.com/groverchv",
      previewType: "mockup",
      category: "ia"
    }
  ],
  contact: {
    title: "Contacto",
    email: "groverchoquevillca80@gmail.com"
  }
};
