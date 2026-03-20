'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: '10+', label: 'Years of Expertise',    sublabel: 'In radiotherapy & oncology technology' },
  { value: '3',   label: 'International Partners', sublabel: 'Europe, USA & Asia' },
  { value: '50+', label: 'Medical Institutions',  sublabel: 'Hospitals, centres & universities' },
  { value: '2014', label: 'Year Established',     sublabel: 'Cairo, Egypt' },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-medical-border">
      <div className="container-tight py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-medical-border">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} className="lg:px-8 first:pl-0 last:pr-0">
              <div className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black text-navy-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-navy-800">{stat.label}</span>
                <span className="text-xs text-slate-400 leading-snug">{stat.sublabel}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
