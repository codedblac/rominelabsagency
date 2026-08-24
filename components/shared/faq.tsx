"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function Faq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif text-lg text-foreground">{faq.question}</span>
                <Plus
                  className={cn(
                    "size-5 shrink-0 text-brand transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
