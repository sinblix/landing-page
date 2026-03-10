"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";

export function Process() {
  const t = useTranslation();

  return (
    <Section variant="light" id="proceso">
      <div className="text-center mb-16">
        <h2 className="sinblix-section-title text-gray-900 mb-4">
          {t.process.title}
        </h2>
        <p className="sinblix-section-subtitle max-w-2xl mx-auto">
          {t.process.subtitle}
        </p>
      </div>
      <div className="relative">
        {/* Timeline horizontal en desktop */}
        <div className="hidden lg:flex items-start justify-between relative">
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
          {t.process.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 w-1/5"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        {/* Timeline vertical en móvil */}
        <div className="lg:hidden space-y-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className="w-0.5 h-full bg-orange-500 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
