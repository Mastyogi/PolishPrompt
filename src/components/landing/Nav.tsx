import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-5">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base sm:text-lg">PolishPrompt</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a href="#mistakes" className="hover:text-foreground">Mistakes</a>
            <a href="#quiz" className="hover:text-foreground">AI Test</a>
            <a href="#inside" className="hover:text-foreground">Inside</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#cta" className="btn-primary !py-2 !px-3 text-xs sm:!px-4 sm:text-sm">
              Unlock
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
