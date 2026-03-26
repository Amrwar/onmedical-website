'use client'

import {
  Building2,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Heart,
  Landmark,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTranslations } from 'next-intl'

export default function Industries() {
  const t = useTranslations('industries')

  const industries = [
    {
      icon: Heart,
      title: t('i1Title'),
      description: t('i1Desc'),
    },
    {
      icon: Building2,
      title: t('i2Title'),
      description: t('i2Desc'),
    },
    {
      icon: GraduationCap,
      title: t('i3Title'),
      description: t('i3Desc'),
    },
    {
      icon: Landmark,
      title: t('i4Title'),
      description: t('i4Desc'),
    },
    {
      icon: Stethoscope,
      title: t('i5Title'),
      description: t('i5Desc'),
    },
    {
      icon: FlaskConical,
      title: t('i6Title'),
      description: t('i6Desc'),
    },
  ]

  return (
    <section className="section-padding section-alt border-b border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
          <SectionHeader
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {industries.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="card p-6 flex items-start gap-4">
                  <div className="icon-box flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-ink-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-ink-500 leading-snug mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
