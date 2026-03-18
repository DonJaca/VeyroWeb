"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function AboutPreview() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <section id="o-nas" className="bg-black text-white py-16 lg:py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              {tr.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              {tr.heading[0]}{" "}
              <span className="text-outline" style={{ WebkitTextStrokeColor: "white" }}>
                {tr.heading[1]}
              </span>
            </h2>
          </div>
          <p className="md:max-w-sm text-white/60 text-base leading-relaxed">
            {tr.description}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
          {tr.stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-r border-white/10 last:border-r-0 px-4 py-8 md:py-10 flex flex-col gap-2"
            >
              <span className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-none">
                {value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <Link
            href="/o-nas"
            className="group inline-flex items-center gap-3 font-black uppercase tracking-widest text-sm border-2 border-white px-8 py-4 hover:bg-primary hover:border-primary hover:text-black transition-all"
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
