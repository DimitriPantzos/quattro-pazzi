import type { Metadata } from "next"
import { ExternalLink, ShoppingBag, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { LOCATION, BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Order Online | Pickup & Delivery",
  description:
    "Order online from Quattro Pazzi Cafe in Fairfield, CT. Pickup via Toast or delivery via Uber Eats. Authentic Italian food delivered to your door.",
  alternates: {
    canonical: `${BRAND.url}/order`,
  },
}

export default function OrderPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Order Online", href: "/order" }]} />

      <HeroSection
        eyebrow="Order Online"
        title="Pickup or Delivery"
        description="Enjoy Quattro Pazzi's authentic Italian cuisine at home. Order for pickup or have it delivered to your door."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Pickup */}
            <Card className="border-border/50 text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rosso-50">
                  <ShoppingBag className="h-7 w-7 text-rosso-500" />
                </div>
                <h2 className="mt-4 font-serif text-2xl">Pickup</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Order ahead and pick up at our restaurant. Ready when you arrive.
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {LOCATION.address}, {LOCATION.city}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-rosso-500 hover:bg-rosso-600"
                >
                  <a
                    href={LOCATION.orderUrls.pickup}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on Toast
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="border-border/50 text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-oro-50">
                  <Truck className="h-7 w-7 text-oro-600" />
                </div>
                <h2 className="mt-4 font-serif text-2xl">Delivery</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get Italian favorites delivered to your door via Uber Eats.
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Delivery area varies by platform
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-oro-600 hover:bg-oro-700"
                >
                  <a
                    href={LOCATION.orderUrls.delivery}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on Uber Eats
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer to call?{" "}
            <a
              href={`tel:${LOCATION.phone}`}
              className="font-medium text-rosso-500 hover:text-rosso-600"
            >
              {LOCATION.phoneFormatted}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
