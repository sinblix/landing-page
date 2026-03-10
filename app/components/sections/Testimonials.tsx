"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import { useState, useEffect } from "react";

export function Testimonials() {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, t.testimonials.items.length]);

  const currentTestimonial = t.testimonials.items[currentIndex];

  return (
    <Section variant="light" id="testimonios">
      <div className="text-center mb-16">
        <h2 className="sinblix-section-title text-gray-900 mb-4">
          {t.testimonials.title}
        </h2>
        <p className="sinblix-section-subtitle max-w-2xl mx-auto">
          {t.testimonials.subtitle}
        </p>
      </div>

      <div
        className="max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="sinblix-card p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {currentTestimonial.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;{currentTestimonial.testimonial}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-gray-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600">
                  {currentTestimonial.role} - {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {t.testimonials.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
