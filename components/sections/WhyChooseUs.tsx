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
    <section className="section-padding bg-white border-b border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
          {/* Question mark icon above "WHY ON MEDICAL" */}
          <div className="flex justify-center mb-5">
            <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer circle background */}
              <circle cx="26" cy="24" r="22" fill="#1a1a1a"/>
              <circle cx="26" cy="24" r="22" fill="none" stroke="#CC1212" strokeWidth="2"/>
              {/* Question mark curve top */}
              <path d="M16,16 C16,10 20,7 26,7 C32,7 36,10 36,16 C36,21 33,23 29,25 C27,26 26,27 26,30" stroke="#CC1212" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              {/* Dot */}
              <circle cx="26" cy="38" r="3" fill="#CC1212"/>
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
