'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const partners = [
  {
    name: 'PTW Freiburg',
    country: 'Germany',
    flag: '🇩🇪',
    logo: '/logo-ptw.png',
    website: 'https://www.ptwdosimetry.com',
    short: 'High-precision dosimetry systems and radiation measurement devices for radiotherapy quality assurance.',
  },
  {
    name: 'Ashland Medical',
    country: 'United States',
    flag: '🇺🇸',
    logo: '/logo-ashland.png',
    website: 'https://www.ashland.com',
    short: 'Specialized accessories and complementary measuring devices for teletherapy and brachytherapy applications.',
  },
  {
    name: 'Klarity',
    country: 'China',
    flag: '🇨🇳',
    logo: '/logo-klarity.png',
    website: 'https://www.klarity-medical.com',
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
                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center w-fit px-2.5 py-1 rounded-md bg-white/15 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase">
                    {partner.flag} {partner.country}
                  </span>
                  <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                </div>

                {/* Logo */}
                <div className="w-full h-16 rounded-lg bg-white flex items-center justify-center px-5 py-3">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={56}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-white/55 leading-relaxed flex-1">{partner.short}</p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-teal-400">Authorized Representative · Egypt</span>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                  >
                    Visit <ExternalLink size={10} />
                  </a>
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
