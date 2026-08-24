import { Container, SectionHeading, ArrowLink } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { ArticleCard } from "@/components/insights/article-card"
import { articles } from "@/lib/data/insights"

export function InsightsPreview() {
  const latest = articles.slice(0, 3)
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas worth your time."
            description="Perspectives on strategy, search, technology and growth from the team."
          />
          <ArrowLink href="/insights">Read the blog</ArrowLink>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 90}>
              <ArticleCard article={article} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
