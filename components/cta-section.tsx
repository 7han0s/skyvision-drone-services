import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-orange-500 text-white">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to Elevate Your Project?</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Get a custom quote for your aerial photography and videography needs. Our team is ready to bring your vision
          to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
            <Link href="/request-a-quote">Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-500"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
