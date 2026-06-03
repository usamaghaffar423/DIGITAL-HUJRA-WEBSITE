import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/atoms";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        aria-label="Page not found"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
          overflow: "hidden",
        }}
      >
        {/* Glows */}
        <div aria-hidden="true" style={{ position: "absolute", left: "10%", top: "20%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,163,58,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", right: "10%", bottom: "15%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)" }} />

        <div className="wrap-mobile" style={{ maxWidth: 700, padding: "0 36px", textAlign: "center", position: "relative", zIndex: 2 }}>
          {/* Big 404 */}
          <div
            className="display"
            aria-hidden="true"
            style={{
              fontSize: "clamp(120px, 22vw, 240px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.04)",
              marginBottom: -20,
              userSelect: "none",
            }}
          >
            404
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 24 }}>
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>PAGE NOT FOUND</span>
          </div>

          <h1 className="display" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
            This page took a wrong turn<br />
            <span style={{ color: "var(--amber)" }}>in the bazaar.</span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 480, margin: "0 auto 40px" }}>
            The page you&apos;re looking for doesn&apos;t exist or has moved. Head back home and we&apos;ll get you sorted.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" className="btn btn-amber">Back to home <Arrow /></a>
            <a href="/contact" className="btn btn-ghost">Contact us <Arrow /></a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
