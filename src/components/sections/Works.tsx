/* Desktop projects — 4/5 aspect, grayscale hover, offset grid */
const DESKTOP_PROJECTS = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_H9up35lsfy0y5JjqORagLTMXvD42AsZS8XVmm0JmpR1FHrEoH0-nJmWsORxelffo1b6Omi8uhs2Bs5msvGDA_oRKsx9KpMHWRjx5OhmjUy_yFTxq0k1zgtWwr0wtt6JDf7iAp-Ao7fmqoFS-g-CL5ms6avWHmxlCTFfdccwRq3W8yLVM9FBR-yZ22NETzAJtGiKUhNfe3QtK4dAmNbWpPZV6kFV5ylnTX8Alx67U6XEhK_DyZD58fiL24z45H9rzoyK2x9tTSwQ",
    alt: "Krypton OS — minimalist dark mode website interface",
    tag: "Web Design • 2024",
    title: "Krypton OS",
    offset: false,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQFujrSQZD3JAQoD_wiuxPekHtbX_FVq4oY_uB85Ct1n23Knb7hj9xfN9nhP8z17n8O907BFdQUVxN3Y9ylFCM1sShSWV96gix-qaKAT2jxt1k2ySutICzwzxNJNReeDI7ykqJilPaLYF_iRYwAyNEf_LtDIclvFj7rUSUz5cPSi_35BFWKq_umHfgYmWKAYi6M93eQ5m-mimIkyrxCtdwgKAAYlPs0b777w5UjqMdA6jV-8pqTm65OwbeQ4UW6cLa7zlb8Pt9-M",
    alt: "Flux Identity — orange and purple abstract gradient",
    tag: "Branding • 2023",
    title: "Flux Identity",
    offset: true,
  },
] as const;

/* Mobile projects — square aspect, scale hover, arrow button */
const MOBILE_PROJECTS = [
  {
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4kxOyMbVvrKENj7wxyx86M5JXNQmCX6Iu0BMXDAAniFJ4aX-kyRuKe_Ok6WfCQ1KExK5gBYvFrCUooFbbT9JTzmU4EvgeNRQogDFnF6_OqeiO3ZKT46IFUjS4j0zXqtJZS7vNz6Gy8Sqm9I_z6tiWdQHCb11cjVdm-tnkAiZHCIPCdjKQGvhXfCmyNmN-Wbcvvj7gQdyzv0enalOc2jBCur3BowTw7tRq-duoBDqfKeoeQXXnyuve9vj1G3B_hGuSjOFptaMcaeA",
    alt: "Lumina Identity — smartphone mockups on dark surface",
    tag: "Branding • 2024",
    title: "Lumina Identity",
  },
  {
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCGNWR-zxM4jEsFspb4g3_4Aa4-Y6Xuskf4V96jN32bhArfdrigu-wYFCZ0t5DYiCBXvt3QH0TJV7tXMZgYOm1p1oTsKV0OQpTax2OD7q0p6ad6D2sKDjIAa_35at_9e8xI6J9lxXyjVE0QRpLxeYsk1L_MtPbPABkESIv6Nhh8ZE_0S6mbDqgLw2g0xKyGwxqOb6XXbwRgxgY5Hbkz3qgSxNLSVMIgRHxkPoI6Nr-ldLeG6JSEneGlWdPtg8vJX3zf51dFn77L54",
    alt: "Veyro Motion — abstract colorful digital art",
    tag: "Digital Art • 2023",
    title: "Veyro Motion",
  },
] as const;

export function Works() {
  return (
    <section className="py-16 lg:py-20 px-6 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            Selected<br />Works
          </h2>
          <button className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors flex-shrink-0">
            See All Projects
            <span
              className="material-symbols-outlined group-hover:translate-x-2 transition-transform"
              aria-hidden="true"
            >
              arrow_right_alt
            </span>
          </button>
        </div>

        {/* Desktop: 2-column offset grid
            offset column uses md:mt-20 lg:mt-32 so it doesn't over-extend at 768px */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
          {DESKTOP_PROJECTS.map(({ img, alt, tag, title, offset }) => (
            <article
              key={title}
              className={`flex flex-col gap-6 group cursor-pointer${offset ? " md:mt-20 lg:mt-32" : ""}`}
            >
              <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{tag}</p>
                <h4 className="text-2xl lg:text-3xl font-black uppercase italic">{title}</h4>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: single-column stack */}
        <div className="md:hidden space-y-12">
          {MOBILE_PROJECTS.map(({ bg, alt, tag, title }) => (
            <article key={title} className="group">
              <div className="aspect-square overflow-hidden mb-5 bg-slate-100 dark:bg-slate-900">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${bg}')` }}
                  role="img"
                  aria-label={alt}
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{tag}</p>
                  <h4 className="text-xl font-bold group-hover:underline decoration-primary underline-offset-8">
                    {title}
                  </h4>
                </div>
                <button
                  className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full flex-shrink-0"
                  aria-label={`Open ${title}`}
                >
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    north_east
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Explore Archive button */}
        <div className="md:hidden mt-12">
          <button className="w-full py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            Explore Archive
          </button>
        </div>

      </div>
    </section>
  );
}
