'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { journalArticles } from '@/app/journal/articles'

export default function Journal() {
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
      id="journal"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0805]/95 via-[#1a0f0a]/90 via-[#1f120a]/90 to-[#0d0805]/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-50" />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 z-10 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
        <div
          className={`space-y-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            / journal
          </h2>

          {/* Journal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {journalArticles.map((entry, index) => (
              <Link
                key={entry.id}
                href={`/journal/${entry.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 block"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
                      {entry.excerpt}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm md:text-base font-light text-gray-400 group-hover:text-white transition-colors duration-300">
                    Read more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

