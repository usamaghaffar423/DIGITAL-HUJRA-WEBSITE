import { WA_MESSAGES } from "../_lib/content";
import { Reveal, SectionHead, WhatsAppButton } from "./primitives";

const PAYMENT = [
  {
    n: "01",
    title: "Advance to start",
    body: "A part-payment confirms your plan. We start setting up your profiles straight away — no waiting.",
    tone: "amber",
  },
  {
    n: "02",
    title: "Small ongoing fee",
    body: "An agreed monthly fee covers posting, replies, updates and WhatsApp support. No hidden extras.",
    tone: "blue",
  },
  {
    n: "03",
    title: "Balance when happy",
    body: "Once you're satisfied with the work, you settle the balance. No pressure — just work you're happy with.",
    tone: "green",
  },
] as const;

const PROMISES = [
  {
    title: "Quoted in PKR, sized to a KP budget",
    body: "Not a Western agency rate card. We price for what a local shop can actually spend — and you can talk the plan up or down with us.",
  },
  {
    title: "Pashto, Urdu or English",
    body: "Calls, updates and WhatsApp support in whichever language you're comfortable with. Koi angrezi zaroori nahi.",
  },
  {
    title: "Your accounts stay yours",
    body: "Every page, profile and password stays in your name. If you ever stop, everything stays with you.",
  },
  {
    title: "Ad spend is separate and at cost",
    body: "If we run paid boosts, that money goes straight to the platform. We never mark it up.",
  },
];

const TONE: Record<(typeof PAYMENT)[number]["tone"], string> = {
  amber: "var(--amber)",
  blue: "var(--blue-2)",
  green: "var(--green)",
};

export function TrustSection() {
  return (
    <section aria-labelledby="trust-title" className="g-section" style={{ background: "var(--night-2)" }}>
      <div className="g-wrap">
        <SectionHead
          id="trust-title"
          index={6}
          total={7}
          eyebrow="How payment works"
          title={
            <>
              Worried about monthly fees? <span className="text-(--blue-2)">Fair enough.</span>
            </>
          }
          kicker="If you've ever paid someone upfront who then went quiet, we understand the doubt. So we work the way we always have — you only pay the balance once you're happy."
        />

        <ol className="m-0 mt-12 grid list-none gap-4 p-0 md:grid-cols-3 lg:mt-16 lg:gap-5">
          {PAYMENT.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 0.07} className="g-card flex flex-col gap-4 p-6 sm:p-8">
              <span className="g-mono text-[12px] tracking-[0.16em]" style={{ color: TONE[p.tone] }}>
                STEP {p.n}
              </span>
              <h3 className="g-display m-0 text-[26px]" style={{ color: TONE[p.tone] }}>
                {p.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-relaxed text-(--ink-soft)">{p.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="flex flex-col gap-2 rounded-2xl border border-(--line) p-5">
              <h3 className="m-0 text-[16px] font-bold">{p.title}</h3>
              <p className="m-0 text-[14.5px] leading-relaxed text-(--ink-soft)">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton message={WA_MESSAGES.pricing}>Ask about pricing on WhatsApp</WhatsAppButton>
          <span className="text-[14px] text-(--ink-mute)">We answer every pricing question honestly — no pressure to buy.</span>
        </Reveal>
      </div>
    </section>
  );
}
