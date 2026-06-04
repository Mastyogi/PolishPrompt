import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center text-white shadow-glow">
          <div className="absolute inset-0 bg-gradient-primary" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[oklch(0.85_0.16_215)]/40 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Stop Using AI Like <span className="text-[oklch(0.92_0.12_90)]">Everyone Else.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              Learn the system behind smarter prompts — and turn AI into your personal assistant in
              21 days.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://amzn.in/d/00vHMnM3"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[oklch(0.4_0.2_280)] shadow-xl transition hover:scale-[1.02]"
              >
                Unlock Ebook <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Take Free AI PROMPT SKILL Test First
              </a>
            </div>
            <div className="mt-6 text-xs text-white/70">
              60% Off · Limited Time · Instant access · Lifetime updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
