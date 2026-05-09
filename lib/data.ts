export const SERVICES = [
  {
    n: "01",
    name: "POS Systems",
    blurb: "Modern point-of-sale for shops, restaurants & pharmacies — receipts, stock, daily reports.",
    bullets: ["Cash + card-ready", "Daily Z-reports", "Stock & expiry alerts", "Urdu/Pashto receipts"],
    icon: "pos" as const,
    accent: "blue" as const,
  },
  {
    n: "02",
    name: "E-commerce Stores",
    blurb: "Beautiful online stores that take orders day and night — Shopify, WooCommerce or custom.",
    bullets: ["Cash on delivery", "WhatsApp checkout", "Local courier integrations", "Bilingual UI"],
    icon: "cart" as const,
    accent: "amber" as const,
  },
  {
    n: "03",
    name: "Branding & Identity",
    blurb: "Logos, colors and brand books that make a small KP business look like a household name.",
    bullets: ["Logo + wordmark", "Color & type system", "Stationery & signage", "Brand guidelines"],
    icon: "brand" as const,
    accent: "blue" as const,
  },
  {
    n: "04",
    name: "Social Media Marketing",
    blurb: "Monthly content, ads and community work — Facebook, Instagram, TikTok, the works.",
    bullets: ["Content calendars", "Reels & stories", "Targeted Meta ads", "Monthly reports"],
    icon: "social" as const,
    accent: "amber" as const,
  },
  {
    n: "05",
    name: "Product Photography",
    blurb: "Studio + on-location product shoots that make catalogs and feeds genuinely sell.",
    bullets: ["Studio shoots", "Lifestyle scenes", "Edited cutouts", "Catalog-ready"],
    icon: "camera" as const,
    accent: "blue" as const,
  },
  {
    n: "06",
    name: "Video Editing",
    blurb: "Reels, ads, brand films and explainers — color, sound, motion, all in-house.",
    bullets: ["Short-form reels", "Ad cuts", "Brand films", "Captions & motion"],
    icon: "video" as const,
    accent: "amber" as const,
  },
  {
    n: "07",
    name: "Graphic Design",
    blurb: "Posters, menus, flyers, packaging — print-ready files for the local press, on time.",
    bullets: ["Menus & flyers", "Packaging", "Banners & shop signs", "Print-ready files"],
    icon: "grid" as const,
    accent: "blue" as const,
  },
];

export const PROCESS = [
  { n: "01", t: "Hujra session", d: "We sit, we listen, we drink chai. Tell us about your business — no pitch, no jargon." },
  { n: "02", t: "Plan & estimate", d: "A clear, plain-language plan with a fixed price and timeline. No surprises later." },
  { n: "03", t: "Design & build", d: "Our team designs, builds and shoots — with check-ins on WhatsApp every step." },
  { n: "04", t: "Launch & support", d: "We launch, train your staff, and stay around for the first 90 days. We don't disappear." },
];

export const STATS = [
  { v: "120+", l: "KP businesses online" },
  { v: "08", l: "Districts served" },
  { v: "06", l: "Years in Batkhela" },
  { v: "98%", l: "Client retention" },
];

export const WORK = [
  { id: 1, name: "Malakand Mart", cat: "E-commerce + POS", city: "Batkhela", swatch: "#1B3656" },
  { id: 2, name: "Khan Pharmacy", cat: "POS + Branding", city: "Mardan", swatch: "#2C4A2E" },
  { id: 3, name: "Swat Honey Co.", cat: "Brand + Shoot", city: "Mingora", swatch: "#5C3920" },
  { id: 4, name: "Zaiqa Restaurant", cat: "Social + Menus", city: "Peshawar", swatch: "#5A1F2A" },
  { id: 5, name: "Karak Threads", cat: "Store + Social", city: "Kohat", swatch: "#3B3B6A" },
  { id: 6, name: "Hujra Builders", cat: "Brand + Web", city: "Charsadda", swatch: "#1F4747" },
];

export const DISTRICTS = [
  "Malakand", "Swat", "Buner", "Dir Lower", "Dir Upper", "Mardan",
  "Charsadda", "Peshawar", "Nowshera", "Swabi", "Kohat", "Karak",
  "Bannu", "Abbottabad", "Mansehra", "Haripur", "Chitral", "Bajaur",
];

export const TESTIMONIALS = [
  {
    q: "Pehle hum pen aur register pe sab kuch likhte the. Ab ek tap pe sab pata chal jata hai. Sales bhi 40% barhi hain.",
    name: "Sajjad Khan",
    role: "Owner, Malakand Mart",
    city: "Batkhela",
  },
  {
    q: "They built our store, shot the products, and ran our Instagram for the first three months. Honest team — they explain everything in Pashto if you want.",
    name: "Dr. Imran Ali",
    role: "Founder, Khan Pharmacy",
    city: "Mardan",
  },
  {
    q: "Sirf ek logo nahi banaya — pura brand book diya. Ab humari packaging Karachi tak ja rahi hai.",
    name: "Bushra Yousafzai",
    role: "Founder, Swat Honey Co.",
    city: "Mingora",
  },
];

export const MARQUEE_WORDS = [
  "POS", "Stores", "Brand", "Social", "Shoot", "Edit", "Design",
  "Local-first", "Honest", "Accessible", "Growth-minded",
];

export const TEAM = [
  {
    name: "Usman Khan",
    role: "Founder & Creative Director",
    bio: "Started Digital Hujra in 2020 after seeing Batkhela's best businesses go unnoticed online. Has personally overseen 120+ digital launches across KP.",
    since: "Est. 2020",
    initials: "UK",
    color: "#2A9DF4",
  },
  {
    name: "Hira Gul",
    role: "Lead Designer & Brand Strategist",
    bio: "Turns local businesses into recognisable brands. Specialises in bilingual identity systems that look as good on a shop sign as on a smartphone screen.",
    since: "Since 2021",
    initials: "HG",
    color: "#F5A33A",
  },
  {
    name: "Zubair Ahmed",
    role: "Web Developer & POS Specialist",
    bio: "Builds fast, reliable POS installations and e-commerce stores. Has deployed 40+ POS systems in KP pharmacies, marts, and restaurants.",
    since: "Since 2021",
    initials: "ZA",
    color: "#5BD68A",
  },
  {
    name: "Sara Bibi",
    role: "Social Media Manager",
    bio: "Runs content calendars, Meta ad campaigns, and community management for a dozen KP brands at once — always on deadline, always on-brand.",
    since: "Since 2022",
    initials: "SB",
    color: "#4FB3FF",
  },
  {
    name: "Bilal Yousafzai",
    role: "Photographer & Videographer",
    bio: "Studio and on-location shooter based in Batkhela. Edits brand films, reels, and product catalogs that actually convert.",
    since: "Since 2022",
    initials: "BY",
    color: "#F5A33A",
  },
  {
    name: "Noman Khan",
    role: "Graphic Designer",
    bio: "Designs menus, packaging, banners, and signage. Tight relationships with local print presses mean print-ready files arrive on time, every time.",
    since: "Since 2023",
    initials: "NK",
    color: "#2A9DF4",
  },
];

export const NAV_ITEMS = [
  { l: "Services", h: "/services" },
  { l: "Work", h: "/#work" },
  { l: "About", h: "/about" },
  { l: "Team", h: "/team" },
  { l: "Contact", h: "/contact" },
];
