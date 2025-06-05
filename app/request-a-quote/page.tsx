import type { Metadata } from "next"
import { QuoteRequestForm } from "./quote-request-form"

export const metadata: Metadata = {
  title: "Request a Quote - Get Custom Pricing for Drone Services",
  description:
    "Get a personalized quote for professional drone photography and videography services. Fast response, competitive pricing, and custom solutions for your project.",
}

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed quote within 24 hours. All quotes are free and
              come with no obligation.
            </p>
          </div>

          {/* Form */}
          <QuoteRequestForm />

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">Fast Response</h3>
              <p className="text-sm text-muted-foreground">
                We respond to all quote requests within 24 hours, often much sooner.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">No Obligation</h3>
              <p className="text-sm text-muted-foreground">
                All quotes are completely free with no commitment required.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Every quote is tailored to your specific project requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
