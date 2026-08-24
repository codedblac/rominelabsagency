export type ServiceFaq = { question: string; answer: string }

export type Service = {
  slug: string
  title: string
  discipline: string
  tagline: string
  summary: string
  intro: string
  solve: string[]
  included: string[]
  approach: { title: string; body: string }[]
  deliverables: string[]
  engagement: string
  faqs: ServiceFaq[]
  related: string[]
  image: string
  capabilities?: { title: string; body: string }[]
  audiences?: string[]
  technology?: string[]
  outcomes?: string[]
}

export type Discipline = {
  id: string
  number: string
  title: string
  description: string
  cta: string
  primarySlug: string
  services: string[]
}

/**
 * Six top-level disciplines used on the homepage and mega menu.
 * Each maps into one or more detailed service pages below.
 */
export const disciplines: Discipline[] = [
  {
    id: 'web-digital',
    number: '01',
    title: 'Web & Digital',
    description:
      'High-performance digital experiences designed around your business, your audience and your goals.',
    cta: 'Explore Web & Digital',
    primarySlug: 'web-development',
    services: [
      'Website Development',
      'Corporate Websites',
      'Landing Pages',
      'E-commerce Development',
      'Custom Web Applications',
      'Website Redesign',
      'Website Maintenance',
      'Performance Optimization',
      'Conversion-Focused Websites',
    ],
  },
  {
    id: 'growth-performance',
    number: '02',
    title: 'Growth & Performance',
    description:
      'Make your business easier to discover and turn visibility into measurable growth.',
    cta: 'Explore Growth',
    primarySlug: 'seo',
    services: [
      'SEO',
      'Local SEO',
      'Technical SEO',
      'Google Business Profile',
      'Google Ads',
      'Meta Ads',
      'YouTube Ads',
      'Paid Media Strategy',
      'Conversion Rate Optimization',
      'Competitor Research',
      'Digital Marketing Strategy',
    ],
  },
  {
    id: 'social-content',
    number: '03',
    title: 'Social & Content',
    description:
      'Turn expertise, ideas and long-form content into a consistent digital presence people remember.',
    cta: 'Explore Social & Content',
    primarySlug: 'social-media',
    services: [
      'Social Media Management',
      'Instagram / TikTok / LinkedIn',
      'YouTube & Shorts',
      'Content Repurposing',
      'Short-Form Video',
      'Video Editing',
      'Community Management',
      'Social SEO',
      'Audience Research',
    ],
  },
  {
    id: 'lead-generation',
    number: '04',
    title: 'Lead Generation & Sales',
    description:
      'Build systems that turn attention into qualified leads, conversations and customers.',
    cta: 'Explore Lead Generation',
    primarySlug: 'lead-generation',
    services: [
      'Lead Generation',
      'Sales Funnels',
      'Lead Capture & Qualification',
      'Appointment Setting',
      'CRM Setup & Management',
      'Email & SMS Marketing',
      'Automated Follow-Up',
      'Retargeting',
      'Conversion Optimization',
    ],
  },
  {
    id: 'ai-automation',
    number: '05',
    title: 'AI & Automation',
    description:
      'Use intelligent systems to reduce repetitive work, respond faster and scale operations.',
    cta: 'Explore AI & Automation',
    primarySlug: 'ai-automation',
    services: [
      'AI Chatbots',
      'AI Customer Support',
      'AI Lead Qualification',
      'AI Appointment Booking',
      'CRM & Workflow Automation',
      'Email & SMS Automation',
      'AI Content Workflows',
      'Reporting Automation',
      'Business Process Automation',
    ],
  },
  {
    id: 'analytics-optimization',
    number: '06',
    title: 'Analytics & Optimization',
    description: 'Make better decisions with measurement systems that reveal what is working and where to improve.',
    cta: 'Explore Analytics',
    primarySlug: 'analytics',
    services: ['Analytics & Tracking', 'Dashboard Design', 'Conversion Rate Optimization', 'Funnel Analysis', 'Reporting Automation', 'Experimentation'],
  },
  {
    id: 'brand-creative',
    number: '07',
    title: 'Brand & Creative',
    description:
      'Build a visual identity and creative system that makes your business impossible to confuse.',
    cta: 'Explore Brand & Creative',
    primarySlug: 'brand-creative',
    services: [
      'Brand Strategy',
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Graphic & Social Creative',
      'Presentation & Print Design',
      'Advertising Creative',
      'Video Production',
      'Corporate & Promo Video',
      'Creative Campaigns',
    ],
  },
]

