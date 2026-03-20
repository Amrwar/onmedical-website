import Link from 'next/link'
import { MapPin, Phone, Mail, Printer, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact',  href: '/contact' },
]

const services = [
  'Equipment Distribution',
  'Technical Support',
  'Installation Services',
  'After-Sales Service',
  'Technical Consultation',
  'Market Representation',
]

const partners = [
  { name: 'PTW Freiburg',   country: 'Germany' },
  { name: 'Ashland Medical', country: 'USA' },
  { name: 'Klarity',        country: 'China' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer content */}
      <div className="container-tight py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-navy-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm tracking-tighter">ON</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base text-white tracking-tight">ON Medical</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/50">Company</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
              A specialized Egyptian company advancing oncology and radiotherapy technology across the healthcare sector.
            </p>
            <div className="pt-1">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-teal-400 border border-teal-400/30 rounded-full px-3 py-1">
                Established 2014
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 pt-2">Partners</h4>
            <ul className="space-y-2">
              {partners.map((p) => (
                <li key={p.name} className="text-sm text-white/65">
                  {p.name}
                  <span className="text-white/30 ml-1.5 text-xs">· {p.country}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-white/65">
                  <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-teal-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/65 leading-snug">
                  548 Zahraa Nasr City,<br />Cairo, Egypt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+20224115184" className="text-sm text-white/65 hover:text-white transition-colors">
                  +2 02 24115184
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+201552176156" className="text-sm text-white/65 hover:text-white transition-colors">
                  +20 155 217 6156
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={15} className="text-teal-400 flex-shrink-0" />
                <span className="text-sm text-white/65">+2 02 24115184</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:osama@onmedical.net" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                  osama@onmedical.net
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Send Enquiry
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ON Medical Company. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Nasr City, Cairo, Egypt · Medical & Oncology Equipment Distribution
          </p>
        </div>
      </div>
    </footer>
  )
}
