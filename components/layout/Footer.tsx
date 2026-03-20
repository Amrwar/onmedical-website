import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Printer, ArrowUpRight } from 'lucide-react'

const pages = [
  { label: 'Home',      href: '/' },
  { label: 'About Us',  href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Partners',  href: '/partners' },
  { label: 'Contact',   href: '/contact' },
]

const services = [
  'Equipment Distribution',
  'Technical Support',
  'Installation Services',
  'After-Sales Service',
  'Technical Consultation',
  'Market Representation',
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">

      {/* ── Main content ───────────────────────────────────── */}
      <div className="container-site pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

          {/* Brand col — 4 cols */}
          <div className="lg:col-span-4 space-y-5 lg:pr-6">
            <Link href="/">
              <Image
                src="/logo-onmedical.jpeg"
                alt="ON Medical Company"
                width={156}
                height={46}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-[240px]">
              A specialized Egyptian company advancing oncology and radiotherapy technology throughout the healthcare sector since 2014.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
                Established Cairo, Egypt · 2014
              </span>
            </div>
          </div>

          {/* Navigation — 2 cols */}
          <div className="lg:col-span-2 lg:border-l lg:border-white/[0.08] lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {pages.map(p => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 3 cols */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/[0.08] lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s} className="flex items-start gap-2 text-[13px] text-white/55">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-brand-600 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/[0.08] lg:pl-6 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Contact
            </p>
            <ul className="space-y-3.5">
              {([
                { icon: MapPin,  text: '548 Zahraa Nasr City\nCairo, Egypt',     href: null },
                { icon: Phone,   text: '+20 2 24115184',                          href: 'tel:+20224115184' },
                { icon: Phone,   text: '+20 155 217 6156',                        href: 'tel:+201552176156' },
                { icon: Printer, text: '+20 2 24115184 (Fax)',                    href: null },
                { icon: Mail,    text: 'osama@onmedical.net',                     href: 'mailto:osama@onmedical.net' },
              ] as { icon: typeof MapPin; text: string; href: string | null }[]).map(({ icon: Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={13} className="text-brand-500 mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  {href ? (
                    <a
                      href={href}
                      className="text-[13px] text-white/55 hover:text-white transition-colors leading-snug whitespace-pre-line"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[13px] text-white/55 leading-snug whitespace-pre-line">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-[12px] font-semibold rounded-lg transition-colors shadow-btn-red"
              >
                Send Enquiry <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div className="border-t border-white/[0.08]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} ON Medical Company. All rights reserved.
          </p>
          <p className="text-[11px] text-white/[0.18]">
            Oncology &amp; Radiotherapy Equipment · Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
