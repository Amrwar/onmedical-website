'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const highlights = [
  'Oncology & radiotherapy equipment distribution',
  'Market representation for global manufacturers',
  'Technical installation & after-sales support',
  'Compliant with Egyptian medical device regulations',
]

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Visual */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 aspect-[4/3] w-full shadow-card-hover">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Content in placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-5">
                    <span className="text-4xl font-black text-white tracking-tighter">ON</span>
                  </div>
                  <p className="text-white/50 text-sm font-medium leading-relaxed max-w-[220px]">
                    Oncology &amp; Radiotherapy Technology — Egypt &amp; MENA
                  </p>
                </div>
                {/* Accent corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal-400/60 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal-400/60 rounded-br-lg" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-card-hover border border-medical-border px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <div className="flex flex-col leading-snug">
                  <span className="text-xs font-bold text-navy-900">Regulatory Compliant</span>
                  <span className="text-[11px] text-slate-400">Egyptian Medical Standards</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection direction="right" className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="tag w-fit">About ON Medical</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
              Egypt&apos;s Trusted Partner in{' '}
              <span className="text-teal-600">Oncology Technology</span>
            </h2>
            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400" />
            <p className="text-slate-500 text-base leading-relaxed">
              ON Medical Company is a specialized Egyptian organization focused on the distribution, technical support, and market representation of advanced oncology and radiotherapy equipment. The name &ldquo;ON Medical&rdquo; reflects our core commitment — <strong className="text-navy-800 font-semibold">Oncology</strong> — and our dedication to advancing cancer treatment technology throughout Egypt.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Since 2014, we have worked closely with hospitals, oncology centres, medical universities, and specialized institutes to supply precision equipment used in radiation therapy, radiation measurement, and treatment planning. We serve as the trusted Egyptian bridge between world-class international manufacturers and the healthcare institutions that depend on their technologies.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 gap-2.5 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <Link href="/about" className="btn-primary">
                Our Full Story
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
