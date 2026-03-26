import type { Metadata } from 'next'
import {
  Globe, CheckCircle2, ArrowRight, ExternalLink,
  Download, Layers, FlaskConical, Cpu, Microscope,
  Activity, Zap, Settings, Shield, BookOpen, Mail,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Partners & Technologies',
    description:
      'ON Medical Company is the authorized Egyptian representative for PTW Freiburg, Ashland Medical, and Klarity — presenting premium dosimetry, film QA, and patient positioning technologies for oncology and radiotherapy.',
  }
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
  visitWebsiteLabel,
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
  visitWebsiteLabel: string
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
            {visitWebsiteLabel} <ExternalLink size={11} />
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
              {credential}
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
export default async function PartnersPage() {
  const t = await getTranslations('partners')
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-light pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
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
              <h1 className="text-4xl lg:text-[3.25rem] font-black text-ink-900 leading-[1.06] tracking-tight mb-5">
                {t('heroTitle1')}{' '}
                <br className="hidden lg:block" />
                <span className="text-gradient-brand">{t('heroTitle2')}</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                {t('heroDesc')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partner anchor navigation ──────────────────────────── */}
      <div className="sticky top-[60px] lg:top-[66px] z-40 bg-white/95 backdrop-blur-xl border-b border-ink-200/60 shadow-nav">
        <div className="container-site">
          <div className="flex items-stretch gap-0 overflow-x-auto no-scrollbar">
            {[
              { label: t('ptwName'), sub: t('navPTWSub'), href: '#ptw', logo: '/logo-ptw.png' },
              { label: t('ashlandName'), sub: t('navAshlandSub'), href: '#ashland', logo: '/logo-ashland.png' },
              { label: t('klarityName'), sub: t('navKlaritySub'), href: '#klarity', logo: '/logo-klarity.png' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1.5 px-6 py-3 text-[13px] font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50/40 transition-all border-r border-ink-200/50 last:border-r-0 flex-shrink-0 group"
              >
                <Image
                  src={item.logo}
                  alt={item.label}
                  width={80}
                  height={28}
                  className="h-6 w-auto object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-ink-400 font-normal text-[11px]">{item.sub}</span>
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
            country={t('ptwCountry')}
            name={t('ptwName')}
            tagline={t('ptwTagline')}
            description={t('ptwDesc')}
            logo="/logo-ptw.png"
            website="https://www.ptwdosimetry.com"
            credential={t('ptwCredential')}
            visitWebsiteLabel={t('visitWebsite')}
          />

          {/* ── Featured Technology: BEAMSCAN ─────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">{t('featuredTechnology')}</span>
            </div>

            {/* BEAMSCAN hero card */}
            <div className="rounded-2xl border border-brand-100 overflow-hidden shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Left panel — brand gradient */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col gap-6 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/20"
                  style={{ background: 'linear-gradient(145deg, #b91c1c 0%, #CC1212 45%, #e53e3e 100%)' }}
                >
                  <div
                    className="absolute inset-0 bg-dot-grid-light pointer-events-none opacity-20"
                    style={{ backgroundSize: '20px 20px' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgb(255 255 255 / 0.08) 0%, transparent 65%)' }}
                  />
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 border border-white/25 text-white text-[10px] font-bold uppercase tracking-widest w-fit">
                      {t('beamscanCategory')}
                    </span>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                      {t('beamscanTitle')}
                      <br />
                      <span className="text-white/70">{t('beamscanSubtitle')}</span>
                    </h3>
                    <p className="text-[13px] text-white/75 leading-relaxed">
                      {t('beamscanDesc')}
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/20 grid grid-cols-3 gap-3">
                      {[
                        { label: t('beamscanStatSetupLabel'), value: t('beamscanStatSetupValue') },
                        { label: t('beamscanStatAccuracyLabel'), value: t('beamscanStatAccuracyValue') },
                        { label: t('beamscanStatCountriesLabel'), value: t('beamscanStatCountriesValue') },
                      ].map(stat => (
                        <div key={stat.label} className="text-center">
                          <p className="text-white text-[15px] font-black leading-none">{stat.value}</p>
                          <p className="text-white/60 text-[10px] mt-1 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right panel — white */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-8 bg-white">
                  {/* Main product image */}
                  <div className="relative rounded-xl overflow-hidden border border-ink-100" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src="/ptw beamscan image.jpeg"
                      alt="BEAMSCAN® Water Phantom System — PTW Freiburg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[11px] text-ink-400 text-center">
                    {t('beamscanImageCaption')}
                  </p>

                  {/* Key capabilities */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      t('beamscanFeat1'),
                      t('beamscanFeat2'),
                      t('beamscanFeat3'),
                      t('beamscanFeat4'),
                      t('beamscanFeat5'),
                      t('beamscanFeat6'),
                    ].map(feat => (
                      <div key={feat} className="flex items-start gap-2 text-[12px] text-ink-600">
                        <CheckCircle2 size={13} className="text-brand-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
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
                label: t('speedoLabel'),
                desc: t('speedoDesc'),
                specs: [
                  t('speedoSpec1'),
                  t('speedoSpec2'),
                  t('speedoSpec3'),
                  t('speedoSpec4'),
                ],
                icon: Zap,
                image: '/beamscan-speedo.png',
              },
              {
                variant: 'Ringo',
                label: t('ringoLabel'),
                desc: t('ringoDesc'),
                specs: [
                  t('ringoSpec1'),
                  t('ringoSpec2'),
                  t('ringoSpec3'),
                  t('ringoSpec4'),
                ],
                icon: Settings,
                image: '/beamscan-ringo.png',
              },
              {
                variant: 'Mobilo',
                label: t('mobiloLabel'),
                desc: t('mobiloDesc'),
                specs: [
                  t('mobiloSpec1'),
                  t('mobiloSpec2'),
                  t('mobiloSpec3'),
                  t('mobiloSpec4'),
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
                  <span className="section-label mb-4 block">{t('coreApplicationsLabel')}</span>
                  <h3 className="text-xl font-bold text-ink-900 leading-snug mb-3">
                    {t('coreApplicationsTitle')}
                  </h3>
                  <p className="text-[13px] text-ink-500 leading-relaxed">
                    {t('coreApplicationsDesc')}
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: t('appBeamDataCommissioning'), icon: FlaskConical },
                    { label: t('appLinacAcceptanceTesting'), icon: CheckCircle2 },
                    { label: t('appTPSValidation'), icon: Cpu },
                    { label: t('appMonitorCalibration'), icon: Activity },
                    { label: t('appBeamTuning'), icon: Settings },
                    { label: t('appLinacQAPrograms'), icon: Shield },
                    { label: t('appReferenceDosimetry'), icon: Microscope },
                    { label: t('appSmallFieldDosimetry'), icon: Zap },
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
                  <p className="text-[13px] font-semibold text-ink-900">{t('beamscanBrochureTitle')}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">{t('beamscanBrochureDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  {t('downloadPDF')}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  {t('requestInformation')} <ArrowRight size={13} />
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
            country={t('ashlandCountry')}
            name={t('ashlandName')}
            tagline={t('ashlandTagline')}
            description={t('ashlandDesc')}
            logo="/logo-ashland.png"
            website="https://www.ashland.com"
            credential={t('ashlandCredential')}
            visitWebsiteLabel={t('visitWebsite')}
          />

          {/* ── Gafchromic films overview ──────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">{t('featuredTechnology')}</span>
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
                      {t('gafchromicCategory')}
                    </span>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                      {t('gafchromicTitle')}
                      <br />
                      <span className="text-brand-400">{t('gafchromicSubtitle')}</span>
                    </h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      {t('gafchromicDesc')}
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-3">
                      {[
                        { label: t('gafchromicStatResolutionLabel'), value: t('gafchromicStatResolutionValue') },
                        { label: t('gafchromicStatAccuracyLabel'), value: t('gafchromicStatAccuracyValue') },
                        { label: t('gafchromicStatFilmTypesLabel'), value: t('gafchromicStatFilmTypesValue') },
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
                    {t('gafchromicImageCaption')}
                  </p>

                  {/* Key qualities */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      t('gafchromicFeat1'),
                      t('gafchromicFeat2'),
                      t('gafchromicFeat3'),
                      t('gafchromicFeat4'),
                      t('gafchromicFeat5'),
                      t('gafchromicFeat6'),
                      t('gafchromicFeat7'),
                      t('gafchromicFeat8'),
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
                {t('radiotherapyFilmsLabel')}
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: 'EBT4',
                  use: t('ebt4Use'),
                  dose: '0.2 – 10 Gy',
                  tag: t('ebt4Tag'),
                },
                {
                  name: 'EBT3',
                  use: t('ebt3Use'),
                  dose: '0.2 – 10 Gy',
                  tag: t('ebt3Tag'),
                },
                {
                  name: 'EBT3P',
                  use: t('ebt3pUse'),
                  dose: '0.2 – 10 Gy',
                  tag: t('ebt3pTag'),
                },
                {
                  name: 'EBT-XD',
                  use: t('ebtXDUse'),
                  dose: '0.4 – 40 Gy',
                  tag: t('ebtXDTag'),
                },
                {
                  name: 'HD-V2',
                  use: t('hdV2Use'),
                  dose: '10 – 1000 Gy',
                  tag: t('hdV2Tag'),
                },
                {
                  name: 'MD-V3',
                  use: t('mdV3Use'),
                  dose: '1 – 100 Gy',
                  tag: t('mdV3Tag'),
                },
                {
                  name: 'RTQA2',
                  use: t('rtqa2Use'),
                  dose: '0.2 – 10 Gy',
                  tag: t('rtqa2Tag'),
                },
                {
                  name: 'CK Films',
                  use: t('ckFilmsUse'),
                  dose: 'EBT4 / EBT-XD',
                  tag: t('ckFilmsTag'),
                },
              ].map((film, i) => (
                <AnimatedSection key={film.name} delay={i * 0.04}>
                  <div className="bg-white border border-ink-200/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 overflow-hidden h-full flex flex-col">
                    {/* Image area */}
                    <div className="bg-ink-50 border-b border-ink-200/60 p-6 flex flex-col items-center justify-center gap-2.5" style={{ aspectRatio: '1' }}>
                      <div className="w-9 h-9 rounded-lg bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Layers size={16} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-ink-300 text-center">{t('imagePlaceholder')}</p>
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
                        {t('doseRange')} {film.dose}
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
                {t('radiologyFilmsLabel')}
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: 'XR-CT3',
                  use: t('xrCT3Use'),
                  dose: '2 – 20 cGy',
                  tag: t('xrCT3Tag'),
                },
                {
                  name: 'XR-RV3',
                  use: t('xrRV3Use'),
                  dose: '0.2 – 10 Gy',
                  tag: t('xrRV3Tag'),
                },
                {
                  name: 'XR-M3',
                  use: t('xrM3Use'),
                  dose: '2 – 20 cGy',
                  tag: t('xrM3Tag'),
                },
                {
                  name: 'LD-V1',
                  use: t('ldV1Use'),
                  dose: '2 – 20 cGy',
                  tag: t('ldV1Tag'),
                },
              ].map((film, i) => (
                <AnimatedSection key={film.name} delay={i * 0.06}>
                  <div className="bg-white border border-ink-200/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-200 overflow-hidden h-full flex flex-col">
                    <div className="bg-ink-50 border-b border-ink-200/60 p-6 flex flex-col items-center justify-center gap-2.5" style={{ aspectRatio: '1' }}>
                      <div className="w-9 h-9 rounded-lg bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Layers size={16} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] text-ink-300 text-center">{t('imagePlaceholder')}</p>
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
                        {t('doseRange')} {film.dose}
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
                <span className="section-label mb-3 block">{t('qaApplicationsLabel')}</span>
                <p className="text-[13px] text-ink-500 max-w-xl">
                  {t('qaApplicationsDesc')}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { label: t('qaApp1Label'), sub: t('qaApp1Sub') },
                  { label: t('qaApp2Label'), sub: t('qaApp2Sub') },
                  { label: t('qaApp3Label'), sub: t('qaApp3Sub') },
                  { label: t('qaApp4Label'), sub: t('qaApp4Sub') },
                  { label: t('qaApp5Label'), sub: t('qaApp5Sub') },
                  { label: t('qaApp6Label'), sub: t('qaApp6Sub') },
                  { label: t('qaApp7Label'), sub: t('qaApp7Sub') },
                  { label: t('qaApp8Label'), sub: t('qaApp8Sub') },
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
                      <p className="text-[9px] text-ink-300 text-center">{t('imagePlaceholder')}</p>
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
                  <p className="text-[13px] font-semibold text-ink-900">{t('gafchromicBrochureTitle')}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">{t('gafchromicBrochureDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  {t('downloadPDF')}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  {t('requestInformation')} <ArrowRight size={13} />
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
            country={t('klarityCountry')}
            name={t('klarityName')}
            tagline={t('klarityTagline')}
            description={t('klarityDesc')}
            logo="/logo-klarity.png"
            website="https://www.klarity-medical.com"
            credential={t('klarityCredential')}
            visitWebsiteLabel={t('visitWebsite')}
          />

          {/* ── UNO™ All-In-One hero ───────────────────────────── */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="section-label">{t('featuredTechnology')}</span>
            </div>

            <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left — main product image (flagship) */}
                <div className="border-r border-ink-200/60">
                  <div className="relative" style={{ minHeight: '400px' }}>
                    <Image
                      src="/klarity uno.jpeg"
                      alt="Klarity UNO™ All-In-One System"
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="bg-white border-t border-ink-200/60 px-8 py-3 text-center">
                    <p className="text-[11px] text-ink-400">
                      {t('klarityUNOImageCaption')}
                    </p>
                  </div>
                </div>

                {/* Right — product details */}
                <div className="p-8 lg:p-10 flex flex-col gap-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50 border border-brand-100 text-brand-600 text-[10px] font-bold uppercase tracking-widest w-fit mb-3">
                      {t('klarityFlagshipBadge')}
                    </span>
                    <h3 className="text-2xl font-black text-ink-950 leading-tight tracking-tight mb-2">
                      {t('klarityUNOTitle')}
                      <br />
                      <span className="text-brand-600">{t('klarityUNOSubtitle')}</span>
                    </h3>
                    <p className="text-[13px] text-ink-500 leading-[1.8]">
                      {t('klarityUNODesc')}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
                      {t('klarityUNOClinicalContextLabel')}
                    </h4>
                    {[
                      t('klarityUNOPoint1'),
                      t('klarityUNOPoint2'),
                      t('klarityUNOPoint3'),
                      t('klarityUNOPoint4'),
                    ].map(point => (
                      <div key={point} className="flex items-start gap-2.5 text-[13px] text-ink-600">
                        <CheckCircle2 size={14} className="text-brand-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-ink-50 border border-ink-200/60 mt-2">
                    <p className="text-[12px] text-ink-500 leading-relaxed">
                      <span className="font-semibold text-ink-700">{t('klarityUNOConfigNoteLabel')}</span>{' '}
                      {t('klarityUNOConfigNote')}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 group"
                    >
                      {t('klarityEnquireLink')}
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
                {t('klarityProductGalleryLabel')}
              </h3>
              <div className="flex-1 h-px bg-ink-200/60" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: t('klarityGallery1Label'), caption: t('klarityGallery1Caption') },
                { label: t('klarityGallery2Label'), caption: t('klarityGallery2Caption') },
                { label: t('klarityGallery3Label'), caption: t('klarityGallery3Caption') },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.08}>
                  <div className="flex flex-col gap-3">
                    <div className="bg-ink-50 border border-ink-200/70 rounded-xl p-10 flex flex-col items-center justify-center gap-3" style={{ aspectRatio: '4/3' }}>
                      <div className="w-11 h-11 rounded-xl bg-white border border-ink-200/60 shadow-card flex items-center justify-center">
                        <Cpu size={18} className="text-ink-400" strokeWidth={1.5} />
                      </div>
                      <div className="text-center">
                        <p className="text-[12px] font-semibold text-ink-500">{item.label}</p>
                        <p className="text-[10px] text-ink-300 mt-0.5">{t('imagePlaceholder')}</p>
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
                  <p className="text-[13px] font-semibold text-ink-900">{t('klarityBrochureTitle')}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">{t('klarityBrochureDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-200/70 text-[12px] font-semibold text-ink-500 bg-ink-50 cursor-not-allowed opacity-60">
                  <Download size={13} />
                  {t('downloadPDF')}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  {t('requestInformation')} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section className="section-padding bg-ink-50 mx-3 sm:mx-5 lg:mx-8 rounded-3xl overflow-hidden relative">
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgb(229 25 25 / 0.08) 0%, transparent 65%)',
          }}
        />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-white mb-6">
                {t('bottomCTALabel')}
              </span>
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-ink-900 mb-4 leading-[1.12] tracking-tight">
                {t('bottomCTATitle')}
              </h2>
              <p className="text-ink-600 text-[14px] leading-[1.8] max-w-xl mx-auto mb-10">
                {t('bottomCTADesc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  {t('bottomCTABtn1')} <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  <Mail size={14} />
                  {t('bottomCTABtn2')}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
