"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const DESKTOP_PROJECTS = [
  {
    img: "/images/krypton-os.webp",
    alt: "Krypton OS",
    tag: "Web Design • 2024",
    title: "Krypton OS",
    offset: false,
  },
  {
    img: "/images/flux-identity.webp",
    alt: "Flux Identity",
    tag: "Branding • 2023",
    title: "Flux Identity",
    offset: true,
  },
] as const;

const MOBILE_PROJECTS = [
  {
    img: "/images/lumina-identity.webp",
    alt: "Lumina Identity",
    tag: "Branding • 2024",
    title: "Lumina Identity",
  },
  {
    img: "/images/veyro-motion.webp",
    alt: "Veyro Motion",
    tag: "Digital Art • 2023",
    title: "Veyro Motion",
  },
] as const;

export function Works() {
  const { lang } = useLanguage();
  const tr = t[lang].works;

  return (
    <section id="portfolio" className="bg-background-light py-16 dark:bg-background-dark lg:py-20">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:mb-16">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl lg:text-6xl">
            {tr.heading[0]}<br />{tr.heading[1]}
          </h2>
          <Link href="/portfolio" className="group flex flex-shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary">
            {tr.seeAll}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2" aria-hidden="true">
              arrow_right_alt
            </span>
          </Link>
        </div>

        <div className="hidden grid-cols-2 gap-x-8 gap-y-16 md:grid lg:gap-y-20">
          {DESKTOP_PROJECTS.map(({ img, alt, tag, title, offset }) => (
            <article
              key={title}
              className={`group flex cursor-pointer flex-col gap-6${offset ? " md:mt-20 lg:mt-32" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="scale-110 object-cover grayscale transition-all duration-700 hover:grayscale-0 group-hover:scale-100"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{tag}</p>
                <h3 className="text-2xl font-black uppercase italic lg:text-3xl">{title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-12 md:hidden">
          {MOBILE_PROJECTS.map(({ img, alt, tag, title }) => (
            <article key={title} className="group">
              <div className="relative mb-5 aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{tag}</p>
                  <h3 className="text-xl font-bold decoration-primary underline-offset-8 group-hover:underline">
                    {title}
                  </h3>
                </div>
                <button className="flex-shrink-0 rounded-full bg-primary/10 p-3 dark:bg-primary/20" aria-label={`Otwórz ${title}`}>
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">north_east</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/portfolio" className="block w-full border-2 border-slate-900 py-4 text-center text-sm font-black uppercase tracking-widest text-slate-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
            {tr.explore}
          </Link>
        </div>
      </Container>
    </section>
  );
}
