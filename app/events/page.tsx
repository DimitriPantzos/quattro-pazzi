import type { Metadata } from "next"
import { Wine, Users, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { EventForm } from "@/components/forms/EventForm"
import { BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Private Events | Private Dining in Fairfield CT",
  description:
    "Host your private event at Quattro Pazzi Cafe. Rehearsal dinners, corporate events, birthday celebrations, and intimate gatherings in Fairfield, CT.",
  alternates: {
    canonical: `${BRAND.url}/events`,
  },
}

const EVENT_TYPES = [
  {
    icon: Wine,
    name: "Rehearsal Dinners & Celebrations",
    description:
      "Make your special occasion memorable with an authentic Italian dining experience. Customized menus, dedicated service, and the perfect atmosphere.",
  },
  {
    icon: Users,
    name: "Corporate Events",
    description:
      "Impress clients and colleagues with private dining for business meetings, team dinners, and corporate gatherings. AV equipment available.",
  },
  {
    icon: Sparkles,
    name: "Private Parties",
    description:
      "From milestone birthdays to holiday parties, we create unforgettable events with personalized menus and attentive service.",
  },
]

export default function EventsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Private Events", href: "/events" }]} />

      <HeroSection
        eyebrow="Private Events"
        title="Your Special Occasion, Our Passion"
        description="From intimate dinners to grand celebrations, Quattro Pazzi provides the perfect setting and authentic Italian cuisine for your private event."
      />

      {/* Event Types */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Event Types</h2>
          <p className="mt-3 text-center text-lg text-muted-foreground">
            We accommodate a range of private events
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {EVENT_TYPES.map((type) => (
              <Card key={type.name} className="card-interactive border-border/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rosso-50">
                    <type.icon className="h-6 w-6 text-rosso-500" />
                  </div>
                  <CardTitle className="font-sans text-lg font-semibold">
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-y border-border bg-crema-elevated py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl">What&apos;s Included</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Custom Menus
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Work with our chef to create the perfect Italian menu for your guests.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Wine Pairings
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Our sommelier will help select wines to complement your chosen menu.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Private Space
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Semi-private and fully private dining areas for up to 50 guests.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Dedicated Service
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A dedicated team to ensure your event runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Plan Your Event</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Tell us about your vision and we&apos;ll help bring it to life.
          </p>
          <div className="mt-8">
            <EventForm />
          </div>
        </div>
      </section>
    </>
  )
}
