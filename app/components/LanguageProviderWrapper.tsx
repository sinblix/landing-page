"use client";

import { LanguageProvider } from "@/app/contexts/LanguageContext";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { Language } from "@/app/i18n/config";

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

export function LanguageProviderWrapper({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <LangUpdater />
      {children}
    </LanguageProvider>
  );
}
