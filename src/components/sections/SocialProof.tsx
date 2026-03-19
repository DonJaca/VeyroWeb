"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const TECHNOLOGIES = ["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Framer"] as const;

export function SocialProof() {
  const { lang } = useLanguage();

  return (
    <section className="border-y border-slate-200 py-12 dark:border-slate-800 md:py-20">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 md:mb-12 md:tracking-[0.5em]">
          {t[lang].socialProof}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-slate-500 grayscale transition-all hover:text-slate-900 hover:grayscale-0 dark:text-slate-400 dark:hover:text-slate-100 md:gap-16 lg:gap-24">
          {TECHNOLOGIES.map((name) => (
            <span key={name} className="text-lg font-black italic tracking-tighter md:text-2xl">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
