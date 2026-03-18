"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDarkMode } from "@/hooks/useDarkMode";
import { t, NAV_ROUTES } from "@/lib/translations";

const ANCHOR_SECTIONS = ["uslugi", "portfolio", "podejscie", "o-nas"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, toggle: toggleLang } = useLanguage();
  const pathname = usePathname();
  const tr = t[lang];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observers: IntersectionObserver[] = [];

    ANCHOR_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [pathname]);

  const isActive = (route: string) => {
    if (route.startsWith("/#")) {
      if (pathname !== "/") return false;
      return activeSection === route.slice(2);
    }

    return pathname === route;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <div className="flex size-8 items-center justify-center bg-primary">
              <span className="material-symbols-outlined font-bold text-white" aria-hidden="true">
                view_in_ar
              </span>
            </div>
            <span className="text-2xl font-black uppercase italic tracking-tighter">VEYRO</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {tr.nav.links.map((label, i) => (
              <Link
                key={label}
                href={NAV_ROUTES[i]}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive(NAV_ROUTES[i]) ? "text-primary" : "hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleLang}
              className="flex items-center gap-0.5 border border-slate-300 px-2 py-1 text-xs font-black uppercase tracking-widest transition-all hover:border-primary hover:text-primary dark:border-slate-700"
              aria-label="Switch language"
            >
              <span className={lang === "pl" ? "text-primary" : "opacity-40"}>PL</span>
              <span className="mx-0.5 opacity-30">/</span>
              <span className={lang === "en" ? "text-primary" : "opacity-40"}>EN</span>
            </button>

            <button
              onClick={toggleDark}
              className="rounded-full p-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <Link
              href="/kontakt"
              className="bg-primary px-6 py-2 text-sm font-black uppercase text-slate-900 transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {tr.nav.cta}
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleLang}
              className="border border-slate-300 px-2 py-1 text-xs font-black uppercase tracking-widest transition-all hover:border-primary hover:text-primary dark:border-slate-700"
              aria-label="Switch language"
            >
              {lang === "pl" ? "EN" : "PL"}
            </button>

            <button
              onClick={toggleDark}
              className="rounded-full p-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={menuOpen}
            >
              <div className="flex h-6 w-6 flex-col items-center justify-center gap-[5px]">
                <span className={`block h-0.5 w-6 origin-center bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 origin-center bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </Container>

      <div className={`grid transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-slate-200 bg-background-light/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/95">
            <Container className="flex flex-col gap-4 py-6">
              {tr.nav.links.map((label, i) => (
                <Link
                  key={label}
                  href={NAV_ROUTES[i]}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive(NAV_ROUTES[i]) ? "text-primary" : "hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/kontakt"
                className="mt-2 block w-full bg-primary px-6 py-3 text-center text-sm font-black uppercase text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                {tr.nav.cta}
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}
