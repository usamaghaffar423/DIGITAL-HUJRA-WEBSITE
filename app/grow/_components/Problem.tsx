import type { ServiceId } from "../_lib/content";
import { WA_MESSAGES } from "../_lib/content";
import { ServiceIcon } from "./Icons";
import { Reveal, SectionHead, WhatsAppButton } from "./primitives";

const SCENES: readonly { icon: ServiceId; where: string; text: string }[] = [
  {
    icon: "google",
    where: "Google Maps",
    text: "Someone new in town searches “tailor near me”. The shop down the road shows up. Yours doesn't — it was never added to the map.",
  },
  {
    icon: "facebook",
    where: "Facebook",
    text: "Your page's last post was two Eids ago. A customer checks it, sees nothing new, and assumes you've closed.",
  },
  {
    icon: "whatsapp",
    where: "WhatsApp",
    text: "A message comes in at 11 pm asking for a price. Nobody replies until the next afternoon. By then they've bought somewhere else.",
  },
  {
    icon: "tiktok",
    where: "TikTok & Instagram",
    text: "Your nephew posts one video and it gets views. Then nothing — because nobody has time to post every week while running a shop.",
  },
];

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="g-section" style={{ background: "var(--night-2)" }}>
      <div className="g-wrap">
        <SectionHead
          id="problem-title"
          index={1}
          total={7}
          eyebrow="Sound familiar?"
          title={
            <>
              Your customers are on TikTok, Facebook, Instagram and WhatsApp right now — searching for exactly what you sell.{" "}
              <span className="text-(--amber)">And they can&apos;t find you.</span>
            </>
          }
        />

        <ul className="m-0 mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 lg:mt-16 lg:gap-5">
          {SCENES.map((s, i) => (
            <Reveal as="li" key={s.where} delay={i * 0.06} className="g-card flex gap-4 p-6 sm:p-7">
              <span className="g-icon-tile g-accent-amber">
                <ServiceIcon id={s.icon} size={22} />
              </span>
              <div className="flex flex-col gap-2">
                <span className="g-eyebrow">{s.where}</span>
                <p className="m-0 text-[16px] leading-relaxed text-(--ink-soft)">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-(--line-2) p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between" >
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="g-display m-0 text-[clamp(22px,3vw,30px)] !leading-tight">
              None of this means your business is bad. It means nobody is running your shopfront online.{" "}
              <span className="text-(--blue-2)">That&apos;s our job.</span>
            </p>
            <p className="m-0 text-[15px] italic text-(--ink-mute)" lang="ur-Latn">
              Dukaan achhi hai — bas online nazar nahi aati.
            </p>
          </div>
          <WhatsAppButton message={WA_MESSAGES.problem}>Talk to us on WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
