"use client";

import { useState } from "react";
import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";
import { LanguageSelector } from "../LanguageSelector";

// The logo, four section links and the main action. Below 768px the links fold behind a menu
// button; the logo, ES/EN and the action stay in the bar. On the legal pages the links point back
// to the home page's sections.
export function SiteNav({ onHome = true }: { onHome?: boolean }) {
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const base = onHome ? "" : "/";
  const items = [
    { href: `${base}#pos`, label: t.nav.pos },
    { href: `${base}#aria`, label: t.nav.aria },
    { href: `${base}#precios`, label: t.nav.precios },
    { href: `${base}#desarrollo`, label: t.nav.desarrollo },
    { href: `${base}#preguntas`, label: t.nav.preguntas },
  ];

  return (
    <header className="site-head">
      <a className="skip" href="#main">
        {t.nav.skip}
      </a>
      <nav className="site-nav" aria-label={t.nav.label}>
        <a className="logo" href={onHome ? "#top" : "/"} aria-label={t.nav.home}>
          Sinblix<span>.</span>
        </a>
        <div className="site-nav__links" id="site-menu" data-open={open}>
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="site-nav__actions">
          <LanguageSelector />
          <a className="btn btn--light sx-btn" href={links.trial}>
            {t.nav.cta}
          </a>
          <button
            className="site-nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
