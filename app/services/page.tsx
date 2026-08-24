import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { disciplines, services } from "@/lib/data/services"
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: "Services | Web, SEO, Social, Lead Gen, AI & Brand",
  description: "Explore Romine Labs services across web development, SEO, paid media, social content, lead generation, AI automation, analytics, and brand strategy.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow, under one roof."
        description="Six connected disciplines — from the digital foundation your brand stands on to the campaigns and systems that compound growth over time."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <div className="bg-background py-20 lg:py-28">
        <Container className="flex flex-col gap-20">
          {disciplines.map((d) => {
            const linked = services.filter((s) => s.discipline === d.title)
            return (
              <section key={d.id} id={d.id} className="scroll-mt-24">
                <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-brand">{d.number}</span>
                      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{d.title}</h2>
                    </div>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{d.description}</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {linked.length > 0 ? (
                    linked.map((s, i) => (
                      <Reveal key={s.slug} delay={(i % 3) * 70}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40 hover:bg-muted"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="font-serif text-lg text-foreground group-hover:text-brand">
                                {s.title}
                              </h3>
                              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                          </div>
                        </Link>
                      </Reveal>
                    ))
                  ) : (
                    <ul className="col-span-full flex flex-wrap gap-2">
                      {d.services.map((name) => (
                        <li
                          key={name}
                          className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )
          })}
        </Container>
      </div>

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Let's find the highest-impact move for your business."
        description="Tell us your goals and we'll recommend the right mix of services — no pressure, no jargon."
      />
    </>
  )
}
