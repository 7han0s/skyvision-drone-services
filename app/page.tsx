import { HeroSection } from "@/components/hero-section"
import { ServicesIntroSection } from "@/components/services-intro-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { PortfolioPreviewSection } from "@/components/portfolio-preview-section"
import { CTASection } from "@/components/cta-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesIntroSection />
      <WhyChooseUsSection />
      <PortfolioPreviewSection />
      <CTASection />
      <BlogPreviewSection />
    </>
  )
}
