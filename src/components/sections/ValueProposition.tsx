"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function ValueProposition() {
  const { lang } = useLanguage();
  const items = t[lang].valueProps;

  return (
    <section className="py-10 md:py-20 border-t border-slate-200 dark:border-slate-800 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        {items.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 md:gap-5 p-5 md:p-7 border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-lg md:text-xl font-black uppercase italic leading-tight">{title}</h3>
            <p className="opacity-70 text-sm md:text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
