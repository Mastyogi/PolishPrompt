import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PolishPrompt" },
      {
        name: "description",
        content: "Learn the story, mission and editorial approach behind PolishPrompt.",
      },
      { property: "og:title", content: "About PolishPrompt" },      { property: "og:description",
        content: "A trust-first platform for prompt learning and better AI use.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}/og-image.svg` },
      { rel: "canonical", href: `${SITE_URL}/about` },
    ],
  }),
});
