import type { Metadata } from "next"
import { Phone, Clock, Users } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { OpenTableWidget } from "@/components/integrations/OpenTableWidget"
import { LOCATION, BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Reservations | Book a Table",
  description:
    "Make a reservation at Quattro Pazzi Cafe in Fairfield, CT. Book online through OpenTable or call us. Walk-ins always welcome.",
  alternates: {
    canonical: `${BRAND.url}/reservations`,
  },
}

export default function ReservationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Reservations", href: "/reservations" }]} />

      <HeroSection
        eyebrow="Reservations"
        title="Reserve Your Table"
        description="Book online through OpenTable or call us directly. Walk-ins are always welcome, but reservations are recommended for dinner and weekends."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <OpenTableWidget />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Phone className="mx-auto h-6 w-6 text-rosso-500" />
              <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">
                Call to Reserve
              </h3>
              <a
                href={`tel:${LOCATION.phone}`}
                className="mt-1 block text-sm text-rosso-500 hover:text-rosso-600"
              >
                {LOCATION.phoneFormatted}
              </a>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Users className="mx-auto h-6 w-6 text-rosso-500" />
              <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">
                Walk-Ins Welcome
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                First come, first served
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Clock className="mx-auto h-6 w-6 text-rosso-500" />
              <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">
                Large Parties
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                6+ guests? Call ahead
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-crema-elevated p-6 text-center">
            <h3 className="font-serif text-xl">Private Dining Available</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Planning a special event? We offer private and semi-private dining for
              celebrations, corporate events, and intimate gatherings.
            </p>
            <a
              href="/events"
              className="mt-3 inline-block text-sm font-medium text-rosso-500 hover:text-rosso-600"
            >
              Learn about private events &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
