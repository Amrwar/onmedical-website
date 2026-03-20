'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const faqs = [
  {
    q: 'What types of institutions do you supply?',
    a: 'We supply oncology hospitals, radiation therapy centres, medical universities, government health institutions, research institutes, and private medical facilities throughout Egypt. Every engagement is tailored to the specific technical and operational requirements of the institution.',
  },
  {
    q: 'Do you provide after-sales support for all equipment you supply?',
    a: 'Yes. We provide long-term after-sales service, preventive maintenance guidance, calibration support, and ongoing technical consultation for all equipment distributed through ON Medical. Our commitment extends well beyond the point of delivery.',
  },
  {
    q: 'Are you the authorized representative for your partner manufacturers?',
    a: 'Yes. ON Medical is the authorized Egyptian market representative for PTW Freiburg (Germany), Ashland Medical (USA), and Klarity (China). All equipment is sourced directly from these manufacturers and imported in full compliance with Egyptian medical device regulations.',
  },
  {
    q: 'Are you compliant with Egyptian medical device import regulations?',
    a: 'Absolutely. All imports are conducted in strict accordance with Egyptian medical device regulations, customs procedures, and applicable healthcare standards. All equipment imported and distributed by ON Medical is intended exclusively for legitimate medical and scientific use.',
  },
  {
    q: 'Can international manufacturers contact you about representation in Egypt?',
    a: 'Yes. We welcome discussions with specialized international manufacturers seeking professional representation in the Egyptian market. ON Medical has the institutional network, regulatory knowledge, and technical credibility to represent focused medical technology brands. Please use the enquiry form or contact us directly at osama@onmedical.net.',
  },
]

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                isOpen
                  ? 'border-brand-200 shadow-card-focus'
                  : 'border-ink-200/70 hover:border-ink-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`w-full flex items-center justify-between gap-5 px-6 py-4 text-left transition-colors ${
                  isOpen
                    ? 'bg-brand-50/50'
                    : 'bg-white hover:bg-ink-50/70'
                }`}
              >
                <span className="text-[13px] font-semibold text-ink-900 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={15}
                  strokeWidth={1.75}
                  className={`text-brand-600 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-64' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-4 bg-ink-50/60 border-t border-ink-200/60">
                  <p className="text-[13px] text-ink-500 leading-[1.8]">{faq.a}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )
      })}
    </div>
  )
}
