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
    badge: '🇩🇪 Germany',
    logo: '/logo-ptw.png',
    website: 'https://www.ptwdosimetry.com',
    short:
      'High-precision dosimetry systems and radiation measurement devices for radiotherapy quality assurance.',
  },
  {
    name: 'Ashland Medical',
    country: 'United States',
    badge: '🇺🇸 United States',
    logo: '/logo-ashland.png',
    website: 'https://www.ashland.com',
    short:
      'Specialized accessories and complementary measuring devices for teletherapy and brachytherapy applications.',
  },
  {
    name: 'Klarity',
    country: 'China',
    badge: '🇨🇳 China',
    logo: '/logo-klarity.png',
    website: 'https://www.klarity-medical.com',
    short:
      'Computer-controlled motorized patient translation couches for Total Body Irradiation procedures.',
  },
]

export default function PartnersPreview() {
  return (
    <section className="section-padding bg-ink-950 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-dot-grid-light pointer-events-none"
        style={{ backgroundSize: '28px 28px' }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgb(204 18 18 / 0.07) 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Global Partnerships"
            title="Representing World-Class Manufacturers"
            subtitle="We are the authorized Egyptian representative for internationally recognized companies whose technologies set the standard in oncology and radiotherapy."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {partners.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-7
                            hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300
                            flex flex-col gap-5 h-full"
              >
                {/* Country badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold
                              bg-white/[0.08] border border-white/[0.12] text-white/60 w-fit"
                >
                  {p.badge}
                </span>

                {/* Name */}
                <h3 className="text-lg font-bold text-white">{p.name}</h3>

                {/* Logo on white pill */}
                <div className="w-full h-14 rounded-lg bg-white border border-white/10 flex items-center justify-center px-5 py-2">
                  <Image
                    src={p.logo}
                    alt={p.name + ' logo'}
                    width={160}
                    height={48}
                    className="object-contain max-h-9 w-auto"
                  />
                </div>

                {/* Description */}
                <p className="text-[13px] text-white/45 leading-relaxed flex-1">{p.short}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                  <span className="text-[11px] text-brand-400 font-medium">
                    Authorized Rep · Egypt
                  </span>
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-white/35 hover:text-white transition-colors"
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
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-white/20
                       text-white text-[13px] font-semibold hover:bg-white/[0.08] hover:border-white/35
                       transition-all duration-200"
          >
            View All Partners <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
