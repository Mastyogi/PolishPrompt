import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Mistakes } from "@/components/landing/Mistakes";
import { Quiz } from "@/components/landing/quiz/Quiz";
import { Vision } from "@/components/landing/Vision";
import { Audience } from "@/components/landing/Audience";
import { Inside } from "@/components/landing/Inside";
import { Proof } from "@/components/landing/Proof";
import { FAQ, FAQ_ITEMS } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { Footer } from "@/components/landing/Footer";

const SITE = "https://polishprompt.tech";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "PolishPrompt — AI Prompt Guide, Free AI Diagnosis Test & 150+ ChatGPT Prompts",
      },
      {
        name: "description",
        content:
          "Take the free adaptive AI diagnosis test, see your prompt-skill score, and master ChatGPT with the PolishPrompt AI prompt guide — 150+ tested prompts, frameworks and Indian-context templates. 60% Off, limited time.",
      },
      {
        name: "keywords",
        content:
          "AI prompt guide, AI diagnosis test, prompt engineering ebook, ChatGPT prompts for beginners, smart prompts, Indian prompt engineering, Hinglish prompts, prompt writing for beginners, AI prompt skill test, prompt frameworks",
      },
      { name: "author", content: "Rahul Rana" },
      { property: "og:title", content: "PolishPrompt — AI Prompt Guide & Free AI Diagnosis Test" },
      {
        property: "og:description",
        content:
          "99% people use ChatGPT wrong. Take the free AI diagnosis test and learn the system behind 150+ tested prompts.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:site_name", content: "PolishPrompt" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PolishPrompt — AI Prompt Guide & Free AI Diagnosis Test" },
      {
        name: "twitter:description",
        content: "Free adaptive AI diagnosis test + 150+ tested ChatGPT prompts. Master AI in 21 days.",
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
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
              name: "Smart Prompts = Smart Results",
              category: "Ebook / AI Prompt Guide",
              description:
                "Premium AI prompt guide with 150+ tested ChatGPT prompts, frameworks, and Indian-context templates. Includes a 21-day system to master prompt engineering.",
              brand: { "@id": `${SITE}/#org` },
              offers: {
                "@type": "Offer",
                url: "https://amzn.in/d/00vHMnM3",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  description: "60% Off — limited time launch pricing",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1240",
              },
            },
            {
              "@type": "Quiz",
              name: "AI Prompt-Skill Test",
              about: "AI diagnosis test that scores your ChatGPT prompt-writing ability",
              educationalLevel: "Beginner to Advanced",
              learningResourceType: "Assessment",
              url: `${SITE}/#quiz`,
              isAccessibleForFree: true,
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: { "@type": "Answer", text: it.a },
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
  return (
    <main className="relative min-h-screen">
      <Background />
      <Nav />
      <Hero />
      <BeforeAfter />
      <Mistakes />
      <Quiz />
      <Vision />
      <Audience />
      <Inside />
      <Proof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
