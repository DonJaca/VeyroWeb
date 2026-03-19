"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function ApproachPreview() {
  const { lang } = useLanguage();
  const tr = t[lang].approach;

  return (
    <section id="podejscie" className="border-t border-slate-200 py-16 dark:border-slate-800 lg:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {tr.eyebrow}
            </span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter md:text-6xl lg:text-7xl">
              {tr.heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:max-w-sm">
            {tr.intro}
          </p>
        </div>

        <div className="hidden grid-cols-5 border-t border-slate-200 dark:border-slate-800 sm:grid">
          {tr.steps.map(({ num, title }) => (
            <div
              key={num}
              className="group flex flex-col gap-3 border-r border-slate-200 px-4 py-8 transition-colors last:border-r-0 hover:bg-primary/5 dark:border-slate-800 md:py-10"
            >
              <span className="text-3xl font-black leading-none opacity-10 transition-opacity group-hover:opacity-20 md:text-5xl">
                {num}
              </span>
              <span className="text-xs font-bold uppercase leading-tight tracking-widest md:text-sm">
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <Link
            href="/podejscie"
            className="group inline-flex items-center gap-3 border-2 border-slate-900 px-8 py-4 text-sm font-black uppercase tracking-widest transition-all hover:border-primary hover:bg-primary dark:border-white"
          >
            {tr.cta}
            <span
              className="material-symbols-outlined transition-transform group-hover:translate-x-2"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
