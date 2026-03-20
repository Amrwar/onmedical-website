import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'featured'
}

export default function ServiceCard({ icon: Icon, title, description, variant = 'default' }: ServiceCardProps) {
  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 border border-navy-700 p-7 text-white group hover:from-navy-800 hover:to-navy-700 transition-all duration-300 shadow-card hover:shadow-card-hover">
        {/* Decorative circle */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-colors" />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="w-11 h-11 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
            <Icon size={20} className="text-teal-400" />
          </div>
          <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card-base p-7 group flex flex-col gap-4">
      <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:border-teal-600">
        <Icon size={20} className="text-teal-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-base font-semibold text-navy-900 leading-snug">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
