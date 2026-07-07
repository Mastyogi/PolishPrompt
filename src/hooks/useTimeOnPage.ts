import { useEffect, useRef } from "react";
import { trackTimeOnPage } from "@/lib/analytics";

const MILESTONES = [
  { seconds: 15, label: "15s" },
  { seconds: 30, label: "30s" },
  { seconds: 60, label: "1min" },
  { seconds: 120, label: "2min" },
  { seconds: 300, label: "5min" },
] as const;

/**
 * Tracks how long a user stays on the page. Reports:
 * - Milestone events at 15s, 30s, 1min, 2min, 5min
 * - Final duration on visibilitychange (tab hidden) or page unload
 * - Final duration on component unmount (navigation away)
 *
 * Each milestone fires at most once per page visit.
 */
export function useTimeOnPage() {
  const startRef = useRef(Date.now());
  const firedMilestones = useRef(new Set<string>());
  const hasReportedFinal = useRef(false);

  useEffect(() => {
    const start = startRef.current;

    function reportFinal() {
      if (hasReportedFinal.current) return;
      hasReportedFinal.current = true;
      const elapsed = Math.round((Date.now() - start) / 1000);
      trackTimeOnPage(elapsed);
    }

    // Check milestones every second
    const interval = setInterval(() => {
      const elapsed = Math.round((Date.now() - start) / 1000);
      for (const m of MILESTONES) {
        if (elapsed >= m.seconds && !firedMilestones.current.has(m.label)) {
          firedMilestones.current.add(m.label);
          trackTimeOnPage(elapsed, m.label);
        }
      }
    }, 1000);

    // Fire final event when tab becomes hidden or page unloads
    function onVisibilityChange() {
      if (document.visibilityState === "hidden") {
        reportFinal();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("beforeunload", reportFinal);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("beforeunload", reportFinal);
      // Component unmount = navigation away
      reportFinal();
    };
  }, []);
}
