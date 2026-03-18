"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const TECHNOLOGIES = ["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Framer"] as const;

export function SocialProof() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 md:py-20 border-y border-slate-200 dark:border-slate-800 px-6 md:px-10 lg:px-20">
      <p className="text-center font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs opacity-50 mb-8 md:mb-12">
        {t[lang].socialProof}
      </p>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
        {TECHNOLOGIES.map((name) => (
          <span key={name} className="text-lg md:text-2xl font-black italic tracking-tighter">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
