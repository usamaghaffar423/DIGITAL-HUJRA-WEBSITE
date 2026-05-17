"use client";

import { MountainRange } from "@/components/atoms/MountainRange";
import { HujraFortress } from "@/components/atoms/HujraFortress";
import { Arrow } from "@/components/atoms";

export function CtaBanner() {
  return (
    <section
      id="contact"
      aria-label="Start a project — contact Digital Hujra"
      style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--line)" }}
    >
      {/* Decorative backgrounds */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(245,163,58,0.3), transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(42,157,244,0.25), transparent 55%), var(--night-2)",
        }}
      />
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "60%", opacity: 0.7 }}>
        <MountainRange height="100%" />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", right: "8vw", bottom: "32%", opacity: 0.4 }}>
        <HujraFortress width={300} />
      </div>

      <div
        className="cta-inner wrap-mobile"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "140px 36px 160px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 880 }}>
          <span className="mono" style={{ fontSize: 12, color: "var(--amber)", letterSpacing: "0.18em" }}>
            [ BEGIN ] · A FREE CONVERSATION
          </span>
          <h2
            className="display cta-head"
            style={{
              fontSize: "clamp(56px, 8.5vw, 132px)",
              lineHeight: 0.92,
              margin: "20px 0 28px",
              letterSpacing: "-0.035em",
            }}
          >
            Let&apos;s bring your business{" "}
            <span style={{ color: "var(--amber)" }}>online,</span>
            <br />
            <span style={{ color: "var(--blue-2)" }}>the right way.</span>
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              maxWidth: 620,
              margin: "0 0 40px",
            }}
          >
            One free 30-minute hujra session. No pitch, no jargon — just an honest read on what you have, what
            you need, and what it would cost.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
            <a
              href="https://wa.me/923715868088"
              className="btn btn-amber"
              style={{ padding: "18px 28px", fontSize: 15 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.7 4.2 1.7.7 2.3.7 3.2.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              WhatsApp us
            </a>
            <a
              href="mailto:info@digitalhujra.com"
              className="btn btn-primary"
              style={{ padding: "18px 28px", fontSize: 15 }}
            >
              info@digitalhujra.com <Arrow />
            </a>
            <a href="tel:+923715868088" className="btn btn-ghost" style={{ padding: "18px 28px", fontSize: 15 }}>
              +92 371 5868088
            </a>
          </div>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              paddingTop: 32,
              borderTop: "1px solid var(--line)",
            }}
          >
            {[
              { v: "30 min", l: "Free hujra session" },
              { v: "48 hrs", l: "Reply guaranteed" },
              { v: "Pashto", l: "Or English / Urdu" },
              { v: "0 PKR", l: "To get started" },
            ].map((x) => (
              <div key={x.l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <strong className="display" style={{ fontSize: 28, color: "var(--ink)", fontWeight: 800 }}>
                  {x.v}
                </strong>
                <span className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>
                  {x.l.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -40,
          textAlign: "center",
          fontSize: "clamp(140px, 22vw, 360px)",
          lineHeight: 0.8,
          fontWeight: 800,
          color: "rgba(255,255,255,0.025)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          overflow: "hidden",
          letterSpacing: "-0.04em",
        }}
      >
        digitalhujra
      </div>
    </section>
  );
}
