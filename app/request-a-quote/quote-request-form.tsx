"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitQuoteRequest } from "./actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="w-full bg-orange-500 hover:bg-orange-600">
      {pending ? "Submitting..." : "Submit Quote Request"}
    </Button>
  )
}

export function QuoteRequestForm() {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState("")
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      // Convert URL parameter to display format
      const serviceMap: { [key: string]: string } = {
        "real-estate-photography": "Real Estate Photography",
        "event-coverage": "Event Coverage",
        "promotional-content": "Promotional Content",
        "tourism-hospitality": "Tourism & Hospitality",
      }
      setSelectedService(serviceMap[serviceParam] || "")
    }
  }, [searchParams])

  async function handleSubmit(formData: FormData) {
    const result = await submitQuoteRequest(formData)
    setMessage(result.message)

    if (result.success) {
      // Reset form
      const form = document.getElementById("quote-form") as HTMLFormElement
      form?.reset()
      setSelectedService("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-2xl">Project Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="quote-form" action={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" type="text" required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select name="serviceType" value={selectedService} onValueChange={setSelectedService} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Real Estate Photography">Real Estate Photography</SelectItem>
                <SelectItem value="Event Coverage">Event Coverage</SelectItem>
                <SelectItem value="Promotional Content">Promotional Content</SelectItem>
                <SelectItem value="Tourism & Hospitality">Tourism & Hospitality</SelectItem>
                <SelectItem value="Other">Other (please specify in description)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Please describe your project, including what you need captured, the purpose of the content, and any specific requirements..."
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Shoot Location *</Label>
              <Input id="location" name="location" type="text" required placeholder="City, State or specific address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date(s)</Label>
              <Input id="preferredDate" name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} />
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-2">
            <Label htmlFor="deliverables">Specific Deliverables</Label>
            <Textarea
              id="deliverables"
              name="deliverables"
              placeholder="e.g., 20 high-resolution photos, 2-minute promotional video, social media package..."
              rows={3}
            />
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range (Optional)</Label>
            <Select name="budget">
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under $500">Under $500</SelectItem>
                <SelectItem value="$500 - $1,000">$500 - $1,000</SelectItem>
                <SelectItem value="$1,000 - $2,500">$1,000 - $2,500</SelectItem>
                <SelectItem value="$2,500 - $5,000">$2,500 - $5,000</SelectItem>
                <SelectItem value="$5,000+">$5,000+</SelectItem>
                <SelectItem value="Discuss">Let's discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <SubmitButton />

          {message && (
            <div
              className={`text-center p-4 rounded-lg ${
                message.includes("success")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
