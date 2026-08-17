import type { LucideIcon } from 'lucide-react'
import { Mail, MapPin, Phone } from 'lucide-react'

/** The canonical origin, used for sitemaps and absolute links. */
export const SITE_URL = 'https://onmedical.net'

export type NavRoute = {
  /** Key under the `nav` message namespace. */
  labelKey: string
  href: string
}

/** Every page in the header, in display order. */
export const navRoutes: NavRoute[] = [
  { labelKey: 'home', href: '/' },
  { labelKey: 'about', href: '/about' },
  { labelKey: 'services', href: '/services' },
  { labelKey: 'partners', href: '/partners' },
  { labelKey: 'certifications', href: '/certifications' },
  { labelKey: 'contact', href: '/contact' },
]

/**
 * Prefixes an internal href with the locale, except for the default
 * locale, which lives at the bare path.
 */
export function localizeHref(locale: string, href: string): string {
  if (locale === 'en') return href
  return `/${locale}${href}`
}

export type ContactChannel = {
  icon: LucideIcon
  text: string
  href: string
}

/** How to reach the company, exactly as the footer presents it. */
export const contactChannels: ContactChannel[] = [
  {
    icon: MapPin,
    text: 'Al Shahid Ahmed Abd Al Naby Bayoumi St. 548\nNasr City, Cairo, Egypt',
    href: 'https://maps.google.com/?q=30.050789,31.398390',
  },
  { icon: Phone, text: '+20 2 24115184 (Tel / Fax)', href: 'tel:+20224115184' },
  { icon: Phone, text: '+20 155 217 6156 (Mobile)', href: 'tel:+201552176156' },
  { icon: Mail, text: 'osama@onmedical.net', href: 'mailto:osama@onmedical.net' },
]
