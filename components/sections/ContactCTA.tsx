'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 p-10 lg:p-16">
            {/* Background pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-navy-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              {/* Text */}
              <div className="max-w-xl">
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  Get in Touch
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  Ready to Advance Your Oncology Services?
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Whether you represent a hospital, oncology centre, medical university, or international manufacturer seeking an Egyptian partner — we are ready to discuss how ON Medical can support your needs.
                </p>

                <div className="flex flex-wrap gap-6 mt-7">
                  <a href="tel:+20224115184" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group">
                    <Phone size={15} className="text-teal-400" />
                    +2 02 24115184
                  </a>
                  <a href="mailto:osama@onmedical.net" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                    <Mail size={15} className="text-teal-400" />
                    osama@onmedical.net
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg group whitespace-nowrap"
                >
                  Send an Enquiry
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 hover:border-white/50 text-white font-semibold rounded-lg hover:bg-white/8 transition-all duration-200 text-sm whitespace-nowrap"
                >
                  Our Partners
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
