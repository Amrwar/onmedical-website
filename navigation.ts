import { createNavigation } from 'next-intl/navigation'

export const locales = ['en', 'nl', 'zh'] as const
export type Locale = (typeof locales)[number]

export const { Link: IntlLink, useRouter: useIntlRouter, usePathname: useIntlPathname, redirect } =
  createNavigation({ locales })
