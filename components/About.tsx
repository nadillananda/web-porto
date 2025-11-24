'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic grainy background"
          fill
          className="object-cover opacity-20"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0503]/90 via-[#1a0f0a]/90 to-[#0d0805]/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-50" />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 z-10 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 w-full">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            / about me
          </h2>
          <div className="space-y-6 max-w-3xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-300">
              In the quiet spaces between code and creation, I craft digital
              experiences that breathe.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-400">
              As an IT and software developer, I navigate the delicate balance
              between technical precision and human intuition. Each line of code
              is a thread in a larger tapestry—a bridge between abstract logic
              and tangible impact.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-400">
              I believe in building systems that not only function flawlessly
              but also resonate with the people who use them. Where complexity
              meets clarity, where algorithms meet artistry—that's where
              meaningful work happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

