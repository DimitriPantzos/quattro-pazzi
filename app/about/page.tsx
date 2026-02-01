import type { Metadata } from "next"
import Image from "next/image"
import { UtensilsCrossed, Grape, Heart, Clock } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/locations"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Our Story",
  description:
    "Quattro Pazzi has been Fairfield, CT's beloved Italian restaurant since 1997. Authentic cuisine, warm hospitality, and a passion for great food.",
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
        description="For nearly 30 years, Quattro Pazzi has been bringing authentic Italian cuisine and warm hospitality to Fairfield, Connecticut."
      />

      {/* Chef & Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/food/ravioli-cocktails.jpg"
                alt="Burrata ravioli with craft cocktails at the bar"
                width={600}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm uppercase tracking-[0.3em] text-rosso-500"
                style={{ fontFamily: "var(--font-decorative)" }}
              >
                Our Story
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Welcome to <span className="italic">Quattro Pazzi</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Since opening our doors in 1997, Quattro Pazzi has been a cornerstone
                of Fairfield&apos;s dining scene. Our name, meaning &ldquo;Four Crazies&rdquo; in
                Italian, reflects the passion and spirit we bring to every dish, every glass
                of wine, and every guest experience.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Under the guidance of {BRAND.chef}, our kitchen crafts authentic Italian
                and Mediterranean dishes using time-honored techniques and the freshest
                ingredients. From handmade pasta to fresh seafood, every plate tells a story
                of culinary tradition and creative excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image break */}
      <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
        <Image
          src="/images/interior/interior-dining.jpg"
          alt="Quattro Pazzi dining room"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full items-center justify-center px-4 text-center">
          <p className="max-w-2xl text-xl leading-relaxed text-white/80 sm:text-2xl">
            &ldquo;Beyond the food, Quattro Pazzi is about community. We&apos;ve hosted
            countless celebrations, first dates, anniversaries, and everything in between.&rdquo;
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-crema-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-sm uppercase tracking-[0.3em] text-rosso-500"
            style={{ fontFamily: "var(--font-decorative)" }}
          >
            The Difference
          </p>
          <h2 className="mt-4 text-center text-3xl sm:text-4xl">
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
                  international wines, curated to complement every dish on our menu.
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
                  Nearly 30 Years of Excellence
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Opened in 1997, we&apos;ve spent nearly three decades growing from a
                  neighborhood favorite to one of Fairfield County&apos;s most beloved
                  Italian restaurants, all while staying true to our roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="/images/food/ravioli.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white sm:text-5xl">
            Come Experience It <span className="italic text-oro-400">Yourself</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Reserve your table and discover why Fairfield has been coming to Quattro Pazzi for nearly 30 years.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-rosso-500 px-10 text-lg hover:bg-rosso-400"
          >
            <Link href="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
