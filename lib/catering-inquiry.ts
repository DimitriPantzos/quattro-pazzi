import { z } from "zod"

export const CATERING_TAGGED_INBOX = "lyfehospitality+catering@mail.grokbot.com"
export const CATERING_RESTAURANT_INBOX = "info@quattropazzi.com"
export const CATERING_FROM = "Quattro Pazzi <noreply@quattropazzi.com>"

const BASE_GROK_INBOX = "lyfehospitality@mail.grokbot.com"
const RATE_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT = 8
const DAY_MS = 24 * 60 * 60 * 1000

const submissionIdSchema = z
  .string()
  .regex(
    /^qp-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    "Submission reference is invalid"
  )

const eventTypes = [
  "corporate",
  "office",
  "wedding",
  "celebration",
  "holiday",
  "other",
] as const

const serviceStyles = ["delivery", "pickup", "full-service", "unsure"] as const

const inquirySchema = z
  .object({
    submissionId: submissionIdSchema,
    name: z.string().trim().min(1, "Name is required").max(120),
    email: z.string().trim().email("A valid email is required").max(200),
    phone: z.string().trim().min(7, "A phone number is required").max(40),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Event date is required"),
    time: z.string().trim().max(8).optional().or(z.literal("")),
    guests: z.string().trim().regex(/^\d+$/, "Guest count is required").max(5),
    eventType: z.enum(eventTypes, { message: "Event type is required" }),
    service: z.enum(serviceStyles, { message: "Service style is required" }),
    venue: z.string().trim().max(200).optional().or(z.literal("")),
    budget: z.string().trim().max(80).optional().or(z.literal("")),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
    company: z.string().optional().or(z.literal("")),
  })
  .strict()

export type CateringInquiry = z.infer<typeof inquirySchema>

export type OutboundInquiry = {
  from: string
  to: string[]
  replyTo: string
  subject: string
  text: string
  submissionId: string
  tags: { name: string; value: string }[]
}

export type MailSender = (email: OutboundInquiry) => Promise<{ id: string }>

type SentRecord =
  | { state: "pending" }
  | { state: "sent"; providerMessageId: string }

export type InquiryStore = {
  get(id: string): SentRecord | undefined
  setPending(id: string): void
  setSent(id: string, providerMessageId: string): void
  clear(id: string): void
  tooMany(ip: string, now: number): boolean
  recordHit(ip: string, now: number): void
}

export type InquiryResponse = {
  status: number
  body: {
    success?: boolean
    duplicate?: boolean
    error?: string
    deliveryError?: string
    submissionId?: string
    providerMessageId?: string
    fieldErrors?: { field: string; message: string }[]
  }
}

const EVENT_LABELS: Record<(typeof eventTypes)[number], string> = {
  corporate: "Corporate",
  office: "Office lunch",
  wedding: "Wedding",
  celebration: "Celebration",
  holiday: "Holiday",
  other: "Other",
}

const SERVICE_LABELS: Record<(typeof serviceStyles)[number], string> = {
  delivery: "Delivery",
  pickup: "Pickup",
  "full-service": "Full service",
  unsure: "Not sure yet",
}

export function createMemoryStore(): InquiryStore {
  const sent = new Map<string, SentRecord>()
  const hits = new Map<string, number[]>()

  return {
    get(id) {
      return sent.get(id)
    },
    setPending(id) {
      sent.set(id, { state: "pending" })
    },
    setSent(id, providerMessageId) {
      if (sent.size > 2000) {
        const first = sent.keys().next().value
        if (first) sent.delete(first)
      }
      sent.set(id, { state: "sent", providerMessageId })
    },
    clear(id) {
      sent.delete(id)
    },
    tooMany(ip, now) {
      const recent = (hits.get(ip) ?? []).filter((at) => now - at < RATE_WINDOW_MS)
      hits.set(ip, recent)
      return recent.length >= RATE_LIMIT
    },
    recordHit(ip, now) {
      const recent = (hits.get(ip) ?? []).filter((at) => now - at < RATE_WINDOW_MS)
      recent.push(now)
      hits.set(ip, recent)
    },
  }
}

export function isClearlyLabeledTest(parts: Array<string | undefined>): boolean {
  return parts.some((part) => part != null && /(?:^|[^A-Za-z])TEST(?:[^A-Za-z]|$)/.test(part))
}

function isForbiddenGrokAddress(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (normalized === CATERING_TAGGED_INBOX) return false
  if (normalized === BASE_GROK_INBOX) return true
  const [local, domain] = normalized.split("@")
  if (!local || domain !== "mail.grokbot.com") return false
  return local.split("+")[0] === BASE_GROK_INBOX.split("@")[0]
}

function uniqueEmails(emails: string[]): string[] {
  const seen = new Set<string>()
  const result: string[] = []
  for (const email of emails) {
    const key = email.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    result.push(email)
  }
  return result
}

