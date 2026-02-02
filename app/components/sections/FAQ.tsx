"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import { useState } from "react";

export function FAQ() {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Object.keys(t.faq.categories) as Array<
    keyof typeof t.faq.categories
  >;

  const filteredItems = selectedCategory
    ? t.faq.items.filter((item) => item.category === selectedCategory)
    : t.faq.items;

  return (
    <Section variant="light" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {t.faq.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.faq.subtitle}
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === null
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t.language === "en" ? "All" : "Todas"}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setOpenIndex(null);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t.faq.categories[category]}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredItems.map((item, index) => {
          const globalIndex = t.faq.items.indexOf(item);
          const isOpen = openIndex === globalIndex;

          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-orange-500 text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
