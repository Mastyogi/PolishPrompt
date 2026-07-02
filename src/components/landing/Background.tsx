export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-gradient-hero">
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -120,
          background: "oklch(0.78 0.18 280)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 480,
          height: 480,
          top: 200,
          right: -120,
          background: "oklch(0.78 0.18 215)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          bottom: -200,
          left: "30%",
          background: "oklch(0.82 0.15 320)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="oklch(0.55 0.18 270)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
