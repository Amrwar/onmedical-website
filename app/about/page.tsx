import type { Metadata } from 'next'
import { CheckCircle2, Target, Eye, Cpu, BookOpen, Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'About ON Medical Company',
  description:
    'Learn about ON Medical Company — established in 2014, specializing in oncology and radiotherapy equipment distribution in Egypt, representing international manufacturers including PTW Freiburg, Ashland Medical, and Klarity.',
}

const timelineEvents = [
  {
    year: '2005',
    title: 'Foundations of Expertise',
    description:
      'The founders of ON Medical begin their professional careers in radiation therapy technologies and medical physics, gaining hands-on experience with international companies and Egyptian healthcare institutions.',
  },
  {
    year: '2014',
    title: 'ON Medical Company Founded',
    description:
      'ON Medical Company is formally established in Cairo, Egypt, with a clear focus on oncology equipment distribution and market representation for international manufacturers.',
  },
  {
    year: '2015–2018',
    title: 'Building Institutional Relationships',
    description:
      'The company develops partnerships with oncology hospitals, radiation therapy centres, medical universities, government health institutions, and private medical facilities.',
  },
  {
    year: '2018–Present',
    title: 'Portfolio Expansion',
    description:
      'ON Medical deepens its international partnerships and expands its technology portfolio, solidifying its position as a trusted specialist distributor in the Egyptian healthcare sector.',
  },
]

const expertiseAreas = [
  'Radiotherapy equipment and systems',
  'Radiation measurement and dosimetry',
  'Medical physics quality assurance',
  'Oncology treatment technologies',
  'Treatment planning support',
  'Scientific research and publication',
]

