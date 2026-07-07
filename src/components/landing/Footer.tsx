import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-16 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-base">PolishPrompt</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              A verified prompt learning hub — curated patterns, practical guides, and a deeper
              system for better AI results.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/library", label: "Library" },
                { to: "/guides", label: "Guides" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border/70" />

        {/* Copyright row */}
        <div className="mt-6 text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} PolishPrompt · JSS CORE LAB
        </div>
      </div>
    </footer>
  );
}
