import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Calendar, 
  Camera, 
  Check, 
  ChevronRight, 
  Clock,
  Cpu, 
  FileText, 
  Filter,
  Globe, 
  HeartHandshake, 
  Layers, 
  Layout, 
  Megaphone, 
  MessageCircle, 
  MessageSquare, 
  PenTool, 
  Play, 
  Radio, 
  Repeat, 
  Search, 
  Send, 
  Share2, 
  ShieldCheck, 
  ShoppingBag, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Video, 
  Workflow, 
  Zap 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media Management Services | Romine Labs',
  description: 'Strategic social media management, content creation, short-form video production, community management, content repurposing, and social growth architecture for ambitious brands.',
  alternates: { canonical: 'https://rominelabs.com/services/social-media-management' },
  openGraph: {
    title: 'Social Media Management Services | Romine Labs',
    description: 'Transform your social channels into a reliable growth engine. Strategic content systems, short-form video, community management, and analytics.',
    url: 'https://rominelabs.com/services/social-media-management',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services | Romine Labs',
    description: 'Build a social presence people remember. Strategic content, Reels, TikTok, LinkedIn, and community operating systems.',
  },
}

const socialServices = [
  ['Social Media Strategy & Positioning', 'Comprehensive channel audits, audience research, content pillar architecture, brand voice design, and publishing cadences.', Target],
  ['Content Planning & Editorial Systems', 'Structured monthly content calendars, theme development, campaign mapping, and transparent approval workflows.', Calendar],
  ['Short-Form Video Production', 'Scripting, hook strategy, editing, visual pattern-interrupts, captions, and platform-native formatting for Reels, TikTok, and Shorts.', Video],
  ['Multi-Format Content Design', 'Branded carousels, static graphics, motion snippets, story templates, and visual identity systems tailored per platform.', PenTool],
  ['Content Repurposing Operating System', 'Extracting maximum value from webinars, podcasts, articles, and long-form videos into multi-platform micro-assets.', Repeat],
  ['Conversion Copywriting', 'High-engagement captions, hooks, descriptions, video scripts, carousel text, and intent-focused Calls to Action.', FileText],
  ['Publishing & Account Administration', 'Cross-platform scheduling, formatting, hashtag/keyword optimization, and metadata management across all target profiles.', Send],
  ['Community Management & Moderation', 'Active comment moderation, direct message routing, brand conversation monitoring, and audience relationship nurturing.', MessageCircle],
  ['Social Listening & Brand Intelligence', 'Tracking industry trends, brand mentions, competitor positioning, recurring customer objections, and audience conversations.', Radio],
  ['Analytics & Performance Optimization', 'In-depth measurement of reach, engagement velocity, watch time, profile clicks, and conversion attribution to refine creative output.', BarChart3],
] as const

const socialProcess = [
  ['01', 'Discovery & Audit', 'We inspect existing channels, review historic engagement, analyze competitor positioning, and clarify business objectives.'],
  ['02', 'Strategic Blueprint', 'We establish content pillars, platform selection, brand voice guidelines, visual standards, and posting cadences.'],
  ['03', 'Content Production', 'We draft scripts, write conversion copy, design visual assets, and edit platform-native short-form video content.'],
  ['04', 'Review & Quality QA', 'All content passes through strict brand consistency checks, caption reviews, and client approval protocols.'],
  ['05', 'Scheduling & Publishing', 'We format, optimize, and schedule content across all active platforms at peak audience engagement windows.'],
  ['06', 'Community Engagement', 'We actively manage comments, initiate conversations, monitor messages, and maintain brand presence.'],
  ['07', 'Analytics & Insights', 'We evaluate watch time, saves, shares, profile visits, and conversion actions to uncover high-performing patterns.'],
  ['08', 'Optimization Loop', 'We double down on validated content formats and continuously refine creative strategy for compounding returns.'],
] as const

const platformStrategies = [
  ['Instagram', 'Visual storytelling, high-performing Reels, educational carousels, authentic Stories, and community building.', Camera],
  ['TikTok', 'Hook-driven short-form video, native trends, conversational storytelling, and organic audience discovery.', Video],
  ['LinkedIn', 'Executive thought leadership, B2B authority building, industry insights, and corporate positioning.', Users],
  ['YouTube Shorts', 'Educational video clips, podcast highlights, evergreen discovery, and channel subscriber growth.', Play],
  ['Facebook', 'Community management, group engagement, short-form Reels distribution, and local/global brand building.', Globe],
] as const

