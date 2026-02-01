import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { MenuTabNav } from "@/components/menu/MenuTabNav"
import { CTABanner } from "@/components/sections/CTABanner"
import { BRAND } from "@/lib/locations"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Menu | Dinner, Lunch, Lunch Price Fix $20 & Wine",
  description:
    "Explore the Quattro Pazzi menu. $20 Lunch Price Fix special Monday-Friday. Authentic Italian pasta, seafood, steaks, salads, and extensive wine and cocktail list.",
  alternates: {
    canonical: `${BRAND.url}/menu`,
  },
}

export default function MenuPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Menu", href: "/menu" }]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Menu",
          name: `${BRAND.name} Menu`,
          description: "Authentic Italian and Mediterranean cuisine featuring handmade pasta, fresh seafood, and an award-winning wine list.",
          hasMenuSection: [
            { "@type": "MenuSection", name: "Lunch Price Fix $20" },
            { "@type": "MenuSection", name: "Lunch" },
            { "@type": "MenuSection", name: "Dinner" },
            { "@type": "MenuSection", name: "Wine & Cocktails" },
          ],
        }}
      />

      <HeroSection
        eyebrow="Our Menu"
        title="Authentic Italian Cuisine"
        description="From handmade pasta to fresh seafood, every dish is crafted with care using the finest ingredients."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MenuTabNav />
        </div>
      </section>

      <CTABanner
        title="Join Us for Dinner"
        description="Reserve your table and experience the best Italian dining in Fairfield."
        buttonText="Make a Reservation"
        buttonHref="/reservations"
        variant="espresso"
      />
    </>
  )
}
