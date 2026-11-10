"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// Custom development, on the moving aurora ground.
export function Desarrollo() {
  const t = useTranslation();
  const d = t.desarrollo;
  return (
    <section id="desarrollo" className="dev sx-aurora">
      <div className="section__inner dev__inner sx-stagger">
        <div className="dev__copy">
          <h2 className="h2">
            <span className="eyebrow">
              {d.title}
              <span className="sr-only">: </span>
            </span>
            {d.heading.lead}
            <em>{d.heading.em}</em>
          </h2>
          <p>{d.body}</p>
        </div>
        <a className="btn btn--line sx-btn" href={links.quote}>
          {d.cta}
          <svg
            className="sx-nudge"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </section>
  );
}
