'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { certificationItems } from '@/app/journal/certifications'

type GalleryVariant = 'embedded' | 'full'

interface CourseCertificationGalleryProps {
  variant?: GalleryVariant
}

export default function CourseCertificationGallery({
  variant = 'embedded',
}: CourseCertificationGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.35 }
    )

    if (galleryRef.current) observer.observe(galleryRef.current)
    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current)
    }
  }, [])

  const containerClasses =
    variant === 'embedded'
      ? 'space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md'
      : 'space-y-10 rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12 backdrop-blur-2xl'

  const gridClasses =
    variant === 'embedded'
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
      : 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'

  return (
    <div ref={galleryRef} className={containerClasses}>
      {variant === 'full' && (
        <div className="space-y-2">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50">
            / course & certification
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Here are my courses and certification.
          </p>
        </div>
      )}

      <div className={gridClasses}>
        {certificationItems.map((item, index) => (
          <CertificationCard
            key={item.id}
            item={item}
            index={index}
            isVisible={isVisible}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}

function CertificationCard({
  item,
  index,
  isVisible,
  variant,
}: {
  item: (typeof certificationItems)[number]
  index: number
  isVisible: boolean
  variant: GalleryVariant
}) {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => setShowOverlay(false), 2000)
    return () => clearTimeout(timer)
  }, [isVisible])

  const mediaHeight = variant === 'embedded' ? 'h-40' : 'h-56 md:h-64'

  return (
    <div
      className={`relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 transition-all duration-[1400ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={`relative w-full ${mediaHeight} overflow-hidden rounded-xl`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlzdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay" />
        <div
          className={`absolute inset-0 flex items-end p-4 transition-opacity duration-700 ${
            showOverlay ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">
              certification
            </p>
            <p className="text-lg font-semibold text-white">{item.title}</p>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          {item.year} · {item.institution}
        </p>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}


