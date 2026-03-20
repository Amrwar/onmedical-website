interface SectionHeaderProps {
  label?: string
  /** legacy prop alias */
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  label,
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const eyebrow = label ?? tag
  const center  = align === 'center'

  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'}`}>
      {eyebrow && (
        <span
          className={`section-label ${
            light
              ? '!text-brand-400 before:!bg-brand-400/50 after:!bg-brand-400/50'
              : ''
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-title ${light ? '!text-white' : ''} ${
          center ? 'max-w-2xl' : 'max-w-xl'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${light ? '!text-white/55' : ''} ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
