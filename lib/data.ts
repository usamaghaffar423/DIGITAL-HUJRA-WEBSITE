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
  { value: 6,   suffix: '+', label: 'Services Offered',  sub: 'Photography to POS — all under one roof',   v: '6+',   l: 'Services Offered' },
  { value: 5,   suffix: '+', label: 'Cities in KP',      sub: 'Batkhela · Swat · Dir · Mardan · Peshawar', v: '5+',   l: 'Cities in KP'     },
  { value: 48,  suffix: 'h', label: 'Avg. Delivery',     sub: 'Fast turnaround on every project',          v: '48h',  l: 'Avg. Delivery'    },
  { value: 100, suffix: '%', label: 'Satisfaction',       sub: "We don't stop until you're happy",          v: '100%', l: 'Satisfaction'     },
]

export const TEAM = [
  { initials: 'DH', name: 'Founder',    role: 'Founder & CEO',          bio: 'Started Digital Hujra to bring professional digital services to local KP businesses.',    since: '2026', color: '#F5A33A' },
  { initials: 'DH', name: 'CO-FOUNDER', role: 'CO-FOUNDER',             bio: 'Expert in software development, and leading the whole department.',                       since: '2026', color: '#2A9DF4' },
  { initials: 'HB', name: 'Haseeb',     role: 'Lead Designer',          bio: 'Expert in brand identity, logo design, and visual communication for KP businesses.',      since: '2026', color: '#5BD68A' },
  { initials: 'MZ', name: 'Muzamil',    role: 'Brand & Visual Designer', bio: 'Specializes in social media design, print materials, and digital brand assets.',         since: '2026', color: '#4FB3FF' },
]

export const PORTFOLIO = [
  {
    id: 'classyfitters',
    client: 'Classyfitters',
    service: 'Branding & Social Media',
    location: 'Batkhela, KP',
    tagline: 'Premium fashion brand identity for Classyfitters',
    coverEmoji: '👗',
    coverImage: '',
    featured: true,
  },
  {
    id: 'edenrobe-batkhela',
    client: 'Edenrobe Batkhela Amandara',
    service: 'Social Media & Photography',
    location: 'Amandara, Batkhela, KP',
    tagline: 'Digital presence for Edenrobe Batkhela franchise',
    coverEmoji: '🏪',
    coverImage: '',
    featured: false,
  },
  {
    id: 'raazina-essence',
    client: 'Raazina Essence',
    service: 'Product Photography',
    location: 'Shamozo, Swat, KP',
    tagline: '50+ premium mockup images — Raazina Ice perfume',
    coverEmoji: '🌙',
    coverImage: '',
    featured: false,
  },
  {
    id: 'al-ansar-abaya',
    client: 'Al Ansar Abaya',
    service: 'Branding & Photography',
    location: 'Chakdara, KP',
    tagline: 'Elegant brand identity for Al Ansar Abaya collection',
    coverEmoji: '🤍',
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
  branding:  'Assalam o Alaikum! Brand identity ke baare mein baat karni thi.',
  social:    'Assalam o Alaikum! Social media management ke baare mein enquire karna tha.',
  photo:     'Assalam o Alaikum! Product photography ke baare mein enquire karna tha.',
  video:     'Assalam o Alaikum! Video editing ke baare mein enquire karna tha.',
  graphic:   'Assalam o Alaikum! Graphic design ke liye inquiry karna chahta hoon.',
}

// ── Component-compatibility exports ──────────────────────────────────────────

export const NAV_ITEMS = [
  { l: 'Services', h: '/services' },
  { l: 'Work',     h: '/#work'    },
  { l: 'About',    h: '/about'    },
  { l: 'Team',     h: '/team'     },
  { l: 'Contact',  h: '/contact'  },
]

export const SERVICES = [
  { n: '01', name: 'POS Systems',          icon: 'pos',    accent: 'amber', blurb: 'Modern point-of-sale for pharmacies, marts, and restaurants — installed, configured, and staff-trained.',         bullets: ['Inventory tracking', 'Daily Z-reports', 'Urdu/Pashto receipts', 'Works offline', 'Staff training', 'Remote support'] },
  { n: '02', name: 'E-commerce Stores',    icon: 'cart',   accent: 'blue',  blurb: 'Online shops with Cash on Delivery, WhatsApp checkout, and local courier integrations — ready in weeks.',            bullets: ['Cash on Delivery', 'WhatsApp checkout', 'Courier integration', 'Bilingual UI'] },
  { n: '03', name: 'Branding & Identity',  icon: 'brand',  accent: 'amber', blurb: 'Logo, color system, typography, and brand book — identities that hold together across print and screen.',            bullets: ['Logo + variants', 'Color & type system', 'Stationery', 'Brand guidelines'] },
  { n: '04', name: 'Social Media',         icon: 'social', accent: 'blue',  blurb: 'Monthly content calendars, Reels, Stories, and targeted Meta ads — with plain-language performance reports.',        bullets: ['Content calendar', 'Reels & Stories', 'Meta & TikTok ads', 'Monthly report'] },
  { n: '05', name: 'Product Photography',  icon: 'camera', accent: 'amber', blurb: 'Studio and on-location shoots with 48-hour delivery. Catalog-ready cutouts and lifestyle scenes.',                  bullets: ['Studio shoots', 'On-location', 'Product cutouts', '48h turnaround'] },
  { n: '06', name: 'Video Editing',        icon: 'video',  accent: 'blue',  blurb: 'Reels, brand films, ad cuts, and explainers — color graded, captioned, and delivered to your phone.',               bullets: ['Short-form Reels', 'Brand films', 'Ad cuts', 'Motion graphics'] },
  { n: '07', name: 'Graphic Design',       icon: 'grid',   accent: 'amber', blurb: 'Menus, packaging, banners, and signage — all in print-ready formats, sent to your local press.',                   bullets: ['Menus & print', 'Packaging', 'Banners & signage', 'Print-ready files'] },
]

export const WORK = [
  { id: 1, name: 'Classyfitters',            cat: 'Branding & Social Media',    city: 'Batkhela',  swatch: 'rgba(245,163,58,0.6)'  },
  { id: 2, name: 'Edenrobe Batkhela',        cat: 'Social Media & Photography', city: 'Amandara',  swatch: 'rgba(42,157,244,0.5)'  },
  { id: 3, name: 'Raazina Essence',          cat: 'Product Photography',        city: 'Swat',      swatch: 'rgba(120,60,180,0.6)'  },
  { id: 4, name: 'Al Ansar Abaya',           cat: 'Branding & Photography',     city: 'Chakdara',  swatch: 'rgba(91,214,138,0.5)'  },
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
  'POS Systems', 'E-commerce', 'Branding', 'Social Media',
  'Photography', 'Video Editing', 'Graphic Design', 'Digital Hujra',
  'Batkhela', 'KP Business', 'Local-first', 'Growth',
]
