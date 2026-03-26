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
      <SectionDivider />
      <section id="contact-form" className="section-padding bg-white">
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
              <div className="rounded-2xl overflow-hidden" style={{ borderTop: '3px solid #CC1212', borderBottom: '3px solid #CC1212', borderLeft: '3px solid #e5e7eb', borderRight: '3px solid #e5e7eb' }}>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Audience CTA cards ────────────────────────────── */}
      <SectionDivider />
      <section className="section-padding bg-white">
        <div className="container-site">
          <AnimatedSection className="mb-12">
            {/* Handshake icon above WHO WE HELP */}
            <div className="flex justify-center mb-5">
              <svg width="88" height="60" viewBox="0 0 88 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ── Left hand (black) coming from left ── */}
                {/* Sleeve / wrist */}
                <path d="M2,42 L2,36 L18,30 L24,32" fill="#1a1a1a"/>
                {/* Palm */}
                <path d="M18,30 L24,32 L30,28 L34,26 L34,34 L28,38 L18,40 Z" fill="#1a1a1a"/>
                {/* Index finger */}
                <path d="M30,28 L32,20 L36,20 L34,28" fill="#1a1a1a"/>
                {/* Middle finger */}
                <path d="M33,27 L35,18 L39,19 L37,27" fill="#1a1a1a"/>
                {/* Ring finger */}
                <path d="M36,27 L37,20 L41,21 L40,28" fill="#1a1a1a"/>
                {/* Pinky */}
                <path d="M39,28 L40,22 L43,23 L42,29" fill="#1a1a1a"/>
                {/* Thumb */}
                <path d="M18,30 L14,26 L17,22 L22,28" fill="#1a1a1a"/>

                {/* ── Right hand (red) coming from right ── */}
                {/* Sleeve / wrist */}
                <path d="M86,42 L86,36 L70,30 L64,32" fill="#CC1212"/>
                {/* Palm */}
                <path d="M70,30 L64,32 L58,28 L54,26 L54,34 L60,38 L70,40 Z" fill="#CC1212"/>
                {/* Index finger */}
                <path d="M58,28 L56,20 L52,20 L54,28" fill="#CC1212"/>
                {/* Middle finger */}
                <path d="M55,27 L53,18 L49,19 L51,27" fill="#CC1212"/>
                {/* Ring finger */}
                <path d="M52,27 L51,20 L47,21 L48,28" fill="#CC1212"/>
                {/* Pinky */}
                <path d="M49,28 L48,22 L45,23 L46,29" fill="#CC1212"/>
                {/* Thumb */}
                <path d="M70,30 L74,26 L71,22 L66,28" fill="#CC1212"/>

                {/* ── Clasped grip in centre ── */}
                <path d="M34,26 Q44,22 54,26 L54,38 Q44,42 34,38 Z" fill="#2a2a2a"/>
                {/* Finger overlap highlights */}
                <line x1="38" y1="26" x2="38" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <line x1="44" y1="24" x2="44" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <line x1="50" y1="26" x2="50" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              </svg>
            </div>
            <SectionHeader
              label={t('whoWeHelpLabel')}
              title={t('whoWeHelpTitle')}
              subtitle={t('whoWeHelpSubtitle')}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audienceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4 h-full group" style={{ borderTop: '2px solid #CC1212', borderBottom: '2px solid #CC1212', borderLeft: '2px solid #e5e7eb', borderRight: '2px solid #e5e7eb' }}>
                  <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-[15px] font-bold text-ink-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-ink-500 leading-relaxed flex-1">{card.desc}</p>
                  <a
                    href="#contact-form"
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
      <SectionDivider />
      <section id="faq" className="relative section-padding bg-white">
        {/* Top zigzag strip */}
        <div className="absolute top-0 left-0 right-0 h-4 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1200 16" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 H1200 L1175,16 L1150,0 L1125,16 L1100,0 L1075,16 L1050,0 L1025,16 L1000,0 L975,16 L950,0 L925,16 L900,0 L875,16 L850,0 L825,16 L800,0 L775,16 L750,0 L725,16 L700,0 L675,16 L650,0 L625,16 L600,0 L575,16 L550,0 L525,16 L500,0 L475,16 L450,0 L425,16 L400,0 L375,16 L350,0 L325,16 L300,0 L275,16 L250,0 L225,16 L200,0 L175,16 L150,0 L125,16 L100,0 L75,16 L50,0 L25,16 L0,0 Z" fill="#CC1212"/>
          </svg>
        </div>
        {/* Bottom zigzag strip */}
        <div className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1200 16" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,16 H1200 L1175,0 L1150,16 L1125,0 L1100,16 L1075,0 L1050,16 L1025,0 L1000,16 L975,0 L950,16 L925,0 L900,16 L875,0 L850,16 L825,0 L800,16 L775,0 L750,16 L725,0 L700,16 L675,0 L650,16 L625,0 L600,16 L575,0 L550,16 L525,0 L500,16 L475,0 L450,16 L425,0 L400,16 L375,0 L350,16 L325,0 L300,16 L275,0 L250,16 L225,0 L200,16 L175,0 L150,16 L125,0 L100,16 L75,0 L50,16 L25,0 L0,16 Z" fill="#CC1212"/>
          </svg>
        </div>
        <div className="container-site max-w-3xl">
          <AnimatedSection>
            {/* FAQ icon — speech bubble with question mark */}
            <div className="flex justify-center mb-5">
              <svg width="68" height="64" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main bubble */}
                <rect x="2" y="2" width="56" height="44" rx="10" fill="#1a1a1a"/>
                <rect x="2" y="2" width="56" height="44" rx="10" fill="none" stroke="#CC1212" strokeWidth="2"/>
                {/* Tail */}
                <path d="M18,46 L10,58 L30,46 Z" fill="#1a1a1a"/>
                <path d="M18,46 L10,58 L30,46" fill="none" stroke="#CC1212" strokeWidth="1.5" strokeLinejoin="round"/>
                {/* Question mark curve */}
                <path d="M22,18 C22,13 25,10 30,10 C35,10 38,13 38,18 C38,22 35,24 32,26 C31,27 30,28 30,31" stroke="#CC1212" strokeWidth="3" strokeLinecap="round" fill="none"/>
                {/* Question mark dot */}
                <circle cx="30" cy="37" r="2.5" fill="#CC1212"/>
                {/* Second smaller bubble top-right */}
                <circle cx="54" cy="12" r="10" fill="#CC1212"/>
                <circle cx="54" cy="12" r="7" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <text x="54" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">?</text>
              </svg>
            </div>
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
