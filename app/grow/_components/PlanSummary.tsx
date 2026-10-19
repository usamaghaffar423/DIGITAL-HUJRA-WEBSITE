"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { BUDGETS, LEAD_SERVICES, getService, type BudgetId, type ServiceId } from "../_lib/content";
import { CheckIcon, ServiceIcon } from "./Icons";

type PlanSummaryProps = {
  businessLabel: string | null;
  services: readonly ServiceId[];
  budget: BudgetId | null;
};

export function planName(services: readonly ServiceId[]): string {
  const lead = services.filter((id) => getService(id).tier === "lead").length;
  const extras = services.length - lead;
  const base =
    lead === 0 ? (extras > 0 ? "Build plan" : "Pick services to begin") : lead <= 2 ? "Starter presence" : lead <= 4 ? "Growth plan" : "Full local growth";
  return lead > 0 && extras > 0 ? `${base} + build` : base;
}

const RING = 2 * Math.PI * 34;

/** Live "smart calculator" panel — updates as the visitor makes choices. */
export function PlanSummary({ businessLabel, services, budget }: PlanSummaryProps) {
  const leadSelected = LEAD_SERVICES.filter((s) => services.includes(s.id)).length;
  const budgetInfo = BUDGETS.find((b) => b.id === budget);

  return (
    <div
      className="flex flex-col gap-6 rounded-3xl border border-(--line-2) p-6 sm:p-7"
      style={{ background: "var(--hero-panel-bg)", boxShadow: "0 30px 80px -40px var(--blue-glow)" }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="g-eyebrow">Your growth plan</span>
        <span className="g-pill g-pill-green !py-1 !text-[11px]">Live</span>
      </div>

      {/* Reach ring */}
      <div className="flex items-center gap-5">
        <div className="relative h-[84px] w-[84px] shrink-0">
          <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="40" cy="40" r="34" fill="none" stroke="var(--line-2)" strokeWidth="7" />
            <motion.circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={RING}
              initial={false}
              animate={{ strokeDashoffset: RING * (1 - leadSelected / LEAD_SERVICES.length) }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={leadSelected}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="g-display text-[26px]"
              >
                {leadSelected}
                <span className="text-[14px] text-(--ink-mute)">/{LEAD_SERVICES.length}</span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="m-0 text-[14.5px] leading-snug text-(--ink-soft)">
            Places local customers will be able to find you
          </p>
          <div className="flex gap-1.5" aria-hidden="true">
            {LEAD_SERVICES.map((s) => {
              const on = services.includes(s.id);
              return (
                <span
                  key={s.id}
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-300 ${
                    on ? "border-(--blue) bg-(--blue) text-(--night-2)" : "border-(--line-2) text-(--ink-mute)"
                  }`}
                >
                  <ServiceIcon id={s.id} size={14} />
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <dl className="m-0 flex flex-col gap-4 border-t border-(--line) pt-5 text-[14.5px]">
        <Row label="Plan">
          <Swap value={planName(services)} className="font-bold text-(--amber)" />
        </Row>
        <Row label="Business">
          <Swap value={businessLabel ?? "—"} />
        </Row>
        <Row label="Budget">
          <Swap value={budgetInfo ? (budgetInfo.id === "unsure" ? "Advise me" : budgetInfo.range) : "—"} />
        </Row>
      </dl>

      <div className="flex flex-col gap-3 border-t border-(--line) pt-5">
        <span className="g-eyebrow">What we&apos;d start with</span>
        {services.length === 0 ? (
          <p className="m-0 text-[14px] text-(--ink-mute)">Choose services and your first steps appear here.</p>
        ) : (
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            <AnimatePresence initial={false}>
              {services.map((id) => {
                const s = getService(id);
                return (
                  <motion.li
                    key={id}
                    layout
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-start gap-2.5 text-[14px] leading-snug"
                  >
                    <span className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-(--green) text-(--night-2)">
                      <CheckIcon size={11} />
                    </span>
                    <span>
                      <strong className="font-semibold">{s.short}:</strong>{" "}
                      <span className="text-(--ink-soft)">{s.firstStep}</span>
                    </span>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        )}
      </div>

      <p className="g-mono m-0 border-t border-(--line) pt-5 text-[10.5px] tracking-[0.12em] text-(--ink-mute)">
        FREE 30-MIN SESSION · BALANCE PAID WHEN YOU&apos;RE HAPPY
      </p>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-(--ink-mute)">{label}</dt>
      <dd className="m-0 text-right">{children}</dd>
    </div>
  );
}

function Swap({ value, className = "" }: { value: string; className?: string }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2 }}
        className={`inline-block ${className}`}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}
