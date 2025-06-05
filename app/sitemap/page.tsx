import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap - SkyVision Drone Services",
  description: "Complete sitemap of SkyVision Drone Services website. Find all pages and content easily.",
}

const sitePages = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Real Estate Photography", href: "/services/real-estate-photography" },
  { title: "Event Coverage", href: "/services/event-coverage" },
  { title: "Promotional Content", href: "/services/promotional-content" },
  { title: "Tourism & Hospitality", href: "/services/tourism-hospitality" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
  { title: "Request a Quote", href: "/request-a-quote" },
  { title: "Partner with Us", href: "/partner-with-us" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Sitemap</h1>

          <p className="text-lg text-muted-foreground mb-12">
            Find all pages and content on our website easily with this complete sitemap.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitePages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block p-4 border rounded-lg hover:bg-muted/50 hover:border-orange-500 transition-colors"
              >
                <span className="font-medium">{page.title}</span>
                <span className="block text-sm text-muted-foreground mt-1">{page.href}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
