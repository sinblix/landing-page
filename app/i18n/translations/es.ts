// Spanish is the default language: the server renders it and the metadata uses it.
// en.ts mirrors this shape (Translation) for the client-side ES/EN toggle.
// Headings with an italic tail are split in two: `lead` (upright) and `em` (italic, orange).
export const es = {
  metadata: {
    title: "Sinblix | Sistema POS y bot de WhatsApp con IA para negocios",
    description:
      "Ventas e inventario en dólares y bolívares con tasa BCV, aun sin internet, y una asistente con IA que responde tu WhatsApp 24/7. Prueba gratis 30 días.",
  },
  nav: {
    label: "Principal",
    skip: "Saltar al contenido",
    menu: "Menú",
    pos: "Sinblix POS",
    aria: "Aria",
    desarrollo: "Desarrollo",
    precios: "Precios",
    preguntas: "Preguntas",
    cta: "Prueba gratis 30 días",
    langShort: "EN",
    langLabel: "Ver la página en inglés",
    home: "Sinblix, inicio",
  },
  hero: {
    // Part of the h1 (small line above the headline), so the h1 names what is sold and where.
    eyebrow: "Sistema POS y WhatsApp con IA · Venezuela y Colombia",
    title: { lead: "La caja cuadrada y el WhatsApp respondido, ", em: "aunque tú no estés." },
    lead: "Sinblix POS lleva tus ventas, inventario y fiados en dólares y bolívares con la tasa BCV del día. Aria, nuestra asistente con IA, contesta el WhatsApp de tu negocio las 24 horas.",
    trial: "Prueba Sinblix POS gratis 30 días",
    aria: "Habla con Aria por WhatsApp",
    note: "Planes desde $10 al mes. Trabajamos en línea en toda Venezuela y Colombia.",
    canvasLabel:
      "Gotas líquidas oscuras en 3D con reflejos naranja y ámbar que giran, se funden y siguen al cursor",
    chips: {
      offline: "Venta guardada sin internet",
      rate: "Tasa BCV de hoy",
      replied: "Aria respondió · 11:04 p. m.",
    },
  },
  marquee: {
    label: "Lo que hace Sinblix",
    big: ["Tasa BCV automática", "Ventas sin internet", "Fiados por WhatsApp", "Aria 24 horas", "Dólares, bolívares y pesos"],
    small: [
      "CAJA",
      "INVENTARIO",
      "CLIENTES",
      "FIADOS",
      "REPORTES",
      "WHATSAPP",
      "COMPUTADORA · TABLET · TELÉFONO",
      "VENEZUELA",
      "COLOMBIA",
    ],
  },
  pos: {
    eyebrow: "Sinblix POS",
    title: { lead: "Ventas e inventario que siguen funcionando ", em: "cuando se cae el internet." },
    body: "Vende en dólares, bolívares o euros con la tasa BCV que se actualiza sola. Si se va la conexión, la venta se guarda y se sube cuando vuelve. Controlas caja, inventario, clientes y fiados, y le recuerdas el saldo al cliente con un mensaje de WhatsApp ya escrito. Funciona en computadora, tablet y teléfono.",
    features: ["Caja", "Inventario", "Clientes", "Fiados", "Reportes"],
    price: "Desde $10",
    perMonth: "al mes",
    cta: "Crear mi cuenta gratis",
  },
  aria: {
    eyebrow: "Aria · asistente con IA",
    title: { lead: "Tu WhatsApp contesta a las ", em: "11 de la noche." },
    body: "Aria responde a tus clientes con tus precios, horarios, servicios y ubicación. Cuando tú escribes en un chat, ella se hace a un lado con ese cliente.",
    cta: "Escríbele a Aria y pruébala",
  },
  venderAqui: {
    title: "Hecho para vender aquí",
    cards: [
      { mark: "Bs", body: "La tasa BCV se actualiza sola cada día." },
      { mark: "$ · COP", body: "Pagas en bolívares a la tasa del día, o en pesos si estás en Colombia." },
      {
        mark: "24 h",
        body: "Te atienden personas de lunes a viernes, de 8 a. m. a 6 p. m., y Aria a cualquier hora.",
      },
    ],
  },
  precios: {
    title: { lead: "Precios de Sinblix POS ", em: "y Aria." },
    intro:
      "Precios en dólares. En Venezuela pagas en bolívares a la tasa BCV del día; en Colombia te cobramos en pesos.",
    month: "al mes",
    pos: {
      name: "Sinblix POS",
      note: "Prueba gratis de 30 días en cualquier plan.",
      plans: [
        { name: "Starter", price: "$10", detail: "Hasta 300 productos y 2 usuarios" },
        { name: "Business", price: "$25", detail: "Hasta 1.000 productos y 5 usuarios" },
        { name: "Pro", price: "$50", detail: "Productos y usuarios ilimitados" },
      ],
    },
    aria: {
      name: "Aria",
      note: "Configuración inicial de $30, gratis si pagas 3 meses por adelantado.",
      plans: [
        { name: "Básico", price: "$15", detail: "Hasta 1.000 respuestas al mes" },
        { name: "Pro", price: "$29", detail: "Hasta 3.000 respuestas al mes" },
        { name: "Negocio", price: "$49", detail: "Hasta 8.000 respuestas al mes" },
      ],
    },
  },
  desarrollo: {
    title: "Desarrollo a la medida",
    line: "Un sistema o una página web hecha para cómo trabaja tu negocio.",
    heading: { lead: "Un sistema o una página web hecha para ", em: "cómo trabaja tu negocio." },
    body: "Cuéntanos en dos líneas qué necesitas y un asesor te envía la cotización.",
    cta: "Pedir cotización por WhatsApp",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Funciona sin internet?",
        a: "Sí. La venta se guarda en el equipo y se sincroniza al volver la conexión.",
      },
      {
        q: "¿Tengo que instalar algo?",
        a: "No. Entras desde el navegador de tu computadora, tablet o teléfono.",
      },
      {
        q: "¿Puedo contestar yo un chat?",
        a: "Sí. Cuando respondes tú, Aria deja de escribirle a ese cliente.",
      },
      {
        q: "¿Cómo pago?",
        a: "En dólares, en bolívares a la tasa BCV del día, o en pesos en Colombia.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Sinblix POS cuesta desde $10 al mes y tiene 30 días de prueba gratis. Aria cuesta desde $15 al mes.",
      },
      {
        q: "¿Trabajan con negocios en Colombia?",
        a: "Sí. Trabajamos en línea en toda Venezuela y Colombia, y en Colombia te cobramos en pesos.",
      },
    ],
  },
  close: {
    title: { lead: "Prueba Sinblix POS ", em: "30 días gratis." },
    trial: "Crear mi cuenta gratis",
    aria: "Habla con Aria",
  },
  footer: {
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    instagram: "Instagram",
  },
};

export type Translation = typeof es;
