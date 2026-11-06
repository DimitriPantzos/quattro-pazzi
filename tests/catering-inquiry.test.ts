import assert from "node:assert/strict"
import { describe, it } from "node:test"
import {
  CATERING_FROM,
  CATERING_TAGGED_INBOX,
  buildOutboundEmail,
  createMemoryStore,
  processCateringInquiry,
  type MailSender,
  type OutboundInquiry,
} from "../lib/catering-inquiry.ts"

const NOW = Date.parse("2026-11-06T17:00:00.000Z")
const SUBMISSION_ID = "qp-11111111-1111-4111-8111-111111111111"

function inquiry(overrides: Record<string, unknown> = {}) {
  return {
    submissionId: SUBMISSION_ID,
    name: "Maria Rossi",
    email: "maria@example.com",
    phone: "(203) 555-0100",
    date: "2026-12-01",
    time: "18:30",
    guests: "40",
    eventType: "corporate",
    service: "delivery",
    venue: "Fairfield office",
    budget: "about $25 per guest",
    message: "Vegetarian options for six guests.",
    company: "",
    ...overrides,
  }
}

function harness() {
  const sent: OutboundInquiry[] = []
  let nextId = 1
  const sender: MailSender = async (email) => {
    sent.push(email)
    return { id: `msg_${nextId++}` }
  }
  return { sent, sender, store: createMemoryStore() }
}

async function submit(
  payload: unknown,
  options: {
    mailConfigured?: boolean
    recipientOverride?: string
    sender?: MailSender
    store?: ReturnType<typeof createMemoryStore>
    ip?: string
  } = {}
) {
  const local = harness()
  return {
    sent: local.sent,
    result: await processCateringInquiry({
      payload,
      mailConfigured: options.mailConfigured ?? true,
      recipientOverride: options.recipientOverride,
      sender: options.sender ?? local.sender,
      store: options.store ?? local.store,
      now: NOW,
      ip: options.ip ?? "203.0.113.10",
    }),
  }
}

