"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";

function ServiceGlyph({ index }: { index: number }) {
  const glyphs = [
    "M12 4v4m0 0a4 4 0 110 8m0-8a4 4 0 100 8m0 0v4m8-8h-4M8 12H4",
    "M4 6h16M4 12h16M4 18h16",
    "M8 7V5a4 4 0 118 0v2m-9 4h10m-9 0l.7 7h7.6l.7-7",
    "M12 3v18m9-9H3",
    "M5 12h14M5 12l4-4m-4 4l4 4m10-4l-4-4m4 4l-4 4",
    "M4 19l8-14 8 14H4z",
  ];
  const path = glyphs[index % glyphs.length];

  return (
    <svg
      className="h-6 w-6 text-orange-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function Services() {
  const t = useTranslation();

  return (
    <Section variant="light" id="servicios">
      <div className="text-center mb-16">
        <h2 className="sinblix-section-title text-gray-900 mb-4">
          {t.services.title}
        </h2>
        <p className="sinblix-section-subtitle max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {t.services.items.map((service, index) => (
          <div
            key={index}
            className="sinblix-card sinblix-card-lift group p-8"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 ring-1 ring-orange-200">
              <ServiceGlyph index={index} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[1.02rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
