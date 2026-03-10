import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { es } from "./i18n/translations/es";
import { en } from "./i18n/translations/en";
import { LanguageProviderWrapper } from "./components/LanguageProviderWrapper";
import { cookies } from "next/headers";
import { isValidLanguage } from "./i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function getLanguageFromCookies(): Promise<"es" | "en"> {
  try {
    const cookieStore = await cookies();
    const langCookie = cookieStore.get("language");
    if (langCookie && isValidLanguage(langCookie.value)) {
      return langCookie.value;
    }
  } catch {
    // Si no hay cookies disponibles, usar default
  }
  return "es"; // Default
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguageFromCookies();
  const t = lang === "en" ? en : es;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: [...t.metadata.keywords],
    icons: {
      icon: "/logos/mango.svg",
    },
    openGraph: {
      title: t.metadata.openGraph.title,
      description: t.metadata.openGraph.description,
      url: t.metadata.openGraph.url,
      siteName: t.metadata.openGraph.siteName,
      images: t.metadata.openGraph.images.map((img) => ({
        url: img.url.startsWith("http") ? img.url : `${baseUrl}${img.url}`,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
      locale: t.metadata.openGraph.locale,
      type: t.metadata.openGraph.type,
    },
    twitter: {
      card: t.metadata.twitter.card,
      title: t.metadata.twitter.title,
      description: t.metadata.twitter.description,
      images: t.metadata.twitter.images.map((img) =>
        img.startsWith("http") ? img : `${baseUrl}${img}`
      ),
    },
    alternates: {
      canonical: baseUrl,
    },
    metadataBase: new URL(baseUrl),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLanguageFromCookies();
  const t = lang === "en" ? en : es;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SINBLIX",
    url: baseUrl,
    logo: `${baseUrl}/logos/mango.svg`,
    description: t.metadata.description,
    sameAs: [
      "https://www.instagram.com/sinblix.ven/",
      "https://wa.me/584121785954",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+58-412-178-5954",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SINBLIX",
    description: t.metadata.description,
    url: baseUrl,
    telephone: "+58-412-178-5954",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VE",
      addressRegion: "Lara",
      addressLocality: "Barquisimeto",
    },
  };

  const serviceSchemas = t.services.items.map(
    (service: { title: string; description: string }) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "SINBLIX",
      },
      areaServed: {
        "@type": "Country",
        name: "Venezuela",
      },
    })
  );

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SINBLIX",
    url: baseUrl,
    description: t.metadata.description,
    inLanguage: lang === "es" ? "es-VE" : "en-US",
  };

  const schemas = [
    organizationSchema,
    localBusinessSchema,
    ...serviceSchemas,
    websiteSchema,
  ];

  return (
    <html lang={lang}>
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProviderWrapper initialLanguage={lang}>
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
