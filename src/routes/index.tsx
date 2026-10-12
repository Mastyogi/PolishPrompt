import { createFileRoute } from "@tanstack/react-router";
import { PlatformExperience } from "@/components/landing/PlatformExperience";
import { FAQ_ITEMS } from "@/lib/content";
import { useScrollDepth } from "@/hooks/useScrollDepth";

const SITE = "https://polishprompt.tech";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "PolishPrompt — AI Prompt Guide, 50+ Tested ChatGPT Prompts & Practical Guides",
      },
      {
        name: "description",
        content:
          "Master ChatGPT with the PolishPrompt AI prompt guide — 50+ tested prompts, frameworks and Indian-context templates. Browse the free prompt library and guides.",
      },
      {
        name: "keywords",
        content:
          "AI prompt guide, prompt engineering, ChatGPT prompts for beginners, smart prompts, Indian prompt engineering, Hinglish prompts, prompt writing for beginners, prompt frameworks",
      },
      { name: "author", content: "Rahul Rana" },
      { property: "og:title", content: "PolishPrompt — AI Prompt Guide & 50+ Tested Prompts" },
      {
        property: "og:description",
        content:
          "Browse 50+ tested ChatGPT prompts, practical guides, and a deeper ebook path for better AI results. Free library, no guesswork.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:site_name", content: "PolishPrompt" },
      { property: "og:image", content: `${SITE}/og-image.svg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PolishPrompt — AI Prompt Guide & 50+ Tested Prompts" },
      {
        name: "twitter:description",
        content:
          "50+ tested ChatGPT prompts, practical guides, and a deeper ebook path. Master AI prompts with structure.",
      },
      { name: "twitter:image", content: `${SITE}/og-image.svg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE}/#org`,
              name: "PolishPrompt",
              url: SITE,
              founder: { "@type": "Person", name: "Rahul Rana" },
              sameAs: ["https://amzn.in/d/00vHMnM3"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE}/#website`,
              url: SITE,
              name: "PolishPrompt",
              publisher: { "@id": `${SITE}/#org` },
              inLanguage: "en-IN",
            },
            {
              "@type": "Product",
              "@id": `${SITE}/#ebook`,
              name: "Smart Prompts, Smart Results",
              category: "Ebook / AI Prompt Guide",
              description:
                "Premium AI prompt guide with 50+ tested ChatGPT prompts, frameworks, and Indian-context templates. Includes a 21-day system to master prompt engineering.",
              brand: { "@id": `${SITE}/#org` },
              offers: {
                "@type": "Offer",
                url: "https://amzn.in/d/00vHMnM3",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((it) => ({
                "@type": "Question",
                name: it.question,
                acceptedAnswer: { "@type": "Answer", text: it.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollDepth();
  return <PlatformExperience />;
}
