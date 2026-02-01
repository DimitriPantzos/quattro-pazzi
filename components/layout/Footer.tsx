import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { LOCATION, SOCIAL, BRAND } from "@/lib/locations"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-crema-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/logo/quattro-pazzi-logo.png"
                alt={BRAND.name}
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg text-foreground">
                Quattro Pazzi
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Authentic Italian and Mediterranean dining in Fairfield, CT.
              Handmade pasta, fresh seafood, and an award-winning wine list since 1997.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-rosso-500"
              >
                <Instagram className="h-4 w-4" />
                {SOCIAL.instagramHandle}
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              {LOCATION.name}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
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
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="hover:text-foreground"
                >
                  {LOCATION.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Mon&ndash;Thu: 11 AM &ndash; 9 PM
                  <br />
                  Fri&ndash;Sun: 11 AM &ndash; 10 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-foreground">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-muted-foreground hover:text-foreground">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-muted-foreground hover:text-foreground">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-muted-foreground hover:text-foreground">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Private Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            {BRAND.tagline} &bull; {LOCATION.city}, {LOCATION.state} &bull; Est. {BRAND.founded}
          </p>
        </div>
      </div>
    </footer>
  )
}
