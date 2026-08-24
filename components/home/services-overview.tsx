import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { disciplines } from "@/lib/data/services"

const disciplineImages: Record<string, string> = {
  'web-digital': '/images/hero-technology.png',
  'growth-performance': '/images/work-growth.png',
  'social-content': '/images/hero-creative.png',
  'lead-generation': '/images/hero-leadership.png',
  'ai-automation': '/images/hero-data.png',
  'analytics-optimization': '/images/insight-ai.png',
  'brand-creative': '/images/work-brand.png',
}

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One partner for the
                <br className="hidden sm:block" /> full digital picture.
              </>
            }
            description="From the website that anchors your brand to the campaigns that fill your pipeline, our disciplines connect into a single, coherent growth engine."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 80}>
              <Link
                href={`/services/${d.primarySlug}`}
                className="group relative flex h-full min-h-80 flex-col justify-between gap-10 overflow-hidden bg-ink p-8 text-ink-foreground transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundImage: `linear-gradient(180deg, color-mix(in oklch, var(--ink) 25%, transparent), color-mix(in oklch, var(--ink) 92%, transparent)), url(${disciplineImages[d.id]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-brand">{d.number}</span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ink-foreground">{d.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-muted">{d.description}</p>
                </div>
                <ul className="relative z-10 flex flex-wrap gap-x-3 gap-y-1.5">
                  {d.services.slice(0, 4).map((s) => (
                    <li key={s} className="text-xs text-muted-foreground/80">
                      {s}
                    </li>
                  ))}
                  {d.services.length > 4 ? (
                    <li className="text-xs font-medium text-brand">+{d.services.length - 4} more</li>
                  ) : null}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
