import type { Metadata } from 'next'
import { Globe, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'
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
    website: 'https://www.ptwdosimetry.com',
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
  },
  {
    id: 'ashland',
    name: 'Ashland Medical',
    country: 'United States',
    flag: '🇺🇸',
    logo: '/logo-ashland.png',
    website: 'https://www.ashland.com',
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
  },
  {
    id: 'klarity',
    name: 'Klarity',
    country: 'China',
    flag: '🇨🇳',
    logo: '/logo-klarity.png',
    website: 'https://www.klarity-medical.com',
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

const overviewStats = [
  { label: 'Authorized Representation', desc: 'Direct authorization from each manufacturer' },
  { label: 'Countries Represented',     desc: 'Germany · United States · China' },
  { label: 'Market Coverage',           desc: 'Egypt — with MENA ambitions' },
]

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid-light pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgb(204 18 18 / 0.10) 0%, transparent 60%)',
          }}
        />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300 border border-brand-500/25 bg-brand-600/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
                Global Partners
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight mb-5">
                World-Class Manufacturers,{' '}
                <br className="hidden lg:block" />
                <span className="text-gradient-brand">Local Expertise</span>
              </h1>
              <p className="text-white/55 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                ON Medical serves as the authorized Egyptian representative for internationally
                recognized manufacturers whose technologies set the standard in oncology,
                radiotherapy, and medical physics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partnership overview strip ────────────────────── */}
      <section className="py-10 bg-white border-b border-ink-200/60">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x divide-ink-200/60">
            {overviewStats.map((item, i) => (
              <AnimatedSection
                key={item.label}
                delay={i * 0.08}
                className="flex items-center gap-3.5 sm:px-8 first:pl-0 last:pr-0"
              >
                <div className="icon-box flex-shrink-0">
                  <Globe size={17} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">{item.label}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner detail cards ──────────────────────────── */}
      <section className="section-padding section-alt border-b border-ink-200/60">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Our Partners"
              title="Three Global Partnerships. One Dedicated Team."
              subtitle="Each partnership represents a carefully selected relationship with a manufacturer whose products address a critical need in Egypt's oncology and radiotherapy infrastructure."
            />
          </AnimatedSection>

          <div className="space-y-7 mt-14">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-5">

                    {/* Dark left panel */}
                    <div className="lg:col-span-2 bg-ink-950 p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-dot-grid-light pointer-events-none"
                        style={{ backgroundSize: '20px 20px' }}
                      />
                      <div
                        className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle, rgb(204 18 18 / 0.10) 0%, transparent 65%)',
                        }}
                      />

                      <div className="relative z-10 flex flex-col gap-5 h-full">
                        {/* Country badge */}
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.15] text-white text-[11px] font-bold tracking-widest uppercase w-fit">
                          {partner.flag} {partner.country}
                        </span>

                        <div>
                          <h2 className="text-2xl font-black text-white mb-1.5 leading-tight">
                            {partner.name}
                          </h2>
                          <p className="text-[13px] text-brand-400 font-medium">
                            {partner.tagline}
                          </p>
                        </div>

                        {/* Logo on white background */}
                        <div className="w-full h-16 rounded-xl bg-white border border-white/10 flex items-center justify-center px-5 py-2 mt-auto">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={180}
                            height={56}
                            className="object-contain max-h-10 w-auto"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/[0.08]">
                          <span className="text-[11px] text-white/30 font-medium uppercase tracking-wider">
                            Authorized Rep · Egypt
                          </span>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.12] hover:border-white/25 text-white text-[11px] font-semibold transition-all duration-200 flex-shrink-0"
                          >
                            Website <ExternalLink size={10} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right content panel */}
                    <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-6">
                      <p className="text-[14px] text-ink-500 leading-[1.8]">
                        {partner.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Products */}
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                            Products &amp; Systems
                          </h4>
                          <ul className="space-y-2">
                            {partner.products.map(p => (
                              <li
                                key={p}
                                className="flex items-start gap-2 text-[13px] text-ink-600"
                              >
                                <span className="mt-[7px] w-1 h-1 rounded-full bg-brand-600 flex-shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                            Clinical Applications
                          </h4>
                          <ul className="space-y-2">
                            {partner.applications.map(a => (
                              <li
                                key={a}
                                className="flex items-start gap-2 text-[13px] text-ink-600"
                              >
                                <CheckCircle2
                                  size={13}
                                  className="text-brand-600 mt-0.5 flex-shrink-0"
                                  strokeWidth={2}
                                />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-ink-200/60">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 group"
                        >
                          Enquire about {partner.name} products
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
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

      {/* ── Benefits of partnership ───────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <AnimatedSection direction="left" className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <span className="section-label">Working With Us</span>
                <h2 className="section-title !text-left">
                  What Our Partnership Means for Your Institution
                </h2>
              </div>
              <p className="text-[14px] text-ink-500 leading-[1.8]">
                When you source equipment through ON Medical, you are not simply purchasing
                hardware — you are engaging a complete representation and support structure that
                bridges the gap between international manufacturers and Egyptian healthcare.
              </p>
              <p className="text-[14px] text-ink-500 leading-[1.8]">
                Our deep regulatory knowledge, institutional relationships, and technical expertise
                ensure every engagement is managed with professionalism and accountability —
                from import paperwork to installation and beyond.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3.5 p-4 rounded-lg bg-ink-50 border border-ink-200/60 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-md bg-brand-50 border border-brand-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors">
                      <CheckCircle2
                        size={14}
                        className="text-brand-600 group-hover:text-white transition-colors"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-[13px] font-medium text-ink-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Manufacturers CTA ─────────────────────────────── */}
      <section className="section-padding bg-ink-950 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-dot-grid-light pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgb(204 18 18 / 0.08) 0%, transparent 65%)',
          }}
        />
        <div className="container-site relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300 border border-brand-500/25 bg-brand-600/10 mb-6">
              For Manufacturers
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-bold text-white mb-4 max-w-2xl mx-auto leading-[1.15] tracking-tight">
              Are You an International Manufacturer Seeking an Egyptian Representative?
            </h2>
            <p className="text-white/50 text-[14px] leading-[1.8] max-w-xl mx-auto mb-8">
              ON Medical has deep institutional connections, regulatory expertise, and the technical
              credibility to represent specialized medical technology companies in the Egyptian
              market.
            </p>
            <Link href="/contact" className="btn-primary mx-auto">
              Discuss Representation <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
