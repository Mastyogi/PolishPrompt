import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — PolishPrompt" },
      {
        name: "description",
        content:
          "Read the terms for using PolishPrompt's prompt library, guides and ebook recommendations.",
      },
      { property: "og:title", content: "Terms — PolishPrompt" },
      {
        property: "og:description",
        content: "Terms for using PolishPrompt content and resources.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { property: "og:image", content: `${SITE_URL}/og-image.svg` },
      { rel: "canonical", href: `${SITE_URL}/terms` },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card">
        <h1 className="text-4xl font-bold sm:text-5xl">Terms</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          These terms explain how the content on PolishPrompt may be used.
        </p>
        <div className="mt-8 space-y-5 text-sm text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
            <p className="mt-2">
              Use the content for learning, creativity and personal productivity. Do not
              redistribute the content as your own.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Content ownership</h2>
            <p className="mt-2">
              Prompt text, guides and editorial content belong to PolishPrompt unless otherwise
              stated.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Ebook and prompt usage</h2>
            <p className="mt-2">
              The ebook and prompts are educational resources. They are not a guarantee of
              specific outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              If you have a question about these terms, reach out at{" "}
              <a className="font-semibold text-violet-600" href="mailto:hello@polishprompt.tech">
                hello@polishprompt.tech
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/" className="btn-ghost">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