describe("catering inquiry delivery", () => {
  it("sends one email only to the tagged inbox, with the guest as reply-to", async () => {
    const { result, sent } = await submit(inquiry())

    assert.equal(result.status, 200)
    assert.equal(result.body.success, true)
    assert.equal(result.body.submissionId, SUBMISSION_ID)
    assert.equal(result.body.providerMessageId, "msg_1")
    assert.equal(sent.length, 1)
    assert.deepEqual(sent[0].to, [CATERING_TAGGED_INBOX])
    assert.equal(sent[0].replyTo, "maria@example.com")
    assert.equal(sent[0].from, CATERING_FROM)
    assert.equal(sent[0].to.includes("info@quattropazzi.com"), false)
    assert.equal(sent[0].to.includes("lyfehospitality@mail.grokbot.com"), false)
    assert.equal(sent[0].to.includes("maria@example.com"), false)
    assert.match(sent[0].subject, new RegExp(SUBMISSION_ID))
    assert.match(sent[0].text, new RegExp(`Submission-ID: ${SUBMISSION_ID}`))
    assert.match(sent[0].text, /not a confirmed order/)
    assert.doesNotMatch(sent[0].text, /card/i)
  })

  it("does not report success when mail is not configured", async () => {
    const { result, sent } = await submit(inquiry(), { mailConfigured: false })

    assert.equal(result.status, 503)
    assert.equal(result.body.success, undefined)
    assert.equal(result.body.deliveryError, "RESEND_API_KEY is not configured.")
    assert.equal(sent.length, 0)
  })

  it("does not report success when the provider rejects the message", async () => {
    const sender: MailSender = async () => {
      throw new Error("The quattropazzi.com domain is not verified. re_secretvalue")
    }
    const { result } = await submit(inquiry(), { sender })

    assert.equal(result.status, 502)
    assert.equal(result.body.success, undefined)
    assert.match(result.body.error || "", /Nothing was submitted/)
    assert.match(result.body.deliveryError || "", /not verified/)
    assert.equal((result.body.deliveryError || "").includes("re_secretvalue"), false)
  })

  it("sends a clearly labeled TEST only to the tagged inbox", async () => {
    const { result, sent } = await submit(
      inquiry({
        name: "TEST Quattro catering form",
        message: "TEST — please ignore. Checking the inquiry route.",
      }),
      { recipientOverride: `${CATERING_TAGGED_INBOX},info@quattropazzi.com` }
    )

    assert.equal(result.status, 200)
    assert.deepEqual(sent[0].to, [CATERING_TAGGED_INBOX])
    assert.equal(sent[0].to.includes("info@quattropazzi.com"), false)
    assert.equal(sent[0].replyTo, "maria@example.com")
  })

  it("refuses a real inquiry that would copy info@ or the base Grok inbox", async () => {
    const restaurant = await submit(inquiry(), {
      recipientOverride: `${CATERING_TAGGED_INBOX},info@quattropazzi.com`,
    })
    const baseInbox = await submit(inquiry(), {
      recipientOverride: `${CATERING_TAGGED_INBOX},lyfehospitality@mail.grokbot.com`,
    })

    assert.equal(restaurant.result.status, 503)
    assert.equal(restaurant.result.body.success, undefined)
    assert.equal(restaurant.sent.length, 0)
    assert.equal(baseInbox.result.status, 503)
    assert.equal(baseInbox.sent.length, 0)
  })

  it("returns the original acceptance for an accidental duplicate submission", async () => {
    const local = harness()
    const first = await submit(inquiry(), local)
    const second = await submit(inquiry(), local)

    assert.equal(first.result.status, 200)
    assert.equal(second.result.status, 200)
    assert.equal(second.result.body.duplicate, true)
    assert.equal(second.result.body.providerMessageId, "msg_1")
    assert.equal(local.sent.length, 1)
  })

  it("allows a retry after a provider failure without a second successful id", async () => {
    const local = harness()
    let calls = 0
    const sender: MailSender = async (email) => {
      calls += 1
      local.sent.push(email)
      if (calls === 1) throw new Error("temporary provider outage")
      return { id: "msg_retry" }
    }
    const first = await submit(inquiry(), { ...local, sender })
    const second = await submit(inquiry(), { ...local, sender })

    assert.equal(first.result.status, 502)
    assert.equal(first.result.body.success, undefined)
    assert.equal(second.result.status, 200)
    assert.equal(second.result.body.providerMessageId, "msg_retry")
    assert.equal(local.sent.length, 2)
  })

  it("rejects invalid input, honeypot, and card numbers without sending", async () => {
    const invalid = await submit(inquiry({ email: "not-an-email" }))
    const honeypot = await submit(inquiry({ company: "https://spam.example" }))
    const card = await submit(inquiry({ message: "Card 4242 4242 4242 4242" }))

    assert.equal(invalid.result.status, 400)
    assert.equal(invalid.sent.length, 0)
    assert.equal(honeypot.result.status, 400)
    assert.equal(honeypot.sent.length, 0)
    assert.equal(card.result.status, 400)
    assert.match(card.result.body.error || "", /card/i)
    assert.equal(card.sent.length, 0)
  })

  it("rate limits repeated attempts", async () => {
    const store = createMemoryStore()
    let blocked = 0
    for (let attempt = 0; attempt < 9; attempt += 1) {
      const { result } = await submit(inquiry({ email: "not-an-email", submissionId: SUBMISSION_ID }), {
        store,
        ip: "198.51.100.8",
      })
      if (result.status === 429) blocked += 1
    }
    assert.equal(blocked, 1)
  })

  it("strips header breaks from the guest name and keeps reply-to on the guest", () => {
    const email = buildOutboundEmail(
      inquiry({ name: "Maria\r\nBcc: attacker@example.com", email: "maria@example.com" }) as never,
      [CATERING_TAGGED_INBOX]
    )
    assert.equal(email.subject.includes("\n"), false)
    assert.equal(email.subject.includes("\r"), false)
    assert.equal(email.replyTo, "maria@example.com")
  })
})
