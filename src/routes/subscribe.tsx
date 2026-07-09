import { createFileRoute } from "@tanstack/react-router";
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
      { property: "og:url", content: `${SITE_URL}/subscribe` },
      { property: "og:image", content: `${SITE_URL}/og-image.svg` },
      { rel: "canonical", href: `${SITE_URL}/subscribe` },
    ],
  }),
});
