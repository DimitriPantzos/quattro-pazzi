import type { Metadata } from "next"
import { Users, Utensils, Building2, PartyPopper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { CateringForm } from "@/components/forms/CateringForm"
import { BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Catering | Italian Catering in Fairfield CT",
  description:
    "Quattro Pazzi Cafe catering for events of all sizes. Authentic Italian cuisine for corporate events, celebrations, and private gatherings in Fairfield, CT.",
  alternates: {
    canonical: `${BRAND.url}/catering`,
  },
}

const PACKAGES = [
  {
    icon: Users,
    name: "Intimate Gatherings",
    capacity: "10-25 guests",
    description:
      "Perfect for dinner parties, milestone celebrations, and small corporate events. A curated selection of antipasti, pasta, and desserts.",
  },
  {
    icon: PartyPopper,
    name: "Medium Events",
    capacity: "25-60 guests",
    description:
      "Ideal for office parties, holiday gatherings, and celebrations. Customizable menu with full Italian spread.",
  },
  {
    icon: Building2,
    name: "Large Events",
    capacity: "60+ guests",
    description:
      "Full-service catering for large events, corporate functions, and weddings. Dedicated setup and service available.",
  },
  {
    icon: Utensils,
    name: "Corporate & Recurring",
    capacity: "Any size",
    description:
      "Weekly office lunches, monthly team dinners, or recurring catering needs. Special pricing for ongoing partnerships.",
  },
]

export default function CateringPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Catering", href: "/catering" }]} />

      <HeroSection
        eyebrow="Catering"
        title="Italian Catering for Every Occasion"
        description="From intimate dinner parties to grand celebrations, we bring authentic Italian cuisine to your event. Made with the same care you expect from our restaurant."
      />

      {/* Packages */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Catering Packages</h2>
          <p className="mt-3 text-center text-lg text-muted-foreground">
            Every order is customized to your needs
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className="card-interactive border-border/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rosso-50">
                    <pkg.icon className="h-6 w-6 text-rosso-500" />
                  </div>
                  <CardTitle className="font-sans text-lg font-semibold">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-rosso-500">
                    {pkg.capacity}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-y border-border bg-crema-elevated py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl">Our Catering Offerings</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Antipasti & Starters
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bruschetta, charcuterie boards, calamari, arancini, and imported cheese platters.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Pasta & Entrees
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Handmade pasta, chicken parmigiana, salmon, and our signature specialties in family-style portions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Full Service
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Delivery, setup, chafing dishes, serving supplies, and optional staffing for a seamless event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Get a Free Quote</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Tell us about your event and we&apos;ll create a custom Italian catering
            package for you.
          </p>
          <div className="mt-8">
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  )
}
