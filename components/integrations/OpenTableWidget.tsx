"use client"

import { RESERVATIONS, BRAND } from "@/lib/locations"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ReservationWidget() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-center">
      <h3 className="font-serif text-2xl">Make a Reservation</h3>
      <p className="mt-2 text-muted-foreground">
        Book your table at {BRAND.name} through Toast Tables for the best dining experience.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-6 bg-rosso-500 text-lg hover:bg-rosso-600"
      >
        <a
          href={RESERVATIONS.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reserve a Table
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        You&apos;ll be redirected to Toast Tables to complete your reservation
      </p>
    </div>
  )
}
