// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // This must be the explicit source path so Vite preview can resolve the emitted server bundle.
    server: { entry: "./src/server.ts" },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/robots.txt"],
    },
    output: {
      dir: "dist",
      publicDir: "dist/client",
      serverDir: "dist/server",
    },
    // Nitro v3 supports rollupConfig for passing options to the underlying Rollup build.
    // The "use client" warnings come from Nitro's internal build phase, so suppressing them
    // here is more reliable than via Vite's build.rollupOptions.onwarn.
    rollupConfig: {
      onwarn(warning: { message?: string }, warn: (w: string) => void) {
        if (
          warning.message?.includes('"use client"') ||
          warning.message?.includes("'use client'")
        ) {
          return;
        }
        warn(warning.message ?? String(warning));
      },
    },
  } as any,
});
