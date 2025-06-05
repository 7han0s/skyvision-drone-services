export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://skyvision-drones.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  )
}
