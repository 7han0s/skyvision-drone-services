import type { Metadata } from "next"
import { PilotApplicationForm } from "./pilot-application-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Partner with Us - Join Our Drone Pilot Network",
  description:
    "Join SkyVision's network of professional drone pilots. Access to clients, marketing support, and competitive compensation for qualified pilots.",
}

const benefits = [
  {
    title: "Access to Clients",
    description: "Get connected with high-quality clients looking for professional drone services.",
    icon: Users,
  },
  {
    title: "Marketing Support",
    description: "Benefit from our marketing efforts and brand recognition in the industry.",
    icon: TrendingUp,
  },
  {
    title: "Professional Network",
    description: "Join a community of skilled pilots and share knowledge and opportunities.",
    icon: Shield,
  },
]

const requirements = [
  "Valid commercial drone pilot license (Part 107 or equivalent)",
  "Minimum 2 years of professional drone operation experience",
  "Professional-grade drone equipment (4K capable)",
  "Comprehensive insurance coverage",
  "Portfolio demonstrating high-quality work",
  "Excellent communication and client service skills",
]

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Partner with Us</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our network of professional drone pilots and gain access to exciting projects, quality clients, and
              ongoing support. We're looking for skilled pilots who share our commitment to excellence.
            </p>
          </div>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Benefits of Partnering</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={benefit.title}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Requirements & Qualifications</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We maintain high standards to ensure the best service for our clients. Here's what we're looking for
                  in our pilot partners:
                </p>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold mb-6">How it Works</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Submit Application</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete our application form with your details and portfolio.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Review Process</h3>
                      <p className="text-sm text-muted-foreground">
                        We review your application and portfolio within 5 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Interview & Onboarding</h3>
                      <p className="text-sm text-muted-foreground">
                        Successful candidates are invited for an interview and onboarding process.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Start Receiving Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Begin receiving project opportunities matched to your skills and location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <PilotApplicationForm />
        </div>
      </div>
    </div>
  )
}
