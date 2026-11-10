"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";
import { ChristmasPriceNote } from "./ChristmasPromo";

// Visible prices, so the SoftwareApplication offers in the JSON-LD match what the page shows and
// AI answers can quote them. Plans and amounts come from es.ts / en.ts (precios).
export function Precios() {
  const t = useTranslation();
  const p = t.precios;
  const groups = [
    { ...p.pos, cta: t.pos.cta, href: links.trial, promo: false },
    { ...p.aria, cta: t.hero.aria, href: links.aria, promo: true },
  ];
  return (
    <section id="precios" className="section">
      <div className="section__inner prices">
        <div className="prices__head sx-stagger">
          <h2 className="h2">
            {p.title.lead}
            <em>{p.title.em}</em>
          </h2>
          <p className="prices__intro">{p.intro}</p>
        </div>
        <div className="prices__groups">
          {groups.map((group) => (
            <div className="prices__group sx-stagger" key={group.name}>
              <h3 className="prices__name">{group.name}</h3>
              <ul className="prices__list">
                {group.plans.map((plan) => (
                  <li className="prices__plan sx-card" key={plan.name}>
                    <span className="prices__plan-name">{plan.name}</span>
                    <span className="prices__amount">
                      {plan.price} <span>{p.month}</span>
                    </span>
                    <span className="prices__detail">{plan.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="prices__note">{group.note}</p>
              {group.promo && <ChristmasPriceNote />}
              <a className="btn btn--line sx-btn" href={group.href}>
                {group.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
