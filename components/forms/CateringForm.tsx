"use client"

import { cloneElement, isValidElement, useId, useRef, useState, type ReactElement, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FieldError = { field: string; message: string }

type SubmitResult = {
  success?: boolean
  duplicate?: boolean
  error?: string
  submissionId?: string
  fieldErrors?: FieldError[]
}

const selectClassName =
  "border-input h-9 w-full rounded-md border bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

function createSubmissionId(): string {
  return `qp-${crypto.randomUUID()}`
}

export function CateringForm() {
  const formId = useId()
  const errorRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const submitting = useRef(false)
  const submissionId = useRef(createSubmissionId())
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([])
  const [success, setSuccess] = useState<{ submissionId: string; duplicate: boolean } | null>(null)

  function fieldMessage(field: string): string | undefined {
    return fieldErrors.find((item) => item.field === field)?.message
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return

    submitting.current = true
    setPending(true)
    setError(null)
    setFieldErrors([])

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      submissionId: submissionId.current,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      guests: String(formData.get("guests") ?? ""),
      eventType: String(formData.get("eventType") ?? ""),
      service: String(formData.get("service") ?? ""),
      venue: String(formData.get("venue") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    }

    try {
      const response = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => null)) as SubmitResult | null

      if (!response.ok || !result?.success || !result.submissionId) {
        const message =
          result?.error ||
          "We couldn't send your inquiry. Nothing was submitted. Please call us or order on ezCater."
        setError(message)
        setFieldErrors(result?.fieldErrors ?? [])
        queueMicrotask(() => errorRef.current?.focus())
        return
      }

      setSuccess({
        submissionId: result.submissionId,
        duplicate: Boolean(result.duplicate),
      })
      form.reset()
      queueMicrotask(() => successRef.current?.focus())
    } catch {
      setError(
        "We couldn't confirm the inquiry was sent. Please try again with the same form. If you already received a reference number, don't send a second request."
      )
      queueMicrotask(() => errorRef.current?.focus())
    } finally {
      submitting.current = false
      setPending(false)
    }
  }

  function startAnother() {
    submissionId.current = createSubmissionId()
    setSuccess(null)
    setError(null)
    setFieldErrors([])
  }

  if (success) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-xl border border-oliva-200 bg-oliva-50 px-5 py-6 outline-none"
      >
        <h3 className="font-sans text-lg font-semibold text-espresso-800">
          {success.duplicate ? "This inquiry was already sent" : "Inquiry sent"}
        </h3>
        <p className="mt-2 text-sm text-espresso-700">
          {success.duplicate
            ? "We kept the original request and did not send it again."
            : "The kitchen has your catering request and will follow up. This is not an order confirmation and nothing was charged."}
        </p>
        <p className="mt-3 text-sm text-espresso-800">
          Reference <span className="font-medium">{success.submissionId}</span>
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-5"
          onClick={startAnother}
        >
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby={`${formId}-title`}
      aria-busy={pending}
    >
      <div>
        <h3 id={`${formId}-title`} className="font-sans text-xl font-semibold text-espresso-800">
          Request a catering inquiry
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us about the event and we will follow up. This does not reserve a date, confirm an order, or charge a card.
        </p>
      </div>

      {error ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-rosso-200 bg-rosso-50 px-3 py-2 text-sm text-rosso-800 outline-none"
        >
          {error}
        </div>
      ) : null}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field label="Name" htmlFor={`${formId}-name`} error={fieldMessage("name")} required>
        <Input
          id={`${formId}-name`}
          name="name"
          required
          autoComplete="name"
          maxLength={120}
          aria-invalid={Boolean(fieldMessage("name"))}
          placeholder="Your name"
        />
      </Field>

      <Field label="Email" htmlFor={`${formId}-email`} error={fieldMessage("email")} required>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          aria-invalid={Boolean(fieldMessage("email"))}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Phone" htmlFor={`${formId}-phone`} error={fieldMessage("phone")} required>
        <Input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          maxLength={40}
          aria-invalid={Boolean(fieldMessage("phone"))}
          placeholder="(203) 000-0000"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Event date" htmlFor={`${formId}-date`} error={fieldMessage("date")} required>
          <Input
            id={`${formId}-date`}
            name="date"
            type="date"
            required
            aria-invalid={Boolean(fieldMessage("date"))}
          />
        </Field>
        <Field label="Start time" htmlFor={`${formId}-time`} error={fieldMessage("time")}>
          <Input
            id={`${formId}-time`}
            name="time"
            type="time"
            aria-invalid={Boolean(fieldMessage("time"))}
          />
        </Field>
      </div>

      <Field label="Guest count" htmlFor={`${formId}-guests`} error={fieldMessage("guests")} required>
        <Input
          id={`${formId}-guests`}
          name="guests"
          type="number"
          required
          min={1}
          max={2000}
          inputMode="numeric"
          aria-invalid={Boolean(fieldMessage("guests"))}
          placeholder="Number of guests"
        />
      </Field>

      <Field label="Event type" htmlFor={`${formId}-type`} error={fieldMessage("eventType")} required>
        <select
          id={`${formId}-type`}
          name="eventType"
          required
          defaultValue=""
          className={selectClassName}
          aria-invalid={Boolean(fieldMessage("eventType"))}
        >
          <option value="" disabled>
            Select an event type
          </option>
          <option value="corporate">Corporate</option>
          <option value="office">Office lunch</option>
          <option value="wedding">Wedding</option>
          <option value="celebration">Celebration</option>
          <option value="holiday">Holiday</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <Field label="Service" htmlFor={`${formId}-service`} error={fieldMessage("service")} required>
        <select
          id={`${formId}-service`}
          name="service"
          required
          defaultValue=""
          className={selectClassName}
          aria-invalid={Boolean(fieldMessage("service"))}
        >
          <option value="" disabled>
            How should we serve it?
          </option>
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
          <option value="full-service">Full service</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </Field>

      <Field label="Venue or neighborhood" htmlFor={`${formId}-venue`} error={fieldMessage("venue")}>
        <Input
          id={`${formId}-venue`}
          name="venue"
          autoComplete="street-address"
          maxLength={200}
          placeholder="Fairfield office, home, or venue"
        />
      </Field>

      <Field label="Budget note" htmlFor={`${formId}-budget`} error={fieldMessage("budget")}>
        <Input
          id={`${formId}-budget`}
          name="budget"
          maxLength={80}
          placeholder="Optional, such as about $20 per guest"
        />
      </Field>

      <Field label="Details" htmlFor={`${formId}-message`} error={fieldMessage("message")}>
        <Textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Menu ideas, dietary needs, timing, or anything else the kitchen should know."
        />
      </Field>

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full bg-rosso-500 text-base hover:bg-rosso-600"
      >
        {pending ? "Sending inquiry..." : "Send inquiry"}
      </Button>
      <p className="text-center text-sm text-muted-foreground" aria-live="polite">
        {pending ? "Sending your inquiry. Please keep this page open." : "No payment is collected on this form."}
      </p>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  required = false,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  const errorId = `${htmlFor}-error`
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-describedby"?: string }>, {
        "aria-describedby": error ? errorId : undefined,
      })
    : children
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>
        {label}
        {required ? <span className="sr-only"> required</span> : null}
        {required ? <span aria-hidden="true" className="text-rosso-500"> *</span> : null}
      </Label>
      {control}
      {error ? (
        <p id={errorId} className="text-sm text-rosso-700">
          {error}
        </p>
      ) : null}
    </div>
  )
}
