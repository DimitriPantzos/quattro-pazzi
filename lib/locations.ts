export type DayHours = {
  day: string
  open: string
  close: string
  closed?: boolean
}

export type Location = {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  phoneFormatted: string
  orderUrls: {
    pickup: string
    delivery: string
  }
  mapEmbedUrl: string
  geo: { lat: number; lng: number }
  hours: DayHours[]
  happyHour: string
  googleMapsUrl: string
}

export const LOCATION: Location = {
  name: "Fairfield",
  address: "1599 Post Road",
  city: "Fairfield",
  state: "CT",
  zip: "06824",
  phone: "2032597417",
  phoneFormatted: "(203) 259-7417",
  orderUrls: {
    pickup: "https://www.toasttab.com/local/order/quattro-pazzi-fairfield-1599-post-road/r-8df2db2e-e599-4385-81a7-c9d07c23eb8b",
    delivery: "https://www.ubereats.com/store/quattro-pazzi-cafe",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Quattro+Pazzi+Cafe,+1599+Post+Road,+Fairfield,+CT+06824&output=embed",
  geo: { lat: 41.1648, lng: -73.2345 },
  hours: [
    { day: "Monday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "10:00 PM" },
  ],
  happyHour: "Monday - Friday, 3:00 PM - 6:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=1599+Post+Road+Fairfield+CT+06824",
} as const

export const SOCIAL = {
  instagram: "https://instagram.com/quattropazzi",
  instagramHandle: "@quattropazzi",
  facebook: "https://facebook.com/quattropazzicafe",
  facebookHandle: "Quattro Pazzi",
} as const

export const BRAND = {
  name: "Quattro Pazzi",
  tagline: "Italian & Mediterranean Cuisine",
  description:
    "Authentic Italian and Mediterranean dining in Fairfield, CT. Handmade pasta, fresh seafood, craft cocktails, and an award-winning wine list. Private dining and catering available. Est. 1997.",
  email: "info@quattropazzi.com",
  url: "https://quattropazzi.com",
  founded: 1997,
  chef: "Chef Gino",
  cuisines: ["Italian", "Mediterranean"],
  priceRange: "$$",
} as const

export const RESERVATIONS = {
  url: "https://tables.toasttab.com/restaurants/8df2db2e-e599-4385-81a7-c9d07c23eb8b/reserve?partySize=2",
} as const
