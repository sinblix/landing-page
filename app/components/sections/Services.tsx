"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";

export function Services() {
  const t = useTranslation();

  return (
    <Section variant="light" id="servicios">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {t.services.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {t.services.items.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