const contentPillars = [
  ['EDUCATE', 'Actionable tutorials, industry insights, and step-by-step breakdowns that build immediate utility.', Zap],
  ['AUTHORITY', 'Case studies, founder perspectives, counter-intuitive opinions, and deep domain expertise.', ShieldCheck],
  ['CONNECT', 'Behind-the-scenes culture, brand values, origin stories, and humanized company contexts.', Users],
  ['PROVE', 'Customer testimonials, transformation stories, metric achievements, and client process proof.', TrendingUp],
  ['ENTERTAIN', 'Memorable, platform-native narratives, relatable industry humor, and engaging visual hooks.', Sparkles],
  ['CONVERT', 'Direct offers, consultation invites, product showcases, and friction-free lead pathways.', Target],
] as const

const repurposingMatrix = [
  ['1 Long Podcast / Webinar', '3–5 Short-Form Video Clips (Reels / TikTok / Shorts)'],
  ['1 In-Depth Industry Article', '2 Carousel Posts + 1 LinkedIn Thought Leadership Article'],
  ['1 Client Case Study', '1 Video Walkthrough + 1 Proof Graphic + 1 Quote Slide'],
  ['1 Keynote / Interview', '5 Social Quote Graphics + 3 Micro-Clips + 1 Newsletter Feature'],
] as const

