import Link from "next/link"
import { UtensilsCrossed, Wine, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTABanner } from "@/components/sections/CTABanner"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LOCATION, BRAND } from "@/lib/locations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/JsonLd"

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: "Handmade Pasta",
    description:
      "Our pasta is made fresh daily using traditional Italian techniques. From pappardelle to gnocchi, every dish is crafted with care.",
  },
  {
    icon: Wine,
    title: "Award-Winning Wine List",
    description:
      "An extensive selection of Italian and international wines, curated to complement every dish on our menu.",
  },
  {
    icon: Clock,
    title: "Happy Hour Daily",
    description:
      "Join us Monday through Friday from 3-6 PM for discounted bites, wines by the glass, and signature cocktails.",
  },
  {
    icon: Heart,
    title: "Since 1997",
    description:
      "Fairfield's beloved Italian restaurant for over 25 years. A tradition of exceptional food and warm hospitality.",
  },
]

const FAQ_ITEMS = [
  {
    question: "What are your hours?",
    answer:
      "We're open Monday through Wednesday 11:30 AM to 9 PM, Thursday 11:30 AM to 9:30 PM, Friday and Saturday 11:30 AM to 10 PM, and Sunday 11 AM to 9 PM.",
  },
  {
    question: "Do you take reservations?",
    answer:
      "Yes! You can make a reservation through OpenTable on our Reservations page, or call us directly at (203) 254-9900. Walk-ins are also welcome.",
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
      "Yes! Happy hour is Monday through Friday from 3 PM to 6 PM with discounted bites, wines, and cocktails.",
  },
  {
    question: "Do you have private dining?",
    answer:
      "Yes, we offer private and semi-private dining options for special events, corporate gatherings, and celebrations. Visit our Events page to inquire.",
  },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-rosso-900">
        <div className="absolute inset-0 bg-gradient-to-r from-rosso-900/95 via-rosso-900/80 to-rosso-900/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="font-decorative text-sm font-normal uppercase tracking-[0.3em] text-oro-400" style={{ fontFamily: "var(--font-decorative)" }}>
              Est. {BRAND.founded} &bull; {LOCATION.city}, {LOCATION.state}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Authentic
              <br />
              <span className="text-oro-400">Italian</span> Dining
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Handmade pasta, fresh seafood, craft cocktails, and an award-winning
              wine list. Experience the warmth of Italian hospitality in Fairfield, CT.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-rosso-500 text-lg hover:bg-rosso-400"
              >
                <Link href="/reservations">Make a Reservation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-lg text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="border-b border-border bg-crema-elevated py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">{BRAND.tagline}</span>
            {" "}&bull; {LOCATION.address}, {LOCATION.city}, {LOCATION.state}
            {" "}&bull;{" "}
            <a href={`tel:${LOCATION.phone}`} className="font-semibold text-rosso-500 hover:text-rosso-600">
              {LOCATION.phoneFormatted}
            </a>
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl">The Quattro Pazzi Experience</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              What makes us a Fairfield favorite since 1997
            </p>
          </div>
          <div className="mt-12">
            <FeatureGrid features={FEATURES} columns={4} />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding bg-crema-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Visit Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Located on Post Road in the heart of Fairfield, we&apos;re easy to find and
                ready to welcome you for lunch, happy hour, dinner, or Sunday brunch.
              </p>
              <div className="mt-6 space-y-3 text-muted-foreground">
                <p className="font-sans font-semibold text-foreground">
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </p>
                <p>
                  <a
                    href={`tel:${LOCATION.phone}`}
                    className="font-semibold text-rosso-500 hover:text-rosso-600"
                  >
                    {LOCATION.phoneFormatted}
                  </a>
                </p>
                <div className="text-sm">
                  <p>Mon&ndash;Wed: 11:30 AM &ndash; 9:00 PM</p>
                  <p>Thu: 11:30 AM &ndash; 9:30 PM</p>
                  <p>Fri&ndash;Sat: 11:30 AM &ndash; 10:00 PM</p>
                  <p>Sun: 11:00 AM &ndash; 9:00 PM</p>
                  <p className="mt-2 font-medium text-oro-600">Happy Hour: {LOCATION.happyHour}</p>
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
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={LOCATION.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quattro Pazzi Cafe map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl">Follow Our Journey</h2>
          <p className="mt-3 text-muted-foreground">
            Tag us in your photos and follow along for specials, events, and behind-the-scenes.
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
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">
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

      {/* Catering CTA */}
      <CTABanner
        title="Planning a Special Event?"
        description="From intimate dinners to grand celebrations, let us bring authentic Italian cuisine to your next gathering."
        buttonText="Explore Catering"
        buttonHref="/catering"
        variant="rosso"
      />

      {/* Reserve CTA */}
      <CTABanner
        title="Ready for an Unforgettable Meal?"
        description="Reserve your table and experience the best Italian dining in Fairfield."
        buttonText="Make a Reservation"
        buttonHref="/reservations"
        variant="oro"
      />
    </>
  )
}
