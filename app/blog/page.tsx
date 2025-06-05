import type { Metadata } from "next"
import { Suspense } from "react"
import { ClientBlogPage } from "./client-blog-page"

export const metadata: Metadata = {
  title: "Blog - Drone Photography Tips, Insights & Industry News",
  description:
    "Stay updated with the latest drone photography tips, industry insights, and aerial videography techniques from SkyVision's expert team.",
}

// Mock blog posts data - in a real app, this would come from your CMS or markdown files
const blogPosts = [
  {
    title: "5 Tips for Better Real Estate Drone Photography",
    excerpt:
      "Learn the essential techniques for capturing stunning aerial shots that make properties stand out in the market and attract more potential buyers.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "2024-01-15",
    slug: "5-tips-better-real-estate-drone-photography",
    category: "Real Estate",
    readTime: "5 min read",
  },
  {
    title: "The Future of Aerial Videography in Marketing",
    excerpt:
      "Discover how drone technology is revolutionizing content creation and what it means for your marketing strategy in 2024 and beyond.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Mike Chen",
    date: "2024-01-10",
    slug: "future-aerial-videography-marketing",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    title: "Drone Regulations: What You Need to Know in 2024",
    excerpt:
      "Stay compliant with the latest drone regulations and understand the legal requirements for commercial operations across different states.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Rodriguez",
    date: "2024-01-05",
    slug: "drone-regulations-what-you-need-know-2024",
    category: "Legal",
    readTime: "6 min read",
  },
  {
    title: "Best Practices for Event Drone Coverage",
    excerpt:
      "Master the art of capturing events from above with these professional tips for planning, execution, and post-production workflow.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emily Davis",
    date: "2023-12-28",
    slug: "best-practices-event-drone-coverage",
    category: "Events",
    readTime: "8 min read",
  },
  {
    title: "Choosing the Right Drone for Your Business",
    excerpt:
      "A comprehensive guide to selecting the perfect drone equipment for different types of commercial photography and videography projects.",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Alex Thompson",
    date: "2023-12-20",
    slug: "choosing-right-drone-for-business",
    category: "Equipment",
    readTime: "10 min read",
  },
  {
    title: "Weather Considerations for Drone Photography",
    excerpt:
      "Learn how to work with different weather conditions and make the most of natural lighting for spectacular aerial photography results.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "2023-12-15",
    slug: "weather-considerations-drone-photography",
    category: "Tips",
    readTime: "6 min read",
  },
]

const categories = ["All", "Real Estate", "Marketing", "Legal", "Events", "Equipment", "Tips"]
const recentPosts = blogPosts.slice(0, 3)

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest drone photography tips, industry insights, and aerial videography techniques
            from our expert team.
          </p>
        </div>

        <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
          <ClientBlogPage blogPosts={blogPosts} categories={categories} recentPosts={recentPosts} />
        </Suspense>
      </div>
    </div>
  )
}
