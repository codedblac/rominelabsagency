import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Camera, 
  Check, 
  ChevronRight, 
  Film, 
  Grid, 
  Layers, 
  Layout, 
  Mic, 
  Music, 
  Package, 
  PenTool, 
  Play, 
  Radio, 
  Repeat, 
  Search, 
  Send, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Users, 
  Video, 
  Volume2, 
  Workflow, 
  Zap 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Production Services | Romine Labs',
  description: 'Strategic video production, short-form Reels & TikToks, podcast production, product photography, motion graphics, and content repurposing built for modern growth.',
  alternates: { canonical: 'https://rominelabs.com/services/content-production' },
  openGraph: {
    title: 'Content Production Services | Romine Labs',
    description: 'Transform ideas, podcasts, products, and brand stories into polished digital creative assets that capture attention and drive business outcomes.',
    url: 'https://rominelabs.com/services/content-production',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Production Services | Romine Labs',
    description: 'Cinematic video production, short-form clips, brand storytelling, motion design, and multi-channel creative systems.',
  },
}

const productionServices = [
  ['Full-Service Video Production', 'Concept development, scriptwriting, filming, interviews, talking-head videos, brand films, and promotional video assets.', Video],
  ['Short-Form Video Engine', 'High-pacing edits, hooks, captions, visual pattern-interrupts, and platform-native formatting for Reels, TikTok, and Shorts.', Film],
  ['Podcast Production & Clipping', 'Audio cleanup, multi-camera editing support, show notes, audiograms, and short-form video clip extraction.', Mic],
  ['Content Repurposing Systems', 'Extracting maximum value from long-form webinars, interviews, keynotes, and articles into multi-channel creative assets.', Repeat],
  ['Commercial Product Visuals', 'High-impact product photography, demonstration videos, feature showcases, lifestyle visuals, and e-commerce creative.', Package],
  ['Brand Storytelling & Culture', 'Authentic founder stories, customer testimonials, behind-the-scenes features, and documentary-style brand narratives.', Users],
  ['Motion Design & Animation', 'Animated typography, lower thirds, title cards, logo animations, data visualizations, and kinetic social assets.', Sparkles],
  ['Creative Graphic Design', 'Carousel design, infographics, presentation graphics, campaign creative, digital banners, and promotional layouts.', PenTool],
  ['Pre-Production & Scripting', 'Creative briefs, storyboards, messaging frameworks, hook development, shot lists, and logistical scheduling.', Workflow],
  ['Post-Production & Assembly', 'Fine cutting, color grading, sound design, audio leveling, subtitles, captions, motion graphics, and multi-format exports.', Layers],
] as const

const productionProcess = [
  ['01', 'Discovery & Creative Brief', 'We define business objectives, audience profiles, core messaging, distribution channels, and creative references.'],
  ['02', 'Concept & Scripting', 'We develop creative concepts, draft structured scripts, establish hooks, and build comprehensive shot lists.'],
  ['03', 'Pre-Production Setup', 'We organize logistics, talent, framing guidelines, lighting plans, audio requirements, and production schedules.'],
  ['04', 'Production & Capture', 'We execute the shoot with disciplined creative supervision, focusing on high-quality audio, lighting, and framing.'],
  ['05', 'Post-Production Assembly', 'We edit rough and fine cuts, apply color grading, level audio, add motion graphics, and burn in platform captions.'],
  ['06', 'Quality Control & Review', 'Assets pass through strict brand consistency, message clarity, spelling, aspect ratio, and technical QA checks.'],
  ['07', 'Platform Formatting', 'We export final deliverables in required aspect ratios (9:16, 16:9, 1:1, 4:5) tailored to target platforms.'],
  ['08', 'Distribution & Insights', 'Assets deploy across social, web, email, or paid media, with performance data informing the next creative cycle.'],
] as const

const formatLibrary = [
  ['Vertical Video (9:16)', 'Optimized for Instagram Reels, TikTok, and YouTube Shorts.'],
  ['Horizontal Video (16:9)', 'Built for YouTube, website hero backgrounds, and sales presentations.'],
  ['Square & Feed (1:1 / 4:5)', 'Tailored for Meta feeds, LinkedIn posts, and display environments.'],
  ['Interactive Carousels', 'Multi-slide educational breakdowns, case studies, and visual frameworks.'],
  ['Audio & Audiograms', 'Clean podcast snippets, voiceover clips, and visual soundwaves.'],
  ['Motion Graphics', 'Kinetic typography, data animations, and animated brand overlays.'],
] as const