const visionGoals = [
  'Expand partnerships with leading international manufacturers',
  'Introduce innovative medical technologies to the Egyptian market',
  'Support hospitals and treatment centers with reliable technical expertise',
  'Maintain the highest professional and ethical standards in medical distribution',
  'Build toward regional leadership across the Middle East and North Africa',
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-teal-900/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-tight relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="tag text-teal-300 bg-teal-500/15 border-teal-400/25 mb-4 inline-flex">
                About ON Medical
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Dedicated to Advancing Oncology Technology
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                Since 2014, ON Medical Company has connected Egyptian healthcare with world-class radiotherapy, radiation measurement, and medical physics technologies — with the technical depth that specialized medicine demands.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <SectionHeader
                tag="Company Overview"
                title="Who We Are"
                align="left"
              />
              <div className="mt-7 space-y-4 text-slate-500 leading-relaxed text-base">
                <p>
                  ON Medical Company is a specialized Egyptian organization operating in the field of medical and oncology equipment distribution, technical support, and market representation for international manufacturers in Egypt.
                </p>
                <p>
                  The name &ldquo;ON Medical&rdquo; reflects the company&apos;s defining focus: <strong className="text-navy-800 font-semibold">Oncology</strong>. This commitment drives every aspect of our work, from the partners we choose to the institutions we serve.
                </p>
                <p>
                  We work closely with hospitals, oncology centres, medical universities, and specialized medical institutes to supply high-quality equipment and services used in radiation therapy, radiation measurement, and treatment planning — ensuring that the most advanced technologies reach the hands of Egyptian medical professionals.
                </p>
                <p>
                  ON Medical operates in full compliance with applicable medical device import regulations, customs procedures, and healthcare standards in Egypt, ensuring that all imported equipment is intended exclusively for legitimate medical and scientific use.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              {/* Visual block */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 p-8 lg:p-10 border border-navy-700">
                <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl" />
                <div className="relative z-10 space-y-6">
                  {[
                    { label: 'Sector Focus',   value: 'Oncology & Radiotherapy Technology' },
                    { label: 'Headquarters',   value: 'Nasr City, Cairo, Egypt' },
                    { label: 'Founded',        value: '2014' },
                    { label: 'Expertise Since', value: '2005' },
                    { label: 'Partners',       value: 'PTW Freiburg · Ashland Medical · Klarity' },
                    { label: 'Market',         value: 'Egypt — with MENA expansion goals' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                      <span className="text-xs uppercase tracking-widest text-white/35 font-semibold">{item.label}</span>
                      <span className="text-sm font-medium text-white/80">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <AnimatedSection>
            <SectionHeader tag="Our Direction" title="Mission & Vision" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14">
            {/* Mission */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl border border-medical-border shadow-card p-8 lg:p-10 h-full flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <Target size={22} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1">Our Mission</h3>
                  <div className="w-8 h-0.5 rounded-full bg-teal-500 mb-5" />
                  <p className="text-slate-500 leading-relaxed text-base">
                    To provide world-class representation and distribution services to the Egyptian healthcare market through strong partnerships with international manufacturers and by delivering reliable technical and commercial support to medical institutions.
                  </p>
                  <p className="text-slate-500 leading-relaxed text-base mt-4">
                    We are committed to contributing to the improvement of oncology and radiotherapy services in Egypt by introducing advanced technologies and ensuring their proper implementation in hospitals and medical centers.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection direction="right">
              <div className="bg-navy-950 rounded-2xl border border-navy-800 shadow-card p-8 lg:p-10 h-full flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center">
                  <Eye size={22} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Our Vision</h3>
                  <div className="w-8 h-0.5 rounded-full bg-teal-500 mb-5" />
                  <p className="text-white/60 leading-relaxed text-base mb-6">
                    ON Medical strives to become a leading specialized distributor in the Middle East and North Africa region for radiotherapy technology, radiation measurement equipment, and medical physics solutions.
                  </p>
                  <ul className="space-y-3">
                    {visionGoals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2.5 text-sm text-white/65">
                        <CheckCircle2 size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <AnimatedSection>
            <SectionHeader
              tag="Our History"
              title="A Decade of Specialized Service"
              subtitle="From foundational expertise to a growing network of institutional partnerships — the ON Medical story."
            />
          </AnimatedSection>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-[18px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-400/50 to-transparent lg:-translate-x-px" />

            <div className="space-y-10 lg:space-y-12">
              {timelineEvents.map((event, i) => (
                <AnimatedSection key={event.year} delay={i * 0.1}>
                  <div className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content card */}
                    <div className="ml-10 lg:ml-0 lg:w-[46%] lg:px-8">
                      <div className="card-base p-6 lg:p-8">
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 block">{event.year}</span>
                        <h3 className="text-lg font-bold text-navy-900 mb-2">{event.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-6 w-[15px] h-[15px] rounded-full bg-teal-500 border-4 border-white shadow-md z-10" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="tag mb-4 inline-flex">Technical Expertise</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-4">
                Scientific Depth Meets Practical Experience
              </h2>
              <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
              <p className="text-slate-500 leading-relaxed text-base mb-5">
                The management and technical leadership of ON Medical possess extensive, hands-on experience spanning two decades in the Egyptian and international medical technology landscape. This is not a generalist operation — it is a company built by specialists, for specialists.
              </p>
              <p className="text-slate-500 leading-relaxed text-base mb-8">
                Our technical leadership has also contributed to peer-reviewed scientific research and publications in the field of radiotherapy quality assurance and treatment planning — a foundation that informs our consultative approach and strengthens the trust placed in us by medical institutions.
              </p>

              <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-medical-border shadow-card">
                <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Scientific Research Contributions</p>
                  <p className="text-xs text-slate-400">Radiotherapy quality assurance &amp; treatment planning publications</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-medical-border shadow-card p-8 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu size={18} className="text-teal-600" />
                  <h3 className="text-base font-bold text-navy-900">Areas of Technical Expertise</h3>
                </div>
                <div className="space-y-3">
                  {expertiseAreas.map((area, i) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 p-4 rounded-lg bg-medical-light border border-medical-border"
                    >
                      <span className="text-xs font-bold text-teal-600 w-6 text-center flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-medium text-navy-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
