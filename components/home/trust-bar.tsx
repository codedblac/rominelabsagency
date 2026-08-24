import { Reveal } from "@/components/ui/reveal"
import { Container } from "@/components/ui/primitives"

const stats = [
  { value: "12+", label: "Years in business" },
  { value: "480+", label: "Projects delivered" },
  { value: "97%", label: "Client retention" },
  { value: "4.9/5", label: "Average client rating" },
]

const clients = ["Northwind", "Vertex Labs", "Meridian", "Hearthstone", "Blue Harbor", "Lumen & Co."]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 border-b border-border pb-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div>
                <div className="display text-4xl text-foreground md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col items-start gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by ambitious teams
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((client) => (
              <span key={client} className="font-serif text-lg text-foreground/70">
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
