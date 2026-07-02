import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/landing/PageShell";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PolishPrompt" },
      {
        name: "description",
        content: "Learn the story, mission and editorial approach behind PolishPrompt.",
      },
      { property: "og:title", content: "About PolishPrompt" },
      {
        property: "og:description",
        content: "A trust-first platform for prompt learning and better AI use.",
      },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: `${SITE_URL}/about` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold sm:text-5xl">About PolishPrompt</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            PolishPrompt exists to make prompt engineering feel practical, human and worth returning
            to.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-soft">
              <h2 className="text-2xl font-semibold">Our story</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                The product started from a simple observation: people were using AI without a
                reliable way to improve their prompting skills. The result was frustration, generic
                output and confusion.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-soft">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We help learners build real prompt confidence with verified examples, simple
                frameworks and a system that feels useful from day one.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-soft">
              <h2 className="text-2xl font-semibold">What we offer</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A prompt library, practical guides, a learning-first ebook and a calm invitation to
                improve step by step.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-soft">
              <h2 className="text-2xl font-semibold">How we curate</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We prioritize clarity, usefulness and repeatable structure. No hype, no fake
                shortcuts and no unsupported claims.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-border/70 bg-gradient-primary p-8 text-white shadow-glow">
            <h2 className="text-2xl font-semibold">Quality assurance</h2>
            <p className="mt-3 max-w-3xl text-sm text-white/80">
              Every prompt and guide on the site is part of a deliberate system built for
              reliability. We keep the content manual, file-driven and easy to understand.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/15 px-3 py-1">Verified prompts</span>
              <span className="rounded-full bg-white/15 px-3 py-1">No hallucination policy</span>
              <span className="rounded-full bg-white/15 px-3 py-1">No API dependency</span>
            </div>
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            <Link to="/contact" className="font-semibold text-violet-600">
              Contact us
            </Link>{" "}
            if you want to share feedback, ask a question or suggest a prompt topic.
          </div>
        </div>
      </section>
    </PageShell>
  );
}
