'use client'

import { ShieldCheck, Award, Users, Cpu, BookOpen, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: Cpu,
    title: 'Deep Technical Specialization',
    description:
      'Our leadership brings decades of hands-on experience in radiotherapy equipment, radiation dosimetry, and medical physics — expertise that generalist distributors simply cannot match.',
  },
  {
    icon: Globe,
    title: 'Trusted International Partnerships',
    description:
      'We maintain authorized partnerships with globally recognized manufacturers from Germany, the USA, and China, ensuring access to genuine, high-quality equipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Regulatory Compliance',
    description:
      'Every transaction and import is conducted in strict accordance with Egyptian medical device regulations, customs procedures, and healthcare standards.',
  },
  {
    icon: Users,
    title: 'Dedicated Institutional Focus',
    description:
      'We serve hospitals, oncology centres, medical universities, and government health institutions — organizations that demand accountability, precision, and long-term support.',
  },
  {
    icon: BookOpen,
    title: 'Scientific Research Background',
    description:
      'Our technical leadership has contributed to peer-reviewed research on radiotherapy quality assurance and treatment planning, underpinning our consultative approach.',
  },
  {
    icon: Award,
    title: 'Committed to Long-Term Service',
    description:
      'Our relationship with clients does not end at delivery. We provide comprehensive after-sales support, calibration guidance, and ongoing technical consultation.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <AnimatedSection>
          <SectionHeader
            tag="Why ON Medical"
            title="The Standard for Specialized Medical Distribution"
            subtitle="We combine the reliability of international partnerships with on-the-ground technical expertise, delivering a level of service that Egyptian healthcare institutions can depend on."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={reason.title} delay={i * 0.07}>
                <div className="flex flex-col gap-4 p-7 rounded-xl border border-medical-border bg-white hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300 group h-full">
                  <div className="w-11 h-11 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 transition-colors">
                    <Icon size={19} className="text-navy-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 leading-snug">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
