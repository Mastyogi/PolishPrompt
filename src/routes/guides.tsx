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
      { property: "og:url", content: `${SITE_URL}/guides` },
      { property: "og:image", content: `${SITE_URL}/og-image.svg` },
      { rel: "canonical", href: `${SITE_URL}/guides` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/guides#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Guides & Blog", item: `${SITE_URL}/guides` },
          ],
        }),
      },
    ],
  }),
});
