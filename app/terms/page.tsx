import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Digital Hujra",
  description: "Terms of Service for Digital Hujra — the conditions under which we provide our digital services.",
};

const SECTIONS = [
  {
    title: "Agreement",
    body: `By engaging Digital Hujra for any service — whether via WhatsApp, phone, email, or our website — you agree to these terms. A project begins when both parties have agreed on scope, pricing, and timeline, either verbally or in writing.`,
  },
  {
    title: "Services & Scope",
    body: `Digital Hujra provides POS system installation, e-commerce development, custom software, and product photography services. The exact deliverables, timeline, and price are agreed upon before work begins and do not change without mutual written agreement.`,
  },
  {
    title: "Payment",
    body: `Payment terms are agreed per project. Typically a 50% advance is required before work begins, with the remainder due on delivery. All prices are in Pakistani Rupees (PKR) and are inclusive of our service fee only — third-party costs (domain, hosting, advertising spend) are billed separately and at cost.`,
  },
  {
    title: "Revisions",
    body: `Each package includes a set number of revision rounds as specified in your proposal. Additional revisions beyond the agreed scope may be charged at our standard hourly rate. Major scope changes after work has begun may require a revised quote.`,
  },
  {
    title: "Intellectual Property",
    body: `Upon receipt of full payment, all final deliverables (logos, website files, edited images, video files, design files) become your property. Digital Hujra retains the right to display completed work in our portfolio and marketing materials unless you request otherwise in writing.`,
  },
  {
    title: "Client Responsibilities",
    body: `You are responsible for providing accurate information, content, images, and approvals in a timely manner. Delays caused by late feedback or missing materials may extend the agreed timeline. You confirm that any content you provide does not infringe on third-party rights.`,
  },
  {
    title: "Warranties & Liability",
    body: `Digital Hujra delivers work to a professional standard and will correct defects within 30 days of delivery at no charge. We are not liable for indirect losses, loss of business, or issues arising from third-party platforms (Meta, Google, WhatsApp, Shopify) outside our control. Our total liability is limited to the amount paid for the specific project.`,
  },
  {
    title: "Termination",
    body: `Either party may terminate a project by giving 7 days written notice. In case of termination, you pay for all work completed up to that point. The advance payment is non-refundable if work has already commenced.`,
  },
  {
    title: "Governing Law",
    body: `These terms are governed by the laws of Pakistan. Any disputes shall first be attempted to resolve amicably. If unresolved, disputes shall be subject to the jurisdiction of courts in Malakand Division, Khyber Pakhtunkhwa.`,
  },
  {
    title: "Contact",
    body: `Questions about these terms? Reach us at info@digitalhujra.com or via WhatsApp at +92 371 5868088. Studio: Popular Shopping Mall Plaza, Amandara Batkhela, Malakand, KP.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Terms of Service">
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
              <span className="mono" style={{ fontSize: 11, color: "var(--blue-2)", letterSpacing: "0.12em" }}>TERMS OF SERVICE</span>
            </div>

            <p className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em", marginBottom: 16 }}>LAST UPDATED — JUNE 2026</p>
            <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
              Terms of<br /><span style={{ color: "var(--blue-2)" }}>Service.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", marginBottom: 64, maxWidth: 620 }}>
              These are the conditions under which Digital Hujra provides its services. Plain language, no fine print.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {SECTIONS.map((s, i) => (
                <div key={s.title} style={{ borderTop: "1px solid var(--line)", paddingTop: 36 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--blue-2)", letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")}</span>
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
