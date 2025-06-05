import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Professional Drone Services Team",
  description:
    "Learn about SkyVision Drone Services, our mission, values, and the experienced team behind our professional aerial photography and videography services.",
}

const values = [
  {
    title: "Excellence",
    description: "We strive for perfection in every shot, delivering only the highest quality aerial content.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and creative techniques to push the boundaries of aerial photography.",
    icon: Target,
  },
  {
    title: "Reliability",
    description: "Consistent, professional service you can count on for every project, big or small.",
    icon: Users,
  },
  {
    title: "Passion",
    description: "Our love for aerial photography drives us to capture breathtaking perspectives that inspire.",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About SkyVision</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We are a team of passionate aerial photographers and videographers dedicated to capturing the world from
                extraordinary perspectives. With years of experience and cutting-edge technology, we bring your vision
                to life through stunning drone footage.
              </p>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Drone in flight"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2020, SkyVision Drone Services emerged from a simple passion: capturing the world from above.
              What started as a hobby quickly evolved into a professional service when we realized the transformative
              power of aerial perspective in storytelling and marketing.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Today, we work with real estate professionals, event organizers, businesses, and tourism companies to
              create compelling visual content that stands out in a crowded marketplace. Our commitment to quality,
              safety, and innovation has made us a trusted partner for clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional drone equipment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Why Choose SkyVision?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    All our pilots hold valid commercial drone licenses and our operations are fully insured, giving you
                    peace of mind.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">Professional Equipment</h3>
                  <p className="text-muted-foreground">
                    We use the latest drone technology and professional-grade cameras to ensure the highest quality
                    output.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">Quick Turnaround</h3>
                  <p className="text-muted-foreground">
                    Fast editing and delivery without compromising quality, so you can use your content when you need
                    it.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Professional quality at affordable rates, with transparent pricing and no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our aerial expertise can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
              <Link href="/request-a-quote">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
