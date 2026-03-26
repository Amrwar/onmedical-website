'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useTranslations, useLocale } from 'next-intl'

export default function ContactCTA() {
  const t      = useTranslations('contactCTA')
  const locale = useLocale()

  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-panel">

            {/* Dot grid */}
            <div
              className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50"
              style={{ backgroundSize: '24px 24px' }}
            />

            {/* Red left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-600 to-brand-400" />

            {/* Red glow top right */}
            <div
              className="absolute -top-12 -right-12 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgb(229 25 25 / 0.07) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 px-8 py-12 lg:px-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* Text */}
              <div className="max-w-xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 block mb-3">
                  {t('label')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-ink-900 leading-tight mb-4">
                  {t('title')}
                </h2>
                <p className="text-[14px] text-ink-600 leading-relaxed mb-7">
                  {t('desc')}
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="tel:+20224115184"
                    className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors"
                  >
                    <Phone size={13} className="text-brand-600" />
                    +20 2 24115184
                  </a>
                  <a
                    href="mailto:osama@onmedical.net"
                    className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors"
                  >
                    <Mail size={13} className="text-brand-600" />
                    osama@onmedical.net
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <Link href={localizeHref('/contact')} className="btn-primary whitespace-nowrap">
                  {t('cta1')} <ArrowRight size={14} />
                </Link>
                <Link
                  href={localizeHref('/partners')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-ink-300 text-ink-700 text-[13px] font-semibold hover:bg-ink-50 hover:border-ink-400 transition-all duration-200 whitespace-nowrap"
                >
                  {t('cta2')}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
