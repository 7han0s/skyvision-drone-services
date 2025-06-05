import { Shield, Video, Clock, DollarSign } from "lucide-react"

const benefits = [
  {
    title: "Licensed Drone Operators",
    description:
      "All our pilots are fully licensed and certified, ensuring safe and legal operations for every project.",
    icon: Shield,
  },
  {
    title: "Cinematic 4K Output",
    description: "High-quality 4K video and photography that delivers professional-grade results for your business.",
    icon: Video,
  },
  {
    title: "Fast Turnaround",
    description:
      "Quick delivery of edited content without compromising on quality, getting your project completed on time.",
    icon: Clock,
  },
  {
    title: "Competitive Pricing",
    description:
      "Affordable rates that provide exceptional value for professional aerial photography and videography services.",
    icon: DollarSign,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose SkyVision?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver aerial content that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon
            return (
              <div key={benefit.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
