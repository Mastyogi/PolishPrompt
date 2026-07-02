import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Copy, Heart, MessageSquareShare, Sparkles } from "lucide-react";
import { PageShell } from "@/components/landing/PageShell";
import { Button } from "@/components/ui/button";
import { PROMPTS, SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/library/$slug")({
  head: ({ params }) => {
    const prompt = PROMPTS.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: `${prompt?.title ?? "Prompt"} — PolishPrompt` },
        {
          name: "description",
          content: prompt?.description ?? "Explore a prompt from the PolishPrompt library.",
        },
        { property: "og:title", content: prompt?.title ?? "Prompt detail" },
        {
          property: "og:description",
          content: prompt?.description ?? "Explore a prompt from the PolishPrompt library.",
        },
        { property: "og:type", content: "article" },
        { rel: "canonical", href: `${SITE_URL}/library/${params.slug}` },
      ],
    };
  },
  component: PromptDetailPage,
});

function PromptDetailPage() {
  const { slug } = Route.useParams();
  const prompt = PROMPTS.find((item) => item.slug === slug);

  if (!prompt) {
    return (
      <PageShell>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 text-center shadow-soft">
            <h1 className="text-3xl font-bold">Prompt not found</h1>
            <p className="mt-3 text-muted-foreground">
              The prompt you requested is no longer available.
            </p>
            <Link to="/library" className="btn-primary mt-6">
              Back to the library
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/library"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to prompt library
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-violet-500" /> {prompt.category}
              </div>
              <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{prompt.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{prompt.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-background px-3 py-1">{prompt.model}</span>
                <span className="rounded-full bg-background px-3 py-1">{prompt.difficulty}</span>
                <span className="rounded-full bg-background px-3 py-1">
                  {prompt.usageCount.toLocaleString()} uses
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold">Full prompt</h2>
                <pre className="mt-3 whitespace-pre-wrap rounded-[1.25rem] border border-border/70 bg-background/70 p-4 text-sm text-foreground">
                  {prompt.fullPrompt}
                </pre>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4">
                  <h3 className="font-semibold">Use case</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{prompt.useCase}</p>
                </div>
                <div className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4">
                  <h3 className="font-semibold">Example output</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{prompt.exampleOutput}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold">Tips</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {prompt.tips.map((tip) => (
                    <li
                      key={tip}
                      className="rounded-2xl border border-border/70 bg-background/70 px-3 py-2"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                <h2 className="text-xl font-semibold">Actions</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button>
                    <Copy className="h-4 w-4" /> Copy prompt
                  </Button>
                  <Button variant="outline">
                    <Heart className="h-4 w-4" /> Save prompt
                  </Button>
                  <Button variant="outline">
                    <MessageSquareShare className="h-4 w-4" /> Share
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                <h2 className="text-xl font-semibold">Variations</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {prompt.variations.map((variation) => (
                    <li
                      key={variation}
                      className="rounded-2xl border border-border/70 bg-background/70 px-3 py-2"
                    >
                      {variation}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                <h2 className="text-xl font-semibold">Related prompt ideas</h2>
                <div className="mt-4 space-y-3">
                  {prompt.relatedPromptSlugs.map((slug) => {
                    const related = PROMPTS.find((item) => item.slug === slug);
                    return related ? (
                      <Link
                        key={slug}
                        to="/library/$slug"
                        params={{ slug: related.slug }}
                        className="block rounded-2xl border border-border/70 bg-background/70 px-3 py-3 text-sm text-foreground hover:bg-accent"
                      >
                        {related.title}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
