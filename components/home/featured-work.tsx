import { Container, SectionHeading, ArrowLink } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { ProjectCard } from "@/components/work/project-card"
import { projects } from "@/lib/data/work"

export function FeaturedWork() {
  const featured = projects.slice(0, 3)
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Work we're proud to put our name on."
            description="A look at recent projects across web, brand, content and growth."
          />
          <ArrowLink href="/work">View all work</ArrowLink>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
