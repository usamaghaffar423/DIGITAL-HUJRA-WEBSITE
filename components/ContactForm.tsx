"use client";

import { useState } from "react";
import { Arrow } from "@/components/atoms";

const SERVICES_LIST = [
  "POS System",
  "E-commerce Store",
  "Custom Software",
  "Product Photography",
  "Not sure yet",
];

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

export function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", business: "", city: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setApiError(null);

    const fullMessage = [
      form.message,
      form.business && `Business: ${form.business}`,
      form.city     && `City: ${form.city}`,
    ].filter(Boolean).join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone   || undefined,
          service: form.service || undefined,
          message: fullMessage,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ? JSON.stringify(data.error) : `Server error ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="card" style={{
        padding: "48px 36px",
        textAlign: "center",
        background: "linear-gradient(135deg, rgba(91,214,138,0.06), rgba(10,22,40,0.4))",
        borderColor: "rgba(91,214,138,0.3)",
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">✓</div>
        <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#5BD68A" }}>Message received!</h3>
        <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 24px" }}>
          We&apos;ve got your details and will reply within a few hours. You can also reach us instantly on WhatsApp.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn btn-ghost" style={{ fontSize: 13 }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Your name *</label>
          <input id="name" name="name" type="text" required placeholder="e.g. Zubair Khan"
            value={form.name} onChange={handleChange} style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email address *</label>
          <input id="email" name="email" type="email" required placeholder="e.g. zubair@example.com"
            value={form.email} onChange={handleChange} style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
          />
        </div>
      </div>
      <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label htmlFor="business" style={labelStyle}>Business name</label>
          <input id="business" name="business" type="text" placeholder="e.g. Khan Pharmacy"
            value={form.business} onChange={handleChange} style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" placeholder="+92 3XX XXXXXXX"
            value={form.phone} onChange={handleChange} style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
          />
        </div>
      </div>
      <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label htmlFor="city" style={labelStyle}>City / District</label>
          <input id="city" name="city" type="text" placeholder="e.g. Mardan"
            value={form.city} onChange={handleChange} style={inputStyle}
            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--blue-2)"; }}
            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--line-2)"; }}
          />
        </div>
        <div>
          <label htmlFor="service" style={labelStyle}>Service you need</label>
          <select id="service" name="service" value={form.service} onChange={handleChange}
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
      </div>
      <div>
        <label htmlFor="message" style={labelStyle}>Tell us about your business</label>
        <textarea id="message" name="message" rows={4}
          placeholder="What does your business do? What's the biggest challenge you're facing online?"
          value={form.message} onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
          onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--blue-2)"; }}
          onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--line-2)"; }}
        />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary" style={{ alignSelf: "flex-start", gap: 12 }}>
        {loading ? "Sending…" : <>Send enquiry <Arrow /></>}
      </button>
      {apiError && (
        <p style={{ fontSize: 13, color: "#ff6b6b", margin: 0 }}>{apiError}</p>
      )}
      <p style={{ fontSize: 12, color: "var(--ink-mute)", margin: 0 }}>
        We&apos;ll reply within a few hours. Your data is never shared.
      </p>
    </form>
  );
}
