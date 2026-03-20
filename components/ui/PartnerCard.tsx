import { Globe } from 'lucide-react'

interface PartnerCardProps {
  name: string
  country: string
  flag: string
  description: string
  specialty: string[]
  accentColor?: string
}

export default function PartnerCard({
  name,
  country,
  flag,
  description,
  specialty,
  accentColor = 'bg-teal-600',
}: PartnerCardProps) {
  return (
    <div className="card-base p-8 flex flex-col gap-6 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-medical-muted flex items-center gap-1.5">
            <Globe size={11} />
            {country}
          </span>
          <h3 className="text-xl font-bold text-navy-900 leading-tight">{name}</h3>
        </div>
        {/* Flag / country badge */}
        <div className="flex-shrink-0 text-2xl leading-none">{flag}</div>
      </div>

      {/* Logo placeholder */}
      <div className="w-full h-16 rounded-lg bg-slate-50 border border-medical-border flex items-center justify-center">
        <span className="text-sm font-semibold text-navy-900/40 tracking-wide">{name}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>

      {/* Specialty tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-medical-border">
        {specialty.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 bg-teal-50 text-teal-700 rounded-md border border-teal-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
