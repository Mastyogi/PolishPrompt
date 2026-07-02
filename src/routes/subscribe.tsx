import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/landing/PageShell";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/subscribe")({
  head: () => ({
    meta: [
      { title: "Subscribe — PolishPrompt" },
      {
        name: "description",
        content: "Join the PolishPrompt newsletter for new prompts, guides and weekly updates.",
      },
      { property: "og:title", content: "Subscribe — PolishPrompt" },
      {
        property: "og:description",
        content: "Subscribe for fresh prompt ideas and practical guides.",
      },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: `${SITE_URL}/subscribe` },
    ],
  }),
  component: SubscribePage,
});

function SubscribePage() {
  return (
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card">
          <h1 className="text-4xl font-bold sm:text-5xl">Get weekly prompt upgrades</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Receive new prompts, useful guides and occasional prompt packs without the noise.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-border bg-background px-4"
              aria-label="Email address"
            />
            <button className="btn-primary h-12 rounded-full px-6">Subscribe</button>
          </form>
          <p className="mt-3 text-sm text-muted-foreground">
            No spam. Just useful prompt drops and occasional updates.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
