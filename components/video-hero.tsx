"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import type { VideoSource } from "@/lib/video-sources"

interface VideoHeroProps {
  videos: VideoSource[]
  autoTransition?: boolean
  transitionInterval?: number
}

export function VideoHero({ videos, autoTransition = true, transitionInterval = 15000 }: VideoHeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)

  const currentVideo = videos[currentVideoIndex]
  const nextVideo = videos[(currentVideoIndex + 1) % videos.length]

  // Seamless video transition function
  const transitionToNext = useCallback(() => {
    if (videos.length <= 1 || isTransitioning) return

    setIsTransitioning(true)

    // Start fade out
    if (videoRef.current) {
      videoRef.current.style.opacity = "0"
    }

    // After fade out completes, switch videos
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)

      // Start fade in
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.style.opacity = "1"
        }
        setIsTransitioning(false)
      }, 100)
    }, 500)
  }, [videos.length, isTransitioning])

  // Auto-transition between videos
  useEffect(() => {
    if (!autoTransition || videos.length <= 1) return

    const interval = setInterval(transitionToNext, transitionInterval)
    return () => clearInterval(interval)
  }, [autoTransition, transitionInterval, transitionToNext])

  // Preload next video for seamless transition
  useEffect(() => {
    if (nextVideoRef.current && nextVideo) {
      nextVideoRef.current.load()
    }
  }, [nextVideo])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const switchToVideo = (index: number) => {
    if (index === currentVideoIndex || isTransitioning) return

    setIsTransitioning(true)

    if (videoRef.current) {
      videoRef.current.style.opacity = "0"
    }

    setTimeout(() => {
      setCurrentVideoIndex(index)

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.style.opacity = "1"
        }
        setIsTransitioning(false)
      }, 100)
    }, 500)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Current Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="hero-video"
          poster={currentVideo.poster}
          style={{ transition: "opacity 0.5s ease-in-out" }}
          key={currentVideo.id}
          crossOrigin="anonymous"
        >
          <source src={currentVideo.url} type="video/mp4" />
          {/* Fallback image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: currentVideo.poster
                ? `url('${currentVideo.poster}')`
                : "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          />
        </video>

        {/* Preload next video (hidden) */}
        {nextVideo && (
          <video ref={nextVideoRef} muted loop playsInline className="hidden" preload="auto" crossOrigin="anonymous">
            <source src={nextVideo.url} type="video/mp4" />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Elevate Your Vision
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional drone photography and videography services that capture your world from extraordinary
          perspectives
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/request-a-quote">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black bg-black/20 backdrop-blur-sm"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-20 right-8 z-10 flex flex-col gap-2">
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>

        {/* Video Indicators */}
        {videos.length > 1 && (
          <div className="flex flex-col gap-1">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => switchToVideo(index)}
                disabled={isTransitioning}
                className={`w-2 h-8 rounded-full transition-all duration-200 ${
                  index === currentVideoIndex ? "bg-orange-500 shadow-lg" : "bg-white/50 hover:bg-white/70"
                } ${isTransitioning ? "opacity-50" : ""}`}
                aria-label={`Switch to video ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Attribution */}
      {currentVideo.attribution && (
        <div className="absolute bottom-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-white/90 text-xs">
            Video by{" "}
            <a
              href={currentVideo.attribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 underline font-medium"
            >
              {currentVideo.attribution.author}
            </a>{" "}
            from{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 underline font-medium"
            >
              {currentVideo.attribution.source}
            </a>
          </div>
          {currentVideo.attribution.license && (
            <div className="text-white/70 text-xs mt-1">License: {currentVideo.attribution.license}</div>
          )}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator text-white/70">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
