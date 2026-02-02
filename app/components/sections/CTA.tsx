"use client";

import { useTranslation } from "@/app/i18n/hooks";

export function CTA() {
  const t = useTranslation();

  return (
    <section id="contacto" className="py-16 md:py-24 lg:py-32 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            {t.cta.subtitle}
          </p>
          <a
            href="https://wa.me/584121785954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
