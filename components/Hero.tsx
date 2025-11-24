'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-page.png"
          alt="Cinematic background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 z-10 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight flex items-center gap-x-4">
              <span>nadilla</span>
              <span>ananda</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-300 max-w-xl animate-fade-in-delay">
            i shape algorithms that pulse with intent, weaving designs that echo softly, and revealing experiences born between the dim glow of complexity and the spark of clarity.
            </p>
            <div className="pt-4 animate-fade-in-delay">
              <button
                onClick={() => {
                  const journalSection = document.getElementById('journal')
                  if (journalSection) {
                    const offsetTop = journalSection.offsetTop - 100
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth',
                    })
                  }
                }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-base md:text-lg font-medium hover:bg-white/20 transition-all duration-300 hover:gap-4"
              >
                View My Work
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

