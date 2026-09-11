import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Compass,
  FileSearch,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MousePointerClick,
  Network,
  Search,
  Settings2,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SEO Services | Technical, Local, E-commerce & Content SEO | Romine Labs",
  description:
    "Strategic SEO services covering technical SEO, on-page optimization, content, local and e-commerce SEO, SEO audits, migrations, AEO and conversion-focused organic growth.",
  alternates: {
    canonical: "https://rominelabs.com/services/seo",
  },
  openGraph: {
    title: "SEO Services | Romine Labs",
    description:
      "Build search visibility that attracts the right audience and turns organic traffic into measurable business outcomes.",
    url: "https://rominelabs.com/services/seo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Romine Labs",
    description:
      "Technical SEO, content, local, e-commerce, AEO and conversion-focused search strategy.",
  },
}

const services = [
  {
    icon: Wrench,
    title: "Technical SEO",
    summary: "Make the site easier for search engines to crawl, understand and index.",
    body:
      "We work through the technical foundation behind organic visibility: crawlability, indexability, architecture, redirects, canonicals, rendering, structured data, mobile experience, performance and the issues that can quietly limit a website's search potential.",
    items: [
      "Crawlability & indexability",
      "XML sitemaps & robots.txt",
      "Canonical URLs & redirects",
      "JavaScript rendering",
      "Internal linking & architecture",
      "Core Web Vitals & page speed",
      "Structured data",
      "International SEO foundations",
    ],
  },
  {
    icon: Target,
    title: "On-Page SEO",
    summary: "Align every important page with its topic, audience and search intent.",
    body:
      "On-page optimization goes beyond inserting keywords. We improve titles, headings, content structure, semantic relevance, internal links, images, URLs and page-level signals so visitors and search systems can understand the page quickly.",
    items: [
      "Title tags & meta descriptions",
      "H1/H2/H3 structure",
      "Search-intent alignment",
      "Keyword & semantic targeting",
      "Internal linking",
      "Image alt text & context",
      "Entity relationships",
      "Content freshness",
    ],
  },
  {
    icon: FileSearch,
    title: "Content SEO",
    summary: "Build useful content around topics, questions and commercial opportunities.",
    body:
      "We turn search demand into a content system. Research informs what should become service pages, landing pages, pillar content, supporting articles, FAQs, comparisons and content refreshes.",
    items: [
      "Topic & keyword research",
      "Content mapping",
      "Content briefs",
      "Service & landing pages",
      "Pillar pages",
      "Supporting articles",
      "FAQ content",
      "Content refreshes",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    summary: "Improve discoverability for customers searching in the places you serve.",
    body:
      "Local SEO connects your business, services and locations to local search intent. Where access is provided, we can help optimize your Google Business Profile and build a consistent local search presence.",
    items: [
      "Google Business Profile optimization",
      "Local landing pages",
      "NAP consistency",
      "Local citations",
      "Review strategy",
      "Local schema",
      "Location-based content",
      "Map visibility",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce SEO",
    summary: "Help products and categories earn visibility throughout the buying journey.",
    body:
      "E-commerce SEO has additional complexity: product variants, filters, category architecture, inventory states, duplicate URLs, product data and indexing. We optimize the system rather than treating every product page in isolation.",
    items: [
      "Product & category pages",
      "Product schema",
      "Product titles & descriptions",
      "Faceted navigation",
      "Internal linking",
      "Product indexing",
      "Out-of-stock handling",
      "Image & review SEO",
    ],
  },
  {
    icon: Globe2,
    title: "Enterprise & International SEO",
    summary: "Create scalable search systems for larger, multi-location or multi-market websites.",
    body:
      "Large websites need governance, templates and repeatable workflows. International websites also require careful country and language targeting, localization and hreflang implementation where appropriate.",
    items: [
      "Large-scale architecture",
      "SEO governance",
      "Template optimization",
      "International keyword research",
      "hreflang",
      "Country targeting",
      "Regional landing pages",
      "SEO monitoring at scale",
    ],
  },
]

const specialistServices = [
  ["SEO Audits", "Technical, content, authority, UX, competitors, indexation and conversion opportunities."],
  ["SEO Migration", "Redirect mapping, metadata migration, URL preservation, canonicals, sitemaps and post-launch monitoring."],
  ["New Website SEO", "SEO architecture, keyword mapping, URL planning and technical foundations before launch."],
  ["Redesign SEO", "Protect existing organic visibility while improving the site's structure and experience."],
  ["SEO Maintenance", "Ongoing technical checks, content updates, search monitoring and opportunity discovery."],
]

const framework = [
  ["01", "Foundation", "Technical SEO", Wrench],
  ["02", "Relevance", "Keyword research + search intent", Target],
  ["03", "Content", "Helpful + authoritative content", FileSearch],
  ["04", "Authority", "Links + mentions + reputation", Network],
  ["05", "Experience", "UX + performance + mobile", Zap],
  ["06", "Conversion", "Landing pages + CTAs + CRO", MousePointerClick],
  ["07", "Measurement", "Analytics + Search Console", BarChart3],
  ["08", "Optimization", "Continuous improvement", TrendingUp],
] as const

const process = [
  ["01", "Discovery", "Understand the business, audience, offer, markets, competitors, goals and existing performance."],
  ["02", "SEO Audit", "Identify technical issues, content gaps, ranking opportunities, authority gaps and UX constraints."],
  ["03", "Keyword & Intent Research", "Map search demand and intent to services, products, pages and topics."],
  ["04", "SEO Architecture", "Shape site hierarchy, URLs, content clusters and internal linking around the strategy."],
  ["05", "Optimization", "Improve technical SEO, metadata, content, internal links, schema and performance."],
  ["06", "Content Growth", "Create or optimize content around valuable topics and the questions customers actually ask."],
  ["07", "Authority Building", "Pursue legitimate links, mentions, digital PR and relevant partnerships without spam."],
  ["08", "Measurement & Optimization", "Monitor visibility, traffic, leads, conversions and technical health, then improve continuously."],
]

const auditCategories = [
  ["Technical", "Crawlability, indexability, speed, Core Web Vitals and architecture.", Wrench],
  ["Content", "Quality, relevance, search intent and content gaps.", FileSearch],
  ["On-Page", "Metadata, headings, internal links and images.", Layers3],
  ["Authority", "Backlink profile, referring domains and brand mentions.", Network],
  ["Competitors", "Rankings, content, SERP strategies and authority.", Compass],
  ["Conversion", "CTAs, forms, landing pages and user journeys.", MousePointerClick],
]

const tools = [
  "Google Search Console",
  "Google Analytics",
  "Google Business Profile",
  "Google Trends",
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "PageSpeed Insights",
  "Lighthouse",
]

const industries = [
  ["Small Businesses", "Prioritize high-intent local and service searches, clear location signals and pages that convert limited traffic into enquiries."],
  ["Startups", "Build the information architecture and content foundation early so SEO is part of the growth system rather than a later repair job."],
  ["Service Businesses", "Map services to commercial intent, strengthen local or regional visibility and connect search journeys to lead generation."],
  ["E-commerce Brands", "Optimize category and product architecture, product discovery, indexing, internal links and buying-intent content."],
  ["Professional Services", "Build topical depth and trust around expertise, services, locations and the questions prospective clients ask."],
  ["NGOs & Nonprofits", "Improve discoverability for programs, causes, resources, research and informational searches without sacrificing clarity."],
  ["Educational Organizations", "Structure programs, resources, expertise and informational content around how prospective learners search."],
  ["Personal Brands", "Connect expertise, biography, services, publications and content into a clear entity and topic footprint."],
  ["SaaS Companies", "Combine product, problem, comparison, use-case and educational content around the complete search journey."],
  ["Corporations", "Create scalable architecture, governance, templates and measurement across departments, markets and large page sets."],
  ["Local Businesses", "Connect services, locations, reviews, business information and local content to high-intent nearby searches."],
]

const deliverables = [
  "SEO audit and prioritized roadmap",
  "Keyword research and search-intent mapping",
  "Competitor research",
  "Technical SEO fixes",
  "On-page optimization",
  "Metadata optimization",
  "Content strategy and briefs",
  "Content optimization",
  "Internal linking strategy",
  "Structured data / schema implementation",
  "Local SEO optimization",
  "E-commerce SEO",
  "SEO migration support",
  "Performance optimization",
  "Reporting and measurement",
]

const mistakes = [
  ["Keyword stuffing", "Repeating a phrase does not make a page more useful. We optimize for relevance, intent, clarity and context."],
  ["Buying spammy backlinks", "Low-quality links can create risk without building meaningful authority. Sustainable authority comes from relevance and value."],
  ["Publishing low-quality AI content at scale", "AI can assist workflows, but useful content still needs expertise, accuracy, originality, editing and a reason to exist."],
  ["Ignoring technical SEO", "Strong content can struggle when important pages cannot be crawled, rendered, indexed or experienced properly."],
  ["Ignoring search intent", "A page can target the right phrase and still fail because it does not satisfy what the searcher actually wants."],
  ["Thin service pages", "Important commercial pages need enough substance to explain the offer, answer objections and support the decision."],
  ["Changing URLs without redirects", "A redesign or migration can unintentionally break established search paths when old URLs are not mapped carefully."],
  ["Measuring only rankings", "Rankings matter, but qualified traffic, enquiries, bookings, purchases and revenue are closer to the business outcome."],
]

const faqs = [
  ["What is SEO?", "Search engine optimization is the practice of improving a website's technical foundation, content, relevance, authority and user experience so search engines can understand it and people can discover useful pages through organic search. Good SEO connects search demand to business objectives rather than treating rankings as the end goal."],
  ["How does SEO work?", "SEO works by improving the signals that help search systems discover, crawl, understand and evaluate pages. That includes technical accessibility, site architecture, content quality, search intent, internal linking, authority, structured data, performance and the overall usefulness of the experience. Results depend on the website, market, competition and implementation."],
  ["How long does SEO take?", "SEO is usually a medium- to long-term channel rather than an instant traffic switch. The timeline varies with technical condition, competition, site history, authority, content production and the scale of changes. We focus on establishing a prioritized roadmap and measuring progress rather than promising an arbitrary date."],
  ["How much does SEO cost?", "There is no responsible universal price. Investment depends on website size, competition, industry, geographic targeting, number of locations, content requirements, technical complexity, e-commerce catalog size, existing authority and growth objectives. We scope the work around what the business actually needs."],
  ["Is SEO still important?", "Yes. People still use search to discover businesses, products, services, answers and comparisons. The search environment is also expanding into AI-assisted experiences, which makes clear information architecture, useful content, entity clarity and strong technical foundations increasingly important."],
  ["Can you guarantee Google rankings?", "No. No reputable agency can guarantee a specific Google ranking because search results are influenced by competition, search systems, user behavior, location, personalization and many factors outside an agency's control. We can control strategy, implementation, measurement and continuous improvement."],
  ["What does an SEO agency actually do?", "An SEO engagement can include technical audits and fixes, keyword and intent research, information architecture, on-page optimization, content strategy, content optimization, internal linking, structured data, local or e-commerce SEO, authority development, reporting and ongoing experimentation."],
  ["What is technical SEO?", "Technical SEO focuses on the systems that allow search engines to access, render, understand and index a website. It can include crawlability, indexability, site architecture, URLs, redirects, canonicals, sitemaps, robots rules, rendering, structured data, mobile experience and performance."],
  ["What is on-page SEO?", "On-page SEO improves individual pages and their relationship to search intent. It includes titles, headings, content structure, topical relevance, internal links, image context, URLs, metadata and other page-level elements that help both visitors and search systems understand the content."],
  ["What is off-page SEO?", "Off-page SEO concerns signals and activities outside the website that can contribute to reputation and authority, such as relevant links, mentions, digital PR and partnerships. The focus should be on legitimate relevance and credibility, not buying bulk links."],
  ["What is local SEO?", "Local SEO helps a business become more discoverable for searches connected to a location. It can involve Google Business Profile optimization where access is provided, local landing pages, consistent business information, reviews, citations, local content and appropriate structured data."],
  ["What is e-commerce SEO?", "E-commerce SEO is the optimization of online stores for organic product and category discovery. It adds considerations such as product and category architecture, product data, variants, filters, faceted navigation, inventory states, indexing, product schema, reviews and image search."],
  ["Do I need SEO if I already run Google Ads?", "Not necessarily instead of Ads; often alongside them. Paid advertising can provide faster visibility while SEO builds organic discoverability over time. Combining SEO, paid acquisition and conversion optimization can create a more resilient acquisition system when the economics make sense."],
  ["Can SEO help a new website?", "Yes, and it is often easier to build SEO into a new website than retrofit it later. We can plan information architecture, keyword mapping, URLs, content, internal linking, structured data and technical foundations before launch."],
  ["Can you redesign my website without losing SEO?", "Yes, with an SEO-aware redesign process. We inventory existing URLs and valuable content, plan redirects, preserve important metadata and internal links, validate canonicals and monitor the site after launch. A redesign should improve the experience without casually discarding accumulated search value."],
  ["Can you migrate my website without losing rankings?", "We can plan and manage the SEO side of a migration, including URL mapping, redirects, metadata, sitemaps, canonicals, indexation checks and post-launch monitoring. No one can guarantee that rankings will remain identical because search systems continuously reassess websites."],
  ["Do you provide keyword research?", "Yes. Keyword research can include search demand, competition, relevance, commercial value, intent, SERP characteristics, related queries, long-tail opportunities and semantic relationships. The output is used to make decisions about pages and content, not simply to produce a keyword spreadsheet."],
  ["Do you write SEO content?", "Content scope depends on the engagement. We can provide content strategy, briefs, page structures and optimization, and content production can be included where agreed. The standard is useful, accurate and audience-focused content rather than publishing large volumes of generic copy."],
  ["Do you build backlinks?", "Where appropriate, authority development can include legitimate digital PR opportunities, relevant links, industry mentions and partnerships. We do not promote spammy bulk-backlink packages or claim that a fixed number of links guarantees rankings."],
  ["How do you measure SEO success?", "We measure SEO against business objectives. Depending on the project, this can include impressions, rankings, search visibility, organic sessions, landing-page engagement, leads, form submissions, calls, bookings, purchases, revenue and assisted conversions. Traffic without relevance is not success."],
  ["How often will I receive SEO reports?", "Reporting cadence depends on the engagement and the amount of active work. A recurring engagement can include regular performance reporting, interpretation and next-step priorities rather than simply sending screenshots of dashboards."],
  ["Can you optimize a Next.js website?", "Yes. Next.js can support strong SEO implementations, but a framework does not make a website automatically SEO-friendly. We can work with rendering strategy, Metadata API, dynamic metadata, canonicals, sitemap generation, robots configuration, structured data, image optimization, routing, internal links and performance."],
  ["Can SEO and AEO work together?", "Yes. SEO helps search systems discover, crawl, understand and rank content. AEO places additional emphasis on clear answers, question-led structures, entity clarity, semantic content and machine-readable information for modern answer experiences."],
  ["What is AEO?", "Answer Engine Optimization is an approach to structuring and improving content so answer engines and AI-driven search systems can understand, retrieve and potentially surface useful information. It does not provide a guarantee that a particular AI system will cite or recommend a business."],
  ["Can you help my business appear in AI search results?", "We can optimize the underlying information and content systems for better machine understanding and discoverability, including clear definitions, structured answers, entity clarity, schema, internal linking and useful question-based content. We cannot guarantee placement in ChatGPT, Google AI Overviews, Gemini, Perplexity or another AI system."],
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rominelabs.com/services/seo#webpage",
      url: "https://rominelabs.com/services/seo",
      name: "SEO Services",
      description:
        "Strategic SEO services covering technical SEO, content, local and e-commerce SEO, audits, migrations, AEO and conversion-focused organic growth.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://rominelabs.com/#website",
        url: "https://rominelabs.com/",
        name: "Romine Labs",
      },
    },
    {
      "@type": "Service",
      "@id": "https://rominelabs.com/services/seo#service",
      name: "SEO Services",
      serviceType: "Search Engine Optimization",
      provider: {
        "@type": "Organization",
        name: "Romine Labs",
        url: "https://rominelabs.com/",
      },
      areaServed: "Worldwide",
      url: "https://rominelabs.com/services/seo",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rominelabs.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://rominelabs.com/services" },
        { "@type": "ListItem", position: 3, name: "SEO", item: "https://rominelabs.com/services/seo" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
}

// Brand helper primitives
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-[#C69A52]" />
      <span className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? "text-[#D8B978]" : "text-[#C69A52]"}`}>
        {children}
      </span>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  children,
  onDark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
  onDark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl leading-[1.12] ${onDark ? "text-white" : "text-[#0B1B35]"}`}>
        {title}
      </h2>
      {children && (
        <div className={`mt-5 font-sans text-base leading-relaxed sm:text-lg ${onDark ? "text-[#687386]" : "text-[#687386]"}`}>
          {children}
        </div>
      )}
    </div>
  )
}

