import Hero            from '@/components/sections/Hero'
import StatsBar        from '@/components/sections/StatsBar'
import CompanyIntro    from '@/components/sections/CompanyIntro'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyChooseUs     from '@/components/sections/WhyChooseUs'
import PartnersPreview from '@/components/sections/PartnersPreview'
import Industries      from '@/components/sections/Industries'
import ContactCTA      from '@/components/sections/ContactCTA'
import SectionDivider  from '@/components/ui/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <StatsBar />
      <SectionDivider />
      <CompanyIntro />
      <SectionDivider bg="muted" />
      <ServicesPreview />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider bg="muted" />
      <PartnersPreview />
      <SectionDivider bg="muted" />
      <Industries />
      <SectionDivider />
      <ContactCTA />
    </>
  )
}
