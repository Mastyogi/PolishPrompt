import { Rocket, Clock, GraduationCap, Sparkles, TrendingUp, Coins } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Write killer prompts in seconds",
    text: "Use proven formulas, never start from scratch.",
  },
  {
    icon: Clock,
    title: "Create content 10x faster",
    text: "Blog drafts, captions, emails — done before chai cools down.",
  },
  {
    icon: GraduationCap,
    title: "Use AI for study, work, business",
    text: "One framework, infinite applications.",
  },
  {
    icon: Sparkles,
    title: "Never get generic answers again",
    text: "Trade fluff for sharp, specific, usable output.",
  },
  {
    icon: TrendingUp,
    title: "Save hours every week",
    text: "Reclaim 8–15 hours of repetitive busywork.",
  },
  {
    icon: Coins,
    title: "Charge more using AI workflows",
    text: "Package what you do into premium services.",
  },
];

export function Vision() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Imagine If You Could<span className="text-gradient-primary">…</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            This isn't theory. It's what readers report within their first week.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-cyan text-white shadow-soft">
                <Icon className="h-5 w-5" />
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
