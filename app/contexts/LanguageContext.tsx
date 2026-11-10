"use client";

import { createContext, useCallback, useEffect, useState, ReactNode } from "react";
import { Language, defaultLanguage, isValidLanguage } from "@/app/i18n/config";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "language";

// The server always renders Spanish (static page). A visitor who chose English before gets it
// after mount, read from localStorage; the choice never reaches the server.
export function LanguageProvider({
  children,
  initialLanguage = defaultLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // storage blocked: keep the default
    }
    if (stored && isValidLanguage(stored) && stored !== initialLanguage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reads a client-only preference after hydration
      setLanguageState(stored);
    }
  }, [initialLanguage]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage blocked: the choice lasts for this page view only
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
