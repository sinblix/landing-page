export const es = {
  metadata: {
    title: "SINBLIX - Fábrica de Software | Desarrollo a Medida",
    description:
      "Desarrollo de software a medida, soluciones web y móvil, cloud y DevOps, y consultoría tecnológica para startups y empresas. Transformamos ideas en software que impulsa tu negocio.",
    keywords: [
      "desarrollo de software",
      "fábrica de software",
      "desarrollo web",
      "desarrollo móvil",
      "cloud",
      "DevOps",
      "consultoría tecnológica",
      "SINBLIX",
      "desarrollo de software Venezuela",
      "desarrollo de software Latinoamérica",
      "software a medida",
      "aplicaciones web",
      "aplicaciones móviles",
      "transformación digital",
    ],
    openGraph: {
      title: "SINBLIX - Fábrica de Software | Desarrollo a Medida",
      description:
        "Desarrollo de software a medida, soluciones web y móvil, cloud y DevOps, y consultoría tecnológica para startups y empresas.",
      url: "https://sinblix.com",
      siteName: "SINBLIX",
      images: [
        {
          url: "/logos/logo-white.svg",
          width: 1200,
          height: 630,
          alt: "SINBLIX - Fábrica de Software",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SINBLIX - Fábrica de Software | Desarrollo a Medida",
      description:
        "Desarrollo de software a medida, soluciones web y móvil, cloud y DevOps, y consultoría tecnológica.",
      images: ["/logos/logo-white.svg"],
    },
  },
  hero: {
    title: "Construimos software que transforma negocios",
    subtitle:
      "Desarrollo a medida, soluciones cloud y consultoría tecnológica para startups y empresas",
    cta: "Solicita una consulta",
  },
  services: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones tecnológicas completas para impulsar tu negocio",
    items: [
      {
        title: "Inteligencia Artificial",
        description:
          "Soluciones de IA y machine learning para automatizar procesos, análisis predictivo y toma de decisiones inteligentes",
        icon: "🤖",
      },
      {
        title: "Automatización de Procesos",
        description:
          "Automatización de flujos de trabajo y procesos empresariales con n8n y otras herramientas para aumentar eficiencia y reducir errores",
        icon: "⚡",
      },
      {
        title: "Desarrollo de Software a Medida",
        description:
          "Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio",
        icon: "💻",
      },
      {
        title: "Desarrollo Web y Móvil",
        description:
          "Aplicaciones web y móviles modernas, escalables y de alto rendimiento",
        icon: "📱",
      },
      {
        title: "Soluciones Cloud y DevOps",
        description:
          "Infraestructura en la nube, automatización y despliegue continuo",
        icon: "☁️",
      },
      {
        title: "Consultoría Tecnológica",
        description:
          "Asesoría estratégica para optimizar procesos y adoptar tecnologías innovadoras",
        icon: "🎯",
      },
    ],
  },
  process: {
    title: "Nuestro Proceso de Trabajo",
    subtitle: "Metodología ágil probada para entregar resultados exitosos",
    steps: [
      {
        title: "Consulta inicial",
        description:
          "Analizamos tus necesidades y objetivos para entender el alcance del proyecto",
      },
      {
        title: "Diseño y planificación",
        description:
          "Creamos la arquitectura y plan de trabajo detallado con metodología ágil",
      },
      {
        title: "Desarrollo ágil",
        description:
          "Desarrollamos iterativamente con entregas continuas y feedback constante",
      },
      {
        title: "Testing y QA",
        description:
          "Garantizamos calidad con pruebas exhaustivas y revisión de código",
      },
      {
        title: "Lanzamiento y soporte",
        description:
          "Desplegamos tu solución y brindamos soporte continuo para su evolución",
      },
    ],
  },
  cta: {
    title: "¿Listo para transformar tu negocio?",
    subtitle: "Hablemos sobre tu proyecto y cómo podemos ayudarte",
    button: "Contactar ahora",
  },
  footer: {
    tagline: "Fábrica de software que transforma negocios",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
    follow: "Síguenos",
  },
  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  technologies: {
    title: "Tecnologías que Dominamos",
    subtitle: "Stack tecnológico moderno para construir soluciones de clase mundial",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      cloud: "Cloud",
      devops: "DevOps",
      databases: "Bases de Datos",
    },
    items: [
      { name: "React", category: "frontend", featured: true },
      { name: "Next.js", category: "frontend", featured: true },
      { name: "TypeScript", category: "frontend", featured: true },
      { name: "Vue.js", category: "frontend", featured: true },
      { name: "Node.js", category: "backend", featured: true },
      { name: "Python", category: "backend", featured: true },
      { name: "Go", category: "backend" },
      { name: "React Native", category: "mobile", featured: true },
      { name: "PWA", category: "mobile", featured: true },
      { name: "iOS", category: "mobile" },
      { name: "Android", category: "mobile" },
      { name: "AWS", category: "cloud", featured: true },
      { name: "Azure", category: "cloud" },
      { name: "Google Cloud", category: "cloud" },
      { name: "Docker", category: "devops", featured: true },
      { name: "Kubernetes", category: "devops", featured: true },
      { name: "CI/CD", category: "devops", featured: true },
      { name: "PostgreSQL", category: "databases", featured: true },
      { name: "MongoDB", category: "databases", featured: true },
      { name: "DynamoDB", category: "databases", featured: true },
      { name: "MySQL", category: "databases", featured: true },
      { name: "Redis", category: "databases", featured: true },
    ],
  },
  portfolio: {
    title: "Casos de Éxito",
    subtitle: "Proyectos que han transformado negocios",
    items: [
      {
        title: "Software para el Estado Colombiano",
        description: "Sistema gubernamental de gran escala con millones de usuarios diarios, procesando transacciones críticas y servicios públicos",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
        image: "/portfolio/government.jpg",
      },
      {
        title: "E-commerce a Gran Escala",
        description: "Plataforma de comercio electrónico masiva con millones de productos, procesamiento de pagos avanzado y logística optimizada",
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Redis"],
        image: "/portfolio/ecommerce.jpg",
      },
      {
        title: "Sistemas Omnicanales",
        description: "Solución integrada que unifica canales físicos y digitales para una experiencia de cliente consistente en todos los puntos de contacto",
        technologies: ["Next.js", "Python", "PostgreSQL", "AWS"],
        image: "/portfolio/omnichannel.jpg",
      },
      {
        title: "Agentes de Ventas con IA",
        description: "Sistema inteligente de agentes virtuales con IA que automatiza ventas, atención al cliente y genera leads cualificados 24/7",
        technologies: ["Python", "Node.js", "AWS", "OpenAI"],
        image: "/portfolio/ai-sales.jpg",
      },
      {
        title: "Automatización de Procesos Financieros",
        description: "Sistema automatizado para procesamiento de facturas, pagos y reconciliación contable, reduciendo tiempo de procesamiento en 80%",
        technologies: ["n8n", "Python", "PostgreSQL", "AWS"],
        image: "/portfolio/automation-finance.jpg",
      },
      {
        title: "Automatización de Flujos de Trabajo",
        description: "Plataforma de automatización empresarial que conecta sistemas, sincroniza datos y optimiza procesos operativos",
        technologies: ["n8n", "Node.js", "MongoDB", "Docker"],
        image: "/portfolio/automation-workflow.jpg",
      },
    ],
  },
  stats: {
    title: "Números que Hablan",
    items: [
      { value: "50+", label: "Proyectos Completados", icon: "🚀" },
      { value: "30+", label: "Clientes Satisfechos", icon: "😊" },
      { value: "10+", label: "Años de Experiencia", icon: "⭐" },
      { value: "15+", label: "Tecnologías Dominadas", icon: "💻" },
    ],
  },
  testimonials: {
    title: "Lo que Dicen Nuestros Clientes",
    subtitle: "Testimonios reales de empresas que confiaron en nosotros",
    items: [
      {
        name: "María González",
        company: "TechStart",
        role: "CEO",
        testimonial:
          "SINBLIX transformó completamente nuestra plataforma. El equipo es profesional, eficiente y siempre entrega a tiempo.",
        rating: 5,
        image: "/testimonials/client1.jpg",
      },
      {
        name: "Carlos Rodríguez",
        company: "InnovateCorp",
        role: "CTO",
        testimonial:
          "La mejor decisión que tomamos fue trabajar con SINBLIX. Su expertise técnico y atención al detalle es excepcional.",
        rating: 5,
        image: "/testimonials/client2.jpg",
      },
      {
        name: "Ana Martínez",
        company: "Digital Solutions",
        role: "Directora de Producto",
        testimonial:
          "Proyecto entregado con excelente calidad. El equipo entendió perfectamente nuestras necesidades y las superó.",
        rating: 5,
        image: "/testimonials/client3.jpg",
      },
    ],
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Resolvemos tus dudas más comunes",
    categories: {
      services: "Servicios",
      process: "Proceso",
      pricing: "Precios",
      support: "Soporte",
    },
    items: [
      {
        category: "services",
        question: "¿Qué servicios ofrecen?",
        answer:
          "Ofrecemos desarrollo de software a medida, desarrollo web y móvil, soluciones cloud y DevOps, y consultoría tecnológica. Trabajamos con startups y empresas de todos los tamaños.",
      },
      {
        category: "services",
        question: "¿Qué tecnologías utilizan?",
        answer:
          "Trabajamos con tecnologías modernas como React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, Docker, Kubernetes y más. Adaptamos el stack tecnológico según las necesidades de cada proyecto.",
      },
      {
        category: "process",
        question: "¿Cuál es su proceso de trabajo?",
        answer:
          "Seguimos una metodología ágil que incluye consulta inicial, diseño y planificación, desarrollo iterativo, testing exhaustivo, y lanzamiento con soporte continuo. Mantenemos comunicación constante durante todo el proceso.",
      },
      {
        category: "process",
        question: "¿Cuánto tiempo toma desarrollar un proyecto?",
        answer:
          "El tiempo varía según la complejidad y alcance del proyecto. Proyectos pequeños pueden tomar 2-4 semanas, mientras que proyectos más complejos pueden requerir 3-6 meses o más. Proporcionamos estimaciones detalladas después de la consulta inicial.",
      },
      {
        category: "pricing",
        question: "¿Cómo se estructura el precio?",
        answer:
          "Nuestros precios se basan en el alcance, complejidad y tiempo estimado del proyecto. Ofrecemos modelos de pago flexibles: por proyecto, por hora, o por sprint. Proporcionamos cotizaciones transparentes sin costos ocultos.",
      },
      {
        category: "support",
        question: "¿Ofrecen soporte después del lanzamiento?",
        answer:
          "Sí, ofrecemos planes de soporte continuo que incluyen mantenimiento, actualizaciones, corrección de bugs y mejoras. También proporcionamos documentación completa y capacitación para tu equipo.",
      },
    ],
  },
  team: {
    title: "Nuestro Equipo",
    subtitle: "Expertos apasionados por la tecnología",
    items: [
      {
        name: "Elkyn Diosa",
        role: "CTO",
        bio: "Arquitecto de software y líder técnico con más de 10 años de experiencia en desarrollo de soluciones empresariales y startups de alto crecimiento.",
        image: "/team/elkyn.jpg",
        linkedin: "https://www.linkedin.com/in/elkyn-diosa-software-ingeneer/",
      },
      {
        name: "Stefany Torrellas",
        role: "CEO, Product Manager & Automatizaciones",
        bio: "Estratega de productos y experta en automatización de procesos empresariales con visión para transformar negocios.",
        image: "/team/stefany.jpg",
        linkedin: "https://www.linkedin.com/in/stefany-torrellas-678b11218/",
      },
      {
        name: "Carlos Mendoza",
        role: "Senior Full Stack Developer",
        bio: "Desarrollador senior especializado en arquitecturas escalables y soluciones cloud con más de 8 años de experiencia.",
        image: "https://i.pravatar.cc/400?img=12",
      },
      {
        name: "María González",
        role: "Full Stack Developer",
        bio: "Desarrolladora full stack con expertise en React, Node.js y bases de datos, apasionada por crear soluciones innovadoras.",
        image: "https://i.pravatar.cc/400?img=47",
      },
      {
        name: "Juan Pérez",
        role: "Junior Developer",
        bio: "Desarrollador junior en crecimiento, especializándose en tecnologías modernas y mejores prácticas de desarrollo.",
        image: "https://i.pravatar.cc/400?img=33",
      },
    ],
  },
} as const;
