"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function ApproachPreview() {
  const { lang } = useLanguage();
  const tr = t[lang].approach;

  return (
    <section id="podejscie" className="border-t border-slate-200 dark:border-slate-800 py-16 lg:py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              {tr.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              {tr.heading[0]}{" "}
              <span className="text-outline">{tr.heading[1]}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {tr.intro}
          </p>
        </div>

        {/* Step numbers row — visible from 576px */}
        <div className="hidden sm:grid grid-cols-5 border-t border-slate-200 dark:border-slate-800">
          {tr.steps.map(({ num, title }) => (
            <div
              key={num}
              className="group border-r border-slate-200 dark:border-slate-800 last:border-r-0 px-4 py-8 md:py-10 flex flex-col gap-3 hover:bg-primary/5 transition-colors"
            >
              <span className="text-3xl md:text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity leading-none">
                {num}
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest leading-tight">
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <Link
            href="/podejscie"
            className="group inline-flex items-center gap-3 font-black uppercase tracking-widest text-sm border-2 border-slate-900 dark:border-white px-8 py-4 hover:bg-primary hover:border-primary transition-all"
          >
            {tr.cta}
            <span
              className="material-symbols-outlined group-hover:translate-x-2 transition-transform"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
