export const SITE = {
  name: 'Digital Hujra',
  tagline: 'Bringing KP Business to the Digital World',
  phone: '+92 371 5868088',
  whatsapp: '923715868088',
  email: 'info@digitalhujra.com',
  address: 'Popular Shopping Mall Plaza, Near Gul Rang Khadi Hall, Amandara Batkhela, KP',
  addressShort: 'Amandara Batkhela, KP',
  instagram: '',
  facebook: '',
  tiktok: '',
  youtube: '',
} as const

export const STATS = [
  { value: 4,   suffix: '',  label: 'Services Offered',  sub: 'POS · E-commerce · Software · Photography',  v: '4',    l: 'Services Offered' },
  { value: 5,   suffix: '+', label: 'Cities in KP',      sub: 'Batkhela · Swat · Dir · Mardan · Peshawar', v: '5+',   l: 'Cities in KP'     },
  { value: 48,  suffix: 'h', label: 'Avg. Delivery',     sub: 'Fast turnaround on every project',          v: '48h',  l: 'Avg. Delivery'    },
  { value: 100, suffix: '%', label: 'Satisfaction',       sub: "We don't stop until you're happy",          v: '100%', l: 'Satisfaction'     },
]

export const TEAM = [
  { initials: 'OG', name: 'Osama Ghaffar', role: 'Founder & CEO',           bio: 'Software engineer with 5+ years of experience and permanent employee at Precision Data Strategies LLC, California, USA. Founded Digital Hujra to bring world-class digital services to his hometown in KP.',  since: '2026', color: '#F5A33A', image: '/team/Osama.webp',    website: 'https://osamaghaffar.pro', linkedin: 'https://www.linkedin.com/in/osama-ghaffar423' },
  { initials: 'HB', name: 'Haseeb Ullah',  role: 'Lead Designer',           bio: 'Expert in brand identity, logo design, and visual communication for KP businesses.',    since: '2026', color: '#5BD68A', image: '/team/Haseeb.webp',    linkedin: 'https://www.linkedin.com/in/haseebullahdesigns/',          website: 'https://haseebullahdesigns.com'  },
  { initials: 'MZ', name: 'Muzamil',       role: 'Social Media Expert',     bio: 'Manages social media presence, content strategy, and audience engagement for Digital Hujra clients across KP.',  since: '2026', color: '#4FB3FF', image: '/team/Muzammil.webp',  linkedin: 'https://www.linkedin.com/in/muzamil-ghaffar-8602a8313/', website: 'https://muzamilghaffar.pro/'     },
]

export const PORTFOLIO = [
  {
    id: 'classyfitters',
    client: 'Classyfitters',
    service: 'E-commerce · Product Shoot · WhatsApp Business · Google Business',
    location: 'Batkhela, KP',
    tagline: 'Full digital launch — online store, product shoot, WhatsApp & Google Business setup',
    coverEmoji: '👗',
    coverImage: '',
    featured: true,
  },
  {
    id: 'raazina-essence',
    client: 'Raazina Essence',
    service: 'Product Photography · Social Media Management',
    location: 'Shamozo, Swat, KP',
    tagline: '50+ perfume product shots across two shoots + ongoing weekly social media posts',
    coverEmoji: '🌙',
    coverImage: '',
    featured: false,
  },
  {
    id: 'al-ansar-abaya',
    client: 'Al Ansar Abaya',
    service: 'E-commerce · Photography · WhatsApp · Social Media · Google Business',
    location: 'Chakdara, KP',
    tagline: 'Complete digital presence — store, shoot, WhatsApp verified, social media & Google',
    coverEmoji: '🤍',
    coverImage: '',
    featured: false,
  },
  {
    id: 'bayan-cafe',
    client: 'Bayan Cafe',
    service: 'Branding & Identity · Logo Design · Social Media Kit · Print & Stationery',
    location: 'Batkhela, KP',
    tagline: 'Complete brand identity — logo, color system, typography, guidelines, social kit & print',
    coverEmoji: '☕',
    coverImage: '',
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    id: 'raazina',
    client: 'Raazina Essence',
    business: 'Raazina Essence',
    location: 'Shamozo, Swat, KP',
    service: 'Product Photography',
    review: 'Digital Hujra ne hamare Raazina Ice perfume ke liye jo shoot kiya — woh hamari expectations se kahin behtar tha. Professional, fast, aur bilkul woh feel jo hum chahte the.',
    rating: 5,
    // component-compatibility aliases
    q: 'Digital Hujra ne hamare Raazina Ice perfume ke liye jo shoot kiya — woh hamari expectations se kahin behtar tha. Professional, fast, aur bilkul woh feel jo hum chahte the.',
    name: 'Raazina Essence',
    role: 'Product Photography Client',
    city: 'Swat, KP',
  },
]

