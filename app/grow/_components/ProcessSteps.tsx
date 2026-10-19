import { PROCESS } from "../_lib/content";
import { Reveal, SectionHead } from "./primitives";

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-title" className="g-section" style={{ background: "linear-gradient(180deg, var(--night-2), var(--night))" }}>
      <div className="g-wrap">
        <SectionHead
          id="process-title"
          index={4}
          total={7}
          eyebrow="How we work · 4 steps"
          title={
            <>
              Like a real <span className="text-(--amber)">hujra.</span>
            </>
          }
          kicker="A hujra is the guest room every Pashtun home keeps open. You're invited in, you're listened to, you're looked after. That's how we run your marketing — old manners, modern tools."
        />

        <ol className="relative m-0 mt-12 grid list-none gap-4 p-0 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {/* Connector line (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[52px] right-[12%] left-[12%] hidden border-t border-dashed lg:block"
            style={{ borderColor: "color-mix(in srgb, var(--amber) 45%, transparent)" }}
          />
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 0.07} className="g-card relative flex flex-col gap-4 p-6 sm:p-7" >
              <span
                aria-hidden="true"
                className="g-mono flex h-14 w-14 items-center justify-center rounded-full text-[16px] font-semibold text-(--amber)"
                style={{
                  background: "color-mix(in srgb, var(--amber) 12%, var(--night))",
                  border: "1px solid color-mix(in srgb, var(--amber) 40%, transparent)",
                }}
              >
                {p.n}
              </span>
              <h3 className="m-0 text-[21px] font-bold tracking-tight">{p.title}</h3>
              <p className="g-serif m-0 text-[16px] text-(--blue-soft)" lang="ur-Latn">
                {p.roman}
              </p>
              <p className="m-0 text-[15px] leading-relaxed text-(--ink-soft)">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
