"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, BACK_LABEL } from "@/lib/translations";

export default function Podejscie() {
  const { lang } = useLanguage();
  const tr = t[lang].approach;

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Back link */}
        <div className="px-6 md:px-10 lg:px-20 pt-6 max-w-7xl mx-auto">
          <Link href="/#podejscie" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
            {BACK_LABEL[lang]}
          </Link>
        </div>

        {/* Hero header */}
        <section className="px-6 md:px-10 lg:px-20 pt-8 md:pt-12 pb-12 md:pb-16 max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            {tr.eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            {tr.heading[0]}{" "}
            <span className="text-outline">{tr.heading[1]}</span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            {tr.intro}
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* Steps */}
        <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col">
            {tr.steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="group py-10 md:py-14 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 hover:bg-primary/5 px-4 transition-colors"
              >
                {/* Number */}
                <span className="text-5xl md:text-7xl font-black opacity-10 group-hover:opacity-20 transition-opacity flex-shrink-0 leading-none">
                  {num}
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                    {title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-xl">
                    {desc}
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 self-center hidden md:block"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="py-12 md:py-16" />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
