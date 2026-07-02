import type { ReactNode } from "react";
import { Background } from "./Background";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`relative min-h-screen ${className}`.trim()}>
      <Background />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
