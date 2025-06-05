"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterHandlerProps {
  portfolioItems: Array<{
    id: number
    title: string
    category: string
    image: string
    type: string
  }>
  onFilter: (filteredItems: any[]) => void
}

export function FilterHandler({ portfolioItems, onFilter }: FilterHandlerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeFilters, setActiveFilters] = useState<{ category?: string; type?: string }>({})

  useEffect(() => {
    const category = searchParams.get("category")
    const type = searchParams.get("type")

    const filters = {
      ...(category && { category }),
      ...(type && { type }),
    }

    setActiveFilters(filters)

    // Filter items based on active filters
    let filtered = portfolioItems

    if (category && category !== "all") {
      filtered = filtered.filter((item) => item.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase())
    }

    if (type && type !== "all") {
      filtered = filtered.filter((item) => item.type.toLowerCase() === type.toLowerCase())
    }

    onFilter(filtered)
  }, [searchParams, portfolioItems]) // Removed onFilter from dependencies to prevent infinite loop

  const clearFilter = (filterType: "category" | "type") => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(filterType)

    const newUrl = params.toString() ? `/portfolio?${params.toString()}` : "/portfolio"
    router.push(newUrl)
  }

  const clearAllFilters = () => {
    router.push("/portfolio")
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
              Category: {activeFilters.category.replace(/-/g, " ")}
              <button
                onClick={() => clearFilter("category")}
                className="ml-1 hover:bg-orange-200 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.type && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Type: {activeFilters.type}
              <button
                onClick={() => clearFilter("type")}
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
