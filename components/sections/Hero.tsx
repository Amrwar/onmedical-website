'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, ShieldCheck, Globe, Award } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, text: 'Regulatory Compliant' },
  { icon: Globe,        text: 'International Partnerships' },
  { icon: Award,        text: 'Since 2014' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero hero-pattern">
      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-teal-900/40 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-pattern opacity-100 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-teal-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-navy-600/20 blur-3xl pointer-events-none" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative container-tight pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/15 border border-teal-400/25 text-teal-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Oncology &amp; Radiotherapy Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Advancing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">
              Oncology Technology
            </span>{' '}
            Across Egypt
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl mb-10"
          >
            ON Medical Company is Egypt&apos;s specialized distributor of radiotherapy, radiation measurement, and medical physics systems — connecting leading international manufacturers with hospitals, oncology centres, and medical institutions across the country.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-teal-500/25 group"
            >
              Explore Our Services
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/50 text-white font-semibold rounded-lg hover:bg-white/8 transition-all duration-200"
            >
              Our Global Partners
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50">
                <Icon size={14} className="text-teal-400" />
                <span className="text-xs font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-0 bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden w-52 shadow-xl"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '3',   label: 'Global Partners' },
            { value: '50+', label: 'Clients Served' },
            { value: '2014', label: 'Year Founded' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-5 ${i < 3 ? 'border-b border-white/10' : ''}`}
            >
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-white/50 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
