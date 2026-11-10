"use client";

import { useTranslation } from "@/app/i18n/hooks";

// "Hecho para vender aquí": the heading zooms in, the three cards slide in from the left.
export function VenderAqui() {
  const t = useTranslation();
  const v = t.venderAqui;
  return (
    <section id="vender-aqui" className="section">
      <div className="section__inner vender">
        <h2 className="h2 sx-zoom">{v.title}</h2>
        <div className="cards sx-left">
          {v.cards.map((card) => (
            <div className="card sx-card" key={card.mark}>
              <span className="card__mark sx-sheen">{card.mark}</span>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
