import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Cpu, BookOpen, Mail, Phone, Award, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionDivider from '@/components/ui/SectionDivider'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About ON Medical Company',
    description:
      'Learn about ON Medical Company — established in 2014, specializing in oncology and radiotherapy equipment distribution in Egypt, representing international manufacturers including PTW Freiburg, Ashland Medical, and Klarity.',
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  const timelineEvents = [
    {
      year: t('timeline_e1Year'), title: t('timeline_e1Title'), description: t('timeline_e1Desc'),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15"/>
          <path d="M8 26L20 14l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 26V20a2 2 0 012-2h8a2 2 0 012 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 28h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11h-3M24 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      year: t('timeline_e2Year'), title: t('timeline_e2Title'), description: t('timeline_e2Desc'),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15"/>
          <rect x="9" y="17" width="22" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 17v-3a7 7 0 0114 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 24h8M20 21v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="24" r="1.5" fill="currentColor"/>
        </svg>
      ),
    },
    {
      year: t('timeline_e3Year'), title: t('timeline_e3Title'), description: t('timeline_e3Desc'),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15"/>
          <circle cx="13" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="27" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 29c0-3.314 1.79-6 4-6s4 2.686 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M23 29c0-3.314 1.79-6 4-6s4 2.686 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 22c0-1.657.895-3 2-3s2 1.343 2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      year: t('timeline_e4Year'), title: t('timeline_e4Title'), description: t('timeline_e4Desc'),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15"/>
          <path d="M9 28l7-8 5 5 4-6 6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 13h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M31 13l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  const expertiseAreas = [
    t('area1'), t('area2'), t('area3'), t('area4'), t('area5'), t('area6'),
  ]

  const visionGoals = [
    t('visionGoal1'), t('visionGoal2'), t('visionGoal3'), t('visionGoal4'), t('visionGoal5'),
  ]

  const companyFacts = [
    { label: t('fact1Label'), value: t('fact1Value') },
    { label: t('fact2Label'), value: t('fact2Value') },
    { label: t('fact3Label'), value: t('fact3Value') },
    { label: t('fact4Label'), value: t('fact4Value') },
    { label: t('fact5Label'), value: t('fact5Value') },
    { label: t('fact6Label'), value: t('fact6Value') },
  ]

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
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
                {t('heroH1a')}{' '}
                <span className="text-gradient-brand">{t('heroH1b')}</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                {t('heroDesc')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Company Overview ──────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <AnimatedSection direction="left" className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center w-fit gap-2">
                  <Image
                    src="/logo-onmedical.png"
                    alt="ON Medical Company"
                    width={160}
                    height={46}
                    className="h-10 w-auto object-contain mix-blend-multiply"
                  />
                  <span className="section-label">{t('overviewLabel')}</span>
                </div>
                <h2 className="section-title !text-left">{t('overviewTitle')}</h2>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-500">
                <p>{t('overviewP1')}</p>
                <p>{t('overviewP2')}</p>
                <p>{t('overviewP3')}</p>
                <p>{t('overviewP4')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-ink-200 shadow-card">
                <div className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400" />
                <div className="px-7 py-5 border-b border-ink-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse-dot" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-400">
                    {t('profileLabel')}
                  </span>
                </div>
                <div className="divide-y divide-ink-100">
                  {companyFacts.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 px-7 py-4 hover:bg-ink-50 transition-colors">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-ink-400 font-semibold">
                        {label}
                      </span>
                      <span className="text-[13px] font-medium text-ink-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Founder / Leadership ──────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            {/* Leadership icon — silhouette of person at podium */}
            <div className="flex justify-center mb-5">
              <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Person head */}
                <circle cx="32" cy="10" r="8" fill="#1a1a1a"/>
                {/* Person body */}
                <path d="M18,38 C18,28 24,22 32,22 C40,22 46,28 46,38 Z" fill="#1a1a1a"/>
                {/* Podium top */}
                <rect x="14" y="38" width="36" height="4" rx="1.5" fill="#CC1212"/>
                {/* Podium body */}
                <path d="M20,42 L18,58 L46,58 L44,42 Z" fill="#CC1212" opacity="0.85"/>
                {/* Podium front panel */}
                <rect x="24" y="46" width="16" height="8" rx="1" fill="rgba(255,255,255,0.20)"/>
                {/* Star / badge on podium */}
                <circle cx="32" cy="50" r="3" fill="rgba(255,255,255,0.55)"/>
                {/* Left arm raised */}
                <path d="M18,38 Q10,30 12,22" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" fill="none"/>
                {/* Right arm raised */}
                <path d="M46,38 Q54,30 52,22" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" fill="none"/>
                {/* Tie */}
                <path d="M30,22 L32,34 L34,22" fill="#CC1212" opacity="0.9"/>
              </svg>
            </div>
            <SectionHeader
              label={t('leadershipLabel')}
              title={t('leadershipTitle')}
              subtitle={t('leadershipSubtitle')}
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Photos */}
            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {/* Photo 1 */}
                <div className="rounded-2xl shadow-[0_4px_24px_rgb(0_0_0_/_0.10)]"
                  style={{ borderTop: '3px solid #CC1212', borderBottom: '3px solid #CC1212', borderLeft: '3px solid white', borderRight: '3px solid white' }}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <Image
                      src="/owner-1.jpeg"
                      alt="Osama Hefny — Founder & Managing Director, ON Medical Company"
                      fill
                      className="object-cover object-top"
                      sizes="25vw"
                    />
                  </div>
                </div>
                {/* Photo 2 */}
                <div className="mt-8 rounded-2xl shadow-[0_4px_24px_rgb(0_0_0_/_0.08)]"
                  style={{ borderTop: '3px solid #CC1212', borderBottom: '3px solid #CC1212', borderLeft: '3px solid white', borderRight: '3px solid white' }}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <Image
                      src="/owner-3.jpeg"
                      alt="Osama Hefny — ON Medical Company"
                      fill
                      className="object-cover object-center"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio content */}
            <AnimatedSection direction="right" className="lg:col-span-7 flex flex-col gap-7">

              {/* Name & title */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-brand-600 rounded-full" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {t('founderRole')}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-ink-900 tracking-tight">
                  {t('founderName')}
                </h2>
                <p className="text-ink-500 text-sm mt-1">{t('founderTitle')}</p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-600">
                <p>{t('founderBio1')}</p>
                <p>{t('founderBio2')}</p>
                <p>{t('founderBio3')}</p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Award,    label: t('credExperience'),   value: t('credExperienceVal') },
                  { icon: Users,    label: t('credLinacs'),       value: t('credLinacsVal') },
                  { icon: BookOpen, label: t('credPublications'), value: t('credPublicationsVal') },
                  { icon: Award,    label: t('credEducation'),    value: t('credEducationVal') },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-ink-200 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
                      <Icon size={15} className="text-brand-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-ink-400 font-semibold">{label}</p>
                      <p className="text-[12px] font-bold text-ink-900 mt-0.5 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key roles timeline */}
              <div className="space-y-2.5 pt-1">
                {[
                  { period: t('timeline1Period'), role: t('timeline1Role'), org: t('timeline1Org') },
                  { period: t('timeline2Period'), role: t('timeline2Role'), org: t('timeline2Org') },
                  { period: t('timeline3Period'), role: t('timeline3Role'), org: t('timeline3Org') },
                  { period: t('timeline4Period'), role: t('timeline4Role'), org: t('timeline4Org') },
                  { period: t('timeline5Period'), role: t('timeline5Role'), org: t('timeline5Org') },
                ].map(({ period, role, org }) => (
                  <div key={period} className="flex items-start gap-3 text-[13px]">
                    <span className="text-brand-600 font-semibold w-28 flex-shrink-0 text-[11px] pt-0.5">{period}</span>
                    <div>
                      <span className="font-semibold text-ink-900">{role}</span>
                      <span className="text-ink-400"> · {org}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-ink-200">
                <a
                  href="mailto:osama@onmedical.net"
                  className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors font-medium"
                >
                  <Mail size={14} className="text-brand-600" />
                  osama@onmedical.net
                </a>
                <a
                  href="tel:+201066449661"
                  className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors font-medium"
                >
                  <Phone size={14} className="text-brand-600" />
                  +20 106 644 9661
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            {/* Red compass above OUR DIRECTION */}
            <div className="flex justify-center mb-5">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle cx="32" cy="32" r="28" fill="#1a1a1a" stroke="#CC1212" strokeWidth="2"/>
                {/* Inner ring */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#CC1212" strokeWidth="0.8" strokeOpacity="0.4"/>
                {/* Cardinal tick marks */}
                <line x1="32" y1="6"  x2="32" y2="11" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="32" y1="53" x2="32" y2="58" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6"  y1="32" x2="11" y2="32" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="53" y1="32" x2="58" y2="32" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                {/* Diagonal ticks */}
                <line x1="13" y1="13" x2="16.5" y2="16.5" stroke="#CC1212" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                <line x1="51" y1="13" x2="47.5" y2="16.5" stroke="#CC1212" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                <line x1="13" y1="51" x2="16.5" y2="47.5" stroke="#CC1212" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                <line x1="51" y1="51" x2="47.5" y2="47.5" stroke="#CC1212" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                {/* N label */}
                <text x="32" y="20" textAnchor="middle" fill="#CC1212" fontSize="6" fontWeight="bold" fontFamily="sans-serif">N</text>
                {/* North needle — red */}
                <path d="M32,32 L27,44 L32,40 L37,44 Z" fill="#CC1212"/>
                {/* South needle — white/grey */}
                <path d="M32,32 L27,20 L32,24 L37,20 Z" fill="rgba(255,255,255,0.35)"/>
                {/* Centre pivot */}
                <circle cx="32" cy="32" r="3.5" fill="#CC1212"/>
                <circle cx="32" cy="32" r="1.5" fill="#1a1a1a"/>
              </svg>
            </div>
            <SectionHeader label={t('missionVisionLabel')} title={t('missionVisionTitle')} />
          </AnimatedSection>

          <div className="relative mt-14">

            {/* Left arrow → pointing into Mission block */}
            <div className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-1">
              <svg width="44" height="28" viewBox="0 0 44 28" fill="none" className="animate-arrow-pulse">
                <path d="M2 14 L34 14" stroke="#CC1212" strokeWidth="3" strokeLinecap="round"/>
                <path d="M26 5 L42 14 L26 23" stroke="#CC1212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Right arrow ← pointing into Vision block */}
            <div className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-1">
              <svg width="44" height="28" viewBox="0 0 44 28" fill="none" className="animate-arrow-pulse-delay">
                <path d="M42 14 L10 14" stroke="#CC1212" strokeWidth="3" strokeLinecap="round"/>
                <path d="M18 5 L2 14 L18 23" stroke="#CC1212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Mission */}
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 lg:p-10 h-full flex flex-col gap-6 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-card-hover">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-t-2xl" />
                  {/* Pinboard with red pin */}
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Board */}
                    <rect x="4" y="6" width="44" height="34" rx="3" fill="#1a1a1a"/>
                    <rect x="4" y="6" width="44" height="34" rx="3" stroke="#333" strokeWidth="1"/>
                    {/* Board frame highlight */}
                    <rect x="6" y="8" width="40" height="30" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="0.8"/>
                    {/* Paper on board */}
                    <rect x="10" y="12" width="32" height="22" rx="1.5" fill="#f5f0e8"/>
                    {/* Paper lines */}
                    <line x1="14" y1="18" x2="38" y2="18" stroke="#d4c9b0" strokeWidth="1"/>
                    <line x1="14" y1="22" x2="38" y2="22" stroke="#d4c9b0" strokeWidth="1"/>
                    <line x1="14" y1="26" x2="32" y2="26" stroke="#d4c9b0" strokeWidth="1"/>
                    {/* Pin shadow */}
                    <ellipse cx="27" cy="16" rx="4" ry="1.5" fill="rgba(0,0,0,0.25)"/>
                    {/* Pin head */}
                    <circle cx="26" cy="13" r="5" fill="#CC1212"/>
                    <circle cx="24.5" cy="11.5" r="1.5" fill="rgba(255,255,255,0.35)"/>
                    {/* Pin needle */}
                    <line x1="26" y1="17" x2="26" y2="24" stroke="#991111" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Board leg / stand bottom */}
                    <rect x="20" y="40" width="12" height="3" rx="1.5" fill="#1a1a1a"/>
                    <rect x="23" y="39" width="6" height="3" rx="1" fill="#222"/>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 mb-1">{t('missionTitle')}</h3>
                    <div className="w-8 h-0.5 rounded-full bg-brand-600 mb-5" />
                    <p className="text-ink-500 leading-[1.8] text-[14px] mb-4">{t('missionP1')}</p>
                    <p className="text-ink-500 leading-[1.8] text-[14px]">{t('missionP2')}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision */}
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 lg:p-10 h-full flex flex-col gap-6 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-card-hover">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-600 to-brand-400 rounded-l-2xl" />
                  {/* Red glasses with black handles */}
                  <svg width="72" height="36" viewBox="0 0 72 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Left arm */}
                    <path d="M2,14 L13,16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
                    {/* Right arm */}
                    <path d="M70,14 L59,16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
                    {/* Left lens frame */}
                    <circle cx="20" cy="20" r="11" fill="#CC1212" stroke="#991111" strokeWidth="1.5"/>
                    {/* Left lens glass */}
                    <circle cx="20" cy="20" r="8.5" fill="rgba(204,18,18,0.18)"/>
                    {/* Left lens highlight */}
                    <path d="M14,15 Q17,12 21,14" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    {/* Bridge */}
                    <path d="M31,20 Q36,16 41,20" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                    {/* Right lens frame */}
                    <circle cx="52" cy="20" r="11" fill="#CC1212" stroke="#991111" strokeWidth="1.5"/>
                    {/* Right lens glass */}
                    <circle cx="52" cy="20" r="8.5" fill="rgba(204,18,18,0.18)"/>
                    {/* Right lens highlight */}
                    <path d="M46,15 Q49,12 53,14" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 mb-1">{t('visionTitle')}</h3>
                    <div className="w-8 h-0.5 rounded-full bg-brand-600 mb-5" />
                    <p className="text-ink-600 leading-[1.8] text-[14px] mb-6">{t('visionP')}</p>
                    <ul className="space-y-3">
                      {visionGoals.map(goal => (
                        <li key={goal} className="flex items-start gap-2.5 text-[13px] text-ink-600">
                          <CheckCircle2
                            size={14}
                            className="text-brand-600 mt-0.5 flex-shrink-0"
                            strokeWidth={2}
                          />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── History Timeline ──────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            {/* History book + decade icon */}
            <div className="flex justify-center mb-5">
              <svg width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ── Open book ── */}
                {/* Left page — red */}
                <path d="M45,10 C45,10 30,6 10,8 C7,8 6,9.5 6,12 L6,54 C6,56.5 7,58 10,58 C30,56 45,60 45,60 Z" fill="#CC1212"/>
                {/* Left page lines */}
                <line x1="13" y1="20" x2="41" y2="18" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="13" y1="26" x2="41" y2="24" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="13" y1="32" x2="41" y2="30" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="13" y1="38" x2="41" y2="36" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="13" y1="44" x2="35" y2="42" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" strokeLinecap="round"/>
                {/* Right page — dark */}
                <path d="M45,10 C45,10 60,6 80,8 C83,8 84,9.5 84,12 L84,54 C84,56.5 83,58 80,58 C60,56 45,60 45,60 Z" fill="#1a1a1a"/>
                {/* Right page lines */}
                <line x1="77" y1="20" x2="49" y2="18" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="77" y1="26" x2="49" y2="24" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="77" y1="32" x2="49" y2="30" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="77" y1="38" x2="49" y2="36" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="77" y1="44" x2="55" y2="42" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
                {/* Spine */}
                <line x1="45" y1="10" x2="45" y2="60" stroke="#CC1212" strokeWidth="3" strokeLinecap="round"/>
                {/* Bottom curve */}
                <path d="M6,54 Q45,64 84,54" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                {/* ── "10" badge on right page — decade marker ── */}
                {/* Ribbon/badge background */}
                <rect x="54" y="17" width="22" height="22" rx="3" fill="#CC1212" opacity="0.92"/>
                {/* "1" digit */}
                <line x1="63" y1="21" x2="63" y2="35" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                <path d="M60,24 L63,21" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                {/* "0" digit */}
                <rect x="66.5" y="21" width="6" height="14" rx="3" fill="none" stroke="white" strokeWidth="2.4"/>
              </svg>
            </div>
            <SectionHeader
              label={t('historyLabel')}
              title={t('historyTitle')}
              subtitle={t('historySubtitle')}
            />
          </AnimatedSection>

          <div className="relative mt-16">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-600/30 to-transparent -translate-x-px" />
            <div className="lg:hidden absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-600/30 to-transparent" />

            <div className="space-y-10 lg:space-y-12">
              {timelineEvents.map((event, i) => (
                <AnimatedSection key={event.year} delay={i * 0.1}>
                  <div
                    className={`relative flex gap-6 lg:gap-0 ${
                      i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="ml-10 lg:ml-0 lg:w-[46%] lg:px-8">
                      <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8" style={{ borderTop: '2px solid #CC1212', borderBottom: '2px solid #CC1212', borderLeft: '2px solid #e5e7eb', borderRight: '2px solid #e5e7eb' }}>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 flex-shrink-0 text-brand-600">
                            {event.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.15em] mb-2 block">
                              {event.year}
                            </span>
                            <h3 className="text-[16px] font-bold text-ink-900 mb-2.5 leading-snug">
                              {event.title}
                            </h3>
                            <p className="text-[13px] text-ink-500 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-6
                                  w-[17px] h-[17px] rounded-full bg-brand-600 border-4 border-white
                                  shadow-[0_0_0_1px_rgb(204_18_18_/_0.3)] z-10"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Expertise ───────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <AnimatedSection direction="left" className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {/* Technical / CPU chip icon */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Chip body */}
                  <rect x="16" y="16" width="32" height="32" rx="3" fill="#1a1a1a"/>
                  {/* Inner processor die */}
                  <rect x="22" y="22" width="20" height="20" rx="1.5" fill="#CC1212"/>
                  {/* Die grid lines */}
                  <line x1="22" y1="28" x2="42" y2="28" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
                  <line x1="22" y1="34" x2="42" y2="34" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
                  <line x1="28" y1="22" x2="28" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
                  <line x1="34" y1="22" x2="34" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
                  {/* Centre highlight */}
                  <rect x="27" y="27" width="10" height="10" rx="1" fill="rgba(255,255,255,0.18)"/>
                  {/* Top pins */}
                  <line x1="23" y1="16" x2="23" y2="10" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="29" y1="16" x2="29" y2="10" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="35" y1="16" x2="35" y2="10" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="41" y1="16" x2="41" y2="10" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  {/* Bottom pins */}
                  <line x1="23" y1="48" x2="23" y2="54" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="29" y1="48" x2="29" y2="54" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="35" y1="48" x2="35" y2="54" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="41" y1="48" x2="41" y2="54" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  {/* Left pins */}
                  <line x1="16" y1="23" x2="10" y2="23" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="29" x2="10" y2="29" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="35" x2="10" y2="35" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="41" x2="10" y2="41" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  {/* Right pins */}
                  <line x1="48" y1="23" x2="54" y2="23" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="29" x2="54" y2="29" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="35" x2="54" y2="35" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="41" x2="54" y2="41" stroke="#CC1212" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="section-label">{t('expertiseLabel')}</span>
                <h2 className="section-title !text-left">{t('expertiseTitle')}</h2>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-500">
                <p>{t('expertiseP1')}</p>
                <p>{t('expertiseP2')}</p>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-ink-200 shadow-card">
                <div className="w-11 h-11 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">{t('researchTitle')}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">{t('researchSub')}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-ink-200/60">
                  <div className="icon-box">
                    <Cpu size={17} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[15px] font-bold text-ink-900">
                    {t('expertiseAreaTitle')}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {expertiseAreas.map((area, i) => (
                    <div
                      key={area}
                      className="flex items-center gap-4 p-4 rounded-lg bg-ink-50 border border-ink-200/60 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 group"
                    >
                      <span className="text-[11px] font-black text-brand-600 w-6 text-center flex-shrink-0 group-hover:text-brand-700">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] font-medium text-ink-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
