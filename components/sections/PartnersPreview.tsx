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
    <section className="section-padding bg-white relative">
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30"
        style={{ backgroundSize: '28px 28px' }}
      />

      <div className="container-site relative z-10">
        <AnimatedSection>
          {/* Globe icon above "GLOBAL PARTNERSHIPS" */}
          <div className="flex justify-center mb-5">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="globeRed" cx="38%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#e53e3e"/>
                  <stop offset="55%" stopColor="#CC1212"/>
                  <stop offset="100%" stopColor="#991111"/>
                </radialGradient>
              </defs>
              {/* Globe body — red gradient */}
              <circle cx="30" cy="30" r="26" fill="url(#globeRed)"/>
              {/* Inner highlight */}
              <ellipse cx="22" cy="20" rx="8" ry="6" fill="rgba(255,255,255,0.12)"/>
              {/* Latitude lines — white */}
              <ellipse cx="30" cy="30" rx="26" ry="10" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2"/>
              <line x1="4" y1="30" x2="56" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2"/>
              <line x1="8"  y1="19" x2="52" y2="19" stroke="rgba(255,255,255,0.15)" strokeWidth="0.9"/>
              <line x1="8"  y1="41" x2="52" y2="41" stroke="rgba(255,255,255,0.15)" strokeWidth="0.9"/>
              {/* Longitude lines — white */}
              <ellipse cx="30" cy="30" rx="11" ry="26" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
              <ellipse cx="30" cy="30" rx="20" ry="26" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.9"/>
              <line x1="30" y1="4" x2="30" y2="56" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
              {/* Poles */}
              <circle cx="30" cy="4"  r="2.5" fill="#1a1a1a"/>
              <circle cx="30" cy="56" r="2.5" fill="#1a1a1a"/>
              {/* Location pin — dark */}
              <circle cx="37" cy="26" r="4" fill="#1a1a1a"/>
              <circle cx="37" cy="26" r="2" fill="rgba(255,255,255,0.5)"/>
              {/* Outer border */}
              <circle cx="30" cy="30" r="26" fill="none" stroke="#1a1a1a" strokeWidth="1.8"/>
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
                className="rounded-xl bg-white p-7 hover:shadow-card transition-all duration-300 flex flex-col gap-5 h-full"
                style={{ borderTop: '2px solid #CC1212', borderBottom: '2px solid #CC1212', borderLeft: '2px solid #e5e7eb', borderRight: '2px solid #e5e7eb' }}
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
