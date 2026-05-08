"use client";

import { WORK } from "@/lib/data";
import { MountainRange } from "@/components/atoms/MountainRange";
import { SectionHead, Arrow } from "@/components/atoms";

export function Work() {
  return (
    <section id="work" className="section-pad" style={{ padding: "140px 0", position: "relative" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }} className="wrap-mobile">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, gap: 40, flexWrap: "wrap" }}>
          <SectionHead
            eyebrow="Selected work · across KP"
            title={<>Real businesses, <span style={{ color: "var(--blue-2)" }}>real growth.</span></>}
          />
          <a href="#" className="btn btn-ghost">View full archive <Arrow /></a>
        </div>

        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {WORK.map((w, i) => {
            const big = i === 0;
            return (
              <a key={w.id} href="#" className="work-item" style={{
                gridColumn: big ? "span 2" : "span 1",
                gridRow: big ? "span 2" : "auto",
                display: "flex", flexDirection: "column", gap: 14,
                textDecoration: "none",
              }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: big ? "1.2/1" : "16/11",
                    borderRadius: 14, overflow: "hidden",
                    background: `linear-gradient(135deg, ${w.swatch} 0%, #050B17 100%)`,
                    border: "1px solid var(--line)",
                    transition: "border-color .35s, transform .35s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--blue-2)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 8px, transparent 8px 18px)" }} />
                  <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "55%", opacity: 0.7 }}>
                    <MountainRange height="100%" />
                  </div>
                  <div style={{ position: "absolute", left: 16, top: 16, background: "rgba(10,22,40,0.85)", backdropFilter: "blur(8px)", padding: "5px 12px", borderRadius: 999, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "var(--amber)", border: "1px solid rgba(245,163,58,0.3)" }}>
                    📍 {w.city.toUpperCase()}
                  </div>
                  <div className="display work-num" style={{ position: "absolute", right: 18, bottom: 8, fontSize: big ? 140 : 90, color: "rgba(255,255,255,0.12)", lineHeight: 1, letterSpacing: "-0.04em", fontStyle: "italic", fontFamily: "var(--font-newsreader), serif", fontWeight: 400 }}>
                    {String(w.id).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 4px" }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: big ? 28 : 20, fontWeight: 700, letterSpacing: "-0.015em" }}>{w.name}</h4>
                    <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>{w.cat}</span>
                  </div>
                  <span style={{ color: "var(--blue-2)" }}><Arrow size={16} rotate={-45} /></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
