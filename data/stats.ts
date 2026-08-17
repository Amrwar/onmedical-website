export type Stat = {
  /** The headline figure, kept verbatim across locales. */
  value: string
  /** Keys under the `statsBar` message namespace. */
  labelKey: string
  subKey: string
}

/**
 * The numbers the company leads with. The values are facts rather than
 * copy, so they live here; only their labels are translated.
 */
export const stats: Stat[] = [
  { value: '10+', labelKey: 'stat1Label', subKey: 'stat1Sub' },
  { value: '3', labelKey: 'stat2Label', subKey: 'stat2Sub' },
  { value: '100+', labelKey: 'stat3Label', subKey: 'stat3Sub' },
  { value: '2014', labelKey: 'stat4Label', subKey: 'stat4Sub' },
]
