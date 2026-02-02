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
      className="bg-transparent border-none text-gray-300 text-lg font-medium cursor-pointer focus:outline-none hover:text-orange-400 transition-colors appearance-none"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%9ca3af\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', backgroundSize: '18px' }}
    >
      <option value="es">🇪🇸</option>
      <option value="en">🇺🇸</option>
    </select>
  );
}