const genericFaqs = (name: string): ServiceFaq[] => [
  {
    question: `How much does ${name.toLowerCase()} cost?`,
    answer:
      'Every engagement is scoped to your goals, market and stage — there are no fixed packages. We map the work to the outcome you need and share a transparent proposal before anything begins. Talk to our team for a tailored estimate.',
  },
  {
    question: 'How do we get started?',
    answer:
      'We begin with a short discovery conversation to understand your business, audience and objectives. From there we outline the highest-impact opportunities and a clear plan before any build or spend.',
  },
  {
    question: 'Do you work with businesses outside your region?',
    answer:
      'Yes. Romine Labs is remote-first and works with businesses across the United States, United Kingdom, Canada, Australia, UAE and beyond.',
  },
]

const baseServices: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    discipline: 'Web & Digital',
    tagline: 'Websites engineered for performance and growth.',
    summary:
      'Fast, accessible, conversion-focused websites and web applications built on a modern stack.',
    intro:
      'A website is often the first — and most important — interaction someone has with your business. We design and build high-performance sites and web applications that load fast, rank well and turn visitors into customers.',
    solve: [
      'Slow, dated sites that lose visitors and rankings',
      'Designs that look good but do not convert',
      'Platforms that are hard to update or scale',
      'Poor mobile experience and accessibility gaps',
    ],
    included: [
      'Discovery, information architecture and UX planning',
      'Custom design systems and responsive UI',
      'Modern front-end build (Next.js / React)',
      'CMS integration and content modelling',
      'Core Web Vitals and technical SEO foundations',
      'Analytics, tracking and conversion instrumentation',
    ],
    approach: [
      { title: 'Understand', body: 'We map your audience, goals and the journeys that matter before design begins.' },
      { title: 'Design', body: 'We craft a clear, on-brand experience with hierarchy and conversion built in.' },
      { title: 'Build', body: 'We develop a fast, accessible, maintainable site on a modern framework.' },
      { title: 'Optimize', body: 'We measure real behaviour and refine performance and conversion over time.' },
    ],
    deliverables: [
      'Responsive marketing site or web application',
      'Reusable design system and components',
      'CMS the team can manage confidently',
      'Performance and SEO foundation',
    ],
    engagement: 'Custom engagement — scoped to your platform, scale and goals.',
    faqs: [
      {
        question: 'How much does a website project cost?',
        answer:
          'Website projects are scoped individually based on scale, complexity and the systems involved — a focused landing page is very different from a large corporate site or custom application. We provide a transparent, fixed proposal after a short discovery. Talk to our team for an estimate.',
      },
      ...genericFaqs('web development').slice(1),
    ],
    related: ['conversion-optimization', 'seo', 'brand-creative'],
    image: '/images/insight-web.png',
  },
  {
    slug: 'seo',
    title: 'SEO',
    discipline: 'Growth & Performance',
    tagline: 'Be found by the people already looking for you.',
    summary:
      'Technical, on-page and local SEO that builds durable, compounding organic visibility.',
    intro:
      'Search is where high-intent demand lives. We improve how search engines and AI answer engines understand and rank your business, so the right audience finds you at the right moment.',
    solve: [
      'Low visibility for the terms that matter',
      'Technical issues holding back rankings',
      'Content that does not match search intent',
      'Weak local presence in key markets',
    ],
    included: [
      'Technical SEO audit and remediation',
      'Keyword and search-intent research',
      'On-page optimization and content strategy',
      'Local SEO and Google Business Profile',
      'Structured data and internal linking',
      'Reporting on rankings, traffic and conversions',
    ],
    approach: [
      { title: 'Audit', body: 'We assess technical health, content and the competitive landscape.' },
      { title: 'Prioritize', body: 'We focus on the opportunities with the highest impact first.' },
      { title: 'Execute', body: 'We fix, optimize and create the assets needed to rank.' },
      { title: 'Compound', body: 'We build authority steadily so results accumulate over time.' },
    ],
    deliverables: [
      'Technical SEO fixes and documentation',
      'Keyword and content roadmap',
      'Optimized pages and structured data',
      'Ongoing performance reporting',
    ],
    engagement: 'Custom engagement — typically an ongoing monthly partnership.',
    faqs: [
      {
        question: 'How does SEO help businesses?',
        answer:
          'SEO makes your business easier to discover when people search for what you offer. Done well, it delivers durable, high-intent traffic that compounds over time — often becoming one of the most cost-effective acquisition channels a business has.',
      },
      ...genericFaqs('SEO').slice(1),
    ],
    related: ['paid-advertising', 'analytics', 'conversion-optimization'],
    image: '/images/insight-seo.png',
  },
  {
    slug: 'paid-advertising',
    title: 'Paid Advertising',
    discipline: 'Growth & Performance',
    tagline: 'Predictable demand from Google, Meta and YouTube.',
    summary:
      'Paid media strategy and management across search, social and video built around ROI.',
    intro:
      'Paid media lets you reach the right audience quickly and scale what works. We plan, launch and manage campaigns across Google, Meta and YouTube with a relentless focus on efficient, measurable results.',
    solve: [
      'Ad spend that is not producing returns',
      'Campaigns launched without a clear strategy',
      'Poor tracking and unclear attribution',
      'Difficulty scaling profitably',
    ],
    included: [
      'Paid media strategy and channel planning',
      'Google, Meta and YouTube campaign builds',
      'Audience, creative and offer testing',
      'Conversion tracking and attribution setup',
      'Landing page and funnel alignment',
      'Ongoing optimization and reporting',
    ],
    approach: [
      { title: 'Strategy', body: 'We define audiences, offers and the metrics that define success.' },
      { title: 'Launch', body: 'We build structured campaigns with proper tracking from day one.' },
      { title: 'Test', body: 'We test creative, audiences and messaging to find winners.' },
      { title: 'Scale', body: 'We scale profitable campaigns while protecting efficiency.' },
    ],
    deliverables: [
      'Channel and budget strategy',
      'Fully built, tracked campaigns',
      'Creative and landing page recommendations',
      'Clear performance reporting',
    ],
    engagement: 'Custom engagement — management fee plus your ad budget.',
    faqs: genericFaqs('paid advertising'),
    related: ['seo', 'conversion-optimization', 'analytics'],
    image: '/images/work-growth.png',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    discipline: 'Social & Content',
    tagline: 'A presence people actually remember.',
    summary:
      'Strategy, management and short-form content that build a consistent, credible presence.',
    intro:
      'Consistency and quality build trust. We manage your social presence end to end — strategy, content, scheduling and community — turning your expertise into a channel that grows your brand.',
    solve: [
      'Inconsistent posting and unclear voice',
      'Content that does not reflect the brand',
      'No time to create and manage channels',
      'Low engagement and slow audience growth',
    ],
    included: [
      'Channel strategy and content pillars',
      'Content calendar and production',
      'Short-form video and graphics',
      'Community management and engagement',
      'Social SEO and hashtag strategy',
      'Performance reporting and iteration',
    ],
    approach: [
      { title: 'Position', body: 'We define your voice, pillars and the outcomes each channel serves.' },
      { title: 'Produce', body: 'We create a steady stream of on-brand content and video.' },
      { title: 'Engage', body: 'We manage community and conversations to build relationships.' },
      { title: 'Refine', body: 'We use performance data to double down on what resonates.' },
    ],
    deliverables: [
      'Documented social strategy',
      'Monthly content calendar and assets',
      'Managed publishing and community',
      'Performance reporting',
    ],
    engagement: 'Custom engagement — ongoing monthly management.',
    faqs: [
      {
        question: 'How does Romine Labs manage social media?',
        answer:
          'We handle the full workflow — strategy, content creation, scheduling, community management and reporting — as an extension of your team. Everything is anchored to clear pillars and reviewed against performance so the presence stays consistent and on-brand.',
      },
      ...genericFaqs('social media').slice(1),
    ],
    related: ['content-production', 'brand-creative', 'paid-advertising'],
    image: '/images/work-social.png',
  },
  {
    slug: 'content-production',
    title: 'Content Production',
    discipline: 'Social & Content',
    tagline: 'Long-form ideas, engineered into a content engine.',
    summary:
      'Video editing, short-form and content repurposing that scale your best ideas.',
    intro:
      'Great content earns attention and trust. We turn long-form recordings, expertise and campaigns into a steady flow of polished video and content built for every channel.',
    solve: [
      'Valuable ideas that never get published',
      'Inconsistent quality across content',
      'One-off content instead of a system',
      'No repurposing of long-form material',
    ],
    included: [
      'Content strategy and repurposing plans',
      'Short-form and long-form video editing',
      'Reels, Shorts and social cut-downs',
      'Motion graphics and captions',
      'Thumbnails and supporting graphics',
      'Delivery in channel-ready formats',
    ],
    approach: [
      { title: 'Plan', body: 'We define the formats and cadence that fit your goals.' },
      { title: 'Capture', body: 'We work from your recordings, footage or produced material.' },
      { title: 'Edit', body: 'We produce polished, on-brand video and assets.' },
      { title: 'Repurpose', body: 'We turn each piece into many, tuned to each platform.' },
    ],
    deliverables: [
      'Edited long-form and short-form video',
      'Platform-ready social cut-downs',
      'Graphics, captions and thumbnails',
      'Organised content library',
    ],
    engagement: 'Custom engagement — project or ongoing production.',
    faqs: genericFaqs('content production'),
    related: ['social-media', 'brand-creative', 'seo'],
    image: '/images/work-podcast.png',
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    discipline: 'Lead Generation & Sales',
    tagline: 'Turn attention into qualified conversations.',
    summary:
      'Funnels, landing pages and capture systems that convert interest into pipeline.',
    intro:
      'Traffic is not the goal — pipeline is. We build the funnels, pages and follow-up systems that convert attention into qualified leads and booked conversations for your team.',
    solve: [
      'Traffic that does not convert',
      'Leaky or non-existent funnels',
      'Unqualified leads wasting sales time',
      'No structured follow-up',
    ],
    included: [
      'Funnel and offer strategy',
      'High-converting landing pages',
      'Lead capture and qualification flows',
      'Appointment setting and routing',
      'Automated follow-up sequences',
      'Retargeting and conversion tracking',
    ],
    approach: [
      { title: 'Map', body: 'We design the journey from first touch to booked call.' },
      { title: 'Build', body: 'We create the pages, forms and automations that convert.' },
      { title: 'Qualify', body: 'We filter and route leads so sales focuses on the best.' },
      { title: 'Improve', body: 'We optimize each step to raise conversion over time.' },
    ],
    deliverables: [
      'Complete funnel and landing pages',
      'Lead capture and qualification logic',
      'Automated follow-up sequences',
      'Conversion tracking and reporting',
    ],
    engagement: 'Custom engagement — build plus ongoing optimization.',
    faqs: genericFaqs('lead generation'),
    related: ['crm-automation', 'email-marketing', 'conversion-optimization'],
    image: '/images/work-ecommerce.png',
  },
  {
    slug: 'crm-automation',
    title: 'CRM & Automation',
    discipline: 'Lead Generation & Sales',
    tagline: 'A system that follows up so your team can sell.',
    summary:
      'CRM setup, pipelines and automated follow-up that keep every lead moving.',
    intro:
      'Deals are lost in the gaps. We set up and automate your CRM so leads are captured, nurtured and followed up consistently — giving your team a clear, reliable pipeline.',
    solve: [
      'Leads slipping through the cracks',
      'Manual, inconsistent follow-up',
      'A CRM nobody actually uses',
      'No visibility into the pipeline',
    ],
    included: [
      'CRM setup and configuration',
      'Pipeline and stage design',
      'Automated follow-up and reminders',
      'Lead scoring and routing',
      'Email and SMS integration',
      'Reporting dashboards',
    ],
    approach: [
      { title: 'Design', body: 'We model your sales process into a clear pipeline.' },
      { title: 'Configure', body: 'We set up the CRM, fields and integrations.' },
      { title: 'Automate', body: 'We build the follow-up and routing that keep deals moving.' },
      { title: 'Report', body: 'We give you visibility into what is working.' },
    ],
    deliverables: [
      'Configured CRM and pipeline',
      'Automated follow-up workflows',
      'Lead routing and scoring',
      'Reporting dashboards',
    ],
    engagement: 'Custom engagement — setup plus optional management.',
    faqs: genericFaqs('CRM and automation'),
    related: ['ai-automation', 'email-marketing', 'lead-generation'],
    image: '/images/work-growth.png',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    discipline: 'AI & Automation',
    tagline: 'Intelligent systems that scale your operations.',
    summary:
      'AI assistants and workflow automation that reduce manual work and speed up response.',
    intro:
      'Modern businesses run on systems. We implement AI assistants and automation that handle repetitive work, respond to customers instantly and let your team focus on higher-value work.',
    solve: [
      'Slow response times losing leads',
      'Repetitive manual tasks draining time',
      'Disconnected tools and manual handoffs',
      'Reporting that eats hours each week',
    ],
    included: [
      'AI chatbots and customer support',
      'AI lead qualification and booking',
      'CRM and workflow automation',
      'Email and SMS automation',
      'AI content and reporting workflows',
      'Business process automation',
    ],
    approach: [
      { title: 'Audit', body: 'We identify the tasks and workflows worth automating.' },
      { title: 'Design', body: 'We map reliable, safe automations and guardrails.' },
      { title: 'Implement', body: 'We build and integrate the systems into your stack.' },
      { title: 'Refine', body: 'We monitor and improve accuracy and reliability.' },
    ],
    deliverables: [
      'Deployed AI assistants and automations',
      'Integrated workflows across your tools',
      'Documentation and handover',
      'Monitoring and iteration',
    ],
    engagement: 'Custom engagement — build plus ongoing support.',
    faqs: genericFaqs('AI and automation'),
    related: ['crm-automation', 'lead-generation', 'analytics'],
    image: '/images/insight-ai.png',
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    discipline: 'Lead Generation & Sales',
    tagline: 'Own the channel you actually control.',
    summary:
      'Lifecycle email and SMS that nurture, convert and retain your audience.',
    intro:
      'Email and SMS remain the highest-ROI channels you fully own. We build the automated lifecycle campaigns that nurture leads, convert customers and keep them coming back.',
    solve: [
      'A list you are not using',
      'No welcome, nurture or win-back flows',
      'Generic, untargeted broadcasts',
      'Poor deliverability and low opens',
    ],
    included: [
      'Lifecycle and automation strategy',
      'Welcome, nurture and win-back flows',
      'Campaign design and copywriting',
      'Segmentation and personalization',
      'SMS marketing integration',
      'Deliverability and performance reporting',
    ],
    approach: [
      { title: 'Strategy', body: 'We map the lifecycle and the messages each stage needs.' },
      { title: 'Build', body: 'We create the flows, templates and segments.' },
      { title: 'Send', body: 'We run campaigns with strong deliverability.' },
      { title: 'Optimize', body: 'We test and refine for opens, clicks and revenue.' },
    ],
    deliverables: [
      'Automated lifecycle flows',
      'Designed campaign templates',
      'Segmentation and personalization',
      'Performance reporting',
    ],
    engagement: 'Custom engagement — setup plus ongoing management.',
    faqs: genericFaqs('email marketing'),
    related: ['crm-automation', 'lead-generation', 'ai-automation'],
    image: '/images/work-ecommerce.png',
  },
  {
    slug: 'brand-creative',
    title: 'Brand & Creative',
    discipline: 'Brand & Creative',
    tagline: 'A brand that is impossible to confuse.',
    summary:
      'Brand strategy, identity and creative systems that make you instantly recognisable.',
    intro:
      'A strong brand earns attention and trust before a word is read. We build brand strategy, visual identity and creative systems that make your business look as capable as it is.',
    solve: [
      'An identity that feels dated or generic',
      'Inconsistent visuals across channels',
      'No clear brand guidelines',
      'Creative that does not stand out',
    ],
    included: [
      'Brand strategy and positioning',
      'Logo and visual identity design',
      'Brand guidelines and systems',
      'Graphic, social and ad creative',
      'Presentation and print design',
      'Creative campaign concepts',
    ],
    approach: [
      { title: 'Discover', body: 'We understand your positioning, audience and market.' },
      { title: 'Define', body: 'We shape the strategy and creative direction.' },
      { title: 'Design', body: 'We craft the identity and asset system.' },
      { title: 'Systemize', body: 'We document guidelines so the brand stays consistent.' },
    ],
    deliverables: [
      'Brand strategy and positioning',
      'Logo suite and visual identity',
      'Brand guidelines',
      'Creative asset templates',
    ],
    engagement: 'Custom engagement — scoped to the depth of the brand work.',
    faqs: genericFaqs('brand and creative'),
    related: ['web-development', 'content-production', 'social-media'],
    image: '/images/work-brand.png',
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    discipline: 'Growth & Performance',
    tagline: 'Decisions grounded in what actually happened.',
    summary:
      'Tracking, dashboards and reporting that turn data into clear direction.',
    intro:
      'You cannot improve what you cannot see. We implement reliable tracking and clear dashboards so you understand what is working and where the next opportunity is.',
    solve: [
      'Untrustworthy or missing tracking',
      'Data scattered across tools',
      'Reports nobody can act on',
      'No clear view of ROI',
    ],
    included: [
      'Analytics and event tracking setup',
      'Conversion and attribution modelling',
      'Custom dashboards and reporting',
      'Data cleanup and validation',
      'KPI definition and goals',
      'Insight reviews and recommendations',
    ],
    approach: [
      { title: 'Define', body: 'We agree the metrics that actually matter.' },
      { title: 'Instrument', body: 'We implement clean, reliable tracking.' },
      { title: 'Visualize', body: 'We build dashboards the team can use.' },
      { title: 'Advise', body: 'We translate data into clear next steps.' },
    ],
    deliverables: [
      'Configured analytics and tracking',
      'Custom dashboards',
      'KPI framework',
      'Regular insight reporting',
    ],
    engagement: 'Custom engagement — setup plus optional reporting.',
    faqs: genericFaqs('analytics'),
    related: ['seo', 'paid-advertising', 'conversion-optimization'],
    image: '/images/hero-data.png',
  },
  {
    slug: 'conversion-optimization',
    title: 'Conversion Optimization',
    discipline: 'Growth & Performance',
    tagline: 'Get more from the traffic you already have.',
    summary:
      'Research-led CRO that lifts conversion across pages, funnels and campaigns.',
    intro:
      'Small improvements in conversion compound across every channel. We use research, testing and design to turn more of your existing traffic into leads and customers.',
    solve: [
      'High traffic but low conversion',
      'Guesswork instead of testing',
      'Friction in key journeys',
      'Underperforming landing pages',
    ],
    included: [
      'Conversion research and audits',
      'Heuristic and analytics review',
      'A/B and experiment design',
      'Landing page and funnel optimization',
      'Copy and UX improvements',
      'Reporting on lift and learnings',
    ],
    approach: [
      { title: 'Research', body: 'We find where and why visitors drop off.' },
      { title: 'Hypothesize', body: 'We prioritize changes by expected impact.' },
      { title: 'Test', body: 'We run structured experiments.' },
      { title: 'Implement', body: 'We roll out and compound the wins.' },
    ],
    deliverables: [
      'Conversion audit and roadmap',
      'Experiment designs and results',
      'Optimized pages and funnels',
      'Ongoing lift reporting',
    ],
    engagement: 'Custom engagement — audit plus ongoing testing.',
    faqs: genericFaqs('conversion optimization'),
    related: ['web-development', 'analytics', 'lead-generation'],
    image: '/images/work-growth.png',
  },
]

