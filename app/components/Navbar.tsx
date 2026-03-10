"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "@/app/i18n/hooks";

export function Navbar() {
  const t = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <Logo variant="white" size="sm" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <LanguageSelector />
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-gray-200 hover:text-orange-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/584121785954"
              target="_blank"
              rel="noopener noreferrer"
              className="sinblix-btn-primary px-5 py-2.5 text-sm"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <a
              href="https://wa.me/584121785954"
              target="_blank"
              rel="noopener noreferrer"
              className="sinblix-btn-primary px-4 py-2 text-xs"
            >
              WhatsApp
            </a>
            <button aria-label="menu" className="p-2 text-gray-300">
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
