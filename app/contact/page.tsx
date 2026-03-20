import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Printer, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/ui/ContactForm'
import ContactFaq from '@/components/ui/ContactFaq'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact ON Medical Company — Cairo, Egypt. Reach our team for equipment enquiries, technical support, after-sales service, or partnership discussions.',
}

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['548 Zahraa Nasr City', 'Cairo, Egypt'],
    href: null,
  },
  {
    icon: Phone,
    label: 'Telephone',
    lines: ['+20 2 24115184'],
    href: 'tel:+20224115184',
  },
  {
    icon: Phone,
    label: 'Mobile',
    lines: ['+20 155 217 6156'],
    href: 'tel:+201552176156',
  },
  {
    icon: Printer,
    label: 'Fax',
    lines: ['+20 2 24115184'],
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['osama@onmedical.net'],
    href: 'mailto:osama@onmedical.net',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Sunday – Thursday', '9:00 AM – 5:00 PM (Cairo time)'],
    href: null,
  },
]

export default function ContactPage() {
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
            <div className="max-w-2xl">
              <span className="tag text-teal-300 bg-teal-500/15 border-teal-400/25 mb-4 inline-flex">
                Contact Us
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Whether you are a hospital seeking specialized equipment, an oncology centre requiring technical support, or an international manufacturer looking for an authorized Egyptian representative — we are ready to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* Contact details (static — server rendered) */}
            <AnimatedSection direction="left" className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="tag mb-3 inline-flex">Get in Touch</span>
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Contact Information</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our team is available during business hours to assist with enquiries, technical questions, and commercial discussions.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-medical-border shadow-card p-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex items-start gap-4 pb-5 border-b border-medical-border last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-teal-600" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
                      {lines.map((line) =>
                        href ? (
                          <a key={line} href={href} className="text-sm font-medium text-navy-800 hover:text-teal-600 transition-colors">
                            {line}
                          </a>
                        ) : (
                          <span key={line} className="text-sm text-navy-800">{line}</span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-medical-border shadow-card overflow-hidden">
                <div className="bg-gradient-to-br from-navy-900 to-navy-950 h-48 flex flex-col items-center justify-center gap-2 relative">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <MapPin size={28} className="text-teal-400 relative z-10" />
                  <p className="text-white/60 text-sm font-medium relative z-10">Nasr City, Cairo, Egypt</p>
                  <p className="text-white/35 text-xs relative z-10">548 Zahraa Nasr City</p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-400 text-center">
                    Located in Nasr City, Cairo — accessible from across the Greater Cairo area.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form (client component) */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-tight max-w-3xl">
          <AnimatedSection>
            <SectionHeader
              tag="FAQ"
              title="Frequently Asked Questions"
              subtitle="Answers to common questions from hospitals, medical centres, and international partners."
            />
          </AnimatedSection>
          <div className="mt-12">
            <ContactFaq />
          </div>
        </div>
      </section>

      {/* Dedicated CTAs */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Hospitals & Oncology Centres',
                  desc: 'Seeking specialized radiotherapy or dosimetry equipment? Our team is ready to assist with product selection, pricing, and technical specifications.',
                  action: 'Equipment Enquiry',
                },
                {
                  title: 'Medical Universities & Research',
                  desc: 'We support academic institutions and research bodies with medical physics equipment and technical consultation services.',
                  action: 'Research Enquiry',
                },
                {
                  title: 'International Manufacturers',
                  desc: 'Looking for authorized representation in Egypt? We have the network, compliance expertise, and technical credibility to represent your brand.',
                  action: 'Partnership Discussion',
                },
              ].map((card) => (
                <div key={card.title} className="card-base p-7 flex flex-col gap-4">
                  <h3 className="text-base font-bold text-navy-900">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{card.desc}</p>
                  <a
                    href="mailto:osama@onmedical.net"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 group"
                  >
                    {card.action}
                    <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
