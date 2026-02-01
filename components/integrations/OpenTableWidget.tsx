"use client"

import { OPENTABLE, BRAND } from "@/lib/locations"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function OpenTableWidget() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-center">
      <h3 className="font-serif text-2xl">Make a Reservation</h3>
      <p className="mt-2 text-muted-foreground">
        Book your table at {BRAND.name} through OpenTable for the best dining experience.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-6 bg-rosso-500 text-lg hover:bg-rosso-600"
      >
        <a
          href={OPENTABLE.widgetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reserve on OpenTable
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        You&apos;ll be redirected to OpenTable to complete your reservation
      </p>
    </div>
  )
}
