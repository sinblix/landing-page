"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// Sinblix POS: the heading drifts slower than the copy as the section scrolls (sx-slow / sx-fast).
export function PosSection() {
  const t = useTranslation();
  const p = t.pos;
  return (
    <section id="pos" className="section">
      <div className="section__inner pos">
        <div className="pos__head sx-slow">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="h2">
            {p.title.lead}
            <em className="sx-sheen">{p.title.em}</em>
          </h2>
        </div>
        <div className="pos__copy sx-fast">
          <p>{p.body}</p>
          <div className="tags sx-left">
            {p.features.map((feature) => (
              <span className="tag sx-card" key={feature}>
                {feature}
              </span>
            ))}
          </div>
          <div className="pos__price-row">
            <span className="pos__price">
              {p.price} <small>{p.perMonth}</small>
            </span>
            <a className="btn btn--accent sx-btn sx-shine" href={links.trial}>
              {p.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
