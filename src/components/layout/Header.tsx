"use client";

import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, toggle: toggleLang } = useLanguage();
  const tr = t[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto lg:px-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="size-8 bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white font-bold" aria-hidden="true">
              view_in_ar
            </span>
          </div>
          <span className="text-2xl font-black tracking-tighter italic uppercase">VEYRO</span>
        </Link>

        {/* Desktop: nav links */}
        <div className="hidden md:flex items-center gap-10">
          {tr.nav.links.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop: right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-0.5 text-xs font-black uppercase tracking-widest border border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary transition-all px-2 py-1"
            aria-label="Switch language"
          >
            <span className={lang === "pl" ? "text-primary" : "opacity-40"}>PL</span>
            <span className="opacity-30 mx-0.5">/</span>
            <span className={lang === "en" ? "text-primary" : "opacity-40"}>EN</span>
          </button>

          {/* Dark mode */}
          <button
            onClick={toggleDark}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button className="bg-primary hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-slate-900 font-black px-6 py-2 uppercase text-sm transition-all">
            {tr.nav.cta}
          </button>
        </div>

        {/* Mobile: icon row */}
        <div className="flex md:hidden items-center gap-1">
          {/* Language toggle — mobile */}
          <button
            onClick={toggleLang}
            className="text-xs font-black uppercase tracking-widest border border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary transition-all px-2 py-1"
            aria-label="Switch language"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>

          <button
            onClick={toggleDark}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile: slide-down menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
          {tr.nav.links.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button className="mt-2 bg-primary text-slate-900 font-black px-6 py-3 uppercase text-sm w-full">
            {tr.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
