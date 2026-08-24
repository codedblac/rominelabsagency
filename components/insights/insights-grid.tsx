"use client"

import { useMemo, useState } from "react"
import { articles } from "@/lib/data/insights"
import { ArticleCard } from "@/components/insights/article-card"
import { cn } from "@/lib/utils"

const filters = ["All", "Digital Strategy", "SEO", "Web Development", "AI & Automation", "Social Media", "Lead Generation"]

export function InsightsGrid() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    if (active === "All") return articles
    return articles.filter((a) => a.category === active)
  }, [active])

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by topic">
        {filters.map((f) => {
          const selected = active === f
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
