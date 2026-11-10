"use client";

import { Fragment } from "react";
import { useTranslation } from "@/app/i18n/hooks";

// Decorative feature words on two endless rows. Each row holds the list twice so it can slide by
// half its width; the second copy is aria-hidden so the words are read once. No headings here.
export function Marquee() {
  const t = useTranslation();
  const big = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {t.marquee.big.map((word, i) => (
        <Fragment key={word}>
          <span>{i % 2 === 1 ? <em>{word}</em> : word}</span>
          <span className="marquee__sep" aria-hidden="true">
            ·
          </span>
        </Fragment>
      ))}
    </div>
  );
  const small = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {t.marquee.small.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );
  return (
    <section className="marquee" aria-label={t.marquee.label}>
      <div className="marquee__row marquee__row--big sx-marquee">
        {big(false)}
        {big(true)}
      </div>
      <div className="marquee__row marquee__row--small sx-marquee-rev">
        {small(false)}
        {small(true)}
      </div>
    </section>
  );
}
