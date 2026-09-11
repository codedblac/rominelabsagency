import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Cpu, 
  Eye, 
  FileText, 
  FlaskConical, 
  Layers, 
  LineChart, 
  MousePointerClick, 
  Search, 
  ShieldCheck, 
  ShoppingBag, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Workflow, 
  Zap 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization (CRO) Services | Romine Labs',
  description: 'Turn more website visitors into qualified leads and revenue. Data-driven CRO, UX auditing, landing page optimization, A/B testing, and customer journey engineering.',
  alternates: { canonical: 'https://rominelabs.com/services/conversion-rate-optimization' },
  openGraph: {
    title: 'Conversion Rate Optimization (CRO) Services | Romine Labs',
    description: 'Stop losing prospective customers to friction. Engineer data-driven digital experiences that maximize conversion rates and marketing efficiency.',
    url: 'https://rominelabs.com/services/conversion-rate-optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversion Rate Optimization Services | Romine Labs',
    description: 'Turn clicks into revenue with behavioral analytics, UX optimization, A/B testing, and funnel strategy.',
  },
}

const croServices = [
  ['Conversion & UX Audits', 'Uncover exact drop-off points, friction zones, confusing UX, messaging disconnects, and broken tracking paths across your site.', Search],
  ['Landing Page Optimization', 'Align traffic intent, message match, headlines, trust elements, and CTAs to maximize lead generation and ad profitability.', Target],
  ['Checkout & Cart Optimization', 'Remove friction from e-commerce checkout flows, payment steps, cart steps, shipping options, and form fields to cut abandonment.', ShoppingBag],
  ['Form & Lead Capture Optimization', 'Refine field count, multi-step flows, validation messaging, friction, and mobile responsiveness to generate higher-quality leads.', FileText],
  ['Conversion Copywriting & Messaging', 'Engineer value propositions, headlines, subheadlines, proof points, and objection-handling copy that persuade prospects to act.', Sparkles],
  ['Structured A/B & Experimentation', 'Design, execute, and analyze controlled experiments comparing variants to validate improvements with statistical confidence.', FlaskConical],
  ['Funnel & Customer Journey Engineering', 'Optimize every touchpoint from first ad click or search visit through consideration, conversion, and post-action onboarding.', Workflow],
  ['Mobile Conversion Optimization', 'Tailor touch targets, sticky CTAs, content density, page speed, and navigation specifically for mobile screen behaviors.', Smartphone],
  ['Behavioral Analytics & Heatmap Insights', 'Utilize click tracking, scroll maps, session recordings, and funnel drop-off data to base optimization decisions on real user evidence.', Eye],
] as const

const croProcess = [
  ['01', 'Discovery & Objectives', 'We align on commercial KPIs, target customer profiles, average order values, sales cycles, and target margins.'],
  ['02', 'Data & Analytics Audit', 'We verify tracking integrity across GA4, ad pixels, CRM routing, forms, and event logs to ensure data accuracy.'],
  ['03', 'Behavioral Research', 'We inspect heatmaps, scroll depth, session recordings, funnel drop-offs, and usability friction to gather qualitative evidence.'],
  ['04', 'Hypothesis Development', 'We turn research findings into structured hypotheses: "If we change X, then Y will improve because of evidence Z."'],
  ['05', 'Experiment Prioritization', 'We rank test concepts using impact, confidence, and effort matrices to prioritize high-value, fast-turnaround wins.'],
  ['06', 'Design & Engineering', 'We write conversion copy, design high-contrast UI variants, and engineer clean test builds without hurting page speed.'],
  ['07', 'Experiment Execution', 'We run controlled A/B or multivariate tests, monitoring statistical significance and secondary funnel impact.'],
  ['08', 'Learning & Implementation', 'We document learnings, deploy winning variants permanently, and feed insights into the next testing cycle.'],
] as const

