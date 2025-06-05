import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Search } from "lucide-react"
import { formatDate } from "@/lib/utils"

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest drone photography tips, industry insights, and aerial videography techniques
              from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={blogPosts[0].image || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <Badge variant="secondary" className="w-fit mb-3">
                        {blogPosts[0].category}
                      </Badge>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                        <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-orange-500 transition-colors">
                          {blogPosts[0].title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(blogPosts[0].date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {blogPosts[0].author}
                        </div>
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <Button asChild variant="outline">
                        <Link href={`/blog/${blogPosts[0].slug}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
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
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-orange-500 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search articles..." className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${category.toLowerCase()}`}
                        className="block text-sm text-muted-foreground hover:text-orange-500 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.slug} className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1">
                            <Link href={`/blog/${post.slug}`} className="hover:text-orange-500 transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
