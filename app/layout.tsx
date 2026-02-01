import type { Metadata } from "next"
import { Inter, Playfair_Display, Italiana } from "next/font/google"
import { Toaster } from "sonner"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"
import { BRAND, SOCIAL, LOCATION } from "@/lib/locations"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-decorative",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: "Quattro Pazzi, Fairfield CT | Italian Restaurant",
    template: "%s | Quattro Pazzi",
  },
  description: BRAND.description,
  keywords: [
    "Italian restaurant Fairfield CT",
    "Mediterranean restaurant Fairfield",
    "pasta Fairfield CT",
    "Italian food near me",
    "private dining Fairfield CT",
    "catering Fairfield CT",
    "happy hour Fairfield CT",
    "brunch Fairfield CT",
    "wine bar Fairfield",
    "Quattro Pazzi",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    title: "Quattro Pazzi, Fairfield CT",
    description:
      "Quattro Pazzi — Fresh, seasonal, and vibrant modern Italian cuisine. Handmade pasta, craft cocktails, and an award-winning wine list since 1997.",
    siteName: "Quattro Pazzi",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Quattro Pazzi - Italian & Mediterranean Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quattro Pazzi, Fairfield CT",
    description:
      "Quattro Pazzi — Fresh, seasonal, and vibrant modern Italian cuisine. Handmade pasta, craft cocktails, and an award-winning wine list since 1997.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${italiana.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BRAND.name,
            url: BRAND.url,
            description: BRAND.description,
            foundingDate: String(BRAND.founded),
            sameAs: [SOCIAL.instagram, SOCIAL.facebook],
            address: {
              "@type": "PostalAddress",
              streetAddress: LOCATION.address,
              addressLocality: LOCATION.city,
              addressRegion: LOCATION.state,
              postalCode: LOCATION.zip,
              addressCountry: "US",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: `+1${LOCATION.phone}`,
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
            ],
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
