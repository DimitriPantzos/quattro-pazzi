import type { Metadata } from "next"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { HeroSection } from "@/components/sections/HeroSection"
import { ContactForm } from "@/components/forms/ContactForm"
import { LOCATION, SOCIAL, BRAND } from "@/lib/locations"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact Us | Location, Hours & Directions",
  description:
    "Contact Quattro Pazzi in Fairfield, CT. Located at 1599 Post Road. Find hours, directions, and phone number. Send us a message.",
  alternates: {
    canonical: `${BRAND.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: BRAND.name,
          description: BRAND.description,
          url: BRAND.url,
          telephone: `+1${LOCATION.phone}`,
          servesCuisine: BRAND.cuisines,
          priceRange: BRAND.priceRange,
          address: {
            "@type": "PostalAddress",
            streetAddress: LOCATION.address,
            addressLocality: LOCATION.city,
            addressRegion: LOCATION.state,
            postalCode: LOCATION.zip,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: LOCATION.geo.lat,
            longitude: LOCATION.geo.lng,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "11:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Friday", "Saturday", "Sunday"],
              opens: "11:00",
              closes: "22:00",
            },
          ],
        }}
      />

      <HeroSection
        title="Contact Us"
        description="Have a question, feedback, or want to learn more? We'd love to hear from you."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Location Info */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl">Our Location</h2>
              <Card className="border-border/50">
                <CardContent className="space-y-4 p-6">
                  <h3 className="font-serif text-2xl">{BRAND.name}</h3>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rosso-500" />
                      <a
                        href={LOCATION.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        {LOCATION.address}
                        <br />
                        {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-rosso-500" />
                      <a
                        href={`tel:${LOCATION.phone}`}
                        className="hover:text-foreground"
                      >
                        {LOCATION.phoneFormatted}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rosso-500" />
                      <div>
                        {LOCATION.hours.map((h) => (
                          <div key={h.day} className="flex gap-3">
                            <span className="w-24 font-medium text-foreground">
                              {h.day}
                            </span>
                            <span>
                              {h.open} &ndash; {h.close}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-oro-600">
                    Happy Hour: {LOCATION.happyHour}
                  </p>

                  {/* Map */}
                  <div className="overflow-hidden rounded-lg border border-border">
                    <iframe
                      src={LOCATION.mapEmbedUrl}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Quattro Pazzi map"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Instagram className="h-5 w-5 text-rosso-500" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Follow us on Instagram
                  </p>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rosso-500 hover:text-rosso-600"
                  >
                    {SOCIAL.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                We typically respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
