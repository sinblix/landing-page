"use client";

import { HeroBackground } from "./HeroBackground";
import { useTranslation } from "@/app/i18n/hooks";

export function Hero() {
  const t = useTranslation();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-24 lg:py-32"
    >
      <HeroBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            Software, IA y automatización
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200/95 mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/584121785954"
              target="_blank"
              rel="noopener noreferrer"
              className="sinblix-btn-primary px-8 py-4 text-base"
            >
              {t.hero.cta}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white hover:border-orange-300 hover:text-orange-200"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
