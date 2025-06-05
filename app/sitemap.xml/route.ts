export function GET() {
  const baseUrl = "https://skyvision-drones.com"

  const staticPages = [
    "",
    "/about",
    "/services",
    "/services/real-estate-photography",
    "/services/event-coverage",
    "/services/promotional-content",
    "/services/tourism-hospitality",
    "/portfolio",
    "/blog",
    "/contact",
    "/request-a-quote",
    "/partner-with-us",
    "/privacy-policy",
    "/terms-of-service",
    "/sitemap",
  ]

  const blogPosts = [
    "/blog/5-tips-better-real-estate-drone-photography",
    "/blog/future-aerial-videography-marketing",
    "/blog/drone-regulations-what-you-need-know-2024",
  ]

  const allPages = [...staticPages, ...blogPosts]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
