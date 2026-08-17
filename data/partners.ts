export type Partner = {
  name: string
  country: string
  badge: string
  logo: string
  website: string
  /** Key under the `partnersPreview` message namespace for the blurb. */
  shortKey: string
}

/**
 * The manufacturers the company represents. Names, countries, logos and
 * websites are facts shared by every locale; only each partner's short
 * description is translated.
 */
export const partners: Partner[] = [
  {
    name: 'PTW Freiburg',
    country: 'Germany',
    badge: '🇩🇪 Germany',
    logo: '/logo-ptw.png',
    website: 'https://www.ptwdosimetry.com',
    shortKey: 'ptw.short',
  },
  {
    name: 'Ashland Medical',
    country: 'United States',
    badge: '🇺🇸 United States',
    logo: '/logo-ashland.png',
    website: 'https://www.ashland.com',
    shortKey: 'ashland.short',
  },
  {
    name: 'Klarity',
    country: 'China',
    badge: '🇨🇳 China',
    logo: '/logo-klarity.png',
    website: 'https://www.klarity-medical.com',
    shortKey: 'klarity.short',
  },
]
