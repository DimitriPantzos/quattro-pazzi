import { JsonLd } from "./JsonLd"
import { BRAND } from "@/lib/locations"

type BreadcrumbItem = {
  name: string
  href: string
}

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BRAND.url,
          },
          ...items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.name,
            item: `${BRAND.url}${item.href}`,
          })),
        ],
      }}
    />
  )
}
