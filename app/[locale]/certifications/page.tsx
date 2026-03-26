import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Calendar, Building2, MapPin, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionDivider from '@/components/ui/SectionDivider'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    'Professional certifications and technical training credentials of Mohammed Osama — Founder & CEO of ON Medical Company. Over 20 years of verified expertise in radiotherapy and medical physics.',
}

const certs = [
  {
    title: 'OCTAVIUS 4D Phantom Service Recertification Training',
    issuer: 'PTW / The Dosimetry School',
    date: 'February 2026',
    country: 'Germany',
    category: 'PTW Certified Specialist',
    description:
      'Qualified PTW Service Specialist for the OCTAVIUS 4D Phantom system. Authorized to service PTW OCTAVIUS 4D Phantom devices until February 29, 2028.',
    topics: [
      'Troubleshooting',
      'Usage of new Inclinometer',
      'Check and repair inclinometer',
      'Compatibility',
      'Device identification',
    ],
    image: '/certificates/octavius-2026.png',
  },
  {
    title: 'BEAMSCAN® Preventive Maintenance Recertification Training',
    issuer: 'PTW / The Dosimetry School',
    date: 'December 2025',
    country: 'Germany',
    category: 'PTW Certified Specialist',
    description:
      'Qualified PTW Service Specialist for the BEAMSCAN® water phantom system. Authorized to service PTW BEAMSCAN® devices until December 31, 2027.',
    topics: [
      'Visual check of hoses, cables, wheels and water condition',
      'Check of axes alignment',
      'Functional test of lift, axes, control panel and water sensor',
      'Software version and license check, communication and general performance test',
      'Electrometer and high voltage check',
      'Maintenance of mechanical parts',
    ],
    image: '/certificates/beamscan-2025.png',
  },
  {
    title: 'Certificate of Achievement — HMD-IB Simulator (No. 417)',
    issuer: 'Nuclear Power Institute of China (NPIC)',
    date: 'December 23, 2011',
    country: 'China',
    category: 'Technical Training',
    description:
      'Successfully completed training in maintenance & installation of the HMD-IB Simulator. Fully authorized and certified as expert to operate the above machines.',
    topics: [
      'Maintenance of HMD-IB Simulator',
      'Installation procedures',
      'Authorized operation',
    ],
    image: '/certificates/npic-2011.png',
  },
  {
    title: 'Certificate of Training — GWXJ-80 Cobalt-60 Teletherapy Machine (No. 333)',
    issuer: 'Nuclear Power Institute of China (NPIC)',
    date: 'November 13, 2009',
    country: 'China',
    category: 'Technical Training',
    description:
      'Successfully completed the full-scale training program covering service, maintenance, repair and radiation safety of the GWXJ-80 Cobalt-60 Teletherapy Machine.',
    topics: [
      'Service and maintenance',
      'Repair procedures',
      'Radiation safety',
      'GWXJ-80 Cobalt-60 operation',
    ],
    image: '/certificates/npic-2009.png',
  },
  {
    title: 'Technical Training Certificate — A2D Block Cutting Unit',
    issuer: 'HEK Medical GmbH',
    date: 'June 24, 2009',
    country: 'Germany (Lübeck)',
    category: 'Technical Training',
    description:
      'Completed the technical training for the A2D block cutting unit as a certified Service Engineer for Hek Medical equipment.',
    topics: [
      'A2D block cutting unit operation',
      'Service engineering',
      'Technical maintenance',
    ],
    image: '/certificates/hekmedical-2009.png',
  },
  {
    title: 'Prowess Panther Radiation Treatment Planning Software Training',
    issuer: 'Prowess, Inc. (USA)',
    date: 'March 19, 2009',
    country: 'United States',
    category: 'Software Certification',
    description:
      'Successfully completed the Prowess Panther Radiation Treatment Planning Software Training Program — Overview 3D Conformal & Utilities.',
    topics: [
      'Radiation Treatment Planning Software',
      '3D Conformal treatment planning',
      'Utilities and tools',
    ],
    image: '/certificates/prowess-2009.png',
  },
  {
    title: 'ACAT 1 Plus / AutoCAT 2 Wave Series IABP Technical Training',
    issuer: 'Kimal International',
    date: 'October 10, 2008',
    country: 'United Kingdom',
    category: 'Technical Training',
    description:
      'Successfully completed a course of instruction in ACAT 1 Plus / AutoCAT 2 Wave Series Intra-Aortic Balloon Pump (IABP) technical training.',
    topics: [
      'ACAT 1 Plus operation and service',
      'AutoCAT 2 Wave Series IABP',
      'Technical maintenance procedures',
    ],
    image: '/certificates/kimal-2008.png',
  },
  {
    title: 'PTW Certificate — Seven29 2D-Array, TLD, TPR & In-Vivo Systems',
    issuer: 'PTW-Freiburg',
    date: 'June 12, 2008',
    country: 'Germany (Freiburg)',
    category: 'PTW Authorized',
    description:
      'Authorized to operate and train others on PTW devices including the Seven29 2D-Array, TLD system, TPR measurements of MEPHYSTO mc², PTW in-vivo system (DIODE MATE & VivoSoft), and SC Gantry Holder. Training held at Children Cancer Hospital, Cairo.',
    topics: [
      'Seven29 2D-Array application incl. VeriSoft and MultiCheck',
      'TLD system of Fimel',
      'TPR measurements of MEPHYSTO mc²',
      'PTW in-vivo system (DIODE MATE & VivoSoft)',
      'SC Gantry Holder application',
    ],
    image: '/certificates/ptw-2008.png',
  },
  {
    title: 'Certificate of TBI Couch Workshop',
    issuer: 'JBH Jochen Barry GmbH',
    date: 'November 9, 2007',
    country: 'Germany (Essen)',
    category: 'Workshop Certification',
    description:
      'Successfully completed a six-day workshop which fully enables installation and supervision of the Patient Translation Couch for Total Body Irradiation (TBI).',
    topics: [
      'Patient Translation Couch installation',
      'TBI couch supervision',
      'Total Body Irradiation procedures',
    ],
    image: '/certificates/jbh-2007.png',
  },
  {
    title: 'PTW Certificate — Relative Dosimetry (MP3-M)',
    issuer: 'PTW-Freiburg',
    date: 'March 22, 2006',
    country: 'Germany (Freiburg)',
    category: 'PTW Authorized',
    description:
      'Authorized to operate the MP3-M Relative Dosimetry system and train other qualified persons. Training held at Al-Hussein Hospital, Cairo.',
    topics: [
      'Relative Dosimetry (MP3-M)',
      'Authorized operation',
      'Staff training qualification',
    ],
    image: '/certificates/ptw-2006.png',
  },
  {
    title: 'TERADI 800C 1st Line Service Training Course',
    issuer: 'INVAP Medical Equipment Division',
    date: 'August 28–29, 2005',
    country: 'Argentina',
    category: 'Technical Training',
    description:
      'Completed the TERADI 800C 1st Line Service Training Course issued by INVAP Medical Equipment Division, Argentina.',
    topics: [
      'TERADI 800C first-line service',
      'Maintenance procedures',
      'Technical troubleshooting',
    ],
    image: '/certificates/invap-2005.png',
  },
]

