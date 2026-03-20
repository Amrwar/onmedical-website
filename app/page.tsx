import Hero            from '@/components/sections/Hero'
import StatsBar        from '@/components/sections/StatsBar'
import CompanyIntro    from '@/components/sections/CompanyIntro'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyChooseUs     from '@/components/sections/WhyChooseUs'
import PartnersPreview from '@/components/sections/PartnersPreview'
import Industries      from '@/components/sections/Industries'
import ContactCTA      from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CompanyIntro />
      <ServicesPreview />
      <WhyChooseUs />
      <PartnersPreview />
      <Industries />
      <ContactCTA />
    </>
  )
}
