import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Container, SectionHeading, CtaButton } from '@/components/ui/primitives'
import { PageHero } from '@/components/shared/page-hero'
import { CtaBand } from '@/components/shared/cta-band'
import { Faq } from '@/components/shared/faq'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import { getSubservice, subservices } from '@/lib/data/subservices'
import { getService } from '@/lib/data/services'

export function generateStaticParams() { return subservices.map((item) => ({ slug: item.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getSubservice((await params).slug)
  if (!item) return {}
  return { title: `${item.title} — Romine Labs`, description: item.summary, alternates: { canonical: `/services/specialties/${item.slug}` } }
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getSubservice((await params).slug)
  if (!item) notFound()
  const parent = getService(item.parentSlug)
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: item.title, href: `/services/specialties/${item.slug}` }]
  return <>
    <BreadcrumbJsonLd items={crumbs} /><FaqJsonLd faqs={item.faqs} />
    <PageHero eyebrow={item.discipline} title={item.title} description={item.summary} crumbs={crumbs} />
    <section className="bg-background py-20 lg:py-28"><Container>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-7"><p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">{item.intro}</p><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">A focused engagement from Romine Labs, designed to fit the larger growth system rather than operate as a disconnected tactic.</p></div><div className="rounded-2xl bg-ink p-8 text-ink-foreground lg:col-span-5"><p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Part of {item.discipline}</p><p className="mt-4 font-serif text-xl">Build the right foundation, then improve it deliberately.</p>{parent && <Link href={`/services/${parent.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm text-ink-foreground underline underline-offset-4">Explore {parent.title}<ArrowUpRight className="size-4" /></Link>}</div></div>
    </Container></section>
    <section className="border-y border-border bg-card py-20 lg:py-28"><Container><SectionHeading eyebrow="What we build" title="Specific work, clear outcomes." /><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">{item.capabilities.map((cap) => <article key={cap.title} className="bg-card p-7"><h2 className="font-serif text-xl text-foreground">{cap.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.body}</p></article>)}</div></Container></section>
    <section className="bg-background py-20 lg:py-28"><Container><div className="grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Deliverables" title="A useful handoff." /><ul className="mt-8 flex flex-col gap-4">{item.deliverables.map((d) => <li key={d} className="flex gap-3 leading-relaxed"><Check className="mt-1 size-5 shrink-0 text-brand" />{d}</li>)}</ul></div><div><SectionHeading eyebrow="FAQs" title="Good questions, answered." /><div className="mt-8"><Faq faqs={item.faqs} /></div></div></div></Container></section>
    <CtaBand eyebrow="Ready to make the next move?" title="Let's build the right thing first." description="Tell us what you are trying to improve and we will help define the clearest path forward." />
  </>
}
