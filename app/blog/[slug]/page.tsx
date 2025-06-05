import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Mock blog post data - in a real app, this would come from your CMS or markdown files
const blogPosts = {
  "5-tips-better-real-estate-drone-photography": {
    title: "5 Tips for Better Real Estate Drone Photography",
    excerpt:
      "Learn the essential techniques for capturing stunning aerial shots that make properties stand out in the market and attract more potential buyers.",
    content: `
      <p>Real estate drone photography has revolutionized how properties are marketed and sold. With the right techniques, you can capture stunning aerial shots that showcase properties in their best light and help them stand out in a competitive market.</p>

      <h2>1. Plan Your Shots in Advance</h2>
      <p>Before arriving at the property, study the location using satellite imagery and plan your shots. Consider the property's best features, surrounding landscape, and potential obstacles. This preparation will save time and ensure you capture all the essential angles.</p>

      <h2>2. Choose the Right Time of Day</h2>
      <p>The golden hour (shortly after sunrise or before sunset) provides the most flattering light for real estate photography. The warm, soft light enhances the property's appeal and creates a welcoming atmosphere that potential buyers find attractive.</p>

      <h2>3. Capture Multiple Angles and Heights</h2>
      <p>Don't limit yourself to one perspective. Capture the property from various angles and altitudes to provide a comprehensive view. Include shots that show the property's relationship to its surroundings, neighborhood amenities, and unique features.</p>

      <h2>4. Focus on Composition</h2>
      <p>Apply basic photography principles like the rule of thirds and leading lines. Frame the property to highlight its best features while maintaining a clean, uncluttered composition. Avoid tilted horizons and ensure your shots are level.</p>

      <h2>5. Post-Processing is Key</h2>
      <p>Professional editing can make a significant difference in the final result. Adjust exposure, contrast, and colors to make the property look its best while maintaining a natural appearance. Remove any distracting elements and ensure the images are sharp and vibrant.</p>

      <p>By following these tips, you'll be able to create compelling aerial imagery that helps properties sell faster and for better prices. Remember, practice makes perfect, so keep refining your technique with each shoot.</p>
    `,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Real Estate",
    readTime: "5 min read",
    tags: ["real-estate", "photography", "tips", "drone"],
  },
  "future-aerial-videography-marketing": {
    title: "The Future of Aerial Videography in Marketing",
    excerpt:
      "Discover how drone technology is revolutionizing content creation and what it means for your marketing strategy in 2024 and beyond.",
    content: `
      <p>Aerial videography has transformed from a luxury reserved for big-budget productions to an accessible and essential tool for modern marketing. As we look toward the future, several trends are shaping how businesses use drone technology to connect with their audiences.</p>

      <h2>The Rise of Immersive Content</h2>
      <p>Consumers increasingly expect immersive, engaging content that tells a story. Aerial videography provides unique perspectives that ground-level cameras simply cannot achieve, creating more compelling narratives for brands across industries.</p>

      <h2>Integration with Emerging Technologies</h2>
      <p>The future of aerial videography lies in its integration with other technologies like AI, VR, and real-time streaming. These combinations will create new possibilities for interactive marketing experiences and personalized content delivery.</p>

      <h2>Accessibility and Democratization</h2>
      <p>As drone technology becomes more affordable and user-friendly, we're seeing democratization of aerial content creation. Small businesses can now access the same high-quality aerial footage that was once exclusive to large corporations.</p>

      <h2>Regulatory Evolution</h2>
      <p>Evolving regulations are making commercial drone operations more streamlined while maintaining safety standards. This regulatory clarity is encouraging more businesses to incorporate aerial videography into their marketing strategies.</p>

      <p>The future of aerial videography in marketing is bright, with endless possibilities for creative storytelling and audience engagement. Businesses that embrace this technology early will have a significant advantage in capturing and retaining customer attention.</p>
    `,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Mike Chen",
    date: "2024-01-10",
    category: "Marketing",
    readTime: "7 min read",
    tags: ["marketing", "videography", "technology", "future"],
  },
  "drone-regulations-what-you-need-know-2024": {
    title: "Drone Regulations: What You Need to Know in 2024",
    excerpt:
      "Stay compliant with the latest drone regulations and understand the legal requirements for commercial operations across different states.",
    content: `
      <p>Navigating drone regulations can be complex, but staying compliant is essential for any commercial drone operation. Here's what you need to know about the current regulatory landscape in 2024.</p>

      <h2>Federal Regulations (FAA Part 107)</h2>
      <p>The FAA Part 107 certification remains the foundation for commercial drone operations in the United States. This certification covers basic flight rules, airspace restrictions, and operational limitations that all commercial pilots must follow.</p>

      <h2>State and Local Regulations</h2>
      <p>While federal regulations provide the framework, state and local authorities may have additional restrictions. These can include limitations on flying over certain areas, noise ordinances, and privacy considerations.</p>

      <h2>Insurance Requirements</h2>
      <p>Most commercial operations require liability insurance. The amount varies by state and type of operation, but having adequate coverage protects both the operator and their clients from potential damages.</p>

      <h2>Remote ID Requirements</h2>
      <p>The Remote ID rule, which went into effect in 2023, requires most drones to broadcast identification and location information. Understanding these requirements is crucial for legal operation.</p>

      <h2>Best Practices for Compliance</h2>
      <p>Stay updated with regulatory changes, maintain proper documentation, conduct pre-flight checks, and always prioritize safety. Regular training and certification updates ensure you remain compliant with evolving regulations.</p>

      <p>Staying compliant with drone regulations protects your business and ensures the continued growth of the commercial drone industry. When in doubt, consult with aviation attorneys or regulatory experts.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "David Rodriguez",
    date: "2024-01-05",
    category: "Legal",
    readTime: "6 min read",
    tags: ["legal", "regulations", "compliance", "faa"],
  },
  "best-practices-event-drone-coverage": {
    title: "Best Practices for Event Drone Coverage",
    excerpt:
      "Master the art of capturing events from above with these professional tips for planning, execution, and post-production workflow.",
    content: `
    <p>Event drone coverage has become an essential tool for capturing the scale, energy, and memorable moments of gatherings both large and small. From corporate conferences to music festivals, aerial footage provides a unique perspective that ground-level cameras simply cannot achieve.</p>

    <h2>Pre-Event Planning</h2>
    <p>Successful event drone coverage begins long before the actual event day. Start by conducting a thorough site survey to identify potential obstacles, no-fly zones, and optimal shooting positions. Coordinate with event organizers to understand the schedule, key moments, and any restrictions.</p>

    <h2>Equipment Preparation</h2>
    <p>Ensure your drone equipment is in perfect working condition. Carry multiple batteries, memory cards, and backup equipment. Test all systems beforehand and have a contingency plan for equipment failures. Consider the weather conditions and prepare accordingly.</p>

    <h2>Safety First</h2>
    <p>Safety should always be your top priority when operating drones at events. Maintain visual line of sight, respect crowd safety zones, and be prepared to land immediately if conditions become unsafe. Always have a spotter to help monitor the airspace and crowd below.</p>

    <h2>Capturing Key Moments</h2>
    <p>Focus on capturing the event's most important moments: opening ceremonies, keynote speakers, crowd reactions, and closing activities. Vary your shots between wide establishing shots that show the event's scale and closer shots that capture the energy and emotion.</p>

    <h2>Post-Production Workflow</h2>
    <p>Develop an efficient post-production workflow that allows for quick turnaround times. Event organizers often need content for social media within hours of the event. Create templates for quick edits while maintaining quality standards for longer-form content.</p>

    <h2>Legal Considerations</h2>
    <p>Ensure you have all necessary permits and permissions before flying. Some venues may have specific restrictions, and large events may require coordination with local authorities. Always respect privacy concerns and follow applicable regulations.</p>

    <p>By following these best practices, you'll be able to deliver exceptional aerial coverage that captures the essence and excitement of any event while maintaining the highest standards of safety and professionalism.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Emily Davis",
    date: "2023-12-28",
    category: "Events",
    readTime: "8 min read",
    tags: ["events", "coverage", "planning", "safety"],
  },
  "choosing-right-drone-for-business": {
    title: "Choosing the Right Drone for Your Business",
    excerpt:
      "A comprehensive guide to selecting the perfect drone equipment for different types of commercial photography and videography projects.",
    content: `
    <p>Selecting the right drone for your business is a critical decision that can significantly impact the quality of your work and your bottom line. With so many options available, it's important to understand the key factors that should influence your choice.</p>

    <h2>Assess Your Business Needs</h2>
    <p>Start by clearly defining what type of work you'll be doing. Real estate photography has different requirements than industrial inspections or event coverage. Consider factors like flight time, camera quality, portability, and weather resistance based on your specific use cases.</p>

    <h2>Camera and Gimbal Quality</h2>
    <p>The camera is arguably the most important component for commercial drone work. Look for drones that offer 4K video recording, high-resolution still photography, and professional-grade gimbals for smooth, stable footage. Consider whether you need interchangeable lenses or specialized cameras for thermal imaging.</p>

    <h2>Flight Performance</h2>
    <p>Evaluate flight time, range, and stability in various weather conditions. Longer flight times mean more efficient shoots and fewer battery changes. Consider the drone's maximum wind resistance and operating temperature range for your local climate.</p>

    <h2>Regulatory Compliance</h2>
    <p>Ensure any drone you choose complies with local regulations. In the US, commercial operators need Part 107 certification, and some drones may require additional registration or have operational restrictions. Stay informed about evolving regulations that might affect your equipment choices.</p>

    <h2>Budget Considerations</h2>
    <p>Factor in not just the initial purchase price, but ongoing costs like insurance, maintenance, replacement parts, and additional accessories. Sometimes investing in a more expensive, professional-grade drone can be more cost-effective in the long run due to better reliability and image quality.</p>

    <h2>Popular Options by Category</h2>
    <p>For real estate: DJI Air series offers excellent image quality with portability. For professional cinematography: DJI Inspire or Mavic 3 Pro provide cinema-grade cameras. For industrial work: DJI Matrice series offers ruggedness and specialized payloads.</p>

    <p>Take time to research, read reviews, and if possible, test different models before making your decision. The right drone will serve as a reliable tool that helps grow your business for years to come.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Alex Thompson",
    date: "2023-12-20",
    category: "Equipment",
    readTime: "10 min read",
    tags: ["equipment", "business", "buying-guide", "drones"],
  },
  "weather-considerations-drone-photography": {
    title: "Weather Considerations for Drone Photography",
    excerpt:
      "Learn how to work with different weather conditions and make the most of natural lighting for spectacular aerial photography results.",
    content: `
    <p>Weather plays a crucial role in drone photography, affecting not only flight safety but also the quality and mood of your aerial images. Understanding how to work with different weather conditions can help you capture stunning footage while maintaining safe operations.</p>

    <h2>Wind Conditions</h2>
    <p>Wind is one of the most critical factors to consider. Most consumer drones can handle winds up to 20-25 mph, but image quality may suffer due to camera shake. Always check wind speeds at different altitudes, as conditions can vary significantly from ground level to your flying height.</p>

    <h2>Golden Hour Magic</h2>
    <p>The golden hour, occurring shortly after sunrise and before sunset, provides the most flattering light for aerial photography. The warm, soft light enhances colors and creates dramatic shadows that add depth and dimension to your images. Plan your shoots around these times for the best results.</p>

    <h2>Overcast Conditions</h2>
    <p>Don't dismiss overcast days for drone photography. Cloudy skies can provide even, diffused lighting that's perfect for certain types of shots. The dramatic cloud formations can add mood and interest to your compositions, especially for landscape and architectural photography.</p>

    <h2>Rain and Moisture</h2>
    <p>Most consumer drones are not waterproof, so avoid flying in rain or high humidity conditions. Even light drizzle can damage sensitive electronics. However, the period just after rain can offer excellent visibility and dramatic lighting conditions for stunning aerial shots.</p>

    <h2>Temperature Extremes</h2>
    <p>Cold weather can significantly reduce battery life and affect drone performance. In hot conditions, be aware of thermal updrafts that can affect stability. Always allow your equipment to acclimate to temperature changes before flying.</p>

    <h2>Seasonal Considerations</h2>
    <p>Each season offers unique opportunities for aerial photography. Spring brings fresh colors and blooming landscapes. Summer provides long days and vibrant greens. Fall offers spectacular foliage colors. Winter can create minimalist, high-contrast scenes with snow.</p>

    <h2>Safety First</h2>
    <p>Never compromise safety for a shot. If conditions are marginal, it's better to reschedule than risk equipment damage or worse. Always have an escape plan and be prepared to land immediately if conditions deteriorate.</p>

    <p>By understanding and respecting weather conditions, you can not only fly safely but also use natural elements to enhance your aerial photography and create truly spectacular images.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Sarah Johnson",
    date: "2023-12-15",
    category: "Tips",
    readTime: "6 min read",
    tags: ["weather", "photography", "tips", "safety"],
  },
}

type BlogSlug = keyof typeof blogPosts

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as BlogSlug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - SkyVision Blog`,
    description: post.excerpt,
  }
}

// Related posts (simplified - would be more sophisticated in real app)
const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  return Object.entries(blogPosts)
    .filter(([slug, post]) => slug !== currentSlug && post.category === currentCategory)
    .slice(0, 2)
    .map(([slug, post]) => ({ slug, ...post }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug as BlogSlug]

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, post.category)

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <Link href={`/blog?category=${post.category.toLowerCase()}`}>
                <Badge
                  variant="secondary"
                  className="mb-4 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                >
                  {post.category}
                </Badge>
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-drone max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-display font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag}`}>
                    <Badge
                      variant="outline"
                      className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Link href={`/blog?category=${relatedPost.category.toLowerCase()}`}>
                        <Badge
                          variant="secondary"
                          className="mb-3 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                        >
                          {relatedPost.category}
                        </Badge>
                      </Link>
                      <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="mt-16 text-center bg-muted/50 rounded-lg p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our team of experts help you create stunning aerial content that elevates your brand and engages your
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/request-a-quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
