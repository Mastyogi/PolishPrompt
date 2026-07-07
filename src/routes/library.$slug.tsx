import { createFileRoute } from "@tanstack/react-router";
import { PROMPTS, SITE_URL } from "@/lib/content";

function buildDescription(prompt: (typeof PROMPTS)[number]): string {
  let desc = prompt.template;
  for (const v of prompt.variables) {
    desc = desc.replaceAll(`{{${v.id}}}`, `[${v.label}]`);
  }
  desc = desc.replace(/\s+/g, " ").trim();
  return desc.length > 160 ? desc.slice(0, 157) + "..." : desc;
}

export const Route = createFileRoute("/library/$slug")({
  head: ({ params }) => {
    const prompt = PROMPTS.find((item) => item.id === params.slug);
    const description = prompt ? buildDescription(prompt) : "Explore a prompt from the PolishPrompt library.";
    const title = `${prompt?.title ?? "Prompt"} — Prompt Template | PolishPrompt`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: description,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: description,
        },
        { property: "og:type", content: "article" },
        { rel: "canonical", href: `${SITE_URL}/library/${params.slug}` },
      ],
    };
  },
});