const faqs = [
  ['What does social media management actually include?', 'Our social media management services cover the full content lifecycle: strategy development, editorial planning, graphic design, short-form video editing, copywriting, publishing, community management, social listening, and monthly analytics reporting.'],
  ['Do you create and edit short-form videos (Reels, TikToks, Shorts)?', 'Yes. Short-form video is a core component of modern social growth. We handle script writing, hook development, video editing, pacing, subtitles, visual effects, and platform-native formatting.'],
  ['Can you repurpose our existing podcasts or long-form videos?', 'Absolutely. Our Content Repurposing Operating System extracts high-value moments from webinars, podcasts, keynotes, and interviews, turning a single long-form asset into dozens of micro-assets across channels.'],
  ['Which social media platforms should my business focus on?', 'Platform selection depends on your business model, target audience, and content format strengths. We evaluate your market to recommend the optimal mix—whether that is Instagram and TikTok for consumer brands, or LinkedIn and YouTube for B2B enterprises.'],
  ['How does the content approval process work?', 'All planned content is presented in a clear monthly content calendar complete with copy, graphics, video previews, and target dates. You retain full review and approval authority before anything is scheduled or published.'],
  ['Do you handle comment moderation and direct messages?', 'Yes. Community management is critical for converting attention into trust. We monitor comments, answer common questions, route sales inquiries, and engage with relevant accounts according to agreed brand guidelines.'],
  ['Do you guarantee viral posts or massive follower growth?', 'No legitimate agency can guarantee viral posts or specific follower counts, as platform algorithms evolve constantly. Instead, we focus on building repeatable, high-quality content systems that reliably attract target prospects and generate business opportunities.'],
  ['How do social media management and paid advertising work together?', 'Organic social media builds long-term brand authority, community trust, and content insights. High-performing organic creative can then be amplified through Paid Media campaigns to scale customer acquisition efficiently.'],
  ['What metrics do you track in monthly reports?', 'We look beyond vanity metrics to track meaningful signals: reach velocity, engagement rate, video watch time, content saves/shares, profile link clicks, and referral traffic to evaluate true business impact.'],
  ['How do we get started with Romine Labs?', 'We begin with an initial discovery call and a comprehensive audit of your current social channels. From there, we present a customized strategy blueprint and content roadmap tailored to your commercial goals.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Social Media Management Services', url: 'https://rominelabs.com/services/social-media-management', description: metadata.description },
    { '@type': 'Service', name: 'Social Media Management Services', serviceType: 'Social Media Strategy & Content Growth Operating System', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/social-media-management' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Social Media Management', item: 'https://rominelabs.com/services/social-media-management' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

// Brand helper primitives
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-[#C69A52]" />
      <span className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? 'text-[#D8B978]' : 'text-[#C69A52]'}`}>
        {children}
      </span>
    </div>
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
  description?: React.ReactNode
  onDark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl leading-[1.12] ${onDark ? 'text-white' : 'text-[#0B1B35]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 font-sans text-base leading-relaxed sm:text-lg ${onDark ? 'text-[#687386]' : 'text-[#687386]'}`}>
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
      className={`group inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
        onDark ? 'text-white hover:text-[#C69A52]' : 'text-[#0B1B35] hover:text-[#C69A52]'
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1.5" />
    </Link>
  )
}

// Visual Component 1: Content Ecosystem Diagram
function ContentEcosystemVisual() {
  const steps = [
    { num: '01', title: 'Strategy & Positioning', desc: 'Audience analysis & voice guidelines' },
    { num: '02', title: 'Pillar Architecture', desc: '6 core commercial content pillars' },
    { num: '03', title: 'Creative Production', desc: 'Short-form video, carousels & copy' },
    { num: '04', title: 'Publishing & Cadence', desc: 'Platform-native scheduling' },
    { num: '05', title: 'Community Nurture', desc: 'Active comment & DM routing' },
    { num: '06', title: 'Analytics & Scaling', desc: 'Saves, shares & lead attribution' },
  ]

  return (
    <div className="mt-12 border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">System Diagram</span>
          <h3 className="font-serif text-lg text-white">Social Growth Operating Ecosystem</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase text-[#687386] sm:inline-block">Illustrative Framework</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {steps.map((s, i) => (
          <div key={s.num} className="relative border border-white/10 bg-[#0B1B35] p-4 text-left">
            <span className="font-mono text-[10px] font-bold text-[#C69A52]">{s.num}</span>
            <p className="mt-2 font-serif text-sm font-normal text-white">{s.title}</p>
            <p className="mt-1 font-sans text-[11px] text-[#687386]">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#C69A52]/40">
                <ChevronRight className="size-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Visual Component 2: Content Calendar UI Mockup
function ContentCalendarMockup() {
  const posts = [
    { platform: 'Instagram Reel', topic: '3 Friction Points Lowering Landing Page Conversion', format: '9:16 Video', date: 'Oct 12', status: 'PUBLISHED' },
    { platform: 'LinkedIn Article', topic: 'Why Disconnected Agencies Impair Enterprise Growth', format: 'Thought Leadership', date: 'Oct 14', status: 'SCHEDULED' },
    { platform: 'TikTok Short', topic: 'Behind The Scenes: Short-Form Editing Pipeline', format: '9:16 Video', date: 'Oct 15', status: 'APPROVED' },
    { platform: 'Carousel Post', topic: 'The 6-Pillar Framework For Organic Authority', format: '1:1 Visual Grid', date: 'Oct 17', status: 'IN PRODUCTION' },
  ]

  return (
    <div className="border border-[#E4E7EB] bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div className="flex items-center gap-3">
          <Calendar className="size-5 text-[#C69A52]" />
          <div>
            <h3 className="font-serif text-base font-normal text-[#0B1B35]">Editorial Calendar Workstation</h3>
            <p className="font-sans text-xs text-[#687386]">Live Content Pipeline & Approval Control</p>
          </div>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C69A52] bg-[#F7F5F0] px-3 py-1">
          Example Dashboard UI
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {posts.map((post, idx) => (
          <div key={idx} className="flex flex-col gap-3 border border-[#E4E7EB] bg-[#F7F5F0] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C69A52]">0{idx + 1}</span>
              <div>
                <p className="font-serif text-sm font-normal text-[#0B1B35]">{post.topic}</p>
                <div className="mt-1 flex items-center gap-2 font-sans text-xs text-[#687386]">
                  <span className="font-semibold text-[#0B1B35]">{post.platform}</span>
                  <span>•</span>
                  <span>{post.format}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="font-mono text-xs text-[#687386]">{post.date}</span>
              <span className={`font-mono text-[10px] font-bold px-2.5 py-1 ${
                post.status === 'PUBLISHED' ? 'bg-[#0B1B35] text-white' :
                post.status === 'SCHEDULED' ? 'bg-[#C69A52] text-[#0B1B35]' : 'bg-white border border-[#E4E7EB] text-[#111827]'
              }`}>
                {post.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Visual Component 3: Social Analytics Metric Panel
function SocialAnalyticsPanel() {
  return (
    <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C69A52]">Illustrative Example</span>
          <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Social Growth Velocity Panel</h3>
        </div>
        <BarChart3 className="size-5 text-[#C69A52]" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Watch Time Completion</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">78.4%</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">+12.2% vs prior cycle</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Content Saves & Shares</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">4,820</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">High viral intent signal</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Profile Link Inquiries</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">142</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Qualified buyer traffic</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Pipeline Attribution</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">3.4x</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Organic brand uplift</p>
        </div>
      </div>
    </div>
  )
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-white text-[#111827]">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[62vh] overflow-hidden bg-[#0B1B35] text-white">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero-data.png" 
              alt="Social media content production studio environment" 
              fill 
              priority 
              sizes="100vw" 
              className="object-cover object-center opacity-25 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/85 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <Eyebrow onDark>Social Media Management</Eyebrow>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Build a social presence <span className="text-[#C69A52] font-serif italic">people remember.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
                We design, produce, publish, and optimize platform-native social content built to command attention, cultivate community trust, and drive commercial opportunities.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Social Strategy</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / OPERATING SYSTEM */}
        {/* ========================================== */}
        <section className="border-b border-[#E4E7EB] bg-white py-20 lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Strategic Positioning" 
                  title="Social media is an operating system, not just a feed." 
                />
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                  Posting random images with generic captions produces random results. To build meaningful brand equity, your social channels require a structured content growth system—connecting strategic positioning, high-impact creative, platform-native video, active community engagement, and performance analytics.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Inconsistent posting schedules destroying organic reach.',
                    'Lack of clear content pillars and brand voice guidelines.',
                    'Generic graphics that blend into feed noise.',
                    'Missing short-form video (Reels, TikTok, YouTube Shorts).',
                    'Unanswered comments and missed buyer leads.',
                    'Single-use content that never gets repurposed.',
                    'Zero alignment between social traffic and commercial sales.',
                    'Vanity metrics prioritized over business outcomes.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 border-t border-[#E4E7EB] pt-3 font-sans text-sm font-medium text-[#111827]">
                      <span className="font-mono text-xs font-bold text-[#C69A52]">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-l-2 border-[#C69A52] bg-[#F7F5F0] p-6 font-sans text-sm leading-relaxed text-[#687386]">
                  <strong className="text-[#0B1B35]">The Romine Standard:</strong> We operate as your dedicated social media growth engine—turning audience attention into measurable brand authority and qualified business leads.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 3. SYSTEM DIAGRAM SECTION */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-16 text-white border-b border-white/10">
          <Container>
            <ContentEcosystemVisual />
          </Container>
        </section>

        {/* ========================================== */}
        {/* 4. PLATFORM STRATEGIES */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Channel Execution" 
              title="One overarching strategy. Platform-native content."
              description="Content should never be lazily cross-posted without adaptation. We tailor creative execution specifically to each platform's unique culture and algorithm behavior."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platformStrategies.map(([title, desc, Icon]) => (
                <div key={title} className="flex flex-col justify-between border border-[#E4E7EB] bg-white p-8 transition-all hover:border-[#C69A52]">
                  <div>
                    <Icon className="size-6 text-[#C69A52]" />
                    <h3 className="mt-6 font-serif text-2xl font-normal text-[#0B1B35]">{title}</h3>
                    <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E4E7EB]">
                    <ArrowLink href="/contact">Build Strategy</ArrowLink>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 5. EDITORIAL WORKSTATION & REPURPOSING */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Editorial Systems" 
                  title="Content planning with zero friction."
                  description="Complete visibility over your content pipeline. Our monthly editorial calendars ensure brand alignment, quality control, and structured approval workflows."
                />
                <div className="mt-8 border-l-2 border-[#C69A52] bg-[#F7F5F0] p-6 font-sans text-xs leading-relaxed text-[#687386]">
                  <strong className="text-[#0B1B35]">Repurposing Advantage:</strong> Extract maximum leverage from long-form assets (podcasts, webinars, interviews) into multi-channel micro-assets.
                </div>
              </div>
              <div className="lg:col-span-7">
                <ContentCalendarMockup />
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 6. FULL SERVICE SCOPE */}
        {/* ========================================== */}
        <section id="services" className="bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Complete Capability" 
              title="Everything required to build and maintain a competitive social presence."
              description="From creative direction and video production to community moderation and monthly analytics reporting."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-3">
              {socialServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-white p-7 transition hover:bg-[#F7F5F0]">
                  <Icon className="size-5 text-[#C69A52]" />
                  <h3 className="mt-6 font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <ArrowLink href="/contact">Plan My Content Strategy</ArrowLink>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 7. CONTENT PILLARS SYSTEM */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <Eyebrow onDark>Strategic Architecture</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-5xl leading-[1.12]">
                  The 6 Core Content Pillars
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#687386]">
                  A balanced content mix ensures your social presence does not become monotonous. We engineer a tailored blend of content pillars aligned to your business goals.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {contentPillars.map(([title, desc, Icon]) => (
                    <div key={title} className="border border-white/10 bg-[#142B4A]/60 p-6 backdrop-blur-md">
                      <Icon className="size-5 text-[#C69A52]" />
                      <h3 className="mt-4 font-serif text-lg font-normal text-white">{title}</h3>
                      <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 8. REPURPOSING MATRIX VISUAL */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Repurposing Engine" 
                  title="Turn one long-form asset into a multi-channel content engine."
                  description="Extract maximum leverage from your existing long-form intellectual property. We transform webinars, podcasts, keynotes, and whitepapers into dozens of high-performing social assets."
                />
              </div>
              <div className="lg:col-span-7">
                <div className="border border-[#E4E7EB] bg-white p-6 sm:p-8">
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#C69A52]">Repurposing Matrix</p>
                  <div className="mt-6 space-y-4">
                    {repurposingMatrix.map(([source, output]) => (
                      <div key={source} className="border-b border-[#E4E7EB] pb-4 last:border-0">
                        <p className="font-mono text-xs text-[#687386]">{source}</p>
                        <p className="mt-1 font-serif text-sm font-normal text-[#0B1B35]">{output}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 9. PRODUCTION WORKFLOW PROCESS */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <Eyebrow onDark>Predictable Execution</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal tracking-tight sm:text-5xl text-white">
              Our 8-stage social operating process.
            </h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {socialProcess.map(([n, a, b]) => (
                <div key={n} className="bg-[#0B1B35] p-7">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{n}</span>
                  <h3 className="mt-6 font-serif text-lg font-normal text-white">{a}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link 
                href="/contact" 
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Launch Your Social Engine</span>
                <ArrowRight className="size-4 text-[#C69A52]" />
              </Link>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 10. SOCIAL ANALYTICS & DASHBOARD */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Measurement & Attribution" 
              title="Measuring what moves the commercial needle."
              description="We look beyond vanity likes to track watch time velocity, content saves, profile link clicks, and pipeline lead attribution."
            />
            <div className="mt-12">
              <SocialAnalyticsPanel />
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 11. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Integrated Growth" 
              title="How social media powers your digital growth engine."
              description="Organic social media works best when integrated with your broader digital marketing stack."
            />
            <div className="mt-14 divide-y divide-[#E4E7EB] border-y border-[#E4E7EB]">
              {[
                ['Paid Media', 'Amplify top-performing organic social posts with targeted ad budget to accelerate leads.', '/services/paid-media', 'Explore Paid Media'],
                ['Conversion Rate Optimization', 'Turn social profile visits and landing page traffic into high-converting lead actions.', '/services/conversion-rate-optimization', 'Explore CRO'],
                ['SEO Services', 'Build brand search demand and authority that drives higher organic search traffic.', '/services/seo', 'Explore SEO Services'],
                ['Analytics & Tracking', 'Track full-funnel customer journeys from social click to closed deal in your CRM.', '/services/analytics-tracking', 'Explore Analytics'],
              ].map(([a, b, href, c]) => (
                <div key={a} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr_220px] lg:items-center">
                  <h3 className="font-serif text-xl font-normal text-[#0B1B35]">{a}</h3>
                  <p className="font-sans text-xs leading-relaxed text-[#687386]">{b}</p>
                  <ArrowLink href={href}>{c}</ArrowLink>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="bg-white py-20 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <SectionHeading 
                eyebrow="Frequently Asked Questions" 
                title="Answers to common social media questions."
                description="Direct clarity on how our social media management services operate."
              />
              <div className="mt-14 border-y border-[#E4E7EB]">
                {faqs.map(([q, a]) => (
                  <details key={q} className="group border-b border-[#E4E7EB] last:border-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-normal text-[#0B1B35] focus:outline-none [&::-webkit-details-marker]:hidden">
                      <span>{q}</span>
                      <ChevronRight className="size-5 shrink-0 text-[#C69A52] transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="max-w-3xl pb-6 pr-8 font-sans text-xs leading-relaxed text-[#687386]">{a}</p>
                  </details>
                ))}
              </div>
              <div className="mt-10">
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Talk to a Social Media Strategist</span>
                  <ArrowRight className="size-4 text-[#C69A52]" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 13. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
          <Image 
            src="/images/hero-data.png" 
            alt="Social media studio abstract background" 
            fill 
            sizes="100vw" 
            className="object-cover object-center opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/90 to-[#142B4A]/80" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Eyebrow onDark>Start With A Strategy</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white leading-[1.08]">
                Ready to build a social operating system that drives growth?
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                Book a strategic consultation with our social growth team. We will review your current channels and present a clear roadmap for your brand.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Social Strategy</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                >
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

      </main>
    </>
  )
}