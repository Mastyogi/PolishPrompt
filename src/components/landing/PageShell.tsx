import type { ReactNode } from "react";

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`relative min-h-screen ${className}`.trim()}>
      {children}
    </main>
  );
}
