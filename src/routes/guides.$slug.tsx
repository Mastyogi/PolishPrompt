import { createFileRoute } from "@tanstack/react-router";
import { GUIDE_POSTS, SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const post = GUIDE_POSTS.find((item) => item.slug === params.slug);
    const description = post?.excerpt ?? post?.description ?? "Read a practical guide from PolishPrompt.";
    const title = `${post?.title ?? "Guide"} — Guide | PolishPrompt`;
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
        { rel: "canonical", href: `${SITE_URL}/guides/${params.slug}` },
      ],
    };
  },
});
