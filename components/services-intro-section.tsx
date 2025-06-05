import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Calendar, Megaphone, MapPin } from "lucide-react"

const services = [
  {
    title: "Real Estate Photography",
    description:
      "Stunning aerial shots that showcase properties from their best angles, helping listings stand out and sell faster.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/real-estate-photography",
  },
  {
    title: "Event Coverage",
    description:
      "Capture the scale and excitement of your events with dynamic aerial footage that tells the complete story.",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/event-coverage",
  },
  {
    title: "Promotional Content",
    description:
      "Cinematic aerial content that elevates your brand and creates compelling marketing materials for any business.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/promotional-content",
  },
  {
    title: "Tourism & Hospitality",
    description: "Showcase destinations and venues with breathtaking aerial visuals that inspire and attract visitors.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    href: "/services/tourism-hospitality",
  },
]

export function ServicesIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From real estate to events, we provide professional drone services that deliver exceptional results for
            every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
