"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Search } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { FilterHandler } from "./filter-handler"

interface BlogPost {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  slug: string
  category: string
  readTime: string
}

interface ClientBlogPageProps {
  blogPosts: BlogPost[]
  categories: string[]
  recentPosts: BlogPost[]
}

export function ClientBlogPage({ blogPosts, categories, recentPosts }: ClientBlogPageProps) {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterHandler blogPosts={blogPosts} onFilter={setFilteredPosts} />
          </Suspense>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={filteredPosts[0].image || "/placeholder.svg"}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <Link href={`/blog?category=${filteredPosts[0].category.toLowerCase()}`}>
                      <Badge
                        variant="secondary"
                        className="w-fit mb-3 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                      >
                        {filteredPosts[0].category}
                      </Badge>
                    </Link>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                      <Link href={`/blog/${filteredPosts[0].slug}`} className="hover:text-orange-500 transition-colors">
                        {filteredPosts[0].title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(filteredPosts[0].date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {filteredPosts[0].author}
                      </div>
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/blog/${filteredPosts[0].slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(1).map((post) => (
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
                    <Link href={`/blog?category=${post.category.toLowerCase()}`}>
                      <Badge
                        variant="secondary"
                        className="mb-3 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                      >
                        {post.category}
                      </Badge>
                    </Link>
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
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="font-display text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or browse all posts.</p>
              <Button asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          ) : null}

          {/* Pagination */}
          {filteredPosts.length > 1 && (
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
          )}
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
                    className="block text-sm text-muted-foreground hover:text-orange-500 hover:bg-orange-50 px-2 py-1 rounded transition-colors duration-200"
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
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
  )
}

export default ClientBlogPage
