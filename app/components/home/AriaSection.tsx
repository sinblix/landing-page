"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";
import { ChristmasPromo } from "./ChristmasPromo";

// The WhatsApp mock: product UI, kept in Spanish in both languages. The bubbles play on an 11 s loop.
function Phone() {
  return (
    <div className="phone sx-phone">
      <div className="phone__screen">
        <div className="phone__head">
          <span className="phone__avatar" aria-hidden="true">
            A
          </span>
          <div className="phone__who">
            <span>Bodega La Esquina</span>
            <span>Aria responde</span>
          </div>
        </div>
        <div className="phone__chat">
          <span className="phone__day">Hoy 11:04 p. m.</span>
          <div className="msg msg--in sx-m1">¿Mañana a qué hora abren? ¿Hacen delivery?</div>
          <div className="msg msg--out sx-m2">
            Abrimos a las 7:00 a. m. Sí, hacemos delivery en la zona por $1. ¿Te paso la lista de precios?
          </div>
          <div className="msg msg--in msg--short sx-m3">Sí porfa</div>
          <div className="msg msg--out sx-m4">
            Te la envío: harina PAN $1,15, café $4,80, queso $3,40 el medio kilo.
          </div>
          <div className="msg--typing sx-m5" aria-hidden="true">
            <span className="sx-dot" />
            <span className="sx-dot" />
            <span className="sx-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AriaSection() {
  const t = useTranslation();
  const a = t.aria;
  return (
    <section id="aria" className="aria">
      <div className="section__inner aria__inner sx-stagger">
        <div className="aria__copy">
          <h2 className="h2">
            <span className="eyebrow">
              {a.eyebrow}
              <span className="sr-only">: </span>
            </span>
            {a.title.lead}
            <em>{a.title.em}</em>
          </h2>
          <p>{a.body}</p>
          <ChristmasPromo />
          <a className="btn btn--dark sx-btn sx-shine" href={links.aria}>
            {a.cta}
          </a>
        </div>
        <div className="aria__visual">
          <Phone />
        </div>
      </div>
    </section>
  );
}
