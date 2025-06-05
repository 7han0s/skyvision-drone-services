import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Resort Aerial Tour",
    category: "Tourism & Hospitality",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "video",
  },
  {
    id: 2,
    title: "Modern Estate Showcase",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "photo",
  },
  {
    id: 3,
    title: "Corporate Event Coverage",
    category: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "video",
  },
  {
    id: 4,
    title: "Brand Commercial",
    category: "Promotional Content",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "video",
  },
  {
    id: 5,
    title: "Coastal Property",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "photo",
  },
  {
    id: 6,
    title: "Festival Highlights",
    category: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "video",
  },
]

export function PortfolioPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning aerial photography and videography projects across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-muted">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play button for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
                      <Play className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                )}

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm text-white/80 mb-1">{item.category}</p>
                  <h3 className="font-display font-semibold">{item.title}</h3>
                </div>
              </div>
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
  )
}
