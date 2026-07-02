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
            <Link to="/library" className="hover:text-foreground">
              Library
            </Link>
            <Link to="/guides" className="hover:text-foreground">
              Guides
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/subscribe" className="btn-primary !py-2 !px-3 text-xs sm:!px-4 sm:text-sm">
              Subscribe
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
