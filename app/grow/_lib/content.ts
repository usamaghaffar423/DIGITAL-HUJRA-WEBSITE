/**
 * Content + configuration for the /grow marketing landing page.
 *
 * Everything the page says lives here so copy, numbers and placeholders can be
 * changed without touching components. Anything marked {{PLACEHOLDER: ...}}
 * must be confirmed or replaced by Osama before launch — see ../README.md.
 */

// ── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  // {{PLACEHOLDER: confirm 923715868088 is the number that should receive marketing leads}}
  whatsapp: "923715868088",
  phoneDisplay: "+92 371 5868088",
  phoneHref: "tel:+923715868088",
  email: "info@digitalhujra.com",
  address: "Popular Shopping Mall Plaza, Near Gul Rang Khadi Hall, Amandara Batkhela, KP",
  mainSite: "https://www.digitalhujra.com",
} as const;

// ── Real proof points (from the live site — do not inflate) ────────────────────

export type Stat = { value: number; suffix: string; label: string };

export const HERO_STATS: readonly Stat[] = [
  { value: 120, suffix: "+", label: "Businesses served" },
  { value: 8, suffix: "", label: "KP districts active" },
  { value: 18, suffix: "", label: "Districts we cover" },
];

export const DISTRICTS: readonly string[] = [
  "Peshawar", "Mardan", "Swat", "Malakand", "Dir Upper", "Dir Lower",
  "Batkhela", "Buner", "Shangla", "Kohistan", "Mansehra", "Abbottabad",
  "Haripur", "Nowshera", "Charsadda", "Kohat", "Karak", "Bannu",
];

// ── Services ─────────────────────────────────────────────────────────────────

export type ServiceId =
  | "tiktok"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "google"
  | "ecommerce"
  | "saas";

export type ServiceTier = "lead" | "upsell";
export type ServiceAccent = "blue" | "amber" | "green";

export type Service = {
  id: ServiceId;
  tier: ServiceTier;
  accent: ServiceAccent;
  name: string;
  /** Short name used in chips and the WhatsApp message. */
  short: string;
  benefit: string;
  description: string;
  /** What the client gets first — shown in the calculator summary. */
  firstStep: string;
  /** Pre-filled WhatsApp text for the per-card "Ask about this" link. */
  ask: string;
};

export const SERVICES: readonly Service[] = [
  {
    id: "tiktok",
    tier: "lead",
    accent: "blue",
    name: "TikTok Marketing & Management",
    short: "TikTok",
    benefit: "Show up where KP's young buyers spend their evenings.",
    description:
      "Short videos of your products, your shop and your people — planned, filmed, edited and posted for you on a steady schedule, with replies to comments handled.",
    firstStep: "TikTok account set up + first month of video ideas",
    ask: "Assalam o Alaikum! Mujhe apne business ke liye TikTok marketing aur management ke baare mein baat karni hai.",
  },
  {
    id: "facebook",
    tier: "lead",
    accent: "blue",
    name: "Facebook Page Marketing & Management",
    short: "Facebook",
    benefit: "A page that looks open, active and trusted — every week.",
    description:
      "Regular posts, offers and updates, inbox replies, and boosted posts aimed at people in your own city — so your page stops looking abandoned.",
    firstStep: "Facebook page cleaned up + posting calendar",
    ask: "Assalam o Alaikum! Mujhe apne Facebook page ki marketing aur management ke baare mein baat karni hai.",
  },
  {
    id: "instagram",
    tier: "lead",
    accent: "amber",
    name: "Instagram Marketing & Management",
    short: "Instagram",
    benefit: "Make your products look as good online as they do in the shop.",
    description:
      "A clean, consistent profile with product posts, reels and stories — ideal for boutiques, abaya brands, perfumes, cafés and anything people buy with their eyes.",
    firstStep: "Instagram profile + highlights + first reels",
    ask: "Assalam o Alaikum! Mujhe Instagram marketing aur management ke baare mein baat karni hai.",
  },
  {
    id: "whatsapp",
    tier: "lead",
    accent: "green",
    name: "WhatsApp Business + Marketing + Chatbots",
    short: "WhatsApp Business",
    benefit: "Never lose a customer because nobody replied in time.",
    description:
      "Business profile, catalogue, broadcast lists and a customer-support chatbot that answers prices, timings and location 24/7 — then hands the chat to you.",
    firstStep: "WhatsApp Business profile + catalogue + auto-replies",
    ask: "Assalam o Alaikum! Mujhe WhatsApp Business setup, marketing aur chatbot ke baare mein baat karni hai.",
  },
  {
    id: "google",
    tier: "lead",
    accent: "amber",
    name: "Google Business Profile + Local SEO",
    short: "Google Business",
    benefit: "Be the shop that appears when someone searches “near me”.",
    description:
      "Google Maps listing created or fixed, photos, timings and services filled in, review replies, and ongoing local ranking work for your area.",
    firstStep: "Google Maps listing set up or claimed + optimised",
    ask: "Assalam o Alaikum! Mujhe Google Business profile aur local SEO ke baare mein baat karni hai.",
  },
  {
    id: "ecommerce",
    tier: "upsell",
    accent: "blue",
    name: "E-Commerce Store",
    short: "E-Commerce store",
    benefit: "Take orders while the shop is closed.",
    description:
      "An online store for local product brands — Cash on Delivery, WhatsApp checkout and local couriers.",
    firstStep: "Store plan + product list review",
    ask: "Assalam o Alaikum! Mujhe apne products ke liye e-commerce store banwana hai.",
  },
  {
    id: "saas",
    tier: "upsell",
    accent: "blue",
    name: "Custom Software / SaaS",
    short: "Custom software",
    benefit: "A system that handles the growth for you.",
    description:
      "Order, billing, inventory and booking tools built around how your business actually works.",
    firstStep: "Walk-through of your current process",
    ask: "Assalam o Alaikum! Mujhe apne business ke liye custom software ke baare mein baat karni hai.",
  },
];

