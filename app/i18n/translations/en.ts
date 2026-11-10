import type { Translation } from "./es";

// English mirror of es.ts. The mock product UI (POS window, WhatsApp chat) stays in Spanish.
export const en: Translation = {
  metadata: {
    title: "Sinblix | POS system and AI WhatsApp assistant for businesses",
    description:
      "Sales and inventory in dollars and bolívares at the BCV rate, even offline, and an AI assistant that answers your WhatsApp 24/7. Try it free for 30 days.",
  },
  nav: {
    label: "Main",
    skip: "Skip to content",
    menu: "Menu",
    pos: "Sinblix POS",
    aria: "Aria",
    desarrollo: "Development",
    preguntas: "Questions",
    cta: "Try it free for 30 days",
    langShort: "ES",
    langLabel: "Ver la página en español",
    home: "Sinblix, home",
  },
  hero: {
    eyebrow: "Venezuela and Colombia · sales + WhatsApp",
    title: { lead: "Your till balanced and your WhatsApp answered, ", em: "even when you are away." },
    lead: "Sinblix POS keeps your sales, inventory and store credit in dollars and bolívares at the day's BCV rate. Aria, our AI assistant, answers your business WhatsApp 24 hours a day.",
    trial: "Try Sinblix POS free for 30 days",
    aria: "Talk to Aria on WhatsApp",
    note: "Plans from $10 a month. We work online across Venezuela and Colombia.",
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
  desarrollo: {
    title: "Custom development",
    line: "A system or a website built for how your business works.",
    heading: { lead: "A system or a website built for ", em: "how your business works." },
    body: "Tell us in two lines what you need and an advisor sends you a quote.",
    cta: "Request a quote on WhatsApp",
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
    ],
  },
  close: {
    title: { lead: "Try Sinblix POS ", em: "free for 30 days." },
    trial: "Create my free account",
    aria: "Talk to Aria",
  },
  footer: {
    privacy: "Privacy policy",
    terms: "Terms of service",
    instagram: "Instagram",
  },
};
