'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight, Calendar, Building2, MapPin, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export interface CertData {
  title: string
  issuer: string
  date: string
  country: string
  category: string
  description: string
  topics: string[]
  image: string
}

interface Labels {
  topicsCovered: string
}

export default function CertificateViewer({ certs, labels }: { certs: CertData[]; labels: Labels }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)

  const prev = useCallback(() => {
    if (lightboxIdx === null) return
    setLightboxIdx((lightboxIdx - 1 + certs.length) % certs.length)
  }, [lightboxIdx, certs.length])

  const next = useCallback(() => {
    if (lightboxIdx === null) return
    setLightboxIdx((lightboxIdx + 1) % certs.length)
  }, [lightboxIdx, certs.length])

  useEffect(() => {
    if (lightboxIdx === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxIdx, prev, next])

  return (
    <>
      {/* ── Thumbnail strip ─────────────────────────────── */}
      <div className="mt-10 mb-2">
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {certs.map((cert, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="flex-shrink-0 group relative w-[72px] h-[88px] rounded-xl overflow-hidden border-2 border-ink-200 hover:border-brand-500 transition-all duration-200 hover:scale-105 hover:shadow-card focus:outline-none focus:border-brand-600"
              title={cert.title}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
                sizes="72px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Certificate cards ────────────────────────────── */}
      <div className="space-y-6 mt-14">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i % 3 === 0 ? 0 : 0.06}>
            <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden" style={{ border: '2px solid #e5e7eb', borderLeft: '2px solid #CC1212', borderRight: '2px solid #CC1212' }}>
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Certificate image — clickable */}
                <div className="lg:col-span-2 relative bg-brand-50 border-b lg:border-b-0 lg:border-r border-brand-100 flex items-center justify-center p-6 min-h-[260px] group cursor-zoom-in"
                  onClick={() => openLightbox(i)}
                >
                  <div className="relative w-full max-w-[300px] h-[220px] lg:h-[260px]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Zoom hint overlay */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 text-white text-[11px] font-semibold rounded-lg backdrop-blur-sm">
                      <ZoomIn size={12} /> Click to zoom
                    </span>
                  </div>
                </div>

                {/* Certificate details */}
                <div className="lg:col-span-3 p-7 lg:p-9 flex flex-col gap-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-50 border border-brand-100 text-brand-700">
                      {cert.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[12px] text-ink-500">
                      <Calendar size={12} strokeWidth={1.75} className="text-brand-600" />
                      <span className="font-semibold text-ink-800">{cert.date}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-ink-900 leading-snug">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={12} className="text-brand-600" strokeWidth={1.75} />
                        <span className="text-[12px] font-semibold text-ink-600">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-brand-600" strokeWidth={1.75} />
                        <span className="text-[12px] text-ink-400">{cert.country}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-ink-500 leading-relaxed">{cert.description}</p>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                      {labels.topicsCovered}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cert.topics.map(topic => (
                        <li key={topic} className="flex items-start gap-2 text-[12px] text-ink-600">
                          <CheckCircle2 size={13} className="text-brand-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-2xl w-full max-h-[85vh]"
            style={{ aspectRatio: '3/4' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={certs[lightboxIdx].image}
              alt={certs[lightboxIdx].title}
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 95vw, 672px"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-[13px] font-semibold drop-shadow">{certs[lightboxIdx].title}</p>
            <p className="text-white/60 text-[11px] mt-0.5">
              {certs[lightboxIdx].issuer} · {certs[lightboxIdx].date}
            </p>
            <p className="text-white/40 text-[10px] mt-1">
              {lightboxIdx + 1} / {certs.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
