'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const partners = [
  { id: 'ptw',     logo: '/logo-ptw.png',     name: 'PTW Freiburg'   },
  { id: 'ashland', logo: '/logo-ashland.png', name: 'Ashland Medical' },
  { id: 'klarity', logo: '/logo-klarity.png', name: 'Klarity'         },
]

export default function PartnerSideNav() {
  const [active, setActive] = useState('ptw')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    partners.forEach(p => {
      const el = document.getElementById(p.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden xl:flex flex-col items-center fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-30 gap-2">
      {partners.map((partner, i) => (
        <div key={partner.id} className="flex flex-col items-center">
          <a
            href={`#${partner.id}`}
            title={partner.name}
            className={`flex items-center justify-center p-3 rounded-2xl border transition-all duration-200 w-[84px] h-[60px] ${
              active === partner.id
                ? 'bg-white border-brand-300 shadow-card scale-105'
                : 'bg-white/80 border-ink-200 hover:bg-white hover:border-ink-300 hover:shadow-sm'
            }`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={64}
              height={32}
              className={`w-auto object-contain mix-blend-multiply transition-opacity duration-200 ${
                active === partner.id ? 'opacity-100 max-h-8' : 'opacity-50 max-h-7 hover:opacity-80'
              }`}
            />
          </a>

          {/* Active indicator dot */}
          {active === partner.id && (
            <div className="w-1 h-1 rounded-full bg-brand-600 mt-1.5" />
          )}

          {/* Connector line between logos */}
          {i < partners.length - 1 && (
            <div className="w-px h-8 bg-ink-200 mt-1.5" />
          )}
        </div>
      ))}
    </aside>
  )
}
