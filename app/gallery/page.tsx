import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Gallery | Photos",
  description:
    "Browse photos of Quattro Pazzi Cafe in Fairfield, CT. Our food, restaurant, events, and more.",
  alternates: {
    canonical: `${BRAND.url}/gallery`,
  },
}

const GALLERY_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Food", value: "food" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Events", value: "events" },
]

const GALLERY_ITEMS = [
  { category: "food", alt: "Handmade pappardelle with braised short rib ragu" },
  { category: "food", alt: "Bruschetta pomodoro with fresh basil" },
  { category: "restaurant", alt: "Quattro Pazzi dining room" },
  { category: "food", alt: "Branzino with lemon and capers" },
  { category: "events", alt: "Private dining event setup" },
  { category: "food", alt: "Tiramisu dessert" },
  { category: "food", alt: "Aperol Spritz cocktail" },
  { category: "restaurant", alt: "Bar area at Quattro Pazzi" },
  { category: "food", alt: "Antipasto board with cured meats and cheeses" },
  { category: "events", alt: "Celebration dinner at Quattro Pazzi" },
  { category: "food", alt: "Fresh calamari fritti" },
  { category: "restaurant", alt: "Outdoor patio seating" },
]

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", href: "/gallery" }]} />

      <HeroSection
        eyebrow="Gallery"
        title="A Taste Through the Lens"
        description="Explore our restaurant, cuisine, and events through photos."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <Button
                key={cat.value}
                variant={cat.value === "all" ? "default" : "outline"}
                size="sm"
                className={cat.value === "all" ? "bg-rosso-500 hover:bg-rosso-600" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-border bg-crema-elevated"
              >
                <div
                  className="flex items-center justify-center bg-crema-muted"
                  style={{ height: `${180 + (i % 3) * 60}px` }}
                >
                  <p className="px-4 text-center text-xs text-muted-foreground">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl">See More on Instagram</h2>
            <p className="mt-3 text-muted-foreground">
              Follow us for daily specials, behind-the-scenes, and more.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <a
                href="https://instagram.com/quattropazzicafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                @quattropazzicafe
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
