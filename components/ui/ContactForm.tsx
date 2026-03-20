'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, ChevronDown } from 'lucide-react'

const enquiryTypes = [
  'Equipment Enquiry',
  'Technical Support',
  'After-Sales Service',
  'Partnership / Representation',
  'General Information',
  'Other',
]

interface FormState {
  name: string
  organization: string
  email: string
  phone: string
  enquiryType: string
  message: string
}

const emptyForm: FormState = {
  name:         '',
  organization: '',
  email:        '',
  phone:        '',
  enquiryType:  '',
  message:      '',
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // In production: send to an API route or email service (Resend, SendGrid, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-200/70 shadow-panel p-8 lg:p-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center gap-6 py-14">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
            <CheckCircle2 size={28} className="text-green-600" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink-900 mb-2">Enquiry Received</h3>
            <p className="text-ink-500 text-[13px] leading-relaxed max-w-sm">
              Thank you for reaching out to ON Medical Company. A member of our team will review
              your message and respond within one business day.
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormState(emptyForm)
            }}
            className="text-[13px] text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="mb-7 pb-6 border-b border-ink-200/60">
            <h2 className="text-xl font-bold text-ink-900 mb-1.5">Send an Enquiry</h2>
            <p className="text-ink-400 text-[13px]">
              Fill in the form below and we will respond within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Organisation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="input-label">
                  Full Name <span className="text-brand-500">*</span>
                </label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Dr. Ahmed Hassan"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="input-label">Organisation / Hospital</label>
                <input
                  name="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  placeholder="Cairo University Hospital"
                  className="input-field"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="input-label">
                  Email Address <span className="text-brand-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="name@hospital.com"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="input-label">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+20 1XX XXX XXXX"
                  className="input-field"
                />
              </div>
            </div>

            {/* Enquiry type */}
            <div className="flex flex-col gap-1.5">
              <label className="input-label">Nature of Enquiry</label>
              <div className="relative">
                <select
                  name="enquiryType"
                  value={formState.enquiryType}
                  onChange={handleChange}
                  className="input-field appearance-none pr-10"
                >
                  <option value="" disabled>
                    Select enquiry type…
                  </option>
                  {enquiryTypes.map(t => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none"
                  strokeWidth={1.75}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="input-label">
                Message <span className="text-brand-500">*</span>
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Please describe your requirements, the equipment you are interested in, or any questions you have for our team…"
                className="input-field resize-none"
              />
            </div>

            <p className="text-[11px] text-ink-400 leading-relaxed">
              By submitting this form, you consent to ON Medical Company contacting you regarding
              your enquiry. Your information will not be shared with third parties.
            </p>

            <button type="submit" className="btn-primary w-full justify-center py-3.5 text-[14px]">
              <Send size={15} strokeWidth={1.75} />
              Submit Enquiry
            </button>
          </form>
        </>
      )}
    </div>
  )
}
