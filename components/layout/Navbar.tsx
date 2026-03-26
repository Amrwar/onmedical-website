'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useIntlRouter, useIntlPathname } from '@/navigation'

const localeConfig = [
  { code: 'en', label: 'English',  flagImg: 'https://flagcdn.com/w40/gb.png',  short: 'EN' },
  { code: 'nl', label: 'Dutch',    flagImg: 'https://flagcdn.com/w40/nl.png',  short: 'NL' },
  { code: 'zh', label: '中文',     flagImg: 'https://flagcdn.com/w40/cn.png',  short: 'ZH' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen,   setLangOpen]   = useState(false)
  const pathname    = usePathname()
  const intlPathname = useIntlPathname()
  const intlRouter  = useIntlRouter()
  const t      = useTranslations('nav')
  const locale = useLocale()

  const navLinks = [
    { label: t('home'),             href: '/' },
    { label: t('about'),           href: '/about' },
    { label: t('services'),        href: '/services' },
    { label: t('partners'),        href: '/partners' },
    { label: t('certifications'),  href: '/certifications' },
    { label: t('contact'),         href: '/contact' },
  ]

  useEffect(() => setMobileOpen(false), [pathname])
  useEffect(() => {
    const close = () => setLangOpen(false)
    if (langOpen) document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  function switchLocale(newLocale: string) {
    intlRouter.replace(intlPathname, { locale: newLocale })
    setLangOpen(false)
  }

  const currentLocale = localeConfig.find(l => l.code === locale) ?? localeConfig[0]

  // Prefix nav hrefs with locale
  function localizeHref(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  function isActive(href: string) {
    const localized = localizeHref(href)
    if (href === '/') return pathname === '/' || pathname === `/${locale}`
    return pathname === localized || pathname.startsWith(localized + '/')
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/96 backdrop-blur-xl border-b border-ink-200/60 shadow-nav"
    >
      {/* ── Top strip ──────────────────────────────────────── */}
      <div className="hidden lg:block border-b border-ink-200/50 bg-ink-50/80 transition-colors duration-300">
        <div className="container-site flex items-center justify-end gap-6 py-1.5">
          <a
            href="tel:+20224115184"
            className="flex items-center gap-1.5 text-[11px] font-medium text-ink-500 hover:text-brand-600 transition-colors"
          >
            <Phone size={10} strokeWidth={2} />
            +20 2 24115184
          </a>
          <span className="w-px h-3 bg-ink-300" />
          <a
            href="mailto:osama@onmedical.net"
            className="text-[11px] font-medium text-ink-500 hover:text-brand-600 transition-colors"
          >
            osama@onmedical.net
          </a>
        </div>
      </div>

      {/* ── Main nav ───────────────────────────────────────── */}
      <div className="container-site">
        <div className="flex items-center justify-between h-[60px] lg:h-[66px]">

          {/* Logo */}
          <Link href={localizeHref('/')} className="flex-shrink-0 flex items-center">
            <Image
              src="/logo-onmedical.png"
              alt="ON Medical Company"
              width={200}
              height={58}
              className="h-14 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={localizeHref(href)}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-150 ${
                    active
                      ? 'text-brand-600'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100/60'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLangOpen(v => !v)}
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-100/60 rounded-lg transition-colors"
                aria-label="Switch language"
              >
                <img src={currentLocale.flagImg} alt={currentLocale.short} className="w-5 h-3.5 object-cover rounded-[2px]" />
                <span>{currentLocale.short}</span>
                <ChevronDown size={11} strokeWidth={2} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-xl border border-ink-200 shadow-card overflow-hidden z-50">
                  {localeConfig.map(loc => (
                    <button
                      key={loc.code}
                      onClick={() => switchLocale(loc.code)}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[12px] font-medium transition-colors ${
                        loc.code === locale
                          ? 'text-brand-600 bg-brand-50'
                          : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
                      }`}
                    >
                      <img src={loc.flagImg} alt={loc.short} className="w-5 h-3.5 object-cover rounded-[2px] flex-shrink-0" />
                      <span>{loc.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={localizeHref('/contact')}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-btn-red"
            >
              {t('getInTouch')}
            </Link>

            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle navigation"
              className="lg:hidden p-2 rounded-lg transition-colors text-ink-700 hover:bg-ink-100"
            >
              {mobileOpen
                ? <X size={21} strokeWidth={1.75} />
                : <Menu size={21} strokeWidth={1.75} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile panel ───────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[580px]' : 'max-h-0'
        } bg-white border-t border-ink-200/60 shadow-[0_8px_32px_rgb(0_0_0_/_0.12)]`}
      >
        <div className="container-site py-3 space-y-0.5">
          {navLinks.map(({ label, href }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={localizeHref(href)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-[13px] font-medium transition-colors ${
                  active
                    ? 'text-brand-600 bg-brand-50 border border-brand-100'
                    : 'text-ink-700 hover:text-ink-900 hover:bg-ink-50'
                }`}
              >
                {label}
                <ChevronRight size={14} className="text-ink-400" />
              </Link>
            )
          })}
          <div className="pt-3 mt-1 border-t border-ink-200/60 space-y-3 pb-1">
            <Link
              href={localizeHref('/contact')}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-btn-red"
            >
              {t('getInTouch')}
            </Link>
            {/* Mobile language switcher */}
            <div className="flex justify-center gap-2 flex-wrap">
              {localeConfig.map(loc => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    loc.code === locale
                      ? 'bg-brand-600 text-white'
                      : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                  }`}
                >
                  <img src={loc.flagImg} alt={loc.short} className="w-5 h-3.5 object-cover rounded-[2px]" />
                  <span>{loc.short}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4 text-[11px] text-ink-400">
              <a href="tel:+20224115184" className="hover:text-brand-600 transition-colors">
                +20 2 24115184
              </a>
              <span>·</span>
              <a href="mailto:osama@onmedical.net" className="hover:text-brand-600 transition-colors">
                osama@onmedical.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
