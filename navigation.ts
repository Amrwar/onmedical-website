import { createNavigation } from 'next-intl/navigation'

import { locales } from './i18n/locales'

export { locales, defaultLocale, isLocale } from './i18n/locales'
export type { Locale } from './i18n/locales'

export const { Link: IntlLink, useRouter: useIntlRouter, usePathname: useIntlPathname, redirect } =
  createNavigation({ locales })