export function resolveRecipients(
  recipientOverride: string | undefined,
  labeledTest: boolean
): { ok: true; to: string[] } | { ok: false; error: string } {
  if (labeledTest) {
    return { ok: true, to: [CATERING_TAGGED_INBOX] }
  }

  if (recipientOverride && recipientOverride.trim()) {
    const emails = uniqueEmails(
      recipientOverride
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean)
    )
    if (emails.length === 0 || emails.length > 5) {
      return { ok: false, error: "Catering recipients are not configured correctly." }
    }
    if (emails.some((email) => !z.string().email().safeParse(email).success)) {
      return { ok: false, error: "Catering recipients are not configured correctly." }
    }
    if (emails.some(isForbiddenGrokAddress)) {
      return {
        ok: false,
        error: "Catering mail cannot copy the base Grok inbox.",
      }
    }
    if (!emails.some((email) => email.toLowerCase() === CATERING_TAGGED_INBOX)) {
      return {
        ok: false,
        error: "Catering mail is missing the Catering Desk inbox.",
      }
    }
    if (emails.filter((email) => email.toLowerCase() === CATERING_TAGGED_INBOX).length > 1) {
      return { ok: false, error: "Catering recipients are not configured correctly." }
    }
    return { ok: true, to: emails }
  }

  return { ok: true, to: [CATERING_TAGGED_INBOX, CATERING_RESTAURANT_INBOX] }
}

function containsCardNumber(value: string): boolean {
  const match = value.match(/(?:\d[ -]?){13,19}/g)
  if (!match) return false
  return match.some((group) => {
    const digits = group.replace(/\D/g, "")
    return digits.length >= 13 && digits.length <= 19 && luhn(digits)
  })
}

function luhn(digits: string): boolean {
  let sum = 0
  let alternate = false
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = digits.charCodeAt(index) - 48
    if (digit < 0 || digit > 9) return false
    if (alternate) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    alternate = !alternate
  }
  return sum % 10 === 0
}

function stripHeaderBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim()
}

function blank(value: string | undefined): string {
  const cleaned = value?.trim()
  return cleaned ? cleaned : "Not provided"
}

function dateInRange(date: string, now: number): boolean {
  const parsed = new Date(`${date}T00:00:00.000Z`)
  if (Number.isNaN(parsed.getTime())) return false
  const today = new Date(now)
  const start = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()) - DAY_MS
  const end = start + 731 * DAY_MS
  return parsed.getTime() >= start && parsed.getTime() <= end
}

function guestCount(value: string): number | null {
  const count = Number(value)
  if (!Number.isInteger(count) || count < 1 || count > 2000) return null
  return count
}

export function buildOutboundEmail(
  inquiry: CateringInquiry,
  recipients: string[]
): OutboundInquiry {
  const name = stripHeaderBreaks(inquiry.name)
  const replyTo = stripHeaderBreaks(inquiry.email)
  const guests = guestCount(inquiry.guests)
  const text = [
    `Submission-ID: ${inquiry.submissionId}`,
    "Restaurant: Quattro Pazzi",
    "Source: https://www.quattropazzi.com/catering",
    "This is a catering inquiry, not a confirmed order or a charge.",
    "",
    `Name: ${name}`,
    `Email: ${replyTo}`,
    `Phone: ${stripHeaderBreaks(inquiry.phone)}`,
    `Event date: ${inquiry.date}`,
    `Event time: ${blank(inquiry.time)}`,
    `Guest count: ${guests}`,
    `Event type: ${EVENT_LABELS[inquiry.eventType]}`,
    `Service: ${SERVICE_LABELS[inquiry.service]}`,
    `Venue: ${blank(inquiry.venue)}`,
    `Budget note: ${blank(inquiry.budget)}`,
    "",
    "Details:",
    blank(inquiry.message),
  ].join("\n")

  return {
    from: CATERING_FROM,
    to: recipients,
    replyTo,
    subject: `Catering inquiry ${inquiry.submissionId} — ${name}`.slice(0, 180),
    text,
    submissionId: inquiry.submissionId,
    tags: [
      { name: "source", value: "quattro-pazzi-catering" },
      { name: "submission_id", value: inquiry.submissionId },
    ],
  }
}

function fail(
  status: number,
  error: string,
  extra: Partial<InquiryResponse["body"]> = {}
): InquiryResponse {
  return { status, body: { error, ...extra } }
}

