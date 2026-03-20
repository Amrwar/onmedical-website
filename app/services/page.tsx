import type { Metadata } from 'next'
import {
  Package, Wrench, HeartPulse, Microscope, PhoneCall, Globe,
  Settings, ShieldCheck, FlaskConical, Cpu, CheckCircle2, ArrowRight,
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
  { step: '01', title: 'Initial Consultation', desc: 'We begin with a thorough discussion of your institution\'s clinical requirements, budget parameters, and timeline.' },
  { step: '02', title: 'Needs Assessment', desc: 'Our technical team evaluates your existing setup and recommends appropriate equipment and solutions.' },
  { step: '03', title: 'Proposal & Agreement', desc: 'We present a detailed commercial proposal including equipment specifications, pricing, and service terms.' },
  { step: '04', title: 'Import & Delivery', desc: 'Equipment is imported through proper regulatory channels, with all documentation handled by our team.' },
  { step: '05', title: 'Installation & Commissioning', desc: 'Professional installation, testing, and commissioning ensure the system is clinically ready.' },
  { step: '06', title: 'Training & Handover', desc: 'Comprehensive user training is conducted before formal system handover to your team.' },
  { step: '07', title: 'Ongoing Support', desc: 'Long-term after-sales support, maintenance, and technical consultation maintain peak performance.' },
]

export default function ServicesPage() {
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
                Our Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Complete Support for Oncology &amp; Radiotherapy Technology
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                From the first consultation to long-term after-sales support, ON Medical provides the full spectrum of services that Egyptian healthcare institutions require when working with specialized medical technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Specialization banner */}
      <section className="py-10 bg-white border-b border-medical-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {specializations.map((spec, i) => {
              const Icon = spec.icon
              return (
                <AnimatedSection key={spec.title} delay={i * 0.07}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{spec.title}</p>
                      <p className="text-xs text-slate-400 leading-snug mt-0.5">{spec.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <AnimatedSection>
            <SectionHeader
              tag="Core Services"
              title="Specialized Services for Medical Professionals"
              subtitle="Every service we provide is designed specifically for the demands of oncology, radiotherapy, and medical physics — not adapted from a generic medical distribution model."
            />
          </AnimatedSection>

          <div className="space-y-7 mt-14">
            {coreServices.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={service.title} delay={i % 2 === 0 ? 0 : 0.08}>
                  <div className="bg-white rounded-2xl border border-medical-border shadow-card overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      {/* Left panel */}
                      <div className="lg:col-span-2 bg-gradient-to-br from-navy-900 to-navy-950 p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
                        <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-teal-500/10 blur-2xl" />
                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-5">
                            <Icon size={22} className="text-teal-400" />
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                          <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      {/* Right panel */}
                      <div className="lg:col-span-3 p-8 lg:p-10">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                          What&apos;s Included
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 size={15} className="text-teal-500 mt-0.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>

                        <div className="pt-5 mt-5 border-t border-medical-border">
                          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group">
                            Request this service
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <AnimatedSection>
            <SectionHeader
              tag="Our Process"
              title="A Structured Approach from Enquiry to Support"
              subtitle="We follow a consistent, transparent process to ensure every client engagement is professionally managed from first contact through ongoing operations."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div className="relative p-6 rounded-xl border border-medical-border bg-medical-light hover:bg-white hover:border-teal-200 hover:shadow-card transition-all duration-300 group h-full flex flex-col gap-3">
                  <span className="text-3xl font-black text-teal-500/20 group-hover:text-teal-500/40 transition-colors leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-navy-900">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
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
