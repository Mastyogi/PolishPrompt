import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%) via debounced scroll
 * events. Fires each threshold at most once per page visit.
 */
export function useScrollDepth() {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    function handleScroll() {
      if (timer) return;

      timer = setTimeout(() => {
        timer = null;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const maxScroll = docHeight - winHeight;

        if (maxScroll <= 0) {
          // Page fits in viewport — consider 100% reached
          if (!fired.current.has(100)) {
            fired.current.add(100);
            trackScrollDepth(100);
          }
          return;
        }

        const percent = Math.round((scrollTop / maxScroll) * 100);

        for (const t of THRESHOLDS) {
          if (percent >= t && !fired.current.has(t)) {
            fired.current.add(t);
            trackScrollDepth(t);
          }
        }
      }, 150);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also check on mount in case the user landed mid-page
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);
}
