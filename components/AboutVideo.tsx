'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVisible || hasPlayed) return

    const playVideo = async () => {
      try {
        await video.play()
        setHasPlayed(true)
      } catch (error) {
        console.error('Unable to autoplay about video:', error)
      }
    }

    playVideo()
  }, [isVisible, hasPlayed])

  const handleEnded = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = video.duration || video.currentTime
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-lg border border-white/10 transition-all duration-[1600ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/about-video.mp4"
        className="h-full w-full object-cover"
        playsInline
        muted
        autoPlay
        preload="auto"
        onEnded={handleEnded}
      />
      {/* Gradient + grain overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay" />
    </div>
  )
}