export const LEAD_SERVICES = SERVICES.filter((s) => s.tier === "lead");
export const UPSELL_SERVICES = SERVICES.filter((s) => s.tier === "upsell");

export function getService(id: ServiceId): Service {
  const service = SERVICES.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}

// ── Calculator ───────────────────────────────────────────────────────────────

export type BusinessTypeId =
  | "restaurant"
  | "clothing"
  | "pharmacy"
  | "store"
  | "salon"
  | "tailor"
  | "other";

export type BusinessType = { id: BusinessTypeId; label: string; roman: string };

/** Editable list — add or reorder freely; "other" should stay last. */
export const BUSINESS_TYPES: readonly BusinessType[] = [
  { id: "restaurant", label: "Restaurant / Café", roman: "Hotel · Café" },
  { id: "clothing", label: "Clothing / Boutique", roman: "Kapray · Boutique" },
  { id: "pharmacy", label: "Pharmacy", roman: "Medical store" },
  { id: "store", label: "General Store / Mart", roman: "Karyana · Mart" },
  { id: "salon", label: "Salon / Services", roman: "Salon · Services" },
  { id: "tailor", label: "Tailor", roman: "Darzi" },
  { id: "other", label: "Something else", roman: "Kuch aur" },
];

export type BudgetId = "starter" | "growth" | "full" | "unsure";

export type Budget = { id: BudgetId; label: string; range: string; hint: string };

// {{PLACEHOLDER: confirm real monthly PKR ranges — these are illustrative only}}
export const BUDGETS: readonly Budget[] = [
  { id: "starter", label: "Starter", range: "PKR 15,000 – 25,000", hint: "1–2 platforms" },
  { id: "growth", label: "Growth", range: "PKR 25,000 – 50,000", hint: "3–4 platforms" },
  { id: "full", label: "Full management", range: "PKR 50,000+", hint: "Everything, run for you" },
  { id: "unsure", label: "Not sure yet", range: "Advise me", hint: "We'll suggest a plan" },
];

// {{PLACEHOLDER: confirm the “most local businesses start between” range}}
export const TYPICAL_START_RANGE = "PKR 15,000 – 25,000 a month";

// ── Process ──────────────────────────────────────────────────────────────────

export const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    roman: "Pehle baat, phir kaam",
    body: "We sit with you — in the hujra or on a call — and listen. Who your customers are, what they buy, where they already look. No forms, no jargon.",
  },
  {
    n: "02",
    title: "Proposal",
    roman: "Saaf aur seedha",
    body: "A clear monthly plan in plain language: which platforms, how often we post, what we handle, and the price in PKR. Agreed before anything starts.",
  },
  {
    n: "03",
    title: "Setup",
    roman: "Sab kuch tayyar",
    body: "We set up or fix your profiles, plan the first month of content, shoot what's needed, and switch on WhatsApp auto-replies.",
  },
  {
    n: "04",
    title: "Go Live + Ongoing Management",
    roman: "Hum saath rahenge",
    body: "We post, reply and adjust every month, and send you a simple update on WhatsApp. You stay the owner of every account and password.",
  },
] as const;

// ── Proof ────────────────────────────────────────────────────────────────────

export type CaseStudy = {
  client: string;
  city: string;
  work: string;
  summary: string;
  image: string;
};

