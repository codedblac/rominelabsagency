import { Container, Eyebrow, CtaButton } from "@/components/ui/primitives"

export function CtaBand({
  eyebrow = "Let's build something",
  title = "Ready to move your business forward?",
  description = "Tell us where you want to go. We'll show you how technology, creative and growth can get you there.",
}: {
  eyebrow?: string
  title?: string
  description?: string
}) {
  return (
    <section className="bg-brand text-primary-foreground">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="text-primary-foreground/70">{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href="/contact"
              className="bg-primary-foreground text-brand hover:bg-primary-foreground/90 focus-visible:ring-primary-foreground focus-visible:ring-offset-brand"
            >
              Start a Project
            </CtaButton>
            <CtaButton
              href="/work"
              variant="ghost"
              className="border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground hover:bg-white/10 focus-visible:ring-offset-brand"
            >
              See our work
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
