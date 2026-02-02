"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { es } from "./translations/es";
import { en } from "./translations/en";

export function useTranslation() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  
  const { language } = context;
  const translations = language === "en" ? en : es;
  
  return { ...translations, language };
}
