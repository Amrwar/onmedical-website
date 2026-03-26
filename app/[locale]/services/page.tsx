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
      <SectionDivider bg="muted" />
      <section className="section-padding section-alt">
        <div className="container-site">
          <AnimatedSection>
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
            <SectionHeader
              label={t('processLabel')}
              title={t('processTitle')}
              subtitle={t('processSubtitle')}
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
