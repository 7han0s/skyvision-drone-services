import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"
import { ClientPortfolioPage } from "./client-portfolio-page"

export const metadata: Metadata = {
  title: "Portfolio - Our Best Drone Photography & Videography Work",
  description:
    "Explore our portfolio of stunning aerial photography and videography projects across real estate, events, promotional content, and tourism.",
}

const featuredProjects = [
  {
    id: 1,
    title: "Luxury Oceanfront Resort",
    category: "Tourism & Hospitality",
    description:
      "A comprehensive aerial showcase of a 5-star resort featuring stunning ocean views, infinity pools, and tropical landscapes.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    type: "video",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Architectural Marvel",
    category: "Real Estate",
    description: "Showcasing a contemporary home with unique architectural features and panoramic city views.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    type: "photo",
    featured: true,
  },
  {
    id: 3,
    title: "Tech Conference 2024",
    category: "Event Coverage",
    description: "Dynamic aerial coverage of a major technology conference with 10,000+ attendees.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    type: "video",
    featured: true,
  },
]

const portfolioItems = [
  {
    id: 4,
    title: "Corporate Headquarters",
    category: "Promotional Content",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "video",
  },
  {
    id: 5,
    title: "Coastal Estate",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "photo",
  },
  {
    id: 6,
    title: "Music Festival",
    category: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "video",
  },
  {
    id: 7,
    title: "Mountain Resort",
    category: "Tourism & Hospitality",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "photo",
  },
  {
    id: 8,
    title: "Brand Commercial",
    category: "Promotional Content",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "video",
  },
  {
    id: 9,
    title: "Luxury Villa",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "photo",
  },
  {
    id: 10,
    title: "Wedding Celebration",
    category: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "video",
  },
  {
    id: 11,
    title: "Beach Resort",
    category: "Tourism & Hospitality",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "photo",
  },
  {
    id: 12,
    title: "Industrial Facility",
    category: "Promotional Content",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "video",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/50">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our collection of stunning aerial photography and videography projects. Each piece showcases our
            commitment to quality and creative excellence.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/request-a-quote">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
        <ClientPortfolioPage featuredProjects={featuredProjects} portfolioItems={portfolioItems} />
      </Suspense>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create stunning aerial content that showcases your project in the best possible
            light.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
              <Link href="/request-a-quote">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-orange-600/20 backdrop-blur-sm"
            >
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
