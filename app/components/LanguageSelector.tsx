"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/hooks";

// The ES/EN switch in the nav: a plain mono word, client-side only.
export function LanguageSelector() {
  const context = useContext(LanguageContext);
  const t = useTranslation();
  if (!context) return null;
  const { language, setLanguage } = context;
  const next = language === "es" ? "en" : "es";

  return (
    <button
      type="button"
      className="lang-toggle"
      lang={next}
      aria-label={t.nav.langLabel}
      onClick={() => setLanguage(next)}
    >
      {t.nav.langShort}
    </button>
  );
}
