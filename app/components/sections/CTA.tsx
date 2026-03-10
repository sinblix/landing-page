"use client";

import { useTranslation } from "@/app/i18n/hooks";

export function CTA() {
  const t = useTranslation();

  return (
    <section
      id="contacto"
      className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-orange-50 via-white to-orange-50/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center sinblix-card p-8 md:p-12">
          <h2 className="sinblix-section-title text-gray-900 mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <a
            href="https://wa.me/584121785954"
            target="_blank"
            rel="noopener noreferrer"
            className="sinblix-btn-primary px-10 py-4 text-lg"
          >
            {t.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
