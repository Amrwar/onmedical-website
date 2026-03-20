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

const services = [
  {
    icon: Package,
    title: 'Equipment Distribution',
    description:
      'Supply of specialist oncology, radiotherapy, and radiation measurement systems from globally authorized manufacturers.',
    variant: 'default' as const,
  },
  {
    icon: Wrench,
    title: 'Technical Support & Installation',
    description:
      'End-to-end installation, commissioning, and user training delivered by experienced technical professionals.',
    variant: 'default' as const,
  },
  {
    icon: HeartPulse,
    title: 'After-Sales Service',
    description:
      'Scheduled maintenance, calibration guidance, and prompt corrective support throughout the equipment lifecycle.',
    variant: 'default' as const,
  },
  {
    icon: Microscope,
    title: 'Medical Physics Solutions',
    description:
      'Dosimetry systems, radiation measurement equipment, and quality assurance tools for clinical physics programs.',
    variant: 'dark' as const,
  },
  {
    icon: Globe,
    title: 'Market Representation',
    description:
      'Authorized Egyptian representation for international manufacturers — handling commercial, regulatory, and logistical aspects.',
    variant: 'dark' as const,
  },
  {
    icon: PhoneCall,
    title: 'Technical Consultation',
    description:
      'Expert guidance on equipment selection, clinical workflow integration, and radiotherapy quality assurance program design.',
    variant: 'dark' as const,
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding section-alt border-y border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
          <SectionHeader
            label="What We Do"
            title="End-to-End Medical Technology Services"
            subtitle="From initial consultation through installation, training, and long-term support — ON Medical provides the complete service structure that Egyptian medical institutions require."
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
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
