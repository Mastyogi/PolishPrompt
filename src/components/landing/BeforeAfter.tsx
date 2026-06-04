import { ArrowRight, X, Check, Sparkles } from "lucide-react";

export function BeforeAfter() {
  return (
    <section id="compare" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
            <Sparkles className="h-3 w-3 text-[oklch(0.58_0.24_295)]" /> The instant aha moment
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Weak Prompt vs <span className="text-gradient-primary">Smart Prompt</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Same AI. Same model. Two prompts. Wildly different outputs.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="glass animate-fade-in rounded-3xl p-6 ring-1 ring-[oklch(0.78_0.16_25)]/20 transition hover:-translate-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.55_0.22_25)]">
              <X className="h-5 w-5" /> Weak Prompt
            </div>
            <div className="mt-3 rounded-2xl p-4 font-mono text-sm bg-[oklch(0.2_0.02_280)] text-[oklch(0.98_0_0)] dark:bg-[oklch(0.18_0.02_280)] dark:ring-1 dark:ring-border">
              "Write marketing ideas"
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground/70">You get:</div>
              Generic, surface-level bullet points you could've Googled in 2 seconds.
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="relative">
              <div className="absolute -inset-2 animate-pulse-glow rounded-full bg-gradient-primary opacity-40 blur-md" />
              <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
                <ArrowRight className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="glass animate-fade-in rounded-3xl p-6 ring-1 ring-[oklch(0.7_0.18_160)]/30 transition hover:-translate-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.5_0.18_160)]">
              <Check className="h-5 w-5" /> Smart Prompt
            </div>
            <div className="mt-3 rounded-2xl p-4 font-mono text-sm leading-relaxed bg-[oklch(0.3_0.04_160)] text-[oklch(0.98_0_0)] dark:bg-[oklch(0.22_0.04_160)] dark:ring-1 dark:ring-[oklch(0.7_0.18_160)]/30">
              "Give 5 Instagram marketing hooks for an <b>Indian skincare brand</b> targeting{" "}
              <b>Gen-Z women</b> in <b>Hinglish</b> tone. Each hook ≤ 12 words, scroll-stopping,
              with a curiosity gap."
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground/70">You get:</div>
              Punchy, conversion-ready hooks tailored to your audience — usable in 30 seconds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
