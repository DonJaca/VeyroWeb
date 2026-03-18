"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function ValueProposition() {
  const { lang } = useLanguage();
  const items = t[lang].valueProps;

  return (
    <section className="border-t border-slate-200 py-10 dark:border-slate-800 md:py-20">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 lg:gap-12">
        {items.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 border border-slate-200 p-5 transition-colors hover:border-primary dark:border-slate-800 md:gap-5 md:p-7"
          >
            <span className="material-symbols-outlined text-3xl text-primary md:text-4xl" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-lg font-black uppercase italic leading-tight md:text-xl">{title}</h3>
            <p className="text-sm opacity-70 md:text-base">{description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
