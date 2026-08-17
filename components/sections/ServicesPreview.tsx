'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { useTranslations, useLocale } from 'next-intl'
import { servicePreviews } from '@/data/services'
import { localizeHref as localizeSiteHref } from '@/lib/site'

export default function ServicesPreview() {
  const t      = useTranslations('servicesPreview')
  const locale = useLocale()

  const localizeHref = (href: string) => localizeSiteHref(locale, href)

  const services = servicePreviews.map((entry) => ({
    icon: entry.icon,
    title: t(entry.titleKey),
    description: t(entry.descriptionKey),
    variant: entry.variant,
  }))

  return (
    <section className="section-padding bg-white">
      <div className="container-site">

        <AnimatedSection>
          {/* Open book icon above "WHAT WE DO" */}
          <div className="flex justify-center mb-5">
            <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left page — red */}
              <path d="M32,8 C32,8 20,4 6,6 C4,6 3,7 3,9 L3,44 C3,46 4,47 6,47 C20,45 32,49 32,49 Z" fill="#CC1212"/>
              {/* Left page inner lines */}
              <line x1="10" y1="16" x2="28" y2="14" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="10" y1="21" x2="28" y2="19" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="10" y1="26" x2="28" y2="24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="10" y1="31" x2="28" y2="29" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="10" y1="36" x2="28" y2="34" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
              {/* Right page — dark/black */}
              <path d="M32,8 C32,8 44,4 58,6 C60,6 61,7 61,9 L61,44 C61,46 60,47 58,47 C44,45 32,49 32,49 Z" fill="#1a1a1a"/>
              {/* Right page inner lines */}
              <line x1="54" y1="16" x2="36" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="54" y1="21" x2="36" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="54" y1="26" x2="36" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="54" y1="31" x2="36" y2="29" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="54" y1="36" x2="36" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
              {/* Spine */}
              <line x1="32" y1="8" x2="32" y2="49" stroke="#CC1212" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Bottom curve */}
              <path d="M3,44 Q32,52 61,44" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <SectionHeader
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.07}>
              <ServiceCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="flex justify-center mt-12">
          <Link href={localizeHref('/services')} className="btn-primary">
            {t('viewAll')} <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
