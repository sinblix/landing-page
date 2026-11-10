"use client";

import { useTranslation } from "@/app/i18n/hooks";

// PROMO "Navidad Congelada": remove after 2026-12-31.
// To remove: delete this file and the <ChristmasPromo /> line in AriaSection.tsx.
const PROMO = {
  es: {
    name: "Navidad Congelada",
    text: "Contrata antes del 31 de diciembre y pagas $10 al mes para siempre (precio normal $15).",
  },
  en: {
    name: "Frozen Christmas",
    text: "Sign up before December 31 and pay $10 a month for life (regular price $15).",
  },
} as const;

export function ChristmasPromo() {
  const { language } = useTranslation();
  const promo = PROMO[language];
  return (
    <div className="promo">
      <span className="promo__name">{promo.name}</span>
      <span className="promo__text">{promo.text}</span>
    </div>
  );
}
