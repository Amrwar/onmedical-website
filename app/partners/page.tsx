import type { Metadata } from 'next'
import {
  Globe, CheckCircle2, ArrowRight, ExternalLink,
  Download, Layers, FlaskConical, Cpu, Microscope,
  Activity, Zap, Settings, Shield, BookOpen, Mail,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Partners & Technologies',
  description:
    'ON Medical Company is the authorized Egyptian representative for PTW Freiburg, Ashland Medical, and Klarity — presenting premium dosimetry, film QA, and patient positioning technologies for oncology and radiotherapy.',
}

/* ─── Image placeholder component ─────────────────────────────── */
function ProductImageBox({
  label,
  caption,
  icon: Icon = Layers,
  dark = false,
  large = false,
}: {
  label: string
  caption?: string
  icon?: React.ElementType
  dark?: boolean
  large?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`rounded-xl border flex flex-col items-center justify-center gap-4 ${
          large ? 'p-10' : 'p-8'
        } ${
          dark
            ? 'bg-ink-900 border-white/[0.08]'
            : 'bg-ink-50 border-ink-200/70'
        }`}
        style={{ aspectRatio: large ? '16/9' : '4/3' }}
      >
        <div
          className={`rounded-xl flex items-center justify-center flex-shrink-0 ${
            large ? 'w-14 h-14' : 'w-10 h-10'
          } ${
            dark
              ? 'bg-brand-600/20 border border-brand-500/30'
              : 'bg-white border border-ink-200/60 shadow-card'
          }`}
        >
          <Icon
            size={large ? 26 : 18}
            className={dark ? 'text-brand-400' : 'text-ink-400'}
            strokeWidth={1.5}
          />
        </div>
        <div className="text-center px-4">
          <p
            className={`text-[12px] font-semibold leading-snug ${
              dark ? 'text-white/60' : 'text-ink-500'
            }`}
          >
            {label}
          </p>
          <p
            className={`text-[10px] mt-1 ${
              dark ? 'text-white/25' : 'text-ink-300'
            }`}
          >
            Product image placeholder
          </p>
        </div>
      </div>
      {caption && (
        <p className="text-[11px] text-ink-400 text-center leading-snug px-2">
          {caption}
        </p>
      )}
    </div>
  )
}

/* ─── Section separator ────────────────────────────────────────── */
function PartnerSeparator() {
  return (
    <div className="container-site">
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-ink-200/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-600/40" />
        <div className="flex-1 h-px bg-ink-200/60" />
      </div>
    </div>
  )
}

