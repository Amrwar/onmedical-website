'use client'

import { Plus } from 'lucide-react'

interface Props {
  /** Background colour of the surrounding section — defaults to white */
  bg?: 'white' | 'muted'
}

export default function SectionDivider({ bg = 'white' }: Props) {
  const bgClass = 'bg-white'

  return (
    <div className={`relative flex items-center justify-center py-5 ${bgClass}`}>
      {/* Full-width gradient line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

      {/* Center ornament */}
      <div className={`relative z-10 flex items-center gap-3 px-5 ${bgClass}`}>

        {/* Left arm */}
        <div className="flex items-center gap-1.5">
          <span className="block w-5 h-px bg-ink-200" />
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-200" />
          <span className="block w-8 h-px bg-gradient-to-r from-brand-200 to-brand-400" />
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-500" />
        </div>

        {/* Medical cross badge */}
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-full border-2 border-brand-600 ${bgClass}
                      shadow-[0_0_0_4px_rgb(204_18_18_/_0.07),0_2px_8px_rgb(204_18_18_/_0.12)]`}
        >
          <Plus size={14} className="text-brand-600" strokeWidth={2.5} />
        </div>

        {/* Right arm */}
        <div className="flex items-center gap-1.5">
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="block w-8 h-px bg-gradient-to-l from-brand-200 to-brand-400" />
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-200" />
          <span className="block w-5 h-px bg-ink-200" />
        </div>

      </div>
    </div>
  )
}
