import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/locales'
import { localizeHref, navRoutes, SITE_URL } from '@/lib/site'

/**
 * One entry per page per served locale. The routes come from the same
 * table the header renders, so a page added to the navigation appears
 * here without anyone remembering to do it twice.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    navRoutes.map((route) => ({
      url: `${SITE_URL}${localizeHref(locale, route.href)}`,
      changeFrequency: 'monthly' as const,
      priority: route.href === '/' ? 1 : 0.7,
    }))
  )
}
