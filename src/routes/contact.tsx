import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/landing/PageShell";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PolishPrompt" },
      {
        name: "description",
        content: "Get in touch with PolishPrompt for questions, feedback or prompt requests.",
      },
      { property: "og:title", content: "Contact PolishPrompt" },
      { property: "og:description", content: "Reach out to the PolishPrompt team." },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: `${SITE_URL}/contact` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Questions about the prompts, ebook, or the learning path? Send us a note.
          </p>
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <a
              className="block font-semibold text-foreground underline"
              href="mailto:hello@polishprompt.tech"
            >
              hello@polishprompt.tech
            </a>
            <p>We reply thoughtfully and keep our responses focused on useful guidance.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
