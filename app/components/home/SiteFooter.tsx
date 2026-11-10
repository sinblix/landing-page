"use client";

import { useTranslation } from "@/app/i18n/hooks";
import { links } from "@/app/config/links";

// One footer for every page: the name, the legal links and Instagram, the year.
export function SiteFooter() {
  const t = useTranslation();
  return (
    <footer className="site-foot">
      <div className="site-foot__inner">
        <span className="logo">
          Sinblix<span>.</span>
        </span>
        <div className="site-foot__links">
          <a href={links.privacy}>{t.footer.privacy}</a>
          <a href={links.terms}>{t.footer.terms}</a>
          <a href={links.instagram}>{t.footer.instagram}</a>
        </div>
        <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Sinblix</span>
      </div>
    </footer>
  );
}
