'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const partners = [
  {
    name: 'PTW Freiburg',
    country: 'Germany',
    flag: '🇩🇪',
    short: 'High-precision dosimetry systems and radiation measurement devices for radiotherapy quality assurance.',
  },
  {
    name: 'Ashland Medical',
    country: 'United States',
    flag: '🇺🇸',
    short: 'Specialized accessories and complementary measuring devices for teletherapy and brachytherapy applications.',
  },
  {
    name: 'Klarity',
    country: 'China',
    flag: '🇨🇳',
    short: 'Computer-controlled motorized patient translation couches for Total Body Irradiation procedures.',
  },
]

export default function PartnersPreview() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <AnimatedSection>
          <SectionHeader
            tag="Global Partnerships"
            title="Representing World-Class Manufacturers"
            subtitle="We are the authorized Egyptian representative for internationally recognized companies whose technologies are trusted in oncology and radiotherapy centers worldwide."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group h-full flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-white/35 font-semibold block mb-1">
                      {partner.flag} {partner.country}
                    </span>
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                  </div>
                </div>

                {/* Logo placeholder */}
                <div className="w-full h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-sm text-white/30 font-medium">{partner.name}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/55 leading-relaxed flex-1">{partner.short}</p>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-medium text-teal-400">Authorized Representative · Egypt</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35} className="flex justify-center mt-12">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 hover:border-white/50 text-white font-semibold rounded-lg hover:bg-white/8 transition-all duration-200 text-sm"
          >
            View All Partners
            <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
