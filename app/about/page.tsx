import type { Metadata } from "next"
import { UtensilsCrossed, Grape, Heart, Clock } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { CTABanner } from "@/components/sections/CTABanner"
import { BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "About Us | Our Story",
  description:
    "Quattro Pazzi Cafe has been Fairfield, CT's beloved Italian restaurant since 1997. Authentic cuisine, warm hospitality, and a passion for great food.",
  alternates: {
    canonical: `${BRAND.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />

      <HeroSection
        eyebrow="Our Story"
        title="A Fairfield Tradition Since 1997"
        description="For over 25 years, Quattro Pazzi Cafe has been bringing authentic Italian cuisine and warm hospitality to Fairfield, Connecticut."
      />

      {/* Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl">Welcome to Quattro Pazzi</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Since opening our doors in 1997, Quattro Pazzi Cafe has been a cornerstone
              of Fairfield&apos;s dining scene. Our name, meaning &ldquo;Four Crazies&rdquo; in
              Italian, reflects the passion and spirit we bring to every dish, every glass
              of wine, and every guest experience.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Under the guidance of {BRAND.chef}, our kitchen crafts authentic Italian
              and Mediterranean dishes using time-honored techniques and the freshest
              ingredients. From handmade pasta to fresh seafood, every plate tells a story
              of culinary tradition and creative excellence.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond the food, Quattro Pazzi is about community. We&apos;ve hosted
              countless celebrations, business dinners, and family gatherings. Our dining
              room has been the backdrop for first dates and anniversaries, promotions and
              retirements, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="border-y border-border bg-crema-elevated py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">
            What Sets Us Apart
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rosso-50">
                <UtensilsCrossed className="h-6 w-6 text-rosso-500" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  Handmade Pasta
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our pasta is made fresh daily using traditional Italian techniques.
                  From pappardelle to gnocchi, you can taste the difference that
                  handcrafted quality makes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rosso-50">
                <Grape className="h-6 w-6 text-rosso-500" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  Curated Wine Program
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our award-winning wine list features carefully selected Italian and
                  international wines. Our staff is trained to help you find the perfect
                  pairing for your meal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rosso-50">
                <Heart className="h-6 w-6 text-rosso-500" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  Community First
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We&apos;re more than a restaurant &mdash; we&apos;re part of the Fairfield
                  community. From local fundraisers to neighborhood gatherings, Quattro
                  Pazzi is rooted in the town we serve.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rosso-50">
                <Clock className="h-6 w-6 text-rosso-500" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  25+ Years of Excellence
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Opened in 1997, we&apos;ve grown from a neighborhood favorite to one of
                  Fairfield County&apos;s most beloved Italian restaurants, all while
                  staying true to our roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Come Experience It Yourself"
        description="Reserve your table and discover why Fairfield has been coming to Quattro Pazzi for over 25 years."
        buttonText="Make a Reservation"
        buttonHref="/reservations"
        variant="rosso"
      />
    </>
  )
}
