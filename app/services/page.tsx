import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Calendar, Megaphone, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Drone Services - Professional Aerial Photography & Videography",
  description:
    "Comprehensive drone services including real estate photography, event coverage, promotional content, and tourism visuals. Professional aerial solutions for every need.",
}

const services = [
  {
    title: "Real Estate Photography & Videography",
    description:
      "Stunning aerial shots that showcase properties from their best angles, helping listings stand out and sell faster. Perfect for residential and commercial real estate marketing.",
    features: [
      "High-resolution aerial photography",
      "Cinematic property tour videos",
      "Twilight and golden hour shots",
      "Interior and exterior combinations",
      "Fast 24-48 hour turnaround",
    ],
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/real-estate-photography",
  },
  {
    title: "Event Coverage",
    description:
      "Capture the scale and excitement of your events with dynamic aerial footage that tells the complete story. From corporate events to festivals and weddings.",
    features: [
      "Live event aerial coverage",
      "Crowd and venue overview shots",
      "Multi-angle event documentation",
      "Same-day highlight reels",
      "Social media ready content",
    ],
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/event-coverage",
  },
  {
    title: "Promotional Content for Businesses",
    description:
      "Cinematic aerial content that elevates your brand and creates compelling marketing materials. Perfect for commercials, social media, and corporate communications.",
    features: [
      "Brand-focused aerial cinematography",
      "Commercial-grade video production",
      "Social media content packages",
      "Corporate facility showcases",
      "Custom creative concepts",
    ],
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/promotional-content",
  },
  {
    title: "Tourism & Hospitality Visuals",
    description:
      "Showcase destinations and venues with breathtaking aerial visuals that inspire and attract visitors. Perfect for hotels, resorts, and tourism boards.",
    features: [
      "Destination showcase videos",
      "Hotel and resort aerial tours",
      "Landscape and scenic photography",
      "Tourism marketing content",
      "Virtual tour integration",
    ],
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/tourism-hospitality",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/50">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional drone photography and videography services tailored to meet your specific needs. From real
            estate to events, we deliver exceptional aerial content that makes an impact.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/request-a-quote">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="font-display font-semibold text-xl mb-4">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600">
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/request-a-quote?service=${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom aerial solutions tailored to your unique
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-orange-600/20 backdrop-blur-sm"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
