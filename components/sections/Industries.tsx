'use client'

import {
  Building2,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Heart,
  Landmark,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTranslations } from 'next-intl'

export default function Industries() {
  const t = useTranslations('industries')

  const industries = [
    {
      icon: Heart,
      title: t('i1Title'),
      description: t('i1Desc'),
    },
    {
      icon: Building2,
      title: t('i2Title'),
      description: t('i2Desc'),
    },
    {
      icon: GraduationCap,
      title: t('i3Title'),
      description: t('i3Desc'),
    },
    {
      icon: Landmark,
      title: t('i4Title'),
      description: t('i4Desc'),
    },
    {
      icon: Stethoscope,
      title: t('i5Title'),
      description: t('i5Desc'),
    },
    {
      icon: FlaskConical,
      title: t('i6Title'),
      description: t('i6Desc'),
    },
  ]

  return (
    <section className="relative section-padding bg-white">

      {/* ── Hanging light bulb — left ──────────────────────── */}
      <div className="absolute top-0 left-[18%] pointer-events-none select-none animate-bulb-swing hidden md:block">
        <svg width="52" height="140" viewBox="0 0 52 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bulbGlow1" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#ff8080" stopOpacity="0.9"/>
              <stop offset="60%" stopColor="#CC1212" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#991111" stopOpacity="1"/>
            </radialGradient>
          </defs>
          {/* String */}
          <line x1="26" y1="0" x2="26" y2="50" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Cap top */}
          <rect x="19" y="49" width="14" height="6" rx="1.5" fill="#374151"/>
          {/* Screw rings */}
          <rect x="20" y="55" width="12" height="3" rx="1" fill="#4b5563"/>
          <rect x="21" y="58" width="10" height="3" rx="1" fill="#374151"/>
          <rect x="22" y="61" width="8"  height="3" rx="1" fill="#4b5563"/>
          {/* Bulb glass */}
          <path d="M26,64 C15,64 8,73 8,84 C8,95 16,104 26,104 C36,104 44,95 44,84 C44,73 37,64 26,64 Z" fill="url(#bulbGlow1)"/>
          {/* Inner highlight */}
          <ellipse cx="20" cy="76" rx="4" ry="5" fill="white" opacity="0.18"/>
          {/* Filament */}
          <path d="M19,86 C21,82 23,86 26,82 C29,78 31,82 33,86" stroke="rgba(255,220,180,0.75)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Outer glow aura */}
          <circle cx="26" cy="84" r="26" fill="rgba(204,18,18,0.07)"/>
        </svg>
      </div>

      {/* ── Hanging light bulb — right ─────────────────────── */}
      <div className="absolute top-0 right-[18%] pointer-events-none select-none animate-bulb-swing-delay hidden md:block">
        <svg width="52" height="140" viewBox="0 0 52 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bulbGlow2" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#ff8080" stopOpacity="0.9"/>
              <stop offset="60%" stopColor="#CC1212" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#991111" stopOpacity="1"/>
            </radialGradient>
          </defs>
          {/* String */}
          <line x1="26" y1="0" x2="26" y2="50" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Cap top */}
          <rect x="19" y="49" width="14" height="6" rx="1.5" fill="#374151"/>
          {/* Screw rings */}
          <rect x="20" y="55" width="12" height="3" rx="1" fill="#4b5563"/>
          <rect x="21" y="58" width="10" height="3" rx="1" fill="#374151"/>
          <rect x="22" y="61" width="8"  height="3" rx="1" fill="#4b5563"/>
          {/* Bulb glass */}
          <path d="M26,64 C15,64 8,73 8,84 C8,95 16,104 26,104 C36,104 44,95 44,84 C44,73 37,64 26,64 Z" fill="url(#bulbGlow2)"/>
          {/* Inner highlight */}
          <ellipse cx="20" cy="76" rx="4" ry="5" fill="white" opacity="0.18"/>
          {/* Filament */}
          <path d="M19,86 C21,82 23,86 26,82 C29,78 31,82 33,86" stroke="rgba(255,220,180,0.75)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Outer glow aura */}
          <circle cx="26" cy="84" r="26" fill="rgba(204,18,18,0.07)"/>
        </svg>
      </div>

      <div className="container-site">

        <AnimatedSection>
          <SectionHeader
            label={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {industries.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="card p-6 flex items-start gap-4">
                  <div className="icon-box flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-ink-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-ink-500 leading-snug mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
