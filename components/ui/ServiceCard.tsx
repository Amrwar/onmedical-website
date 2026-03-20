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
      <div className="card-dark group p-7 flex flex-col gap-5 relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4 h-full">
          <div className="icon-box-dark group-hover:bg-brand-600/25 group-hover:border-brand-500/30 transition-colors">
            <Icon size={19} className="text-brand-400" strokeWidth={1.75} />
          </div>
          <h3 className="text-[15px] font-semibold text-white leading-snug">{title}</h3>
          <p className="text-[13px] text-white/50 leading-relaxed flex-1">{description}</p>
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
