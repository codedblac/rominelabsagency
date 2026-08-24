import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/data/work"

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} — ${project.client}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4 text-foreground" />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-brand">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
        </div>
        <span className="mt-1 shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
      </div>
    </Link>
  )
}
