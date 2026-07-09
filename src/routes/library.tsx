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
      { property: "og:url", content: `${SITE_URL}/library` },
      { property: "og:image", content: `${SITE_URL}/og-image.svg` },
      { rel: "canonical", href: `${SITE_URL}/library` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/library#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Prompt Library", item: `${SITE_URL}/library` },
          ],
        }),
      },
    ],
  }),
});
