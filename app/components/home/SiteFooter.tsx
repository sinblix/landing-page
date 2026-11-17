"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// One footer for every page: the name and city, WhatsApp, the legal links and Instagram, the year.
export function SiteFooter() {
  const t = useTranslation();
  return (
    <footer className="site-foot">
      <div className="site-foot__inner">
        <div className="site-foot__brand">
          <span className="logo">
            Sinblix<span>.</span>
          </span>
          <span className="site-foot__place">{t.footer.place}</span>
        </div>
        <div className="site-foot__links">
          <a href={links.whatsapp}>{t.footer.whatsapp}</a>
          <a href={links.privacy}>{t.footer.privacy}</a>
          <a href={links.terms}>{t.footer.terms}</a>
          <a href={links.instagram}>{t.footer.instagram}</a>
        </div>
        <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Sinblix</span>
      </div>
    </footer>
  );
}
