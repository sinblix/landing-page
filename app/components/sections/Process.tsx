import { Section } from "../Section";
import { brandConfig } from "@/app/config/brand";

export function Process() {
  return (
    <Section variant="light" id="proceso">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Nuestro Proceso de Trabajo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Metodología ágil probada para entregar resultados exitosos
        </p>
      </div>
      <div className="relative">
        {/* Timeline horizontal en desktop */}
        <div className="hidden lg:flex items-start justify-between relative">
          <div className="absolute top-8 left-0 right-0 h-1 bg-orange-500"></div>
          {brandConfig.content.process.map((step, index) => (
            <div
              key={step.step}
              className="flex flex-col items-center relative z-10 w-1/5"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                {step.step}
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
          {brandConfig.content.process.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                {step.step < brandConfig.content.process.length && (
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
