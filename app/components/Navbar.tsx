"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "@/app/i18n/hooks";

export function Navbar() {
  const t = useTranslation();

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link href="/" className="flex items-center">
            <Logo variant="white" size="md" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <LanguageSelector />
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/584121785954"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:shadow-lg transition-all font-medium"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button className="p-2 text-gray-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
