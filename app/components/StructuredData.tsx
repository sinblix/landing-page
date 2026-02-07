"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { useEffect } from "react";

export function StructuredData() {
  const t = useTranslation();
  const language = t.language;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sinblix.lat";

  useEffect(() => {
    // Limpiar schemas anteriores
    const existingScripts = document.querySelectorAll('[id^="structured-data-"]');
    existingScripts.forEach((script) => script.remove());

    // Organization Schema
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

    // LocalBusiness Schema (si aplica)
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

    // Service Schemas
    const serviceSchemas = t.services.items.map((service: { title: string; description: string }) => ({
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
        name: language === "es" ? "Venezuela" : "Venezuela",
      },
    }));

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SINBLIX",
      url: baseUrl,
      description: t.metadata.description,
      inLanguage: language === "es" ? "es-ES" : "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Agregar todos los schemas al DOM
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      ...serviceSchemas,
      websiteSchema,
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [t, language, baseUrl]);

  return null;
}
