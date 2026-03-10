"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import { useEffect, useState, useRef } from "react";

function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit = {}
) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, options]);

  return elementRef;
}

function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useIntersectionObserver(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  });

  useEffect(() => {
    if (!hasAnimated) return;

    const numericValue = parseInt(value.replace(/\D/g, ""));
    if (isNaN(numericValue)) {
      // count ya está inicializado en 0, no necesitamos hacer nada
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value, duration]);

  return (
    <div ref={elementRef}>
      {value.includes("+") ? `${count}+` : count.toString()}
    </div>
  );
}

export function Stats() {
  const t = useTranslation();
  const statGlyphs = ["PR", "CL", "YR", "TK"];

  return (
    <Section variant="dark" id="estadisticas">
      <div className="text-center mb-16">
        <h2 className="sinblix-section-title text-white mb-4">
          {t.stats.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.stats.items.map((stat, index) => (
          <div
            key={index}
            className="text-center rounded-2xl p-8 border border-slate-700 bg-slate-900/80 hover:border-orange-400 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/15 text-xs font-bold tracking-widest text-orange-300">
              {statGlyphs[index] ?? "SB"}
            </div>
            <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="text-gray-300 text-lg font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