/** Real past projects from digitalhujra.com/work — not marketing-retainer results. */
export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    client: "Classyfitters",
    city: "Batkhela",
    work: "E-Commerce · Product Shoot · WhatsApp · Google",
    summary: "Full digital launch — online store, product shoot, WhatsApp Business and Google Business setup.",
    image: "/work/classyfitters/Main%20Preview%20Image.webp",
  },
  {
    client: "Al Ansar Abaya",
    city: "Chakdara",
    work: "E-Commerce · Photography · WhatsApp · Google",
    summary: "Complete digital presence — store, shoot, WhatsApp verified and Google Business.",
    image: "/work/al-ansar-abaya/Preview%20Image%20Al%20Ansar%20Abaya.webp",
  },
  {
    client: "Raazina Essence",
    city: "Swat",
    work: "Product Photography",
    summary: "50+ perfume product shots across two studio sessions.",
    image: "/work/raazina-essence/Raazina%20Preview%20Image.webp",
  },
  {
    client: "Bayan Cafe",
    city: "Batkhela",
    work: "Design & Print",
    summary: "Logo, colour system, brand guidelines and print collateral.",
    image: "/work/bayan-cafe/Preview%20Image.webp",
  },
  {
    client: "Top Man Tailor",
    city: "Batkhela",
    work: "Custom Software",
    summary: "Order Studio — orders, customers, karigars, measurements and payments in one system.",
    image: "/work/order-studio-tailor/retail-dashboard.webp",
  },
];

export type Testimonial = { client: string; city: string; service: string; quote: string };

/** Verbatim client reviews already published on digitalhujra.com. */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    client: "Edenrobe Batkhela",
    city: "Batkhela, KP",
    service: "Google Business · Social Media",
    quote:
      "Edenrobe Batkhela ke liye Digital Hujra ne Google Business profile set ki aur social media handle kiya. Ab log Google aur Maps par humein asani se dhoond lete hain, aur shop par walk-in customers pehle se zyada aate hain. Local team hai, response bhi foran dete hain.",
  },
  {
    client: "Classyfitters",
    city: "Batkhela, KP",
    service: "E-Commerce · WhatsApp · Google",
    quote:
      "Digital Hujra ne hamari poori online shop bana ke di — website, product shoot, WhatsApp Business aur Google Business, sab kuch ek hi jagah se. Ab customers ghar baithe order karte hain. Kaam waqt par hua aur team ne humein sab kuch khud chalana bhi sikha diya.",
  },
];

export const FOUNDER = {
  name: "Osama Ghaffar",
  role: "Founder, Digital Hujra",
  image: "/team/Osama.webp",
  bio: "Software engineer, also employed at Precision Data Strategies LLC, California. Founded Digital Hujra in 2026 to bring the same standard of work home to Batkhela.",
  credentials: [
    { value: "Top Rated", label: "On Upwork" },
    { value: "100%", label: "Job Success Score" },
    { value: "60+", label: "Projects delivered" },
  ],
} as const;

// ── FAQ ──────────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

export const FAQS: readonly Faq[] = [
  {
    q: "Do I need a website first?",
    a: "No. You can start without one. Your customers are already on TikTok, Facebook, Instagram, WhatsApp and Google Maps — we start there. If a store makes sense later, we can build that too, but it is never a requirement.",
  },
  {
    q: "What if I don't get results?",
    a: "We will never promise you a fixed number of followers or sales — anyone who does is guessing. What we do promise: a clear plan, steady work every month, and a plain update on WhatsApp so you can see what was done. If something isn't working, we change it. And you settle the balance only once you're happy with the work.",
  },
  {
    q: "How much does this cost per month?",
    a: `It depends on how many platforms you want us to run and how often we post. Most local businesses start between ${TYPICAL_START_RANGE}. You get an exact price in PKR after a free 30-minute session — before anything starts. Paid boosts (ad spend) are separate and charged at cost.`,
  },
  {
    q: "Do you work with my type of business?",
    a: "If you serve customers in KP, almost certainly yes — shops, restaurants and cafés, boutiques and abaya brands, tailors, pharmacies, salons, marts and service businesses. We've already worked with 120+ local businesses.",
  },
  {
    q: "What if I don't speak English?",
    a: "Koi masla nahi. We work in Pashto, Urdu or English — whatever you're comfortable with. Every update, every call and every WhatsApp message can be in your language.",
  },
  {
    q: "Who owns my pages and accounts?",
    a: "You do. Every account, page and password stays in your name. We are given access to manage it — if you ever stop working with us, everything stays with you.",
  },
];

// ── WhatsApp CTA messages ────────────────────────────────────────────────────

export const WA_MESSAGES = {
  nav: "Assalam o Alaikum! Main ne aapka marketing page dekha. Apne business ki online marketing ke baare mein baat karni hai.",
  hero: "Assalam o Alaikum! Mujhe apne business ke liye free growth plan chahiye — TikTok, Facebook, Instagram, WhatsApp aur Google ke baare mein.",
  problem: "Assalam o Alaikum! Mera business online nazar nahi aata. Is ke baare mein baat karni hai.",
  pilot: "Assalam o Alaikum! Mujhe aapke marketing pilot clients mein shamil hona hai. Details bata dein.",
  pricing: "Assalam o Alaikum! Marketing ki monthly fee aur payment ke tareeqe ke baare mein poochna tha.",
  faq: "Assalam o Alaikum! Marketing services ke baare mein mera ek sawal hai:",
  final: "Assalam o Alaikum! Mujhe free 30-minute hujra session book karna hai — apne business ki marketing ke liye.",
} as const;
