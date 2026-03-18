"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, BACK_LABEL } from "@/lib/translations";

const VALUES = [
  { icon: "bolt", label: "Bold Design" },
  { icon: "precision_manufacturing", label: "Craft & Precision" },
  { icon: "groups", label: "Collaboration" },
  { icon: "trending_up", label: "Growth Mindset" },
];

export default function ONas() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Back link */}
        <div className="px-6 md:px-10 lg:px-20 pt-6 max-w-7xl mx-auto">
          <Link href="/#o-nas" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
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
        </section>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* Description + Mission */}
        <section className="px-6 md:px-10 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
            {tr.description}
          </p>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              {tr.missionTitle}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {tr.mission}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {tr.stats.map(({ value, label }, i) => (
              <div
                key={i}
                className={`px-6 md:px-10 lg:px-20 py-12 md:py-16 border-r border-slate-200 dark:border-slate-800
                  ${i === 1 ? "border-r-0 md:border-r" : ""}
                  ${i === 3 ? "border-r-0" : ""}
                  ${i < 2 ? "border-b border-slate-200 dark:border-slate-800 md:border-b-0" : ""}`}
              >
                <div className="text-4xl md:text-6xl font-black text-primary tracking-tighter">
                  {value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-slate-200 dark:border-slate-800 px-6 md:px-10 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-10">
            {tr.valuesTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES.map(({ icon, label }) => (
              <div
                key={label}
                className="group border border-slate-200 dark:border-slate-800 p-6 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <span
                  className="material-symbols-outlined text-primary text-3xl block mb-4"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
