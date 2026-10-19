"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { HERO_STATS, WA_MESSAGES } from "../_lib/content";
import { ArrowDownIcon, CheckIcon, PinIcon, ServiceIcon, WhatsAppIcon } from "./Icons";
import { Counter, WhatsAppButton } from "./primitives";

const CHANNELS = [
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "google", label: "Google" },
] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 90]);
  const glowY2 = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-section-bg)", paddingTop: "calc(var(--nav-height) + 40px)" }}
    >
      {/* Background: grid + two slow parallax glows */}
      <div aria-hidden="true" className="g-grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, background: "radial-gradient(circle, var(--blue-glow), transparent 65%)" }}
        className="pointer-events-none absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        style={{
          y: glowY2,
          background: "radial-gradient(circle, color-mix(in srgb, var(--amber) 22%, transparent), transparent 65%)",
        }}
        className="pointer-events-none absolute top-1/2 -left-48 h-[480px] w-[480px] rounded-full blur-2xl"
      />

      <div className="g-wrap relative grid items-center gap-14 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24">
        {/* ── Copy ── */}
        <div className="flex flex-col items-start gap-6">
          <span className="g-pill g-mono !text-[10.5px] !tracking-[0.16em] uppercase">
            <span className="g-dot" aria-hidden="true" />
            Accepting work · Batkhela · KP
          </span>

          <h1 id="hero-title" className="g-display m-0 text-[clamp(38px,7.4vw,80px)]">
            Get found online.
            <br />
            Get customers <span className="g-serif text-(--amber)">talking to you.</span>
          </h1>

          <p className="m-0 max-w-xl text-[17px] leading-relaxed text-(--ink-soft) sm:text-[18.5px]">
            We set up and run your <strong className="text-(--ink)">TikTok, Facebook, Instagram, WhatsApp Business</strong>{" "}
            and <strong className="text-(--ink)">Google profile</strong> — so people in your area find your shop, message
            you, and walk in. Need an online store or custom software when you grow? We build that too.
          </p>

          <p className="m-0 text-[15px] italic text-(--blue-soft)" lang="ur-Latn">
            “Aap dukaan chalayein — online hum sambhal lenge.”
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton message={WA_MESSAGES.hero} size="lg">
              Get My Free Growth Plan
            </WhatsAppButton>
            <a href="#plan" className="g-btn g-btn-ghost g-btn-lg">
              Build my plan in 1 minute
              <ArrowDownIcon size={18} />
            </a>
          </div>
          <p className="g-mono m-0 -mt-2 text-[11px] tracking-[0.12em] text-(--ink-mute)">
            FREE 30-MIN SESSION · 0 PKR TO START · URDU / PASHTO / ENGLISH
          </p>

          {/* Trust strip */}
          <dl
            className="mt-4 grid w-full grid-cols-3 gap-px overflow-hidden rounded-2xl border border-(--line)"
            style={{ background: "var(--line)" }}
          >
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 px-3 py-4 sm:px-5" style={{ background: "var(--hero-stats-bg)" }}>
                <dt className="g-mono order-2 text-[9.5px] uppercase tracking-[0.14em] text-(--ink-mute) sm:text-[10.5px]">
                  {s.label}
                </dt>
                <dd className="g-display order-1 m-0 text-[28px] sm:text-[36px]">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Illustration: how a customer reaches you ── */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative m-0 mx-auto w-full max-w-[420px]"
        >
          <div
            className="relative overflow-hidden rounded-[28px] border border-(--line-2) p-5 sm:p-6"
            style={{ background: "var(--hero-panel-bg)", boxShadow: "0 40px 100px -40px var(--blue-glow)" }}
          >
            <div className="flex items-center gap-3 border-b border-(--line) pb-4">
              <span className="g-icon-tile g-accent-green !h-11 !w-11 !rounded-full">
                <WhatsAppIcon size={20} />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="flex items-center gap-1.5 text-[15px] font-bold">
                  Your Shop
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-(--green) text-(--night-2)">
                    <CheckIcon size={10} />
                  </span>
                </span>
                <span className="text-[12px] text-(--ink-mute)">Business account · online</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-5 text-[14px] leading-snug" lang="ur-Latn">
              <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm border border-(--line) px-4 py-3" style={{ background: "var(--night-3)" }}>
                Assalam o Alaikum! TikTok pe aapki video dekhi — yeh suit kitne ka hai?
                <span className="mt-1 block text-right text-[10.5px] text-(--ink-mute)">9:41 pm</span>
              </div>
              <div
                className="max-w-[85%] self-end rounded-2xl rounded-tr-sm px-4 py-3"
                style={{ background: "var(--wa-mid-bg)", border: "1px solid color-mix(in srgb, var(--green) 30%, transparent)" }}
              >
                <span className="g-mono mb-1 block text-[9.5px] uppercase tracking-[0.14em] text-(--green)">Auto-reply</span>
                Wa Alaikum Assalam! Shukriya — price list aur location bhej rahe hain. Shop 10am–9pm khuli hai.
                <span className="mt-1 block text-right text-[10.5px] text-(--ink-mute)">9:41 pm ✓✓</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-(--line) pt-4">
              {CHANNELS.map((c) => (
                <span key={c.id} className="g-pill !px-2.5 !py-1.5 !text-[11.5px]">
                  <ServiceIcon id={c.id} size={14} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Floating "found on Maps" chip */}
          <div
            className="animate-[g-float_6s_ease-in-out_infinite] absolute -top-5 -left-2 flex items-center gap-2 rounded-xl border border-(--work-badge-border) px-3 py-2 text-[12px] sm:-left-8"
            style={{ background: "var(--hero-minicard-bg)" }}
          >
            <span className="text-(--amber)"><PinIcon size={16} /></span>
            <span>
              Found on Maps · <span className="text-(--ink-mute)">&ldquo;boutique near me&rdquo;</span>
            </span>
          </div>

          <figcaption className="g-mono mt-4 text-center text-[10.5px] tracking-[0.12em] text-(--ink-mute)">
            ILLUSTRATION · HOW A NEW CUSTOMER REACHES YOU
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
