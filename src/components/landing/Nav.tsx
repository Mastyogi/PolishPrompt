import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect, useRef } from "react";

export function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Track scroll for glass effect change
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(path: string) {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  }

  const linkClass = (path: string) =>
    `relative transition-colors ${
      isActive(path)
        ? "text-foreground font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  // Close on Escape key + focus trap
  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
        return;
      }
      // Trap Tab focus inside the menu
      if (e.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    const id = setTimeout(() => document.addEventListener("click", handleClick), 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    buttonRef.current?.focus();
  }

  const mobileLinkClass = (path: string) =>
    `rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
      isActive(path)
        ? "bg-accent text-foreground"
        : "hover:bg-accent"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav className={`flex items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-5 transition-all duration-300 ${
          scrolled
            ? "bg-card/85 backdrop-blur-xl shadow-card border border-border/70"
            : "glass-strong"
        }`}>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base sm:text-lg">PolishPrompt</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm lg:flex">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/library" className={linkClass("/library")}>
              Library
            </Link>
            <Link to="/guides" className={linkClass("/guides")}>
              Guides
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/subscribe" className="btn-primary !py-2 !px-3 text-xs sm:!px-4 sm:text-sm">
              Subscribe
            </Link>
            <button
              ref={buttonRef}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            ref={menuRef}
            className="mt-2 rounded-2xl border border-border/70 bg-card p-4 shadow-card lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className={mobileLinkClass("/")}
              >
                Home
              </Link>
              <Link
                to="/library"
                onClick={closeMenu}
                className={mobileLinkClass("/library")}
              >
                Library
              </Link>
              <Link
                to="/guides"
                onClick={closeMenu}
                className={mobileLinkClass("/guides")}
              >
                Guides
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={mobileLinkClass("/about")}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={mobileLinkClass("/contact")}
              >
                Contact
              </Link>
              <div className="mt-2 border-t border-border/50 pt-2">
                <Link
                  to="/subscribe"
                  onClick={closeMenu}
                  className="btn-primary flex w-full items-center justify-center !py-2.5 text-sm"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