const disciplineContext: Record<string, Pick<Service, 'capabilities' | 'audiences' | 'technology' | 'outcomes'>> = {
  'Web & Digital': {
    capabilities: [{ title: 'Strategy and structure', body: 'Clear information architecture and page systems built around how people decide.' }, { title: 'Design and development', body: 'Accessible, responsive experiences with the performance fundamentals in place.' }, { title: 'Measurement and iteration', body: 'A practical handoff that makes future improvements easier to prioritize.' }],
    audiences: ['Growing service businesses', 'Teams with an outdated or fragmented digital presence'],
    technology: ['Modern responsive web standards', 'CMS and analytics-aware implementation'],
    outcomes: ['Clearer positioning', 'A stronger path to inquiry or purchase', 'A maintainable digital foundation'],
  },
  'Growth & Performance': {
    capabilities: [{ title: 'Demand research', body: 'Understand the questions, intent, and competitive context around your offer.' }, { title: 'Acquisition systems', body: 'Build focused search and campaign foundations that can be measured.' }, { title: 'Continuous improvement', body: 'Use evidence from performance to decide what to adjust next.' }],
    audiences: ['Businesses ready to make visibility more intentional', 'Teams with traffic but inconsistent conversion'],
    technology: ['Search and campaign platforms', 'Analytics and conversion measurement'],
    outcomes: ['Better qualified attention', 'More useful reporting', 'A clearer optimization backlog'],
  },
  'Social & Content': {
    capabilities: [{ title: 'Editorial direction', body: 'Turn expertise and ideas into a repeatable point of view.' }, { title: 'Creative systems', body: 'Create formats that are recognizable without making every post from scratch.' }, { title: 'Publishing rhythm', body: 'Build a sustainable operating model for content and community.' }],
    audiences: ['Founder-led and expertise-driven brands', 'Teams that need more consistency across channels'],
    technology: ['Platform-native publishing workflows', 'Content planning and reporting systems'],
    outcomes: ['More consistent presence', 'Reusable creative direction', 'A stronger connection with the right audience'],
  },
  'Lead Generation & Sales': {
    capabilities: [{ title: 'Funnel design', body: 'Connect the offer, message, and next step into a coherent journey.' }, { title: 'Lead operations', body: 'Make qualification, routing, and follow-up easier for your team.' }, { title: 'Conversion learning', body: 'Identify where interest turns into momentum — or falls away.' }],
    audiences: ['Service businesses with a considered sales process', 'Teams ready to improve follow-up and pipeline clarity'],
    technology: ['Forms, CRMs, email, and SMS workflows', 'Conversion and pipeline reporting'],
    outcomes: ['Cleaner handoffs', 'Less lead leakage', 'More visibility into the path from inquiry to sale'],
  },
  'AI & Automation': {
    capabilities: [{ title: 'Opportunity mapping', body: 'Find repetitive work where an intelligent workflow can responsibly help.' }, { title: 'Human-centered automation', body: 'Keep review, judgment, and escalation visible where they matter.' }, { title: 'Operational handoff', body: 'Document systems so the team can understand and improve them.' }],
    audiences: ['Teams with repetitive customer or operational workflows', 'Businesses exploring practical AI use cases'],
    technology: ['AI-assisted workflows', 'CRM, support, and internal tool integrations'],
    outcomes: ['Faster routine work', 'More consistent responses', 'A clearer path from experiment to useful system'],
  },
  'Brand & Creative': {
    capabilities: [{ title: 'Strategic clarity', body: 'Define what makes the business distinct and worth choosing.' }, { title: 'Visual expression', body: 'Build a flexible visual language that works across touchpoints.' }, { title: 'Creative production', body: 'Extend the system into the assets and campaigns the business actually needs.' }],
    audiences: ['Businesses entering a new phase', 'Teams whose identity no longer matches their ambition'],
    technology: ['Flexible brand and design systems', 'Digital-first creative production'],
    outcomes: ['More confident communication', 'Stronger recognition', 'A system the team can use consistently'],
  },
  'Analytics & Optimization': {
    capabilities: [{ title: 'Measurement planning', body: 'Define the events, funnels, and questions that matter to the business.' }, { title: 'Decision-ready reporting', body: 'Turn scattered activity into a concise view of what deserves attention.' }, { title: 'Experimentation', body: 'Create a prioritized backlog for learning and improvement.' }],
    audiences: ['Teams making decisions from incomplete data', 'Businesses ready to move from reporting to learning'],
    technology: ['Analytics, dashboards, and event planning', 'Conversion and experiment frameworks'],
    outcomes: ['More trustworthy decisions', 'Shared performance language', 'A focused path to improvement'],
  },
}

export const services: Service[] = baseServices.map((service) => ({ ...service, ...disciplineContext[service.discipline] }))

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServiceTitle(slug: string): string {
  return getService(slug)?.title ?? slug
}
