"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  BUDGETS,
  BUSINESS_TYPES,
  DISTRICTS,
  LEAD_SERVICES,
  TYPICAL_START_RANGE,
  UPSELL_SERVICES,
  type BudgetId,
  type BusinessTypeId,
  type Service,
} from "../_lib/content";
import { buildPlanMessage, businessTypeLabel, normalisePkMobile, waLink, type PlanDetails } from "../_lib/whatsapp";
import { ArrowIcon, CheckIcon, ServiceIcon, WhatsAppIcon } from "./Icons";
import { usePlan } from "./PlanProvider";
import { PlanSummary, planName } from "./PlanSummary";
import { Placeholder, SectionHead } from "./primitives";

const STEPS = ["Business", "Services", "Budget", "Your details"] as const;
const LAST = STEPS.length - 1;

type Field = "businessType" | "otherBusiness" | "services" | "name" | "businessName" | "city" | "phone";
type Errors = Partial<Record<Field, string>>;

type Details = { name: string; businessName: string; city: string; phone: string };

export function Calculator() {
  const { services, toggleService } = usePlan();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [businessType, setBusinessType] = useState<BusinessTypeId | null>(null);
  const [otherBusiness, setOtherBusiness] = useState("");
  const [budget, setBudget] = useState<BudgetId | null>(null);
  const [details, setDetails] = useState<Details>({ name: "", businessName: "", city: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  // Once the visitor has moved between steps, each new step's heading takes focus as it mounts.
  const [hasNavigated, setHasNavigated] = useState(false);
  const uid = useId();

  function clearError(field: Field) {
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function updateDetail(field: keyof Details, value: string) {
    setDetails((d) => ({ ...d, [field]: value }));
    clearError(field);
    setSentUrl(null);
  }

  const businessLabel = businessType ? businessTypeLabel(businessType, otherBusiness) : null;

  function validate(target: number): Errors {
    const e: Errors = {};
    if (target === 0) {
      if (!businessType) e.businessType = "Please choose the type of business you run.";
      else if (businessType === "other" && !otherBusiness.trim()) e.otherBusiness = "Tell us what you sell or do.";
    }
    if (target === 1 && services.length === 0) e.services = "Pick at least one service — you can change it later.";
    if (target === 3) {
      if (!details.name.trim()) e.name = "Please enter your name.";
      if (!details.businessName.trim()) e.businessName = "Please enter your business name.";
      if (!details.city.trim()) e.city = "Please enter your city or area.";
      if (!details.phone.trim()) e.phone = "Please enter your mobile number.";
      else if (!normalisePkMobile(details.phone)) e.phone = "Use a Pakistani mobile number, e.g. 0312 3456789.";
    }
    return e;
  }

  function go(to: number) {
    setHasNavigated(true);
    setDirection(to > step ? 1 : -1);
    setErrors({});
    setStep(to);
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) go(Math.min(step + 1, LAST));
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (step < LAST) return next();

    // Re-check every step in case the visitor jumped back and changed something.
    for (let s = 0; s <= LAST; s++) {
      const e = validate(s);
      if (Object.keys(e).length > 0) {
        if (s !== step) go(s);
        setErrors(e);
        return;
      }
    }

    if (!businessType) return;
    const plan: PlanDetails = { businessType, otherBusiness, services, budget, ...details };
    const url = waLink(buildPlanMessage(plan));
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const preview =
    businessType && services.length > 0
      ? buildPlanMessage({
          businessType,
          otherBusiness,
          services,
          budget,
          name: details.name || "…",
          businessName: details.businessName || "…",
          city: details.city || "…",
          phone: details.phone || "…",
        })
      : null;

  return (
    <section id="plan" aria-labelledby="plan-title" className="g-section" style={{ background: "var(--night-2)" }}>
      <div aria-hidden="true" className="g-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="g-wrap relative">
        <SectionHead
          id="plan-title"
          index={3}
          total={7}
          eyebrow="Plan builder · 1 minute"
          title={
            <>
              Build your growth plan. <span className="text-(--blue-2)">Send it on WhatsApp.</span>
            </>
          }
          kicker="Four quick steps. No account, no email, nothing is saved on this site — your answers become a ready-to-send WhatsApp message to our team."
        />

        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-[1fr_380px] lg:gap-8">
          {/* ── Wizard ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby={`${uid}-progress`}
            className="g-card overflow-hidden !rounded-3xl p-5 sm:p-8"
            style={{ background: "var(--night)" }}
          >
            {/* Progress */}
            <div id={`${uid}-progress`} className="sr-only" aria-live="polite">
              Step {step + 1} of {STEPS.length}: {STEPS[step]}
            </div>
            <ol className="m-0 mb-3 grid list-none grid-cols-4 gap-2 p-0">
              {STEPS.map((label, i) => {
                const done = i < step;
                const current = i === step;
                return (
                  <li key={label} className="flex flex-col gap-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-(--line-2)">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: done ? "var(--green)" : "var(--blue)" }}
                        initial={false}
                        animate={{ width: done || current ? "100%" : "0%" }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      />
                    </div>
                    <button
                      type="button"
                      disabled={!done}
                      onClick={() => go(i)}
                      aria-current={current ? "step" : undefined}
                      className={`hidden items-center gap-1.5 border-0 bg-transparent p-0 text-left text-[12.5px] font-semibold sm:flex ${
                        current ? "text-(--ink)" : done ? "cursor-pointer text-(--green) hover:underline" : "cursor-default text-(--ink-mute)"
                      }`}
                    >
                      {done ? <CheckIcon size={13} /> : <span className="g-mono text-[11px]">{String(i + 1).padStart(2, "0")}</span>}
                      {label}
                      {done ? <span className="sr-only"> (done — go back to this step)</span> : null}
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Mobile: compact live summary */}
            <div className="mb-6 flex items-center justify-between gap-3 text-[13px] text-(--ink-mute) sm:hidden">
              <span className="g-mono tracking-[0.1em]">
                STEP {step + 1}/{STEPS.length} · {STEPS[step].toUpperCase()}
              </span>
              <span className="font-semibold text-(--amber)">
                {services.length} {services.length === 1 ? "service" : "services"}
              </span>
            </div>

            <div className="relative min-h-[360px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ opacity: 0, x: 28 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 * direction }}
                  transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {step === 0 && (
                    <StepFrame focusOnMount={hasNavigated} title="What kind of business do you run?" hint="Aap ka karobar kya hai?">
                      <fieldset className="m-0 border-0 p-0">
                        <legend className="sr-only">Business type</legend>
                        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 md:grid-cols-3">
                          {BUSINESS_TYPES.map((b) => (
                            <label key={b.id} className="g-choice items-center gap-3 px-4 py-4">
                              <input
                                type="radio"
                                name="businessType"
                                value={b.id}
                                checked={businessType === b.id}
                                onChange={() => {
                                  setBusinessType(b.id);
                                  clearError("businessType");
                                }}
                                className="sr-only"
                                aria-describedby={errors.businessType ? `${uid}-err-businessType` : undefined}
                              />
                              <span className="g-choice-check" data-shape="round">
                                <CheckIcon size={13} />
                              </span>
                              <span className="flex flex-col">
                                <span className="text-[15px] font-semibold">{b.label}</span>
                                <span className="text-[12.5px] text-(--ink-mute)" lang="ur-Latn">{b.roman}</span>
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                      <FieldError id={`${uid}-err-businessType`} message={errors.businessType} />

                      {businessType === "other" && (
                        <TextField
                          id={`${uid}-other`}
                          label="What do you sell or do?"
                          value={otherBusiness}
                          onChange={(v) => {
                            setOtherBusiness(v);
                            clearError("otherBusiness");
                          }}
                          placeholder="e.g. Mobile shop, bakery, academy"
                          error={errors.otherBusiness}
                          autoComplete="off"
                          className="mt-5"
                        />
                      )}
                    </StepFrame>
                  )}

                  {step === 1 && (
                    <StepFrame focusOnMount={hasNavigated} title="Which services do you want?" hint="Pick as many as you like — you can change this anytime.">
                      <fieldset className="m-0 border-0 p-0" aria-describedby={errors.services ? `${uid}-err-services` : undefined}>
                        <legend className="sr-only">Services</legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {LEAD_SERVICES.map((s) => (
                            <ServiceChoice key={s.id} service={s} checked={services.includes(s.id)} onToggle={() => {
                                toggleService(s.id);
                                clearError("services");
                              }}
                            />
                          ))}
                        </div>
                        <p className="g-eyebrow m-0 mt-6 mb-3">Also available</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {UPSELL_SERVICES.map((s) => (
                            <ServiceChoice key={s.id} service={s} checked={services.includes(s.id)} onToggle={() => {
                                toggleService(s.id);
                                clearError("services");
                              }}
                              subtle
                            />
                          ))}
                        </div>
                      </fieldset>
                      <FieldError id={`${uid}-err-services`} message={errors.services} />
                    </StepFrame>
                  )}

                  {step === 2 && (
                    <StepFrame focusOnMount={hasNavigated} title="Roughly what monthly budget feels right?" hint="Optional — skip it if you're not sure.">
                      <p className="m-0 mb-5 rounded-xl border border-(--line) px-4 py-3 text-[14.5px] leading-relaxed text-(--ink-soft)" style={{ background: "var(--hero-minicard-bg)" }}>
                        Most local businesses start between <strong className="text-(--ink)">{TYPICAL_START_RANGE}</strong>. Your exact price is agreed after
                        a free chat — and paid boosts (ad spend) are separate, charged at cost.
                      </p>
                      <Placeholder note="confirm real monthly PKR budget ranges in _lib/content.ts" className="mb-4" />
                      <fieldset className="m-0 border-0 p-0">
                        <legend className="sr-only">Monthly budget</legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {BUDGETS.map((b) => (
                            <label key={b.id} className="g-choice items-center gap-3 px-4 py-4">
                              <input
                                type="radio"
                                name="budget"
                                value={b.id}
                                checked={budget === b.id}
                                onChange={() => setBudget(b.id)}
                                className="sr-only"
                              />
                              <span className="g-choice-check" data-shape="round">
                                <CheckIcon size={13} />
                              </span>
                              <span className="flex flex-col">
                                <span className="text-[15px] font-semibold">
                                  {b.label} <span className="font-normal text-(--ink-mute)">· {b.hint}</span>
                                </span>
                                <span className="g-mono text-[13px] text-(--blue-soft)">{b.id === "unsure" ? b.range : `${b.range} / month`}</span>
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </StepFrame>
                  )}

                  {step === 3 && (
                    <StepFrame focusOnMount={hasNavigated} title="Last step — where should we send your plan?" hint="Just the basics. We'll reply on WhatsApp within 48 hours.">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextField id={`${uid}-name`} label="Your name" value={details.name} onChange={(v) => updateDetail("name", v)} error={errors.name} autoComplete="name" placeholder="e.g. Ahmad Khan" />
                        <TextField id={`${uid}-biz`} label="Business name" value={details.businessName} onChange={(v) => updateDetail("businessName", v)} error={errors.businessName} autoComplete="organization" placeholder="e.g. Khan Cloth House" />
                        <TextField id={`${uid}-city`} label="City / area" value={details.city} onChange={(v) => updateDetail("city", v)} error={errors.city} autoComplete="address-level2" placeholder="e.g. Batkhela" list={`${uid}-districts`} />
                        <TextField id={`${uid}-phone`} label="Mobile number" value={details.phone} onChange={(v) => updateDetail("phone", v)} error={errors.phone} autoComplete="tel" placeholder="03XX XXXXXXX" type="tel" inputMode="tel" />
                      </div>
                      <datalist id={`${uid}-districts`}>
                        {DISTRICTS.map((d) => (
                          <option key={d} value={d} />
                        ))}
                      </datalist>

                      {preview && (
                        <details className="group mt-6 rounded-2xl border border-(--line) p-4" style={{ background: "var(--wa-mid-bg)" }}>
                          <summary className="flex cursor-pointer list-none items-center gap-2 text-[14px] font-semibold text-(--green)">
                            <WhatsAppIcon size={16} /> Preview your WhatsApp message
                            <span className="ml-auto text-(--ink-mute) transition-transform group-open:rotate-180" aria-hidden="true">▾</span>
                          </summary>
                          <pre className="m-0 mt-4 whitespace-pre-wrap break-words font-[inherit] text-[13.5px] leading-relaxed text-(--ink-soft)" lang="ur-Latn">
                            {preview}
                          </pre>
                        </details>
                      )}

                      {sentUrl && (
                        <div role="status" className="mt-6 flex flex-col gap-2 rounded-2xl border px-4 py-4 text-[14.5px]" style={{ borderColor: "color-mix(in srgb, var(--green) 40%, transparent)", background: "var(--wa-mid-bg)" }}>
                          <strong className="text-(--green)">Shukriya! WhatsApp should be opening with your plan.</strong>
                          <span className="text-(--ink-soft)">
                            Just press send.{" "}
                            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-(--ink) underline underline-offset-4">
                              Didn&apos;t open? Tap here.
                            </a>
                          </span>
                        </div>
                      )}
                    </StepFrame>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-(--line) pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={() => go(step - 1)} disabled={step === 0} className="g-btn g-btn-ghost">
                Back
              </button>
              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => {
                      setBudget(null);
                      go(3);
                    }}
                    className="g-btn border-0 bg-transparent text-(--ink-soft) hover:text-(--ink)"
                  >
                    Skip this step
                  </button>
                )}
                {step < LAST ? (
                  <button type="submit" className="g-btn g-btn-amber">
                    Next: {STEPS[step + 1]} <ArrowIcon size={18} />
                  </button>
                ) : (
                  <button type="submit" className="g-btn g-btn-wa g-btn-lg">
                    <WhatsAppIcon size={20} /> Send My Plan on WhatsApp
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* ── Live summary ── */}
          <aside aria-label={`Plan summary: ${planName(services)}`} className="lg:sticky lg:top-[calc(var(--nav-height)+24px)]">
            <PlanSummary businessLabel={businessLabel} services={services} budget={budget} />
          </aside>
        </div>
      </div>
    </section>
  );
}

// ── Pieces ───────────────────────────────────────────────────────────────────

function StepFrame({
  focusOnMount,
  title,
  hint,
  children,
}: {
  focusOnMount: boolean;
  title: string;
  hint: string;
  children: ReactNode;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Runs when the step mounts (after the previous step's exit animation), so focus lands on the visible heading.
  useEffect(() => {
    if (focusOnMount) headingRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only by design
  }, []);

  return (
    <div className="flex flex-col">
      <h3 ref={headingRef} tabIndex={-1} className="m-0 text-[clamp(21px,3vw,27px)] font-extrabold tracking-tight outline-none">
        {title}
      </h3>
      <p className="m-0 mt-2 mb-6 text-[15px] text-(--ink-mute)">{hint}</p>
      {children}
    </div>
  );
}

function ServiceChoice({ service, checked, onToggle, subtle = false }: { service: Service; checked: boolean; onToggle: () => void; subtle?: boolean }) {
  return (
    <label className={`g-choice items-start gap-3 ${subtle ? "px-4 py-3" : "px-4 py-4"}`}>
      <input type="checkbox" name="services" value={service.id} checked={checked} onChange={onToggle} className="sr-only" />
      <span className={`g-icon-tile g-accent-${service.accent} ${subtle ? "!h-9 !w-9 !rounded-[10px]" : "!h-10 !w-10 !rounded-xl"}`}>
        <ServiceIcon id={service.id} size={subtle ? 16 : 18} />
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className={`${subtle ? "text-[14px]" : "text-[15px]"} font-semibold leading-snug`}>{service.name}</span>
        {!subtle && <span className="text-[13px] leading-snug text-(--ink-mute)">{service.benefit}</span>}
      </span>
      <span className="g-choice-check mt-0.5">
        <CheckIcon size={13} />
      </span>
    </label>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  type?: "text" | "tel";
  inputMode?: "text" | "tel";
  list?: string;
  className?: string;
};

function TextField({ id, label, value, onChange, error, placeholder, autoComplete, type = "text", inputMode, list, className = "" }: TextFieldProps) {
  const errId = `${id}-err`;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[14px] font-semibold text-(--ink-soft)">
        {label}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        list={list}
        maxLength={80}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className="g-input"
      />
      <FieldError id={errId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="m-0 mt-2 text-[13.5px] font-semibold text-(--amber-soft)">
      {message}
    </p>
  );
}
