/* cspell:disable */
'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICE_ROUTES } from '@/lib/routes'
import { 
  ArrowRight, 
  ArrowUpRight, 
  BarChart3, 
  Bot, 
  Building2, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  Code2, 
  Compass, 
  Cpu, 
  Database, 
  FileText, 
  Filter, 
  FlaskConical, 
  Globe, 
  HeartHandshake, 
  HelpCircle, 
  Layers, 
  Layout, 
  LineChart, 
  Mail, 
  MessageSquare, 
  MousePointerClick, 
  Network, 
  Palette, 
  PenTool, 
  RefreshCw, 
  Repeat, 
  Rocket, 
  Search, 
  Send, 
  Share2, 
  ShieldCheck, 
  ShoppingBag, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Type, 
  Users, 
  Video, 
  Workflow, 
  Zap 
} from 'lucide-react'

// Reusable Primitives & Helpers
function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`font-sans text-xs font-bold uppercase tracking-[0.2em] ${onDark ? 'text-brand-soft' : 'text-brand'}`}>
      {children}
    </p>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  onDark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <Label onDark={onDark}>{eyebrow}</Label>
      <h2 className={`mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl ${onDark ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 font-sans text-base leading-relaxed sm:text-lg ${onDark ? 'text-slate-300' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

function ArrowLink({ href, children, onDark = false }: { href: string; children: React.ReactNode; onDark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-sans text-sm font-bold underline decoration-border underline-offset-4 transition-colors ${
        onDark ? 'text-white hover:text-brand-soft hover:decoration-brand-soft' : 'hover:text-brand hover:decoration-brand'
      }`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div 
      className="transition-all duration-700 ease-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// =========================================================================
// 1. HERO SECTION (INTERACTIVE CAROUSEL WITH CLEAR AGENCY POSITIONING)
// =========================================================================
const slides = [
  {
    src: '/images/hero-technology.png',
    alt: 'Modern digital technology and engineering workspace',
    eyebrow: 'Digital Experience',
    title: <>Build digital experiences<br />that work as hard as<br />your business.</>,
    description: 'High-performance websites, e-commerce platforms, and custom Next.js applications engineered around usability, speed, and conversion.',
    primary: 'Start a Project',
    secondary: 'Explore Web & Digital',
    link: SERVICE_ROUTES['Web Development'],
  },
  {
    src: '/images/hero-creative.png',
    alt: 'Creative brand studio and art direction environment',
    eyebrow: 'Brand & Creative',
    title: <>Build a brand people<br />recognize, remember<br />and trust.</>,
    description: 'Strategic positioning, visual identities, typography, and creative systems that make ambitious companies impossible to confuse.',
    primary: 'Build My Brand',
    secondary: 'Explore Brand & Creative',
    link: SERVICE_ROUTES['Brand & Creative'],
  },
  {
    src: '/images/hero-leadership.png',
    alt: 'Digital growth strategy and acquisition environment',
    eyebrow: 'Growth & Performance',
    title: <>Turn attention into<br />measurable business<br />growth.</>,
    description: 'SEO, paid advertising, conversion optimization, and lead acquisition working together to turn traffic into qualified pipeline.',
    primary: 'Grow My Pipeline',
    secondary: 'Explore Growth & Performance',
    link: SERVICE_ROUTES['Paid Media Strategy'],
  },
  {
    src: '/images/hero-architecture.png',
    alt: 'Content production studio and video editing workstation',
    eyebrow: 'Content & Social',
    title: <>Create content that<br />earns attention and<br />moves people forward.</>,
    description: 'Short-form video, Reels, podcast clipping, and social content systems engineered to build authority and community engagement.',
    primary: 'Plan My Content',
    secondary: 'Explore Content & Social',
    link: SERVICE_ROUTES['Social Media Management'],
  },
  {
    src: '/images/hero-data.png',
    alt: 'Abstract glowing analytics and business automation interfaces',
    eyebrow: 'Data & Automation',
    title: <>Build smarter systems<br />behind your business<br />growth.</>,
    description: 'Connected CRMs, AI-powered workflows, attribution modeling, and analytics that reduce manual work and inform decision-making.',
    primary: 'Automate My Business',
    secondary: 'Explore Data & Automation',
    link: SERVICE_ROUTES['CRM & Automation'],
  },
]

const AUTOPLAY_MS = 6000

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const go = useCallback((i: number) => {
    setActive((i + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, go])

  return (
    <section
      data-hero-dark
      aria-roledescription="carousel"
      aria-label="Romine Labs growth capabilities"
      className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== active}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Dark Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-28 pt-28 sm:px-8 lg:px-12">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-soft">
          {slides[active].eyebrow}
        </p>
        <h1 key={active} className="mt-6 max-w-4xl text-balance font-serif text-4xl font-normal tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
          {slides[active].title}
        </h1>
        <p key={`desc-${active}`} className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
          {slides[active].description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 font-sans text-sm font-bold text-white transition-all hover:bg-brand/90 shadow-lg shadow-brand/20"
          >
            Start a Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={slides[active].link}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 font-sans text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            {slides[active].secondary}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 pb-8 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                onClick={() => go(i)}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/20 transition-all"
              >
                <span
                  className="absolute inset-0 origin-left rounded-full bg-brand-soft transition-transform duration-300"
                  style={{ transform: `scaleX(${i === active ? 1 : 0})` }}
                />
              </button>
            ))}
          </div>
          <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 sm:flex">
            <span className="inline-block h-4 w-px animate-pulse bg-brand-soft" aria-hidden />
            Scroll to explore system
          </span>
        </div>
      </div>
    </section>
  )
}

