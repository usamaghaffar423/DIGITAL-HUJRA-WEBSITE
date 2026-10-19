import Image from "next/image";
import { CASE_STUDIES, FOUNDER, TESTIMONIALS, WA_MESSAGES } from "../_lib/content";
import { PinIcon, QuoteIcon } from "./Icons";
import { Placeholder, Reveal, SectionHead, WhatsAppButton } from "./primitives";

export function Proof() {
  return (
    <section aria-labelledby="proof-title" className="g-section" style={{ background: "var(--night)" }}>
      <div className="g-wrap">
        <SectionHead
          id="proof-title"
          index={5}
          total={7}
          eyebrow="Proof · real KP businesses"
          title={
            <>
              Businesses we&apos;ve already helped <span className="text-(--amber)">grow online.</span>
            </>
          }
          kicker="Stores, product shoots, WhatsApp and Google setups, software — real projects for real shops across KP. Our monthly marketing service is new; the people and standards behind it are not."
        />

        {/* Case studies */}
        <ul className="m-0 mt-12 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto p-0 pb-4 lg:mt-16 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {CASE_STUDIES.map((c, i) => (
            <Reveal as="li" key={c.client} delay={i * 0.05} className="g-card g-card-hover flex w-[78%] shrink-0 snap-start flex-col overflow-hidden min-[480px]:w-[46%] lg:w-auto">
              <div className="relative aspect-[4/3] w-full" style={{ background: "var(--night-3)" }}>
                <Image src={c.image} alt={`${c.client} — project preview`} fill sizes="(min-width: 1024px) 20vw, 78vw" className="object-cover" />
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
                  style={{ background: "var(--work-badge-bg)", borderColor: "var(--work-badge-border)" }}
                >
                  <span className="text-(--amber)"><PinIcon size={12} /></span>
                  {c.city}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="m-0 text-[17px] font-bold">{c.client}</h3>
                <span className="g-mono text-[10px] uppercase tracking-[0.12em] text-(--blue-soft)">{c.work}</span>
                <p className="m-0 text-[14px] leading-relaxed text-(--ink-soft)">{c.summary}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Testimonials (verbatim from the live site) */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="article" key={t.client} delay={i * 0.06} className="g-card flex flex-col gap-5 p-6 sm:p-8">
              <span className="text-(--amber)"><QuoteIcon size={28} /></span>
              <blockquote className="m-0 text-[16.5px] leading-relaxed" lang="ur-Latn">
                {t.quote}
              </blockquote>
              <footer className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-(--line) pt-4">
                <span className="font-bold">
                  {t.client} <span className="font-normal text-(--ink-mute)">· {t.city}</span>
                </span>
                <span className="g-pill !py-1 !text-[11px]">{t.service}</span>
              </footer>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:gap-5">
          {/* Founder credibility */}
          <Reveal as="article" className="g-card flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-(--line-2)" style={{ background: "var(--night-3)" }}>
              <Image src={FOUNDER.image} alt={FOUNDER.name} fill sizes="112px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <span className="g-eyebrow">Who runs Digital Hujra</span>
                <h3 className="m-0 mt-2 text-[22px] font-bold">{FOUNDER.name}</h3>
                <p className="m-0 text-[14px] text-(--amber)">{FOUNDER.role}</p>
              </div>
              <p className="m-0 text-[15px] leading-relaxed text-(--ink-soft)">{FOUNDER.bio}</p>
              <dl className="m-0 grid grid-cols-3 gap-3">
                {FOUNDER.credentials.map((c) => (
                  <div key={c.label} className="flex flex-col gap-1 rounded-xl border border-(--line) px-3 py-3" style={{ background: "var(--hero-stats-bg)" }}>
                    <dt className="g-mono order-2 text-[9.5px] uppercase tracking-[0.12em] text-(--ink-mute)">{c.label}</dt>
                    <dd className="g-display order-1 m-0 text-[20px] sm:text-[24px]">{c.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="m-0 text-[12.5px] text-(--ink-mute)">Osama&apos;s personal freelance record on Upwork, separate from agency projects.</p>
            </div>
          </Reveal>

          {/* Social-media results — honest until pilot data exists */}
          <Reveal as="article" delay={0.06} className="flex flex-col gap-5 rounded-[18px] border border-dashed border-(--work-badge-border) p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              <span className="g-pill g-pill-amber self-start !text-[11px]">Now onboarding pilot clients</span>
              <h3 className="m-0 text-[22px] font-bold">Marketing results — coming soon, from real clients.</h3>
              <p className="m-0 text-[15px] leading-relaxed text-(--ink-soft)">
                We won&apos;t show you made-up follower counts. Our first marketing clients are starting now, and we&apos;ll publish their
                real numbers here — with their permission — once there&apos;s something worth showing.
              </p>
            </div>
            {/* {{PLACEHOLDER: replace this card with real TikTok/Facebook/Instagram/WhatsApp/Google pilot metrics once available}} */}
            <Placeholder note="real social-media pilot results (reach, messages, calls, map views) — replace this card once data exists" />
            <WhatsAppButton message={WA_MESSAGES.pilot} className="mt-auto self-start">
              Ask about a pilot slot
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
