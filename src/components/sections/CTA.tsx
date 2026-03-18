export function CTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">

        {/* Mobile: full-width button above headline */}
        <button className="md:hidden w-full bg-primary text-slate-900 text-lg font-black px-8 py-5 uppercase italic hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all mb-10">
          Start a Conversation
        </button>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-10 md:mb-12">
          Have a <span className="text-outline">Project?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Desktop: CTA button inline */}
          <button className="hidden md:block bg-primary text-slate-900 text-xl lg:text-2xl font-black px-10 lg:px-12 py-5 lg:py-6 uppercase italic hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            Start a Conversation
          </button>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">Email me at</span>
            <a
              href="mailto:hello@veyro.design"
              className="text-lg md:text-xl font-black border-b-4 border-primary hover:text-primary transition-colors"
            >
              hello@veyro.design
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
