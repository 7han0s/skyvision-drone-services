"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="w-full bg-orange-500 hover:bg-orange-600">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setMessage(result.message)

    if (result.success) {
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
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
            <Label htmlFor="subject">Subject *</Label>
            <Input id="subject" name="subject" type="text" required placeholder="What's this about?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your project or inquiry..."
              rows={6}
            />
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
