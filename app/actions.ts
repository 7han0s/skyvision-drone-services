"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
})

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Please provide a detailed message"),
})

const pilotApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  portfolioLink: z.string().url("Valid portfolio URL is required"),
  experience: z.string().min(1, "Experience is required"),
  drones: z.string().min(1, "Drone information is required"),
  certifications: z.string().min(1, "Certifications are required"),
  services: z.string().min(1, "Services offered is required"),
  availability: z.string().min(1, "Availability is required"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const data = {
      email: formData.get("email") as string,
    }

    const validatedData = newsletterSchema.parse(data)

    await resend.emails.send({
      from: "newsletter@skyvision-drones.com",
      to: process.env.INTERNAL_NOTIFICATION_EMAIL || "info@skyvision-drones.com",
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
      `,
    })

    return { success: true, message: "Successfully subscribed to newsletter!" }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { success: false, message: "Failed to subscribe. Please try again." }
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactSchema.parse(data)

    await resend.emails.send({
      from: "contact@skyvision-drones.com",
      to: process.env.INTERNAL_NOTIFICATION_EMAIL || "info@skyvision-drones.com",
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        
        <h3>Message:</h3>
        <p>${validatedData.message}</p>
      `,
    })

    // Send confirmation email
    await resend.emails.send({
      from: "contact@skyvision-drones.com",
      to: validatedData.email,
      subject: "Message Received - SkyVision Drone Services",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your message and will respond within 24 hours.</p>
        
        <p>Best regards,<br>The SkyVision Team</p>
      `,
    })

    return { success: true, message: "Message sent successfully! We'll respond within 24 hours." }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}

export async function submitPilotApplication(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      portfolioLink: formData.get("portfolioLink") as string,
      experience: formData.get("experience") as string,
      drones: formData.get("drones") as string,
      certifications: formData.get("certifications") as string,
      services: formData.get("services") as string,
      availability: formData.get("availability") as string,
    }

    const validatedData = pilotApplicationSchema.parse(data)

    await resend.emails.send({
      from: "pilots@skyvision-drones.com",
      to: process.env.INTERNAL_NOTIFICATION_EMAIL || "pilots@skyvision-drones.com",
      subject: "New Pilot Application",
      html: `
        <h2>New Pilot Application</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Location:</strong> ${validatedData.location}</p>
        <p><strong>Portfolio:</strong> <a href="${validatedData.portfolioLink}">${validatedData.portfolioLink}</a></p>
        <p><strong>Experience:</strong> ${validatedData.experience}</p>
        <p><strong>Drones:</strong> ${validatedData.drones}</p>
        <p><strong>Certifications:</strong> ${validatedData.certifications}</p>
        <p><strong>Services:</strong> ${validatedData.services}</p>
        <p><strong>Availability:</strong> ${validatedData.availability}</p>
      `,
    })

    return {
      success: true,
      message: "Application submitted successfully! We'll review and contact you within 5 business days.",
    }
  } catch (error) {
    console.error("Pilot application error:", error)
    return { success: false, message: "Failed to submit application. Please try again." }
  }
}
