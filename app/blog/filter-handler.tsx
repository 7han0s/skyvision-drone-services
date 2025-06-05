"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterHandlerProps {
  blogPosts: Array<{
    title: string
    excerpt: string
    image: string
    author: string
    date: string
    slug: string
    category: string
    readTime: string
  }>
  onFilter: (filteredPosts: any[]) => void
}

export function FilterHandler({ blogPosts, onFilter }: FilterHandlerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeFilters, setActiveFilters] = useState<{ category?: string; tag?: string }>({})

  useEffect(() => {
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")

    const filters = {
      ...(category && { category }),
      ...(tag && { tag }),
    }

    setActiveFilters(filters)

    // Filter posts based on active filters
    let filtered = blogPosts

    if (category && category !== "all") {
      filtered = filtered.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    }

    if (tag) {
      // In a real app, you'd have tags data for each post
      // For now, we'll just show all posts if a tag is selected
      filtered = blogPosts
    }

    onFilter(filtered)
  }, [searchParams, blogPosts, onFilter])

  const clearFilter = (filterType: "category" | "tag") => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(filterType)

    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog"
    router.push(newUrl)
  }

  const clearAllFilters = () => {
    router.push("/blog")
  }

  if (Object.keys(activeFilters).length === 0) {
    return null
  }

  return (
    <div className="mb-8 p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium">Active filters:</span>
          {activeFilters.category && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {activeFilters.category}
              <button
                onClick={() => clearFilter("category")}
                className="ml-1 hover:bg-orange-200 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.tag && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Tag: {activeFilters.tag}
              <button
                onClick={() => clearFilter("tag")}
                className="ml-1 hover:bg-orange-200 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={clearAllFilters}>
          Clear all filters
        </Button>
      </div>
    </div>
  )
}
