"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// The six services of the software factory, numbered cards on the same grid as #vender-aqui.
export function Servicios() {
  const t = useTranslation();
  const s = t.servicios;
  return (
    <section id="servicios" className="section services-sec">
      <div className="section__inner services">
        <h2 className="h2 sx-zoom">
          <span className="eyebrow">
            {s.eyebrow}
            <span className="sr-only">: </span>
          </span>
          {s.title.lead}
          <em>{s.title.em}</em>
        </h2>
        <ul className="services__grid sx-stagger">
          {s.items.map((item, i) => (
            <li className="card service sx-card" key={item.title}>
              <span className="service__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <a className="btn btn--line sx-btn services__cta" href={links.quote}>
          {s.cta}
        </a>
      </div>
    </section>
  );
}