/* ─── Partner header block ─────────────────────────────────────── */
function PartnerHeader({
  id,
  flag,
  country,
  name,
  tagline,
  description,
  logo,
  website,
  credential,
}: {
  id: string
  flag: string
  country: string
  name: string
  tagline: string
  description: string
  logo: string
  website: string
  credential: string
}) {
  return (
    <div
      id={id}
      className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start"
    >
      {/* Left — partner identity */}
      <AnimatedSection direction="left" className="lg:col-span-3 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-100 border border-ink-200/70 text-[11px] font-bold tracking-widest uppercase text-ink-500">
            {flag} {country}
          </span>
          <span className="text-[11px] text-ink-400 font-medium">{credential}</span>
        </div>
        <div>
          <h2 className="text-3xl lg:text-[2rem] font-black text-ink-950 leading-tight tracking-tight mb-2">
            {name}
          </h2>
          <p className="text-brand-600 text-[14px] font-semibold">{tagline}</p>
        </div>
        <p className="text-[14px] text-ink-500 leading-[1.85]">{description}</p>
        <div className="flex items-center gap-3 pt-1">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink-600 hover:text-brand-600 transition-colors border border-ink-200/70 hover:border-brand-200 rounded-lg px-4 py-2 bg-white hover:bg-brand-50/30"
          >
            Visit Official Website <ExternalLink size={11} />
          </a>
        </div>
      </AnimatedSection>

      {/* Right — logo display */}
      <AnimatedSection direction="right" className="lg:col-span-2">
        <div className="bg-white border border-ink-200/70 rounded-2xl shadow-card p-10 flex flex-col items-center justify-center gap-5 aspect-square max-h-56 lg:max-h-none">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={200}
            height={80}
            className="object-contain max-h-16 w-auto"
          />
          <div className="w-full border-t border-ink-200/60 pt-4 flex items-center justify-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              Authorized Representative · Egypt
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid-light pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
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
                Partners & Technologies
              </span>
              <h1 className="text-4xl lg:text-[3.25rem] font-black text-white leading-[1.06] tracking-tight mb-5">
                World-Class Technology,{' '}
                <br className="hidden lg:block" />
                <span className="text-gradient-brand">Delivered Locally</span>
              </h1>
              <p className="text-white/55 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                ON Medical Company is the authorized Egyptian representative for three
                internationally recognized manufacturers — each a leader in their field of
                oncology, radiotherapy, and medical physics technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partner anchor navigation ──────────────────────────── */}
      <div className="sticky top-[60px] lg:top-[66px] z-40 bg-white/95 backdrop-blur-xl border-b border-ink-200/60 shadow-nav">
        <div className="container-site">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
            {[
              { label: 'PTW Freiburg', sub: 'Germany', href: '#ptw' },
              { label: 'Ashland Medical', sub: 'USA', href: '#ashland' },
              { label: 'Klarity', sub: 'China', href: '#klarity' },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-5 py-3.5 text-[13px] font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50/40 transition-all border-r border-ink-200/50 last:border-r-0 flex-shrink-0 group"
              >
                <span className="w-5 h-5 rounded-md bg-ink-100 group-hover:bg-brand-600 group-hover:text-white text-ink-500 text-[10px] font-bold flex items-center justify-center transition-colors flex-shrink-0">
                  {i + 1}
                </span>
                <span>
                  {item.label}
                  <span className="text-ink-400 font-normal"> · {item.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          PARTNER 1 — PTW FREIBURG
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding section-alt border-b border-ink-200/60">
        <div className="container-site space-y-16">

          <PartnerHeader
            id="ptw"
            flag="🇩🇪"
            country="Germany"
            name="PTW Freiburg"
            tagline="Global Leader in Dosimetry & Radiation Quality Control"
            description="Founded in 1922 and headquartered in Freiburg, Germany, PTW is the world's leading manufacturer of dosimetry and quality control solutions for radiation medicine. Serving medical radiation experts in more than 160 countries, PTW combines a century of precision engineering expertise with continuous innovation — operating the oldest and largest accredited calibration laboratory in the field of ionizing radiation."
            logo="/logo-ptw.png"
            website="https://www.ptwdosimetry.com"
            credential="Authorized Egyptian Representative"
          />

          {/* ── Featured Technology: BEAMSCAN ─────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">Featured Technology</span>
            </div>

            {/* BEAMSCAN hero card */}
            <div className="bg-ink-950 rounded-2xl border border-ink-800/60 overflow-hidden shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Dark left panel */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col gap-6 relative overflow-hidden border-r border-white/[0.07]">
                  <div
                    className="absolute inset-0 bg-dot-grid-light pointer-events-none opacity-60"
                    style={{ backgroundSize: '20px 20px' }}
                  />
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgb(204 18 18 / 0.12) 0%, transparent 65%)',
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-600/15 border border-brand-500/25 text-brand-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                      3D Water Phantom System
                    </span>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                      BEAMSCAN®
                      <br />
                      <span className="text-brand-400">Water Phantoms</span>
                    </h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      Automated 3D water scanning systems engineered for precision beam data
                      acquisition, linac QA, and radiotherapy treatment planning validation.
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-3">
                      {[
                        { label: 'Setup', value: '< 12 min' },
                        { label: 'Accuracy', value: '≤ 0.1 mm' },
                        { label: 'Countries', value: '160+' },
                      ].map(stat => (
                        <div key={stat.label} className="text-center">
                          <p className="text-white text-[15px] font-black leading-none">{stat.value}</p>
                          <p className="text-white/35 text-[10px] mt-1 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right panel — product image + key features */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-8 bg-ink-900">
                  {/* Main product image */}
                  <div className="bg-ink-950/60 border border-white/[0.07] rounded-xl p-10 flex flex-col items-center justify-center gap-4" style={{ aspectRatio: '16/9' }}>
                    <div className="w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                      <Cpu size={28} className="text-brand-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-[13px] font-semibold">BEAMSCAN® Water Phantom System</p>
                      <p className="text-white/25 text-[10px] mt-1">Product image · Replace with official PTW imagery</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/30 text-center">
                    BEAMSCAN® — Automated 3D Water Scanning Platform · PTW Freiburg, Germany
                  </p>

                  {/* Key capabilities */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Wireless auto setup & operation',
                      'Patented TRULEVEL auto leveling',
                      'AI-based scan correction tools',
                      'Automated water management',
                      'CAX and rotational correction',
                      'Compatible with all major linac types',
                    ].map(feat => (
                      <div key={feat} className="flex items-start gap-2 text-[12px] text-white/55">
                        <CheckCircle2 size={13} className="text-brand-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Three BEAMSCAN variants ────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                variant: 'Speedo',
                label: 'Ultra-Fast All-in-One Solution',
                desc:
                  'A fully integrated system — phantom, lift, reservoir, and electronics in one unit. Requires only a single cable connection. Ready to scan in under twelve minutes, out of the box.',
                specs: [
                  'All-in-one integrated design',
                  'Footprint: 1.21 m²',
                  'Reservoir capacity: 196 L',
                  'Ideal for multi-linac departments',
                ],
                icon: Zap,
                image: '/beamscan-speedo.png',
              },
              {
                variant: 'Ringo',
                label: 'Space-Saving Ring-Gantry Solution',
                desc:
                  'Engineered specifically for ring-gantry linear accelerators. Features the smallest footprint of the BEAMSCAN range and one-person phantom setup on the treatment couch.',
                specs: [
                  'Dedicated ring-gantry design',
                  'Smallest footprint: 0.79 m²',
                  'One-person couch setup',
                  'Expandable with optional lift',
                ],
                icon: Settings,
                image: '/beamscan-ringo.png',
              },
              {
                variant: 'Mobilo',
                label: 'Mobile, Ultra-Flexible Solution',
                desc:
                  'Built for on-site and inter-site use. A foldable lift, shockproof construction, and optional validated transport packaging make it ideal for hospital networks and visiting medical physicists.',
                specs: [
                  'Foldable transport lift',
                  'Validated packaging option',
                  'Air & road transport ready',
                  'Flexible for varied linac types',
                ],
                icon: Globe,
                image: '/beamscan-mobilo.png',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <AnimatedSection key={card.variant} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Product image */}
                    <div className="bg-gradient-to-b from-ink-50 to-white border-b border-ink-200/60 p-8 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={card.image}
                        alt={`BEAMSCAN® ${card.variant}`}
                        width={320}
                        height={240}
                        className="object-contain max-h-full w-auto"
                      />
                    </div>
                    <p className="text-[10px] text-ink-400 text-center pt-3 px-4">
                      BEAMSCAN® {card.variant} · {card.label}
                    </p>

                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
                            BEAMSCAN®
                          </span>
                          <span className="text-[10px] text-ink-400 uppercase tracking-wider">
                            {card.variant}
                          </span>
                        </div>
                        <h4 className="text-[15px] font-bold text-ink-900 leading-snug">
                          {card.label}
                        </h4>
                      </div>
                      <p className="text-[13px] text-ink-500 leading-[1.75]">{card.desc}</p>
                      <ul className="space-y-1.5 mt-auto pt-4 border-t border-ink-200/60">
                        {card.specs.map(s => (
                          <li key={s} className="flex items-start gap-2 text-[12px] text-ink-600">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-brand-600 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          {/* ── Core Applications ──────────────────────────────── */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <span className="section-label mb-4 block">Core Applications</span>
                  <h3 className="text-xl font-bold text-ink-900 leading-snug mb-3">
                    Clinical Use Cases for BEAMSCAN® Systems
                  </h3>
                  <p className="text-[13px] text-ink-500 leading-relaxed">
                    The BEAMSCAN® range supports the full spectrum of radiotherapy
                    dosimetry workflows, from initial linac commissioning through
                    routine QA programs.
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Beam Data Commissioning', icon: FlaskConical },
                    { label: 'Linac Acceptance Testing', icon: CheckCircle2 },
                    { label: 'TPS Validation', icon: Cpu },
                    { label: 'Monitor Calibration', icon: Activity },
                    { label: 'Beam Tuning', icon: Settings },
                    { label: 'Linac QA Programs', icon: Shield },
                    { label: 'Reference Dosimetry', icon: Microscope },
                    { label: 'Small-Field Dosimetry', icon: Zap },
                  ].map(app => {
                    const Icon = app.icon
                    return (
                      <div
                        key={app.label}
                        className="flex flex-col items-center text-center gap-2.5 p-4 rounded-xl border border-ink-200/60 bg-ink-50/70 hover:border-brand-200 hover:bg-brand-50/20 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-ink-200/60 shadow-card flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-brand-600" strokeWidth={2} />
                        </div>
                        <span className="text-[11px] font-medium text-ink-700 leading-snug">{app.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── PTW brochure CTA ───────────────────────────────── */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-7 py-5 rounded-xl border border-ink-200/70 bg-white">
              <div className="flex items-center gap-3">
                <div className="icon-box flex-shrink-0">
                  <BookOpen size={15} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">BEAMSCAN® Product Brochure</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">Technical specifications, variant comparison, and software overview</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  Download PDF
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Request Information <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <PartnerSeparator />

      {/* ══════════════════════════════════════════════════════════
          PARTNER 2 — ASHLAND MEDICAL
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white border-b border-ink-200/60">
        <div className="container-site space-y-16">

          <PartnerHeader
            id="ashland"
            flag="🇺🇸"
            country="United States"
            name="Ashland Medical"
            tagline="Precision Film Dosimetry for Radiotherapy & Radiology QA"
            description="Ashland Medical develops and manufactures Gafchromic™ dosimetry films — a globally established standard for accurate, chemical-free dose measurement in radiotherapy and radiology quality assurance. Used in hospitals and cancer centres worldwide, Gafchromic™ films deliver submillimeter spatial resolution with no angular correction dependence, making them well-suited for both patient QA workflows and machine QA programs."
            logo="/logo-ashland.png"
            website="https://www.ashland.com"
            credential="Authorized Egyptian Representative"
          />

          {/* ── Gafchromic films overview ──────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">Featured Technology</span>
            </div>

            <div className="bg-ink-950 rounded-2xl border border-ink-800/60 overflow-hidden shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Dark left panel */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col gap-6 relative overflow-hidden border-r border-white/[0.07]">
                  <div
                    className="absolute inset-0 bg-dot-grid-light pointer-events-none opacity-60"
                    style={{ backgroundSize: '20px 20px' }}
                  />
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgb(204 18 18 / 0.12) 0%, transparent 65%)',
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-600/15 border border-brand-500/25 text-brand-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                      Dosimetric Film System
                    </span>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                      Gafchromic™
                      <br />
                      <span className="text-brand-400">Film Platform</span>
                    </h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      Self-developing, radiochromic film technology providing fast, highly
                      accurate dose measurement for radiotherapy and radiology QA — with no
                      chemical processing required.
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-3">
                      {[
                        { label: 'Resolution', value: '≤ 25 µm' },
                        { label: 'Accuracy', value: '± 2%' },
                        { label: 'Film Types', value: '12+' },
                      ].map(stat => (
                        <div key={stat.label} className="text-center">
                          <p className="text-white text-[15px] font-black leading-none">{stat.value}</p>
                          <p className="text-white/35 text-[10px] mt-1 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right panel */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-8 bg-ink-900">
                  {/* Main product image */}
                  <div className="bg-ink-950/60 border border-white/[0.07] rounded-xl p-10 flex flex-col items-center justify-center gap-4" style={{ aspectRatio: '16/9' }}>
                    <div className="w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                      <Layers size={28} className="text-brand-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-[13px] font-semibold">Gafchromic™ Film Product Range</p>
                      <p className="text-white/25 text-[10px] mt-1">Product image · Replace with official Ashland imagery</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/30 text-center">
                    Gafchromic™ EBT & RTQA Series · Ashland Medical, USA
                  </p>

                  {/* Key qualities */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'No chemical processing required',
                      'Submillimeter spatial resolution',
                      'No angular correction dependence',
                      'Tissue equivalent composition',
                      'Safe for room-light handling',
                      'Real-time image development',
                      'Water resistant',
                      'Custom cut options available',
                    ].map(feat => (
                      <div key={feat} className="flex items-start gap-2 text-[12px] text-white/55">
                        <CheckCircle2 size={13} className="text-brand-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Radiotherapy Films ─────────────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
                Radiotherapy Films
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: 'EBT4',
                  use: 'Patient QA — IMRT, VMAT, Brachytherapy',
                  dose: '0.2 – 10 Gy',
                  tag: 'Core QA',
                },
                {
                  name: 'EBT3',
                  use: 'Patient QA — IMRT, VMAT, Machine QA',
                  dose: '0.2 – 10 Gy',
                  tag: 'Core QA',
                },
                {
                  name: 'EBT3P',
                  use: 'Pre-punched for Quick Phantom workflows',
                  dose: '0.2 – 10 Gy',
                  tag: 'Phantom Ready',
                },
                {
                  name: 'EBT-XD',
                  use: 'Extended dose — SRS / SBRT applications',
                  dose: '0.4 – 40 Gy',
                  tag: 'High Dose',
                },
                {
                  name: 'HD-V2',
                  use: 'High-dose measurement — photons, electrons, protons',
                  dose: '10 – 1000 Gy',
                  tag: 'Very High Dose',
                },
                {
                  name: 'MD-V3',
                  use: 'Absorbed dose of high-energy photons',
                  dose: '1 – 100 Gy',
                  tag: 'Medium Dose',
                },
                {
                  name: 'RTQA2',
                  use: 'Machine QA — field alignment, star shot, picket fence',
                  dose: '0.2 – 10 Gy',
                  tag: 'Machine QA',
                },
                {
                  name: 'CK Films',
                  use: 'CyberKnife® phantom configurations',
                  dose: 'EBT4 / EBT-XD',
                  tag: 'SRS/CK',
                },
              ].map((film, i) => (
                <AnimatedSection key={film.name} delay={i * 0.04}>
                  <div className="bg-white border border-ink-200/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 overflow-hidden h-full flex flex-col">
                    {/* Image area */}
                    <div className="bg-ink-50 border-b border-ink-200/60 p-6 flex flex-col items-center justify-center gap-2.5" style={{ aspectRatio: '1' }}>
                      <div className="w-9 h-9 rounded-lg bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Layers size={16} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-ink-300 text-center">Image placeholder</p>
                    </div>
                    <p className="text-[10px] text-ink-400 text-center pt-2.5 px-3">
                      Gafchromic™ {film.name}
                    </p>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[14px] font-bold text-ink-900">{film.name}</h4>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-md flex-shrink-0">
                          {film.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-500 leading-snug">{film.use}</p>
                      <p className="text-[10px] text-ink-400 mt-auto pt-2 border-t border-ink-200/50">
                        Dose range: {film.dose}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Radiology Films ────────────────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
                Radiology Films
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: 'XR-CT3',
                  use: 'CT beam slice-width & beam alignment QA',
                  dose: '2 – 20 cGy',
                  tag: 'CT QA',
                },
                {
                  name: 'XR-RV3',
                  use: 'Skin dose measurement — fluoroscopy-guided procedures',
                  dose: '0.2 – 10 Gy',
                  tag: 'Fluoroscopy',
                },
                {
                  name: 'XR-M3',
                  use: 'Mammography quality assurance testing',
                  dose: '2 – 20 cGy',
                  tag: 'Mammography',
                },
                {
                  name: 'LD-V1',
                  use: 'General QA tool for radiology applications',
                  dose: '2 – 20 cGy',
                  tag: 'Radiology QA',
                },
              ].map((film, i) => (
                <AnimatedSection key={film.name} delay={i * 0.06}>
                  <div className="bg-white border border-ink-200/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 overflow-hidden h-full flex flex-col">
                    <div className="bg-ink-50 border-b border-ink-200/60 p-6 flex flex-col items-center justify-center gap-2.5" style={{ aspectRatio: '1' }}>
                      <div className="w-9 h-9 rounded-lg bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Layers size={16} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-ink-300 text-center">Image placeholder</p>
                    </div>
                    <p className="text-[10px] text-ink-400 text-center pt-2.5 px-3">
                      Gafchromic™ {film.name}
                    </p>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[14px] font-bold text-ink-900">{film.name}</h4>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-ink-500 bg-ink-100 border border-ink-200/60 px-2 py-0.5 rounded-md flex-shrink-0">
                          {film.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-500 leading-snug">{film.use}</p>
                      <p className="text-[10px] text-ink-400 mt-auto pt-2 border-t border-ink-200/50">
                        Dose range: {film.dose}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* ── QA Applications gallery ───────────────────────── */}
          <AnimatedSection>
            <div className="bg-ink-50/70 rounded-2xl border border-ink-200/70 p-8 lg:p-10">
              <div className="mb-7">
                <span className="section-label mb-3 block">Example QA Applications</span>
                <p className="text-[13px] text-ink-500 max-w-xl">
                  Gafchromic™ films are routinely used across a broad range of machine and
                  patient QA procedures in clinical radiotherapy environments.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Patient Film QA', sub: 'IMRT / VMAT dose distribution' },
                  { label: 'Picket Fence Test', sub: 'MLC leaf positioning accuracy' },
                  { label: 'Star Shot Test', sub: 'Radiation isocentre alignment' },
                  { label: 'Flatness & Symmetry', sub: 'Beam profile uniformity' },
                  { label: 'Small Field Dosimetry', sub: 'SRS / SBRT output measurement' },
                  { label: 'Light / Radiation Field', sub: 'Field alignment verification' },
                  { label: 'HDR Position Verification', sub: 'Source dwell position QA' },
                  { label: 'Dose Mapping', sub: '2D spatial dose distribution' },
                ].map((app, i) => (
                  <div
                    key={app.label}
                    className="bg-white border border-ink-200/70 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 flex flex-col"
                  >
                    {/* Image area */}
                    <div className="bg-ink-100/60 border-b border-ink-200/50 p-5 flex flex-col items-center justify-center gap-2" style={{ aspectRatio: '1' }}>
                      <div className="w-8 h-8 rounded-lg bg-white border border-ink-200/60 shadow-sm flex items-center justify-center">
                        <Activity size={14} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-[9px] text-ink-300 text-center">Image placeholder</p>
                    </div>
                    <p className="text-[9px] text-ink-300 text-center pt-2 px-3">
                      Gafchromic™ · {app.label}
                    </p>
                    <div className="p-3.5">
                      <p className="text-[12px] font-semibold text-ink-800 leading-snug">{app.label}</p>
                      <p className="text-[10px] text-ink-400 mt-0.5 leading-snug">{app.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Ashland brochure CTA ──────────────────────────── */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-7 py-5 rounded-xl border border-ink-200/70 bg-white">
              <div className="flex items-center gap-3">
                <div className="icon-box flex-shrink-0">
                  <BookOpen size={15} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">Gafchromic™ Film Product Guide</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">Full product range, specifications, and clinical application reference</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  Download PDF
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Request Information <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <PartnerSeparator />

      {/* ══════════════════════════════════════════════════════════
          PARTNER 3 — KLARITY
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding section-alt border-b border-ink-200/60">
        <div className="container-site space-y-16">

          <PartnerHeader
            id="klarity"
            flag="🇨🇳"
            country="China"
            name="Klarity"
            tagline="Patient Positioning & Immobilization Solutions for Radiotherapy"
            description="Klarity develops specialized patient positioning and immobilization systems for use in radiotherapy and oncology treatment workflows. Their product range addresses the precise positioning requirements of modern radiotherapy techniques, providing clinical teams with reliable, configurable platforms designed to support accurate and reproducible treatment delivery."
            logo="/logo-klarity.png"
            website="https://www.klarity-medical.com"
            credential="Authorized Egyptian Representative"
          />

          {/* ── UNO™ All-In-One hero ───────────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">Featured Technology</span>
            </div>

            <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left — main product image (flagship) */}
                <div className="border-r border-ink-200/60">
                  <div className="bg-ink-50 p-10 lg:p-14 flex flex-col items-center justify-center gap-5" style={{ minHeight: '400px' }}>
                    <div className="w-20 h-20 rounded-2xl bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                      <Cpu size={34} className="text-brand-600" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <p className="text-[14px] font-bold text-ink-600">Klarity UNO™ All-In-One System</p>
                      <p className="text-[11px] text-ink-300 mt-1.5">Main product image · Replace with official Klarity imagery</p>
                    </div>
                  </div>
                  <div className="bg-white border-t border-ink-200/60 px-8 py-3 text-center">
                    <p className="text-[11px] text-ink-400">
                      Klarity UNO™ All-In-One System · Configurable Patient Positioning Platform
                    </p>
                  </div>
                </div>

                {/* Right — product details */}
                <div className="p-8 lg:p-10 flex flex-col gap-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50 border border-brand-100 text-brand-600 text-[10px] font-bold uppercase tracking-widest w-fit mb-3">
                      Flagship System
                    </span>
                    <h3 className="text-2xl font-black text-ink-950 leading-tight tracking-tight mb-2">
                      Klarity UNO™
                      <br />
                      <span className="text-brand-600">All-In-One System</span>
                    </h3>
                    <p className="text-[13px] text-ink-500 leading-[1.8]">
                      The UNO™ All-In-One System is a configurable patient positioning and
                      immobilization platform developed by Klarity for use in radiotherapy
                      treatment workflows. The system is designed to support reproducible
                      patient setup across a range of treatment sites and clinical scenarios.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
                      Clinical Use Context
                    </h4>
                    {[
                      'Radiotherapy patient positioning and immobilization',
                      'Support for reproducible treatment setup across fractions',
                      'Configurable for various anatomical treatment sites',
                      'Integration within standard radiotherapy workflows',
                    ].map(point => (
                      <div key={point} className="flex items-start gap-2.5 text-[13px] text-ink-600">
                        <CheckCircle2 size={14} className="text-brand-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-ink-50 border border-ink-200/60 mt-2">
                    <p className="text-[12px] text-ink-500 leading-relaxed">
                      <span className="font-semibold text-ink-700">Configuration Note:</span>{' '}
                      Product configurations, accessories, and compatible components may vary
                      depending on the clinical workflow and institutional requirements. Contact
                      ON Medical for a tailored product consultation.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 group"
                    >
                      Enquire about Klarity systems
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Klarity product gallery ────────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
                Product Gallery
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: 'UNO™ System — Front View', caption: 'Full system configuration · frontal perspective' },
                { label: 'UNO™ System — Side Profile', caption: 'Side view showing positioning components' },
                { label: 'UNO™ Accessory Set', caption: 'Immobilization accessories and interface components' },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.08}>
                  <div className="flex flex-col gap-3">
                    <div className="bg-ink-50 border border-ink-200/70 rounded-xl p-10 flex flex-col items-center justify-center gap-3" style={{ aspectRatio: '4/3' }}>
                      <div className="w-11 h-11 rounded-xl bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Cpu size={18} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <div className="text-center">
                        <p className="text-[12px] font-semibold text-ink-500">{item.label}</p>
                        <p className="text-[10px] text-ink-300 mt-0.5">Image placeholder</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-ink-400 text-center leading-snug px-2">{item.caption}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Klarity brochure CTA ──────────────────────────── */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-7 py-5 rounded-xl border border-ink-200/70 bg-white">
              <div className="flex items-center gap-3">
                <div className="icon-box flex-shrink-0">
                  <BookOpen size={15} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">Klarity Product Documentation</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">UNO™ system specifications and configuration guide</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  Download PDF
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Request Information <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section className="section-padding bg-ink-950 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-dot-grid-light pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgb(204 18 18 / 0.09) 0%, transparent 65%)',
          }}
        />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300 border border-brand-500/25 bg-brand-600/10 mb-6">
                Product Enquiries
              </span>
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-white mb-4 leading-[1.12] tracking-tight">
                Looking for Advanced Radiotherapy, Dosimetry,
                <br className="hidden lg:block" /> or Patient Positioning Solutions?
              </h2>
              <p className="text-white/50 text-[14px] leading-[1.8] max-w-xl mx-auto mb-10">
                ON Medical Company provides end-to-end support for institutions seeking
                specialized oncology and radiotherapy equipment — from initial consultation
                through import, installation, and long-term after-sales service.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact ON Medical <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline-white"
                >
                  <Mail size={14} />
                  Request Product Information
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
