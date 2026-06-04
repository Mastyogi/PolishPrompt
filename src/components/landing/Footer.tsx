import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-10 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex flex-col items-center justify-between gap-3 rounded-3xl border p-6 text-sm text-muted-foreground shadow sm:flex-row">
          <div>© {new Date().getFullYear()} PolishPrompt</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#quiz" className="hover:text-foreground">AI Test</a>
            <a href="#cta" className="hover:text-foreground">Ebook</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <a href="mailto:hello@polishprompt.tech" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
