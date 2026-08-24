import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container, Eyebrow } from "@/components/ui/primitives"
import { WebPageJsonLd } from "@/components/seo/json-ld"

type Crumb = { name: string; href: string }

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  align = "left",
  image,
  schemaPath,
  schemaDescription,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  crumbs?: Crumb[]
  align?: "left" | "center"
  image?: string
  schemaPath?: string
  schemaDescription?: string
}) {
  const context = `${eyebrow ?? ''} ${typeof title === 'string' ? title : ''}`.toLowerCase()
  const contextualImage = image ?? (context.includes('social') || context.includes('creative') ? '/images/hero-creative.png' : context.includes('growth') || context.includes('analytics') || context.includes('seo') ? '/images/hero-data.png' : context.includes('lead') || context.includes('sales') || context.includes('professional') ? '/images/hero-leadership.png' : context.includes('health') || context.includes('dental') ? '/images/industry-healthcare.png' : context.includes('technology') || context.includes('web') || context.includes('ai') ? '/images/hero-technology.png' : context.includes('real estate') ? '/images/industry-realestate.png' : '/images/hero-architecture.png')
  return (
    <>
      {schemaPath ? <WebPageJsonLd title={typeof title === 'string' ? title : eyebrow ?? 'Romine Labs'} description={schemaDescription} path={schemaPath} /> : null}
      <section
      data-hero-dark
      className="relative overflow-hidden bg-ink pb-16 pt-28 text-ink-foreground sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
      style={{ backgroundImage: `linear-gradient(90deg, color-mix(in oklch, var(--ink) 92%, transparent) 0%, color-mix(in oklch, var(--ink) 68%, transparent) 58%, color-mix(in oklch, var(--ink) 52%, transparent) 100%), url(${contextualImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink/20" />
      {/* Restrained signature: a single soft cobalt glow, no gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, color-mix(in oklch, var(--brand) 40%, transparent), transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.5,
        }}
      />
      <Container className="relative">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1">
                  {i > 0 ? <ChevronRight className="size-3 opacity-50" aria-hidden /> : null}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink-foreground/80">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.href} className="transition-colors hover:text-ink-foreground">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <Eyebrow onDark className={align === "center" ? "justify-center" : undefined}>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h1 className="display mt-6 text-balance text-4xl text-ink-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
      </section>
    </>
  )
}
