import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Copy, Check, X, Megaphone, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const EXAMPLES = [
  {
    label: "Marketing",
    icon: <Megaphone className="h-4 w-4" />,
    bad: "Write marketing ideas",
    badResult:
      "1. Create engaging posts\n2. Use relevant hashtags\n3. Post consistently\n4. Engage with your audience\n\nGeneric advice you could get from any blog.",
    good:
      'You are a social media strategist. Write 5 Instagram hooks for a "{business_type}" brand targeting "{audience}" in a "{tone}" tone.\n\nRequirements:\n- Each hook ≤ 12 words with a curiosity gap\n- Hinglish style\n- Scroll-stopping opener\n\nFormat:\n| Hook | Why it works |',
    goodResult:
      "| Hook | Why it works |\n|-------|-------------|\n| 'Skin glow bina filter ke?' | Relatable Gen-Z pain point |\n| 'Mummy ne poocha — yeh glow kya hai?' | Cultural hook, instant relatability |\n\nPunchy, conversion-ready — usable in 30 seconds.",
  },
  {
    label: "Business",
    icon: <BarChart3 className="h-4 w-4" />,
    bad: "Analyze my competitors",
    badResult:
      "Your competitors are doing well. You should study their social media and improve your product.\n\nSurface-level. No structure, no framework.",
    good:
      "Act as a Market Research Analyst. Conduct a detailed SWOT analysis comparing my business: \"{business_type}\" with main competitor \"{competitor}\".\n\nStructure:\n| Factor | My Business | Competitor |\n|--------|-------------|------------|\n| Strengths | | |\n| Weaknesses | | |\n\nOutput as a comparison table with actionable insights.",
    goodResult:
      "| Factor | My Business (Local Gym) | Competitor (Cult.fit) |\n|--------|------------------------|----------------------|\n| Strengths | Personal touch, lower cost | Brand trust, app ecosystem |\n| Weakness | No app, limited classes | Higher price |\n| Opportunity | Partner with local cafes | — |\n\nStructured. Comparable. Actionable — directly usable.",
  },
  {
    label: "Productivity",
    icon: <Zap className="h-4 w-4" />,
    bad: "Help me learn faster",
    badResult:
      "Set a schedule, practice daily, take breaks, use Pomodoro.\n\nAdvice so generic it works for any skill — and helps with none.",
    good:
      'I want to learn "{skill}" from scratch in 21 days.\n\nUse the 80/20 rule to create a roadmap focusing ONLY on the 20% core sub-skills that deliver 80% of practical proficiency.\n\nFormat:\nWeek 1: [Core foundation]\nWeek 2: [Practice with real examples]\nWeek 3: [Polish and output]\n\nConstraints:\n- No fluff\n- Only actionable steps with time estimates',
    goodResult:
      "Week 1: Timeline basics + cutting (3 hrs/day)\nWeek 2: Effects + transitions with real footage\nWeek 3: Export settings + portfolio piece\n\nFocused roadmap. Only high-impact skills. No wasted time.",
  },
];

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedGood, setCopiedGood] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const example = EXAMPLES[activeIndex];

  async function copyGoodPrompt() {
    try {
      await navigator.clipboard.writeText(example.good);
    } catch {
      // fallback silent
    }
    setCopiedGood(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopiedGood(false), 1400);
  }

  return (
    <section id="compare" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Before &amp; After
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            See what a structured prompt does to the same AI.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Same model. Same intent. One vague request, one structured system. The output gap is the
            skill gap — and it closes in seconds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Choose a before/after example">
          {EXAMPLES.map((ex, index) => (
            <button
              key={ex.label}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`compare-panel-${index}`}
              onClick={() => {
                setActiveIndex(index);
                trackEvent("before_after_tab", "Engagement", ex.label);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeIndex === index
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "bg-card/70 text-muted-foreground border border-border/70 hover:border-border hover:text-foreground"
              }`}
            >
              {ex.icon} {ex.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            id={`compare-panel-${activeIndex}`}
            role="tabpanel"
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >
            {/* Before (Weak Prompt) */}
            <div className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-semibold text-rose-500">
                <X className="h-5 w-5" />
                Weak Prompt
              </div>
              <div className="mt-4 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 font-mono text-sm leading-relaxed text-foreground/80">
                &ldquo;{example.bad}&rdquo;
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Typical output
                </div>
                <div className="mt-2 rounded-xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  {example.badResult}
                </div>
              </div>
            </div>

            {/* After (Smart Prompt) */}
            <div className="rounded-[1.5rem] border border-emerald-500/20 bg-card/70 p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <Check className="h-5 w-5" />
                Smart Prompt
              </div>
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 font-mono text-sm leading-relaxed text-foreground/80">
                {example.good}
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Structured output
                </div>
                <div className="mt-2 rounded-xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  {example.goodResult}
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <Button size="sm" variant="outline" onClick={() => {
                    copyGoodPrompt();
                    trackEvent("before_after_copy", "Engagement", example.label);
                  }}>
                  {copiedGood ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy this prompt
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Cue */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <ArrowRight className="mr-1 inline h-4 w-4 text-violet-500" />
            The library has 50+ structured prompts like this — ready to copy and use.
          </p>
        </div>
      </div>
    </section>
  );
}