export const WA_MESSAGES: Record<string, string> = {
  default:   'Assalam o Alaikum! Digital Hujra se contact kar raha hoon. Mujhe services ke baare mein baat karni thi.',
  pos:       'Assalam o Alaikum! POS system ke baare mein maloomat chahiye.',
  ecommerce: 'Assalam o Alaikum! E-commerce website banwani hai.',
  software:  'Assalam o Alaikum! Custom software ke baare mein enquire karna tha.',
  photo:     'Assalam o Alaikum! Product photography ke baare mein enquire karna tha.',
}

// ── Component-compatibility exports ──────────────────────────────────────────

export const NAV_ITEMS = [
  { l: 'Services', h: '/services'  },
  { l: 'Packages', h: '/packages' },
  { l: 'About',    h: '/about'    },
  { l: 'Team',     h: '/team'     },
  { l: 'Contact',  h: '/contact'  },
]

export const SERVICES = [
  { n: '01', name: 'POS Systems',         icon: 'pos',    accent: 'amber', blurb: 'Modern point-of-sale for pharmacies, marts, and restaurants — installed, configured, and staff-trained.',        bullets: ['Inventory tracking', 'Daily Z-reports', 'Urdu/Pashto receipts', 'Works offline', 'Staff training', 'Remote support'] },
  { n: '02', name: 'E-commerce Stores',   icon: 'cart',   accent: 'blue',  blurb: 'Online shops with Cash on Delivery, WhatsApp checkout, and local courier integrations — ready in weeks.',          bullets: ['Cash on Delivery', 'WhatsApp checkout', 'Courier integration', 'Bilingual UI'] },
  { n: '03', name: 'Custom Software',     icon: 'code',   accent: 'amber', blurb: 'Inventory systems, billing apps, booking platforms, and internal tools — built to match how your business actually works.', bullets: ['Desktop & web apps', 'Inventory & billing', 'Booking & CRM tools', 'Urdu / Pashto UI', 'Training included', 'Annual support'] },
  { n: '04', name: 'Product Photography', icon: 'camera', accent: 'blue',  blurb: 'Studio and on-location shoots with 48-hour delivery. Catalog-ready cutouts and lifestyle scenes.',                bullets: ['Studio shoots', 'On-location', 'Product cutouts', '48h turnaround'] },
]

export const WORK = [
  { id: 1, slug: 'raazina-essence', name: 'Raazina Essence', cat: 'Product Photography · Social Media',             city: 'Swat',     swatch: 'rgba(120,60,180,0.6)', preview: '/work/raazina-essence/Raazina%20Preview%20Image.webp' },
  { id: 2, slug: 'classyfitters',   name: 'Classyfitters',   cat: 'E-commerce · Product Shoot · WhatsApp · Google', city: 'Batkhela', swatch: 'rgba(245,163,58,0.6)', preview: '/work/classyfitters/Main%20Preview%20Image.webp' },
  { id: 3, slug: 'al-ansar-abaya',  name: 'Al Ansar Abaya',  cat: 'E-commerce · Photography · WhatsApp · Social',  city: 'Chakdara', swatch: 'rgba(91,214,138,0.5)', preview: '/work/al-ansar-abaya/Preview%20Image%20Al%20Ansar%20Abaya.webp' },
  { id: 4, slug: 'bayan-cafe',      name: 'Bayan Cafe',      cat: 'Branding · Logo · Social Media Kit · Print',    city: 'Batkhela', swatch: 'rgba(180,120,60,0.6)', preview: '/work/bayan-cafe/Preview%20Image.webp' },
]

export const PROCESS = [
  { n: '01', t: 'Discovery',  d: 'We sit with you — in the hujra or on a call — and listen. Your business, your customers, your goals. No forms, no jargon.' },
  { n: '02', t: 'Proposal',   d: 'A fixed-price quote in plain language. Scope, timeline, and deliverables — all agreed before a single pixel is moved.' },
  { n: '03', t: 'Build',      d: 'Design, develop, shoot, or install — depending on the service. You get regular updates and can give feedback at every stage.' },
  { n: '04', t: 'Handover',   d: 'We deliver, train your team, and stay available for 90 days. You own everything — files, accounts, passwords.' },
]

export const DISTRICTS = [
  'Peshawar', 'Mardan', 'Swat', 'Malakand', 'Dir Upper', 'Dir Lower',
  'Batkhela', 'Buner', 'Shangla', 'Kohistan', 'Mansehra', 'Abbottabad',
  'Haripur', 'Nowshera', 'Charsadda', 'Kohat', 'Karak', 'Bannu',
]

export const MARQUEE_WORDS = [
  'POS Systems', 'E-commerce', 'Custom Software', 'Photography',
  'Digital Hujra', 'Batkhela', 'KP Business', 'Local-first', 'Growth',
]

