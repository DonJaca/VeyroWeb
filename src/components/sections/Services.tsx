"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const tr = t[lang].services;

  return (
    <section>

      {/* Desktop: light background, full-width hover rows */}
      <div className="hidden md:block py-16 lg:py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black uppercase mb-12 lg:mb-16 tracking-tighter">
            {tr.heading}
          </h2>
          <div className="flex flex-col">
            {tr.items.map(({ num, title, desc }) => (
              <div
                key={num}
                className="group py-8 lg:py-12 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between hover:bg-primary transition-all px-4 gap-2 md:gap-0"
              >
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="text-lg font-black opacity-30 group-hover:text-white">{num}</span>
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tighter group-hover:text-white group-hover:italic transition-all">
                    {title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest pl-12 md:pl-0 md:max-w-xs group-hover:text-white">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: dark background, arrow list */}
      <div className="md:hidden bg-black text-white px-6 py-14 border-t border-slate-800">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
              {tr.mobileLabel}
            </span>
            <h2 className="text-3xl font-black text-white">{tr.mobileHeading}</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {tr.items.map(({ num, title }) => (
              <div key={num} className="py-6 flex justify-between items-center group">
                <div className="space-y-1">
                  <span className="text-slate-400 text-sm font-mono">{num}/</span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </div>
                <span
                  className="material-symbols-outlined group-hover:translate-x-2 transition-transform flex-shrink-0"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
