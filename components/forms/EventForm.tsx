"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function EventForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      guests: formData.get("guests") as string,
      type: formData.get("type") as string,
      time: formData.get("time") as string,
      requests: formData.get("requests") as string,
    }

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to submit")

      toast.success("Event inquiry submitted! We'll be in touch soon.")
      e.currentTarget.reset()
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.")
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="event-name">Name *</Label>
          <Input id="event-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-email">Email *</Label>
          <Input
            id="event-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="event-phone">Phone *</Label>
          <Input
            id="event-phone"
            name="phone"
            type="tel"
            required
            placeholder="(203) 000-0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-type">Event Type *</Label>
          <Input
            id="event-type"
            name="type"
            required
            placeholder="e.g., Rehearsal Dinner, Corporate, Birthday"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="event-date">Preferred Date *</Label>
          <Input id="event-date" name="date" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-time">Preferred Time</Label>
          <Input id="event-time" name="time" type="time" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-guests">Guest Count *</Label>
          <Input
            id="event-guests"
            name="guests"
            type="number"
            min="1"
            required
            placeholder="20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="event-requests">Special Requests</Label>
        <Textarea
          id="event-requests"
          name="requests"
          rows={4}
          placeholder="Tell us about your vision, dietary needs, AV requirements, etc."
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full bg-rosso-500 hover:bg-rosso-600"
      >
        {pending ? "Submitting..." : "Submit Event Inquiry"}
      </Button>
    </form>
  )
}
