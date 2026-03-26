'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useTranslations } from 'next-intl'

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations('contact')

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ]

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                isOpen
                  ? 'border-brand-200 shadow-card-focus'
                  : 'border-ink-200/70 hover:border-ink-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`w-full flex items-center justify-between gap-5 px-6 py-4 text-left transition-colors ${
                  isOpen
                    ? 'bg-brand-50/50'
                    : 'bg-white hover:bg-ink-50/70'
                }`}
              >
                <span className="text-[13px] font-semibold text-ink-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={15}
                  strokeWidth={1.75}
                  className={`text-brand-600 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-64' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-4 bg-ink-50/60 border-t border-ink-200/60">
                  <p className="text-[13px] text-ink-500 leading-[1.8]">{faq.a}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )
      })}
    </div>
  )
}