// =========================================================================
// 2. POSITIONING & INTRODUCTION
// =========================================================================
function AgencyIntro() {
  return (
    <section className="border-b border-border py-20 lg:py-28 bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Label>ROMINE LABS</Label>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl text-foreground">
              Your business doesn't need more disconnected marketing. It needs a system.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most ambitious businesses don't fail from a lack of effort—they suffer from agency fragmentation. The website is built by one vendor, ads managed by another, SEO treated in isolation, content published without distribution strategy, and CRM leads lost in spreadsheet silos.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Disconnected tactics that fail to compound.',
                'Unclear attribution between ad spend and closed revenue.',
                'High website traffic with broken conversion pathways.',
                'Manual operations slowing down sales follow-up.',
                'Inconsistent branding across digital touchpoints.',
                'Single-use creative assets that never get repurposed.',
              ].map((x) => (
                <div key={x} className="flex gap-3 border-t border-border pt-3 font-sans text-sm leading-6 font-medium text-foreground">
                  <Check className="mt-1 size-4 shrink-0 text-brand" />
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-8 border-l-2 border-brand pl-5 font-sans text-sm leading-relaxed text-muted-foreground">
              We connect strategy, brand, web engineering, content, acquisition, automation, and analytics into one integrated digital growth system designed to move your business forward.
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 3. GROWTH SYSTEM ARCHITECTURE (NON-IMAGE VISUAL)
// =========================================================================
function GrowthSystem() {
  const steps = [
    { title: 'Strategy & Positioning', desc: 'Market research, value props, & audience targeting.', icon: Compass },
    { title: 'Brand & Creative', desc: 'Distinctive visual identities, typography, & messaging.', icon: Palette },
    { title: 'Digital Experience', desc: 'High-speed Next.js websites & e-commerce platforms.', icon: Layout },
    { title: 'Content Engine', desc: 'Short-form video, podcasts, & multi-channel assets.', icon: Video },
    { title: 'Acquisition & Paid', desc: 'Google, Meta, & LinkedIn ads capturing demand.', icon: Target },
    { title: 'Lead Generation', desc: 'Conversion landing pages & qualification forms.', icon: MousePointerClick },
    { title: 'Automation & CRM', desc: 'Instant lead routing, pipelines, & email nurtures.', icon: Workflow },
    { title: 'Analytics & CRO', desc: 'Attribution, A/B testing, & continuous optimization.', icon: LineChart },
  ]

  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28 relative overflow-hidden">
      <Container>
        <SectionHeading
          onDark
          eyebrow="The Growth System"
          title="How the disciplines connect into one engine."
          description="We don't sell isolated tactics. We build a connected customer journey that moves prospects from discovery to closed revenue."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative border border-white/10 bg-white/3 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-soft">Stage 0{i + 1}</span>
                  <Icon className="size-5 text-brand-soft" />
                </div>
                <h3 className="mt-4 font-serif font-normal text-lg text-white">{step.title}</h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-slate-300">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ChevronRight className="size-4" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
          <p className="font-sans text-sm text-slate-300">
            <span className="font-bold text-white">The Compounding Loop:</span> Measurement data feeds directly back into Strategy and CRO—ensuring every campaign cycle becomes smarter and more cost-effective.
          </p>
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 4. CORE DISCIPLINES & SERVICES OVERVIEW
// =========================================================================
const disciplines = [
  {
    id: 'web-digital',
    number: '01',
    title: 'Web & Digital Engineering',
    description: 'High-performance websites, e-commerce storefronts, and web applications built on Next.js.',
    href: SERVICE_ROUTES['Web Development'],
    services: ['Corporate Websites', 'E-Commerce Storefronts', 'Custom Web Applications', 'Landing Pages', 'Core Web Vitals'],
    icon: Layout,
  },
  {
    id: 'brand-creative',
    number: '02',
    title: 'Brand & Creative Systems',
    description: 'Strategic positioning, visual identity systems, typography, and creative direction.',
    href: SERVICE_ROUTES['Brand & Creative'],
    services: ['Brand Strategy', 'Logo & Mark Systems', 'Brand Guidelines', 'Tone of Voice', 'Digital Brand Assets'],
    icon: Palette,
  },
  {
    id: 'growth-performance',
    number: '03',
    title: 'Growth & Performance Marketing',
    description: 'Data-driven acquisition through Search Engine Optimization (SEO/AEO) and targeted Paid Media.',
    href: SERVICE_ROUTES['Paid Media Strategy'],
    services: ['Technical SEO & AEO', 'Google Ads', 'Meta & TikTok Ads', 'LinkedIn B2B Ads', 'Retargeting Workflows'],
    icon: Target,
  },
  {
    id: 'lead-generation',
    number: '04',
    title: 'Lead Generation Systems',
    description: 'End-to-end acquisition funnels designed to turn audience interest into qualified business opportunities.',
    href: SERVICE_ROUTES['Lead Generation'],
    services: ['Lead Strategy & ICP', 'Conversion Landing Pages', 'Lead Magnets', 'Multi-Step Qualification', 'CRM Routing'],
    icon: MousePointerClick,
  },
  {
    id: 'social-content',
    number: '05',
    title: 'Social & Content Production',
    description: 'Short-form video, podcasts, and social management engineered for audience attention and trust.',
    href: SERVICE_ROUTES['Social Media Management'],
    services: ['Social Management', 'Short-Form Video (Reels/TikTok)', 'Podcast Repurposing', 'Content Calendars', 'Graphics'],
    icon: Video,
  },
  {
    id: 'email-crm',
    number: '06',
    title: 'Email & CRM Lifecycle',
    description: 'Automated email nurtures, lead welcome sequences, and e-commerce retention workflows.',
    href: SERVICE_ROUTES['Email Marketing'],
    services: ['Email Strategy', 'Automated Lead Nurture', 'Cart Abandonment', 'Segmentation', 'Deliverability (DMARC)'],
    icon: Mail,
  },
  {
    id: 'ai-automation',
    number: '07',
    title: 'AI & Business Automation',
    description: 'Intelligent workflows, AI assistants, document parsing, and API webhooks that eliminate manual tasks.',
    href: SERVICE_ROUTES['AI & Automation'],
    services: ['Workflow Automation', 'AI Customer Support', 'Document Extraction', 'WhatsApp Bots', 'CRM Automation'],
    icon: Cpu,
  },
  {
    id: 'analytics-optimization',
    number: '08',
    title: 'Analytics & CRO Optimisation',
    description: 'GA4/GTM measurement, server-side attribution, A/B testing, and continuous journey optimization.',
    href: SERVICE_ROUTES['Analytics & Tracking'],
    services: ['GA4 Architecture', 'Server-Side Tracking (CAPI)', 'Conversion Rate (CRO)', 'A/B Testing', 'Looker Dashboards'],
    icon: LineChart,
  },
]

function ServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Everything your digital growth needs.<br />Connected under one roof.</>}
            description="Engage Romine Labs for a targeted service or combine disciplines into a comprehensive growth engine."
          />
          <ArrowLink href="/services">View all services</ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => {
            const Icon = d.icon
            return (
              <Link
                key={d.id}
                href={d.href}
                className="group relative flex flex-col justify-between gap-8 bg-card p-8 transition-all duration-300 hover:bg-muted/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand">{d.number}</span>
                    <Icon className="size-5 text-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-normal text-foreground group-hover:text-brand transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-1.5 border-t border-border pt-4 font-sans text-xs font-medium text-muted-foreground">
                    {d.services.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <Check className="size-3 text-brand shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-brand">
                    Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 5. CONNECTED CAPABILITIES (THE COMPOUND ADVANTAGE)
// =========================================================================
function ConnectedCapabilities() {
  const loops = [
    {
      combo: 'BRAND → WEB → CONTENT',
      result: 'Sharper positioning + high-speed website + authentic content = Immediate market authority.',
    },
    {
      combo: 'CONTENT → PAID MEDIA → LEAD GEN',
      result: 'Engaging creative + targeted distribution + conversion landing pages = Lower Cost Per Acquisition.',
    },
    {
      combo: 'SEO → CONTENT → AEO → CONVERSION',
      result: 'Search visibility + useful answers + AI engine citations = Steady stream of high-intent visitors.',
    },
    {
      combo: 'LEAD GEN → CRM → EMAIL → AUTOMATION',
      result: 'Lead capture + automated qualification + instant routing + nurture = Faster speed-to-lead & higher close rates.',
    },
    {
      combo: 'ANALYTICS → CRO → OPTIMIZATION',
      result: 'Data tracking + friction diagnosis + A/B testing = Continuous baseline conversion improvement.',
    },
  ]

  return (
    <section className="bg-muted/30 py-20 lg:py-28 border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="The Compound Advantage"
          title="The real advantage is in the connection."
          description="Individual marketing channels work fine. Connected disciplines compound exponentially."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loops.map((loop) => (
            <div key={loop.combo} className="border border-border bg-card p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-bold text-brand uppercase tracking-wider">{loop.combo}</p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-foreground font-medium">{loop.result}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-sans text-xs font-bold text-brand">
                <Sparkles className="size-3.5" /> Compound Effect
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 6. PROBLEMS WE SOLVE (NON-TECHNICAL VISITOR ROUTING)
// =========================================================================
function ProblemsWeSolve() {
  const problems = [
    {
      q: "Our website looks dated and doesn't generate inquiries.",
      solution: 'Web Engineering + Brand Strategy + CRO',
      link: SERVICE_ROUTES['Web Development'],
    },
    {
      q: "We get traffic from ads or search, but nobody converts.",
      solution: 'Landing Pages + CRO + Lead Generation',
      link: SERVICE_ROUTES['Conversion Rate Optimization'],
    },
    {
      q: "Our team spends hours copying data between spreadsheets.",
      solution: 'AI & Business Automation + CRM Architecture',
      link: SERVICE_ROUTES['CRM & Automation'],
    },
    {
      q: "We burn ad spend without knowing which channels drive revenue.",
      solution: 'Server-Side Analytics + GA4 + CAPI Attribution',
      link: SERVICE_ROUTES['Analytics & Tracking'],
    },
    {
      q: "Our social feeds are inconsistent and don't produce leads.",
      solution: 'Short-Form Video + Content Production + Social System',
      link: SERVICE_ROUTES['Social Media Management'],
    },
    {
      q: "Leads come in, but our sales team doesn't follow up quickly.",
      solution: 'Speed-to-Lead Automation + Lead Qualification + CRM',
      link: SERVICE_ROUTES['Lead Generation'],
    },
  ]

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Start With the Problem"
          title="Not sure which service you need? Start with your objective."
          description="Tell us what is holding your growth back, and we will architect the solution."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Link
              key={p.q}
              href={p.link}
              className="group border border-border bg-card p-8 transition-all hover:border-brand/40 flex flex-col justify-between"
            >
              <div>
                <HelpCircle className="size-6 text-brand mb-4" />
                <h3 className="font-serif text-base font-normal text-foreground leading-snug group-hover:text-brand transition-colors">
                  "{p.q}"
                </h3>
                <p className="mt-4 text-xs font-mono text-muted-foreground">
                  <span className="font-bold text-brand uppercase">Recommended System:</span><br />
                  {p.solution}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-sans text-xs font-bold text-brand uppercase tracking-wider">
                Resolve Challenge <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 7. PROCESS (METHODOLOGY)
// =========================================================================
const steps = [
  {
    step: '01',
    title: 'Discover',
    body: 'We examine your business goals, target audience, market, existing digital ecosystem, commercial priorities, and operational bottlenecks.',
  },
  {
    step: '02',
    title: 'Strategize',
    body: 'We map the connected growth system—defining positioning, channel priority, customer journeys, measurement rules, and required capabilities.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'We execute with technical craft—building fast websites, sharp creative, short-form video, lead funnels, and CRM automation.',
  },
  {
    step: '04',
    title: 'Launch',
    body: 'We deploy carefully, verify technical tracking, validate user paths, and ensure smooth operation across devices and channels.',
  },
  {
    step: '05',
    title: 'Optimize',
    body: 'We measure performance, identify conversion friction, run controlled A/B tests, and compound results over time.',
  },
]

function Process() {
  return (
    <section className="bg-background py-20 lg:py-28 border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined process built to compound results."
          description="Clear, collaborative, and outcome-driven—with zero tech jargon or surprise scope creep."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.step} className="flex h-full flex-col gap-4 bg-card p-8">
              <span className="font-mono text-xs font-bold text-brand">{s.step}</span>
              <h3 className="font-serif text-xl font-normal text-foreground">{s.title}</h3>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 8. WHY ROMINE LABS & OUR APPROACH (SUBSTANCE TRUST BAR)
// =========================================================================
function WhyRomineLabs() {
  const pillars = [
    { title: 'One Connected Team', desc: 'Strategy, brand, web engineering, content, and growth working from the same playbook.' },
    { title: 'Business-First Thinking', desc: 'We start with your commercial objective, not a pre-packaged template or tactic.' },
    { title: 'Strategy Before Execution', desc: 'We align positioning and target audience before designing assets or launching ads.' },
    { title: 'Built for Measurement', desc: 'Closed-loop tracking and CRM attribution built into your systems from day one.' },
    { title: 'Systems, Not Random Activity', desc: 'Every initiative has a clear role in guiding prospects along their customer journey.' },
    { title: 'Continuous Optimization', desc: 'Launch is just the starting line. We test and refine systems to compound performance.' },
  ]

  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          onDark
          eyebrow="Why Romine Labs"
          title="Built to think beyond the next deliverable."
          description="The difference between hiring disconnected freelancers and partnering with an integrated digital growth firm."
        />

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="bg-slate-950 p-8">
              <ShieldCheck className="size-6 text-brand-soft mb-4" />
              <h3 className="font-serif text-lg font-normal text-white">{p.title}</h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 9. INDUSTRIES STRIP
// =========================================================================
const sampleIndustries = [
  { name: 'B2B & Enterprise', blurb: 'Complex sales cycles, multi-stakeholder qualification, and account-based pipelines.', slug: 'b2b' },
  { name: 'E-Commerce & D2C', blurb: 'High-scale storefronts, sub-second search, cart recovery, and retention flows.', slug: 'ecommerce' },
  { name: 'SaaS & Tech Platforms', blurb: 'Trial onboarding, demo funnels, churn reduction, and product documentation.', slug: 'saas' },
  { name: 'Professional Services', blurb: 'High-trust brand positioning, consultation booking, and thought leadership.', slug: 'professional-services' },
  { name: 'Local & High-Intent Services', blurb: 'Speed-to-lead routing, localized search capture, and instant booking widgets.', slug: 'local-services' },
  { name: 'NGOs & Impact Non-Profits', blurb: 'Recurring donor portals, impact dashboards, and multi-language accessibility.', slug: 'ngo' },
]

function IndustriesStrip() {
  return (
    <section className="bg-background py-20 lg:py-28 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Different industries. One disciplined approach."
            description="We tailor every growth engine to the commercial realities and buyer behavior of your specific market."
          />
          <ArrowLink href="/industries">Explore all sectors</ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href="/industries"
              className="group border border-border bg-card p-8 transition-all hover:border-brand/40 flex flex-col justify-between"
            >
              <div>
                <Building2 className="size-6 text-brand mb-4" />
                <h3 className="font-serif text-xl font-normal text-foreground group-hover:text-brand transition-colors">{ind.name}</h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground">{ind.blurb}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-sans text-xs font-bold text-brand uppercase tracking-wider">
                View Solutions <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 10. INSIGHTS PREVIEW
// =========================================================================
const sampleInsights = [
  {
    title: 'Why Disconnected Marketing Agencies Are Killing Your Growth',
    summary: 'How agency fragmentation creates data drop-offs and why connected growth systems produce superior ROI.',
    category: 'Growth Strategy',
    readTime: '6 min read',
    slug: 'connected-growth-systems',
  },
  {
    title: 'Core Web Vitals & AI Search: Engineering Websites for 2026+',
    summary: 'How Google AI Overviews and ChatGPT extract structured entity data from high-speed Next.js platforms.',
    category: 'SEO & Engineering',
    readTime: '8 min read',
    slug: 'seo-aeo-web-engineering',
  },
  {
    title: 'Speed-to-Lead Automation: The 5-Minute Window That Doubles Conversion',
    summary: 'Connecting landing page lead capture directly to CRM routing and instant sales rep notifications.',
    category: 'CRM & Automation',
    readTime: '5 min read',
    slug: 'speed-to-lead-automation',
  },
]

function InsightsPreview() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Perspectives"
            title="Ideas worth your time."
            description="Commercial perspectives on strategy, technology, search, automation, and digital growth."
          />
          <ArrowLink href="/insights">Read all insights</ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleInsights.map((art) => (
            <Link
              key={art.slug}
              href="/insights"
              className="group border border-border bg-card p-8 transition-all hover:border-brand/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-brand font-bold uppercase">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-normal text-foreground group-hover:text-brand transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-muted-foreground">{art.summary}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-sans text-xs font-bold text-brand uppercase tracking-wider">
                Read Article <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// 11. FINAL CONVERSION BANNER
// =========================================================================
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
      <Image src="/images/hero-data.png" alt="Connected digital growth engine background" fill sizes="100vw" className="object-cover object-center opacity-20" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/80 to-slate-950/40" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Label onDark>READY WHEN YOU ARE</Label>
          <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white">
            Let's build what your business needs next.
          </h2>
          <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
            Whether you need a high-performance website, a distinct brand identity, an automated acquisition funnel, or a connected CRM system—start with the problem. We will map the path forward.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 font-sans text-sm font-bold text-white hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20">
              Start a Project <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 font-sans text-sm font-bold text-white hover:bg-white/10 transition-colors">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =========================================================================
// MAIN HOMEPAGE COMPONENT
// =========================================================================
export default function HomePage() {
  return (
    <>
      <Hero />
      <AgencyIntro />
      <GrowthSystem />
      <ServicesOverview />
      <ConnectedCapabilities />
      <ProblemsWeSolve />
      <Process />
      <WhyRomineLabs />
      <IndustriesStrip />
      <InsightsPreview />
      <FinalCTA />
    </>
  )
}