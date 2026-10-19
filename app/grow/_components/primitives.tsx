"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { waLink } from "../_lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

// ── Reveal ───────────────────────────────────────────────────────────────────

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
  /** Mirrors a selected state onto the element for styling (data-selected). */
  selected?: boolean;
};

/** Fades + lifts content in once when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div", selected }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      data-reveal=""
      data-selected={selected}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.4, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

// ── Counter ──────────────────────────────────────────────────────────────────

type CounterProps = { value: number; suffix?: string; className?: string };

/**
 * Server-renders the final value (no layout shift, works without JS), then
 * counts up from zero the first time it enters the viewport.
 */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || reduce || !node) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  const text = `${value}${suffix}`;
  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", display: "inline-block", minWidth: `${text.length}ch` }}
    >
      {text}
    </span>
  );
}

// ── WhatsApp CTA ─────────────────────────────────────────────────────────────

type WhatsAppButtonProps = {
  message: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

export function WhatsAppButton({ message, children, size = "md", className = "", ariaLabel }: WhatsAppButtonProps) {
  const sizeClass = size === "lg" ? "g-btn-lg" : size === "sm" ? "g-btn-sm" : "";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`g-btn g-btn-wa ${sizeClass} ${className}`}
    >
      <WhatsAppIcon size={size === "lg" ? 22 : 18} />
      {children}
    </a>
  );
}

// ── Section heading ──────────────────────────────────────────────────────────

type SectionHeadProps = {
  index: number;
  total: number;
  eyebrow: string;
  title: ReactNode;
  kicker?: ReactNode;
  id: string;
  align?: "left" | "center";
};

export function SectionHead({ index, total, eyebrow, title, kicker, id, align = "left" }: SectionHeadProps) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const centered = align === "center";
  return (
    <Reveal className={`flex flex-col gap-5 ${centered ? "items-center text-center mx-auto" : ""} max-w-3xl`}>
      <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${centered ? "justify-center" : ""}`}>
        <span className="g-mono whitespace-nowrap text-[11px] tracking-[0.18em] text-(--amber)">
          {pad(index)} / {pad(total)}
        </span>
        <span aria-hidden="true" className="h-px w-7 bg-(--amber)" />
        <span className="g-eyebrow">{eyebrow}</span>
      </div>
      <h2 id={id} className="g-display text-[clamp(30px,5.2vw,58px)] m-0">
        {title}
      </h2>
      {kicker ? <p className="m-0 text-[17px] leading-relaxed text-(--ink-soft) max-w-2xl">{kicker}</p> : null}
    </Reveal>
  );
}

// ── Dev-only placeholder flag ────────────────────────────────────────────────

/**
 * Visible only in development. Marks copy or data Osama must supply before
 * launch. Every instance is also listed in app/grow/README.md.
 */
export function Placeholder({ note, className = "" }: { note: string; className?: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span role="note" className={`g-placeholder ${className}`}>
      {`{{PLACEHOLDER: ${note}}}`}
    </span>
  );
}
