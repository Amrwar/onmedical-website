interface StatCardProps {
  value: string
  label: string
  sublabel?: string
  light?: boolean
}

export default function StatCard({ value, label, sublabel, light = false }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-1 ${light ? 'text-white' : ''}`}>
      <span className={`text-4xl lg:text-5xl font-black tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {value}
      </span>
      <span className={`text-sm font-semibold ${light ? 'text-white/90' : 'text-navy-800'}`}>{label}</span>
      {sublabel && (
        <span className={`text-xs ${light ? 'text-white/55' : 'text-slate-400'}`}>{sublabel}</span>
      )}
    </div>
  )
}
