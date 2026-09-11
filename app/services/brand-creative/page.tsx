/* cspell:disable */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BookOpen, 
  Check, 
  ChevronRight, 
  Compass, 
  Eye, 
  FileText, 
  Layout, 
  MessageSquare, 
  Palette, 
  PenTool, 
  RefreshCw, 
  Sparkles, 
  Type 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brand & Creative Services | Brand Strategy & Visual Systems | Romine Labs',
  description: 'Romine Labs builds strategic brand identities, visual systems, brand positioning, tone of voice, creative direction, and digital brand applications for ambitious companies.',
  alternates: { canonical: 'https://rominelabs.com/services/brand-creative' },
  openGraph: {
    title: 'Brand & Creative Services | Romine Labs',
    description: 'Build a brand people remember. Strategic brand positioning, visual identity systems, typography, creative direction, and multi-channel brand design.',
    url: 'https://rominelabs.com/services/brand-creative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand & Creative Services | Romine Labs',
    description: 'Make your brand impossible to confuse. Brand strategy, identity design, visual systems, messaging, and digital brand applications.',
  },
}

const brandArchitecture = [
  ['01. Positioning', 'Target audience, market whitespace, and core value proposition.', Compass],
  ['02. Identity Marks', 'Primary logotype, secondary marks, icons, and favicons.', PenTool],
  ['03. Color System', 'Primary, secondary, accent, surface, and contrast ratios.', Palette],
  ['04. Typography', 'Display, headline, body, and micro-copy font hierarchies.', Type],
  ['05. Brand Voice', 'Tone, vocabulary, messaging pillars, and taglines.', MessageSquare],
  ['06. Digital UI Application', 'Web design patterns, social grids, decks, and ad creative.', Layout],
] as const

const brandServices = [
  ['Brand Strategy & Positioning', 'Uncover market whitespace, define core value propositions, map buyer personas, and craft strategic positioning frameworks.', Compass],
  ['Logo & Mark System Design', 'Develop primary logotypes, secondary marks, brand icons, responsive variants, and favicons built for multi-scale usage.', PenTool],
  ['Visual Identity Systems', 'Architect cohesive brand ecosystems: color palettes, typography pairs, graphic elements, layout grids, and motion principles.', Palette],
  ['Brand Guidelines & Governance', 'Author comprehensive digital brand books outlining logo rules, color ratios, font hierarchies, imagery styles, and usage Do’s & Don’ts.', BookOpen],
  ['Brand Voice & Messaging', 'Define tone of voice guidelines, elevator pitches, headline frameworks, taglines, and key messaging pillars across buyer stages.', MessageSquare],
  ['Creative & Art Direction', 'Establish visual moods, photography styles, composition guidelines, illustration direction, and campaign aesthetic references.', Eye],
  ['Digital Brand Applications', 'Translate brand systems natively across websites, landing pages, mobile apps, social media feeds, and digital ad templates.', Layout],
  ['Brand Collateral & Decks', 'Design high-trust sales presentations, pitch decks, proposals, case study layouts, and executive documentation.', FileText],
  ['Rebranding & Brand Refresh', 'Modernize outdated visual identities, clarify positioning after pivots, and unify fragmented brand assets during company growth.', RefreshCw],
  ['Campaign & Social Creative Systems', 'Create scalable social grid systems, ad creative templates, and marketing assets that maintain 100% brand consistency.', Sparkles],
] as const

const brandProcess = [
  ['01', 'Discovery & Audit', 'We inspect market positioning, audit existing brand touchpoints, evaluate competitors, and clarify business objectives.'],
  ['02', 'Strategy & Positioning', 'We define target audience personas, core brand pillars, competitive differentiation, value propositions, and brand voice.'],
  ['03', 'Creative Direction & Mood', 'We explore visual territories, typography approaches, color relationships, and imagery styles in a collaborative moodboard review.'],
  ['04', 'Identity Design', 'We craft primary logotypes, secondary marks, custom iconography, layout grids, and foundational design elements.'],
  ['05', 'System & Messaging', 'We expand the visual system across typography hierarchies, color proportions, UI patterns, and messaging frameworks.'],
  ['06', 'Application & Collateral', 'We apply the brand identity across critical touchpoints: website interfaces, social templates, pitch decks, and ad campaigns.'],
  ['07', 'Guidelines & Governance', 'We document all rules, usage standards, asset packages, and export formats in an accessible digital brand book.'],
  ['08', 'Launch & Evolution', 'We support internal rollout, partner onboarding, campaign execution, and continuous visual system maintenance.'],
] as const

const touchpointEcosystem = [
  ['Website & UI/UX', 'Custom Next.js web applications, landing pages, and interactive brand experiences.'],
  ['Social Media Channels', 'Cohesive feed templates, short-form video covers, carousels, and profile branding.'],
  ['Paid Advertising', 'High-converting ad creative, display banners, and campaign landing page visuals.'],
  ['Sales & Pitch Decks', 'High-trust investor presentations, commercial proposals, and one-pagers.'],
  ['Content & Editorial', 'Podcast covers, webinar slides, whitepaper layouts, and newsletter design.'],
  ['Physical & Collateral', 'Brand stationery, event displays, packaging, and physical touchpoints.'],
] as const

