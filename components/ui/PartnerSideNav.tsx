'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const partners = [
  { id: 'ptw',     scrollTarget: 'ptw',         logo: '/logo-ptw.png',     name: 'PTW Freiburg'    },
  { id: 'ashland', scrollTarget: 'sep-ashland',  logo: '/logo-ashland.png', name: 'Ashland Medical'  },
  { id: 'klarity', scrollTarget: 'sep-klarity',  logo: '/logo-klarity.png', name: 'Klarity'          },
]

export default function PartnerSideNav() {
  const [active, setActive]   = useState('ptw')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Track which section is currently in view
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    partners.forEach(p => {
      const el = document.getElementById(p.id)
      if (el) sectionObserver.observe(el)
    })

    // Track whether we're inside the partners content zone
    const checkVisibility = () => {
      const startEl = document.getElementById('ptw')
      const endEl   = document.getElementById('partners-end')
      if (!startEl || !endEl) return
      const startTop = startEl.getBoundingClientRect().top
      const endTop   = endEl.getBoundingClientRect().top
      // Sidebar visible once PTW has scrolled into view and before the end sentinel reaches top
      setVisible(startTop < window.innerHeight * 0.8 && endTop > 80)
    }

    window.addEventListener('scroll', checkVisibility, { passive: true })
    checkVisibility()

    return () => {
      sectionObserver.disconnect()
      window.removeEventListener('scroll', checkVisibility)
    }
  }, [])

  return (
    <aside
      className={`hidden xl:flex flex-col items-center fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-30 gap-1 transition-all duration-300 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {partners.map((partner, i) => (
        <div key={partner.id} className="flex flex-col items-center">
          <a
            href={`#${partner.scrollTarget}`}
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

          {active === partner.id && (
            <div className="w-1 h-1 rounded-full bg-brand-600 mt-1.5" />
          )}

          {i < partners.length - 1 && (
            <div className="w-px h-8 bg-ink-200 mt-1.5" />
          )}
        </div>
      ))}
    </aside>
  )
}
