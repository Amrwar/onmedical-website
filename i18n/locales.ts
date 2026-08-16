/**
 * The languages this site serves.
 *
 * Kept apart from `navigation.ts` on purpose. That module builds
 * next-intl's client navigation helpers, which reach into Next's own
 * router; anything that only wants to know which languages exist — the
 * middleware, the locale layout, a test — should not have to drag the
 * router in behind it.
 */
export const locales = ['en', 'nl', 'zh'] as const

export type Locale = (typeof locales)[number]

/** The language served when a request does not name one. */
export const defaultLocale: Locale = 'en'

/** Whether a string is one of the languages the site serves. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
