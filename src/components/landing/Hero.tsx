import { ArrowRight, Sparkles, Zap, Target, Brain } from "lucide-react";
import { VisitorCounter } from "./VisitorCounter";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-10 pb-16 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.58_0.24_295)]" />
            60% Off · Limited Time
          </span>
          <VisitorCounter />
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          99% People Use ChatGPT <span className="text-gradient-primary">Wrong.</span>
        </h1>
        <p className="mt-5 text-lg text-foreground/80 sm:text-xl">
          And that's why they keep getting{" "}
          <span className="font-semibold">generic AI answers.</span>
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
          Most people blame AI. Reality? Their prompts are broken. Take the free 4-minute AI
          Prompt-Skill test, see exactly where you stand, then fix it with a proven 21-day system.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href="#quiz" className="btn-primary animate-pulse-glow">
            Take the Free AI PROMPT SKILL Test <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#cta" className="btn-ghost">
            Unlock Ebook
          </a>
        </div>

        <ul className="mx-auto mt-8 grid max-w-2xl gap-2 text-sm sm:grid-cols-2">
          {[
            { icon: Zap, text: "Weak prompts = weak results" },
            { icon: Target, text: "Bad prompts waste hours" },
            { icon: Brain, text: "Smart prompts save years" },
            { icon: Sparkles, text: "150+ tested prompt framework" },
          ].map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-left"
            >
              <Icon className="h-4 w-4 shrink-0 text-[oklch(0.62_0.22_255)]" />
              <span className="text-foreground/85">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-3">
          {[
            { v: "150+", l: "Bonus Prompts" },
            { v: "21 Days", l: "To master AI" },
            { v: "4.8★", l: "1,240 ratings" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-3 text-center">
              <div className="text-lg font-bold text-gradient-primary">{s.v}</div>
              <div className="text-[11px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
