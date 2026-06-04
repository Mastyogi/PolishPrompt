import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "What exactly is the AI Prompt-Skill Test?",
    a: "A free 10-question adaptive AI diagnosis test that measures how well you brief AI across clarity, context, structure, audience, reasoning and refinement. You get a personalized scorecard with strengths, gaps and a recommendation — in under 4 minutes.",
  },
  {
    q: "Is this AI prompt guide useful for beginners?",
    a: "Yes. The ebook walks you from zero to advanced — starting with the RTCO framework, then layering in formulas, Indian-context prompts, WhatsApp templates, and multi-step reasoning chains. Beginners ship usable prompts on day one.",
  },
  {
    q: "How is this different from free prompt lists on the internet?",
    a: "Free lists give you prompts. This is a system — frameworks, debugging patterns, and 150+ field-tested prompts that work across study, work, content and business. You learn to write your own, not just copy.",
  },
  {
    q: "Do I need ChatGPT Plus or a paid AI to use this?",
    a: "No. Every prompt works with the free version of ChatGPT, Gemini, Claude and most major AI models.",
  },
  {
    q: "Is the 60% off really limited time?",
    a: "Yes — the launch discount ends without notice. Lifetime updates are included once you unlock.",
  },
  {
    q: "Can I share my AI test scorecard?",
    a: "Yes. After finishing the test you can download a PDF scorecard or share your result link on WhatsApp, LinkedIn or X.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently <span className="text-gradient-primary">Asked</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Quick answers about the AI prompt guide and the free AI diagnosis test.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="animate-fade-in px-5 pb-5 text-sm text-muted-foreground">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
