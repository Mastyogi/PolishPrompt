import {
  BookOpen,
  Zap,
  Wand2,
  MapPin,
  MessageCircle,
  Bug,
  Cpu,
  KeyRound,
  LayoutTemplate,
} from "lucide-react";

const items = [
  { icon: BookOpen, title: "150+ Tested Prompts", text: "Hand-curated, ready to copy-paste." },
  { icon: Zap, title: "150+ Productivity Bonuses", text: "Daily-life prompt boosters." },
  { icon: Wand2, title: "Prompt Formulas", text: "Plug-and-play frameworks." },
  { icon: MapPin, title: "Indian-Context Prompts", text: "Local audiences, local outcomes." },
  { icon: MessageCircle, title: "WhatsApp Templates", text: "Replies, cold DMs, scripts." },
  { icon: Bug, title: "AI Debugging", text: "Fix any weak output in seconds." },
  { icon: Cpu, title: "Advanced Techniques", text: "Multi-step, role-play, chain prompts." },
  { icon: KeyRound, title: "Secret Arsenal", text: "Short codewords that 10x AI output." },
  { icon: LayoutTemplate, title: "Ready Frameworks", text: "For content, biz, study, money." },
];

export function Inside() {
  return (
    <section id="inside" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What's Inside The <span className="text-gradient-gold">Ebook</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            21 days. One ebook. A complete AI-powered operating system.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-gold text-white shadow-soft">
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
