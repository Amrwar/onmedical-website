'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Package,
  Wrench,
  HeartPulse,
  Microscope,
  PhoneCall,
  Globe,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { useTranslations, useLocale } from 'next-intl'

export default function ServicesPreview() {
  const t      = useTranslations('servicesPreview')
  const locale = useLocale()

  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  const services = [
    {
      icon: Package,
      title: t('s1Title'),
      description: t('s1Desc'),
      variant: 'default' as const,
    },
    {
      icon: Wrench,
      title: t('s2Title'),
      description: t('s2Desc'),
      variant: 'default' as const,
    },
    {
      icon: HeartPulse,
      title: t('s3Title'),
      description: t('s3Desc'),
      variant: 'default' as const,
    },
    {
      icon: Microscope,
      title: t('s4Title'),
      description: t('s4Desc'),
      variant: 'dark' as const,
    },
    {
      icon: Globe,
      title: t('s5Title'),
      description: t('s5Desc'),
      variant: 'dark' as const,
    },
    {
      icon: PhoneCall,
      title: t('s6Title'),
      description: t('s6Desc'),
      variant: 'dark' as const,
    },
  ]

  return (
    <section className="section-padding section-alt border-y border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
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
