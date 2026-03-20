'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const faqs = [
  {
    q: 'What types of institutions do you supply?',
    a: 'We supply oncology hospitals, radiation therapy centres, medical universities, government health institutions, research institutes, and private medical facilities throughout Egypt.',
  },
  {
    q: 'Do you provide after-sales support for all equipment you supply?',
    a: 'Yes. We provide long-term after-sales service, preventive maintenance guidance, calibration support, and ongoing technical consultation for all equipment distributed through ON Medical.',
  },
  {
    q: 'Are you the authorized representative for your partner manufacturers?',
    a: 'Yes. ON Medical is the authorized Egyptian market representative for PTW Freiburg (Germany), Ashland Medical (USA), and Klarity (China).',
  },
  {
    q: 'Are you compliant with Egyptian medical device import regulations?',
    a: 'Absolutely. All imports are conducted in strict accordance with Egyptian medical device regulations, customs procedures, and healthcare standards. All equipment is intended exclusively for legitimate medical and scientific use.',
  },
  {
    q: 'Can international manufacturers contact you about representation in Egypt?',
    a: 'Yes. We welcome discussions with specialized international manufacturers seeking professional representation in the Egyptian market. Please use the enquiry form or contact us directly at osama@onmedical.net.',
  },
]

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <AnimatedSection key={i} delay={i * 0.06}>
          <div className="border border-medical-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-medical-light transition-colors"
            >
              <span className="text-sm font-semibold text-navy-900">{faq.q}</span>
              <ChevronDown
                size={16}
                className={`text-teal-500 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 bg-medical-light border-t border-medical-border">
                <p className="text-sm text-slate-500 leading-relaxed pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
