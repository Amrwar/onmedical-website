'use client'

import { ShieldCheck, Award, Users, Cpu, BookOpen, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: Cpu,
    title: 'Deep Technical Specialization',
    description:
      'Our leadership brings decades of hands-on expertise in radiotherapy equipment, radiation dosimetry, and medical physics — expertise that generalist distributors cannot match.',
  },
  {
    icon: Globe,
    title: 'Trusted Global Partnerships',
    description:
      'Authorized partnerships with world-recognized manufacturers from Germany, the USA, and China, ensuring access to genuine, high-quality equipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Regulatory Compliance',
    description:
      'Every transaction is conducted in strict accordance with Egyptian medical device import regulations, customs procedures, and healthcare standards.',
  },
  {
    icon: Users,
    title: 'Institutional Focus',
    description:
      'We exclusively serve hospitals, oncology centres, medical universities, and government health institutions — organizations that demand precision and accountability.',
  },
  {
    icon: BookOpen,
    title: 'Scientific Research Background',
    description:
      'Our leadership has contributed to peer-reviewed research in radiotherapy quality assurance and treatment planning, informing our consultative approach.',
  },
  {
    icon: Award,
    title: 'Long-Term Service Commitment',
    description:
      'Our relationship with clients extends well beyond delivery. We provide ongoing maintenance support, calibration guidance, and technical consultation.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white border-b border-ink-200/60">
      <div className="container-site">

        <AnimatedSection>
          <SectionHeader
            label="Why ON Medical"
            title="The Standard for Specialized Medical Distribution"
            subtitle="We combine the reliability of international partnerships with on-the-ground technical expertise — delivering a level of service that Egyptian healthcare institutions depend on."
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
