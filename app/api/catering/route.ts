import { NextResponse } from "next/server"
import {
  createMemoryStore,
  processCateringInquiry,
  sendWithResend,
} from "@/lib/catering-inquiry"

const store = createMemoryStore()

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim().slice(0, 80) || "unknown"
  return request.headers.get("x-real-ip")?.trim().slice(0, 80) || "unknown"
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || 0)
  if (Number.isFinite(length) && length > 30_000) {
    return NextResponse.json({ error: "Inquiry is too large." }, { status: 413 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const result = await processCateringInquiry({
    payload,
    mailConfigured: Boolean(apiKey),
    recipientOverride: process.env.CATERING_INQUIRY_TO,
    sender: (email) => sendWithResend(apiKey || "", email),
    store,
    now: Date.now(),
    ip: clientIp(request),
  })

  return NextResponse.json(result.body, { status: result.status })
}
