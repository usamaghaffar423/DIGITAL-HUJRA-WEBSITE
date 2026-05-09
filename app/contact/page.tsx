"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Arrow, HujraMark } from "@/components/atoms";

const SERVICES_LIST = [
  "POS System",
  "E-commerce Store",
  "Branding & Identity",
  "Social Media Marketing",
  "Product Photography",
  "Video Editing",
  "Graphic Design",
  "Not sure yet",
];

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    city: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New enquiry from Digital Hujra website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Business:* ${form.business}`,
      `*City:* ${form.city}`,
      `*Phone:* ${form.phone}`,
      `*Service needed:* ${form.service}`,
      ``,
      `*Message:*`,
      form.message,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/923715868088?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    color: "var(--ink)",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color .25s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ink-mute)",
    marginBottom: 8,
    letterSpacing: "0.03em",
  };

  const FAQ = [
    {
      q: "Do I need to come to your office?",
      a: "No — we can handle everything over WhatsApp, phone, or video call. But you're always welcome at Main Bazaar, Batkhela. Chai is on us.",
    },
    {
      q: "How long does a project take?",
      a: "A logo takes 5–7 days. A basic website takes 2–3 weeks. A full POS installation takes 1–2 days on-site. We give you a timeline before we start.",
    },
    {
      q: "What's the payment process?",
      a: "50% upfront, 50% on delivery. We accept bank transfer, Easypaisa, JazzCash, and cash at the office.",
    },
    {
      q: "Do you work outside Batkhela?",
      a: "Yes — we serve clients across all 8 major KP districts. On-site visits are available across Malakand Division at no extra charge.",
    },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Contact Digital Hujra">

        {/* ── Page Hero ─────────────────────────────────── */}
        <section
          aria-label="Contact hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 0,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          {/* Amber glow center */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "50%", top: "0%", transform: "translateX(-50%)",
            width: "60vw", height: "50vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,163,58,0.10) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          {/* Blue glow bottom */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "50%", bottom: "0", transform: "translateX(-50%)",
            width: "40vw", height: "20vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,244,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" className="grid-bg" style={{
            position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse at 50% 45%, black 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 25%, transparent 72%)",
          }} />

          <div className="wrap-mobile" style={{ maxWidth: 860, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>CONTACT</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(91,214,138,0.3)", borderRadius: 999, background: "rgba(91,214,138,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "#5BD68A", display: "inline-block", boxShadow: "0 0 0 4px rgba(91,214,138,0.2)" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#5BD68A" }}>FREE CONSULTATION · NO COMMITMENT</span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(52px, 8.5vw, 128px)",
                lineHeight: 0.93,
                margin: "0 0 28px",
                letterSpacing: "-0.038em",
              }}
            >
              <span style={{ color: "var(--amber)" }}>Let&apos;s sit</span>
              <br />
              <span style={{ color: "var(--ink)" }}>and talk.</span>
            </h1>

            <p style={{ maxWidth: 520, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 44px" }}>
              No pitch, no pressure. Tell us about your business and we&apos;ll tell you what&apos;s possible. First consultation is always free.
            </p>

            {/* Primary CTA cluster */}
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
              <a
                href="https://wa.me/923715868088"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#fff", border: "none", gap: 10, boxShadow: "0 8px 28px -8px rgba(37,211,102,0.45)", fontSize: 15 }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a href="#contact-form" className="btn btn-primary">Fill the form below <Arrow /></a>
            </div>
          </div>

          {/* Contact chips strip — unique to Contact hero */}
          <div
            style={{
              borderTop: "1px solid var(--line)",
              background: "rgba(255,255,255,0.015)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{
              maxWidth: 1360,
              margin: "0 auto",
              padding: "0 36px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: "Main Bazaar, Batkhela",
                  sub: "District Malakand, KP",
                  color: "var(--amber)",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.86 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.64a16 16 0 006.29 6.29l1-.99a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  label: "+92 371 5868088",
                  sub: "Mon – Sat, 9am – 6pm",
                  color: "var(--blue-2)",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "hello@digitalhujra.pk",
                  sub: "Reply within 24 hours",
                  color: "var(--amber)",
                },
                {
                  icon: <WhatsAppIcon />,
                  label: "WhatsApp",
                  sub: "wa.me/923715868088",
                  color: "#5BD68A",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: "28px 16px",
                    borderRight: i < 3 ? "1px solid var(--line)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main contact section ───────────────────────── */}
        <section
          id="contact-form"
          aria-label="Contact form and details"
          style={{
            padding: "80px 0 120px",
            borderTop: "1px solid var(--line)",
            background: "var(--night)",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>

              {/* Form */}
              <div>
                <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, margin: "0 0 10px", letterSpacing: "-0.025em" }}>
                  Book a free hujra session
                </h2>
                <p style={{ fontSize: 15, color: "var(--ink-mute)", margin: "0 0 36px" }}>
                  Fill in the details below — we&apos;ll reply on WhatsApp within a few hours.
                </p>

                {submitted ? (
                  <div className="card" style={{
                    padding: "48px 36px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, rgba(91,214,138,0.06), rgba(10,22,40,0.4))",
                    borderColor: "rgba(91,214,138,0.3)",
                  }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">✓</div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#5BD68A" }}>Message sent!</h3>
                    <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 24px" }}>
                      WhatsApp will open with your details pre-filled. We&apos;ll respond within a few hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-ghost"
                      style={{ fontSize: 13 }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWhatsApp} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <div>
                        <label htmlFor="name" style={labelStyle}>Your name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="e.g. Zubair Khan"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="business" style={labelStyle}>Business name *</label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          required
                          placeholder="e.g. Khan Pharmacy"
                          value={form.business}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
                        />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <div>
                        <label htmlFor="city" style={labelStyle}>City / District</label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          placeholder="e.g. Mardan"
                          value={form.city}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" style={labelStyle}>Service you need</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "var(--blue-2)"; }}
                        onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "var(--line-2)"; }}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s} style={{ background: "#0A1628", color: "#F4F7FB" }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" style={labelStyle}>Tell us about your business</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="What does your business do? What's the biggest challenge you're facing online?"
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                        onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--blue-2)"; }}
                        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--line-2)"; }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-amber"
                      style={{ alignSelf: "flex-start", gap: 12 }}
                    >
                      <WhatsAppIcon />
                      Send via WhatsApp <Arrow />
                    </button>
                    <p style={{ fontSize: 12, color: "var(--ink-mute)", margin: 0 }}>
                      Clicking send opens WhatsApp with your message pre-filled. No data is stored on our servers.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                {/* Office card */}
                <div className="card" style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <HujraMark size={36} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 17 }}>Digital Hujra Studio</div>
                      <div className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-mute)", marginTop: 3 }}>MAIN BAZAAR · BATKHELA</div>
                    </div>
                  </div>
                  <hr className="rule" />
                  <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      {
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                        ),
                        label: "Main Bazaar, Batkhela",
                        sub: "District Malakand, KP, Pakistan",
                        href: undefined,
                      },
                      {
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.86 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.64a16 16 0 006.29 6.29l1-.99a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                          </svg>
                        ),
                        label: "+92 371 5868088",
                        sub: "Mon – Sat, 9am – 6pm",
                        href: "tel:+923715868088",
                      },
                      {
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                          </svg>
                        ),
                        label: "hello@digitalhujra.pk",
                        sub: "Replies within 24 hours",
                        href: "mailto:hello@digitalhujra.pk",
                      },
                      {
                        icon: <WhatsAppIcon />,
                        label: "WhatsApp us",
                        sub: "wa.me/923715868088",
                        href: "https://wa.me/923715868088",
                      },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(42,157,244,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {item.icon}
                        </div>
                        <div>
                          {item.href ? (
                            <a href={item.href} style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}
                               {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >{item.label}</a>
                          ) : (
                            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{item.label}</div>
                          )}
                          <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 2 }}>{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </address>
                </div>

                {/* Hours card */}
                <div className="card" style={{ padding: "28px 28px" }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", marginBottom: 16 }}>OFFICE HOURS</div>
                  {[
                    { d: "Monday – Saturday", t: "9:00 am – 6:00 pm" },
                    { d: "Sunday", t: "Closed" },
                    { d: "WhatsApp", t: "Always available" },
                  ].map((row) => (
                    <div key={row.d} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--line)", fontSize: 14 }}>
                      <span style={{ color: "var(--ink-mute)" }}>{row.d}</span>
                      <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>{row.t}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/923715868088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    justifyContent: "center",
                    background: "#25D366",
                    color: "#fff",
                    border: "none",
                    gap: 10,
                    boxShadow: "0 8px 24px -8px rgba(37,211,102,0.4)",
                    fontSize: 15,
                  }}
                >
                  <WhatsAppIcon />
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section
          aria-label="Frequently asked questions"
          style={{
            padding: "80px 0 100px",
            borderTop: "1px solid var(--line)",
            background: "linear-gradient(180deg, var(--night-2), var(--night))",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Common questions</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {FAQ.map((item) => (
                <div key={item.q} className="card" style={{ padding: "28px 28px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.015em" }}>{item.q}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