const businessTypes = [
  ['E-Commerce Stores', 'Product pages, cart flows, checkout steps, search filters, upsells, and payment options.', ShoppingBag],
  ['B2B & Professional Services', 'Lead generation forms, consultation booking flows, qualification steps, and high-trust messaging.', Users],
  ['SaaS Platforms', 'Signup flows, trial onboarding, pricing page clarity, demo requests, and feature activation.', Cpu],
  ['Local & High-Intent Services', 'Click-to-call, quote forms, service area clarity, appointment booking, and instant trust proof.', Smartphone],
  ['NGOs & Non-Profits', 'Donation portals, recurring gift pathways, impact messaging, and volunteer registration.', Users],
  ['High-Growth Startups', 'Landing page validation, product-market fit messaging, early user acquisition, and waitlists.', Zap],
] as const

const croMetrics = [
  ['Conversion Rate (CR)', 'Percentage of total visitors who complete the primary desired action.'],
  ['Lead Conversion Rate', 'Percentage of traffic converting into qualified sales leads or consultation requests.'],
  ['Checkout Completion Rate', 'Percentage of users entering checkout who successfully complete a purchase.'],
  ['Form Completion Rate', 'Ratio of users who start a form vs. those who complete all required fields.'],
  ['Revenue Per Visitor (RPV)', 'Total revenue generated divided by total visitors—the ultimate e-commerce efficiency metric.'],
  ['Cost Per Acquisition (CPA)', 'Ad spend divided by conversions—directly reduced through effective CRO.'],
] as const

