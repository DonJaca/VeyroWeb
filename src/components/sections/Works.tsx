"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const DESKTOP_PROJECTS = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_H9up35lsfy0y5JjqORagLTMXvD42AsZS8XVmm0JmpR1FHrEoH0-nJmWsORxelffo1b6Omi8uhs2Bs5msvGDA_oRKsx9KpMHWRjx5OhmjUy_yFTxq0k1zgtWwr0wtt6JDf7iAp-Ao7fmqoFS-g-CL5ms6avWHmxlCTFfdccwRq3W8yLVM9FBR-yZ22NETzAJtGiKUhNfe3QtK4dAmNbWpPZV6kFV5ylnTX8Alx67U6XEhK_DyZD58fiL24z45H9rzoyK2x9tTSwQ=w800",
    alt: "Krypton OS",
    tag: "Web Design • 2024",
    title: "Krypton OS",
    offset: false,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQFujrSQZD3JAQoD_wiuxPekHtbX_FVq4oY_uB85Ct1n23Knb7hj9xfN9nhP8z17n8O907BFdQUVxN3Y9ylFCM1sShSWV96gix-qaKAT2jxt1k2ySutICzwzxNJNReeDI7ykqJilPaLYF_iRYwAyNEf_LtDIclvFj7rUSUz5cPSi_35BFWKq_umHfgYmWKAYi6M93eQ5m-mimIkyrxCtdwgKAAYlPs0b777w5UjqMdA6jV-8pqTm65OwbeQ4UW6cLa7zlb8Pt9-M=w800",
    alt: "Flux Identity",
    tag: "Branding • 2023",
    title: "Flux Identity",
    offset: true,
  },
] as const;

const MOBILE_PROJECTS = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4kxOyMbVvrKENj7wxyx86M5JXNQmCX6Iu0BMXDAAniFJ4aX-kyRuKe_Ok6WfCQ1KExK5gBYvFrCUooFbbT9JTzmU4EvgeNRQogDFnF6_OqeiO3ZKT46IFUjS4j0zXqtJZS7vNz6Gy8Sqm9I_z6tiWdQHCb11cjVdm-tnkAiZHCIPCdjKQGvhXfCmyNmN-Wbcvvj7gQdyzv0enalOc2jBCur3BowTw7tRq-duoBDqfKeoeQXXnyuve9vj1G3B_hGuSjOFptaMcaeA=w480",
    alt: "Lumina Identity",
    tag: "Branding • 2024",
    title: "Lumina Identity",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCGNWR-zxM4jEsFspb4g3_4Aa4-Y6Xuskf4V96jN32bhArfdrigu-wYFCZ0t5DYiCBXvt3QH0TJV7tXMZgYOm1p1oTsKV0OQpTax2OD7q0p6ad6D2sKDjIAa_35at_9e8xI6J9lxXyjVE0QRpLxeYsk1L_MtPbPABkESIv6Nhh8ZE_0S6mbDqgLw2g0xKyGwxqOb6XXbwRgxgY5Hbkz3qgSxNLSVMIgRHxkPoI6Nr-ldLeG6JSEneGlWdPtg8vJX3zf51dFn77L54=w480",
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
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full scale-110 object-cover grayscale transition-all duration-700 hover:grayscale-0 group-hover:scale-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{tag}</p>
                <h4 className="text-2xl font-black uppercase italic lg:text-3xl">{title}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-12 md:hidden">
          {MOBILE_PROJECTS.map(({ img, alt, tag, title }) => (
            <article key={title} className="group">
              <div className="mb-5 aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{tag}</p>
                  <h4 className="text-xl font-bold decoration-primary underline-offset-8 group-hover:underline">
                    {title}
                  </h4>
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
