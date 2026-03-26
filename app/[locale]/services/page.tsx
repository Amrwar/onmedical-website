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
import { getTranslations } from 'next-intl/server'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionDivider from '@/components/ui/SectionDivider'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
    description:
      'ON Medical Company provides end-to-end services for oncology and radiotherapy equipment in Egypt: distribution, technical support, installation, after-sales service, and market representation.',
  }
}

export default async function ServicesPage() {
  const t = await getTranslations('services')

  const coreServices = [
    {
      icon: Package,
      title: t('cs1Title'),
      description: t('cs1Desc'),
      points: [t('cs1p1'), t('cs1p2'), t('cs1p3'), t('cs1p4'), t('cs1p5'), t('cs1p6')],
    },
    {
      icon: Globe,
      title: t('cs2Title'),
      description: t('cs2Desc'),
      points: [t('cs2p1'), t('cs2p2'), t('cs2p3'), t('cs2p4'), t('cs2p5'), t('cs2p6')],
    },
    {
      icon: Wrench,
      title: t('cs3Title'),
      description: t('cs3Desc'),
      points: [t('cs3p1'), t('cs3p2'), t('cs3p3'), t('cs3p4'), t('cs3p5'), t('cs3p6')],
    },
    {
      icon: HeartPulse,
      title: t('cs4Title'),
      description: t('cs4Desc'),
      points: [t('cs4p1'), t('cs4p2'), t('cs4p3'), t('cs4p4'), t('cs4p5'), t('cs4p6')],
    },
    {
      icon: PhoneCall,
      title: t('cs5Title'),
      description: t('cs5Desc'),
      points: [t('cs5p1'), t('cs5p2'), t('cs5p3'), t('cs5p4'), t('cs5p5'), t('cs5p6')],
    },
    {
      icon: Microscope,
      title: t('cs6Title'),
      description: t('cs6Desc'),
      points: [t('cs6p1'), t('cs6p2'), t('cs6p3'), t('cs6p4'), t('cs6p5'), t('cs6p6')],
    },
  ]

  const specializations = [
    { icon: FlaskConical, title: t('spec1Title'), desc: t('spec1Desc') },
    { icon: Cpu,          title: t('spec2Title'), desc: t('spec2Desc') },
    { icon: Settings,     title: t('spec3Title'), desc: t('spec3Desc') },
    { icon: ShieldCheck,  title: t('spec4Title'), desc: t('spec4Desc') },
  ]

  const process = [
    { step: t('proc1Step'), title: t('proc1Title'), desc: t('proc1Desc') },
    { step: t('proc2Step'), title: t('proc2Title'), desc: t('proc2Desc') },
    { step: t('proc3Step'), title: t('proc3Title'), desc: t('proc3Desc') },
    { step: t('proc4Step'), title: t('proc4Title'), desc: t('proc4Desc') },
    { step: t('proc5Step'), title: t('proc5Title'), desc: t('proc5Desc') },
    { step: t('proc6Step'), title: t('proc6Title'), desc: t('proc6Desc') },
    { step: t('proc7Step'), title: t('proc7Title'), desc: t('proc7Desc') },
  ]

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
                {t('heroLabel')}
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                {t('heroTitle1')}{' '}
                <span className="text-gradient-brand">{t('heroTitle2')}</span>{' '}
                {t('heroTitle3')}
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                {t('heroDesc')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Specialization strip ──────────────────────────── */}
      <SectionDivider />
      <section className="py-10 bg-white">
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
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            {/* Core services — interlocking gears icon */}
            <div className="flex justify-center mb-5">
              <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large gear — left, red */}
                <circle cx="26" cy="34" r="14" fill="#CC1212"/>
                <circle cx="26" cy="34" r="9"  fill="#1a1a1a"/>
                <circle cx="26" cy="34" r="3"  fill="#CC1212"/>
                {/* Large gear teeth */}
                <rect x="23" y="16" width="6" height="6" rx="1.5" fill="#CC1212"/>
                <rect x="23" y="46" width="6" height="6" rx="1.5" fill="#CC1212"/>
                <rect x="8"  y="31" width="6" height="6" rx="1.5" fill="#CC1212"/>
                <rect x="38" y="31" width="6" height="6" rx="1.5" fill="#CC1212"/>
                <rect x="12" y="20" width="6" height="6" rx="1.5" transform="rotate(45 15 23)" fill="#CC1212"/>
                <rect x="32" y="20" width="6" height="6" rx="1.5" transform="rotate(-45 35 23)" fill="#CC1212"/>
                <rect x="12" y="40" width="6" height="6" rx="1.5" transform="rotate(-45 15 43)" fill="#CC1212"/>
                <rect x="32" y="40" width="6" height="6" rx="1.5" transform="rotate(45 35 43)" fill="#CC1212"/>
                {/* Small gear — right, dark */}
                <circle cx="52" cy="22" r="10" fill="#1a1a1a"/>
                <circle cx="52" cy="22" r="6"  fill="#333"/>
                <circle cx="52" cy="22" r="2.2" fill="#CC1212"/>
                {/* Small gear teeth */}
                <rect x="49" y="8"  width="5" height="5" rx="1" fill="#1a1a1a"/>
                <rect x="49" y="31" width="5" height="5" rx="1" fill="#1a1a1a"/>
                <rect x="38" y="19" width="5" height="5" rx="1" fill="#1a1a1a"/>
                <rect x="60" y="19" width="5" height="5" rx="1" fill="#1a1a1a"/>
              </svg>
            </div>
            <SectionHeader
              label={t('coreLabel')}
              title={t('coreTitle')}
              subtitle={t('coreSubtitle')}
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
                      <div className="lg:col-span-2 bg-brand-50 border-b lg:border-b-0 lg:border-r border-brand-100 p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30"
                          style={{ backgroundSize: '20px 20px' }}
                        />
                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white border border-brand-100 shadow-sm flex items-center justify-center">
                            <Icon size={22} className="text-brand-600" strokeWidth={1.75} />
                          </div>
                          <h2 className="text-xl font-bold text-ink-900 leading-snug">
                            {service.title}
                          </h2>
                          <p className="text-[13px] text-ink-500 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Right content panel */}
                      <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between gap-6">
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4">
                            {t('whatsIncluded')}
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
                            {t('requestService')}
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
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            {/* Process flow icon — pipeline with nodes */}
            <div className="flex justify-center mb-5">
              <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting line */}
                <line x1="14" y1="24" x2="106" y2="24" stroke="#e5e7eb" strokeWidth="2"/>
                {/* Node 1 — red */}
                <circle cx="14" cy="24" r="10" fill="#CC1212"/>
                <text x="14" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">1</text>
                {/* Node 2 — red */}
                <circle cx="37" cy="24" r="10" fill="#CC1212"/>
                <text x="37" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">2</text>
                {/* Node 3 — black */}
                <circle cx="60" cy="24" r="10" fill="#1a1a1a"/>
                <text x="60" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">3</text>
                {/* Node 4 — black */}
                <circle cx="83" cy="24" r="10" fill="#1a1a1a"/>
                <text x="83" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">4</text>
                {/* Node 5 — black */}
                <circle cx="106" cy="24" r="10" fill="#1a1a1a"/>
                <text x="106" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">5</text>
                {/* Top labels */}
                <text x="14" y="10" textAnchor="middle" fill="#CC1212" fontSize="6" fontWeight="600" fontFamily="sans-serif">START</text>
                <text x="106" y="10" textAnchor="middle" fill="#CC1212" fontSize="6" fontWeight="600" fontFamily="sans-serif">END</text>
              </svg>
            </div>
            <SectionHeader
              label={t('processLabel')}
              title={t('processTitle')}
              subtitle={t('processSubtitle')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14">
            {process.map((step, i) => {
              const stepIcons = [
                <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
                <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
                <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
                <svg key="s4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
                <svg key="s5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 5.34L3.93 6.75M19.07 19.07l-1.41-1.41M5.34 18.66l-1.41 1.41M12 2v2m0 16v2m10-10h-2M4 12H2"/></svg>,
                <svg key="s6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>,
                <svg key="s7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              ]
              return (
              <AnimatedSection key={step.step} delay={i * 0.13}>
                <div className="relative bg-white rounded-2xl border border-ink-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4 h-full group overflow-hidden">
                  {/* Step number watermark */}
                  <span className="absolute top-4 right-5 text-[11px] font-bold text-ink-200 tabular-nums select-none">
                    {step.step}
                  </span>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-600 to-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300">
                    {stepIcons[i]}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-[13px] font-bold text-ink-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-ink-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {/* Bottom connector dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-200 group-hover:bg-brand-600 transition-colors duration-300 mt-auto" />
                </div>
              </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
