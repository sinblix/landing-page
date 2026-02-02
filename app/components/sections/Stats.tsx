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

  return (
    <Section variant="dark" id="estadisticas">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {t.stats.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.stats.items.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
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
