import type { LucideIcon } from 'lucide-react'
import { Package, Wrench, HeartPulse, Microscope, PhoneCall, Globe } from 'lucide-react'

export type ServiceCardVariant = 'default' | 'dark'

export type ServicePreview = {
  icon: LucideIcon
  /** Keys under the `servicesPreview` message namespace. */
  titleKey: string
  descriptionKey: string
  variant: ServiceCardVariant
}

/**
 * The six services the home page previews, in display order. The last
 * two render on the dark card variant, which is a layout decision that
 * belongs with the list rather than in the component's markup.
 */
export const servicePreviews: ServicePreview[] = [
  { icon: Package, titleKey: 's1Title', descriptionKey: 's1Desc', variant: 'default' },
  { icon: Wrench, titleKey: 's2Title', descriptionKey: 's2Desc', variant: 'default' },
  { icon: HeartPulse, titleKey: 's3Title', descriptionKey: 's3Desc', variant: 'default' },
  { icon: Microscope, titleKey: 's4Title', descriptionKey: 's4Desc', variant: 'dark' },
  { icon: Globe, titleKey: 's5Title', descriptionKey: 's5Desc', variant: 'dark' },
  { icon: PhoneCall, titleKey: 's6Title', descriptionKey: 's6Desc', variant: 'dark' },
]
