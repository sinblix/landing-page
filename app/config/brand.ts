export const brandConfig = {
  colors: {
    primary: "#FF8C42", // Naranja mango maduro
    secondary: "#9ACD32", // Verde mango
    accent: "#FF6B35", // Naranja intenso
    background: "#FFF8F0", // Fondo cálido crema
    text: "#1A1A1A",
    textLight: "#6B7280",
  },
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
    ],
  },
  content: {
    hero: {
      title: "Construimos software que transforma negocios",
      subtitle:
        "Desarrollo a medida, soluciones cloud y consultoría tecnológica para startups y empresas",
      cta: "Solicita una consulta",
    },
    services: [
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
    process: [
      {
        step: 1,
        title: "Consulta inicial",
        description:
          "Analizamos tus necesidades y objetivos para entender el alcance del proyecto",
      },
      {
        step: 2,
        title: "Diseño y planificación",
        description:
          "Creamos la arquitectura y plan de trabajo detallado con metodología ágil",
      },
      {
        step: 3,
        title: "Desarrollo ágil",
        description:
          "Desarrollamos iterativamente con entregas continuas y feedback constante",
      },
      {
        step: 4,
        title: "Testing y QA",
        description:
          "Garantizamos calidad con pruebas exhaustivas y revisión de código",
      },
      {
        step: 5,
        title: "Lanzamiento y soporte",
        description:
          "Desplegamos tu solución y brindamos soporte continuo para su evolución",
      },
    ],
    cta: {
      title: "¿Listo para transformar tu negocio?",
      subtitle: "Hablemos sobre tu proyecto y cómo podemos ayudarte",
      button: "Contactar ahora",
    },
    footer: {
      links: [
        { label: "Servicios", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Contacto", href: "#contacto" },
      ],
      social: [
        {
          name: "Instagram",
          href: "https://www.instagram.com/sinblix.ven/?hl=en",
          icon: "instagram",
        },
        {
          name: "WhatsApp",
          href: "https://wa.me/584121785954",
          icon: "whatsapp",
        },
      ],
    },
  },
  assets: {
    logos: {
      default: "/logos/logo.svg",
      white: "/logos/logo-white.svg",
      text: "/logos/logo-text.svg",
      background: "/logos/logo-background.svg",
    },
  },
} as const;
