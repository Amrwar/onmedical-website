'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-950 shadow-panel">

            {/* Dot grid */}
            <div
              className="absolute inset-0 bg-dot-grid-light pointer-events-none"
              style={{ backgroundSize: '24px 24px' }}
            />

            {/* Red glow */}
            <div
              className="absolute -top-12 -right-12 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgb(204 18 18 / 0.18) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 px-8 py-12 lg:px-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* Text */}
              <div className="max-w-xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-400 block mb-3">
                  Get in Touch
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                  Ready to Advance Your Oncology Services?
                </h2>
                <p className="text-[14px] text-white/50 leading-relaxed mb-7">
                  Whether you represent a hospital, oncology centre, university, or an international
                  manufacturer seeking an Egyptian partner — we are ready to discuss how ON Medical
                  can support your needs.
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="tel:+20224115184"
                    className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="text-brand-500" />
                    +20 2 24115184
                  </a>
                  <a
                    href="mailto:osama@onmedical.net"
                    className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    <Mail size={13} className="text-brand-500" />
                    osama@onmedical.net
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Send an Enquiry <ArrowRight size={14} />
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white text-[13px] font-semibold hover:bg-white/[0.08] hover:border-white/35 transition-all duration-200 whitespace-nowrap"
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
