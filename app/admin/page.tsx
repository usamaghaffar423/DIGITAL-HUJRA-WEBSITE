"use client";

import { useState, useEffect, useCallback } from "react";

/* ── types ───────────────────────────────────── */
interface Metric  { value: string; label: string; color: string; sub?: string }
interface Row     { page?: string; referrer?: string; visitors: number; percentage?: number }
interface Point   { date: string; visits: number }
interface ApiData {
  configured: boolean;
  metrics?:   { totalPageviews: number; uniqueVisitors: number; avgDuration: number; bounceRate: number };
  pages?:     Row[];
  _raw?:      unknown;
  referrers?: Row[];
  timeseries?: Point[];
}

/* ── helpers ─────────────────────────────────── */
function fmt(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}
function duration(ms: number) {
  const s = Math.round(ms / 1000);
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

/* ── sub-components ──────────────────────────── */
function StatCard({ label, value, color, sub }: { label: string; value: string; color: string; sub?: string }) {
  return (
    <div className="card" style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase" }}>{label}</span>
      <span className="display" style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, color, letterSpacing: "-0.03em" }}>{value}</span>
      {sub && <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{sub}</span>}
    </div>
  );
}

function MiniBar({ points }: { points: Point[] }) {
  const max = Math.max(...points.map(p => p.visits), 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 64 }}>
      {points.map((p, i) => (
        <div key={i} title={`${p.date}: ${p.visits} views`} style={{ flex: 1, background: `rgba(42,157,244,${0.25 + 0.65 * (p.visits / max)})`, borderRadius: 3, height: `${Math.max(6, (p.visits / max) * 100)}%`, cursor: "default", transition: "opacity .2s" }} />
      ))}
    </div>
  );
}

function Table({ rows, keyField }: { rows: Row[]; keyField: "page" | "referrer" }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-mute)", paddingBottom: 12, fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 500 }}>
            {keyField === "page" ? "PAGE" : "SOURCE"}
          </th>
          <th style={{ textAlign: "right", fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-mute)", paddingBottom: 12, fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 500 }}>VISITORS</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
            <td style={{ padding: "12px 0", fontSize: 13, color: "var(--ink-soft)", maxWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {r[keyField] || "Direct"}
            </td>
            <td style={{ padding: "12px 0", fontSize: 13, color: "var(--ink)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
              {fmt(r.visitors)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SetupGuide() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", padding: "60px 0" }}>
      <div style={{ fontSize: 48, marginBottom: 20 }}>📊</div>
      <h2 className="display" style={{ fontSize: 32, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Connect your analytics</h2>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 40, fontSize: 15 }}>
        Your site is already being tracked via Vercel Analytics. To view the data here, add these 2 environment variables in your Vercel project settings.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left", marginBottom: 36 }}>
        {[
          { key: "VERCEL_ACCESS_TOKEN",  hint: "Vercel → Account Settings → Tokens → Create Token" },
          { key: "VERCEL_PROJECT_ID",    hint: "Vercel → Project → Settings → General → Project ID" },
        ].map(v => (
          <div key={v.key} className="card" style={{ padding: "16px 20px" }}>
            <code style={{ fontSize: 13, color: "var(--amber)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>{v.key}</code>
            <p style={{ margin: "6px 0 0", fontSize: 12, color: "var(--ink-mute)" }}>{v.hint}</p>
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.12em" }}>
        OPTIONALLY: ADD VERCEL_TEAM_ID IF ON A TEAM PLAN
      </p>
    </div>
  );
}

/* ── main page ───────────────────────────────── */
export default function AdminPage() {
  const [pwd,        setPwd]    = useState("");
  const [authed,     setAuthed] = useState(false);
  const [error,      setError]  = useState("");
  const [loading,    setLoading] = useState(false);
  const [data,       setData]   = useState<ApiData | null>(null);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin?pwd=${encodeURIComponent(pwd)}`);
      if (res.status === 401) { setError("Wrong password."); setLoading(false); return; }
      const json = await res.json();
      setData(json);
      setAuthed(true);
      sessionStorage.setItem("dh_admin_pwd", pwd);
    } catch {
      setError("Connection error. Try again.");
    }
    setLoading(false);
  };

  const refresh = useCallback(async () => {
    const p = sessionStorage.getItem("dh_admin_pwd");
    if (!p) return;
    const res  = await fetch(`/api/admin?pwd=${encodeURIComponent(p)}`);
    if (res.ok) setData(await res.json());
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("dh_admin_pwd");
    if (saved) { setPwd(saved); setAuthed(false); }
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

  /* ── metrics ── */
  const m = data?.metrics;
  const metrics: Metric[] = m ? [
    { label: "Page Views",      value: fmt(m.totalPageviews), color: "var(--blue-2)",  sub: "Last 30 days" },
    { label: "Unique Visitors", value: fmt(m.uniqueVisitors), color: "var(--amber)",   sub: "Last 30 days" },
    { label: "Avg. Duration",   value: duration(m.avgDuration), color: "var(--blue-2)", sub: "Per session" },
    { label: "Bounce Rate",     value: `${Math.round(m.bounceRate)}%`, color: "var(--ink)", sub: "Left after 1 page" },
  ] : [];

  return (
    <div style={{ minHeight: "100vh", background: "var(--night)", color: "var(--ink)" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid var(--line)", padding: "16px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="/"><img src="/logo.png" alt="Digital Hujra" style={{ height: 36 }} /></a>
          <span style={{ width: 1, height: 24, background: "var(--line)" }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>ANALYTICS DASHBOARD</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.12em" }}>LAST 30 DAYS</span>
          <button onClick={refresh} className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: 12 }}>↻ Refresh</button>
          <button onClick={() => { sessionStorage.removeItem("dh_admin_pwd"); setAuthed(false); setData(null); }} className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: 12 }}>Sign out</button>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 36px" }}>
        {!data?.configured ? (
          <SetupGuide />
        ) : (
          <>
            {/* Metric cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
              {metrics.map(m => <StatCard key={m.label} label={m.label} value={m.value} color={m.color} sub={m.sub} />)}
            </div>

            {/* Chart + tables */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Timeseries */}
              {data.timeseries && data.timeseries.length > 0 && (
                <div className="card" style={{ padding: "28px 24px", gridColumn: "span 2" }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", display: "block", marginBottom: 20 }}>Daily Page Views — Last 30 Days</span>
                  <MiniBar points={data.timeseries} />
                </div>
              )}

              {/* Top pages */}
              {data.pages && data.pages.length > 0 && (
                <div className="card" style={{ padding: "28px 24px" }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", display: "block", marginBottom: 20 }}>Top Pages</span>
                  <Table rows={data.pages} keyField="page" />
                </div>
              )}

              {/* Top referrers */}
              {data.referrers && data.referrers.length > 0 && (
                <div className="card" style={{ padding: "28px 24px" }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", display: "block", marginBottom: 20 }}>Top Referrers</span>
                  <Table rows={data.referrers} keyField="referrer" />
                </div>
              )}
            </div>

            {/* Raw API debug panel */}
            {data._raw && (
              <details style={{ marginTop: 24 }}>
                <summary className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-mute)", cursor: "pointer", textTransform: "uppercase" }}>
                  Raw API response (debug)
                </summary>
                <pre style={{ marginTop: 12, padding: 20, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)", borderRadius: 12, fontSize: 11, color: "var(--ink-soft)", overflowX: "auto", lineHeight: 1.6 }}>
                  {JSON.stringify(data._raw, null, 2)}
                </pre>
              </details>
            )}
          </>
        )}
      </main>
    </div>
  );
}
