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

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // In production: send to an API route or email service (e.g., Resend, SendGrid, Formspree)
    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-2xl border border-medical-border shadow-card p-8 lg:p-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center gap-5 py-12">
          <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
            <CheckCircle2 size={28} className="text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Enquiry Received</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Thank you for reaching out to ON Medical Company. A member of our team will review your message and respond within one business day.
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormState({ name: '', organization: '', email: '', phone: '', enquiryType: '', message: '' })
            }}
            className="text-sm text-teal-600 hover:text-teal-700 font-semibold"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="mb-7">
            <h2 className="text-xl font-bold text-navy-900 mb-1">Send an Enquiry</h2>
            <p className="text-slate-400 text-sm">
              Fill in the form below and we will respond within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Full Name <span className="text-red-400">*</span>
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
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Organization / Hospital
                </label>
                <input
                  name="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  placeholder="Cairo University Hospital"
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Email Address <span className="text-red-400">*</span>
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
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Phone Number
                </label>
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

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Nature of Enquiry
              </label>
              <div className="relative">
                <select
                  name="enquiryType"
                  value={formState.enquiryType}
                  onChange={handleChange}
                  className="input-field appearance-none pr-10"
                >
                  <option value="" disabled>Select enquiry type…</option>
                  {enquiryTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Message <span className="text-red-400">*</span>
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

            <p className="text-xs text-slate-400 leading-relaxed">
              By submitting this form, you consent to ON Medical Company contacting you regarding your enquiry. Your information will not be shared with third parties.
            </p>

            <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
              <Send size={16} />
              Submit Enquiry
            </button>
          </form>
        </>
      )}
    </div>
  )
}
