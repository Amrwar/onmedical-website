'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  const onDark = !scrolled && pathname === '/'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        onDark
          ? 'bg-transparent'
          : 'bg-white/96 backdrop-blur-xl border-b border-ink-200/60 shadow-nav'
      }`}
    >
      {/* ── Top strip ──────────────────────────────────────── */}
      <div className={`hidden lg:block border-b transition-colors duration-300 ${
        onDark ? 'border-white/[0.08] bg-white/[0.04]' : 'border-ink-200/50 bg-ink-50/80'
      }`}>
        <div className="container-site flex items-center justify-end gap-6 py-1.5">
          <a
            href="tel:+20224115184"
            className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors ${
              onDark ? 'text-white/55 hover:text-white/80' : 'text-ink-500 hover:text-brand-600'
            }`}
          >
            <Phone size={10} strokeWidth={2} />
            +20 2 24115184
          </a>
          <span className={`w-px h-3 ${onDark ? 'bg-white/15' : 'bg-ink-300'}`} />
          <a
            href="mailto:osama@onmedical.net"
            className={`text-[11px] font-medium transition-colors ${
              onDark ? 'text-white/55 hover:text-white/80' : 'text-ink-500 hover:text-brand-600'
            }`}
          >
            osama@onmedical.net
          </a>
        </div>
      </div>

      {/* ── Main nav ───────────────────────────────────────── */}
      <div className="container-site">
        <div className="flex items-center justify-between h-[60px] lg:h-[66px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo-onmedical.jpeg"
              alt="ON Medical Company"
              width={152}
              height={44}
              className="h-9 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-150 ${
                    active
                      ? onDark
                        ? 'text-white'
                        : 'text-brand-600'
                      : onDark
                        ? 'text-white/65 hover:text-white hover:bg-white/[0.08]'
                        : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100/60'
                  }`}
                >
                  {label}
                  {active && (
                    <span
                      className={`absolute bottom-[5px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        onDark ? 'bg-white' : 'bg-brand-600'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-btn-red"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle navigation"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                onDark ? 'text-white hover:bg-white/10' : 'text-ink-700 hover:bg-ink-100'
              }`}
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
          mobileOpen ? 'max-h-[520px]' : 'max-h-0'
        } bg-white border-t border-ink-200/60 shadow-[0_8px_32px_rgb(0_0_0_/_0.12)]`}
      >
        <div className="container-site py-3 space-y-0.5">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
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
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-btn-red"
            >
              Get in Touch
            </Link>
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
