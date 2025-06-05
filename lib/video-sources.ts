export interface VideoSource {
  id: string
  url: string
  type: "pexels" | "youtube" | "direct" | "cloudinary" | "vimeo"
  title: string
  attribution?: {
    author: string
    source: string
    license?: string
    url?: string
  }
  poster?: string
  duration?: number
}

// Video sources for the hero section with actual Pexels URLs
export const heroVideoSources: VideoSource[] = [
  {
    id: "pexels-busy-road",
    url: "https://videos.pexels.com/video-files/1263198/1263198-uhd_2560_1440_30fps.mp4",
    type: "pexels",
    title: "Aerial View of Busy Road",
    attribution: {
      author: "Kelly",
      source: "Pexels",
      license: "Pexels License",
      url: "https://www.pexels.com/video/aerial-view-of-a-busy-road-1263198/",
    },
    poster: "https://images.pexels.com/videos/1263198/free-video-1263198.jpg?auto=compress&cs=tinysrgb&dpr=1&w=1920",
    duration: 15,
  },
  {
    id: "pexels-night-traffic",
    url: "https://videos.pexels.com/video-files/2053855/2053855-uhd_2560_1440_30fps.mp4",
    type: "pexels",
    title: "Aerial View of Vehicles at Night",
    attribution: {
      author: "Kelly",
      source: "Pexels",
      license: "Pexels License",
      url: "https://www.pexels.com/video/aerial-view-of-vehicles-travelling-at-night-2053855/",
    },
    poster: "https://images.pexels.com/videos/2053855/free-video-2053855.jpg?auto=compress&cs=tinysrgb&dpr=1&w=1920",
    duration: 20,
  },
]

// Get videos for hero section (top 2 by default)
export function getHeroVideos(count = 2): VideoSource[] {
  return heroVideoSources.slice(0, count)
}

// Add support for different video providers
export function getVideoEmbedUrl(source: VideoSource): string {
  switch (source.type) {
    case "youtube":
      // Extract video ID and create embed URL
      const youtubeId = source.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
      return youtubeId
        ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`
        : source.url

    case "vimeo":
      const vimeoId = source.url.match(/vimeo\.com\/(\d+)/)?.[1]
      return vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1` : source.url

    case "cloudinary":
      // Cloudinary video URLs can be used directly
      return source.url

    case "pexels":
    case "direct":
    default:
      return source.url
  }
}
