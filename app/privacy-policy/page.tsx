import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - SkyVision Drone Services",
  description:
    "Privacy policy for SkyVision Drone Services. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-lg text-muted-foreground mb-8">Last updated: January 1, 2024</p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, request a quote,
            contact us, or subscribe to our newsletter. This may include your name, email address, phone number, and
            project details.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and marketing communications (with your consent)</li>
            <li>Analyze usage patterns to improve our website</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except as described in this policy or as required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You may also opt out of receiving
            marketing communications from us at any time.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@skyvision-drones.com or
            (555) 123-4567.
          </p>
        </div>
      </div>
    </div>
  )
}
