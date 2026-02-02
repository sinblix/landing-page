"use client";

import { HeroBackground } from "./HeroBackground";
import { useTranslation } from "@/app/i18n/hooks";

export function Hero() {
  const t = useTranslation();

  return (
    <section id="inicio" className="relative overflow-hidden bg-gray-900 py-16 md:py-24 lg:py-32">
      <HeroBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed drop-shadow">
            {t.hero.subtitle}
          </p>
          <a
            href="https://wa.me/584121785954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
