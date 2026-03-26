import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'dark' | 'featured'
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
}: ServiceCardProps) {
  if (variant === 'dark' || variant === 'featured') {
    return (
      <div
        className="group p-7 flex flex-col gap-5 relative overflow-hidden h-full rounded-xl border border-brand-700/40 hover:-translate-y-0.5 transition-all duration-300"
        style={{ background: 'linear-gradient(145deg, #ef4444 0%, #f05252 50%, #f87171 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-grid-light opacity-15 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4 h-full">
          <div className="w-11 h-11 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
            <Icon size={19} className="text-white" strokeWidth={1.75} />
          </div>
          <h3 className="text-[15px] font-semibold text-white leading-snug">{title}</h3>
          <p className="text-[13px] text-white/75 leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card group p-7 flex flex-col gap-5 h-full">
      <div className="icon-box group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors">
        <Icon
          size={19}
          className="text-brand-600 group-hover:text-white transition-colors"
          strokeWidth={1.75}
        />
      </div>
      <h3 className="text-[15px] font-semibold text-ink-900 leading-snug">{title}</h3>
      <p className="text-[13px] text-ink-500 leading-relaxed flex-1">{description}</p>
    </div>
  )
}
