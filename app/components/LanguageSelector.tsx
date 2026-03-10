"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { Language } from "@/app/i18n/config";

export function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext)!;

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label="Select language"
      className="rounded-full border border-white/15 bg-white/5 px-3 py-2 pr-8 text-sm font-semibold text-gray-200 cursor-pointer hover:border-orange-400/60 hover:text-orange-300 appearance-none"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%9ca3af\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', backgroundSize: '18px' }}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}
