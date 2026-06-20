"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const t = getTranslations(lang);
  const otherLang = lang === "en" ? "ko" : "en";
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/experience`, label: t.nav.experience },
    { href: `/${lang}/projects`, label: t.nav.projects },
    { href: `/${lang}/education`, label: t.nav.education },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-lg">
      <nav className="site-shell flex h-16 items-center justify-between gap-5">
        <Link href={`/${lang}`} className="font-serif text-xl text-text">
          {lang === "ko" ? "변재일" : "Brasley Byun"}
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1 sm:flex">
          {links.map((link) => {
            const active =
              link.href === `/${lang}`
                ? pathname === `/${lang}`
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                    active
                      ? "bg-accent-bg text-text font-medium"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs">
            <Globe size={13} className="text-text-secondary" />
            {lang === "ko" ? (
              <>
                <span className="font-medium text-text">한국어</span>
                <span className="text-text-tertiary">/</span>
                <Link href={switchPath} className="text-text-secondary transition-colors hover:text-text">English</Link>
              </>
            ) : (
              <>
                <Link href={switchPath} className="text-text-secondary transition-colors hover:text-text">한국어</Link>
                <span className="text-text-tertiary">/</span>
                <span className="font-medium text-text">English</span>
              </>
            )}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-highlight px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-text"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
