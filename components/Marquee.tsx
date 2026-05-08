"use client";

import { MARQUEE_WORDS } from "@/lib/data";

export function Marquee() {
  const seq = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section
      aria-hidden="true"
      className="marquee-section"
      style={{
        background: "linear-gradient(180deg, var(--night-2), var(--night))",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
        padding: "32px 0",
        position: "relative",
      }}
    >
      <div
        className="marquee-strip"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
          animation: "scroll-x 42s linear infinite",
        }}
      >
        {seq.map((w, i) => (
          <span
            key={i}
            style={{ display: "inline-flex", alignItems: "center", gap: 36, paddingRight: 36 }}
          >
            <span
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: i % 3 === 0 ? "var(--amber)" : i % 3 === 1 ? "var(--ink)" : "var(--blue-2)",
                fontStyle: i % 4 === 1 ? "italic" : "normal",
                fontFamily: i % 4 === 1 ? "var(--font-newsreader), serif" : "var(--font-manrope), sans-serif",
                fontWeight: i % 4 === 1 ? 400 : 800,
                letterSpacing: "-0.025em",
              }}
            >
              {w}
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <circle cx="7" cy="7" r="3" fill="var(--amber)" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}
