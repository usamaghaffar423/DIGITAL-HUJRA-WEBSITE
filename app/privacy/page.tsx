import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Digital Hujra",
  description: "Privacy Policy for Digital Hujra — how we collect, use, and protect your information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you contact us through our website, WhatsApp, or phone, we may collect your name, phone number, email address, and business details. We collect only what is necessary to respond to your enquiry and deliver our services.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to respond to enquiries, prepare project proposals, deliver agreed services, and send you updates related to your project. We do not use your information for unrelated marketing without your consent.`,
  },
  {
    title: "WhatsApp & Communication",
    body: `If you contact us via WhatsApp, your messages are subject to WhatsApp's own privacy policy. We use WhatsApp purely for project communication and support. We do not add you to broadcast lists without your permission.`,
  },
  {
    title: "Information Sharing",
    body: `We do not sell, rent, or share your personal information with third parties except where required to deliver your project (e.g. domain registrars, hosting providers) or where required by Pakistani law.`,
  },
  {
    title: "Data Storage",
    body: `Project files and communications are stored securely on our devices and cloud accounts. We retain your project data for up to 2 years after project completion, after which it is deleted. You may request deletion at any time.`,
  },
  {
    title: "Cookies",
    body: `Our website does not use tracking cookies. We may use basic analytics to understand how visitors use the site, but no personally identifiable data is collected through these tools.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to request access to the personal information we hold about you, ask us to correct inaccurate data, request deletion of your data, or withdraw consent for communication at any time. Contact us at info@digitalhujra.com to exercise any of these rights.`,
  },
  {
    title: "Contact",
    body: `If you have questions about this policy, contact us at info@digitalhujra.com or via WhatsApp at +92 371 5868088. Our studio is located at Popular Shopping Mall Plaza, Amandara Batkhela, Malakand, KP.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Privacy Policy">
        <section
          style={{
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 100,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 780, margin: "0 auto", padding: "0 36px" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>PRIVACY POLICY</span>
            </div>

            <p className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em", marginBottom: 16 }}>LAST UPDATED — JUNE 2026</p>
            <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
              Privacy<br /><span style={{ color: "var(--amber)" }}>Policy.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", marginBottom: 64, maxWidth: 620 }}>
              Digital Hujra respects your privacy. This policy explains what information we collect, why we collect it, and how we use it.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {SECTIONS.map((s, i) => (
                <div key={s.title} style={{ borderTop: "1px solid var(--line)", paddingTop: 36 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h2>
                  </div>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>{s.body}</p>
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
