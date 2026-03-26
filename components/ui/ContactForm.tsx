'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

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
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)
  const t = useTranslations('contact')

  const enquiryTypes = [
    t('enquiryType1'),
    t('enquiryType2'),
    t('enquiryType3'),
    t('enquiryType4'),
    t('enquiryType5'),
    t('enquiryType6'),
  ]

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError(t('formError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-200/70 shadow-panel p-8 lg:p-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center gap-6 py-14">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
            <CheckCircle2 size={28} className="text-green-600" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink-900 mb-2">{t('formSuccess')}</h3>
            <p className="text-ink-500 text-[13px] leading-relaxed max-w-sm">
              {t('formSuccessDesc')}
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormState(emptyForm)
            }}
            className="text-[13px] text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            {t('formSendAnother')}
          </button>
        </div>
      ) : (
        <>
          <div className="mb-7 pb-6 border-b border-ink-200/60">
            <h2 className="text-xl font-bold text-ink-900 mb-1.5">{t('formTitle')}</h2>
            <p className="text-ink-400 text-[13px]">
              {t('formSubtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Organisation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="input-label">
                  {t('formName')} <span className="text-brand-500">*</span>
                </label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder={t('formNamePlaceholder')}
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="input-label">{t('formOrg')}</label>
                <input
                  name="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  placeholder={t('formOrgPlaceholder')}
                  className="input-field"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="input-label">
                  {t('formEmail')} <span className="text-brand-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder={t('formEmailPlaceholder')}
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="input-label">{t('formPhone')}</label>
                <input
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder={t('formPhonePlaceholder')}
                  className="input-field"
                />
              </div>
            </div>

            {/* Enquiry type */}
            <div className="flex flex-col gap-1.5">
              <label className="input-label">{t('formEnquiryType')}</label>
              <div className="relative">
                <select
                  name="enquiryType"
                  value={formState.enquiryType}
                  onChange={handleChange}
                  className="input-field appearance-none pr-10"
                >
                  <option value="" disabled>
                    {t('formSelectType')}
                  </option>
                  {enquiryTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
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
                {t('formMessage')} <span className="text-brand-500">*</span>
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('formMessagePlaceholder')}
                className="input-field resize-none"
              />
            </div>

            <p className="text-[11px] text-ink-400 leading-relaxed">
              {t('formConsent')}
            </p>

            {error && (
              <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-[14px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={15} strokeWidth={1.75} />
              {loading ? t('formSending') : t('formSubmit')}
            </button>
          </form>
        </>
      )}
    </div>
  )
}