const brandDosAndDonts = {
  dos: [
    'Maintain generous whitespace around primary logotypes.',
    'Use approved typography hierarchy for clear readability.',
    'Apply brand primary and accent colors according to exact ratios.',
    'Use authentic, high-contrast imagery matching art direction.',
    'Keep messaging concise, confident, and customer-focused.',
  ],
  donts: [
    'Never stretch, rotate, or distort logo proportions.',
    'Do not apply unapproved drop shadows or gradient effects to marks.',
    'Never place primary logos over low-contrast or busy backgrounds.',
    'Do not introduce unapproved accent colors or random typography.',
    'Avoid generic stock photography or hype-driven marketing copy.',
  ],
}

const faqs = [
  ['What is the difference between a logo and a complete brand identity system?', 'A logo is a single graphic mark or signature. A complete brand identity system includes your positioning, messaging, primary and secondary marks, typography pairings, color palette ratios, layout grids, image direction, and usage rules that ensure brand recognition across every customer touchpoint.'],
  ['What is the difference between a brand refresh and a complete rebrand?', 'A brand refresh updates and modernizes an existing identity (refining typography, colors, and logo details) while preserving established brand equity. A complete rebrand re-evaluates fundamental positioning, target audiences, brand voice, and visual identity from the ground up.'],
  ['What deliverables do we receive at the end of a branding project?', 'Deliverables include primary and secondary logo files (SVG, EPS, PNG, PDF), vector icon/favicon packages, custom color swatch definitions, typography files/licenses, brand messaging guidelines, and a comprehensive Digital Brand Book detailing usage rules.'],
  ['Why is brand positioning important before visual design begins?', 'Visual design without strategy is just decoration. Defining your market positioning, target audience, and competitive differentiation ensures your visual identity communicates authority, attracts the right customers, and supports commercial goals.'],
  ['How do you ensure our brand remains consistent as our team grows?', 'We author detailed, user-friendly Brand Guidelines (Brand Books) that outline exact rules for logo clearance, color codes (HEX, RGB, CMYK, Pantone), font sizing, grid systems, and Do’s & Don’ts. We also build reusable templates for pitch decks and social media.'],
  ['Can you help with brand copywriting and tone of voice?', 'Yes. Brand messaging is a core part of identity. We develop value propositions, taglines, elevator pitches, core brand story copy, and tone-of-voice guidelines so your brand sounds as confident as it looks.'],
  ['How does branding connect with our website and digital marketing campaigns?', 'Branding provides the visual and verbal foundation for marketing. It ensures your Next.js website, social feeds, paid media ads, email newsletters, and sales decks share a single cohesive voice that builds trust and drives conversion.'],
  ['How long does a typical strategic branding project take?', 'Brand Strategy & Identity builds typically take 4 to 6 weeks from discovery to final guideline delivery. Complete enterprise rebrands including website UI direction and sales collateral take 6 to 10 weeks.'],
  ['Can you work with our existing logo if we only need website or campaign design?', 'Yes. If your existing logo and core identity have strong equity, we can perform a visual system expansion—updating your typography, color ratios, UI design, and campaign templates without altering your core mark.'],
  ['How do we get started with Romine Labs?', 'We begin with an initial strategy call and a brand audit of your current visual assets. From there, we present a customized creative brief, timeline, and scope of work tailored to your growth objectives.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Brand & Creative Services', url: 'https://rominelabs.com/services/brand-creative', description: metadata.description },
    { '@type': 'Service', name: 'Brand & Creative Services', serviceType: 'Brand Strategy, Visual Identity Systems & Creative Direction', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/brand-creative' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Brand & Creative', item: 'https://rominelabs.com/services/brand-creative' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }

export default function BrandCreativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="Strategic brand identity and visual systems design workspace" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <Palette className="size-3.5 text-brand" /> BRAND & CREATIVE
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-tighter sm:text-6xl lg:text-8xl">
                Build a Brand <span className="text-brand">People Remember.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We develop strategic brand positioning, visual identity systems, typography, tone of voice, and digital creative engineered to make ambitious companies distinct, credible, and consistent.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Build My Brand <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / SYSTEM VS LOGO */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="Core Positioning" title="A brand is more than a logo. It is a complete visual system." />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                A logo is just a single mark. True brand equity comes from a cohesive visual system—connecting market positioning, messaging hierarchy, custom typography, color ratios, layout grids, and art direction into a unified language that builds immediate trust across every customer touchpoint.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Inconsistent visual presentation across digital channels.',
                  'Unclear positioning that fails to differentiate from competitors.',
                  'Generic template logos with no strategic foundation.',
                  'Missing typography rules creating chaotic document design.',
                  'Off-brand social media creative damaging credibility.',
                  'No brand guidelines to keep internal teams aligned.',
                  'Inability to translate visual identity into web interfaces.',
                  'Messaging that changes tone from platform to platform.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                We build distinctive visual identities and creative frameworks that give your business a clear voice, premium aesthetics, and long-term brand equity.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. BRAND SYSTEM EQUATION (NON-IMAGE VISUAL) */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Visual Architecture" title="The components of a scalable brand system.">
              Every element in our brand architecture serves a deliberate purpose in building brand recognition.
            </Heading>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {brandArchitecture.map(([stage, desc, Icon]) => (
                <div key={stage} className="bg-background p-6">
                  <Icon className="size-5 text-brand" />
                  <p className="mt-4 font-black text-lg">{stage}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. STRATEGIC POSITIONING MATRIX (NON-IMAGE VISUAL) */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Label>Strategic Mapping</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Finding Your Market Whitespace</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Before we design a single mark, we map your competitive landscape to identify visual and verbal whitespace, positioning your brand to stand out cleanly from category noise.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-white/10 bg-white/3 p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Positioning Framework</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center font-mono text-xs">
                    <div className="border border-white/10 p-6 bg-white/5">
                      <p className="text-brand font-bold">TRADITIONAL / PREMIUM</p>
                      <p className="text-slate-400 text-[10px] mt-1">Established Category Competitors</p>
                    </div>
                    <div className="border-2 border-brand p-6 bg-brand/10">
                      <p className="text-white font-black text-sm">MODERN / PREMIUM [YOUR BRAND]</p>
                      <p className="text-brand text-[10px] mt-1 font-bold">Target Whitespace Position</p>
                    </div>
                    <div className="border border-white/10 p-6 bg-white/5">
                      <p className="text-slate-400">TRADITIONAL / ACCESSIBLE</p>
                      <p className="text-slate-500 text-[10px] mt-1">Legacy Service Providers</p>
                    </div>
                    <div className="border border-white/10 p-6 bg-white/5">
                      <p className="text-slate-400">MODERN / ACCESSIBLE</p>
                      <p className="text-slate-500 text-[10px] mt-1">Commoditized Alternatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. SERVICES GRID */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Full-Spectrum Capability" title="End-to-end brand, strategy, and creative services.">
              From foundational market positioning and logotype design to multi-channel brand books and campaign creative.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {brandServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Audit My Brand System <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. BRAND GOVERNANCE: DO'S AND DON'TS */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Brand Governance" title="Guidelines that ensure 100% long-term visual consistency.">
              We document clear, user-friendly usage standards so internal teams and external partners apply your brand accurately every time.
            </Heading>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="border border-border bg-background p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">✓ BRAND DO'S</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {brandDosAndDonts.dos.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="size-4 shrink-0 text-emerald-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border bg-background p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">✕ BRAND DON'TS</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {brandDosAndDonts.donts.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-mono font-bold text-rose-500 shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. BRAND TOUCHPOINTS ECOSYSTEM */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="System Application" title="Your brand should perform everywhere your customer interacts.">
              We translate your visual identity seamlessly across physical and digital environments.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {touchpointEcosystem.map(([title, text]) => (
                <div key={title} className="bg-background p-7">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. PRODUCTION PROCESS TIMELINE */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Label>Predictable Execution</Label>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage brand design process.</h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {brandProcess.map(([n, a, b]) => (
                <div key={n} className="bg-slate-950 p-7">
                  <span className="font-mono text-xs text-brand">{n}</span>
                  <h3 className="mt-6 text-lg font-black">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-white">
              Launch Brand Strategy <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated Growth" title="How brand strategy powers your marketing ecosystem.">
              Branding provides the visual and verbal foundation that drives higher performance across all channels.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Web Development', 'Translate brand systems natively into high-speed, high-converting Next.js web interfaces.', '/services/web-development', 'Explore Web Engineering'],
                ['Social Media Management', 'Fuel your channels with cohesive feed grids, short-form video covers, and templates.', '/services/social-media-management', 'Explore Social Media'],
                ['Content Production', 'Maintain 100% art direction alignment across videos, podcasts, and photography.', '/services/content-production', 'Explore Content Production'],
                ['Paid Media', 'Increase ad CTR and brand recall with high-contrast, on-brand campaign creatives.', '/services/paid-media', 'Explore Paid Media'],
              ].map(([a, b, href, c]) => (
                <div key={a} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr_220px] lg:items-center">
                  <h3 className="text-xl font-black">{a}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{b}</p>
                  <ArrowLink href={href}>{c}</ArrowLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
            <Heading label="Frequently asked questions" title="Answers to common brand & creative questions.">
              Direct clarity on how our brand positioning, visual identity design, and art direction services operate.
            </Heading>
            <div className="mt-14 border-y border-border">
              {faqs.map(([q, a]) => (
                <details key={q} className="group border-b border-border last:border-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                    <span>{q}</span>
                    <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-bold text-background">
              Talk to a Creative Director <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="Brand creative studio abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Make your brand impossible to confuse</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to build a visual system that drives commercial growth?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our creative directors. We will audit your current brand assets and present a clear visual roadmap for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Build My Brand <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}