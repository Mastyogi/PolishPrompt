import { AlertTriangle, MessageSquareWarning, FileWarning, Search, RefreshCw } from "lucide-react";

const items = [
  {
    icon: MessageSquareWarning,
    title: "Asking vague questions",
    text: "“Help me with content” isn't a prompt — it's a wish.",
  },
  {
    icon: AlertTriangle,
    title: "No audience context",
    text: "AI can't write for someone it doesn't know exists.",
  },
  {
    icon: FileWarning,
    title: "No output formatting",
    text: "You wanted a table. You got a paragraph. Be specific.",
  },
  {
    icon: Search,
    title: "Using AI like Google",
    text: "AI isn't a search bar. It's a reasoning partner.",
  },
  {
    icon: RefreshCw,
    title: "Never refining prompts",
    text: "First answer is never the best. Iterate or lose.",
  },
];

export function Mistakes() {
  return (
    <section id="mistakes" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            You're Probably Making <span className="text-gradient-primary">These AI Mistakes</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            If any of these sound familiar, you're leaving 90% of AI's power on the table.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xs text-muted-foreground">Mistake #{i + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
