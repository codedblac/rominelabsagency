"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/work/project-card"
import { type Project, type WorkCategory, workCategories } from "@/lib/data/work"

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<WorkCategory | "All">("All")
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active))

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work by category">
        {workCategories.map((cat) => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 3} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">No projects in this category yet.</p>
      ) : null}
    </div>
  )
}
