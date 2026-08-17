'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useTranslations } from 'next-intl'
import { stats as statList } from '@/data/stats'

export default function StatsBar() {
  const t = useTranslations('statsBar')

  const stats = statList.map((entry) => ({
    value: entry.value,
    label: t(entry.labelKey),
    sub: t(entry.subKey),
  }))

  return (
    <section className="bg-white">
      <div className="container-site py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-200">
          {stats.map((s, i) => (
            <AnimatedSection
              key={s.label}
              delay={i * 0.07}
              className="flex flex-col gap-1 px-6 first:pl-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="stat-value text-ink-950">{s.value}</span>
              <span className="stat-label text-ink-800">{s.label}</span>
              <span className="stat-sub text-ink-400">{s.sub}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
