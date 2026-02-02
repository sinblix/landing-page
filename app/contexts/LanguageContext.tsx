"use client";

import { createContext, useState, ReactNode } from "react";
import { Language, defaultLanguage, isValidLanguage } from "@/app/i18n/config";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }
  
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLang = navigator.language.split("-")[0];
  if (isValidLanguage(browserLang)) {
    return browserLang;
  }
  
  return defaultLanguage;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Siempre proveer el contexto, incluso antes de mount
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
