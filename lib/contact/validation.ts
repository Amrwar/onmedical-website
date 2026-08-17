import type { ContactEnquiry } from './types'

export type ParsedEnquiry =
  | { ok: true; enquiry: ContactEnquiry }
  | { ok: false }

/**
 * Reads an enquiry out of a request body.
 *
 * Name, email and message are the three fields a reply cannot happen
 * without; everything else is welcome but optional. An empty string is
 * as missing as an absent key, matching what the form can actually send.
 */
export function parseEnquiry(body: unknown): ParsedEnquiry {
  const record = (body ?? {}) as Record<string, unknown>
  const { name, organization, email, phone, enquiryType, message } = record
  if (!name || !email || !message) {
    return { ok: false }
  }
  return {
    ok: true,
    enquiry: {
      name: String(name),
      email: String(email),
      message: String(message),
      organization: organization ? String(organization) : undefined,
      phone: phone ? String(phone) : undefined,
      enquiryType: enquiryType ? String(enquiryType) : undefined,
    },
  }
}
