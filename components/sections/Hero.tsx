'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, ShieldCheck, Globe2, Award, Stethoscope } from 'lucide-react'

const stats = [
  { value: '10+',  label: 'Years of Expertise',   sub: 'Radiotherapy & medical physics' },
  { value: '3',    label: 'Global Manufacturers',  sub: 'Germany · USA · China' },
  { value: '50+',  label: 'Institutions Served',   sub: 'Hospitals, centres & universities' },
  { value: '2014', label: 'Year Established',      sub: 'Cairo, Egypt' },
]

const trust = [
  { icon: ShieldCheck, label: 'Fully Compliant'        },
  { icon: Globe2,      label: 'International Partners' },
  { icon: Award,       label: 'Since 2014'             },
  { icon: Stethoscope, label: 'Oncology Focused'       },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-light">

      {/* Background dot texture */}
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none"
        style={{ backgroundSize: '28px 28px' }}
      />

      {/* Red glow — top right */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgb(229 25 25 / 0.14) 0%, transparent 65%)',
        }}
      />
      {/* Warm tint — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgb(229 25 25 / 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* ── Left: content ──────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="xl:col-span-7 flex flex-col gap-7"
          >
            {/* Eyebrow */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-brand-50">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                Oncology &amp; Radiotherapy Specialists — Egypt
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-black text-ink-900 leading-[1.07] tracking-tight"
            >
              Advancing{' '}
              <span className="text-gradient-brand">Oncology Technology</span>{' '}
              <br className="hidden lg:block" />
              Across Egypt
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-[15px] lg:text-base text-ink-600 leading-[1.75] max-w-xl"
            >
              ON Medical Company is Egypt&apos;s specialized distributor of radiotherapy, radiation
              measurement, and medical physics systems — bridging leading international manufacturers
              with hospitals, oncology centres, and medical institutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3.5">
              <Link href="/services" className="btn-primary">
                Explore Our Services <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link href="/partners" className="btn-secondary">
                Our Global Partners
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 border-t border-ink-200"
            >
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={13} className="text-brand-600" strokeWidth={1.75} />
                  <span className="text-[11px] font-medium text-ink-500">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: stats panel ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="xl:col-span-5"
          >
            <div
              className="relative rounded-2xl border border-ink-200 overflow-hidden bg-white
                          shadow-[0_2px_8px_rgb(0_0_0_/_0.06),0_16px_48px_rgb(0_0_0_/_0.08)]"
            >
              {/* Red top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400" />

              {/* Panel header */}
              <div className="px-7 py-5 border-b border-ink-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse-dot" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-400">
                  Company at a Glance
                </span>
              </div>

              {/* Stats */}
              <div className="divide-y divide-ink-100">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-6 px-7 py-5 hover:bg-brand-50/40 transition-colors group"
                  >
                    <span className="text-[13px] font-semibold text-ink-200 w-5 text-right flex-shrink-0 group-hover:text-brand-500 transition-colors">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="text-2xl font-black text-ink-900 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[13px] font-medium text-ink-700 mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-ink-400 mt-0.5">{stat.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panel footer */}
              <div className="px-7 py-4 border-t border-ink-100 bg-ink-50">
                <span className="text-[11px] text-ink-400">
                  Authorized representative · Egypt &amp; MENA region
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink-400"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
