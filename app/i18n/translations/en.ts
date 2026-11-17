import type { Translation } from "./es";

// English mirror of es.ts. The mock product UI (POS window, WhatsApp chat) stays in Spanish.
export const en: Translation = {
  metadata: {
    title: "Sinblix | Software factory in Venezuela · POS system and AI WhatsApp assistant",
    description:
      "Sinblix is a software factory in Venezuela specialized in custom software development, web and mobile solutions, cloud and DevOps, and artificial intelligence. Makers of Sinblix POS and Aria, the AI assistant for WhatsApp.",
  },
  nav: {
    label: "Main",
    skip: "Skip to content",
    menu: "Menu",
    nosotros: "About",
    servicios: "Services",
    pos: "Sinblix POS",
    aria: "Aria",
    precios: "Pricing",
    preguntas: "Questions",
    cta: "Try it free for 30 days",
    langShort: "ES",
    langLabel: "Ver la página en español",
    home: "Sinblix, home",
  },
  hero: {
    eyebrow: "Software factory in Venezuela · POS system and AI WhatsApp assistant",
    title: { lead: "Your till balanced and your WhatsApp answered, ", em: "even when you are away." },
    lead: "Sinblix POS keeps your sales, inventory and store credit in dollars and bolívares at the day's BCV rate. Aria, our AI assistant, answers your business WhatsApp 24 hours a day.",
    trial: "Try Sinblix POS free for 30 days",
    aria: "Talk to Aria on WhatsApp",
    note: "Plans from $10 a month, in Venezuela and Colombia.",
    canvasLabel:
      "Dark 3D liquid drops with orange and amber highlights that turn, melt together and follow the cursor",
    chips: {
      offline: "Sale saved offline",
      rate: "Today's BCV rate",
      replied: "Aria replied · 11:04 p.m.",
    },
  },
  marquee: {
    label: "What Sinblix does",
    big: ["Automatic BCV rate", "Sales without internet", "Store credit on WhatsApp", "Aria 24 hours", "Dollars, bolívares and pesos"],
    small: [
      "CHECKOUT",
      "INVENTORY",
      "CUSTOMERS",
      "STORE CREDIT",
      "REPORTS",
      "WHATSAPP",
      "COMPUTER · TABLET · PHONE",
      "VENEZUELA",
      "COLOMBIA",
    ],
  },
  nosotros: {
    eyebrow: "About us",
    title: { lead: "Sinblix is a software factory ", em: "in Venezuela." },
    body: "We specialize in custom software development, web and mobile solutions, cloud and DevOps, and artificial intelligence. From Barquisimeto and Caracas we work online with companies across Venezuela and Colombia, and build custom projects for the rest of Latin America.",
    products: "Sinblix POS and Aria are our own products.",
  },
  servicios: {
    eyebrow: "Services",
    title: { lead: "Complete technology solutions ", em: "to grow your business." },
    items: [
      {
        title: "Custom software development",
        body: "Systems built for your business's specific needs.",
      },
      {
        title: "Web and mobile development",
        body: "Modern, fast and scalable websites and mobile apps.",
      },
      {
        title: "Cloud and DevOps",
        body: "Cloud infrastructure, automation and continuous deployment.",
      },
      {
        title: "Artificial intelligence",
        body: "AI and machine learning to automate processes, forecast and decide better.",
      },
      {
        title: "Process automation",
        body: "Automatic workflows with n8n and other tools, with fewer errors.",
      },
      {
        title: "Technology consulting",
        body: "Advice to improve your processes and adopt the right technology.",
      },
    ],
    cta: "Tell us about your project",
  },
  pos: {
    eyebrow: "Sinblix POS",
    title: { lead: "Sales and inventory that keep working ", em: "when the internet goes down." },
    body: "Sell in dollars, bolívares or euros with a BCV rate that updates itself. If the connection drops, the sale is saved and uploaded when it comes back. You manage checkout, inventory, customers and store credit, and remind customers of their balance with a WhatsApp message already written. It works on computer, tablet and phone.",
    features: ["Checkout", "Inventory", "Customers", "Store credit", "Reports"],
    price: "From $10",
    perMonth: "a month",
    cta: "Create my free account",
  },
  aria: {
    eyebrow: "Aria · AI assistant",
    title: { lead: "Your WhatsApp answers at ", em: "11 at night." },
    body: "Aria answers your customers with your prices, hours, services and location. When you write in a chat, she steps aside with that customer.",
    cta: "Message Aria and try her",
  },
  venderAqui: {
    title: "Made to sell here",
    cards: [
      { mark: "Bs", body: "The BCV rate updates itself every day." },
      { mark: "$ · COP", body: "You pay in bolívares at the day's rate, or in pesos if you are in Colombia." },
      {
        mark: "24 h",
        body: "People help you Monday to Friday, 8 a.m. to 6 p.m., and Aria at any hour.",
      },
    ],
  },
  precios: {
    title: { lead: "Sinblix POS and Aria ", em: "pricing." },
    intro:
      "Prices in US dollars. In Venezuela you pay in bolívares at the day's BCV rate; in Colombia we bill you in pesos.",
    month: "a month",
    pos: {
      name: "Sinblix POS",
      note: "30-day free trial on every plan.",
      plans: [
        { name: "Starter", price: "$10", detail: "Up to 300 products and 2 users" },
        { name: "Business", price: "$25", detail: "Up to 1,000 products and 5 users" },
        { name: "Pro", price: "$50", detail: "Unlimited products and users" },
      ],
    },
    aria: {
      name: "Aria",
      note: "One-time setup of $30, free if you pay 3 months in advance.",
      plans: [
        { name: "Basic", price: "$15", detail: "Up to 1,000 replies a month" },
        { name: "Pro", price: "$29", detail: "Up to 3,000 replies a month" },
        { name: "Business", price: "$49", detail: "Up to 8,000 replies a month" },
      ],
    },
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Does it work without internet?",
        a: "Yes. The sale is saved on the device and syncs when the connection returns.",
      },
      {
        q: "Do I have to install anything?",
        a: "No. You sign in from the browser on your computer, tablet or phone.",
      },
      {
        q: "Can I answer a chat myself?",
        a: "Yes. When you reply, Aria stops writing to that customer.",
      },
      {
        q: "How do I pay?",
        a: "In dollars, in bolívares at the day's BCV rate, or in pesos in Colombia.",
      },
      {
        q: "How much does it cost?",
        a: "Sinblix POS starts at $10 a month with a 30-day free trial. Aria starts at $15 a month.",
      },
      {
        q: "How long does custom development take?",
        a: "A small project takes 2 to 4 weeks and a complex one 3 to 6 months or more. The exact timeline comes with the quote.",
      },
      {
        q: "How do you charge for custom development?",
        a: "By project, by the hour or by sprint, with no hidden costs. After launch we provide maintenance, updates and training.",
      },
      {
        q: "Do you work with businesses in Colombia?",
        a: "Yes. We work online across Venezuela and Colombia, and in Colombia we bill you in pesos.",
      },
    ],
  },
  close: {
    title: { lead: "Tell us about your project ", em: "or try Sinblix POS free." },
    quote: "Message us on WhatsApp",
    trial: "Create my free account",
  },
  footer: {
    privacy: "Privacy policy",
    terms: "Terms of service",
    instagram: "Instagram",
    whatsapp: "WhatsApp +58 412 178 5954",
    place: "Barquisimeto, Venezuela",
  },
};
