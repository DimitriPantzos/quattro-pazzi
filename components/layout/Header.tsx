"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { LOCATION, BRAND } from "@/lib/locations"

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "Order", href: "/order" },
  { label: "Catering", href: "/catering" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-crema-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/quattro-pazzi-logo.png"
            alt={BRAND.name}
            width={48}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden font-serif text-lg text-foreground sm:block">
            Quattro Pazzi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${LOCATION.phone}`}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {LOCATION.phoneFormatted}
          </a>
          <Button asChild className="bg-rosso-500 hover:bg-rosso-600">
            <Link href="/reservations">Reserve</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="bg-rosso-500 hover:bg-rosso-600">
            <Link href="/reservations">Reserve</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-crema-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-4 border-t border-border" />
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {LOCATION.phoneFormatted}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