function ArrowLink({ href, children, onDark = false }: { href: string; children: React.ReactNode; onDark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
        onDark ? "text-white hover:text-[#C69A52]" : "text-[#0B1B35] hover:text-[#C69A52]"
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1.5" />
    </Link>
  )
}

// Visual Component 1: SEO Architecture & Growth Engine Diagram
function SeoGrowthSystemVisual() {
  const nodes = [
    { num: "01", title: "Technical Health", desc: "Crawlability, speed & Core Web Vitals" },
    { num: "02", title: "Architecture & URLs", desc: "Sitemaps, canonicals & internal links" },
    { num: "03", title: "Topical Authority", desc: "Content clusters & search intent" },
    { num: "04", title: "Entity & AEO", desc: "Structured data, schema & AI answers" },
    { num: "05", title: "Search Visibility", desc: "Rankings, impressions & organic traffic" },
    { num: "06", title: "Conversion Engine", desc: "Qualified leads & pipeline growth" },
  ]

  return (
    <div className="border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">System Architecture</span>
          <h3 className="font-serif text-lg text-white">End-to-End Organic Growth Engine</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase text-[#687386] sm:inline-block">Illustrative Framework</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {nodes.map((node, i) => (
          <div key={node.num} className="relative border border-white/10 bg-[#0B1B35] p-4 text-left">
            <span className="font-mono text-[10px] font-bold text-[#C69A52]">{node.num}</span>
            <p className="mt-2 font-serif text-sm font-normal text-white">{node.title}</p>
            <p className="mt-1 font-sans text-[11px] text-[#687386]">{node.desc}</p>
            {i < nodes.length - 1 && (
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

// Visual Component 2: Technical Health & Search Intelligence Dashboard Panel
function TechnicalSeoDashboardMockup() {
  return (
    <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C69A52]">Illustrative Example</span>
          <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Technical SEO & Indexation Panel</h3>
        </div>
        <BarChart3 className="size-5 text-[#C69A52]" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Crawl Health Index</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">99.4%</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Zero blocking errors</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Core Web Vitals</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">98 / 100</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Passed LCP, FID, CLS</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Schema Validation</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">100%</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Rich results active</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Search Intent Coverage</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">High Intent</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Topical cluster mapped</p>
        </div>
      </div>
    </div>
  )
}

export default function SEOServicePage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section data-hero-dark className="relative min-h-[62vh] overflow-hidden bg-[#0B1B35] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/seo.webp"
            alt="Abstract data and digital analytics visual representing search visibility and SEO strategy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-200 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/85 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <Eyebrow onDark>Search Engine Optimization</Eyebrow>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              SEO that gets your business found — <span className="text-[#C69A52] font-serif italic">and chosen.</span>
            </h1>

            <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
              We build search visibility around technical health, search intent, useful content,
              authority and conversion. The goal is not traffic for traffic&apos;s sake. It is
              reaching the right people and giving them a clear reason to act.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Get an SEO Strategy</span>
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

      {/* BREADCRUMB */}
      <div className="border-b border-[#E4E7EB] bg-[#F7F5F0]">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 py-4 font-mono text-xs text-[#687386]">
            <Link href="/" className="hover:text-[#0B1B35] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0B1B35] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0B1B35] font-semibold">SEO</span>
          </nav>
        </Container>
      </div>

      {/* VALUE PROPOSITION */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <SectionHeading eyebrow="The Real Objective" title="SEO is more than rankings.">
              <p>
                A ranking only matters when it puts the right page in front of the right person.
                Our approach connects search visibility to qualified traffic, engagement,
                enquiries, sales and long-term brand visibility.
              </p>
            </SectionHeading>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-4">
              {[
                ["01", "Discover", "Be found"],
                ["02", "Match", "Answer intent"],
                ["03", "Trust", "Build authority"],
                ["04", "Convert", "Create value"],
              ].map(([number, title, text]) => (
                <div key={number} className="bg-white p-5 sm:p-6">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{number}</span>
                  <p className="mt-6 font-serif text-base font-normal text-[#0B1B35]">{title}</p>
                  <p className="mt-1 font-sans text-xs text-[#687386]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SYSTEM DIAGRAM VISUAL */}
      <section className="bg-[#0B1B35] py-16 text-white border-b border-white/10">
        <Container>
          <SeoGrowthSystemVisual />
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <SectionHeading eyebrow="Core Disciplines" title="An SEO system built around how search actually works.">
            <p>
              SEO touches the technical foundation, the content people read, the structure
              connecting your pages and the experience that determines whether organic visitors
              become customers.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className={`group flex flex-col justify-between border border-[#E4E7EB] bg-white p-8 transition-all hover:border-[#C69A52] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <Icon className="size-6 text-[#C69A52]" />
                      <span className="font-mono text-xs font-bold text-[#C69A52]">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-normal text-[#0B1B35]">{service.title}</h3>
                    <p className="mt-3 font-sans text-xs font-semibold text-[#0B1B35]">{service.summary}</p>
                    <p className="mt-4 font-sans text-xs leading-relaxed text-[#687386]">{service.body}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E4E7EB]">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-sans text-xs text-[#111827]">
                          <Check className="size-3.5 shrink-0 text-[#C69A52]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-14 border-t border-[#E4E7EB] pt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {specialistServices.map(([title, description]) => (
                <div key={title} className="border border-[#E4E7EB] bg-white p-6">
                  <h3 className="font-serif text-base font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TECHNICAL / NEXT.JS */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <SectionHeading eyebrow="Technical SEO" title="Your framework does not make your website SEO-ready by itself.">
              <p>
                Modern frameworks can support excellent search performance, but implementation
                still matters. For Next.js sites, we pay attention to rendering, metadata,
                routing, crawlable content, structured data and performance.
              </p>
            </SectionHeading>

            <div className="border border-[#E4E7EB] bg-[#F7F5F0]">
              <div className="grid grid-cols-2 divide-x divide-y divide-[#E4E7EB] sm:grid-cols-3">
                {[
                  ["Rendering", "Server rendering & static generation", Code2],
                  ["Metadata", "Metadata API & dynamic metadata", Settings2],
                  ["Discovery", "Sitemaps, robots & crawl paths", Search],
                  ["Structure", "Canonicals, URLs & internal links", Network],
                  ["Data", "Structured data & entities", Layers3],
                  ["Performance", "Images, fonts & Core Web Vitals", Zap],
                ].map(([title, text, Icon]) => (
                  <div key={title as string} className="p-6 bg-white">
                    <Icon className="size-5 text-[#C69A52]" />
                    <h3 className="mt-6 font-serif text-base font-normal text-[#0B1B35]">{title as string}</h3>
                    <p className="mt-2 font-sans text-xs text-[#687386]">{text as string}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E4E7EB] bg-[#F7F5F0] p-6 font-sans text-xs leading-relaxed text-[#687386]">
                <strong className="text-[#0B1B35]">Engineering Standard:</strong> A technically sophisticated website still needs useful, crawlable content, sensible architecture and a search strategy. Technology is the foundation, not the strategy.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AEO SECTION */}
      <section className="bg-[#0B1B35] text-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow="SEO + AEO Integration" title="SEO for search engines. AEO for the age of AI." onDark>
              <p>
                SEO helps search engines discover, crawl, understand and rank content. AEO
                puts additional emphasis on making information clear and retrievable for modern
                answer experiences and AI-driven discovery systems.
              </p>
              <p className="mt-4">
                We structure information around questions, entities, definitions, semantic
                relationships, FAQs and machine-readable signals. The objective is improved
                machine understanding and discoverability, never a promise of placement.
              </p>
            </SectionHeading>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                ["Structured answers", "Give important questions direct, useful answers before expanding."],
                ["Entity clarity", "Make the people, organizations, services, products and relationships understandable."],
                ["Semantic content", "Connect topics and concepts rather than forcing isolated keywords."],
                ["Schema", "Use structured data where it accurately represents visible content."],
                ["Question-led content", "Build useful pages around the questions real audiences ask."],
                ["AI search", "Prepare content for evolving experiences such as AI Overviews and conversational search."],
              ].map(([title, text], index) => (
                <div key={title} className="bg-[#0B1B35] p-7">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">0{index + 1}</span>
                  <h3 className="mt-6 font-serif text-lg font-normal text-white">{title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex items-center gap-2 font-sans text-xs text-[#687386]">
            <Bot className="size-4 text-[#C69A52]" />
            Designed for modern search without claiming control over third-party AI answers.
          </div>
        </Container>
      </section>

      {/* FRAMEWORK */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <SectionHeading eyebrow="Our Framework" title="Eight connected layers. One search growth system.">
            <p>
              Strong SEO is rarely the result of one tactic. We look at the relationships between
              technical foundations, relevance, content, authority, experience, conversion and
              measurement.
            </p>
          </SectionHeading>

          <div className="mt-14 border-y border-[#E4E7EB]">
            {framework.map(([number, label, title, Icon], index) => (
              <div
                key={number}
                className="group grid gap-4 border-b border-[#E4E7EB] py-6 last:border-b-0 sm:grid-cols-[80px_180px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-xs font-bold text-[#C69A52]">{number}</span>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#687386]">{label}</span>
                <div className="flex items-center gap-4">
                  <Icon className="size-5 text-[#C69A52]" />
                  <span className="font-serif text-lg font-normal text-[#0B1B35]">{title}</span>
                </div>
                {index < framework.length - 1 ? (
                  <ArrowDownRight className="hidden size-5 text-[#687386] sm:block" />
                ) : (
                  <Check className="hidden size-5 text-[#C69A52] sm:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AUDIT */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeading eyebrow="SEO Audit" title="We look for the constraints behind the symptoms.">
              <p>
                An audit should not leave you with a hundred disconnected warnings. We prioritize
                what is blocking visibility, what creates the largest opportunity and what should
                happen first.
              </p>
              <div className="mt-8">
                <ArrowLink href="/contact">Audit my website</ArrowLink>
              </div>
            </SectionHeading>

            <div className="grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2">
              {auditCategories.map(([title, text, Icon]) => (
                <div key={title as string} className="bg-white p-7">
                  <Icon className="size-5 text-[#C69A52]" />
                  <h3 className="mt-6 font-serif text-lg font-normal text-[#0B1B35]">{title as string}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* KEYWORDS + CONTENT ECOSYSTEM */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Search Intent" title="Keywords are evidence. Intent is the strategy.">
                <p>
                  We analyze search volume, competition, relevance, commercial value, SERP
                  characteristics, related queries and semantic relationships. Then we determine
                  what the searcher is actually trying to accomplish.
                </p>
              </SectionHeading>

              <div className="mt-10 grid gap-3">
                {[
                  ["Informational", "The searcher wants to learn, understand or solve a problem."],
                  ["Navigational", "The searcher is trying to find a particular website, brand or destination."],
                  ["Commercial Investigation", "The searcher is evaluating options before deciding."],
                  ["Transactional", "The searcher is ready to take an action such as buy, book or enquire."],
                ].map(([title, text], index) => (
                  <div key={title} className="flex gap-5 border-b border-[#E4E7EB] pb-5">
                    <span className="font-mono text-xs font-bold text-[#C69A52]">0{index + 1}</span>
                    <div>
                      <h3 className="font-serif text-base font-normal text-[#0B1B35]">{title}</h3>
                      <p className="mt-1 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Content Ecosystem" title="Build a connected body of useful information.">
                <p>
                  A strong content system gives important topics depth while making it easy for
                  visitors and search engines to move between related pages.
                </p>
              </SectionHeading>

              <div className="relative mt-10 border border-[#E4E7EB] bg-[#F7F5F0] p-8">
                {[
                  ["Pillar page", "Own the central topic"],
                  ["Supporting articles", "Answer related questions"],
                  ["Service pages", "Capture commercial intent"],
                  ["FAQs", "Resolve objections and questions"],
                  ["Comparisons", "Help people evaluate options"],
                  ["Case studies", "Demonstrate experience"],
                  ["Internal links", "Connect the ecosystem"],
                ].map(([title, text], index) => (
                  <div key={title} className="relative flex items-center gap-5">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[#E4E7EB] bg-white font-mono text-xs font-bold text-[#C69A52]">
                      {index + 1}
                    </div>
                    <div className="py-3">
                      <h3 className="font-serif text-sm font-normal text-[#0B1B35]">{title}</h3>
                      <p className="font-sans text-xs text-[#687386]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPETITOR ANALYSIS */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <SectionHeading eyebrow="Competitive Intelligence" title="Don't just compete for keywords. Understand the search landscape.">
              <p>
                We examine who is ranking, why they are ranking, what they cover, how their
                architecture works and where the market leaves gaps. Competitor analysis is
                used to inform priorities, not to copy another website.
              </p>
            </SectionHeading>

            <div className="grid grid-cols-2 border border-[#E4E7EB] bg-white">
              {[
                ["Who ranks", Users],
                ["Why they rank", Search],
                ["Content gaps", FileSearch],
                ["SERP features", LineChart],
                ["Architecture", Network],
                ["Authority", Globe2],
              ].map(([title, Icon]) => (
                <div key={title as string} className="border-b border-r border-[#E4E7EB] p-6">
                  <Icon className="size-5 text-[#C69A52]" />
                  <p className="mt-6 font-serif text-base font-normal text-[#0B1B35]">{title as string}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <SectionHeading eyebrow="Archetype Adaptation" title="SEO changes with the business behind the website.">
            <p>
              A local service company, an e-commerce catalog and an international SaaS business
              should not receive the same SEO playbook. The strategy follows the audience,
              business model, market and search journey.
            </p>
          </SectionHeading>

          <div className="mt-14 grid border-l border-t border-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, text]) => (
              <article key={title} className="border-b border-r border-[#E4E7EB] p-7">
                <h3 className="font-serif text-lg font-normal text-[#0B1B35]">{title}</h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0B1B35] text-white py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Methodology" title="Strategy first. Implementation second. Learning throughout." onDark>
            <p>
              SEO works best when research, implementation and measurement operate as one
              system. Our process creates a clear sequence without pretending that every website
              needs the same work.
            </p>
          </SectionHeading>

          <div className="mt-14 border-t border-white/10">
            {process.map(([number, title, text]) => (
              <div key={number} className="grid gap-5 border-b border-white/10 py-7 lg:grid-cols-[80px_240px_1fr]">
                <span className="font-mono text-xs font-bold text-[#C69A52]">{number}</span>
                <h3 className="font-serif text-lg font-normal text-white">{title}</h3>
                <p className="font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link 
              href="/contact" 
              className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
            >
              <span>Build My SEO Roadmap</span>
              <ArrowRight className="size-4 text-[#C69A52]" />
            </Link>
          </div>
        </Container>
      </section>

      {/* DATA & REPORTING + DASHBOARD MOCKUP */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow="Measurement & Attribution" title="Traffic without relevance is not success.">
              <p>
                Reporting should explain what changed, why it matters and what should happen next.
                Depending on the engagement, we can monitor visibility, traffic, engagement,
                conversions and revenue-related outcomes.
              </p>
              <p className="mt-4">
                Rankings are useful signals, but they are not the business objective by themselves.
              </p>
            </SectionHeading>

            <div>
              <TechnicalSeoDashboardMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section className="bg-[#F7F5F0] py-16 border-b border-[#E4E7EB]">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Tooling Stack</Eyebrow>
              <h2 className="mt-3 font-serif text-2xl font-normal text-[#0B1B35]">The toolset follows the project.</h2>
              <p className="mt-2 font-sans text-xs text-[#687386]">
                We use the tools that provide useful evidence for the specific website and
                engagement. No project needs every platform on a logo wall.
              </p>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="border border-[#E4E7EB] bg-white px-3 py-2 font-mono text-xs font-semibold text-[#0B1B35]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SEO VS PAID */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <SectionHeading eyebrow="SEO vs Paid Acquisition" title="Different channels. Different strengths.">
              <p>
                SEO compounds through accumulated content, technical improvements and authority,
                but it does not guarantee immediate results. Paid advertising can provide faster
                visibility, but traffic is tied to ongoing spend.
              </p>
              <p className="mt-4">
                When the economics make sense, SEO + Paid Ads + Conversion Optimization can create
                a stronger acquisition system: paid campaigns test demand quickly while organic
                search builds a durable discovery layer.
              </p>
            </SectionHeading>

            <div className="grid border border-[#E4E7EB] sm:grid-cols-2">
              <div className="border-b border-[#E4E7EB] p-7 sm:border-b-0 sm:border-r bg-white">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#C69A52]">SEO Channel</p>
                <ul className="mt-6 space-y-3 font-sans text-xs text-[#111827]">
                  {["Compounds over time", "Builds organic visibility", "Captures existing search demand", "Requires ongoing investment", "Does not guarantee immediate results"].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="size-4 shrink-0 text-[#C69A52]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 bg-[#F7F5F0]">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B1B35]">Paid Ads Channel</p>
                <ul className="mt-6 space-y-3 font-sans text-xs text-[#111827]">
                  {["Faster visibility", "More immediate traffic", "Budget-dependent", "Stops when spending stops", "Useful for rapid testing"].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="size-4 shrink-0 text-[#C69A52]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ArrowLink href="/services/paid-advertising">Explore Paid Advertising</ArrowLink>
          </div>
        </Container>
      </section>

      {/* MISTAKES */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <SectionHeading eyebrow="Anti-Patterns" title="SEO should not depend on shortcuts.">
            <p>
              Sustainable search visibility is built through useful information, technical
              quality, relevance and legitimate authority. The fastest-looking tactic is not
              always the safest or most valuable tactic.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-x-10 sm:grid-cols-2">
            {mistakes.map(([title, text], index) => (
              <div key={title} className="border-t border-[#E4E7EB] py-7">
                <div className="flex gap-5">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">0{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-base font-normal text-[#0B1B35]">{title}</h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DIFFERENTIATION */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <SectionHeading eyebrow="The Romine Standard" title="Business-first SEO, not a ranking report factory.">
            <p>
              The strongest SEO strategy sits at the intersection of search behavior, technical
              quality, content, authority and conversion. These principles guide how we prioritize
              the work.
            </p>
          </SectionHeading>

          <div className="mt-14 grid border-l border-t border-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Business-first", "SEO supports actual business objectives."],
              ["Technical", "Strong foundations reduce avoidable search friction."],
              ["Intent-driven", "Content is built around what users actually need."],
              ["Data-informed", "Decisions use measurable evidence."],
              ["Conversion-aware", "Organic traffic should contribute to outcomes."],
              ["AEO-ready", "Information is structured for modern search experiences."],
              ["Sustainable", "No shortcuts or spam-based strategies."],
              ["Transparent", "Clear priorities, reporting and next steps."],
            ].map(([title, text]) => (
              <div key={title} className="border-b border-r border-[#E4E7EB] p-7">
                <h3 className="font-serif text-base font-normal text-[#0B1B35]">{title}</h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeading eyebrow="Deliverables Scope" title="A clear body of work, matched to the engagement.">
              <p>
                Deliverables vary by project. An audit, a migration, a local SEO engagement and
                an ongoing growth program should not be scoped as if they were the same service.
              </p>
              <div className="mt-8">
                <ArrowLink href="/contact">Find the right SEO solution</ArrowLink>
              </div>
            </SectionHeading>

            <div className="grid gap-x-10 border-y border-[#E4E7EB] sm:grid-cols-2 bg-white p-6 sm:p-8">
              {deliverables.map((item, index) => (
                <div key={item} className="flex gap-3 border-b border-[#E4E7EB] py-4 last:border-b-0">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-sans text-xs font-semibold text-[#0B1B35]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CASE STUDIES / PROOF */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <SectionHeading eyebrow="Proof, Not Claims" title="Your real results should tell the story.">
              <p>
                We do not fabricate rankings, traffic lifts, revenue figures, testimonials or
                awards. When real case studies are available, this section should show the
                challenge, strategy, implementation, results and services used.
              </p>
            </SectionHeading>

            <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-8">
              <LineChart className="size-6 text-[#C69A52]" />
              <h3 className="mt-6 font-serif text-xl font-normal text-[#0B1B35]">SEO Case Studies</h3>
              <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">
                Add verified client stories here as they become available. Each story should
                document the starting challenge, strategic decisions, implementation and measured
                business outcomes.
              </p>
              <div className="mt-6">
                <ArrowLink href="/portfolio">View Case Studies</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="Frequently Asked Questions" title="Clear answers before you commit to SEO.">
              <p>
                SEO is a long-term business decision. These answers cover the questions we hear most
                often and make the process easier to evaluate.
              </p>
            </SectionHeading>

            <div className="mt-14 border-y border-[#E4E7EB]">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-[#E4E7EB] last:border-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-normal text-[#0B1B35] focus:outline-none [&::-webkit-details-marker]:hidden">
                    <span>{question}</span>
                    <ChevronDown className="size-5 shrink-0 text-[#C69A52] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-8 font-sans text-xs leading-relaxed text-[#687386]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Talk to an SEO Specialist</span>
                <ArrowRight className="size-4 text-[#C69A52]" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
        <Image
          src="/images/hero-data.png"
          alt="Abstract search data background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/90 to-[#142B4A]/80" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Eyebrow onDark>Start With Search</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white leading-[1.08]">
              Ready to turn search into a growth channel?
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
              Bring us your existing website, SEO problems, organic growth goals, new website,
              local visibility challenge, e-commerce opportunity, content strategy or AI search
              question. We&apos;ll start with the business context before recommending the work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Get Your SEO Strategy</span>
                <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-12 border-t border-[#E4E7EB]">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#C69A52]">Connected Capabilities</p>
              <p className="mt-1 font-sans text-xs text-[#687386]">SEO works best when it connects with the rest of the acquisition system.</p>
            </div>
            <div className="flex flex-wrap gap-4 font-sans text-xs font-bold text-[#0B1B35]">
              <Link href="/services/web-development" className="hover:text-[#C69A52] transition-colors">Web Development</Link>
              <Link href="/services/aeo" className="hover:text-[#C69A52] transition-colors">AEO</Link>
              <Link href="/services/content-marketing" className="hover:text-[#C69A52] transition-colors">Content Marketing</Link>
              <Link href="/services/paid-advertising" className="hover:text-[#C69A52] transition-colors">Paid Advertising</Link>
              <Link href="/services/social-media-management" className="hover:text-[#C69A52] transition-colors">Social Media</Link>
              <Link href="/services/conversion-rate-optimization" className="hover:text-[#C69A52] transition-colors">Conversion Optimization</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}