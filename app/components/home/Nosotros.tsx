"use client";

import { useTranslation } from "@/app/i18n/hooks";

// "Quiénes somos": says plainly what Sinblix is (a software factory in Venezuela) before the products. It opens the page, so it carries id="top".
export function Nosotros() {
  const t = useTranslation();
  const n = t.nosotros;
  return (
    <section id="top" className="section about-sec">
      <span id="nosotros" aria-hidden="true" />
      <div className="section__inner about sx-stagger">
        <h2 className="h2">
          <span className="eyebrow">
            {n.eyebrow}
            <span className="sr-only">: </span>
          </span>
          {n.title.lead}
          <em>{n.title.em}</em>
        </h2>
        <div className="about__copy">
          <p>{n.body}</p>
          <p className="about__products">{n.products}</p>
        </div>
      </div>
    </section>
  );
}
