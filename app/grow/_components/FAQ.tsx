"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { FAQS, WA_MESSAGES } from "../_lib/content";
import { PlusIcon } from "./Icons";
import { SectionHead, WhatsAppButton } from "./primitives";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section aria-labelledby="faq-title" className="g-section" style={{ background: "var(--night)" }}>
      <div className="g-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-[calc(var(--nav-height)+32px)] lg:self-start">
          <SectionHead
            id="faq-title"
            index={7}
            total={7}
            eyebrow="Questions · Sawalat"
            title={
              <>
                Straight answers, <span className="text-(--amber)">no jargon.</span>
              </>
            }
            kicker="The questions shop owners ask us most. Something else on your mind? Ask us directly."
          />
          <WhatsAppButton message={WA_MESSAGES.faq} className="self-start">
            Ask your question on WhatsApp
          </WhatsAppButton>
        </div>

        <ul className="m-0 list-none border-t border-(--line) p-0">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-panel-${i}`;
            const triggerId = `${uid}-trigger-${i}`;
            return (
              <li key={f.q} className="border-b border-(--line)">
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="g-faq-trigger"
                  >
                    <span className="text-[17px] font-bold leading-snug sm:text-[18.5px]">{f.q}</span>
                    <span className="g-faq-icon inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--line-2)">
                      <PlusIcon size={16} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="m-0 max-w-2xl px-1 pb-6 text-[16px] leading-relaxed text-(--ink-soft)">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