const faqs = [
  ['What is Conversion Rate Optimization (CRO)?', 'Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action—such as submitting a lead form, making a purchase, requesting a quote, or booking a consultation.'],
  ['Why is CRO better than simply buying more traffic?', 'Acquiring traffic through paid ads or SEO becomes increasingly expensive. CRO increases revenue from the traffic you already have. Doubling your conversion rate doubles your leads or sales without doubling your ad spend.'],
  ['How do you identify why visitors are failing to convert?', 'We combine quantitative analytics (GA4 funnel drop-offs, event logs) with qualitative user research (heatmaps, click maps, session recordings, scroll depth) to isolate exact points of friction, confusion, or doubt.'],
  ['Do we need millions of visitors to do CRO?', 'No. While high-traffic sites can run rapid A/B tests, lower-traffic sites benefit immensely from qualitative CRO audits, landing page UX fixes, messaging optimization, form simplification, and high-impact UX improvements.'],
  ['What is the difference between CRO and website redesign?', 'A traditional website redesign is often based on opinion and visual aesthetics. CRO is an ongoing, evidence-based process that tests and refines specific user journeys based on actual customer behavior and data.'],
  ['How does CRO work alongside SEO and Paid Media?', 'Paid Media and SEO bring qualified traffic to your site. CRO ensures that traffic converts once it arrives. A stronger conversion rate lowers your Cost Per Acquisition (CPA) and increases your Return on Ad Spend (ROAS).'],
  ['Will running A/B tests hurt our SEO rankings?', 'No. When implemented properly using canonical tags and client/server side experimentation frameworks that follow Google Webmaster guidelines, A/B testing has zero negative impact on search engine rankings.'],
  ['How long does it take to see results from CRO?', 'UX fixes, messaging corrections, and form optimizations can deliver immediate lifts upon deployment. Controlled A/B testing programs typically run in 2- to 4-week cycles to reach statistical confidence.'],
  ['What deliverables do we receive in a CRO engagement?', 'Depending on your agreement, deliverables include a comprehensive CRO & UX Audit, funnel drop-off analysis, user behavior heatmap reports, wireframes/designs for test variants, conversion copywriting, and A/B test reporting.'],
  ['Does Romine Labs use dark patterns or fake countdown timers?', 'Never. We specialize in persuasion through clarity, trust, friction reduction, value messaging, and superior user experience—never misleading countdowns, fake stock alerts, or manipulative tricks.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Conversion Rate Optimization Services', url: 'https://rominelabs.com/services/conversion-rate-optimization', description: metadata.description },
    { '@type': 'Service', name: 'Conversion Rate Optimization Services', serviceType: 'Growth & UX Optimization', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/conversion-rate-optimization' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Conversion Rate Optimization', item: 'https://rominelabs.com/services/conversion-rate-optimization' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }

export default function ConversionRateOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="Conversion Rate Optimization data visualization and funnel analytics" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <TrendingUp className="size-3.5 text-brand" /> CONVERSION RATE OPTIMIZATION
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                Turn More Visitors <span className="text-brand">Into Revenue.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We use behavioral analytics, UX optimization, conversion copywriting, and structured testing to eliminate funnel friction and turn website traffic into business growth.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Optimize My Website <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / TRAFFIC VS CONVERSION */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="The growth equation" title="Traffic is only valuable when it converts." />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                Most businesses spend thousands acquiring web traffic while ignoring what happens after visitors arrive. If your website has weak messaging, confusing navigation, poor mobile UX, or friction-filled forms, you are paying to send prospects directly to your competitors.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Weak or confusing value propositions.',
                  'Unclear primary Call-to-Actions (CTAs).',
                  'Friction-filled forms and long checkouts.',
                  'Poor mobile layouts and tap targets.',
                  'Lack of visible trust and proof elements.',
                  'Mismatched ad copy vs. landing page copy.',
                  'Unclear customer navigation journeys.',
                  'Slow page load speeds driving bounce rates.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                A 1% increase in conversion rate often impacts revenue far more than a 20% increase in ad spend—without adding to your customer acquisition costs.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. WHAT IS CRO? */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Understanding the discipline" title="What is Conversion Rate Optimization?">
              CRO is the systematic practice of understanding user behavior, identifying where prospective buyers drop off, and testing data-backed improvements to maximize conversion efficiency.
            </Heading>

            <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-6">
              {[
                ['01. Traffic', 'Users arrive via search, ads, or social.'],
                ['02. Arrival', 'First impression & headline clarity.'],
                ['03. Engagement', 'Exploring value, proof, and offerings.'],
                ['04. Evaluation', 'Overcoming objections and doubt.'],
                ['05. Intent', 'Interacting with forms, cart, or CTAs.'],
                ['06. Conversion', 'Completing purchase or lead submission.'],
              ].map(([a, b]) => (
                <div key={a} className="bg-background p-6">
                  <p className="font-mono text-xs text-brand">{a}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black">Data-Driven, Not Design-Driven</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  CRO is not about changing button colors based on personal opinions. It combines quantitative data (GA4, event logs) and qualitative research (heatmaps, user recordings) to make evidence-based enhancements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Persuasion Without Deception</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  We build trust through clear value positioning, proof, and effortless user paths. We strictly avoid dark patterns, fake countdown timers, or manipulative mechanics that damage long-term brand equity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. CRO ECOSYSTEM / DIAGRAM */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Label>The CRO Framework</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">The Continuous Optimization Cycle</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Optimization is an ongoing discipline of learning. Every test delivers data that informs the next refinement, compounding gains over time.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-3">
                  {[
                    ['Analyze Behavior', 'Audit analytics, heatmaps, scroll maps, and funnel drop-off points.'],
                    ['Identify Friction', 'Locate exact points where users experience doubt, confusion, or technical issues.'],
                    ['Formulate Hypothesis', 'Draft data-informed hypotheses focused on user motivation and friction reduction.'],
                    ['Design & Engineer', 'Create clear, high-converting copy, layouts, and UX components.'],
                    ['Run Controlled Tests', 'Execute A/B or multivariate experiments to validate impact.'],
                    ['Scale & Implement', 'Deploy winning variations permanently and feed learnings into the next cycle.'],
                  ].map(([a, b], i) => (
                    <div key={a} className="border border-white/10 bg-white/[.03] p-5">
                      <div className="flex gap-4">
                        <span className="font-mono text-xs text-brand">0{i + 1}</span>
                        <div>
                          <h3 className="font-black">{a}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{b}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. CRO SERVICES */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="What we optimize" title="Full-spectrum Conversion Rate Optimization services.">
              Every touchpoint between the initial ad click or search visit and the final transaction influences whether a prospect converts.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {croServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Request a Conversion Audit <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. ILLUSTRATIVE FUNNEL DIAGNOSTICS */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Heading label="Funnel diagnostics" title="Finding where your customer funnel leaks." />
                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  By mapping the entire customer journey, we pinpoint specific stages where intent breaks down, allowing us to focus optimization efforts where they generate the highest return.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-border bg-background p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Funnel Analysis</p>
                  <div className="mt-6 space-y-4">
                    {[
                      ['100,000 Visitors', 'Ad / Search Traffic', '100%'],
                      ['62,000 Engaged', 'Headline & Message Match', '62%'],
                      ['18,500 High Intent', 'Value Prop & Proof', '18.5%'],
                      ['4,200 Form / Cart Starts', 'Low-Friction CTAs', '4.2%'],
                      ['1,250 Conversions', 'Completed Purchase / Lead', '1.25%'],
                    ].map(([label, sub, pct]) => (
                      <div key={label} className="border-b border-border pb-3 last:border-0">
                        <div className="flex justify-between text-sm font-bold">
                          <span>{label}</span>
                          <span className="text-brand">{pct}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. BUSINESS MODEL APPLICATION */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Tailored to your model" title="CRO for every business model.">
              Different business models require distinct conversion strategies, user pathways, and primary optimization metrics.
            </Heading>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {businessTypes.map(([title, desc, Icon]) => (
                <div key={title} className="border border-border bg-background p-8">
                  <Icon className="size-6 text-brand" />
                  <h3 className="mt-6 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. LANDING PAGE & PAID MEDIA ALIGNMENT */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <Label>Message Matching</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight">Align Ad Intent With Landing Page UX</h2>
                <p className="mt-6 leading-7 text-muted-foreground">
                  The fastest way to waste advertising budget is driving paid ad traffic to a generic homepage. We build and optimize dedicated landing pages where the headline, creative, and offer match the exact ad copy the user clicked.
                </p>
                <div className="mt-8">
                  <ArrowLink href="/services/paid-media">Explore Paid Media Services</ArrowLink>
                </div>
              </div>
              <div>
                <Label>Analytics & Measurement</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight">Reliable Optimization Requires Reliable Data</h2>
                <p className="mt-6 leading-7 text-muted-foreground">
                  Optimization without accurate tracking is just guessing. We work alongside our Analytics & Tracking practice to ensure every CTA click, form start, conversion, and pipeline value is tracked accurately across systems.
                </p>
                <div className="mt-8">
                  <ArrowLink href="/services/analytics-tracking">Explore Analytics & Tracking</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. CRO PROCESS */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Label>Predictable Execution</Label>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage optimization process.</h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {croProcess.map(([n, a, b]) => (
                <div key={n} className="bg-slate-950 p-7">
                  <span className="font-mono text-xs text-brand">{n}</span>
                  <h3 className="mt-6 text-lg font-black">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-white">
              Start Optimizing Today <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 10. KEY METRICS WE MANAGE */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Commercial metrics" title="Metrics that directly impact your bottom line.">
              We focus on commercial outcomes rather than vanity clicks, ensuring optimizations translate to business growth.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {croMetrics.map(([title, text]) => (
                <div key={title} className="bg-background p-7">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. ECOSYSTEM LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated growth" title="How CRO powers your entire digital ecosystem.">
              Conversion rate optimization enhances every channel across your digital marketing ecosystem.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Web Development', 'High-speed Next.js websites built with native CRO layouts and zero technical bloat.', '/services/web-development', 'Explore Web Engineering'],
                ['SEO Services', 'Turn organic search traffic into qualified leads and sales calls.', '/services/seo', 'Explore SEO Services'],
                ['Paid Media', 'Lower Cost Per Acquisition (CPA) and boost Return on Ad Spend (ROAS).', '/services/paid-media', 'Explore Paid Media'],
                ['Analytics & Tracking', 'Accurate conversion tracking and event infrastructure.', '/services/analytics-tracking', 'Explore Analytics'],
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
        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
            <Heading label="Frequently asked questions" title="Answers to common CRO questions.">
              Direct answers explaining how our conversion optimization services work.
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
              Talk to a CRO Specialist <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 13. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="CRO analytics abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Stop losing prospective clients</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to unlock higher revenue from your existing traffic?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our conversion strategists. We will evaluate your current user paths and outline a data-driven optimization roadmap for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Optimize My Website <ArrowRight className="size-4" />
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