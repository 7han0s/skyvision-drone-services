"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const quoteRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Service type is required"),
  description: z.string().min(10, "Please provide a detailed description"),
  location: z.string().min(1, "Location is required"),
  preferredDate: z.string().optional(),
  deliverables: z.string().optional(),
  budget: z.string().optional(),
})

export async function submitQuoteRequest(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      serviceType: formData.get("serviceType") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      preferredDate: formData.get("preferredDate") as string,
      deliverables: formData.get("deliverables") as string,
      budget: formData.get("budget") as string,
    }

    const validatedData = quoteRequestSchema.parse(data)

    // Send email notification
    await resend.emails.send({
      from: "quotes@skyvision-drones.com",
      to: process.env.INTERNAL_NOTIFICATION_EMAIL || "quotes@skyvision-drones.com",
      subject: `New Quote Request - ${validatedData.serviceType}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
        <p><strong>Service Type:</strong> ${validatedData.serviceType}</p>
        <p><strong>Location:</strong> ${validatedData.location}</p>
        <p><strong>Preferred Date:</strong> ${validatedData.preferredDate || "Not specified"}</p>
        <p><strong>Budget:</strong> ${validatedData.budget || "Not specified"}</p>
        
        <h3>Project Description:</h3>
        <p>${validatedData.description}</p>
        
        <h3>Deliverables:</h3>
        <p>${validatedData.deliverables || "Not specified"}</p>
      `,
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: "quotes@skyvision-drones.com",
      to: validatedData.email,
      subject: "Quote Request Received - SkyVision Drone Services",
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your quote request for ${validatedData.serviceType} and will respond within 24 hours with a detailed proposal.</p>
        
        <h3>Your Request Summary:</h3>
        <p><strong>Service:</strong> ${validatedData.serviceType}</p>
        <p><strong>Location:</strong> ${validatedData.location}</p>
        <p><strong>Preferred Date:</strong> ${validatedData.preferredDate || "To be discussed"}</p>
        
        <p>If you have any immediate questions, feel free to contact us directly.</p>
        
        <p>Best regards,<br>The SkyVision Team</p>
      `,
    })

    return { success: true, message: "Quote request submitted successfully! We'll respond within 24 hours." }
  } catch (error) {
    console.error("Quote request error:", error)
    return { success: false, message: "Failed to submit quote request. Please try again." }
  }
}