export const PRICING = [
  {
    id: 'pos',
    tab: 'POS Systems',
    icon: 'pos',
    accent: 'amber',
    packages: [
      {
        name: 'Basic',
        price: 18000,
        period: 'one-time',
        popular: false,
        tagline: 'For small kiosks & single shops',
        features: [
          '1 POS terminal setup',
          'Basic inventory tracking',
          'Daily Z-reports',
          'Urdu/Pashto receipts',
          'Staff training (1 session)',
          '30-day support',
        ],
        waKey: 'pos',
      },
      {
        name: 'Business',
        price: 38000,
        period: 'one-time',
        popular: true,
        tagline: 'For growing pharmacies & marts',
        features: [
          '2 POS terminals setup',
          'Full inventory & stock alerts',
          'Daily Z-reports + monthly summary',
          'Barcode scanner integration',
          'Staff training (2 sessions)',
          '90-day remote support',
        ],
        waKey: 'pos',
      },
      {
        name: 'Multi-Branch',
        price: 72000,
        period: 'one-time',
        popular: false,
        tagline: 'For chains & multi-outlet businesses',
        features: [
          'Unlimited terminals',
          'Central inventory dashboard',
          'Branch-wise reporting',
          'Customer loyalty module',
          'Unlimited staff training',
          'Annual remote support contract',
        ],
        waKey: 'pos',
      },
    ],
  },
  {
    id: 'ecommerce',
    tab: 'E-commerce',
    icon: 'cart',
    accent: 'blue',
    packages: [
      {
        name: 'Starter Store',
        price: 28000,
        period: 'one-time',
        popular: false,
        tagline: 'Launch your first online shop',
        features: [
          'Up to 50 products',
          'Cash on Delivery integration',
          'WhatsApp checkout button',
          'Mobile-optimised design',
          'Basic SEO setup',
          '30-day support',
        ],
        waKey: 'ecommerce',
      },
      {
        name: 'Growth Store',
        price: 58000,
        period: 'one-time',
        popular: true,
        tagline: 'Scale with full e-commerce power',
        features: [
          'Unlimited products',
          'COD + courier integrations',
          'Bilingual UI (Urdu + English)',
          'Advanced product filters',
          'Email & WhatsApp order alerts',
          'Google Analytics setup',
          '90-day support',
        ],
        waKey: 'ecommerce',
      },
      {
        name: 'Custom Platform',
        price: 105000,
        period: 'one-time',
        popular: false,
        tagline: 'Enterprise-grade, built to scale',
        features: [
          'Custom UI/UX design',
          'Multi-vendor option',
          'API integrations (couriers, payment)',
          'Admin panel + analytics',
          'Speed & conversion optimisation',
          '6-month priority support',
        ],
        waKey: 'ecommerce',
      },
    ],
  },
  {
    id: 'software',
    tab: 'Custom Software',
    icon: 'code',
    accent: 'amber',
    packages: [
      {
        name: 'Basic App',
        price: 45000,
        period: 'one-time',
        popular: false,
        tagline: 'Single-purpose tool for your business',
        features: [
          'Desktop or web application',
          'Up to 5 user roles',
          'Basic reporting & exports',
          'Urdu / Pashto UI option',
          'Staff training (1 session)',
          '60-day support',
        ],
        waKey: 'software',
      },
      {
        name: 'Business System',
        price: 95000,
        period: 'one-time',
        popular: true,
        tagline: 'Inventory, billing & ops — all in one',
        features: [
          'Custom inventory & billing',
          'Multi-user with role permissions',
          'Sales, purchase & expense tracking',
          'Reports & daily summaries',
          'WhatsApp order notifications',
          '90-day remote support',
        ],
        waKey: 'software',
      },
      {
        name: 'Enterprise Platform',
        price: 180000,
        period: 'one-time',
        popular: false,
        tagline: 'Full-scale custom platform, built to grow',
        features: [
          'Multi-module custom platform',
          'Unlimited users & branches',
          'API integrations & automation',
          'Admin dashboard & analytics',
          'Cloud deployment included',
          'Annual maintenance contract',
        ],
        waKey: 'software',
      },
    ],
  },
  {
    id: 'photography',
    tab: 'Photography',
    icon: 'camera',
    accent: 'amber',
    packages: [
      {
        name: 'Essentials',
        price: 9000,
        period: 'shoot',
        popular: false,
        tagline: 'Clean product shots delivered fast',
        features: [
          'Half-day session (3 hrs)',
          '20 edited images',
          '1 product setup / backdrop',
          'White-background cutouts',
          '48h delivery',
        ],
        waKey: 'photo',
      },
      {
        name: 'Studio Pro',
        price: 20000,
        period: 'shoot',
        popular: true,
        tagline: 'Full-day, multi-setup shoot',
        features: [
          'Full-day session (7 hrs)',
          '60 edited images',
          'Multiple setups & backdrops',
          'Product cutouts + lifestyle shots',
          'Behind-the-scenes Reel',
          '48h delivery',
        ],
        waKey: 'photo',
      },
      {
        name: 'Campaign',
        price: 38000,
        period: 'shoot',
        popular: false,
        tagline: 'Campaign-grade visuals, 2 days',
        features: [
          '2-day shoot session',
          '100+ edited images',
          'On-location + studio setups',
          'Model / lifestyle photography',
          'Product cutouts + mockups',
          '2 Reels from shoot footage',
          '72h delivery',
        ],
        waKey: 'photo',
      },
    ],
  },
]
