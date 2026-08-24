import Image from "next/image"
import Link from "next/link"
import { type Article, formatDate } from "@/lib/data/insights"

export function ArticleCard({ article, priority }: { article: Article; priority?: boolean }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group flex flex-col">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span className="text-brand">{article.category}</span>
        <span aria-hidden>&middot;</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className="mt-3 text-balance font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-brand">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-pretty text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
      <time dateTime={article.date} className="mt-4 text-xs text-muted-foreground/70">
        {formatDate(article.date)}
      </time>
    </Link>
  )
}
