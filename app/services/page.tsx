import type { Metadata } from 'next'
import {
  Package,
  Wrench,
  HeartPulse,
  Microscope,
  PhoneCall,
  Globe,
  Settings,
  ShieldCheck,
  FlaskConical,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'ON Medical Company provides end-to-end services for oncology and radiotherapy equipment in Egypt: distribution, technical support, installation, after-sales service, and market representation.',
}

const coreServices = [
  {
    icon: Package,
    title: 'Medical Equipment Distribution',
    description:
      'We supply specialized oncology, radiotherapy, radiation measurement, and medical physics equipment sourced exclusively from internationally recognized manufacturers. Every product is genuine, properly imported, and compliant with Egyptian medical device regulations.',
    points: [
      'Oncology and radiotherapy systems',
      'Radiation measurement & dosimetry devices',
      'Medical physics quality assurance tools',
      'Treatment planning support equipment',
      'Teletherapy and brachytherapy accessories',
      'Patient positioning and treatment couches',
    ],
  },
  {
    icon: Globe,
    title: 'Market Representation',
    description:
      'ON Medical acts as the authorized Egyptian representative for carefully selected international manufacturers. We manage the commercial, regulatory, and logistical aspects of bringing specialized medical technology to the Egyptian healthcare market.',
    points: [
      'Authorized local representation',
      'Regulatory import compliance',
      'Commercial and contractual liaison',
      'Customs clearance coordination',
      'Marketing and institutional outreach',
      'Tender and procurement support',
    ],
  },
  {
    icon: Wrench,
    title: 'Technical Support & Installation',
    description:
      'Our experienced team manages the full technical lifecycle of each delivered system. From site survey and installation planning through to commissioning and handover, we ensure every system is ready for clinical use.',
    points: [
      'Pre-installation site surveys',
      'Professional equipment installation',
      'System commissioning and testing',
      'User training and handover',
      'Compliance documentation',
      'Integration with existing clinical workflows',
    ],
  },
  {
    icon: HeartPulse,
    title: 'After-Sales Service',
    description:
      'We maintain a long-term commitment to every institution we serve. Our after-sales program ensures that equipment remains operational, calibrated, and performing to manufacturer specifications throughout its service life.',
    points: [
      'Scheduled preventive maintenance',
      'Corrective repair support',
      'Spare parts sourcing and supply',
      'Calibration guidance and support',
      'Performance verification assistance',
      'Prompt response to service calls',
    ],
  },
  {
    icon: PhoneCall,
    title: 'Technical Consultation',
    description:
      'Drawing on deep expertise in radiotherapy and medical physics, our team provides consultative guidance to help institutions select the right technologies, plan implementations, and optimize their existing systems.',
    points: [
      'Equipment specification and selection',
      'Clinical workflow optimization',
      'Quality assurance program design',
      'Technology upgrade planning',
      'Second opinion and peer review',
      'Vendor-neutral technical advice',
    ],
  },
  {
    icon: Microscope,
    title: 'Medical Physics Solutions',
    description:
      'We provide specialized support for medical physics programs, from dosimetry equipment supply and calibration tooling to ongoing consultation for radiotherapy QA programs at hospitals and academic institutions.',
    points: [
      'Dosimetry system supply and support',
      'Radiation measurement equipment',
      'QA phantom and detector systems',
      'Medical physics department consultation',
      'Academic and research institution support',
      'Regulatory compliance for physics programs',
    ],
  },
]

