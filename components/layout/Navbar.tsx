'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-medical-border'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar – contact strip */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 ${
          scrolled || !isHome
            ? 'border-medical-border bg-medical-light/80'
            : 'border-white/10 bg-white/5'
        }`}
      >
        <div className="container-tight flex items-center justify-end gap-6 py-1.5">
          <a
            href="tel:+20225241184"
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              scrolled || !isHome ? 'text-medical-muted hover:text-teal-600' : 'text-white/70 hover:text-white'
            }`}
          >
            <Phone size={11} />
            +20 2 24115184
          </a>
          <a
            href="mailto:osama@onmedical.net"
            className={`text-xs font-medium transition-colors ${
              scrolled || !isHome ? 'text-medical-muted hover:text-teal-600' : 'text-white/70 hover:text-white'
            }`}
          >
            osama@onmedical.net
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            {/* Logo mark */}
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-navy-700 flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
              <span className="text-white font-black text-sm tracking-tighter leading-none">ON</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled || !isHome ? 'text-navy-900' : 'text-white'
                }`}
              >
                ON Medical
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled || !isHome ? 'text-medical-muted' : 'text-white/60'
                }`}
              >
                Company
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active
                      ? scrolled || !isHome
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-white bg-white/10'
                      : scrolled || !isHome
                        ? 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-500" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHome
                  ? 'text-navy-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-medical-border shadow-lg`}
      >
        <div className="container-tight py-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? 'text-teal-600 bg-teal-50 border border-teal-100'
                    : 'text-slate-700 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 pb-1 border-t border-medical-border mt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get in Touch
            </Link>
            <div className="flex flex-col gap-2 mt-3">
              <a href="tel:+20225241184" className="text-xs text-medical-muted text-center">
                Tel: +20 2 24115184
              </a>
              <a href="mailto:osama@onmedical.net" className="text-xs text-teal-600 text-center">
                osama@onmedical.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
