import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Target, Eye, Cpu, BookOpen, Mail, Phone, Award, Users } from 'lucide-react'
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

const companyFacts = [
  { label: 'Sector Focus',    value: 'Oncology & Radiotherapy Technology' },
  { label: 'Headquarters',    value: 'Nasr City, Cairo, Egypt' },
  { label: 'Founded',         value: '2014' },
  { label: 'Expertise Since', value: '2005' },
  { label: 'Partners',        value: 'PTW Freiburg · Ashland Medical · Klarity' },
  { label: 'Market',          value: 'Egypt — with MENA expansion goals' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none opacity-60"
          style={{ backgroundSize: '28px 28px' }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgb(229 25 25 / 0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container-site relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600 border border-brand-200 bg-brand-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                About ON Medical
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                Dedicated to Advancing{' '}
                <span className="text-gradient-brand">Oncology Technology</span>
              </h1>
              <p className="text-ink-600 text-[15px] lg:text-base leading-[1.8] max-w-2xl">
                Since 2014, ON Medical Company has connected Egyptian healthcare with world-class
                radiotherapy, radiation measurement, and medical physics technologies — with the
                technical depth that specialized medicine demands.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Company Overview ──────────────────────────────── */}
      <section className="section-padding bg-white border-t border-ink-200/60">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <AnimatedSection direction="left" className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <span className="section-label">Company Overview</span>
                <h2 className="section-title !text-left">Who We Are</h2>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-500">
                <p>
                  ON Medical Company is a specialized Egyptian organization operating in the field
                  of medical and oncology equipment distribution, technical support, and market
                  representation for international manufacturers in Egypt.
                </p>
                <p>
                  The name &ldquo;ON Medical&rdquo; reflects the company&apos;s defining focus:{' '}
                  <strong className="text-ink-800 font-semibold">Oncology</strong>. This commitment
                  drives every aspect of our work, from the partners we choose to the institutions
                  we serve.
                </p>
                <p>
                  We work closely with hospitals, oncology centres, medical universities, and
                  specialized medical institutes to supply high-quality equipment and services used
                  in radiation therapy, radiation measurement, and treatment planning — ensuring
                  that the most advanced technologies reach the hands of Egyptian medical
                  professionals.
                </p>
                <p>
                  ON Medical operates in full compliance with applicable medical device import
                  regulations, customs procedures, and healthcare standards in Egypt, ensuring that
                  all imported equipment is intended exclusively for legitimate medical and
                  scientific use.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-ink-200 shadow-card">
                {/* Red top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400" />

                {/* Panel header */}
                <div className="px-7 py-5 border-b border-ink-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse-dot" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-400">
                    Company Profile
                  </span>
                </div>

                {/* Facts */}
                <div className="divide-y divide-ink-100">
                  {companyFacts.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 px-7 py-4 hover:bg-ink-50 transition-colors">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-ink-400 font-semibold">
                        {label}
                      </span>
                      <span className="text-[13px] font-medium text-ink-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Founder / Leadership ──────────────────────────── */}
      <section className="section-padding bg-ink-50 border-y border-ink-200/60">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Leadership"
              title="Meet the Founder"
              subtitle="A decade of specialized expertise in oncology and radiotherapy technology, built on a foundation of scientific rigor and institutional trust."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Photos */}
            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_4px_24px_rgb(0_0_0_/_0.10)] border border-ink-200">
                  <Image
                    src="/owner-1.jpeg"
                    alt="Osama Hefny — Founder & Managing Director, ON Medical Company"
                    fill
                    className="object-cover object-top"
                    sizes="25vw"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_4px_24px_rgb(0_0_0_/_0.08)] border border-ink-200 mt-8">
                  <Image
                    src="/owner-3.jpeg"
                    alt="Osama Hefny — ON Medical Company"
                    fill
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Bio content */}
            <AnimatedSection direction="right" className="lg:col-span-7 flex flex-col gap-7">

              {/* Name & title */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-brand-600 rounded-full" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    Founder &amp; Managing Director
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-ink-900 tracking-tight">
                  Osama Hefny
                </h2>
                <p className="text-ink-500 text-sm mt-1">ON Medical Company · Cairo, Egypt</p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-600">
                <p>
                  With over two decades of experience in medical physics, radiotherapy technology,
                  and oncology equipment, Osama founded ON Medical Company in 2014 with a singular
                  vision: to bridge the gap between world-class international manufacturers and
                  Egypt&apos;s growing healthcare sector.
                </p>
                <p>
                  His technical expertise spans radiation measurement, dosimetry, treatment
                  planning systems, and quality assurance — knowledge that has been applied in
                  collaboration with leading hospitals, oncology centres, and medical universities
                  across Egypt.
                </p>
                <p>
                  Osama&apos;s scientific contributions extend to peer-reviewed publications in
                  radiotherapy quality assurance and treatment planning, underscoring the
                  consultative depth that ON Medical brings to every institutional partnership.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Award,   label: 'Founded',       value: '2014' },
                  { icon: Users,   label: 'Institutions',  value: '50+ Served' },
                  { icon: BookOpen, label: 'Research',     value: 'Published' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-ink-200 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
                      <Icon size={15} className="text-brand-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-ink-400 font-semibold">{label}</p>
                      <p className="text-[14px] font-bold text-ink-900 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-ink-200">
                <a
                  href="mailto:osama@onmedical.net"
                  className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors font-medium"
                >
                  <Mail size={14} className="text-brand-600" />
                  osama@onmedical.net
                </a>
                <a
                  href="tel:+20224115184"
                  className="flex items-center gap-2 text-[13px] text-ink-600 hover:text-brand-600 transition-colors font-medium"
                >
                  <Phone size={14} className="text-brand-600" />
                  +20 2 24115184
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────── */}
      <section className="section-padding bg-white border-b border-ink-200/60">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader label="Our Direction" title="Mission &amp; Vision" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">

            {/* Mission */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 lg:p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-t-2xl" />
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100/80 flex items-center justify-center">
                  <Target size={22} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-1">Our Mission</h3>
                  <div className="w-8 h-0.5 rounded-full bg-brand-600 mb-5" />
                  <p className="text-ink-500 leading-[1.8] text-[14px] mb-4">
                    To provide world-class representation and distribution services to the Egyptian
                    healthcare market through strong partnerships with international manufacturers
                    and by delivering reliable technical and commercial support to medical
                    institutions.
                  </p>
                  <p className="text-ink-500 leading-[1.8] text-[14px]">
                    We are committed to contributing to the improvement of oncology and radiotherapy
                    services in Egypt by introducing advanced technologies and ensuring their proper
                    implementation in hospitals and medical centers.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 lg:p-10 h-full flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-600 to-brand-400 rounded-l-2xl" />
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100/80 flex items-center justify-center">
                  <Eye size={22} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-1">Our Vision</h3>
                  <div className="w-8 h-0.5 rounded-full bg-brand-600 mb-5" />
                  <p className="text-ink-600 leading-[1.8] text-[14px] mb-6">
                    ON Medical strives to become a leading specialized distributor in the Middle
                    East and North Africa region for radiotherapy technology, radiation measurement
                    equipment, and medical physics solutions.
                  </p>
                  <ul className="space-y-3">
                    {visionGoals.map(goal => (
                      <li key={goal} className="flex items-start gap-2.5 text-[13px] text-ink-600">
                        <CheckCircle2
                          size={14}
                          className="text-brand-600 mt-0.5 flex-shrink-0"
                          strokeWidth={2}
                        />
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

      {/* ── History Timeline ──────────────────────────────── */}
      <section className="section-padding bg-ink-50 border-b border-ink-200/60">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              label="Our History"
              title="A Decade of Specialized Service"
              subtitle="From foundational expertise to a growing network of institutional partnerships — the ON Medical story."
            />
          </AnimatedSection>

          <div className="relative mt-16">
            {/* Vertical center line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-600/30 to-transparent -translate-x-px" />
            {/* Vertical left line (mobile) */}
            <div className="lg:hidden absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-600/30 to-transparent" />

            <div className="space-y-10 lg:space-y-12">
              {timelineEvents.map((event, i) => (
                <AnimatedSection key={event.year} delay={i * 0.1}>
                  <div
                    className={`relative flex gap-6 lg:gap-0 ${
                      i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content card */}
                    <div className="ml-10 lg:ml-0 lg:w-[46%] lg:px-8">
                      <div className="card p-6 lg:p-8">
                        <span className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.15em] mb-2 block">
                          {event.year}
                        </span>
                        <h3 className="text-[16px] font-bold text-ink-900 mb-2.5 leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-[13px] text-ink-500 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot (desktop) / left dot (mobile) */}
                    <div
                      className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-6
                                  w-[17px] h-[17px] rounded-full bg-brand-600 border-4 border-white
                                  shadow-[0_0_0_1px_rgb(204_18_18_/_0.3)] z-10"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Expertise ───────────────────────────── */}
      <section className="section-padding bg-white border-b border-ink-200/60">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <AnimatedSection direction="left" className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="section-label">Technical Expertise</span>
                <h2 className="section-title !text-left">
                  Scientific Depth Meets Practical Experience
                </h2>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink-500">
                <p>
                  The management and technical leadership of ON Medical possess extensive,
                  hands-on experience spanning two decades in the Egyptian and international
                  medical technology landscape. This is not a generalist operation — it is a
                  company built by specialists, for specialists.
                </p>
                <p>
                  Our technical leadership has also contributed to peer-reviewed scientific
                  research and publications in the field of radiotherapy quality assurance and
                  treatment planning — a foundation that informs our consultative approach and
                  strengthens the trust placed in us by medical institutions.
                </p>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-ink-200 shadow-card">
                <div className="w-11 h-11 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">
                    Scientific Research Contributions
                  </p>
                  <p className="text-[11px] text-ink-400 mt-0.5">
                    Radiotherapy quality assurance &amp; treatment planning publications
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-ink-200 shadow-card p-8 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-ink-200/60">
                  <div className="icon-box">
                    <Cpu size={17} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[15px] font-bold text-ink-900">
                    Areas of Technical Expertise
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {expertiseAreas.map((area, i) => (
                    <div
                      key={area}
                      className="flex items-center gap-4 p-4 rounded-lg bg-ink-50 border border-ink-200/60 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 group"
                    >
                      <span className="text-[11px] font-black text-brand-600 w-6 text-center flex-shrink-0 group-hover:text-brand-700">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] font-medium text-ink-800">{area}</span>
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
