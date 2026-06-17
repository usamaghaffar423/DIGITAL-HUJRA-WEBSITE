"use client";

const CHANNEL_URL = "https://whatsapp.com/channel/0029VbCk0ip4yltSewi6Li3W";

function WaIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const PERKS = [
  { emoji: "📢", text: "Daily digital tips for KP businesses" },
  { emoji: "🎯", text: "Exclusive deals & service discounts" },
  { emoji: "📸", text: "Behind-the-scenes from our studio" },
  { emoji: "🚀", text: "Success stories from local clients" },
];

export function WhatsAppChannel() {
  return (
    <section
      aria-label="Join our WhatsApp channel"
      style={{
        position: "relative",
        padding: "100px 0",
        background: "linear-gradient(180deg, var(--night) 0%, #061A0E 50%, var(--night) 100%)",
        borderTop: "1px solid var(--line)",
        overflow: "hidden",
      }}
    >
      {/* Green glow blob */}
      <div aria-hidden="true" style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,211,102,0.10) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Grid overlay */}
      <div aria-hidden="true" className="grid-bg" style={{
        position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none",
        maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
      }} />

      <div className="wrap-mobile" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
        <div
          className="wa-channel-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* ── Left: copy ── */}
          <div>
            {/* Live pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px",
              border: "1px solid rgba(37,211,102,0.35)",
              borderRadius: 999,
              background: "rgba(37,211,102,0.08)",
              marginBottom: 28,
            }}>
              <span aria-hidden="true" style={{
                width: 7, height: 7, borderRadius: "50%", background: "#25D366",
                boxShadow: "0 0 0 4px rgba(37,211,102,0.25)",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "#25D366" }}>WHATSAPP CHANNEL · LIVE</span>
            </div>

            <h2
              className="display section-title"
              style={{
                fontSize: "clamp(32px, 4.5vw, 58px)",
                lineHeight: 1.02,
                margin: "0 0 20px",
                letterSpacing: "-0.028em",
              }}
            >
              Stay ahead of every
              <br />
              <span style={{ color: "#25D366" }}>KP business</span> trend.
            </h2>

            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", margin: "0 0 32px", maxWidth: 440 }}>
              Join our free WhatsApp channel — your daily dose of digital tips, exclusive offers, and local success stories, straight to your phone.
            </p>

            {/* Perks list */}
            <ul style={{ listStyle: "none", margin: "0 0 36px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {PERKS.map((p) => (
                <li key={p.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                    background: "rgba(37,211,102,0.10)",
                    border: "1px solid rgba(37,211,102,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16,
                  }}>{p.emoji}</span>
                  <span style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{p.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 28px",
                background: "#25D366",
                color: "#fff",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 12px 40px -10px rgba(37,211,102,0.55)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 18px 48px -10px rgba(37,211,102,0.65)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px -10px rgba(37,211,102,0.55)";
              }}
            >
              <WaIcon size={20} />
              Join the Channel — It&apos;s Free
            </a>

            <p className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--ink-mute)", marginTop: 14 }}>
              NO SPAM · UPDATES ONLY · LEAVE ANYTIME
            </p>
          </div>

          {/* ── Right: channel preview card ── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%",
              maxWidth: 360,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(37,211,102,0.25)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 32px 80px -20px rgba(37,211,102,0.15), 0 0 0 1px rgba(37,211,102,0.1)",
            }}>
              {/* Channel header */}
              <div style={{
                background: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)",
                padding: "28px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}>
                <div style={{
                  width: 54, height: 54, borderRadius: "50%",
                  background: "#25D366",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
                }}>
                  <WaIcon size={26} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 3 }}>Digital Hujra</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Official Channel · Batkhela, KP</div>
                </div>
              </div>

              {/* Preview messages */}
              <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { msg: "🚀 Naya tip: Apne products ki professional photos website aur store pe lagao — customers ka trust 3x hota hai!", time: "9:00 AM" },
                  { msg: "📸 Aaj hamare studio mein Khan Pharmacy ka product shoot hua. Results kal share karein ge!", time: "2:30 PM" },
                  { msg: "🎯 Is hafte sirf 2 slots baqi hain product photography ke liye. Jaldi contact karo!", time: "5:00 PM" },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: i === 2 ? "rgba(37,211,102,0.12)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${i === 2 ? "rgba(37,211,102,0.25)" : "var(--line)"}`,
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>{item.msg}</p>
                    <span style={{ fontSize: 10, color: "var(--ink-mute)", alignSelf: "flex-end" }}>{item.time} ✓✓</span>
                  </div>
                ))}
              </div>

              {/* Join footer */}
              <div style={{ padding: "0 20px 24px" }}>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "13px 0",
                    background: "#25D366",
                    color: "#fff",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  <WaIcon size={16} />
                  Follow Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .wa-channel-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
