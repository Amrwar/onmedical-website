import type { ContactEnquiry } from './types'

/** The address enquiry mail is sent from. */
export const ENQUIRY_SENDER = 'ON Medical Website <noreply@onmedical.net>'

/** Where enquiries land when CONTACT_TO_EMAIL is not configured. */
export const DEFAULT_ENQUIRY_RECIPIENT = 'osama@onmedical.net'

/** The recipient for enquiry mail, honouring the environment override. */
export function enquiryRecipient(): string {
  return process.env.CONTACT_TO_EMAIL ?? DEFAULT_ENQUIRY_RECIPIENT
}

/** The subject line: the enquiry type when one was given, then the sender. */
export function enquirySubject({ name, enquiryType }: ContactEnquiry): string {
  return `New Enquiry${enquiryType ? ` — ${enquiryType}` : ''} from ${name}`
}

/**
 * The HTML body of an enquiry notification.
 *
 * A plain table of what the visitor sent: optional rows appear only when
 * their field was given, and the message keeps its line breaks.
 */
export function enquiryHtml({ name, organization, email, phone, enquiryType, message }: ContactEnquiry): string {
  return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #CC1212; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">
              New Website Enquiry
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">
              ON Medical Company — onmedical.net
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 38%;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 14px; color: #111827; font-weight: 500;">${name}</span>
                </td>
              </tr>
              ${organization ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Organisation</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 14px; color: #111827;">${organization}</span>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #CC1212; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 14px; color: #111827;">${phone}</span>
                </td>
              </tr>` : ''}
              ${enquiryType ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af;">Enquiry Type</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 14px; color: #111827;">${enquiryType}</span>
                </td>
              </tr>` : ''}
            </table>

            <div style="margin-top: 24px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af; margin: 0 0 10px;">Message</p>
              <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
                <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${email}" style="display: inline-block; background: #CC1212; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-size: 13px; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `
}
