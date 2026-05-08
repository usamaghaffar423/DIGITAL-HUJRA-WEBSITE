"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHead } from "@/components/atoms";

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 7500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section style={{ padding: "140px 0", position: "relative" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
        <SectionHead
          eyebrow="Said about us"
          title={
            <>
              What our <span style={{ color: "var(--amber)" }}>clients</span> say.
            </>
          }
          align="center"
        />

        <div
          style={{
            marginTop: 64,
            padding: "56px 64px",
            border: "1px solid var(--line-2)",
            borderRadius: 24,
            background: "linear-gradient(180deg, rgba(42,157,244,0.06), rgba(255,255,255,0.01))",
            position: "relative",
            maxWidth: 1080,
            margin: "64px auto 0",
          }}
        >
          {/* Quote glyph */}
          <div
            style={{
              position: "absolute",
              top: -28,
              left: 56,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "var(--amber)",
              color: "var(--night)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-newsreader), serif",
              fontSize: 56,
              lineHeight: 1,
              paddingTop: 14,
              boxShadow: "0 12px 30px -8px rgba(245,163,58,0.5)",
            }}
          >
            &ldquo;
          </div>

          <p
            key={idx}
            className="serif-italic"
            style={{
              fontSize: "clamp(22px, 2.4vw, 32px)",
              lineHeight: 1.4,
              margin: "16px 0 32px",
              color: "var(--ink)",
              animation: "fadeIn .5s ease both",
            }}
          >
            {t.q}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid var(--line)",
              paddingTop: 24,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${idx % 2 ? "#2A9DF4" : "#F5A33A"}, ${idx % 2 ? "#1B3656" : "#5C3920"})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                {t.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-mute)" }}>
                  {t.role.toUpperCase()} · {t.city.toUpperCase()}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === idx ? 28 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: i === idx ? "var(--amber)" : "rgba(255,255,255,0.2)",
                    border: "none",
                    transition: "all .3s",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
