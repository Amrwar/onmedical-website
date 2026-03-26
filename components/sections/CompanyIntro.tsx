'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useTranslations, useLocale } from 'next-intl'

export default function CompanyIntro() {
  const t      = useTranslations('companyIntro')
  const locale = useLocale()

  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  const points = [t('point1'), t('point2'), t('point3'), t('point4')]

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Visual block ─────────────────────────── */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">

            {/* Main bordered panel */}
            <div className="relative rounded-2xl border border-ink-200/70 overflow-hidden bg-ink-50 shadow-panel aspect-[4/3]">
              <div
                className="absolute inset-0 bg-dot-grid"
                style={{ backgroundSize: '20px 20px' }}
              />

              {/* Centre content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white border border-ink-200/80 shadow-card flex items-center justify-center">
                  <FlaskConical size={28} className="text-brand-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-400 uppercase tracking-widest-plus">
                    {t('oncologySolutions')}
                  </p>
                  <p className="text-base font-medium text-ink-600 mt-1 max-w-[200px] leading-snug">
                    {t('advancedTech')}
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-500/40 rounded-tl" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-500/40 rounded-br" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-ink-200/80 shadow-panel px-5 py-4 flex items-center gap-3.5 z-10">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={17} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-ink-900 leading-tight">
                  {t('regulatoryCompliant')}
                </p>
                <p className="text-[11px] text-ink-400 mt-0.5">{t('egyptianStandards')}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Text ────────────────────────────────── */}
          <AnimatedSection
            direction="right"
            className="order-1 lg:order-2 flex flex-col gap-7"
          >
            <div className="flex flex-col gap-4">
              <span className="section-label">{t('label')}</span>
              <h2 className="section-title">
                {t('title')}
              </h2>
            </div>

            <div className="space-y-4 text-[14px] leading-[1.8] text-ink-500">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
            </div>

            {/* Feature checklist */}
            <ul className="space-y-2.5">
              {points.map(point => (
                <li key={point} className="flex items-start gap-3 text-[13px] text-ink-600">
                  <CheckCircle2
                    size={15}
                    className="text-brand-600 mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link href={localizeHref('/about')} className="btn-primary">
                {t('cta1')} <ArrowRight size={14} />
              </Link>
              <Link href={localizeHref('/contact')} className="btn-secondary">
                {t('cta2')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
