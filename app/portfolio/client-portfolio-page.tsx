"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Camera } from "lucide-react"
import { FilterHandler } from "./filter-handler"

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

export default function ClientPortfolioPage({ featuredProjects, portfolioItems }: ClientPortfolioPageProps) {
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const allItems = [...featuredProjects, ...portfolioItems]

  // Filter categories and types
  const categories = ["All", ...Array.from(new Set(allItems.map((item) => item.category)))]
  const types = ["All", "Photo", "Video"]

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
                    <Link href={`/portfolio?category=${project.category.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge
                        variant="secondary"
                        className="mb-4 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                      >
                        {project.category}
                      </Badge>
                    </Link>
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
                <Link
                  key={category}
                  href={
                    category === "All"
                      ? "/portfolio"
                      : `/portfolio?category=${category.toLowerCase().replace(/\s+/g, "-")}`
                  }
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-colors duration-200 cursor-pointer"
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium self-center mr-2">Type:</span>
              {types.map((type) => (
                <Link key={type} href={type === "All" ? "/portfolio" : `/portfolio?type=${type.toLowerCase()}`}>
                  <Badge
                    variant="outline"
                    className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-colors duration-200 cursor-pointer"
                  >
                    {type}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterHandler portfolioItems={portfolioItems} onFilter={setFilteredItems} />
          </Suspense>

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
                      <Link href={`/portfolio?type=${item.type.toLowerCase()}`}>
                        <div className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors duration-200 cursor-pointer">
                          {item.type === "video" ? (
                            <Play className="h-4 w-4 text-orange-500" />
                          ) : (
                            <Camera className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                      </Link>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Link href={`/portfolio?category=${item.category.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge
                          variant="secondary"
                          className="mb-2 text-xs hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer inline-block"
                        >
                          {item.category}
                        </Badge>
                      </Link>
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
