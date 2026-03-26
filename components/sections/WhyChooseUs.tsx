'use client'

import { ShieldCheck, Award, Users, Cpu, BookOpen, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTranslations } from 'next-intl'

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs')

  const reasons = [
    {
      icon: Cpu,
      title: t('r1Title'),
      description: t('r1Desc'),
    },
    {
      icon: Globe,
      title: t('r2Title'),
      description: t('r2Desc'),
    },
    {
      icon: ShieldCheck,
      title: t('r3Title'),
      description: t('r3Desc'),
    },
    {
      icon: Users,
      title: t('r4Title'),
      description: t('r4Desc'),
    },
    {
      icon: BookOpen,
      title: t('r5Title'),
      description: t('r5Desc'),
    },
    {
      icon: Award,
      title: t('r6Title'),
      description: t('r6Desc'),
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-site">

        <AnimatedSection>
          {/* Question mark icon above "WHY ON MEDICAL" */}
          <div className="flex justify-center mb-5">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Question mark curve */}
              <path d="M6,16 C6,7 11,3 20,3 C29,3 34,8 34,16 C34,22 30,26 25,29 C22,31 20,33 20,38" stroke="#CC1212" strokeWidth="5" strokeLinecap="round" fill="none"/>
              {/* Dot */}
              <circle cx="20" cy="52" r="4.5" fill="#CC1212"/>
            </svg>
          </div>
          <SectionHeader
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={reason.title} delay={i * 0.07}>
                <div
                  className="group p-7 rounded-xl border border-ink-200/60 bg-white
                              hover:border-brand-200 hover:bg-brand-50/30 hover:shadow-card
                              transition-all duration-300 flex flex-col gap-4 h-full"
                >
                  <div className="icon-box group-hover:bg-ink-900 group-hover:border-ink-900 transition-colors">
                    <Icon
                      size={18}
                      className="text-ink-600 group-hover:text-white transition-colors"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink-900 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] text-ink-500 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
