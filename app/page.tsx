import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LOCATION, BRAND, SOCIAL } from "@/lib/locations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/JsonLd"

const FAQ_ITEMS = [
  {
    question: "What are your hours?",
    answer:
      "We're open Monday through Thursday 11 AM to 9 PM, and Friday through Sunday 11 AM to 10 PM.",
  },
  {
    question: "Do you take reservations?",
    answer:
      "Yes! You can reserve through Toast Tables on our Reservations page, or call us directly at (203) 259-7417. Walk-ins are also welcome.",
  },
  {
    question: "Do you offer online ordering?",
    answer:
      "Yes! You can order pickup through Toast or delivery through Uber Eats. Visit our Order page for direct links.",
  },
  {
    question: "Do you do catering?",
    answer:
      "Absolutely! We cater events of all sizes with customizable menus featuring our authentic Italian cuisine. Visit our Catering page to submit an inquiry.",
  },
  {
    question: "Do you have a happy hour?",
    answer:
      "Yes! Happy hour is Monday through Friday from 3 PM to 6 PM.",
  },
  {
    question: "Do you have private dining?",
    answer:
      "Yes, we offer private and semi-private dining options for special events, corporate gatherings, and celebrations. Visit our Events page to inquire.",
  },
]

const FOOD_PHOTOS = [
  { src: "/images/food/ravioli-cocktails.jpg", alt: "Burrata ravioli with craft cocktails", label: "Pasta" },
  { src: "/images/food/ravioli.jpg", alt: "Burrata cheese ravioli with tomato sauce", label: "Pasta" },
  { src: "/images/food/la-scala-salad.jpg", alt: "La Scala salad with radish and salami", label: "Insalate" },
  { src: "/images/drinks/espresso-martini-1.jpg", alt: "Espresso martini on marble bar", label: "Cocktails" },
  { src: "/images/food/cover-food.jpg", alt: "Seasonal creation", label: "Secondi" },
  { src: "/images/food/salad-duo.jpg", alt: "Arugula endive and La Scala salads", label: "Insalate" },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      {/* ====== HERO - Full Viewport ====== */}
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
        <Image
          src="/images/food/chicken-milanese.jpg"
          alt="Chicken milanese with Caesar salad and craft cocktails"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative flex h-full flex-col justify-end pb-16 sm:pb-24 lg:pb-32">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p
              className="text-sm font-normal uppercase tracking-[0.4em] text-white/70"
              style={{ fontFamily: "var(--font-decorative)" }}
            >
              Est. {BRAND.founded} &bull; {LOCATION.city}, {LOCATION.state}
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
              The Art of
              <br />
              <span className="italic text-rosso-400">Italian</span> Dining
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Handmade pasta, fresh seafood, craft cocktails, and an award-winning wine list.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-rosso-500 px-8 text-lg hover:bg-rosso-400"
              >
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-8 text-lg text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PHOTO GRID - BAM ====== */}
      <section className="grid grid-cols-2 md:grid-cols-3">
        {FOOD_PHOTOS.map((photo) => (
          <div key={photo.src} className="group relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="text-sm font-medium uppercase tracking-widest text-oro-400">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* ====== STATEMENT SECTION ====== */}
      <section className="relative overflow-hidden bg-espresso-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/lights.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="text-sm uppercase tracking-[0.4em] text-oro-400"
            style={{ fontFamily: "var(--font-decorative)" }}
          >
            Fresh &bull; Seasonal &bull; Vibrant
          </p>
          <h2 className="mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Where tradition meets{" "}
            <span className="italic text-oro-400">modern Italian</span> cuisine
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            Since 1997, Chef Gino has been crafting dishes that honor Italian heritage
            while embracing the flavors of each season. Every plate tells a story
            of passion, quality ingredients, and artistry.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-oro-500 px-8 text-lg text-espresso-900 hover:bg-oro-400"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ====== FULL-BLEED IMAGE BREAK ====== */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden sm:h-[60vh]">
        <Image
          src="/images/hero/dining-room.jpg"
          alt="Quattro Pazzi dining room"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="mx-auto max-w-7xl">
            <p
              className="text-sm uppercase tracking-[0.3em] text-oro-400"
              style={{ fontFamily: "var(--font-decorative)" }}
            >
              Private Dining Available
            </p>
            <h3 className="mt-2 text-3xl text-white sm:text-4xl">
              Your Table Awaits
            </h3>
          </div>
        </div>
      </section>

      {/* ====== DUAL FEATURE ====== */}
      <section className="grid lg:grid-cols-2">
        {/* Left - Menu Highlight */}
        <div className="relative overflow-hidden bg-espresso-800 px-8 py-20 sm:px-12 sm:py-28 lg:px-16">
          <div className="relative z-10">
            <p
              className="text-sm uppercase tracking-[0.3em] text-oro-400"
              style={{ fontFamily: "var(--font-decorative)" }}
            >
              The Menu
            </p>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              Crafted with <span className="italic text-oro-400">Passion</span>
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              From handmade pasta and fresh seafood to wood-fired specialties,
              every dish celebrates the best of Italian cuisine.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 border-oro-400/30 text-oro-400 hover:bg-oro-400/10 hover:text-oro-300"
            >
              <Link href="/menu">Explore the Menu</Link>
            </Button>
          </div>
        </div>
        {/* Right - Image */}
        <div className="relative aspect-square overflow-hidden lg:aspect-auto">
          <Image
            src="/images/food/ravioli.jpg"
            alt="Burrata cheese ravioli with tomato sauce"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ====== EXTERIOR + VISIT ====== */}
      <section className="section-padding bg-crema-base">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={LOCATION.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quattro Pazzi map"
              />
            </div>
            <div>
              <p
                className="text-sm uppercase tracking-[0.3em] text-rosso-500"
                style={{ fontFamily: "var(--font-decorative)" }}
              >
                Visit Us
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                {LOCATION.address}
                <br />
                <span className="text-muted-foreground">
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </span>
              </h2>
              <div className="mt-6 space-y-3 text-muted-foreground">
                <p>
                  <a
                    href={`tel:${LOCATION.phone}`}
                    className="text-lg font-semibold text-rosso-500 hover:text-rosso-600"
                  >
                    {LOCATION.phoneFormatted}
                  </a>
                </p>
                <div className="text-sm">
                  <p>Mon&ndash;Thu: 11:00 AM &ndash; 9:00 PM</p>
                  <p>Fri&ndash;Sun: 11:00 AM &ndash; 10:00 PM</p>
                  <p className="mt-2 font-medium text-oro-600">
                    Happy Hour: {LOCATION.happyHour}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-rosso-500 hover:bg-rosso-600">
                  <Link href="/reservations">Reserve a Table</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FULL-BLEED KITCHEN BREAK ====== */}
      <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
        <Image
          src="/images/interior/interior-2.jpg"
          alt="Quattro Pazzi interior with hanging plants"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="px-4">
            <p
              className="text-sm uppercase tracking-[0.4em] text-oro-400"
              style={{ fontFamily: "var(--font-decorative)" }}
            >
              Behind the Pass
            </p>
            <h3 className="mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">
              Where the <span className="italic text-oro-400">Magic</span> Happens
            </h3>
          </div>
        </div>
      </section>

      {/* ====== DUAL CTA ====== */}
      <section className="grid md:grid-cols-2">
        {/* Catering */}
        <div className="relative overflow-hidden bg-rosso-800 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="relative z-10">
            <h3 className="text-3xl text-white sm:text-4xl">
              Private Events &amp; Catering
            </h3>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              From intimate dinners to grand celebrations, let us craft
              an unforgettable Italian experience.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/catering">Explore Catering</Link>
            </Button>
          </div>
        </div>
        {/* Order */}
        <div className="relative overflow-hidden bg-espresso-800 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="relative z-10">
            <h3 className="text-3xl text-white sm:text-4xl">
              Order Pickup &amp; Delivery
            </h3>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              Enjoy Quattro Pazzi at home. Order pickup through Toast
              or delivery via Uber Eats.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 border-oro-400/30 text-oro-400 hover:bg-oro-400/10 hover:text-oro-300"
            >
              <Link href="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ====== INSTAGRAM ====== */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="text-sm uppercase tracking-[0.4em] text-oro-400"
            style={{ fontFamily: "var(--font-decorative)" }}
          >
            Follow the Journey
          </p>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            {SOCIAL.instagramHandle}
          </h2>
          <p className="mt-4 text-white/50">
            Tag us in your photos. Follow along for specials, events, and behind-the-scenes.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-oro-500 px-8 text-espresso-900 hover:bg-oro-400"
          >
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on Instagram
            </a>
          </Button>
        </div>
        {/* Instagram Photo Strip */}
        <div className="mt-12 grid grid-cols-3 gap-1 sm:grid-cols-6">
          {[
            "/images/food/arugula-salad.jpg",
            "/images/food/vegetables-cocktails.jpg",
            "/images/drinks/espresso-martini-2.jpg",
            "/images/food/veggies-wine.jpg",
            "/images/food/ravioli.jpg",
            "/images/food/vegetables-bar.jpg",
          ].map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt="Quattro Pazzi on Instagram"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="section-padding bg-crema-base">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-sm uppercase tracking-[0.3em] text-rosso-500"
            style={{ fontFamily: "var(--font-decorative)" }}
          >
            Common Questions
          </p>
          <h2 className="mt-4 text-center text-3xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-sans text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="/images/food/chicken-milanese.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl">
            Ready for an <span className="italic text-oro-400">Unforgettable</span> Meal?
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Reserve your table and experience the best Italian dining in Fairfield.
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
