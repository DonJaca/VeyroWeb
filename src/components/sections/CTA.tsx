"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function CTA() {
  const { lang } = useLanguage();
  const tr = t[lang].cta;

  return (
    <section className="py-16 text-center md:py-24 lg:py-32">
      <Container>
        <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
          {tr.headline}
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 md:mb-12 md:text-lg">
          {tr.description}
        </p>

        <Link
          href="/kontakt"
          className="inline-block bg-primary px-10 py-5 text-xl font-black uppercase italic text-slate-900 transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black lg:px-12 lg:py-6 lg:text-2xl"
        >
          {tr.button}
        </Link>
      </Container>
    </section>
  );
}