export default function CertificationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-light pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgb(229 25 25 / 0.14) 0%, transparent 60%)',
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-brand-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                Professional Credentials
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                Certifications &{' '}
                <span className="text-gradient-brand">Technical Training</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                Over two decades of certified training from the world&apos;s leading manufacturers
                in radiotherapy, dosimetry, and medical physics — a foundation of verified
                technical expertise behind every service ON Medical provides.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Founder profile ───────────────────────────────── */}
      <SectionDivider bg="muted" />
      <section className="section-padding section-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

            {/* Photo */}
            <AnimatedSection direction="left" className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-80 lg:w-72 lg:h-[22rem] rounded-2xl overflow-hidden shadow-card-hover border border-ink-200">
                  <Image
                    src="/owner-1.jpeg"
                    alt="Mohammed Osama — Founder & CEO, ON Medical"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Credential badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-ink-200 shadow-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-ink-900 leading-tight">11 Certificates</p>
                    <p className="text-[10px] text-ink-400">2005 – 2026</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection direction="right" className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <span className="section-label">Founder & CEO</span>
                <h2 className="section-title !text-left text-2xl lg:text-[1.9rem] mt-2">
                  Mohammed Osama
                </h2>
                <p className="text-[13px] text-ink-500 mt-1">
                  B.Eng. Biomedical Engineering, Helwan University · Cairo, Egypt
                </p>
              </div>

              <p className="text-[14px] text-ink-600 leading-relaxed">
                With over 20 years of hands-on experience in radiotherapy and medical physics,
                Mohammed Osama has accumulated a portfolio of technical certifications from
                internationally recognized institutions across Germany, China, the United States,
                the United Kingdom, and Argentina. His credentials span dosimetry systems,
                treatment planning software, teletherapy machines, and radiation safety.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '40+', label: 'Linacs Commissioned' },
                  { value: '11',  label: 'Certificates'  },
                  { value: '6',   label: 'Countries'     },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-xl border border-ink-200 p-4 text-center shadow-sm">
                    <p className="text-2xl font-black text-brand-600 leading-none">{s.value}</p>
                    <p className="text-[11px] text-ink-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['PTW Freiburg', 'NPIC China', 'Prowess USA', 'HEK Medical', 'Kimal Intl', 'INVAP Argentina', 'JBH Germany'].map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-ink-100 text-ink-600 border border-ink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Certificates list ──────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Certificates"
              title="Verified Technical Credentials"
              subtitle="Each certificate represents a formal training programme completed with an internationally recognized manufacturer or institution."
            />
          </AnimatedSection>

          <div className="space-y-6 mt-14">
            {certs.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i % 3 === 0 ? 0 : 0.06}>
                <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5">

                    {/* Certificate image */}
                    <div className="lg:col-span-2 relative bg-ink-50 border-b lg:border-b-0 lg:border-r border-ink-200/60 flex items-center justify-center p-6 min-h-[260px]">
                      <div className="relative w-full max-w-[300px] h-[220px] lg:h-[260px]">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Certificate details */}
                    <div className="lg:col-span-3 p-7 lg:p-9 flex flex-col gap-5">

                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-50 border border-brand-100 text-brand-700">
                          {cert.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[12px] text-ink-500">
                          <Calendar size={12} strokeWidth={1.75} className="text-brand-600" />
                          <span className="font-semibold text-ink-800">{cert.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-[16px] font-bold text-ink-900 leading-snug">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <div className="flex items-center gap-1.5">
                            <Building2 size={12} className="text-brand-600" strokeWidth={1.75} />
                            <span className="text-[12px] font-semibold text-ink-600">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-brand-600" strokeWidth={1.75} />
                            <span className="text-[12px] text-ink-400">{cert.country}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-ink-500 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Topics */}
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                          Topics Covered
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cert.topics.map(topic => (
                            <li key={topic} className="flex items-start gap-2 text-[12px] text-ink-600">
                              <CheckCircle2
                                size={13}
                                className="text-brand-600 mt-0.5 flex-shrink-0"
                                strokeWidth={2}
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
