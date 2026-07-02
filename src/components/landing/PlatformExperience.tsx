import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Copy,
  Heart,
  MessageSquareShare,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  CATEGORIES,
  FAQ_ITEMS,
  PROMPTS,
  TESTIMONIALS,
  TRUST_BADGES,
  AMAZON_URL,
  SITE_URL,
} from "@/lib/content";

export function PlatformExperience() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(["clear-briefs-for-better-ai-output"]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const featured = useMemo(() => PROMPTS.filter((prompt) => prompt.featured).slice(0, 3), []);
  const trending = useMemo(() => PROMPTS.filter((prompt) => prompt.trending).slice(0, 4), []);

  async function copyPrompt(text: string, slug: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSlug(slug);
      window.setTimeout(() => setCopiedSlug(null), 1400);
    } catch {
      setCopiedSlug(slug);
      window.setTimeout(() => setCopiedSlug(null), 1400);
    }
  }

  function toggleSave(slug: string) {
    setSavedSlugs((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  return (
    <div className="pb-16">
      <section id="top" className="px-4 pb-20 pt-10 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground shadow-soft">
              <Sparkles className="h-4 w-4 text-violet-500" />
              Better results from AI prompts, without the fluff
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Most people do not have an AI problem. They have a{" "}
              <span className="text-gradient-primary">prompt problem.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              PolishPrompt is a premium prompt learning hub for students, creators, founders and
              professionals who want useful AI results with less guesswork.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/library" className="btn-primary">
                Explore Prompt Library <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/guides" className="btn-ghost">
                Take the free learning path
              </Link>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              No spam. No pressure. Just useful prompts and verified guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {TRUST_BADGES.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm text-foreground/80"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "150+", label: "Curated prompts" },
                { value: "4.8/5", label: "Community trust" },
                { value: "Weekly", label: "Fresh picks" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-soft"
                >
                  <div className="text-xl font-semibold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-border/70 bg-card/70 p-5 shadow-glow"
          >
            <div className="rounded-[1.25rem] border border-border/70 bg-gradient-primary p-6 text-white">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-white/15 px-3 py-1">Verified library</span>
                <span className="rounded-full bg-white/15 px-3 py-1">
                  Smart prompts = smart results
                </span>
              </div>
              <div className="mt-8 space-y-3">
                {featured.slice(0, 3).map((prompt) => (
                  <div key={prompt.slug} className="rounded-2xl bg-white/10 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold">{prompt.title}</div>
                      <span className="text-xs uppercase tracking-wide text-white/80">
                        {prompt.category}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-white/80">{prompt.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-card">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Prompt patterns that actually work",
                copy: "Clear structure beats random hacks every time.",
              },
              {
                title: "Useful for real jobs",
                copy: "Study, writing, marketing, business and daily planning.",
              },
              {
                title: "A deeper system, not a list",
                copy: "The ebook is the structured path behind the free library.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-background/70 p-4">
                <div className="font-semibold text-foreground">{item.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Featured prompts
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Useful examples that make the value obvious.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featured.map((prompt) => {
              const isSaved = savedSlugs.includes(prompt.slug);
              return (
                <motion.article
                  key={prompt.slug}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-violet-500">{prompt.category}</div>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">{prompt.title}</h3>
                    </div>
                    {prompt.trending && (
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600">
                        Trending
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{prompt.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-background px-2.5 py-1">{prompt.model}</span>
                    <span className="rounded-full bg-background px-2.5 py-1">
                      {prompt.difficulty}
                    </span>
                    <span className="rounded-full bg-background px-2.5 py-1">
                      {prompt.usageCount.toLocaleString()} uses
                    </span>
                  </div>
                  <div className="mt-4 rounded-2xl border border-dashed border-border/70 bg-background/70 p-3 text-sm text-muted-foreground">
                    Why it works: {prompt.tips[0]}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyPrompt(prompt.fullPrompt, prompt.slug)}
                    >
                      <Copy className="h-4 w-4" /> {copiedSlug === prompt.slug ? "Copied" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toggleSave(prompt.slug)}>
                      <Heart className={`h-4 w-4 ${isSaved ? "fill-current text-rose-500" : ""}`} />{" "}
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Link
                      to="/library/$slug"
                      params={{ slug: prompt.slug }}
                      className="inline-flex h-8 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground hover:bg-accent"
                    >
                      View details
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Why PolishPrompt
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A premium place to learn the skill behind better AI output.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Better prompts, faster results",
                copy: "Structure your requests so the model does more of the work for you.",
              },
              {
                title: "Frameworks instead of random hacks",
                copy: "Learn repeatable patterns you can reuse across work and study.",
              },
              {
                title: "Verified, human-curated content",
                copy: "No fluff, no fake claims and no API-dependent shortcuts.",
              },
              {
                title: "Built for real people",
                copy: "Useful for students, creators, freelancers, founders and daily learners.",
              },
              {
                title: "Hinglish-friendly learning",
                copy: "Clear language that makes prompt engineering feel approachable.",
              },
              {
                title: "A deeper system behind the free library",
                copy: "The ebook is the structured path that turns curiosity into consistency.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Prompt categories
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Browse by the tasks you want to improve.
              </h2>
            </div>
            <Link to="/library" className="text-sm font-semibold text-violet-600">
              Open full library →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <span className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground">
                    {category.count} prompts
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
                <Link
                  to="/library"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
                >
                  View category <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Trending now
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Fresh picks for people who want to return often.
              </h2>
            </div>
            <Link to="/library" className="text-sm font-semibold text-violet-600">
              See all prompts →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {trending.map((prompt) => {
              const isSaved = savedSlugs.includes(prompt.slug);
              return (
                <div
                  key={prompt.slug}
                  className="rounded-[1.5rem] border border-border/70 bg-card/70 p-5 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-violet-500">{prompt.category}</div>
                      <h3 className="mt-1 text-lg font-semibold">{prompt.title}</h3>
                    </div>
                    <span className="rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-600">
                      Hot
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{prompt.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {prompt.usageCount.toLocaleString()} uses
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {prompt.difficulty}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyPrompt(prompt.fullPrompt, prompt.slug)}
                    >
                      <Copy className="h-4 w-4" /> {copiedSlug === prompt.slug ? "Copied" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toggleSave(prompt.slug)}>
                      <Heart className={`h-4 w-4 ${isSaved ? "fill-current text-rose-500" : ""}`} />{" "}
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Link
                      to="/library/$slug"
                      params={{ slug: prompt.slug }}
                      className="inline-flex h-8 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground hover:bg-accent"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              A simple path from curiosity to better results.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "1. Discover your weak points",
                copy: "Learn what makes a prompt strong or weak before you chase more content.",
              },
              {
                title: "2. Use proven prompt patterns",
                copy: "Start with structure, context and output format instead of random hacks.",
              },
              {
                title: "3. Save, copy and repeat",
                copy: "Build a personal library of prompts that match your real routine.",
              },
              {
                title: "4. Level up with the ebook",
                copy: "Use the deeper system when you want a more complete approach.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Social proof
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Real people using the system to feel less stuck and more capable.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex items-center gap-2 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">“{item.quote}”</p>
                <div className="mt-5">
                  <div className="font-semibold text-foreground">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                  <div className="mt-2 text-sm font-medium text-violet-600">{item.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[2rem] border border-border/70 bg-gradient-primary p-8 text-white shadow-glow lg:grid-cols-[1fr_0.8fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                Soft ebook CTA
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Get the full system behind the free library.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/80">
                The ebook is the structured path for people who want better prompts and more
                consistent AI output. It brings the free library into a deeper, easier-to-follow
                system.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {[
                  "A clear framework for prompt writing",
                  "Repeatable patterns for study, work and content",
                  "Examples that help you improve without feeling lost",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="rounded-[1.25rem] bg-background/90 p-4 text-foreground shadow-soft">
                <div className="text-sm font-semibold text-violet-600">
                  Smart Prompts = Smart Results
                </div>
                <div className="mt-3 text-2xl font-semibold">
                  A practical ebook for people who want better results from AI.
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-background px-3 py-1">
                    Verified prompt patterns
                  </span>
                  <span className="rounded-full bg-background px-3 py-1">Beginner friendly</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={AMAZON_URL} className="btn-primary">
                    See the ebook <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link to="/guides" className="btn-ghost !bg-white/90 !text-foreground">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Trust and safety
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for trust, not hype.</h2>
              <p className="mt-4 text-base text-muted-foreground">
                The platform is intentionally simple: verified content, helpful examples, and a
                clear path to deeper learning.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Verified content",
                  copy: "Every prompt is curated with care and checked for usefulness.",
                },
                {
                  title: "No hallucination policy",
                  copy: "We do not make unsupported claims or fake associations.",
                },
                {
                  title: "No API dependency",
                  copy: "The content is manual, file-driven and independent of live model APIs.",
                },
                {
                  title: "Built for learners",
                  copy: "The goal is confidence, not pressure or hype.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-border/70 bg-card/70 p-5 shadow-soft"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Answers for people who want to learn without the noise.
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-[1.25rem] border border-border/70 bg-card/70 shadow-soft"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    <span className="text-sm text-muted-foreground">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground">{item.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Newsletter
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Get weekly prompt upgrades before the library refreshes.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Only email. No noise. A clear privacy promise. Bonus prompt packs when new ones land.
            </p>
          </div>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-border bg-background px-4"
              aria-label="Email address"
            />
            <Button type="submit" className="h-12 rounded-full px-6">
              Subscribe <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-3 text-sm text-muted-foreground">
            We only use your email for updates and occasional prompt drops. No spam, no pressure.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-background/70 p-6 text-center text-sm text-muted-foreground shadow-soft">
          Want a deeper path? Visit{" "}
          <Link to="/about" className="font-semibold text-violet-600">
            About
          </Link>
          , browse{" "}
          <Link to="/library" className="font-semibold text-violet-600">
            the library
          </Link>
          , or read{" "}
          <Link to="/guides" className="font-semibold text-violet-600">
            our guides
          </Link>
          .
        </div>
      </section>
    </div>
  );
}
