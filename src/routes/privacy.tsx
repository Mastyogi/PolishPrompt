import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PolishPrompt" },
      {
        name: "description",
        content:
          "How PolishPrompt collects, uses and protects your data when you take the AI Prompt-Skill test and use polishprompt.tech.",
      },
      { property: "og:title", content: "Privacy Policy — PolishPrompt" },
      { property: "og:description", content: "Plain-English privacy policy for PolishPrompt." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://polishprompt.tech/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="prose mt-8 space-y-6 text-foreground/85">
        <section>
          <h2 className="text-xl font-semibold">1. Who we are</h2>
          <p className="mt-2 text-sm">
            PolishPrompt (“we”, “us”) operates polishprompt.tech and publishes the ebook
            <em> Smart Prompts = Smart Results</em>. Reach us at{" "}
            <a className="underline" href="mailto:hello@polishprompt.tech">
              hello@polishprompt.tech
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. What we collect</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <strong>AI Prompt-Skill Test answers</strong> — stored only in your browser's
              localStorage so you can resume. We never receive them on our servers.
            </li>
            <li>
              <strong>Theme preference</strong> — saved in your browser's localStorage.
            </li>
            <li>
              <strong>Anonymous traffic stats</strong> — aggregate page views with no PII.
            </li>
            <li>
              <strong>Email</strong> — only if you contact us directly.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. What we don't collect</h2>
          <p className="mt-2 text-sm">
            No accounts, no passwords, no cross-site tracking, no third-party advertising cookies,
            no selling of personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Third-party links</h2>
          <p className="mt-2 text-sm">
            The “Unlock Ebook” button sends you to Amazon. Once you leave PolishPrompt, Amazon's
            privacy policy applies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Your rights</h2>
          <p className="mt-2 text-sm">
            Clear your browser storage at any time to wipe your test progress and theme. Email us
            to request deletion of any message you've sent us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Changes</h2>
          <p className="mt-2 text-sm">
            We'll update this page when the policy changes. Continued use means you accept the
            latest version.
          </p>
        </section>

        <div className="pt-4">
          <Link to="/" className="btn-ghost">
            ← Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
