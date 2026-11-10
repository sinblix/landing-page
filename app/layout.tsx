import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { es } from "./i18n/translations/es";
import { LanguageProviderWrapper } from "./components/LanguageProviderWrapper";

// "Noche en movimiento": Instrument Serif for display (upright and italic), Geist for text,
// Geist Mono for labels. Exposed as CSS variables and read in globals.css.
const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";

// Static on purpose: no cookies() or headers() here, so the home is prerendered (○). Spanish is
// the server language; the ES/EN toggle is client-side (LanguageProvider).
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: es.metadata.title,
  description: es.metadata.description,
  icons: { icon: "/logos/mango.svg" },
  alternates: { canonical: baseUrl },
  openGraph: {
    title: es.metadata.title,
    description: es.metadata.description,
    url: baseUrl,
    siteName: "Sinblix",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: es.metadata.title,
    description: es.metadata.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SINBLIX",
  url: baseUrl,
  logo: `${baseUrl}/logos/logo.svg`,
  description: es.metadata.description,
  sameAs: ["https://www.instagram.com/sinblix.ven/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+58-412-178-5954",
    contactType: "customer service",
    areaServed: ["VE", "CO"],
    availableLanguage: ["Spanish", "English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sinblix",
  url: baseUrl,
  inLanguage: "es",
  publisher: { "@type": "Organization", name: "SINBLIX" },
};

const plan = (name: string, price: string) => ({
  "@type": "Offer",
  name,
  price,
  priceCurrency: "USD",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: "USD",
    unitText: "MONTH",
    billingDuration: "P1M",
  },
});

const posSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sinblix POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://pos.sinblix.com/register",
  description: es.pos.body,
  offers: [plan("Starter", "10"), plan("Business", "25"), plan("Pro", "50")],
  publisher: { "@type": "Organization", name: "SINBLIX" },
};

const areaServed = [
  { "@type": "Country", name: "Venezuela" },
  { "@type": "Country", name: "Colombia" },
];

const ariaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aria",
  serviceType: "Asistente con IA para WhatsApp",
  description: es.aria.body,
  provider: { "@type": "Organization", name: "SINBLIX", url: baseUrl },
  areaServed,
};

const desarrolloSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: es.desarrollo.title,
  serviceType: "Desarrollo de software y páginas web a la medida",
  description: es.desarrollo.line,
  provider: { "@type": "Organization", name: "SINBLIX", url: baseUrl },
  areaServed,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: es.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const schemas = [organizationSchema, websiteSchema, posSchema, ariaSchema, desarrolloSchema, faqSchema];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {schemas.map((schema, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '25340572335643005');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25340572335643005&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body suppressHydrationWarning>
        <LanguageProviderWrapper initialLanguage="es">{children}</LanguageProviderWrapper>
      </body>
    </html>
  );
}
