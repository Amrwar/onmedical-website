'use client'

import Link from 'next/link'
import { ArrowRight, Package, Wrench, HeartPulse, Microscope, PhoneCall, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  {
    icon: Package,
    title: 'Equipment Distribution',
    description: 'We distribute specialized oncology, radiotherapy, and radiation measurement equipment sourced from internationally recognized manufacturers.',
    variant: 'default' as const,
  },
  {
    icon: Wrench,
    title: 'Technical Support & Installation',
    description: 'Our experienced technical team manages the full installation lifecycle and provides ongoing support to ensure optimal equipment performance.',
    variant: 'default' as const,
  },
  {
    icon: HeartPulse,
    title: 'After-Sales Service',
    description: 'We stand behind every product with professional maintenance, calibration support, and fast-response after-sales service.',
    variant: 'default' as const,
  },
  {
    icon: Microscope,
    title: 'Medical Physics Solutions',
    description: 'Comprehensive support for dosimetry systems, radiation measurement devices, and medical physics quality assurance programs.',
    variant: 'featured' as const,
  },
  {
    icon: Globe,
    title: 'Market Representation',
    description: 'We act as the authorized Egyptian representative for leading international manufacturers, managing commercial and regulatory aspects.',
    variant: 'featured' as const,
  },
  {
    icon: PhoneCall,
    title: 'Technical Consultation',
    description: 'Expert guidance for hospitals and medical centers on selecting, implementing, and optimizing radiotherapy technologies.',
    variant: 'featured' as const,
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-tight">
        <AnimatedSection>
          <SectionHeader
            tag="What We Do"
            title="End-to-End Medical Technology Services"
            subtitle="From initial consultation through installation, training, and long-term support — ON Medical provides the complete service framework that medical institutions require."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.07}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="flex justify-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
