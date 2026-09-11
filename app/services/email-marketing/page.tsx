import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Cpu, 
  Database, 
  FileText, 
  Filter, 
  Globe, 
  Layers, 
  Layout, 
  LineChart, 
  Lock, 
  Mail, 
  MessageSquare, 
  MousePointerClick, 
  Network, 
  RefreshCw, 
  Repeat, 
  Search, 
  Send, 
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
  title: 'Email Marketing & Lifecycle Strategy Services | Romine Labs',
  description: 'Romine Labs engineers strategic email marketing systems, automated lead nurtures, e-commerce lifecycle flows, deliverability optimization, and CRM retention workflows.',
  alternates: { canonical: 'https://rominelabs.com/services/email-marketing' },
  openGraph: {
    title: 'Email Marketing & Lifecycle Strategy Services | Romine Labs',
    description: 'Bridge acquisition and retention. Automated lead nurtures, e-commerce lifecycle flows, CRM segmentation, and revenue-driven email systems.',
    url: 'https://rominelabs.com/services/email-marketing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing & Lifecycle Strategy Services | Romine Labs',
    description: 'Turn customer interactions into lasting relationships. Strategic campaigns, automated nurture flows, deliverability, and customer retention.',
  },
}

const emailServices = [
  ['Email Marketing Strategy', 'Audit existing lists, map full customer lifecycles, establish brand messaging, and design multi-channel communication systems.', Target],
  ['Automated Lifecycle Workflows', 'Architect event-triggered email flows for lead welcome, post-purchase onboarding, trial conversion, and re-engagement.', Workflow],
  ['Lead Nurture Sequences', 'Transform cold prospects into sales-ready leads through educational content, case study proof, and strategic offer positioning.', Zap],
  ['E-Commerce Lifecycle Systems', 'Maximize customer lifetime value with cart abandonment, browse recovery, post-purchase education, and win-back workflows.', ShoppingBag],
  ['B2B & High-Touch Campaigns', 'Nurture long sales cycles with executive thought leadership, whitepaper follow-ups, case studies, and consultation pushes.', Users],
  ['Audience Segmentation & Scoring', 'Partition lists by buying intent, lifecycle stage, past purchase behavior, content engagement, and custom CRM attributes.', Filter],
  ['Email Copywriting & Messaging', 'Draft conversion-focused copy, compelling subject lines, preheaders, and messaging frameworks that persuade prospects to act.', FileText],
  ['Responsive Email Design', 'Code modern, mobile-responsive HTML templates that render crisp layouts across all desktop and mobile email clients.', Layout],
  ['Deliverability & Inbox Health', 'Implement SPF, DKIM, DMARC authentication, manage domain reputation, clean stale contacts, and resolve spam flags.', ShieldCheck],
  ['Analytics & Revenue Attribution', 'Track click-through velocity, pipeline attribution, subscriber lifetime value, and closed revenue rather than open rates alone.', BarChart3],
] as const

const lifecycleStages = [
  ['01. Capture', 'Acquire permission via high-value lead magnets, form offers, or e-commerce signups.'],
  ['02. Welcome', 'Set clear expectations, deliver instant value, and introduce your core brand story.'],
  ['03. Nurture', 'Educate prospects, answer objections, share social proof, and build solution awareness.'],
  ['04. Convert', 'Present relevant, timely offers and frictionless pathways to complete a booking or purchase.'],
  ['05. Onboard', 'Guide new customers through product setup, initial usage, and early value milestones.'],
  ['06. Retain', 'Maintain engagement with educational newsletters, product updates, and check-ins.'],
  ['07. Win-Back', 'Identify waning subscriber activity and trigger automated re-engagement or pruning flows.'],
] as const

const workflowNodes = [
  ['Trigger Event', 'Prospect downloads Industry Benchmark Guide from landing page.'],
  ['Condition Check', 'Evaluate contact CRM stage = Unqualified Lead.'],
  ['Action 01', 'Enroll in 5-part Problem-Awareness Nurture Sequence.'],
  ['Wait Step', 'Delay 48 hours → Check if Email #1 was clicked.'],
  ['Branch Yes', 'Tag as High-Intent → Send Case Study & Booking Invite.'],
  ['Branch No', 'Send Educational Breakdown & Alternative Resource.'],
] as const

const processSteps = [
  ['01', 'Discovery & Audit', 'We inspect existing list health, technical sender reputation, current automation flows, and business KPIs.'],
  ['02', 'Lifecycle Mapping', 'We design customer journey maps specifying triggers, delay windows, segmentation logic, and conversion goals.'],
  ['03', 'Technical Setup', 'We configure SPF, DKIM, DMARC records, set up domain authentication, and establish CRM integration webhooks.'],
  ['04', 'Copy & Design', 'We write high-converting, brand-aligned email copy and code responsive, high-contrast email templates.'],
  ['05', 'Workflow Construction', 'We build automated logic branches, enrollment triggers, exit criteria, and tag management inside your ESP/CRM.'],
  ['06', 'QA & Client Review', 'Every email passes inbox rendering tests, link validation, spam filter checks, and client approval protocols.'],
  ['07', 'Launch & Monitoring', 'We activate flows, schedule campaign broadcasts, monitor real-time delivery rates, and track initial responses.'],
  ['08', 'Optimization Loop', 'We conduct A/B testing on subject lines, send times, and CTAs—continuously refining performance based on data.'],
] as const

