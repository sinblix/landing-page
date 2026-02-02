export type Language = "es" | "en";

export const defaultLanguage: Language = "es";
export const supportedLanguages: Language[] = ["es", "en"];

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}
