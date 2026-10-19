import { WA_MESSAGES } from "../_lib/content";
import { ArrowIcon } from "./Icons";
import { Reveal, WhatsAppButton } from "./primitives";

const TRUST = [
  { v: "30 min", l: "Free hujra session" },
  { v: "48 hrs", l: "Reply guaranteed" },
  { v: "Pashto", l: "Or Urdu / English" },
  { v: "0 PKR", l: "To get started" },
];

export function FinalCTA() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden border-t border-(--line)">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 15%, color-mix(in srgb, var(--amber) 26%, transparent), transparent 50%), radial-gradient(ellipse at 10% 85%, color-mix(in srgb, var(--blue) 24%, transparent), transparent 55%), var(--night-2)",
        }}
      />
      <div aria-hidden="true" className="g-grid-bg pointer-events-none absolute inset-0 opacity-50" />

      <div className="g-wrap relative py-24 lg:py-36">
        <Reveal className="flex max-w-4xl flex-col gap-7">
          <span className="g-mono text-[12px] tracking-[0.18em] text-(--amber)">[ BEGIN ] · A FREE CONVERSATION</span>
          <h2 id="final-title" className="g-display m-0 text-[clamp(40px,8vw,104px)] !leading-[0.95]">
            Let&apos;s get your business <span className="text-(--amber)">found,</span>
            <br />
            <span className="text-(--blue-2)">the right way.</span>
          </h2>
          <p className="m-0 max-w-2xl text-[18px] leading-relaxed text-(--ink-soft)">
            One free 30-minute hujra session. No pitch, no jargon — just an honest look at where your customers are, which platforms are
            worth your money, and what a monthly plan would cost in PKR.
          </p>
          <p className="m-0 text-[16px] italic text-(--blue-soft)">
            Chai hamari taraf se. Pakhair raghlay.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={WA_MESSAGES.final} size="lg">
              Book My Free Session
            </WhatsAppButton>
            <a href="#plan" className="g-btn g-btn-ghost g-btn-lg">
              Build my plan first <ArrowIcon size={18} />
            </a>
          </div>

          <dl className="m-0 mt-4 grid grid-cols-2 gap-6 border-t border-(--line) pt-8 sm:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.l} className="flex flex-col gap-1">
                <dt className="g-mono order-2 text-[10px] uppercase tracking-[0.15em] text-(--ink-mute)">{t.l}</dt>
                <dd className="g-display order-1 m-0 text-[28px]">{t.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
