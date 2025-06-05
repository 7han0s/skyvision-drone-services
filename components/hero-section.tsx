import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="hero-video" poster="/placeholder.svg?height=1080&width=1920">
          <source src="/hero-drone-footage.mp4" type="video/mp4" />
          {/* Fallback image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Elevate Your Vision
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional drone photography and videography services that capture your world from extraordinary
          perspectives
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/request-a-quote">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator text-white/70">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
