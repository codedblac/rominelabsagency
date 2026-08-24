import type { ServiceFaq } from './services'

export type Subservice = {
  slug: string
  title: string
  discipline: string
  parentSlug: string
  summary: string
  intro: string
  capabilities: { title: string; body: string }[]
  deliverables: string[]
  faqs: ServiceFaq[]
}

const faq = (topic: string): ServiceFaq[] => [
  { question: `What does ${topic.toLowerCase()} include?`, answer: `We scope ${topic.toLowerCase()} around your audience, goals, existing assets, and the level of ongoing support you need. The proposal makes the work, responsibilities, and next steps clear.` },
  { question: 'Can this work with our current website or tools?', answer: 'Usually. We start by reviewing your current setup and recommend changes that protect what is working while addressing the highest-impact gaps.' },
  { question: 'How do we get started?', answer: 'Start with a discovery conversation. We will learn what you are trying to achieve, identify the constraints, and outline a focused plan.' },
]

const entries = ([
  ['corporate-websites','Corporate Websites','Web & Digital','web-development','Corporate websites that clarify your offer, build confidence, and make the next step obvious.',['Positioning-led information architecture','Responsive page systems','CMS and editorial workflows'],['Discovery and sitemap','Design direction and component system','Development, QA, and launch']],
  ['ecommerce','E-commerce Development','Web & Digital','web-development','E-commerce experiences designed to help the right customers find, trust, and buy from you.',['Catalog and collection architecture','Product detail page systems','Conversion-aware checkout journeys'],['Storefront strategy','Product and collection templates','Analytics and launch handoff']],
  ['landing-pages','Landing Pages','Web & Digital','web-development','Focused landing pages for campaigns, offers, launches, and high-intent acquisition journeys.',['Message-to-market alignment','Responsive campaign layouts','Measurement-ready conversion paths'],['Page strategy and copy direction','Design and build','Tracking and iteration plan']],
  ['social-media-management','Social Media Management','Social & Content','social-media','A consistent social presence built around useful content, recognizable creative, and sustainable publishing.',['Channel strategy','Content calendars','Community response guidelines'],['Monthly content plan','Creative direction and templates','Performance review framework']],
  ['short-form-video','Short-Form Video','Social & Content','social-media','Short-form video systems for Instagram, TikTok, and YouTube Shorts that turn ideas into repeatable content.',['Hook and format development','Editing and caption systems','Platform-native packaging'],['Content concepts','Edited short-form assets','Publishing recommendations']],
  ['local-seo','Local SEO','Growth & Performance','seo','Local search foundations that help nearby customers discover and choose your business.',['Google Business Profile optimization','Local landing page strategy','Review and citation guidance'],['Local visibility audit','On-page recommendations','Measurement baseline']],
  ['google-ads','Google Ads','Growth & Performance','seo','Search campaigns built around intent, relevance, and disciplined measurement.',['Account and query structure','Ad and landing page alignment','Search term analysis'],['Campaign architecture','Ad copy direction','Optimization reporting']],
  ['lead-generation','Lead Generation','Lead Generation & Sales','lead-generation','Lead generation systems that connect the right message to a clear, qualified next step.',['Offer and funnel strategy','Lead capture and qualification','Follow-up journey mapping'],['Funnel map','Lead form and routing recommendations','Measurement plan']],
  ['crm-automation','CRM Automation','Lead Generation & Sales','lead-generation','CRM workflows that keep opportunities organized and follow-up consistent without losing the human touch.',['Pipeline design','Lifecycle automation','Handoff and notification logic'],['Workflow map','Automation specifications','Team enablement notes']],
  ['ai-automation','AI Automation','AI & Automation','ai-automation','Practical AI workflows that reduce repetitive work while keeping people in control of important decisions.',['Opportunity mapping','Human-in-the-loop workflows','Prompt and evaluation systems'],['Automation roadmap','Workflow prototypes','Governance and handoff notes']],
  ['brand-strategy','Brand Strategy','Brand & Creative','brand-creative','A clear strategic foundation for how your business should position, sound, and show up.',['Audience and category framing','Positioning and messaging','Creative direction'],['Strategy workshop','Messaging framework','Brand direction brief']],
  ['analytics-optimization','Analytics & Optimization','Analytics & Optimization','analytics','Measurement and optimization systems that turn activity into decisions.',['Event and funnel planning','Dashboard requirements','Experimentation roadmap'],['Measurement plan','Reporting structure','Optimization backlog']],
] as [string, string, string, string, string, string[], string[]][]).map(([slug, title, discipline, parentSlug, summary, capabilities, deliverables]) => ({ slug, title, discipline, parentSlug, summary, intro: summary, capabilities: capabilities.map((x: string) => ({ title: x, body: 'A focused workstream shaped around your current context, audience, and measurable next step.' })), deliverables })) as Omit<Subservice, 'faqs'>[]

export const subservices: Subservice[] = entries.map((entry) => ({ ...entry, faqs: faq(entry.title) }))
export const getSubservice = (slug: string) => subservices.find((item) => item.slug === slug)
