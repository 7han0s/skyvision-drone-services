import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "5 Tips for Better Real Estate Drone Photography",
    excerpt:
      "Learn the essential techniques for capturing stunning aerial shots that make properties stand out in the market.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    author: "Sarah Johnson",
    date: "2024-01-15",
    slug: "5-tips-better-real-estate-drone-photography",
    category: "Real Estate",
  },
  {
    title: "The Future of Aerial Videography in Marketing",
    excerpt:
      "Discover how drone technology is revolutionizing content creation and what it means for your marketing strategy.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    author: "Mike Chen",
    date: "2024-01-10",
    slug: "future-aerial-videography-marketing",
    category: "Marketing",
  },
  {
    title: "Drone Regulations: What You Need to Know",
    excerpt:
      "Stay compliant with the latest drone regulations and understand the legal requirements for commercial operations.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    author: "David Rodriguez",
    date: "2024-01-05",
    slug: "drone-regulations-what-you-need-know",
    category: "Regulations",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of aerial photography and
            videography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
                <Link href={`/blog?category=${post.category.toLowerCase()}`}>
                  <Badge
                    variant="secondary"
                    className="mb-2 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer inline-block"
                  >
                    {post.category}
                  </Badge>
                </Link>
                <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
