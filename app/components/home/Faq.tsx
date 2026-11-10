"use client";

import { useTranslation } from "@/app/i18n/hooks";

export function Faq() {
  const t = useTranslation();
  return (
    <section id="preguntas" className="section">
      <div className="section__inner faq">
        <h2 className="h2">{t.faq.title}</h2>
        <div className="faq__grid sx-stagger">
          {t.faq.items.map((item) => (
            <div className="faq__item sx-card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
