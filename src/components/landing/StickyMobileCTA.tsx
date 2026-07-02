export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-3 md:hidden">
      <div className="glass-strong flex items-center justify-between gap-3 rounded-full p-2 pl-4 shadow-glow">
        <div className="text-xs">
          <div className="font-semibold">60% Off · Limited Time</div>
          <div className="text-muted-foreground">Instant access · Lifetime updates</div>
        </div>
        <a href="#cta" className="btn-primary !py-2 !px-4 text-sm">
          Unlock Ebook
        </a>
      </div>
    </div>
  );
}
