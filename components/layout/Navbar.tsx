'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'
  const light  = !scrolled && isHome   // white-on-dark mode

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-medical-border'
          : 'bg-transparent'
      }`}
    >
      {/* Top contact strip */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 ${
          light ? 'border-white/10 bg-white/5' : 'border-medical-border bg-medical-light/80'
        }`}
      >
        <div className="container-tight flex items-center justify-end gap-6 py-1.5">
          <a
            href="tel:+20224115184"
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              light ? 'text-white/70 hover:text-white' : 'text-medical-muted hover:text-brand-600'
            }`}
          >
            <Phone size={11} />
            +20 2 24115184
          </a>
          <a
            href="mailto:osama@onmedical.net"
            className={`text-xs font-medium transition-colors ${
              light ? 'text-white/70 hover:text-white' : 'text-medical-muted hover:text-brand-600'
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
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-onmedical.jpeg"
              alt="ON Medical Company"
              width={160}
              height={48}
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                light ? 'brightness-0 invert' : ''
              }`}
              priority
            />
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
                      ? light
                        ? 'text-white bg-white/10'
                        : 'text-brand-600 bg-brand-50'
                      : light
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${light ? 'bg-white' : 'bg-brand-600'}`} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                light ? 'text-white hover:bg-white/10' : 'text-dark-900 hover:bg-dark-50'
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
                    ? 'text-brand-600 bg-brand-50 border border-brand-100'
                    : 'text-dark-700 hover:text-dark-900 hover:bg-dark-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 pb-1 border-t border-medical-border mt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              Get in Touch
            </Link>
            <div className="flex flex-col gap-2 mt-3">
              <a href="tel:+20224115184" className="text-xs text-medical-muted text-center">
                Tel: +20 2 24115184
              </a>
              <a href="mailto:osama@onmedical.net" className="text-xs text-brand-600 text-center">
                osama@onmedical.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
