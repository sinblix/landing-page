"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import Image from "next/image";
import { useState } from "react";

// Helper para obtener imagen placeholder basada en el tipo de proyecto
function getProjectImage(title: string): string {
  const imageMap: Record<string, string> = {
    "Software para el Estado Colombiano": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    "Software for Colombian State": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    "E-commerce a Gran Escala": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    "Large-Scale E-commerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    "Sistemas Omnicanales": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "Omnichannel Systems": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "Agentes de Ventas con IA": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    "AI Sales Agents": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    "Automatización de Procesos Financieros": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "Financial Process Automation": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "Automatización de Flujos de Trabajo": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    "Workflow Automation": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  };

  return imageMap[title] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
}

function PortfolioCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
  };
}) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = getProjectImage(project.title);

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
        {!imageError ? (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-50">🚀</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const t = useTranslation();

  return (
    <Section variant="light" id="portafolio">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {t.portfolio.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.portfolio.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.portfolio.items.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
