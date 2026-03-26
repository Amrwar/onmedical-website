import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Calendar, Building2, MapPin, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionDivider from '@/components/ui/SectionDivider'
import ContactCTA from '@/components/sections/ContactCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    'Professional certifications and technical training credentials of Mohammed Osama — Founder & CEO of ON Medical Company. Over 20 years of verified expertise in radiotherapy and medical physics.',
}

export default async function CertificationsPage() {
  const t = await getTranslations('certifications')

  const certs = [
    {
      title: t('cert1Title'),
      issuer: t('cert1Issuer'),
      date: t('cert1Date'),
      country: t('cert1Country'),
      category: t('cert1Category'),
      description: t('cert1Desc'),
      topics: [
        t('cert1Topic1'),
        t('cert1Topic2'),
        t('cert1Topic3'),
        t('cert1Topic4'),
        t('cert1Topic5'),
      ],
      image: '/certificates/octavius-2026.png',
    },
    {
      title: t('cert2Title'),
      issuer: t('cert2Issuer'),
      date: t('cert2Date'),
      country: t('cert2Country'),
      category: t('cert2Category'),
      description: t('cert2Desc'),
      topics: [
        t('cert2Topic1'),
        t('cert2Topic2'),
        t('cert2Topic3'),
        t('cert2Topic4'),
        t('cert2Topic5'),
        t('cert2Topic6'),
      ],
      image: '/certificates/beamscan-2025.png',
    },
    {
      title: t('cert3Title'),
      issuer: t('cert3Issuer'),
      date: t('cert3Date'),
      country: t('cert3Country'),
      category: t('cert3Category'),
      description: t('cert3Desc'),
      topics: [
        t('cert3Topic1'),
        t('cert3Topic2'),
        t('cert3Topic3'),
      ],
      image: '/certificates/npic-2011.png',
    },
    {
      title: t('cert4Title'),
      issuer: t('cert4Issuer'),
      date: t('cert4Date'),
      country: t('cert4Country'),
      category: t('cert4Category'),
      description: t('cert4Desc'),
      topics: [
        t('cert4Topic1'),
        t('cert4Topic2'),
        t('cert4Topic3'),
        t('cert4Topic4'),
      ],
      image: '/certificates/npic-2009.png',
    },
    {
      title: t('cert5Title'),
      issuer: t('cert5Issuer'),
      date: t('cert5Date'),
      country: t('cert5Country'),
      category: t('cert5Category'),
      description: t('cert5Desc'),
      topics: [
        t('cert5Topic1'),
        t('cert5Topic2'),
        t('cert5Topic3'),
      ],
      image: '/certificates/hekmedical-2009.png',
    },
    {
      title: t('cert6Title'),
      issuer: t('cert6Issuer'),
      date: t('cert6Date'),
      country: t('cert6Country'),
      category: t('cert6Category'),
      description: t('cert6Desc'),
      topics: [
        t('cert6Topic1'),
        t('cert6Topic2'),
        t('cert6Topic3'),
      ],
      image: '/certificates/prowess-2009.png',
    },
    {
      title: t('cert7Title'),
      issuer: t('cert7Issuer'),
      date: t('cert7Date'),
      country: t('cert7Country'),
      category: t('cert7Category'),
      description: t('cert7Desc'),
      topics: [
        t('cert7Topic1'),
        t('cert7Topic2'),
        t('cert7Topic3'),
      ],
      image: '/certificates/kimal-2008.png',
    },
    {
      title: t('cert8Title'),
      issuer: t('cert8Issuer'),
      date: t('cert8Date'),
      country: t('cert8Country'),
      category: t('cert8Category'),
      description: t('cert8Desc'),
      topics: [
        t('cert8Topic1'),
        t('cert8Topic2'),
        t('cert8Topic3'),
        t('cert8Topic4'),
        t('cert8Topic5'),
      ],
      image: '/certificates/ptw-2008.png',
    },
    {
      title: t('cert9Title'),
      issuer: t('cert9Issuer'),
      date: t('cert9Date'),
      country: t('cert9Country'),
      category: t('cert9Category'),
      description: t('cert9Desc'),
      topics: [
        t('cert9Topic1'),
        t('cert9Topic2'),
        t('cert9Topic3'),
      ],
      image: '/certificates/jbh-2007.png',
    },
    {
      title: t('cert10Title'),
      issuer: t('cert10Issuer'),
      date: t('cert10Date'),
      country: t('cert10Country'),
      category: t('cert10Category'),
      description: t('cert10Desc'),
      topics: [
        t('cert10Topic1'),
        t('cert10Topic2'),
        t('cert10Topic3'),
      ],
      image: '/certificates/ptw-2006.png',
    },
    {
      title: t('cert11Title'),
      issuer: t('cert11Issuer'),
      date: t('cert11Date'),
      country: t('cert11Country'),
      category: t('cert11Category'),
      description: t('cert11Desc'),
      topics: [
        t('cert11Topic1'),
        t('cert11Topic2'),
        t('cert11Topic3'),
      ],
      image: '/certificates/invap-2005.png',
    },
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
                <span className="text-gradient-brand">{t('heroTitle2')}</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                {t('heroDesc')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Founder profile ───────────────────────────────── */}
      <SectionDivider bg="muted" />
      <section className="section-padding section-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

            {/* Photo */}
            <AnimatedSection direction="left" className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-80 lg:w-72 lg:h-[22rem] rounded-2xl overflow-hidden shadow-card-hover border border-ink-200">
                  <Image
                    src="/owner-1.jpeg"
                    alt={t('founderAlt')}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Credential badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-ink-200 shadow-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-ink-900 leading-tight">{t('credBadge11Certs')}</p>
                    <p className="text-[10px] text-ink-400">{t('credBadgePeriod')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection direction="right" className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <span className="section-label">{t('founderLabel')}</span>
                <h2 className="section-title !text-left text-2xl lg:text-[1.9rem] mt-2">
                  {t('founderName')}
                </h2>
                <p className="text-[13px] text-ink-500 mt-1">
                  {t('founderDegree')}
                </p>
              </div>

              <p className="text-[14px] text-ink-600 leading-relaxed">
                {t('founderBio')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: t('stat1Value'), label: t('stat1Label') },
                  { value: t('stat2Value'), label: t('stat2Label') },
                  { value: t('stat3Value'), label: t('stat3Label') },
                  { value: t('stat4Value'), label: t('stat4Label') },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-xl border border-ink-200 p-4 text-center shadow-sm">
                    <p className="text-2xl font-black text-brand-600 leading-none">{s.value}</p>
                    <p className="text-[11px] text-ink-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  t('tag1'), t('tag2'), t('tag3'), t('tag4'),
                  t('tag5'), t('tag6'), t('tag7'),
                ].map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-ink-100 text-ink-600 border border-ink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Certificates list ──────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label={t('certsLabel')}
              title={t('certsTitle')}
              subtitle={t('certsSubtitle')}
            />
          </AnimatedSection>

          <div className="space-y-6 mt-14">
            {certs.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i % 3 === 0 ? 0 : 0.06}>
                <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5">

                    {/* Certificate image */}
                    <div className="lg:col-span-2 relative bg-ink-50 border-b lg:border-b-0 lg:border-r border-ink-200/60 flex items-center justify-center p-6 min-h-[260px]">
                      <div className="relative w-full max-w-[300px] h-[220px] lg:h-[260px]">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Certificate details */}
                    <div className="lg:col-span-3 p-7 lg:p-9 flex flex-col gap-5">

                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-50 border border-brand-100 text-brand-700">
                          {cert.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[12px] text-ink-500">
                          <Calendar size={12} strokeWidth={1.75} className="text-brand-600" />
                          <span className="font-semibold text-ink-800">{cert.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-[16px] font-bold text-ink-900 leading-snug">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <div className="flex items-center gap-1.5">
                            <Building2 size={12} className="text-brand-600" strokeWidth={1.75} />
                            <span className="text-[12px] font-semibold text-ink-600">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-brand-600" strokeWidth={1.75} />
                            <span className="text-[12px] text-ink-400">{cert.country}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-ink-500 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Topics */}
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                          {t('topicsCovered')}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cert.topics.map(topic => (
                            <li key={topic} className="flex items-start gap-2 text-[12px] text-ink-600">
                              <CheckCircle2
                                size={13}
                                className="text-brand-600 mt-0.5 flex-shrink-0"
                                strokeWidth={2}
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
