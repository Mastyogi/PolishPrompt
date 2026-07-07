import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Guides & Blog — PolishPrompt" },
      {
        name: "description",
        content: "Learn prompt engineering basics, common mistakes and AI productivity workflows.",
      },
      { property: "og:title", content: "Guides & Blog — PolishPrompt" },
      {
        property: "og:description",
        content: "Practical articles for writing better prompts and getting stronger AI results.",
      },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: `${SITE_URL}/guides` },
    ],
  }),
});
