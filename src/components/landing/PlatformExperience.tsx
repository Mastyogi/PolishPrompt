import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Heart,
  Lock,
  MessageSquareShare,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  CATEGORIES,
  FAQ_ITEMS,
  PROMPTS,
  TESTIMONIALS,
  AMAZON_URL,
  SITE_URL,
} from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";
import { trackCtaClick, trackCtaHover, trackEvent } from "@/lib/analytics";
import { supabase } from "@/lib/supabase";
import type { PromptVariable } from "@/lib/content";

export function PlatformExperience() {
  const hoveredCtas = useRef(new Set<string>());
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "duplicate" | "error"
  >("idle");
  const featured = useMemo(() => PROMPTS.filter((prompt) => prompt.featured).slice(0, 3), []);
  const trending = useMemo(() => PROMPTS.filter((prompt) => prompt.featured).slice(0, 4), []);
  const categoryPreviews = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const p of PROMPTS) {
      if (!map[p.category]) map[p.category] = [];
      if (map[p.category].length < 3) {
        map[p.category].push(p.title);
      }
    }
    return map;
  }, []);

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

function renderTemplatePreview(template: string, variables: Pick<PromptVariable, "id" | "label">[]) {
  const parts = template.split(/(\{\{var_\d+\}\})/);
  return parts.map((part, index) => {
    const match = part.match(/\{\{(var_\d+)\}\}/);
    if (match) {
      const variable = variables.find((v) => v.id === match[1]);
      return (
        <span key={index} className="italic text-muted-foreground">
          [{variable?.label || match[1]}]
        </span>
      );
    }
    return part;
  });
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
              <Link to="/library" className="btn-primary" onClick={() => trackCtaClick("Hero - Explore Library")}>
                Explore Prompt Library <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/guides" className="btn-ghost" onClick={() => trackCtaClick("Hero - Free Learning Path")}>
                Take the free learning path
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-border/70 bg-card/70 p-5 shadow-glow transition-shadow hover:shadow-card"
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
                  <div key={prompt.id} className="rounded-2xl bg-white/10 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold">{prompt.title}</div>
                      <span className="text-xs uppercase tracking-wide text-white/80">
                        {prompt.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BeforeAfter />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Featured prompts
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Ready-to-use prompts that show you what structure looks like.
              </h2>
            </div>
            <Link to="/library" className="text-sm font-semibold text-violet-600" onClick={() => trackCtaClick("Featured - See all prompts")}>
              See all prompts →
            </Link>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-5 lg:grid-cols-3"
          >
            {featured.map((prompt) => {
              const isSaved = savedSlugs.includes(prompt.id);
              return (
                <motion.article
                  key={prompt.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold capitalize text-violet-500">
                        {prompt.category}
                      </div>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">{prompt.title}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-600">
                      Editor's Pick
                    </span>
                  </div>
                  <div className="mt-3 line-clamp-3 overflow-hidden rounded-lg bg-background/50 p-3 font-mono text-xs leading-relaxed text-foreground/80">
                    {renderTemplatePreview(prompt.template, prompt.variables)}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        copyPrompt(prompt.template, prompt.id);
                        trackEvent("copy_prompt", "Prompt", prompt.id);
                      }}
                    >
                      <Copy className="h-4 w-4" /> {copiedSlug === prompt.id ? "Copied" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => {
                        toggleSave(prompt.id);
                        trackEvent(isSaved ? "unsave_prompt" : "save_prompt", "Prompt", prompt.id);
                      }}>
                      <Heart className={`h-4 w-4 ${isSaved ? "fill-current text-rose-500" : ""}`} />{" "}
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Link
                      to="/library/$slug"
                      params={{ slug: prompt.id }}
                      onClick={() => trackEvent("view_prompt_detail", "Prompt", prompt.id)}
                      className="inline-flex h-8 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground hover:bg-accent"
                    >
                      View details
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
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
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
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
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <Link to="/library" className="text-sm font-semibold text-violet-600" onClick={() => trackCtaClick("Categories - Open full library")}>
              Open full library →
            </Link>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <span className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground">
                    {category.count} prompts
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
                {categoryPreviews[category.name]?.length > 0 && (
                  <div className="mt-4 space-y-1.5 border-t border-border/50 pt-4">
                    {categoryPreviews[category.name]?.map((title) => (
                      <div
                        key={title}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60" />
                        {title}
                      </div>
                    ))}
                  </div>
                )}
                <Link
                  to="/library"
                  onClick={() => trackEvent("view_category", "Navigation", category.name)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
                >
                  View category <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
            <Link to="/library" className="text-sm font-semibold text-violet-600" onClick={() => trackCtaClick("Trending - See all prompts")}>
              See all prompts →
            </Link>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-5 lg:grid-cols-2"
          >
            {trending.map((prompt) => {
              const isSaved = savedSlugs.includes(prompt.id);
              return (
                <motion.div
                  key={prompt.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-[1.5rem] border border-border/70 bg-card/70 p-5 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold capitalize text-violet-500">{prompt.category}</div>
                      <h3 className="mt-1 text-lg font-semibold">{prompt.title}</h3>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-600">
                      Editor's Pick
                    </span>
                  </div>
                  <div className="mt-3 line-clamp-3 overflow-hidden rounded-lg bg-background/50 p-3 font-mono text-xs leading-relaxed text-foreground/80">
                    {renderTemplatePreview(prompt.template, prompt.variables)}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {prompt.category}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        copyPrompt(prompt.template, prompt.id);
                        trackEvent("copy_prompt", "Prompt", prompt.id);
                      }}
                    >
                      <Copy className="h-4 w-4" /> {copiedSlug === prompt.id ? "Copied" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => {
                        toggleSave(prompt.id);
                        trackEvent(isSaved ? "unsave_prompt" : "save_prompt", "Prompt", prompt.id);
                      }}>
                      <Heart className={`h-4 w-4 ${isSaved ? "fill-current text-rose-500" : ""}`} />{" "}
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Link
                      to="/library/$slug"
                      params={{ slug: prompt.id }}
                      onClick={() => trackEvent("view_prompt_detail", "Prompt", prompt.id)}
                      className="inline-flex h-8 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground hover:bg-accent"
                    >
                      View details
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Compact secondary ebook CTA */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.5rem] bg-gradient-primary p-5 text-white shadow-soft lg:flex lg:items-center lg:justify-between lg:px-8">
            <p className="text-base font-semibold sm:text-lg">
              Want the complete system behind these prompts?
            </p>
            <a
              href={AMAZON_URL}
              onClick={() => trackCtaClick("Compact ebook CTA")}
              onMouseEnter={() => {
                if (!hoveredCtas.current.has("Compact ebook CTA")) {
                  hoveredCtas.current.add("Compact ebook CTA");
                  trackCtaHover("Compact ebook CTA");
                }
              }}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/30 lg:mt-0"
            >
              See the ebook <ArrowRight className="h-4 w-4" />
            </a>
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
              The same journey you just took, mapped to a learning path.
            </h2>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {/* Connector line — visible on xl screens between cards 1-2-3-4 */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-[2.625rem] z-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent xl:block"
              aria-hidden="true"
            />
            {[
              {
                number: 1,
                title: "See the gap",
                copy: "You just saw weak vs structured prompts side by side. That difference is where most AI frustration lives.",
              },
              {
                number: 2,
                title: "Explore categories",
                copy: "Browse prompts by task — business, marketing, reasoning, productivity and beyond.",
              },
              {
                number: 3,
                title: "Build your toolkit",
                copy: "Copy, save and organise the prompts that match the work you do every day.",
              },
              {
                number: 4,
                title: "Go deeper",
                copy: "The ebook connects everything into a complete framework you can master in 21 days.",
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative z-10 rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white shadow-glow">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Real results
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              People who stopped guessing and started prompting with structure.
            </h2>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {TESTIMONIALS.map((item, index) => {
              const initials = item.name
                .replace(/[^A-Za-z ]/g, "")
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((n) => n[0])
                .join("")
                .toUpperCase();
              const pastelBg = [
                "from-violet-500 to-purple-600",
                "from-emerald-500 to-teal-600",
                "from-amber-500 to-orange-600",
              ][index % 3];
              return (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft transition-shadow hover:shadow-card"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1.5" aria-label="4 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-border"}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mt-4">
                    <span
                      className="absolute -top-2 -left-1 select-none text-4xl leading-none text-violet-500/20"
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p className="relative pl-4 pr-2 text-base leading-relaxed text-foreground/85">
                      {item.quote}
                    </p>
                    <span
                      className="absolute -bottom-4 -right-1 select-none text-4xl leading-none text-violet-500/20"
                      aria-hidden="true"
                    >
                      ”
                    </span>
                  </div>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${pastelBg} text-sm font-bold text-white shadow-sm`}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-foreground">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.role}</div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-violet-500/10 px-3 py-2">
                    <p className="text-xs font-medium text-violet-600">{item.result}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 rounded-[2rem] border border-border/70 bg-gradient-primary p-8 text-white shadow-glow lg:grid-cols-[1.1fr_0.9fr] lg:p-12"
          >
            {/* Left: problem → solution narrative */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                The complete system
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Your AI isn't broken.{" "}
                <span className="text-[oklch(0.92_0.12_90)]">Your prompt is.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
                90% of people blame the AI when they get generic answers back. The real gap
                is <em>how</em> the prompt is written — and that is a skill you can actually
                learn.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/85">
                {[
                  "The exact formula behind a \"perfect\" prompt, broken down step-by-step",
                  "100+ copy-paste prompts for business, marketing, and daily use",
                  "Advanced techniques most people never discover on their own",
                  "A prompt-debugging method that fixes weak answers instead of starting over",
                  "A 21-day structured path — 20 minutes a day, zero jargon",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.82_0.18_125)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Quick stats row */}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: "3,000+", label: "Tested prompts" },
                  { value: "15+", label: "Industries covered" },
                  { value: "21", label: "Days to master" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: value card + CTA */}
            <div className="flex flex-col">
              <div className="flex-1 rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur lg:p-8">
                <div className="rounded-[1.25rem] bg-background/90 p-5 text-foreground shadow-soft">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-white shadow-sm">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Smart Prompts, Smart Results</div>
                      <div className="text-xs text-muted-foreground">
                        by JSS CORE LAB
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {[
                      { icon: BookOpen, text: "150+ tested, copy-paste ready prompts" },
                      { icon: Zap, text: "Advanced formulas and AI-debugging methods" },
                      { icon: Sparkles, text: "Beginner-friendly, 20 minutes a day" },
                    ].map((item) => (
                      <li key={item.text} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-violet-500" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={AMAZON_URL}
                    onClick={() => trackCtaClick("Main ebook CTA")}
                    onMouseEnter={() => {
                      if (!hoveredCtas.current.has("Main ebook CTA")) {
                        hoveredCtas.current.add("Main ebook CTA");
                        trackCtaHover("Main ebook CTA");
                      }
                    }}
                    className="btn-primary mt-5 w-full justify-center"
                  >
                    See the ebook on Amazon <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-white/65">
                Lifetime access · Instant delivery · 60% limited launch discount active
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Trust and safety
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for trust, not hype.</h2>
              <p className="mt-4 text-base text-muted-foreground">
                The platform is intentionally simple: verified content, helpful examples, and a
                clear path to deeper learning. No gimmicks, no shortcuts — just clear, tested
                prompts you can rely on.
              </p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 md:grid-cols-2"
            >
              {[
                {
                  icon: Shield,
                  title: "Verified content",
                  copy: "Every prompt is curated with care and checked for usefulness before it reaches the library.",
                },
                {
                  icon: Check,
                  title: "No hallucination policy",
                  copy: "We never make unsupported claims, fake associations, or API-dependent promises.",
                },
                {
                  icon: Zap,
                  title: "No API dependency",
                  copy: "Everything is manual, file-driven, and fully independent of live model APIs.",
                },
                {
                  icon: Star,
                  title: "Built for learners",
                  copy: "The goal is real confidence, not pressure or hype. Learn at your own pace.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3 }}
                  className="rounded-[1.25rem] border border-border/70 bg-card/70 p-5 shadow-soft transition-shadow hover:shadow-card"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-sm">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Straight answers for people who want clarity, not noise.
            </h2>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 space-y-3"
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-answer-${index}`;
              return (
                <motion.div
                  key={item.question}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`relative overflow-hidden rounded-[1.25rem] border shadow-soft transition-colors ${
                    isOpen
                      ? "border-violet-500/30 bg-card"
                      : "border-border/70 bg-card/70"
                  }`}
                >
                  {/* Left gradient accent bar when open */}
                  <div
                    className={`absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-violet-500 to-purple-600 transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />

                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-accent/30"
                    onClick={() => {
                      setOpenFaqIndex(isOpen ? null : index);
                      trackEvent("faq_toggle", "Engagement", isOpen ? "close" : "open");
                      if (!isOpen) trackEvent("faq_open", "Engagement", item.question);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-semibold text-foreground">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted/50 text-muted-foreground"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="px-5 pb-5 text-sm text-muted-foreground"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact bottom link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions?{" "}
              <Link
                to="/contact"
                onClick={() => trackCtaClick("FAQ - Contact us")}
                className="font-semibold text-violet-600 hover:text-violet-700 transition-colors"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-5xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card lg:p-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600">
                Free weekly newsletter
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Prompt upgrades, delivered weekly.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              One email a week with a tested prompt pattern, a quick tip, and early access to new
              library additions. No noise. No spam. Just better prompts.
            </p>
          </div>

          {subscribeStatus === "success" ? (
            <div className="mt-6 rounded-2xl border border-[oklch(0.62_0.22_145)]/30 bg-[oklch(0.62_0.22_145)]/10 p-5 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-[oklch(0.5_0.18_145)]" />
                <span className="font-semibold">You're in!</span>
              </div>
              <p className="mt-1 pl-7 text-muted-foreground">
                Check your inbox for your first prompt upgrade. Welcome aboard.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={async (event) => {
                event.preventDefault();
                const email = subscribeEmail.trim();
                if (
                  !email ||
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                )
                  return;
                setSubscribing(true);
                setSubscribeStatus("idle");
                try {
                  const { error } = await supabase
                    .from("newsletter_subscribers")
                    .insert({ email, source: "homepage" });
                  if (error) {
                    if (error.code === "23505") {
                      setSubscribeStatus("duplicate");
                    } else {
                      setSubscribeStatus("error");
                    }
                  } else {
                    setSubscribeStatus("success");
                    setSubscribeEmail("");
                    trackEvent("newsletter_subscribe", "Conversion", "homepage");
                  }
                } catch {
                  setSubscribeStatus("error");
                } finally {
                  setSubscribing(false);
                }
              }}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-full border border-border bg-background px-4 pr-4 text-sm outline-none transition-colors focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                  aria-label="Email address"
                  disabled={subscribing}
                />
              </div>
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-full px-7"
                disabled={subscribing}
              >
                {subscribing ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {subscribeStatus === "duplicate" && (
            <div className="mt-4 rounded-xl border border-[oklch(0.73_0.15_62)]/30 bg-[oklch(0.73_0.15_62)]/10 px-4 py-3 text-sm text-[oklch(0.53_0.14_62)]">
              You are already subscribed. No need to sign up again!
            </div>
          )}
          {subscribeStatus === "error" && (
            <div className="mt-4 rounded-xl border border-[oklch(0.57_0.21_27)]/30 bg-[oklch(0.57_0.21_27)]/10 px-4 py-3 text-sm text-[oklch(0.44_0.19_27)]">
              Something went wrong. Please try again later.
            </div>
          )}
          {subscribeStatus === "idle" && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-violet-500" />
                No spam, ever
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-violet-500" />
                Unsubscribe anytime
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-violet-500" />
                Weekly, not daily
              </span>
            </div>
          )}
        </motion.div>
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
