import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, organization, email, phone, enquiryType, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'ON Medical Website <noreply@onmedical.net>',
      to: process.env.CONTACT_TO_EMAIL ?? 'osama@onmedical.net',
      replyTo: email,
      subject: `New Enquiry${enquiryType ? ` — ${enquiryType}` : ''} from ${name}`,
      html: `
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
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
