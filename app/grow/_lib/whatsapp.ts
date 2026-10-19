import {
  BUDGETS,
  BUSINESS_TYPES,
  CONTACT,
  getService,
  type BudgetId,
  type BusinessTypeId,
  type ServiceId,
} from "./content";

/** Build a wa.me deep link with URL-encoded, pre-filled text. */
export function waLink(text: string, number: string = CONTACT.whatsapp): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export type PlanDetails = {
  businessType: BusinessTypeId;
  otherBusiness: string;
  services: readonly ServiceId[];
  budget: BudgetId | null;
  name: string;
  businessName: string;
  city: string;
  phone: string;
};

export function businessTypeLabel(id: BusinessTypeId, other: string): string {
  if (id === "other") return other.trim() || "Other";
  return BUSINESS_TYPES.find((b) => b.id === id)?.label ?? id;
}

/** Strip formatting and accept 03XXXXXXXXX, 3XXXXXXXXX, 923XXXXXXXXX or +923XXXXXXXXX. */
export function normalisePkMobile(raw: string): string | null {
  const digits = raw.replace(/[\s\-().]/g, "").replace(/^\+/, "");
  const match = /^(?:92|0)?(3\d{9})$/.exec(digits);
  if (!match) return null;
  const local = `0${match[1]}`;
  return `${local.slice(0, 4)} ${local.slice(4)}`;
}

/**
 * The calculator's final message. Mirrors the Roman-Urdu pattern used by the
 * live site's package CTAs so it reads naturally in a WhatsApp chat.
 */
export function buildPlanMessage(plan: PlanDetails): string {
  const services = plan.services.map((id, i) => `${i + 1}. ${getService(id).name}`);
  const budget = plan.budget ? BUDGETS.find((b) => b.id === plan.budget) : undefined;
  const budgetLine = !budget
    ? "Abhi decide nahi kiya — aap mashwara dein"
    : budget.id === "unsure"
      ? "Not sure yet — aap mashwara dein"
      : `${budget.label} (${budget.range} / month)`;

  return [
    "Assalam o Alaikum, Digital Hujra!",
    "",
    `Mera naam ${plan.name.trim()} hai. Mera business "${plan.businessName.trim()}" hai (${businessTypeLabel(plan.businessType, plan.otherBusiness)}), ${plan.city.trim()} mein.`,
    "",
    "Mujhe yeh services chahiye:",
    ...services,
    "",
    `Monthly budget: ${budgetLine}`,
    `Mera number: ${normalisePkMobile(plan.phone) ?? plan.phone.trim()}`,
    "",
    "Free growth plan ke liye baat karni hai. Shukriya!",
  ].join("\n");
}
