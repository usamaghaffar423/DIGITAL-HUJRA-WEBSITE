"use client";

import { AnimatePresence, motion } from "motion/react";
import { LEAD_SERVICES, UPSELL_SERVICES, type Service } from "../_lib/content";
import { waLink } from "../_lib/whatsapp";
import { ArrowIcon, CheckIcon, PlusIcon, ServiceIcon, WhatsAppIcon } from "./Icons";
import { usePlan } from "./PlanProvider";
import { Reveal, SectionHead } from "./primitives";

function AddToPlanButton({ service, compact = false }: { service: Service; compact?: boolean }) {
  const { isSelected, toggleService } = usePlan();
  const selected = isSelected(service.id);
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => toggleService(service.id)}
      className={`g-btn ${compact ? "g-btn-sm" : ""} ${selected ? "g-btn-amber" : "g-btn-ghost"}`}
    >
      {selected ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
      {selected ? "In my plan" : "Add to my plan"}
      <span className="sr-only"> — {service.name}</span>
    </button>
  );
}

function AskLink({ service }: { service: Service }) {
  return (
    <a
      href={waLink(service.ask)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 rounded-full px-2 text-[14px] font-semibold text-(--green) transition-opacity hover:opacity-80"
    >
      <WhatsAppIcon size={16} />
      Ask about this
      <span className="sr-only"> — {service.name}, opens WhatsApp</span>
    </a>
  );
}

function LeadCard({ service, index }: { service: Service; index: number }) {
  const { isSelected } = usePlan();
  return (
    <Reveal
      as="article"
      delay={index * 0.05}
      selected={isSelected(service.id)}
      className={`g-card g-card-hover flex flex-col gap-5 p-6 sm:p-7 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`g-icon-tile g-accent-${service.accent}`}>
          <ServiceIcon id={service.id} size={24} />
        </span>
        <span className="g-mono text-[11px] tracking-[0.16em] text-(--ink-mute)">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="m-0 text-[20px] font-bold tracking-tight sm:text-[21px]">{service.name}</h3>
        <p className="m-0 text-[16px] font-semibold leading-snug text-(--blue-soft)">{service.benefit}</p>
        <p className="m-0 text-[15px] leading-relaxed text-(--ink-soft)">{service.description}</p>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-(--line) pt-5">
        <AddToPlanButton service={service} compact />
        <AskLink service={service} />
      </div>
    </Reveal>
  );
}

function UpsellCard({ service }: { service: Service }) {
  const { isSelected } = usePlan();
  return (
    <div data-selected={isSelected(service.id)} className="g-card g-card-hover flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
      <span className="g-icon-tile g-accent-blue !h-11 !w-11">
        <ServiceIcon id={service.id} size={20} />
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <h4 className="m-0 text-[17px] font-bold">{service.name}</h4>
        <p className="m-0 text-[14.5px] leading-relaxed text-(--ink-soft)">
          <span className="font-semibold text-(--ink)">{service.benefit}</span> {service.description}
        </p>
      </div>
      <AddToPlanButton service={service} compact />
    </div>
  );
}

export function ServicesGrid() {
  const { services } = usePlan();

  return (
    <section id="services" aria-labelledby="services-title" className="g-section" style={{ background: "var(--night)" }}>
      <div className="g-wrap">
        <SectionHead
          id="services-title"
          index={2}
          total={7}
          eyebrow="What we do · 5 + 2"
          title={
            <>
              We get you found. We get customers <span className="text-(--amber)">talking to you.</span>
            </>
          }
          kicker="Five ways we put your business in front of local customers — run for you every month. Tap “Add to my plan” on anything you like and it'll be waiting in the plan builder below."
        />

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-6 lg:gap-5">
          {LEAD_SERVICES.map((s, i) => (
            <LeadCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Secondary offers */}
        <Reveal className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="g-eyebrow">Also available</span>
            <span aria-hidden="true" className="h-px flex-1 bg-(--line)" />
          </div>
          <p className="m-0 mb-5 max-w-2xl text-[15px] text-(--ink-soft)">
            When the messages start coming in, you may need somewhere to take orders or a system to keep up. We build that too.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {UPSELL_SERVICES.map((s) => (
              <UpsellCard key={s.id} service={s} />
            ))}
          </div>
        </Reveal>

        {/* Selection tray */}
        <div aria-live="polite" className="mt-10 min-h-[1px]">
          <AnimatePresence>
            {services.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-start gap-4 rounded-2xl border border-(--line-2) p-5 sm:flex-row sm:items-center sm:justify-between"
                style={{ background: "var(--hero-minicard-bg)" }}
              >
                <p className="m-0 text-[15px]">
                  <strong>{services.length}</strong> {services.length === 1 ? "service" : "services"} in your plan. Next: tell us a
                  little about your business.
                </p>
                <a href="#plan" className="g-btn g-btn-amber">
                  Continue to my plan <ArrowIcon size={18} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
