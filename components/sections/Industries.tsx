'use client'

import { Building2, GraduationCap, FlaskConical, Stethoscope, Heart, Landmark } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const industries = [
  {
    icon: Heart,
    title: 'Oncology Hospitals',
    description: 'Specialized cancer treatment hospitals requiring radiotherapy and dosimetry systems.',
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
    description: 'Scientific research bodies studying radiotherapy quality assurance and treatment planning.',
  },
]

export default function Industries() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-tight">
        <AnimatedSection>
          <SectionHeader
            tag="Who We Serve"
            title="Built for Healthcare Institutions"
            subtitle="ON Medical partners with a wide range of Egyptian and regional healthcare organizations that rely on precision medical technology and professional support."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {industries.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-medical-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-teal-600" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-snug">{item.description}</p>
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
