import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-10 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex flex-col items-center justify-between gap-3 rounded-3xl border p-6 text-sm text-muted-foreground shadow sm:flex-row">
          <div>© {new Date().getFullYear()} PolishPrompt · JSS CORE LAB</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/library" className="hover:text-foreground">
              Library
            </Link>
            <Link to="/guides" className="hover:text-foreground">
              Guides
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
