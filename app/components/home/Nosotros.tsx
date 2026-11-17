"use client";

import Image from "next/image";
import { useTranslation } from "@/app/i18n/hooks";

// "Quiénes somos" holds the page h1: says plainly what Sinblix is (a software factory in Venezuela)
// before the products, with the mango mascot at a laptop floating beside it. It opens the page, so
// it carries id="top".
export function Nosotros() {
  const t = useTranslation();
  const n = t.nosotros;
  return (
    <section id="top" className="section about-sec">
      <span id="nosotros" aria-hidden="true" />
      <div className="section__inner about">
        <div className="about__text sx-stagger">
          <h1 className="h2 about__title">
            <span className="eyebrow">
              {n.eyebrow}
              <span className="sr-only">: </span>
            </span>
            {n.title.lead}
            <em>{n.title.em}</em>
          </h1>
          <div className="about__copy">
            <p>{n.body}</p>
            <p className="about__products">{n.products}</p>
          </div>
        </div>
        <div className="about__mascot" aria-hidden="true">
          <div className="about__glow" />
          <Image
            className="about__mango sx-bob"
            src="/mascota/mango-laptop.png"
            alt=""
            width={800}
            height={760}
            sizes="(max-width: 860px) 260px, 420px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
