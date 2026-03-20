import type { Metadata } from 'next'
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'International Partners',
  description:
    'ON Medical Company is the authorized Egyptian representative for PTW Freiburg (Germany), Ashland Medical (USA), and Klarity (China) — world-class manufacturers of oncology and radiotherapy equipment.',
}

const partners = [
  {
    id: 'ptw',
    name: 'PTW Freiburg',
    country: 'Germany',
    flag: '🇩🇪',
    logo: '/logo-ptw.png',
    tagline: 'Global Leader in Radiation Dosimetry',
    description:
      'PTW Freiburg is a globally recognized manufacturer based in Freiburg, Germany, with decades of expertise in high-precision dosimetry systems and radiation measurement devices. Their equipment is trusted by medical physics departments and radiotherapy quality assurance programs in hospitals and research institutions worldwide.',
    products: [
      'Radiation dosimetry systems',
      'Ionization chambers',
      'Electrometer systems',
      'Detector arrays for IMRT QA',
      'Water phantom systems',
      'Reference dosimetry equipment',
    ],
    applications: [
      'Radiotherapy quality assurance',
      'Medical physics calibration',
      'Radiation protection',
      'Research dosimetry',
    ],
    accentClass: 'from-blue-900 to-navy-900',
    borderClass: 'border-blue-800/50',
  },
  {
    id: 'ashland',
    name: 'Ashland Medical',
    country: 'United States',
    flag: '🇺🇸',
    logo: '/logo-ashland.png',
    tagline: 'Specialized Accessories for Radiation Therapy',
    description:
      'Ashland Medical is a US-based producer of complementary measuring devices, accessories, and specialized equipment used in radiation therapy procedures. Their product range supports both teletherapy and brachytherapy workflows, providing the precision tools that clinical teams rely on for accurate treatment delivery.',
    products: [
      'Teletherapy accessories',
      'Brachytherapy support equipment',
      'Complementary measuring devices',
      'Patient positioning accessories',
      'Radiotherapy workflow tools',
    ],
    applications: [
      'External beam radiation therapy',
      'Brachytherapy procedures',
      'Clinical dosimetry support',
      'Radiation oncology workflows',
    ],
    accentClass: 'from-navy-900 to-teal-900',
    borderClass: 'border-teal-800/50',
  },
  {
    id: 'klarity',
    name: 'Klarity',
    country: 'China',
    flag: '🇨🇳',
    logo: '/logo-klarity.png',
    tagline: 'Advanced Patient Positioning Systems',
    description:
      'Klarity is a developer of computer-controlled motorized patient translation couches specifically designed for use during Total Body Irradiation (TBI) treatments associated with linear accelerators. Their systems bring precision positioning control to one of the most technically demanding procedures in radiation oncology.',
    products: [
      'Motorized patient translation couches',
      'TBI positioning systems',
      'Linac-integrated positioning solutions',
      'Computer-controlled treatment table systems',
    ],
    applications: [
      'Total Body Irradiation (TBI)',
      'Linear accelerator treatments',
      'Precision patient positioning',
      'Bone marrow transplant conditioning radiotherapy',
    ],
    accentClass: 'from-teal-900 to-navy-950',
    borderClass: 'border-navy-700/50',
  },
]

const benefits = [
  'Authorized market representation in Egypt',
  'Genuine equipment with full manufacturer backing',
  'Import compliance and regulatory processing',
  'Technical support and installation services',
  'After-sales service and calibration guidance',
  'Direct liaison with international manufacturers',
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-teal-900/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-tight relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="tag text-teal-300 bg-teal-500/15 border-teal-400/25 mb-4 inline-flex">
                Global Partners
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                World-Class Manufacturers, <br className="hidden lg:block" />Local Expertise
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                ON Medical serves as the authorized Egyptian representative for internationally recognized manufacturers whose technologies set the standard in oncology, radiotherapy, and medical physics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership approach */}
      <section className="py-12 bg-white border-b border-medical-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x divide-medical-border">
            {[
              { label: 'Authorized Representation', desc: 'Direct authorization from each manufacturer' },
              { label: 'Countries Represented', desc: 'Germany · United States · China' },
              { label: 'Market Coverage', desc: 'Egypt — with MENA ambitions' },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08} className="lg:px-8 first:pl-0 last:pr-0">
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-teal-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <AnimatedSection>
            <SectionHeader
              tag="Our Partners"
              title="Three Global Partnerships. One Dedicated Team."
              subtitle="Each partnership represents a carefully selected relationship with a manufacturer whose products address a critical need in Egypt's oncology and radiotherapy infrastructure."
            />
          </AnimatedSection>

          <div className="space-y-8 mt-14">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-medical-border shadow-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Dark panel */}
                    <div className={`lg:col-span-2 bg-gradient-to-br ${partner.accentClass} border-r ${partner.borderClass} p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden`}>
                      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                      <div className="relative z-10 flex flex-col gap-4 h-full">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/15 border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                            {partner.flag} {partner.country}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-black text-white mb-1">{partner.name}</h2>
                          <p className="text-sm text-teal-300 font-medium">{partner.tagline}</p>
                        </div>

                        {/* Logo */}
                        <div className="mt-auto w-full h-16 rounded-xl bg-white flex items-center justify-center px-5 py-2">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={180}
                            height={56}
                            className="object-contain max-h-10 w-auto"
                          />
                        </div>

                        <div className="text-xs text-white/35 font-medium uppercase tracking-wider">
                          Authorized Representative · Egypt
                        </div>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-6">
                      <p className="text-slate-500 leading-relaxed text-base">{partner.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Products */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                            Products &amp; Systems
                          </h4>
                          <ul className="space-y-2">
                            {partner.products.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                            Clinical Applications
                          </h4>
                          <ul className="space-y-2">
                            {partner.applications.map((a) => (
                              <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={13} className="text-teal-500 mt-0.5 flex-shrink-0" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-medical-border">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group"
                        >
                          Enquire about {partner.name} products
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of partnership */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="tag mb-4 inline-flex">Working With Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-4">
                What Our Partnership Means for Your Institution
              </h2>
              <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
              <p className="text-slate-500 leading-relaxed text-base">
                When you source equipment through ON Medical, you are not simply purchasing hardware — you are engaging a complete representation and support structure that bridges the gap between international manufacturers and Egyptian healthcare.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, i) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg bg-medical-light border border-medical-border">
                    <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manufacturers CTA */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-tight relative z-10 text-center">
          <AnimatedSection>
            <span className="tag text-teal-300 bg-teal-500/15 border-teal-400/25 mx-auto mb-5 inline-flex">
              For Manufacturers
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
              Are You an International Manufacturer Seeking an Egyptian Representative?
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto mb-8">
              ON Medical has deep institutional connections, regulatory expertise, and the technical credibility to represent specialized medical technology companies in the Egyptian market.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors shadow-lg">
              Discuss Representation
              <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
