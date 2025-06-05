import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - SkyVision Drone Services",
  description:
    "Terms of service for SkyVision Drone Services. Review our terms and conditions for using our website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>

          <p className="text-lg text-muted-foreground mb-8">Last updated: January 1, 2024</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website and our services, you accept and agree to be bound by the terms and
            provision of this agreement.
          </p>

          <h2>Services</h2>
          <p>
            SkyVision Drone Services provides professional aerial photography and videography services. All services are
            subject to availability and our professional standards.
          </p>

          <h2>Client Responsibilities</h2>
          <ul>
            <li>Provide accurate project information and requirements</li>
            <li>Ensure legal access to filming locations</li>
            <li>Obtain necessary permits when required</li>
            <li>Provide timely feedback during the project process</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Payment terms will be specified in individual project agreements. Generally, a deposit is required to secure
            services, with the balance due upon project completion.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Upon full payment, clients receive usage rights to the delivered content as specified in the project
            agreement. SkyVision retains the right to use content for portfolio and marketing purposes unless otherwise
            agreed.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            SkyVision's liability is limited to the amount paid for services. We are not liable for indirect,
            incidental, or consequential damages.
          </p>

          <h2>Weather and Cancellation Policy</h2>
          <p>
            Drone operations are weather-dependent. Services may be rescheduled due to unsafe weather conditions at no
            additional cost to the client.
          </p>

          <h2>Contact Information</h2>
          <p>For questions about these terms, contact us at legal@skyvision-drones.com or (555) 123-4567.</p>
        </div>
      </div>
    </div>
  )
}
