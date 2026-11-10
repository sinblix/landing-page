"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";
import { LiquidHero } from "./LiquidHero";

const TILES = [
  { name: "Harina PAN", meta: "$1,15 · 48 u" },
  { name: "Café 500 g", meta: "$4,80 · 22 u" },
  { name: "Queso blanco", meta: "$3,40 · 12 u" },
  { name: "Arroz 1 kg", meta: "$1,40 · 36 u" },
  { name: "Aceite 1 L", meta: "$3,90 · quedan 3", low: true },
  { name: "Azúcar 1 kg", meta: "$1,25 · 20 u" },
];

const LINES = [
  { name: "Harina PAN × 2", sum: "$2,30" },
  { name: "Café 500 g", sum: "$4,80" },
  { name: "Queso blanco", sum: "$3,40" },
];

// The POS mock under the hero: product UI, kept in Spanish in both languages.
function PosWindow() {
  return (
    <div className="pos-win sx-tilt">
      <div className="pos-win__frame">
        <div className="pos-win__bar">
          <div className="pos-win__lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="pos-win__url">pos.sinblix.com · Caja 1</span>
          <span className="pos-win__rate">
            <span className="sx-dot" aria-hidden="true" />
            BCV 231,48
          </span>
        </div>
        <div className="pos-win__body">
          <div className="pos-win__tiles">
            {TILES.map((tile) => (
              <div className="tile sx-tile" key={tile.name}>
                <span>{tile.name}</span>
                <span className={tile.low ? "tile__low" : undefined}>{tile.meta}</span>
              </div>
            ))}
          </div>
          <div className="pos-win__sale">
            <span className="sale__label">Venta actual</span>
            {LINES.map((line) => (
              <div className="sale__line" key={line.name}>
                <span>{line.name}</span>
                <span>{line.sum}</span>
              </div>
            ))}
            <div className="sale__rule" />
            <div className="sale__total">
              <span>Total</span>
              <span>$10,50</span>
            </div>
            <span className="sale__ves">Bs 2.430,54</span>
            <div className="sale__pay sx-pay">Cobrar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const t = useTranslation();
  const h = t.hero;
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__row">
          <div className="hero__copy sx-load">
            <h1 className="hero__title">
              <span className="pill hero__kicker">
                {h.eyebrow}
                <span className="sr-only">: </span>
              </span>
              <span className="hero__headline">
                {h.title.lead}
                <em className="sx-sheen">{h.title.em}</em>
              </span>
            </h1>
            <p className="hero__lead">{h.lead}</p>
            <div className="btn-row">
              <a className="btn btn--accent btn--glow sx-btn sx-shine" href={links.trial}>
                {h.trial}
              </a>
              <a className="btn btn--ghost sx-btn" href={links.aria}>
                {h.aria}
              </a>
            </div>
            <p className="hero__note">{h.note}</p>
          </div>
          <div className="hero__stage">
            <div className="hero__canvas">
              <LiquidHero label={h.canvasLabel} />
            </div>
            <div className="hero__chips">
              <div className="chip chip--offline sx-bob">
                <span className="chip__dot" aria-hidden="true" />
                {h.chips.offline}
              </div>
              <div className="chip chip--rate sx-bob-2">
                <span>{h.chips.rate}</span>
                <span>Bs 231,48</span>
              </div>
              <div className="chip chip--wa sx-bob-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
                {h.chips.replied}
              </div>
            </div>
          </div>
        </div>
        <div className="hero__window">
          <PosWindow />
        </div>
      </div>
    </section>
  );
}
