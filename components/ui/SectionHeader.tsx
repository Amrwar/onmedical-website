interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wider border border-teal-100 w-fit">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl lg:text-4xl font-bold leading-tight max-w-2xl ${
          light ? 'text-white' : 'text-navy-900'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      <div className={`w-10 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${
            light ? 'text-white/70' : 'text-slate-500'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
