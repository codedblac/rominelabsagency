import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Container } from "@/components/ui/primitives"
import { CtaBand } from "@/components/shared/cta-band"
import { ArticleCard } from "@/components/insights/article-card"
import { ArticleJsonLd } from "@/components/seo/json-ld"
import { articles, getArticle, formatDate } from "@/lib/data/insights"
import { createMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: "Article not found" }
  return createMetadata({
    title: `${article.title} — Insights`,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    image: article.image,
    type: 'article',
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        date={article.date}
        image={article.image}
      />

      <article>
        <header className="border-b border-border">
          <Container className="py-16 md:py-24">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              All insights
            </Link>
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <span className="text-brand">{article.category}</span>
              <span aria-hidden>&middot;</span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{article.author}</span>
              <span aria-hidden>&middot;</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
          </Container>
        </header>

        <Container className="py-12 md:py-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            {article.body.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={i} className="mt-12 font-serif text-2xl leading-snug text-foreground first:mt-0">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
                  {block.text}
                </p>
              ),
            )}
          </div>
        </Container>
      </article>

      <section className="border-t border-border py-16 md:py-24">
        <Container>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">Keep reading</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
