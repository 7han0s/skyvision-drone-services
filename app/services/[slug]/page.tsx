import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

// Service data
const services = {
  "real-estate-photography": {
    title: "Real Estate Photography & Videography",
    description:
      "Elevate your property listings with stunning aerial photography and videography that showcases every angle and highlight of your properties.",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    whatWeOffer: [
      "High-resolution aerial photography (20MP+)",
      "4K cinematic property tour videos",
      "Twilight and golden hour photography",
      "Interior and exterior combination shots",
      "Virtual tour integration ready",
      "Social media optimized content",
    ],
    benefits: [
      "Properties sell 68% faster with aerial photos",
      "Listings with drone footage get 403% more inquiries",
      "Stand out in competitive markets",
      "Showcase property boundaries and surroundings",
      "Highlight unique features and amenities",
    ],
    process: [
      "Initial consultation and site assessment",
      "Flight planning and safety briefing",
      "Professional aerial photography/videography session",
      "Post-production editing and color correction",
      "Delivery of high-resolution files and web-optimized versions",
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "event-coverage": {
    title: "Event Coverage",
    description:
      "Capture the energy, scale, and memorable moments of your events with professional aerial coverage that tells the complete story.",
    heroImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    whatWeOffer: [
      "Live aerial event coverage",
      "Crowd and venue overview shots",
      "Multi-angle event documentation",
      "Same-day highlight reels",
      "Social media ready content packages",
      "Time-lapse event progression videos",
    ],
    benefits: [
      "Showcase event scale and attendance",
      "Create engaging social media content",
      "Document events for future marketing",
      "Provide unique perspectives impossible from ground level",
      "Enhance event promotion and sponsorship value",
    ],
    process: [
      "Pre-event planning and venue reconnaissance",
      "Coordination with event organizers and security",
      "Strategic positioning for optimal coverage",
      "Real-time aerial documentation throughout event",
      "Rapid editing and delivery for immediate use",
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "promotional-content": {
    title: "Promotional Content for Businesses",
    description:
      "Create compelling marketing content with cinematic aerial footage that elevates your brand and engages your audience.",
    heroImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    whatWeOffer: [
      "Brand-focused aerial cinematography",
      "Commercial-grade video production",
      "Social media content packages",
      "Corporate facility showcases",
      "Product launch aerial coverage",
      "Custom creative concept development",
    ],
    benefits: [
      "Increase brand visibility and recognition",
      "Create shareable, viral-worthy content",
      "Stand out from competitors",
      "Showcase company scale and capabilities",
      "Enhance digital marketing campaigns",
    ],
    process: [
      "Creative briefing and concept development",
      "Storyboard creation and shot planning",
      "Professional aerial filming with multiple takes",
      "Advanced post-production and color grading",
      "Delivery in multiple formats for various platforms",
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "tourism-hospitality": {
    title: "Tourism & Hospitality Visuals",
    description:
      "Showcase destinations, hotels, and venues with breathtaking aerial visuals that inspire travelers and attract visitors.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    whatWeOffer: [
      "Destination showcase videos",
      "Hotel and resort aerial tours",
      "Landscape and scenic photography",
      "Tourism marketing content",
      "Virtual tour integration",
      "Seasonal destination documentation",
    ],
    benefits: [
      "Inspire potential visitors with stunning visuals",
      "Showcase location advantages and amenities",
      "Increase booking rates and occupancy",
      "Create compelling marketing materials",
      "Stand out in competitive tourism markets",
    ],
    process: [
      "Destination analysis and optimal timing planning",
      "Weather and lighting condition optimization",
      "Comprehensive aerial documentation",
      "Professional editing with tourism focus",
      "Multi-format delivery for various marketing channels",
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
}

type ServiceSlug = keyof typeof services

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services[params.slug as ServiceSlug]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} - Professional Drone Services`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services[params.slug as ServiceSlug]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">{service.description}</p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href={`/request-a-quote?service=${params.slug}`}>Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive {service.title.toLowerCase()} services include everything you need to create stunning
                aerial content.
              </p>
              <ul className="space-y-3">
                {service.whatWeOffer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.portfolioImages.slice(0, 2).map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${service.title} example ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why you need professional {service.title.toLowerCase()} for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p>{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we deliver exceptional {service.title.toLowerCase()} from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Examples of our {service.title.toLowerCase()} work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.portfolioImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} portfolio ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your {service.title.toLowerCase()} needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
              <Link href={`/request-a-quote?service=${params.slug}`}>Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}
