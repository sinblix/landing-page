"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import { useState } from "react";
import Image from "next/image";

function TechCard({
  tech,
  isFeatured,
  getCategoryEmoji,
}: {
  tech: { name: string; category: string };
  isFeatured: boolean;
  getCategoryEmoji: () => string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border ${
        isFeatured
          ? "bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-orange-600/30"
          : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-orange-500"
      }`}
    >
      <div className="text-center">
        <div className="mb-3 opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center h-12">
          {imageError ? (
            <div className="text-4xl">{getCategoryEmoji()}</div>
          ) : (
            <Image
              src={getTechLogo(tech.name)}
              alt={`${tech.name} logo`}
              width={48}
              height={48}
              className="object-contain filter brightness-0 invert"
              unoptimized
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <h3
          className={`font-semibold text-sm md:text-base transition-colors ${
            isFeatured
              ? "text-orange-400 group-hover:text-orange-300"
              : "text-white group-hover:text-orange-400"
          }`}
        >
          {tech.name}
          {isFeatured && (
            <span className="ml-2 text-xs">⭐</span>
          )}
        </h3>
      </div>
    </div>
  );
}

// Helper para obtener el logo de una tecnología
function getTechLogo(name: string): string {
  const logoMap: Record<string, string> = {
    "React": "react",
    "Next.js": "nextdotjs",
    "TypeScript": "typescript",
    "Vue.js": "vuedotjs",
    "Node.js": "nodedotjs",
    "Python": "python",
    "Go": "go",
    "React Native": "react",
    "PWA": "pwa",
    "iOS": "apple",
    "Android": "android",
    "AWS": "amazonaws",
    "Azure": "microsoftazure",
    "Google Cloud": "googlecloud",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "CI/CD": "githubactions",
    "PostgreSQL": "postgresql",
    "MongoDB": "mongodb",
    "DynamoDB": "amazondynamodb",
    "MySQL": "mysql",
    "Redis": "redis",
  };

  const iconName = logoMap[name] || name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
  return `https://cdn.simpleicons.org/${iconName}/ffffff`;
}

export function Technologies() {
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = Object.keys(t.technologies.categories) as Array<
    keyof typeof t.technologies.categories
  >;

  const filteredItems = selectedCategory
    ? t.technologies.items.filter((item) => item.category === selectedCategory)
    : t.technologies.items;

  return (
    <Section variant="dark" id="tecnologias">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {t.technologies.title}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {t.technologies.subtitle}
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === null
              ? "bg-orange-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {t.language === "en" ? "All" : "Todas"}
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {t.technologies.categories[category]}
          </button>
        ))}
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredItems.map((tech, index) => {
          const isFeatured = (tech as { featured?: boolean }).featured === true;
          const getCategoryEmoji = () => {
            switch (tech.category) {
              case "frontend": return "⚛️";
              case "backend": return "⚙️";
              case "mobile": return "📱";
              case "cloud": return "☁️";
              case "devops": return "🔧";
              case "databases": return "🗄️";
              default: return "💻";
            }
          };
          
          return (
            <TechCard
              key={index}
              tech={tech}
              isFeatured={isFeatured}
              getCategoryEmoji={getCategoryEmoji}
            />
          );
        })}
      </div>
    </Section>
  );
}