const specializations = [
  {
    icon: FlaskConical,
    title: 'Radiotherapy Technologies',
    desc: 'Linear accelerators, treatment planning, and beam delivery quality assurance.',
  },
  {
    icon: Cpu,
    title: 'Radiation Measurement',
    desc: 'Precision dosimetry, ionization chambers, and detector array systems.',
  },
  {
    icon: Settings,
    title: 'Treatment Planning Support',
    desc: 'Technical consultation and tool supply for radiotherapy planning workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    desc: 'Full compliance with Egyptian medical device import regulations and standards.',
  },
]

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: "We begin with a thorough discussion of your institution's clinical requirements, budget parameters, and timeline.",
  },
  {
    step: '02',
    title: 'Needs Assessment',
    desc: 'Our technical team evaluates your existing setup and recommends appropriate equipment and solutions.',
  },
  {
    step: '03',
    title: 'Proposal & Agreement',
    desc: 'We present a detailed commercial proposal including equipment specifications, pricing, and service terms.',
  },
  {
    step: '04',
    title: 'Import & Delivery',
    desc: 'Equipment is imported through proper regulatory channels, with all documentation handled by our team.',
  },
  {
    step: '05',
    title: 'Installation & Commissioning',
    desc: 'Professional installation, testing, and commissioning ensure the system is clinically ready.',
  },
  {
    step: '06',
    title: 'Training & Handover',
    desc: 'Comprehensive user training is conducted before formal system handover to your team.',
  },
  {
    step: '07',
    title: 'Ongoing Support',
    desc: 'Long-term after-sales support, maintenance, and technical consultation maintain peak performance.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none opacity-60"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgb(229 25 25 / 0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-brand-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                Our Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                Complete Support for{' '}
                <span className="text-gradient-brand">Oncology &amp; Radiotherapy</span>{' '}
                Technology
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                From the first consultation to long-term after-sales support, ON Medical provides
                the full spectrum of services that Egyptian healthcare institutions require when
                working with specialized medical technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Specialization strip ──────────────────────────── */}
      <section className="py-10 bg-white border-b border-ink-200/60">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x divide-ink-200/60">
            {specializations.map((spec, i) => {
              const Icon = spec.icon
              return (
                <AnimatedSection
                  key={spec.title}
                  delay={i * 0.07}
                  className="flex items-start gap-3.5 lg:px-8 first:pl-0 last:pr-0"
                >
                  <div className="icon-box flex-shrink-0">
                    <Icon size={17} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-ink-900">{spec.title}</p>
                    <p className="text-[11px] text-ink-400 leading-snug mt-0.5">{spec.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Core Services ─────────────────────────────────── */}
      <section className="section-padding section-alt border-b border-ink-200/60">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Core Services"
              title="Specialized Services for Medical Professionals"
              subtitle="Every service we provide is designed specifically for the demands of oncology, radiotherapy, and medical physics — not adapted from a generic medical distribution model."
            />
          </AnimatedSection>

          <div className="space-y-6 mt-14">
            {coreServices.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={service.title} delay={i % 2 === 0 ? 0 : 0.08}>
                  <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-5">

                      {/* Left red panel */}
                      <div className="lg:col-span-2 bg-brand-600 p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-dot-grid-light pointer-events-none opacity-10"
                          style={{ backgroundSize: '20px 20px' }}
                        />
                        <div
                          className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                          style={{
                            background:
                              'radial-gradient(circle, rgb(255 255 255 / 0.08) 0%, transparent 70%)',
                          }}
                        />
                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                            <Icon size={22} className="text-white" strokeWidth={1.75} />
                          </div>
                          <h2 className="text-xl font-bold text-white leading-snug">
                            {service.title}
                          </h2>
                          <p className="text-[13px] text-white/75 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Right content panel */}
                      <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between gap-6">
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4">
                            What&apos;s Included
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.points.map(point => (
                              <li
                                key={point}
                                className="flex items-start gap-2.5 text-[13px] text-ink-600"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-brand-600 mt-0.5 flex-shrink-0"
                                  strokeWidth={2}
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-5 border-t border-ink-200/60">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 group"
                          >
                            Request this service
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
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Our Process"
              title="A Structured Approach from Enquiry to Support"
              subtitle="We follow a consistent, transparent process to ensure every client engagement is professionally managed from first contact through ongoing operations."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div
                  className="relative p-6 rounded-xl border border-ink-200/60 bg-ink-50/70
                              hover:bg-white hover:border-brand-200 hover:shadow-card
                              transition-all duration-300 group h-full flex flex-col gap-3"
                >
                  <span className="text-3xl font-black text-ink-200 group-hover:text-brand-100 transition-colors leading-none select-none">
                    {step.step}
                  </span>
                  <h3 className="text-[13px] font-bold text-ink-900">{step.title}</h3>
                  <p className="text-[12px] text-ink-500 leading-relaxed">{step.desc}</p>
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
