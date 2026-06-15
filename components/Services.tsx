"use client";

import { SERVICES } from "@/lib/data";
import { Arrow } from "@/components/atoms";

function ServiceIcon({ kind, color }: { kind: string; color?: string }) {
  const c = color || "currentColor";
  const common = { width: 44, height: 44, viewBox: "0 0 44 44", fill: "none", stroke: c, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (kind) {
    case "pos": return <svg {...common}><rect x="6" y="10" width="32" height="22" rx="2"/><line x1="6" y1="16" x2="38" y2="16"/><rect x="10" y="20" width="6" height="3"/><rect x="18" y="20" width="6" height="3"/><rect x="26" y="20" width="6" height="3"/><rect x="10" y="26" width="6" height="3"/><rect x="18" y="26" width="6" height="3"/><rect x="26" y="26" width="6" height="3" fill={c}/></svg>;
    case "cart": return <svg {...common}><path d="M5 8h4l3 18h20l3-12H12"/><circle cx="14" cy="34" r="2.5"/><circle cx="32" cy="34" r="2.5"/><path d="M22 14v6M19 17h6" stroke={c}/></svg>;
    case "code": return <svg {...common}><rect x="4" y="8" width="36" height="28" rx="2"/><path d="M13 20l-5 4 5 4"/><path d="M31 20l5 4-5 4"/><line x1="26" y1="13" x2="18" y2="33"/></svg>;
    case "camera": return <svg {...common}><rect x="4" y="12" width="36" height="22" rx="2"/><circle cx="22" cy="23" r="6"/><circle cx="22" cy="23" r="2.5" fill={c}/><path d="M14 12l3-4h10l3 4"/></svg>;
    default: return null;
  }
}

export function Services() {
  return (
    <section id="services" className="section-pad" aria-label="Our services" style={{ position: "relative", padding: "140px 0" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }} className="wrap-mobile">
        <div className="services-header" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 72 }}>
          <div>
            <p className="eyebrow section-eyebrow" style={{ color: "var(--amber)", marginBottom: 16 }}>Our practice · 4 services</p>
            <h2 className="display section-title" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02, margin: 0 }}>
              What we do, <span style={{ color: "var(--blue-2)" }}>under one roof.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0, justifySelf: "end", maxWidth: 460 }}>
            From the till in your shop to the reel on your customer&apos;s feed — we cover the whole journey of taking a local business online.
          </p>
        </div>

        <div className="card-grid services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {SERVICES.map((s) => {
            const accentColor = s.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
            return (
              <article key={s.n} className="card" style={{
                padding: "32px 28px 28px",
                display: "flex", flexDirection: "column", gap: 18,
                minHeight: 280,
                position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden="true" style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%",
                  background: `radial-gradient(circle, ${s.accent === "amber" ? "rgba(245,163,58,0.18)" : "rgba(42,157,244,0.18)"} 0%, transparent 70%)`,
                  pointerEvents: "none" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
                  <div className="svc-icon" style={{ color: accentColor }}><ServiceIcon kind={s.icon} color={accentColor} /></div>
                  <span aria-hidden="true" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em" }}>{s.n}</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>{s.blurb}</p>
                <ul style={{ listStyle: "none", margin: "auto 0 0", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--ink-soft)" }}>
                      <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: "50%", background: accentColor }} />{b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>{s.bullets.length} DELIVERABLES</span>
                  <span aria-hidden="true" className="svc-arrow" style={{ color: "var(--ink-soft)" }}><Arrow size={16} rotate={-45} /></span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
