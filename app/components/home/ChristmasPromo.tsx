"use client";

import { useTranslation } from "@/app/i18n/hooks";

// PROMO "Navidad Congelada": remove after 2026-12-31.
// To remove: delete this file, the <ChristmasPromo /> line in AriaSection.tsx, the
// <ChristmasPriceNote /> line in Precios.tsx, and the promo paragraph in public/llms.txt and
// public/pricing.md.
const PROMO = {
  es: {
    name: "Navidad Congelada",
    text: "Contrata antes del 31 de diciembre y pagas $10 al mes para siempre (precio normal $15).",
    prices:
      "contrata Aria antes del 31 de diciembre de 2026 y pagas $10, $25 o $40 al mes para siempre, mientras tu plan siga activo.",
  },
  en: {
    name: "Frozen Christmas",
    text: "Sign up before December 31 and pay $10 a month for life (regular price $15).",
    prices:
      "sign up for Aria before December 31, 2026 and pay $10, $25 or $40 a month for life while your plan stays active.",
  },
} as const;

export function ChristmasPriceNote() {
  const { language } = useTranslation();
  const promo = PROMO[language];
  return (
    <p className="prices__promo">
      <strong>{promo.name}:</strong> {promo.prices}
    </p>
  );
}

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
