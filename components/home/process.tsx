import { Container, SectionHeading } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"

const steps = [
  {
    step: "01",
    title: "Discover",
    body: "We start by understanding your business, your market and your goals — so every recommendation is grounded in commercial reality, not guesswork.",
  },
  {
    step: "02",
    title: "Design & Strategy",
    body: "We map the right mix of web, brand, content and growth work, then design experiences and plans built to perform against clear objectives.",
  },
  {
    step: "03",
    title: "Build",
    body: "Our team executes with craft — fast, accessible websites, sharp creative and campaigns engineered to convert, all built to last.",
  },
  {
    step: "04",
    title: "Grow",
    body: "We measure what matters, optimise continuously and treat the launch as the starting line — compounding results over time.",
  },
]

export function Process() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A process built to compound."
          description="Clear, collaborative and outcome-driven — with no surprises and no jargon."
        />
        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <li className="flex h-full flex-col gap-4 bg-card p-8">
                <span className="font-mono text-sm text-brand">{s.step}</span>
                <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
