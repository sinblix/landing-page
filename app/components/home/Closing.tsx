"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// The closing call to action over a breathing orange glow.
export function Closing() {
  const t = useTranslation();
  const c = t.close;
  return (
    <section className="close" aria-labelledby="close-title">
      <div className="close__glow sx-breathe" aria-hidden="true" />
      <div className="close__inner">
        <h2 id="close-title" className="close__title sx-zoom">
          {c.title.lead}
          <em className="sx-sheen">{c.title.em}</em>
        </h2>
        <div className="btn-row">
          <a className="btn btn--accent sx-btn sx-shine" href={links.trial}>
            {c.trial}
          </a>
          <a className="btn btn--ghost sx-btn" href={links.aria}>
            {c.aria}
          </a>
        </div>
      </div>
    </section>
  );
}
