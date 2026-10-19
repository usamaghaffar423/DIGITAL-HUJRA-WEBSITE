import Image from "next/image";
import { CONTACT, DISTRICTS, WA_MESSAGES } from "../_lib/content";
import { waLink } from "../_lib/whatsapp";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-(--line)" style={{ background: "var(--night-2)" }}>
      <div className="g-wrap grid gap-10 py-14 md:grid-cols-[1.1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="Digital Hujra" width={4003} height={943} sizes="170px" className="h-9 w-auto self-start" />
          <p className="m-0 max-w-xs text-[14px] leading-relaxed text-(--ink-mute)">
            A digital studio in Batkhela, Malakand. Old manners, modern tools.
          </p>
          <a href={CONTACT.mainSite} className="inline-flex items-center gap-2 text-[14px] font-semibold text-(--blue-soft) hover:underline">
            Visit digitalhujra.com <ArrowIcon size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-3 text-[14px]">
          <span className="g-eyebrow mb-1">Contact</span>
          <a href={waLink(WA_MESSAGES.nav)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-(--green)">
            <WhatsAppIcon size={16} /> WhatsApp {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.phoneHref} className="text-(--ink-soft) hover:text-(--ink)">
            Call {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="text-(--ink-soft) hover:text-(--ink)">
            {CONTACT.email}
          </a>
          <address className="not-italic leading-relaxed text-(--ink-mute)">{CONTACT.address}</address>
        </div>

        <div className="flex flex-col gap-3">
          <span className="g-eyebrow mb-1">Districts we cover</span>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {DISTRICTS.map((d) => (
              <li key={d} className="rounded-full border border-(--line) px-2.5 py-1 text-[12px] text-(--ink-soft)">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-(--line)">
        <div className="g-wrap flex flex-col gap-2 py-6 text-[12.5px] text-(--ink-mute) sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Digital Hujra · Batkhela, KP</span>
          <span>Shukriya for visiting · Manana</span>
        </div>
      </div>
    </footer>
  );
}
