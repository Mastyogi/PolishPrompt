import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, Copy, Heart, Search, Sparkles, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/landing/PageShell";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PROMPTS, SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Prompt Library — PolishPrompt" },
      {
        name: "description",
        content:
          "Browse verified prompt ideas for study, writing, marketing, business and daily work.",
      },
      { property: "og:title", content: "Prompt Library — PolishPrompt" },
      {
        property: "og:description",
        content: "A curated prompt library for better AI output and stronger prompt habits.",
      },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: `${SITE_URL}/library` },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [model, setModel] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [sort, setSort] = useState("Trending");
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(["clear-briefs-for-better-ai-output"]);

  const filtered = useMemo(() => {
    const next = PROMPTS.filter((prompt) => {
      const matchesSearch = [
        prompt.title,
        prompt.description,
        prompt.category,
        prompt.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "All" || prompt.category === category;
      const matchesModel = model === "All" || prompt.model === model;
      const matchesDifficulty = difficulty === "All" || prompt.difficulty === difficulty;
      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Trending" && prompt.trending) ||
        (activeTab === "Weekly Hot" && prompt.usageCount > 1000) ||
        (activeTab === "Learning Picks" && prompt.featured);
      return matchesSearch && matchesCategory && matchesModel && matchesDifficulty && matchesTab;
    });

    return next.sort((a, b) => {
      if (sort === "Most Used") return b.usageCount - a.usageCount;
      if (sort === "Newest") return Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt));
      return Number(b.trending) - Number(a.trending);
    });
  }, [activeTab, category, difficulty, model, search, sort]);

  const visiblePrompts = filtered.slice(0, visibleCount);

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
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-violet-500" /> Verified prompt library
            </div>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Prompt discovery made useful.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Search by task, browse smart prompt patterns, and save the ones that fit your
              workflow.
            </p>
          </div>

          <div className="mt-8 grid gap-3 rounded-[2rem] border border-border/70 bg-card/70 p-4 shadow-card lg:grid-cols-[1.45fr_0.8fr_0.7fr_0.6fr_0.6fr]">
            <label className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search prompts"
                className="w-full bg-transparent outline-none"
              />
            </label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm"
            >
              <option value="All">All categories</option>
              {CATEGORIES.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              value={model}
              onChange={(event) => setModel(event.target.value)}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm"
            >
              <option value="All">All models</option>
              <option value="ChatGPT">ChatGPT</option>
              <option value="Claude">Claude</option>
              <option value="Gemini">Gemini</option>
              <option value="All Models">All Models</option>
            </select>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm"
            >
              <option value="All">All levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm"
            >
              <option value="Trending">Trending</option>
              <option value="Newest">Newest</option>
              <option value="Most Used">Most Used</option>
            </select>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(["All", "Trending", "Weekly Hot", "Learning Picks"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${activeTab === tab ? "bg-gradient-primary text-white" : "bg-card/70 text-foreground"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {visiblePrompts.map((prompt) => {
              const isSaved = savedSlugs.includes(prompt.slug);
              return (
                <article
                  key={prompt.slug}
                  className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-violet-600">{prompt.category}</div>
                      <h2 className="mt-1 text-xl font-semibold">{prompt.title}</h2>
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
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-border/70 bg-card/70 p-8 text-center text-muted-foreground">
              No prompts matched that combination yet. Try broadening the filters.
            </div>
          )}

          {visibleCount < filtered.length && (
            <div className="mt-8 text-center">
              <Button onClick={() => setVisibleCount((value) => value + 8)}>
                Load more prompts
              </Button>
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground"
            >
              <ArrowUp className="h-4 w-4" /> Scroll to top
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
