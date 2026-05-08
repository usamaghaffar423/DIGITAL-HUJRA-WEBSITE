"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, DISTRICTS } from "@/lib/data";
import { SectionHead } from "@/components/atoms";

function CountUp({ value }: { value: string }) {
  const m = String(value).match(/^(\d+)(.*)$/);
  if (!m) return <>{value}</>;
  const target = parseInt(m[1], 10);
  const tail = m[2];
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    let raf: number;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let start: number | undefined;
        const dur = 1400;
        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {tail}
    </span>
  );
}

export function Coverage() {
  return (
    <section
      id="coverage"
      className="section-pad"
      style={{
        padding: "140px 0",
        borderTop: "1px solid var(--line)",
        background: "linear-gradient(180deg, var(--night), var(--night-2))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 1 }}>
        <div className="coverage-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <SectionHead
              eyebrow="Where we work · KP"
              title={
                <>
                  Built in Batkhela.{" "}
                  <br />
                  <span style={{ color: "var(--amber)" }}>Trusted across KP.</span>
                </>
              }
              kicker="From the bazaars of Mingora to the workshops of Kohat — wherever there's a local business with a story, we'll come."
            />

            <div
              className="stats-grid"
              style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 22px",
                    borderRight: i < STATS.length - 1 ? "1px solid var(--line)" : "none",
                    background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  }}
                >
                  <div
                    className="display stat-number"
                    style={{
                      fontSize: 48,
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      color: i % 2 === 0 ? "var(--blue-2)" : "var(--amber)",
                    }}
                  >
                    <CountUp value={s.v} />
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: "var(--ink-mute)",
                      marginTop: 10,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* District map */}
          <div>
            <div
              style={{
                padding: "32px",
                border: "1px solid var(--line-2)",
                borderRadius: 20,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--amber)" }}>
                  COVERAGE · 18 DISTRICTS
                </div>
                <span
                  style={{
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 4,
                    background: "rgba(91,214,138,0.15)",
                    color: "#5BD68A",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  LIVE
                </span>
              </div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                }}
              >
                Khyber Pakhtunkhwa,{" "}
                <span className="serif-italic" style={{ color: "var(--amber)" }}>
                  covered.
                </span>
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {DISTRICTS.map((d, i) => (
                  <span
                    key={d}
                    className="district-tag"
                    style={{
                      padding: "8px 14px",
                      border: "1px solid var(--line-2)",
                      borderRadius: 999,
                      fontSize: 13,
                      background: i < 6 ? "rgba(42,157,244,0.1)" : "transparent",
                      color: i < 6 ? "var(--blue-2)" : "var(--ink-soft)",
                      borderColor: i < 6 ? "rgba(42,157,244,0.3)" : "var(--line-2)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      animation: `fadeUp .5s ease ${i * 0.04}s both`,
                    }}
                  >
                    {i < 6 && (
                      <span
                        style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue-2)" }}
                      />
                    )}
                    {d}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                  color: "var(--ink-mute)",
                }}
              >
                <span>
                  <span style={{ color: "var(--blue-2)" }}>●</span> Active engagement
                </span>
                <span>○ On request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
