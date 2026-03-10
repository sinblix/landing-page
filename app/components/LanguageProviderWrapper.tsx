"use client";

import { LanguageProvider } from "@/app/contexts/LanguageContext";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";

function LangUpdater() {
  const context = useContext(LanguageContext);
  const language = context?.language;
  
  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
    }
  }, [language]);

  return null;
}

export function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LangUpdater />
      {children}
    </LanguageProvider>
  );
}
