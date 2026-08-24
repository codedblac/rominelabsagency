import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { projects, getProject } from "@/lib/data/work"
import { getServiceTitle } from "@/lib/data/services"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.client}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Romine Labs`,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: project.title, href: `/work/${project.slug}` },
  ]

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <PageHero
        eyebrow={project.projectType}
        title={project.title}
        description={project.summary}
        crumbs={crumbs}
      />

      {/* Hero image */}
      <section className="bg-background">
        <Container className="-mt-8 lg:-mt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} — ${project.client}`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Meta bar */}
      <section className="bg-background py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 border-y border-border py-8 sm:grid-cols-3">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Client</h2>
              <p className="mt-2 font-serif text-lg text-foreground">{project.client}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</h2>
              <p className="mt-2 font-serif text-lg text-foreground">{project.projectType}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/services/${s}`}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {getServiceTitle(s)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge & strategy */}
      <section className="bg-background pb-8">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">The challenge</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Our strategy</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">{project.strategy}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution */}
      <section className="bg-background py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="What we did" title="Execution." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.execution.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 ? (
        <section className="bg-background pb-16 lg:pb-20">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${project.title} visual ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Results — only when real, verified results exist */}
      {project.results.length > 0 ? (
        <section className="border-y border-border bg-ink py-20 text-ink-foreground lg:py-24">
          <Container>
            <SectionHeading onDark eyebrow="Outcomes" title="Results." />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label}>
                  <div className="display text-5xl text-ink-foreground">{r.value}</div>
                  <div className="mt-2 text-sm text-ink-muted">{r.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Testimonial — only when a real, attributed quote exists */}
      {project.testimonial ? (
        <section className="bg-card py-20 lg:py-24">
          <Container>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote className="text-balance font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                {`"${project.testimonial.quote}"`}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{project.testimonial.name}</span>
                {" — "}
                {project.testimonial.role}
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      {/* More work */}
      <section className="border-t border-border bg-background py-20 lg:py-24">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl text-foreground">More work</h2>
            <Link href="/work" className="text-sm font-medium text-brand hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.title} — ${p.client}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-brand">{p.title}</h3>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
