import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/ui/ContactForm'
import ContactFaq from '@/components/ui/ContactFaq'
import SectionDivider from '@/components/ui/SectionDivider'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us',
    description:
      'Contact ON Medical Company — Cairo, Egypt. Reach our team for equipment enquiries, technical support, after-sales service, or partnership discussions.',
  }
}

export default async function ContactPage() {
  const t = await getTranslations('contact')

  const contactDetails = [
    {
      icon: MapPin,
      label: t('address'),
      lines: ['Al Shahid Ahmed Abd Al Naby Bayoumi St. 548', 'Nasr City, Cairo, Egypt'],
      href: 'https://maps.google.com/?q=30.050789,31.398390',
    },
    {
      icon: Phone,
      label: t('telephoneFax'),
      lines: ['+20 2 24115184'],
      href: 'tel:+20224115184',
    },
    {
      icon: Phone,
      label: t('mobile'),
      lines: ['+20 155 217 6156'],
      href: 'tel:+201552176156',
    },
    {
      icon: Mail,
      label: t('email'),
      lines: ['osama@onmedical.net'],
      href: 'mailto:osama@onmedical.net',
    },
    {
      icon: Clock,
      label: t('workingHours'),
      lines: [t('workingHoursLine1'), t('workingHoursLine2')],
      href: null,
    },
  ]

  const audienceCards = [
    { title: t('card1Title'), desc: t('card1Desc'), action: t('card1Action') },
    { title: t('card2Title'), desc: t('card2Desc'), action: t('card2Action') },
    { title: t('card3Title'), desc: t('card3Desc'), action: t('card3Action') },
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
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-brand-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                {t('heroLabel')}
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                {t('heroTitle1')}{' '}
                <span className="text-gradient-brand">{t('heroTitle2')}</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8]">
                {t('heroDesc')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact section ───────────────────────────────── */}
      <SectionDivider bg="muted" />
      <section className="section-padding section-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* Contact details — left */}
            <AnimatedSection direction="left" className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="section-label">{t('getInTouch')}</span>
                <h2 className="section-title !text-left text-2xl lg:text-[1.75rem]">
                  {t('contactInfoTitle')}
                </h2>
                <p className="text-[13px] text-ink-500 leading-relaxed">
                  {t('contactInfoDesc')}
                </p>
              </div>

              {/* Contact info card */}
              <div className="bg-white rounded-2xl border border-ink-200/70 shadow-card p-6 space-y-5">
                {(contactDetails as {
                  icon: typeof MapPin
                  label: string
                  lines: string[]
                  href: string | null
                }[]).map(({ icon: Icon, label, lines, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 pb-5 border-b border-ink-200/60 last:border-0 last:pb-0"
                  >
                    <div className="icon-box flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-brand-600" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-400">
                        {label}
                      </span>
                      {lines.map(line =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            className="text-[13px] font-medium text-ink-800 hover:text-brand-600 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <span key={line} className="text-[13px] text-ink-800">
                            {line}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location visual */}
              <div className="bg-white rounded-2xl border border-ink-200 shadow-card overflow-hidden">
                <div className="h-44 flex flex-col items-center justify-center gap-2.5 relative bg-brand-50">
                  <div
                    className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50"
                    style={{ backgroundSize: '18px 18px' }}
                  />
                  <MapPin size={28} className="text-brand-600 relative z-10" strokeWidth={1.5} />
                  <p className="text-ink-900 text-[13px] font-semibold relative z-10">
                    Nasr City, Cairo, Egypt
                  </p>
                  <p className="text-ink-400 text-[11px] relative z-10">
                    Al Shahid Ahmed Abd Al Naby Bayoumi St. 548
                  </p>
                </div>
                <div className="px-5 py-3.5 border-t border-ink-200">
                  <a
                    href="https://maps.google.com/?q=30.050789,31.398390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-600 hover:text-brand-700 transition-colors text-center block"
                  >
                    {t('openMaps')}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form — right (client component) */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Audience CTA cards ────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection className="mb-12">
            <SectionHeader
              label={t('whoWeHelpLabel')}
              title={t('whoWeHelpTitle')}
              subtitle={t('whoWeHelpSubtitle')}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audienceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="card p-7 flex flex-col gap-4 h-full group">
                  <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-[15px] font-bold text-ink-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-ink-500 leading-relaxed flex-1">{card.desc}</p>
                  <a
                    href="mailto:osama@onmedical.net"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 hover:text-brand-700 group/link mt-auto"
                  >
                    {card.action}
                    <ArrowRight
                      size={13}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <SectionDivider bg="muted" />
      <section className="section-padding section-alt">
        <div className="container-site max-w-3xl">
          <AnimatedSection>
            <SectionHeader
              label={t('faqLabel')}
              title={t('faqTitle')}
              subtitle={t('faqSubtitle')}
            />
          </AnimatedSection>
          <div className="mt-12">
            <ContactFaq />
          </div>
        </div>
      </section>
    </>
  )
}
