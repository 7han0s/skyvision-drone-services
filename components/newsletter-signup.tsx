"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="bg-orange-500 hover:bg-orange-600">
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  )
}

export function NewsletterSignup() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await subscribeToNewsletter(formData)
    setMessage(result.message)

    if (result.success) {
      // Reset form
      const form = document.getElementById("newsletter-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <form id="newsletter-form" action={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <Input type="email" name="email" placeholder="Enter your email" required className="flex-1" />
        <SubmitButton />
      </div>
      {message && (
        <p className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>{message}</p>
      )}
    </form>
  )
}
