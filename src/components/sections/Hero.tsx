const HERO_IMG_DESKTOP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBswblmMmSvckhQ6bcl7-wkOZ7uBITc1k3rxKSWxm15AaQZFES7sUG6j05OmPcldaukcYjqFIohzcpA_ImuWWMePcS5X_t1zZIBdreB1WG-oOUazZXAGpM1VhT_WXX6llsjXfyUuX4XJ_RPLSl8aJ9tkhCd8b3PlZRRgm_oFloN9ThXBJiRxdfhEU9qsdv3LKzzYFW1opPxBo45ocBRME5b7Crce-QEo1Qyxd7nmrA8_MlAdw40UQ_tjPwqHZIfm7loLg59oUJOscE";

const HERO_IMG_MOBILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFD2qu-EGNxAyjdb0j_txxs592hQmp8B5tmknHhKyiWiXuwQ_Gp9CtUq-X3K6yXKbX0VeM27KG53TWNKlrZ0Z2OO961rFmmzwUqSu_pQZHr_G4UI3dNw0ciTetArEEBVkt6-qKFW5ndqH1f1l4uAkfoOFm5GAlG99Z8_gtItsYROpovJuQ6UInzNAYwUulFutIxIvdno9cHIfCfJdxeXVitk8dda0tNbdjBnDXtuFwIZS7ydVDt9fW9Q5zylU6PPRh79UFbkRvS24";

export function Hero() {
  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 pb-16 md:py-20 lg:py-32 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 lg:gap-12">

        {/* Eyebrow — desktop only */}
        <p className="hidden md:block text-primary font-bold uppercase tracking-[0.3em] text-sm">
          Creative Direction &amp; Digital Design
        </p>

        {/* Headline — fluid scale across breakpoints */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
          Bold<br />
          <span className="text-outline">Impact</span><br />
          Design
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Description + mobile CTA */}
          <div className="space-y-6 md:max-w-sm lg:max-w-md">
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed opacity-80">
              Crafting high-performance digital experiences with a focus on unique layout rhythms
              and brutalist aesthetics.
            </p>

            {/* Mobile CTA buttons */}
            <div className="flex flex-wrap gap-3 md:hidden">
              <button className="bg-primary hover:bg-black text-slate-900 hover:text-white font-black px-6 py-3 uppercase text-sm transition-all">
                View Work
              </button>
              <button className="border border-slate-900 dark:border-slate-100 px-6 py-3 font-black text-sm uppercase tracking-widest hover:bg-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full md:w-1/2 relative group">

            {/* Desktop: 16/9 <img> with primary overlay */}
            <div className="hidden md:block aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG_DESKTOP}
                alt="Abstract 3D digital sculpture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile: 4/5 background-image + play badge
                pb-8 pr-6 gives room for the badge that overflows -bottom-6 -right-4 */}
            <div className="md:hidden relative pb-8 pr-6">
              <div className="aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${HERO_IMG_MOBILE}')` }}
                  role="img"
                  aria-label="Abstract 3D architectural render"
                />
              </div>
              <div className="absolute -bottom-0 right-0 bg-primary p-5 shadow-xl">
                <span className="material-symbols-outlined text-background-dark text-3xl" aria-hidden="true">
                  play_arrow
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
