import Link from "next/link"
import { Camera, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-orange-500" />
              <span className="font-display font-bold text-xl">SkyVision</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional drone photography and videography services delivering cinematic quality aerial content for
              your business needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-orange-500">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/real-estate-photography" className="text-muted-foreground hover:text-orange-500">
                  Real Estate Photography
                </Link>
              </li>
              <li>
                <Link href="/services/event-coverage" className="text-muted-foreground hover:text-orange-500">
                  Event Coverage
                </Link>
              </li>
              <li>
                <Link href="/services/promotional-content" className="text-muted-foreground hover:text-orange-500">
                  Promotional Content
                </Link>
              </li>
              <li>
                <Link href="/services/tourism-hospitality" className="text-muted-foreground hover:text-orange-500">
                  Tourism & Hospitality
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="text-muted-foreground hover:text-orange-500">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and aerial photography tips.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-8 border-t pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SkyVision Drone Services. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-orange-500">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-orange-500">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-orange-500">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