const deliverabilityPillars = [
  ['SPF (Sender Policy Framework)', 'Specifies which mail servers are authorized to send email on behalf of your domain.'],
  ['DKIM (DomainKeys Identified Mail)', 'Attaches a cryptographic signature to emails to verify sender authenticity and prevent tampering.'],
  ['DMARC Alignment', 'Enforces policy handling for unauthenticated mail to protect your brand reputation against spoofing.'],
  ['List Hygiene & Pruning', 'Systematically removes hard bounces, invalid addresses, and unengaged contacts to keep inbox placement high.'],
] as const

const emailMetrics = [
  ['Click-Through Velocity', 'Percentage of delivered emails that generate active clicks to key landing pages.'],
  ['Subscriber LTV', 'Cumulative revenue generated per subscribed contact over their customer lifecycle.'],
  ['Conversion Rate', 'Ratio of email recipients who complete a purchase, trial, or consultation booking.'],
  ['List Growth Velocity', 'Net monthly increase in active, compliant subscribers after accounting for unsubscribes.'],
  ['Deliverability Rate', 'Percentage of sent messages that successfully land in the primary inbox rather than spam.'],
  ['Pipeline Revenue', 'Total sales pipeline value created or influenced directly by email campaigns.'],
] as const

const faqs = [
  ['What is the difference between email campaigns and email automation?', 'Email campaigns (broadcasts) are manual or scheduled one-time messages sent to a specific list or segment, such as a monthly newsletter or product launch. Email automation consists of event-triggered workflows (like welcome or cart recovery sequences) that run automatically based on subscriber actions.'],
  ['Why rely on email marketing when we already do social media or paid ads?', 'Social media platforms control your reach via algorithms, and paid ads stop producing leads the moment you stop paying. Email is a direct, owned channel where you maintain full access to your audience without paying per impression.'],
  ['Are open rates still a reliable metric after Apple’s Mail Privacy Protection (MPP)?', 'No. Privacy changes automatically mark many emails as "opened" regardless of human action. We focus on reliable commercial indicators: click-through rates, click-to-conversion rates, reply rates, list health, and attribution revenue.'],
  ['How do you protect our domain from landing in the spam folder?', 'We establish proper technical authentication (SPF, DKIM, DMARC), implement gradual IP/domain warming, enforce strict opt-in compliance, remove invalid/unengaged addresses, and eliminate spam-triggering copy or deceptive subject lines.'],
  ['Which Email Service Providers (ESPs) or CRMs do you support?', 'We work across modern marketing and enterprise CRM ecosystems, including Klaviyo, HubSpot, ActiveCampaign, Mailchimp, Brevo, Salesforce Marketing Cloud, and ConvertKit.'],
  ['Do you write the email copy and design the templates?', 'Yes. Our team handles the entire creative and strategic lifecycle: copywriting, custom HTML template design, responsive layout coding, graphic production, workflow setup, and quality testing.'],
  ['How often should our business send emails to our list?', 'Sending frequency depends on your business model and audience expectations. E-commerce brands may send 2 to 4 campaign emails weekly alongside automated flows, while B2B companies often find maximum impact with 1 to 2 high-value weekly touchpoints.'],
  ['How do email marketing and CRM/automation work together?', 'Email marketing relies on CRM data for accurate segmentation. By pulling contact attributes, deal stages, and interaction history from your CRM, email campaigns become hyper-relevant rather than generic broadcasts.'],
  ['Can email marketing help recover abandoned shopping carts?', 'Yes. Abandoned cart and browse abandonment workflows are among the highest-ROI automations for e-commerce. A 3-part automated recovery sequence typically recovers 5% to 15% of otherwise lost revenue.'],
  ['How do we get started with Romine Labs?', 'We start with a discovery consultation and a technical audit of your current list health, deliverability, and workflow setup. From there, we present an email strategy and implementation roadmap.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Email Marketing & Lifecycle Strategy Services', url: 'https://rominelabs.com/services/email-marketing', description: metadata.description },
    { '@type': 'Service', name: 'Email Marketing Services', serviceType: 'Lifecycle Marketing, Email Automation & Customer Retention', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/email-marketing' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Email Marketing', item: 'https://rominelabs.com/services/email-marketing' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }

export default function EmailMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="Email marketing campaign and analytics workspace" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <Mail className="size-3.5 text-brand" /> EMAIL MARKETING & LIFECYCLE
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                Turn Every Interaction <span className="text-brand">Into a Relationship.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We engineer strategic email systems—connecting audience capture, intelligent segmentation, automated lifecycle nurtures, and deliverability optimization to drive repeatable revenue.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Build My Email Strategy <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / RETENTION PHILOSOPHY */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="Core Positioning" title="Email isn't about sending more. It's about sending better." />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                Acquiring website visitors through paid ads or search is expensive. If those visitors leave without a reason to stay connected, you lose the opportunity to build a long-term commercial relationship. Email is the bridge between initial acquisition and long-term customer lifetime value.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Batch-and-blast newsletters sent to unsegmented lists.',
                  'Missing automated welcome and post-purchase sequences.',
                  'Inconsistent sending cadences that damage inbox reputation.',
                  'Emails landing in spam due to missing SPF/DKIM authentication.',
                  'Generic messaging that fails to speak to buyer intent.',
                  'Cart abandonment revenue left on the table.',
                  'Over-promotional copy with zero educational value.',
                  'Zero tracking connecting email clicks to closed revenue.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                We transform email from an occasional promotional tool into an automated lifecycle engine that nurtures leads, converts sales, and retains customers automatically.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. LIFECYCLE STAGES DIAGRAM */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Customer Lifecycle" title="Supporting every stage from subscriber to advocate.">
              Different lifecycle stages require distinct messaging. We build tailored communication paths matched to subscriber readiness.
            </Heading>

            <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-7">
              {lifecycleStages.map(([stage, desc]) => (
                <div key={stage} className="bg-background p-6">
                  <p className="font-mono text-xs text-brand font-bold">{stage}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black">Segmentation Over Broadcasts</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Treating a new subscriber the same as a 3-year loyal customer leads to high unsubscribe rates. We partition lists based on CRM lifecycle stage, past purchase behavior, and content interactions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Persuasion Through Utility</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Subscribers remain engaged when your emails provide genuine value. We balance promotional offers with educational breakdowns, industry insights, and useful resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. AUTOMATION CANVAS */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Label>Workflow Architecture</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Automated Behavior Triggers</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  The best email systems respond dynamically to customer actions. We build multi-branch logic that delivers the right message at the exact moment of intent.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-white/10 bg-white/[.03] p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Automation Logic</p>
                  <div className="mt-6 space-y-4">
                    {workflowNodes.map(([node, desc], i) => (
                      <div key={node} className="border-b border-white/10 pb-3 last:border-0">
                        <div className="flex justify-between text-sm font-bold">
                          <span>{node}</span>
                          <span className="text-brand font-mono text-xs">Node 0{i + 1}</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. EMAIL SERVICES GRID */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Full-spectrum capability" title="End-to-end email and lifecycle marketing services.">
              From initial strategy design and copywriting to technical deliverability authentication and automated workflow engineering.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {emailServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Audit My Email Ecosystem <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. DELIVERABILITY & INBOX HYGIENE */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Heading label="Technical Rigor" title="Protecting your domain and primary inbox placement." />
                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  The best creative copy is useless if it lands in the spam folder. We enforce domain authentication, monitor sender reputation, and maintain clean list hygiene to ensure high delivery.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-border bg-background p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Technical Authentication Standards</p>
                  <div className="mt-6 space-y-4">
                    {deliverabilityPillars.map(([pillar, desc]) => (
                      <div key={pillar} className="border-b border-border pb-3 last:border-0">
                        <p className="text-sm font-bold text-foreground">{pillar}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. PERFORMANCE METRICS */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Commercial Focus" title="Key metrics we monitor to drive lifecycle growth.">
              We focus on metrics that reflect true commercial progress rather than vanity opens alone.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {emailMetrics.map(([title, text]) => (
                <div key={title} className="bg-background p-7">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. PRODUCTION PROCESS */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Label>Predictable Execution</Label>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage email production process.</h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(([n, a, b]) => (
                <div key={n} className="bg-slate-950 p-7">
                  <span className="font-mono text-xs text-brand">{n}</span>
                  <h3 className="mt-6 text-lg font-black">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-white">
              Launch Email Strategy <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated Growth" title="How email powers your digital marketing ecosystem.">
              Email marketing amplifies every channel across acquisition, conversion, and retention practices.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Lead Generation', 'Capture target subscribers and nurture cold leads into sales-ready opportunities.', '/services/lead-generation', 'Explore Lead Generation'],
                ['CRM & Automation', 'Sync subscriber activities directly with sales pipelines and contact records.', '/services/crm-automation', 'Explore CRM & Automation'],
                ['Conversion Rate Optimization', 'Ensure email landing pages and offer pages are engineered for maximum action.', '/services/conversion-rate-optimization', 'Explore CRO'],
                ['Content Production', 'Repurpose whitepapers, podcasts, and video assets into engaging newsletters.', '/services/content-production', 'Explore Content Production'],
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
            <Heading label="Frequently asked questions" title="Answers to common email marketing questions.">
              Direct clarity on how our lifecycle strategy and email services operate.
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
              Talk to an Email Specialist <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="Email marketing strategy abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Don't let customer relationships disappear</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to build an email system that drives customer retention?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our lifecycle strategists. We will evaluate your current email ecosystem and outline an automated growth roadmap for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Build My Email Strategy <ArrowRight className="size-4" />
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