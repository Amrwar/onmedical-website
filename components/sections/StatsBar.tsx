'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: '10+',  label: 'Years of Expertise',    sub: 'Radiotherapy & oncology technology' },
  { value: '3',    label: 'International Partners', sub: 'Europe · USA · Asia' },
  { value: '100+', label: 'Institutions Served',    sub: 'Hospitals, centres & universities' },
  { value: '2014', label: 'Year Established',       sub: 'Cairo, Egypt' },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-ink-200/60">
      <div className="container-site py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink-200/60">
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
