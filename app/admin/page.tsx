"use client";

import { useState, useEffect } from "react";

const VERCEL_ANALYTICS_URL = "https://vercel.com/usamaghaffar423/digital-hujra-website/analytics";
const VERCEL_DASHBOARD_URL  = "https://vercel.com/usamaghaffar423/digital-hujra-website";

const QUICK_LINKS = [
  { label: "Analytics",    sub: "Page views, visitors, referrers",  href: VERCEL_ANALYTICS_URL, color: "#4FB3FF",  icon: "📊" },
  { label: "Deployments",  sub: "Live build status & logs",          href: `${VERCEL_DASHBOARD_URL}/deployments`,   color: "#F5A33A",  icon: "🚀" },
  { label: "Logs",         sub: "Runtime & function logs",           href: `${VERCEL_DASHBOARD_URL}/logs`,          color: "#5BD68A",  icon: "🗂" },
  { label: "Settings",     sub: "Env vars, domains, team",           href: `${VERCEL_DASHBOARD_URL}/settings`,      color: "#C084FC",  icon: "⚙️" },
];

const CHANNELS = [
  { label: "Form leads",        sub: "Contact form submissions → Slack",  href: "https://slack.com",                      icon: "💬", color: "#5BD68A" },
  { label: "WhatsApp Channel",  sub: "Daily updates for KP businesses",   href: "https://whatsapp.com/channel/0029VbCk0ip4yltSewi6Li3W", icon: "📢", color: "#25D366" },
  { label: "GitHub Repo",       sub: "Source code & CI/CD pipeline",      href: "https://github.com/usamaghaffar423/DIGITAL-HUJRA-WEBSITE", icon: "🐙", color: "#F5A33A" },
];

export default function AdminPage() {
  const [pwd,     setPwd]    = useState("");
  const [authed,  setAuthed] = useState(false);
  const [error,   setError]  = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin?pwd=${encodeURIComponent(pwd)}`);
      if (res.status === 401) { setError("Wrong password."); setLoading(false); return; }
      setAuthed(true);
      sessionStorage.setItem("dh_admin_pwd", pwd);
    } catch {
      setError("Connection error. Try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("dh_admin_pwd");
    if (saved) {
      setPwd(saved);
      fetch(`/api/admin?pwd=${encodeURIComponent(saved)}`)
        .then(r => { if (r.ok) setAuthed(true); })
        .catch(() => {});
    }
  }, []);

  /* ── login screen ── */
  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--night)", padding: "0 24px" }}>
        <form onSubmit={login} style={{ width: "100%", maxWidth: 360 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <img src="/logo.png" alt="Digital Hujra" style={{ height: 44, margin: "0 auto 20px", display: "block" }} />
            <h1 className="display" style={{ fontSize: 28, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Admin Dashboard</h1>
            <p style={{ color: "var(--ink-mute)", fontSize: 14 }}>Enter your admin password to continue</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{ padding: "14px 18px", borderRadius: 12, border: "1px solid var(--line-2)", background: "rgba(255,255,255,0.04)", color: "var(--ink)", fontSize: 15, outline: "none", fontFamily: "inherit" }}
            />
            {error && <p style={{ color: "#f87171", fontSize: 13, margin: 0 }}>{error}</p>}
            <button
              type="submit"
              disabled={loading || !pwd}
              className="btn btn-amber"
              style={{ justifyContent: "center", opacity: loading || !pwd ? 0.6 : 1 }}
            >
              {loading ? "Checking…" : "Enter dashboard"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ── dashboard ── */
  return (
    <div style={{ minHeight: "100vh", background: "var(--night)", color: "var(--ink)" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid var(--line)", padding: "16px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="/"><img src="/logo.png" alt="Digital Hujra" style={{ height: 36 }} /></a>
          <span style={{ width: 1, height: 24, background: "var(--line)" }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>ADMIN DASHBOARD</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/" className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: 12 }}>← Back to site</a>
          <button
            onClick={() => { sessionStorage.removeItem("dh_admin_pwd"); setAuthed(false); }}
            className="btn btn-ghost"
            style={{ padding: "8px 16px", fontSize: 12 }}
          >Sign out</button>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 36px" }}>

        {/* Analytics hero card */}
        <a
          href={VERCEL_ANALYTICS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            background: "linear-gradient(135deg, rgba(42,157,244,0.12) 0%, rgba(10,22,40,0.6) 100%)",
            border: "1px solid rgba(42,157,244,0.3)",
            borderRadius: 20,
            padding: "36px 40px",
            marginBottom: 28,
            position: "relative",
            overflow: "hidden",
            transition: "border-color .25s, transform .2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,157,244,0.6)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,157,244,0.3)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", fontSize: 80, opacity: 0.08, pointerEvents: "none" }}>📊</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4FB3FF", boxShadow: "0 0 0 4px rgba(79,179,255,0.2)", display: "inline-block" }} />
            <span className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "#4FB3FF" }}>LIVE · VERCEL ANALYTICS</span>
          </div>
          <h2 className="display" style={{ fontSize: 32, margin: "0 0 10px", letterSpacing: "-0.025em" }}>View Real-Time Analytics</h2>
          <p style={{ fontSize: 15, color: "var(--ink-mute)", margin: "0 0 20px" }}>
            Page views, unique visitors, top pages, referrers & geography — updated live on Vercel.
          </p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#4FB3FF", color: "#000", borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
            Open Analytics Dashboard →
          </span>
        </a>

        {/* Quick links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }} className="admin-links-grid">
          {QUICK_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: "22px 20px", textDecoration: "none", transition: "transform .2s, border-color .2s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}50`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{link.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: link.color, marginBottom: 4 }}>{link.label}</div>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", lineHeight: 1.5 }}>{link.sub}</div>
            </a>
          ))}
        </div>

        {/* Channels & integrations */}
        <div style={{ marginBottom: 16 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "var(--ink-mute)" }}>CHANNELS & INTEGRATIONS</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="admin-channels-grid">
          {CHANNELS.map(ch => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: "22px 20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 16, transition: "transform .2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: `${ch.color}18`, border: `1px solid ${ch.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              }}>{ch.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)", marginBottom: 3 }}>{ch.label}</div>
                <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{ch.sub}</div>
              </div>
            </a>
          ))}
        </div>

      </main>

      <style>{`
        @media (max-width: 900px) {
          .admin-links-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .admin-channels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
