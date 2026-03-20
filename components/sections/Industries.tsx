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

const industries = [
  {
    icon: Heart,
    title: 'Oncology Hospitals',
    description:
      'Specialized cancer treatment hospitals requiring precision radiotherapy and dosimetry systems.',
  },
  {
    icon: Building2,
    title: 'Radiation Therapy Centres',
    description: 'Dedicated radiotherapy facilities serving cancer patients across Egypt.',
  },
  {
    icon: GraduationCap,
    title: 'Medical Universities',
    description: 'Academic institutions conducting research and training in medical physics.',
  },
  {
    icon: Landmark,
    title: 'Government Health Institutions',
    description: 'Ministry-affiliated hospitals and public oncology centres.',
  },
  {
    icon: Stethoscope,
    title: 'Private Medical Facilities',
    description: 'High-end private hospitals and specialist medical centres.',
  },
  {
    icon: FlaskConical,
    title: 'Research Institutes',
    description:
      'Scientific research bodies studying radiotherapy QA and treatment planning.',
  },
]

export default function Industries() {
  return (
    <section className="section-padding section-alt border-b border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
          <SectionHeader
            label="Who We Serve"
            title="Built for Healthcare Institutions"
            subtitle="ON Medical partners with a wide range of Egyptian and regional healthcare organizations that depend on precision medical technology and professional support."
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
