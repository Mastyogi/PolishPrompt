import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/landing/PageShell";
import { GUIDE_POSTS, SITE_URL } from "@/lib/content";

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const post = GUIDE_POSTS.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title ?? "Guide"} — PolishPrompt` },
        {
          name: "description",
          content: post?.description ?? "Read a practical guide from PolishPrompt.",
        },
        { property: "og:title", content: post?.title ?? "Guide" },
        {
          property: "og:description",
          content: post?.description ?? "Read a practical guide from PolishPrompt.",
        },
        { property: "og:type", content: "article" },
        { rel: "canonical", href: `${SITE_URL}/guides/${params.slug}` },
      ],
    };
  },
  component: GuideDetailPage,
});

function GuideDetailPage() {
  const { slug } = Route.useParams();
  const post = GUIDE_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <PageShell>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 text-center shadow-soft">
            <h1 className="text-3xl font-bold">Guide not found</h1>
            <p className="mt-3 text-muted-foreground">
              The guide you requested is not available right now.
            </p>
            <Link to="/guides" className="btn-primary mt-6">
              Browse guides
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-card">
          <div className="text-sm font-semibold text-violet-600">{post.category}</div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>Updated {post.updatedAt}</span>
          </div>
          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/library" className="btn-primary">
              Browse the prompt library
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