export async function processCateringInquiry(args: {
  payload: unknown
  mailConfigured: boolean
  recipientOverride?: string
  sender: MailSender
  store: InquiryStore
  now: number
  ip: string
}): Promise<InquiryResponse> {
  const parsed = inquirySchema.safeParse(args.payload)
  if (!parsed.success) {
    if (args.store.tooMany(args.ip, args.now)) {
      return fail(429, "Too many inquiries from this network. Please call the restaurant or try again later.")
    }
    args.store.recordHit(args.ip, args.now)
    return fail(400, "Please check the inquiry and try again.", {
      fieldErrors: parsed.error.issues.map((issue) => ({
        field: issue.path.join(".") || "form",
        message: issue.message,
      })),
    })
  }

  const inquiry = parsed.data
  const existing = args.store.get(inquiry.submissionId)
  if (existing?.state === "sent") {
    return {
      status: 200,
      body: {
        success: true,
        duplicate: true,
        submissionId: inquiry.submissionId,
        providerMessageId: existing.providerMessageId,
      },
    }
  }
  if (existing?.state === "pending") {
    return fail(409, "This inquiry is already being sent.", {
      submissionId: inquiry.submissionId,
    })
  }

  if (args.store.tooMany(args.ip, args.now)) {
    return fail(429, "Too many inquiries from this network. Please call the restaurant or try again later.", {
      submissionId: inquiry.submissionId,
    })
  }
  args.store.recordHit(args.ip, args.now)

  if (inquiry.company?.trim()) {
    return fail(400, "We couldn't send this inquiry.", {
      submissionId: inquiry.submissionId,
    })
  }

  if (inquiry.time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(inquiry.time)) {
    return fail(400, "Please check the inquiry and try again.", {
      submissionId: inquiry.submissionId,
      fieldErrors: [{ field: "time", message: "Use a time like 18:30, or leave it blank." }],
    })
  }

  if (!/^[\d\s()+.-]+$/.test(inquiry.phone)) {
    return fail(400, "Please check the inquiry and try again.", {
      submissionId: inquiry.submissionId,
      fieldErrors: [{ field: "phone", message: "Enter a phone number we can call." }],
    })
  }

  const guests = guestCount(inquiry.guests)
  if (guests == null) {
    return fail(400, "Please check the inquiry and try again.", {
      submissionId: inquiry.submissionId,
      fieldErrors: [{ field: "guests", message: "Guest count must be between 1 and 2000." }],
    })
  }

  if (!dateInRange(inquiry.date, args.now)) {
    return fail(400, "Please check the inquiry and try again.", {
      submissionId: inquiry.submissionId,
      fieldErrors: [{ field: "date", message: "Choose an event date within the next two years." }],
    })
  }

  const cardFields = [inquiry.message, inquiry.budget, inquiry.venue, inquiry.name]
  if (cardFields.some((value) => value && containsCardNumber(value))) {
    return fail(400, "Please don't include card numbers. This form does not take payment.", {
      submissionId: inquiry.submissionId,
    })
  }

  const labeledTest = isClearlyLabeledTest([
    inquiry.name,
    inquiry.message,
    inquiry.venue,
    inquiry.budget,
  ])
  const recipients = resolveRecipients(args.recipientOverride, labeledTest)
  if (!recipients.ok) {
    return fail(503, "Online inquiries aren't available right now. Please call the restaurant or order on ezCater.", {
      submissionId: inquiry.submissionId,
      deliveryError: recipients.error,
    })
  }

  if (!args.mailConfigured) {
    return fail(503, "Online inquiries aren't available right now. Please call the restaurant or order on ezCater.", {
      submissionId: inquiry.submissionId,
      deliveryError: "RESEND_API_KEY is not configured.",
    })
  }

  const email = buildOutboundEmail(inquiry, recipients.to)
  if (email.replyTo.toLowerCase() === "noreply@quattropazzi.com") {
    return fail(400, "Use your own email so the kitchen can reply.", {
      submissionId: inquiry.submissionId,
      fieldErrors: [{ field: "email", message: "Use your own email so the kitchen can reply." }],
    })
  }

  args.store.setPending(inquiry.submissionId)
  try {
    const accepted = await args.sender(email)
    if (!accepted.id) {
      throw new Error("Email provider did not accept the inquiry.")
    }
    args.store.setSent(inquiry.submissionId, accepted.id)
    return {
      status: 200,
      body: {
        success: true,
        submissionId: inquiry.submissionId,
        providerMessageId: accepted.id,
      },
    }
  } catch (error) {
    args.store.clear(inquiry.submissionId)
    const message = error instanceof Error ? error.message : "Email provider rejected the inquiry."
    return fail(502, "We couldn't send your inquiry. Nothing was submitted. Please call us or order on ezCater.", {
      submissionId: inquiry.submissionId,
      deliveryError: message.replace(/re_[A-Za-z0-9_]+/g, "[redacted]").slice(0, 240),
    })
  }
}

export async function sendWithResend(apiKey: string, email: OutboundInquiry): Promise<{ id: string }> {
  const { Resend } = await import("resend")
  const resend = new Resend(apiKey)
  const result = await resend.emails.send(
    {
      from: email.from,
      to: email.to,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      tags: email.tags,
    },
    { idempotencyKey: email.submissionId }
  )

  if (result.error) {
    throw new Error(result.error.message || "Email provider rejected the inquiry.")
  }
  if (!result.data?.id) {
    throw new Error("Email provider did not accept the inquiry.")
  }
  return { id: result.data.id }
}
