import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, Award, Users, Cpu, BookOpen, Globe } from 'lucide-react'

export type Reason = {
  icon: LucideIcon
  /** Keys under the `whyChooseUs` message namespace. */
  titleKey: string
  descriptionKey: string
}

/**
 * Why a hospital would pick this distributor over the next one — the six
 * arguments the home page makes, in the order it makes them.
 */
export const reasons: Reason[] = [
  { icon: Cpu, titleKey: 'r1Title', descriptionKey: 'r1Desc' },
  { icon: Globe, titleKey: 'r2Title', descriptionKey: 'r2Desc' },
  { icon: ShieldCheck, titleKey: 'r3Title', descriptionKey: 'r3Desc' },
  { icon: Users, titleKey: 'r4Title', descriptionKey: 'r4Desc' },
  { icon: BookOpen, titleKey: 'r5Title', descriptionKey: 'r5Desc' },
  { icon: Award, titleKey: 'r6Title', descriptionKey: 'r6Desc' },
]
