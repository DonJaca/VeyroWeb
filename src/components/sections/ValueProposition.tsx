"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function ValueProposition() {
  const { lang } = useLanguage();
  const items = t[lang].valueProps;

  return (
    <section className="hidden md:block py-20 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
        {items.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-6 p-8 border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-2xl font-black uppercase italic">{title}</h3>
            <p className="opacity-70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
