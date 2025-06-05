"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitPilotApplication } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="w-full bg-orange-500 hover:bg-orange-600">
      {pending ? "Submitting Application..." : "Submit Application"}
    </Button>
  )
}

export function PilotApplicationForm() {
  const [message, setMessage] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])

  const services = [
    "Real Estate Photography",
    "Event Coverage",
    "Promotional Content",
    "Tourism & Hospitality",
    "Construction/Surveying",
    "Agricultural Monitoring",
  ]

  const availability = ["Weekdays", "Weekends", "Evenings", "Full-time", "Part-time"]

  function handleServiceChange(service: string, checked: boolean) {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  function handleAvailabilityChange(option: string, checked: boolean) {
    if (checked) {
      setSelectedAvailability([...selectedAvailability, option])
    } else {
      setSelectedAvailability(selectedAvailability.filter((a) => a !== option))
    }
  }

  async function handleSubmit(formData: FormData) {
    // Add selected services and availability to form data
    formData.set("services", selectedServices.join(", "))
    formData.set("availability", selectedAvailability.join(", "))

    const result = await submitPilotApplication(formData)
    setMessage(result.message)

    if (result.success) {
      // Reset form
      const form = document.getElementById("pilot-form") as HTMLFormElement
      form?.reset()
      setSelectedServices([])
      setSelectedAvailability([])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-2xl">Pilot Application</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="pilot-form" action={handleSubmit} className="space-y-6">
          {/* Personal Information */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location (City/Region) *</Label>
              <Input id="location" name="location" type="text" required placeholder="City, State" />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-2">
            <Label htmlFor="portfolioLink">Portfolio/Reel Link *</Label>
            <Input
              id="portfolioLink"
              name="portfolioLink"
              type="url"
              required
              placeholder="https://your-portfolio.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience *</Label>
            <Input
              id="experience"
              name="experience"
              type="text"
              required
              placeholder="e.g., 3 years commercial drone operations"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="drones">Drones Owned/Operated *</Label>
            <Textarea
              id="drones"
              name="drones"
              required
              placeholder="List your drone models and capabilities (e.g., DJI Mavic 3 Pro, DJI Air 2S, etc.)"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="certifications">Certifications/Licenses *</Label>
            <Textarea
              id="certifications"
              name="certifications"
              required
              placeholder="List your certifications (e.g., FAA Part 107, local licenses, insurance details)"
              rows={3}
            />
          </div>

          {/* Services Offered */}
          <div className="space-y-3">
            <Label>Types of Services Offered *</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                  />
                  <Label htmlFor={service} className="text-sm">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-3">
            <Label>Availability *</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availability.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={selectedAvailability.includes(option)}
                    onCheckedChange={(checked) => handleAvailabilityChange(option, checked as boolean)}
                  />
                  <Label htmlFor={option} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
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
