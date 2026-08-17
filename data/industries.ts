import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Heart,
  Landmark,
} from 'lucide-react'

export type Industry = {
  icon: LucideIcon
  /** Keys under the `industries` message namespace. */
  titleKey: string
  descriptionKey: string
}

/**
 * The sectors the company actually sells into, in the order the home
 * page presents them. Content lives in the message bundles; this module
 * only fixes the list, its order, and each entry's icon.
 */
export const industries: Industry[] = [
  { icon: Heart, titleKey: 'i1Title', descriptionKey: 'i1Desc' },
  { icon: Building2, titleKey: 'i2Title', descriptionKey: 'i2Desc' },
  { icon: GraduationCap, titleKey: 'i3Title', descriptionKey: 'i3Desc' },
  { icon: Landmark, titleKey: 'i4Title', descriptionKey: 'i4Desc' },
  { icon: Stethoscope, titleKey: 'i5Title', descriptionKey: 'i5Desc' },
  { icon: FlaskConical, titleKey: 'i6Title', descriptionKey: 'i6Desc' },
]
