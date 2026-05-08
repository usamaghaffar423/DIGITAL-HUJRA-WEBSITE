"use client";

export function HujraMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <defs>
        <linearGradient id="hmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A9DF4" />
          <stop offset="100%" stopColor="#4FB3FF" />
        </linearGradient>
      </defs>
      <path
        d="M8 6 L26 6 Q42 6 42 24 Q42 42 26 42 L8 42 Z"
        fill="none"
        stroke="url(#hmark)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M14 30 L14 22 L22 16 L30 22 L30 30 Z" fill="#F5A33A" fillOpacity="0.95" />
      <rect x="20" y="24" width="4" height="6" fill="#0A1628" />
      <rect x="6" y="10" width="3" height="3" fill="#2A9DF4" />
      <rect x="6" y="4" width="3" height="3" fill="#4FB3FF" opacity="0.6" />
      <rect x="11" y="6" width="3" height="3" fill="#2A9DF4" opacity="0.4" />
    </svg>
  );
}

export function Arrow({ size = 14, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface SectionHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  accent?: string;
  kicker?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHead({ eyebrow, title, accent, kicker, align = "left", id }: SectionHeadProps) {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        maxWidth: align === "center" ? "100%" : 920,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
        <span className="eyebrow" style={{ color: "var(--amber)" }}>
          {eyebrow}
        </span>
      </div>
      <h2
        className="display"
        style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02, margin: 0 }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span style={{ color: "var(--amber)" }}>{accent}</span>
          </>
        )}
      </h2>
      {kicker && (
        <p style={{ margin: 0, fontSize: 18, color: "var(--ink-soft)", maxWidth: 620, lineHeight: 1.55 }}>
          {kicker}
        </p>
      )}
    </div>
  );
}
