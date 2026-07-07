import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { GUIDE_POSTS } from "@/lib/content";

export const Route = createLazyFileRoute("/guides")({
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Guides and learning posts</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Search-friendly content for people who want better prompts and stronger AI habits.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {GUIDE_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft"
            >
              <div className="text-sm font-semibold text-violet-600">{post.category}</div>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.readTime}</span>
                <span>{post.updatedAt}</span>
              </div>
              <Link
                to="/guides/$slug"
                params={{ slug: post.slug }}
                className="mt-5 inline-flex text-sm font-semibold text-violet-600"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
