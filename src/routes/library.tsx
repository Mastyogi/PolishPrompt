import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/content";

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
});
