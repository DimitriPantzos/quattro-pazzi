import { NextResponse } from "next/server"
import { z } from "zod"

const cateringSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  date: z.string().min(1, "Event date is required"),
  guests: z.string().min(1, "Guest count is required"),
  type: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = cateringSchema.parse(body)

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "Quattro Pazzi <noreply@quattropazzi.com>",
        to: ["info@quattropazzi.com"],
        subject: `Catering Inquiry from ${data.name}`,
        text: `New catering inquiry:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nEvent Date: ${data.date}\nGuest Count: ${data.guests}\nEvent Type: ${data.type || "Not specified"}\nBudget: ${data.budget || "Not specified"}\n\nAdditional Details:\n${data.message || "None"}`,
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
