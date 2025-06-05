"use client"

import { useMemo, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Camera, X } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  type: string
  description?: string
  featured?: boolean
}

interface ClientPortfolioPageProps {
  featuredProjects: PortfolioItem[]
  portfolioItems: PortfolioItem[]
}

function FilterDisplay({
  activeFilters,
  onClearFilter,
  onClearAll,
}: {
  activeFilters: { category?: string; type?: string }
  onClearFilter: (type: "category" | "type") => void
  onClearAll: () => void
}) {
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
                onClick={() => onClearFilter("category")}
                className="ml-1 hover:bg-orange-200 rounded-full p-0.5 transition-colors"
                type="button"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.type && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Type: {activeFilters.type}
              <button
                onClick={() => onClearFilter("type")}
                className="ml-1 hover:bg-orange-200 rounded-full p-0.5 transition-colors"
                type="button"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
        <button
          onClick={onClearAll}
          className="px-3 py-1.5 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          type="button"
        >
          Clear all filters
        </button>
      </div>
    </div>
  )
}

export function ClientPortfolioPage({ featuredProjects, portfolioItems }: ClientPortfolioPageProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Single source of truth from URL params
  const categoryFilter = searchParams.get("category") || ""
  const typeFilter = searchParams.get("type") || ""

  const allItems = [...featuredProjects, ...portfolioItems]

  // Filter categories and types
  const categories = ["All", ...Array.from(new Set(allItems.map((item) => item.category)))]
  const types = ["All", "Photo", "Video"]

  // Memoize filtered items to avoid recalculation on every render
  const filteredItems = useMemo(() => {
    let filtered = portfolioItems

    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter.toLowerCase(),
      )
    }

    if (typeFilter && typeFilter !== "all") {
      filtered = filtered.filter((item) => item.type.toLowerCase() === typeFilter.toLowerCase())
    }

    return filtered
  }, [portfolioItems, categoryFilter, typeFilter])

  // Memoize active filters object
  const activeFilters = useMemo(() => {
    const filters: { category?: string; type?: string } = {}
    if (categoryFilter && categoryFilter !== "all") filters.category = categoryFilter
    if (typeFilter && typeFilter !== "all") filters.type = typeFilter
    return filters
  }, [categoryFilter, typeFilter])

  // URL update helper
  const updateURL = useCallback(
    (newParams: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      const newUrl = params.toString() ? `/portfolio?${params.toString()}` : "/portfolio"
      router.push(newUrl)
    },
    [searchParams, router],
  )

  const clearFilter = useCallback(
    (filterType: "category" | "type") => {
      updateURL({ [filterType]: null })
    },
    [updateURL],
  )

  const clearAllFilters = useCallback(() => {
    router.push("/portfolio")
  }, [router])

  const handleCategoryClick = useCallback(
    (category: string) => {
      const normalizedCategory = category.toLowerCase().replace(/\s+/g, "-")

      if (category === "All") {
        updateURL({ category: null })
      } else {
        updateURL({ category: normalizedCategory })
      }
    },
    [updateURL],
  )

  const handleTypeClick = useCallback(
    (type: string) => {
      const normalizedType = type.toLowerCase()

      if (type === "All") {
        updateURL({ type: null })
      } else {
        updateURL({ type: normalizedType })
      }
    },
    [updateURL],
  )

  return (
    <>
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most impactful and visually stunning work across different industries.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <button onClick={() => handleCategoryClick(project.category)} className="mb-4" type="button">
                      <Badge
                        variant="secondary"
                        className="hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                      >
                        {project.category}
                      </Badge>
                    </button>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {project.type === "video" ? (
                          <>
                            <Play className="h-4 w-4" />
                            Video Project
                          </>
                        ) : (
                          <>
                            <Camera className="h-4 w-4" />
                            Photography Project
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden group ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                    {project.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 p-4 rounded-full group-hover:bg-white transition-colors duration-300">
                          <Play className="h-8 w-8 text-orange-500" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">More Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent work across various industries and project types.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium self-center mr-2">Categories:</span>
              {categories.map((category) => (
                <button key={category} onClick={() => handleCategoryClick(category)} type="button">
                  <Badge
                    variant={
                      (category === "All" && !categoryFilter) ||
                      category.toLowerCase().replace(/\s+/g, "-") === categoryFilter
                        ? "default"
                        : "outline"
                    }
                    className={`transition-colors duration-200 cursor-pointer ${
                      (category === "All" && !categoryFilter) ||
                      category.toLowerCase().replace(/\s+/g, "-") === categoryFilter
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300"
                    }`}
                  >
                    {category}
                  </Badge>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium self-center mr-2">Type:</span>
              {types.map((type) => (
                <button key={type} onClick={() => handleTypeClick(type)} type="button">
                  <Badge
                    variant={
                      (type === "All" && !typeFilter) || type.toLowerCase() === typeFilter ? "default" : "outline"
                    }
                    className={`transition-colors duration-200 cursor-pointer ${
                      (type === "All" && !typeFilter) || type.toLowerCase() === typeFilter
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300"
                    }`}
                  >
                    {type}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          <FilterDisplay activeFilters={activeFilters} onClearFilter={clearFilter} onClearAll={clearAllFilters} />

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg bg-muted">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Type indicator */}
                    <div className="absolute top-4 right-4">
                      <button onClick={() => handleTypeClick(item.type)} type="button">
                        <div className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors duration-200 cursor-pointer">
                          {item.type === "video" ? (
                            <Play className="h-4 w-4 text-orange-500" />
                          ) : (
                            <Camera className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <button
                        onClick={() => handleCategoryClick(item.category)}
                        className="mb-2 inline-block"
                        type="button"
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                        >
                          {item.category}
                        </Badge>
                      </button>
                      <h3 className="font-display font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-display text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or browse all projects.</p>
              <Button asChild>
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default ClientPortfolioPage
