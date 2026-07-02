import { GraduationCap, Briefcase, Building2, Home, Users } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    label: "Students",
    outcome: "Crack assignments, projects & interviews 3x faster.",
  },
  {
    icon: Briefcase,
    label: "Freelancers",
    outcome: "Deliver client work in half the time — charge more.",
  },
  {
    icon: Building2,
    label: "Business Owners",
    outcome: "Automate marketing, content & customer replies.",
  },
  {
    icon: Home,
    label: "Housewives",
    outcome: "Plan meals, kids' studies, side income — all with AI.",
  },
  { icon: Users, label: "Office Workers", outcome: "Finish reports, emails & decks before lunch." },
];

export function Audience() {
  return (
    <section id="audience" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Built For <span className="text-gradient-primary">Real Indians</span> Using AI
          </h2>
          <p className="mt-3 text-muted-foreground">
            Not Silicon Valley. Real workflows, real wins, real outcomes.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, outcome }) => (
            <div
              key={label}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
