import { useEffect, useState } from "react";
import { Users } from "lucide-react";

// Deterministic-ish growing mock counter — feels alive without faking realtime data.
function baseCount() {
  const start = new Date("2026-05-01T00:00:00Z").getTime();
  const minsSince = Math.floor((Date.now() - start) / 60000);
  return 12480 + Math.floor(minsSince * 1.7);
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setCount(baseCount());
    const id = setInterval(
      () => {
        setCount((c) => (c ?? baseCount()) + 1 + Math.floor(Math.random() * 3));
        setPulse(true);
        setTimeout(() => setPulse(false), 600);
      },
      6000 + Math.random() * 8000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.2_145)] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.62_0.22_145)]" />
      </span>
      <Users className="h-3.5 w-3.5 text-muted-foreground" />
      <span
        className={`font-semibold tabular-nums transition ${pulse ? "text-gradient-primary scale-110" : ""}`}
      >
        {count !== null ? count.toLocaleString() : "—"}
      </span>
      <span className="text-muted-foreground">readers this month</span>
    </div>
  );
}
