import { NextResponse } from "next/server"
import { z } from "zod"

const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  date: z.string().min(1, "Date is required"),
  guests: z.string().min(1, "Guest count is required"),
  type: z.string().min(1, "Event type is required"),
  time: z.string().optional(),
  requests: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = eventSchema.parse(body)

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "Quattro Pazzi <noreply@quattropazzi.com>",
        to: ["info@quattropazzi.com"],
        subject: `Private Event Inquiry from ${data.name}`,
        text: `New private event inquiry:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nEvent Type: ${data.type}\nPreferred Date: ${data.date}\nPreferred Time: ${data.time || "Not specified"}\nGuest Count: ${data.guests}\n\nSpecial Requests:\n${data.requests || "None"}`,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
