import type { Metadata } from "next"
import Image from "next/image"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/button"
import { BRAND, SOCIAL } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Gallery | Photos",
  description:
    "Browse photos of Quattro Pazzi in Fairfield, CT. Our food, restaurant, events, and more.",
  alternates: {
    canonical: `${BRAND.url}/gallery`,
  },
}

const GALLERY_ITEMS = [
  { src: "/images/food/chicken-milanese.jpg", alt: "Chicken milanese with Caesar salad and cocktails", tall: false },
  { src: "/images/food/ravioli.jpg", alt: "Burrata cheese ravioli with tomato sauce", tall: true },
  { src: "/images/interior/interior-dining.jpg", alt: "Quattro Pazzi dining room with velvet banquettes", tall: false },
  { src: "/images/food/grilled-vegetables.jpg", alt: "Grilled mixed vegetables with beet hummus", tall: true },
  { src: "/images/drinks/espresso-martini-1.jpg", alt: "Espresso martini on marble bar", tall: true },
  { src: "/images/food/la-scala-salad.jpg", alt: "La Scala salad with salami and radish", tall: false },
  { src: "/images/food/ravioli-cocktails.jpg", alt: "Burrata ravioli with colorful cocktails", tall: true },
  { src: "/images/hero/dining-room.jpg", alt: "Quattro Pazzi dining room", tall: false },
  { src: "/images/food/salad-duo.jpg", alt: "La Scala and arugula endive salads", tall: true },
  { src: "/images/hero/bar.jpg", alt: "Quattro Pazzi marble bar", tall: false },
  { src: "/images/food/vegetables-cocktails.jpg", alt: "Grilled vegetables with craft cocktails at the bar", tall: true },
  { src: "/images/interior/interior-1.jpg", alt: "Restaurant interior with art and velvet seating", tall: false },
  { src: "/images/food/milanese-cocktails.jpg", alt: "Chicken milanese with seasonal cocktails", tall: true },
  { src: "/images/food/arugula-salad.jpg", alt: "Arugula and endive salad with gorgonzola", tall: false },
  { src: "/images/drinks/espresso-martini-2.jpg", alt: "Espresso martini closeup", tall: true },
  { src: "/images/food/veggies-wine.jpg", alt: "Grilled vegetables with lavender cocktail", tall: false },
  { src: "/images/interior/interior-2.jpg", alt: "Bar area with hanging plants and warm lighting", tall: false },
  { src: "/images/food/vegetables-bar.jpg", alt: "Grilled vegetable plate with cocktails", tall: false },
  { src: "/images/food/cover-food.jpg", alt: "Seasonal dish", tall: true },
  { src: "/images/drinks/cover-cocktails.jpg", alt: "Craft cocktail selection", tall: true },
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
          {/* Masonry Photo Grid */}
          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group mb-3 break-inside-avoid overflow-hidden rounded-lg"
              >
                <div className={`relative ${item.tall ? "aspect-[3/4]" : "aspect-square"} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-20 text-center">
            <p
              className="text-sm uppercase tracking-[0.3em] text-rosso-500"
              style={{ fontFamily: "var(--font-decorative)" }}
            >
              Follow the Journey
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl">See More on Instagram</h2>
            <p className="mt-3 text-muted-foreground">
              Follow us for daily specials, behind-the-scenes, and more.
            </p>
            <Button asChild size="lg" className="mt-6 bg-rosso-500 hover:bg-rosso-600">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SOCIAL.instagramHandle}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
