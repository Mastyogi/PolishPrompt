import { createFileRoute } from "@tanstack/react-router";
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
});
