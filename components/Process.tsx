"use client";

import { PROCESS } from "@/lib/data";
import { SectionHead } from "@/components/atoms";

export function Process() {
  return (
    <section
      id="process"
      className="section-pad"
      aria-label="Our process"
      style={{
        position: "relative",
        padding: "140px 0",
        borderTop: "1px solid var(--line)",
        background: "linear-gradient(180deg, var(--night-2), var(--night))",
      }}
    >
      <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
        <SectionHead
          eyebrow="How we work · 4 steps"
          title={
            <>
              Like a real <span style={{ color: "var(--amber)" }}>hujra</span> —
            </>
          }
          kicker="A hujra is a guest room. You're invited in, you're listened to, you're served well. Same with our process — old manners, modern tools."
        />

        <div className="process-inner" style={{ marginTop: 80, position: "relative" }}>
          {/* Decorative connecting path */}
          <svg
            className="process-connector"
            aria-hidden="true"
            viewBox="0 0 1280 200"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 60,
              height: 100,
              width: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <path
              d="M150,80 C320,40 480,140 640,80 C800,20 960,140 1120,80"
              fill="none"
              stroke="var(--amber)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              opacity="0.55"
            />
          </svg>

          <ol
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              position: "relative",
              zIndex: 1,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {PROCESS.map((p, i) => (
              <li
                key={p.n}
                className="card"
                style={{
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  animation: `fadeUp .8s cubic-bezier(.2,.7,.2,1) ${i * 0.1}s both`,
                  marginTop: i % 2 === 1 ? 40 : 0,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(245,163,58,0.12)",
                    border: "1px solid rgba(245,163,58,0.4)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--amber)",
                  }}
                >
                  {p.n}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0, letterSpacing: "-0.015em" }}>
                  {p.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                  {p.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