const repurposingMatrix = [
  ['1 Long Webinar or Keynote', '3 Short-Form Video Clips + 2 Carousels + 1 LinkedIn Article'],
  ['1 Podcast Episode', '4 Vertical Clips + 2 Quote Graphics + 1 Audio Snippet'],
  ['1 Customer Interview', '1 Case Study Video + 2 Social Proof Graphics + 1 Sales Asset'],
  ['1 In-Depth Blog / Guide', '1 Explainer Script + 1 Carousel + 3 Social Quote Posts'],
] as const

const faqs = [
  ['What does content production include at Romine Labs?', 'Our content production services cover the full creative lifecycle: strategy, scripting, video production, short-form editing, podcast clipping, product photography, graphic design, motion animation, color grading, audio cleanup, and platform formatting.'],
  ['How is content production different from social media management?', 'Social media management focuses on channel strategy, scheduling, community management, and publishing. Content production is the creative studio engine that actually conceptualizes, shoots, edits, and designs the visual assets that power those channels.'],
  ['Can you repurpose our existing podcasts, webinars, or videos?', 'Yes. Content repurposing is one of our core specialties. We take your long-form webinars, podcasts, keynotes, or interviews and extract high-value micro-assets—including short-form video clips, carousels, and graphics.'],
  ['What video formats do you produce?', 'We produce content across all modern aspect ratios and styles: vertical 9:16 videos (Reels, TikTok, Shorts), horizontal 16:9 videos (YouTube, website, sales assets), square 1:1 feed posts, motion graphics, and animated explainers.'],
  ['Do you write scripts and develop creative concepts?', 'Yes. Great production starts before the camera rolls. We handle creative briefing, messaging frameworks, hook development, storyboarding, and full scriptwriting to ensure every video communicates clearly.'],
  ['How does the approval and revision process work?', 'All creative assets pass through an initial internal QA review before being uploaded to a clear client review workspace. You review drafts, leave timestamped feedback, and approve final cuts prior to export.'],
  ['Can you work with our existing brand guidelines and assets?', 'Absolutely. We review your existing visual identity, color palette, typography, logo packages, and brand voice guidelines to ensure every asset feels 100% native to your company.'],
  ['How long does a content production project take?', 'Timelines depend on project scope. Short-form editing batches or graphic repurposing typically run on 5- to 10-business-day turnarounds. Full video production campaigns or brand films take 3 to 6 weeks from brief to final export.'],
  ['How do social media, paid media, and SEO benefit from content production?', 'High-quality visual production powers every growth channel: it increases organic social watch time, lowers paid ad Cost Per Acquisition (CPA) with engaging creatives, and boosts website conversions through clear product and brand videos.'],
  ['How do we get started with a content production project?', 'We begin with an initial strategy call to review your commercial goals, target distribution channels, and creative requirements. From there, we present a clear creative brief, production roadmap, and scope of work.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Content Production Services', url: 'https://rominelabs.com/services/content-production', description: metadata.description },
    { '@type': 'Service', name: 'Content Production Services', serviceType: 'Creative Content Production Studio & Video Engineering', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/content-production' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Content Production', item: 'https://rominelabs.com/services/content-production' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }

export default function ContentProductionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="Cinematic video production and creative content studio" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <Video className="size-3.5 text-brand" /> CONTENT PRODUCTION
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                Ideas Deserve <span className="text-brand">Better Execution.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We develop and produce strategic visual assets—from short-form video and podcasts to brand films and motion design—built to command attention and communicate value.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Start a Content Project <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / CREATIVE INFRASTRUCTURE */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="Creative infrastructure" title="Content is the fuel behind your marketing system." />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                Great marketing relies on high-quality creative assets. Whether running paid ads, publishing organic social content, sending email campaigns, or optimizing web conversions, production quality directly shapes how prospective customers perceive your brand authority and trustworthiness.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Inconsistent visual presentation damaging brand perception.',
                  'Boring video hooks driving low watch-time retention.',
                  'Valuable long-form podcasts and webinars gathering dust.',
                  'Weak ad creative driving up Cost Per Acquisition.',
                  'Product photos that fail to demonstrate value.',
                  'Unscripted, rambling video content with no message.',
                  'Poor audio quality ruining otherwise great interviews.',
                  'Single-use assets that never get repurposed across channels.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                We bridge the gap between creative strategy and technical production—delivering polished assets engineered specifically for the channels where your audience spends time.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. CONTENT FORMAT LIBRARY WALL */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Multi-format studio" title="Assets engineered for every digital touchpoint.">
              We produce multi-channel assets designed to maintain message clarity and visual cohesion across all distribution channels.
            </Heading>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {formatLibrary.map(([title, desc]) => (
                <div key={title} className="flex flex-col justify-between border border-border bg-background p-8">
                  <div>
                    <Grid className="size-6 text-brand" />
                    <h3 className="mt-6 text-2xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                  </div>
                  <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-brand">
                    Start Format <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. PRODUCTION SERVICES */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Full-studio capability" title="From initial creative brief to final master export.">
              Everything required to plan, capture, edit, animate, and format high-converting visual and audio content.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {productionServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Plan My Production <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. PODCAST & VIDEO ENGINE */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Label>Video & Podcast Engine</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Turn Long-Form Content Into a Micro-Asset Engine</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Long-form interviews, podcasts, keynotes, and webinars contain invaluable insights. We extract high-performing micro-clips designed to capture immediate interest across short-form feeds.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Scripting & Hook Strategy', 'Writing compelling openers and narrative arcs that hook viewers in the first 3 seconds.'],
                    ['Precision Video Editing', 'High-pacing cuts, B-roll insertion, visual pattern interrupts, and sound effects.'],
                    ['Burn-in Subtitles & Captions', 'Animated, highly readable captions engineered for silent feed environments.'],
                    ['Audio Processing & Leveling', 'Noise reduction, EQ balancing, and crisp vocal enhancement for clear sound.'],
                    ['Multi-Camera Assembly', 'Editing multi-person podcast setups and interview angles seamlessly.'],
                    ['Thumbnails & Show Assets', 'Designing custom video thumbnails, graphic cards, and promotional assets.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="border border-white/10 bg-white/[.03] p-6">
                      <Sparkles className="size-5 text-brand" />
                      <h3 className="mt-4 font-black text-lg">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. CONTENT REPURPOSING MATRIX */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Heading label="Repurposing Architecture" title="Create once. Multiply creative impact." />
                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  A single high-quality production session should fuel weeks of marketing. Our repurposing architecture systematic transforms one anchor asset into a continuous pipeline of micro-content.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-border bg-background p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Repurposing Output</p>
                  <div className="mt-6 space-y-4">
                    {repurposingMatrix.map(([source, output]) => (
                      <div key={source} className="border-b border-border pb-4 last:border-0">
                        <p className="text-xs font-mono text-muted-foreground">{source}</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{output}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. PRODUCTION WORKFLOW PROCESS */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Label>Predictable Execution</Label>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage production process.</h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {productionProcess.map(([n, a, b]) => (
                <div key={n} className="bg-slate-950 p-7">
                  <span className="font-mono text-xs text-brand">{n}</span>
                  <h3 className="mt-6 text-lg font-black">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-white">
              Start Production Workflow <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated growth" title="How content production powers your digital growth engine.">
              Creative production works best when directly integrated with distribution and conversion channels.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Social Media Management', 'Power your social strategy with platform-native video, carousels, and graphics.', '/services/social-media-management', 'Explore Social Media'],
                ['Paid Media', 'Fuel your advertising campaigns with high-converting video and image ad creatives.', '/services/paid-media', 'Explore Paid Media'],
                ['Conversion Rate Optimization', 'Enhance website conversion rates with product videos, brand stories, and visual proof.', '/services/conversion-rate-optimization', 'Explore CRO'],
                ['Web Development', 'Integrate high-speed, crisp visual assets into custom Next.js web applications.', '/services/web-development', 'Explore Web Engineering'],
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
        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
            <Heading label="Frequently asked questions" title="Answers to common production questions.">
              Direct clarity on how our creative content studio operates.
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
              Talk to a Content Producer <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 10. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="Creative production abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Your next great piece of content starts with an idea</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to elevate your brand with professional creative production?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our creative directors. We will evaluate your goals and build a clear content production roadmap for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Start a Content Project <ArrowRight className="size-4" />
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