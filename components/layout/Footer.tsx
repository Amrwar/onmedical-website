'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t      = useTranslations('footer')
  const locale = useLocale()

  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  const pages = [
    { label: t('p1'), href: '/' },
    { label: t('p2'), href: '/about' },
    { label: t('p3'), href: '/services' },
    { label: t('p4'), href: '/partners' },
    { label: t('p5'), href: '/contact' },
  ]

  const services = [
    t('s1'), t('s2'), t('s3'), t('s4'), t('s5'), t('s6'),
  ]

  return (
    <footer className="bg-ink-50 border-t border-ink-200">

      {/* Red top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400" />

      {/* ── Main content ───────────────────────────────────── */}
      <div className="container-site pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

          {/* Brand col — 4 cols */}
          <div className="lg:col-span-4 space-y-5 lg:pr-6">
            <Link href={localizeHref('/')} className="inline-block">
              <Image
                src="/logo-onmedical.png"
                alt="ON Medical Company"
                width={156}
                height={46}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-ink-600 leading-relaxed max-w-[240px]">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                {t('established')}
              </span>
            </div>
          </div>

          {/* Navigation — 2 cols */}
          <div className="lg:col-span-2 lg:border-l lg:border-ink-200 lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              {t('navigation')}
            </p>
            <ul className="space-y-2.5">
              {pages.map(p => (
                <li key={p.href}>
                  <Link
                    href={localizeHref(p.href)}
                    className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 3 cols */}
          <div className="lg:col-span-3 lg:border-l lg:border-ink-200 lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              {t('services')}
            </p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s} className="flex items-start gap-2 text-[13px] text-ink-600">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-brand-600 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3 lg:border-l lg:border-ink-200 lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              {t('contact')}
            </p>
            <ul className="space-y-3.5">
              {([
                { icon: MapPin, text: 'Al Shahid Ahmed Abd Al Naby Bayoumi St. 548\nNasr City, Cairo, Egypt', href: 'https://maps.google.com/?q=Al+Shahid+Ahmed+Abd+Al+Naby+Bayoumi+Street+548+Nasr+City+Cairo+Egypt' },
                { icon: Phone,  text: '+20 2 24115184 (Tel / Fax)',               href: 'tel:+20224115184' },
                { icon: Phone,  text: '+20 155 217 6156 (Mobile)',               href: 'tel:+201552176156' },
                { icon: Mail,   text: 'osama@onmedical.net',                     href: 'mailto:osama@onmedical.net' },
              ] as { icon: typeof MapPin; text: string; href: string | null }[]).map(({ icon: Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={13} className="text-brand-600 mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  {href ? (
                    <a
                      href={href}
                      className="text-[13px] text-ink-600 hover:text-brand-600 transition-colors leading-snug whitespace-pre-line"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[13px] text-ink-600 leading-snug whitespace-pre-line">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <Link
                href={localizeHref('/contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-[12px] font-semibold rounded-lg transition-colors shadow-btn-red"
              >
                {t('sendEnquiry')} <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div className="border-t border-ink-200">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-ink-400">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
          <p className="text-[11px] text-ink-400">
            {t('subtag')}
          </p>
        </div>
      </div>
    </footer>
  )
}
