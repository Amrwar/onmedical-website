import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { parseEnquiry } from '@/lib/contact/validation'
import { enquiryHtml, enquiryRecipient, enquirySubject, ENQUIRY_SENDER } from '@/lib/contact/email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const parsed = parseEnquiry(await request.json())

    if (!parsed.ok) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    await resend.emails.send({
      from: ENQUIRY_SENDER,
      to: enquiryRecipient(),
      replyTo: parsed.enquiry.email,
      subject: enquirySubject(parsed.enquiry),
      html: enquiryHtml(parsed.enquiry),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
