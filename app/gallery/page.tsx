import type { Metadata } from "next"
import Image from "next/image"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/button"
import { BRAND, SOCIAL } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Gallery | Photos",
  description:
    "Browse photos of Quattro Pazzi Cafe in Fairfield, CT. Our food, restaurant, events, and more.",
  alternates: {
    canonical: `${BRAND.url}/gallery`,
  },
}

const GALLERY_ITEMS = [
  { src: "/images/food/filet.jpg", alt: "Filet mignon with crispy onions and gnocchi", tall: true },
  { src: "/images/food/ravioli.jpg", alt: "Handmade ravioli with basil and tomato sauce", tall: false },
  { src: "/images/hero/lights.jpg", alt: "Quattro Pazzi ambiance", tall: false },
  { src: "/images/food/seafood.jpg", alt: "Seafood antipasto with cannellini beans", tall: true },
  { src: "/images/food/gnocchi.jpg", alt: "Gnocchi bolognese on marble", tall: false },
  { src: "/images/food/fish.jpg", alt: "Pan-seared fish with vegetables", tall: true },
  { src: "/images/food/penne.jpg", alt: "Penne with ricotta and seasonal vegetables", tall: false },
  { src: "/images/food/tartufo.jpg", alt: "Tartufo dessert", tall: true },
  { src: "/images/food/chicken.jpg", alt: "Chicken with butternut squash and sage", tall: false },
  { src: "/images/hero/lights.jpg", alt: "Star-shaped light fixtures", tall: false },
  { src: "/images/food/trio-salad.jpg", alt: "Trio salad plate", tall: true },
  { src: "/images/interior/kitchen.jpg", alt: "Professional kitchen", tall: false },
  { src: "/images/food/pasta-trio.jpg", alt: "Three pasta varieties", tall: false },
  { src: "/images/food/arugula-salad.jpg", alt: "Arugula salad with goat cheese", tall: true },
  { src: "/images/food/fish.jpg", alt: "Pan-seared fish with vegetables", tall: false },
  { src: "/images/gallery/dish-1.jpg", alt: "Chef's special", tall: false },
  { src: "/images/gallery/dish-3.jpg", alt: "Seasonal creation", tall: true },
  { src: "/images/gallery/dish-5.jpg", alt: "House favorite", tall: false },
  { src: "/images/gallery/dish-7.jpg", alt: "From the kitchen", tall: false },
  { src: "/images/gallery/dish-9.jpg", alt: "Fresh from the garden", tall: true },
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
