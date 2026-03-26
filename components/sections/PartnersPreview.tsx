'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTranslations, useLocale } from 'next-intl'

export default function PartnersPreview() {
  const t      = useTranslations('partnersPreview')
  const locale = useLocale()

  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  const partners = [
    {
      name: 'PTW Freiburg',
      country: 'Germany',
      badge: '🇩🇪 Germany',
      logo: '/logo-ptw.png',
      website: 'https://www.ptwdosimetry.com',
      short: t('ptw.short'),
    },
    {
      name: 'Ashland Medical',
      country: 'United States',
      badge: '🇺🇸 United States',
      logo: '/logo-ashland.png',
      website: 'https://www.ashland.com',
      short: t('ashland.short'),
    },
    {
      name: 'Klarity',
      country: 'China',
      badge: '🇨🇳 China',
      logo: '/logo-klarity.png',
      website: 'https://www.klarity-medical.com',
      short: t('klarity.short'),
    },
  ]

  return (
    <section className="section-padding bg-ink-50 mx-3 sm:mx-5 lg:mx-8 rounded-3xl overflow-hidden relative">
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30"
        style={{ backgroundSize: '28px 28px' }}
      />

      <div className="container-site relative z-10">
        <AnimatedSection>
          {/* Globe icon above "GLOBAL PARTNERSHIPS" */}
          <div className="flex justify-center mb-5">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Globe circle */}
              <circle cx="28" cy="28" r="24" fill="#1a1a1a" stroke="#CC1212" strokeWidth="2"/>
              {/* Latitude lines */}
              <ellipse cx="28" cy="28" rx="24" ry="10" fill="none" stroke="#CC1212" strokeWidth="1.2" strokeOpacity="0.5"/>
              <line x1="4" y1="28" x2="52" y2="28" stroke="#CC1212" strokeWidth="1.2" strokeOpacity="0.5"/>
              <line x1="7"  y1="18" x2="49" y2="18" stroke="#CC1212" strokeWidth="1" strokeOpacity="0.35"/>
              <line x1="7"  y1="38" x2="49" y2="38" stroke="#CC1212" strokeWidth="1" strokeOpacity="0.35"/>
              {/* Longitude lines */}
              <ellipse cx="28" cy="28" rx="10" ry="24" fill="none" stroke="#CC1212" strokeWidth="1.2" strokeOpacity="0.5"/>
              <ellipse cx="28" cy="28" rx="18" ry="24" fill="none" stroke="#CC1212" strokeWidth="1" strokeOpacity="0.3"/>
              {/* Vertical axis */}
              <line x1="28" y1="4" x2="28" y2="52" stroke="#CC1212" strokeWidth="1.2" strokeOpacity="0.4"/>
              {/* Top and bottom poles */}
              <circle cx="28" cy="4"  r="2" fill="#CC1212"/>
              <circle cx="28" cy="52" r="2" fill="#CC1212"/>
              {/* Outer border */}
              <circle cx="28" cy="28" r="24" fill="none" stroke="#CC1212" strokeWidth="2"/>
            </svg>
          </div>
          <SectionHeader
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {partners.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div
                className="rounded-xl border border-ink-200 bg-white p-7
                            hover:border-ink-300 hover:shadow-card transition-all duration-300
                            flex flex-col gap-5 h-full"
              >
                {/* Country badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold
                              bg-brand-50 border border-brand-100 text-brand-700 w-fit"
                >
                  {p.badge}
                </span>

                {/* Name */}
                <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>

                {/* Logo */}
                <div className="w-full h-14 rounded-lg bg-ink-50 border border-ink-200/70 flex items-center justify-center px-5 py-2">
                  <Image
                    src={p.logo}
                    alt={p.name + ' logo'}
                    width={160}
                    height={48}
                    className="object-contain max-h-9 w-auto"
                  />
                </div>

                {/* Description */}
                <p className="text-[13px] text-ink-500 leading-relaxed flex-1">{p.short}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-ink-200/60">
                  <span className="text-[11px] text-brand-600 font-medium">
                    {t('authorizedRep')}
                  </span>
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-ink-400 hover:text-brand-600 transition-colors"
                  >
                    {t('visit')} <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35} className="flex justify-center mt-12">
          <Link
            href={localizeHref('/partners')}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-brand-300
                       text-brand-700 text-[13px] font-semibold hover:bg-brand-100 hover:border-brand-400
                       transition-all duration-200 bg-white"
          >
            {t('viewAll')} <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
