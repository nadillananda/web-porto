'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0805]/95 via-[#1a0f0a]/90 via-[#0a0503]/90 to-black/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-50" />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 z-10 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 w-full">
        <div
          className={`space-y-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              / let's connect
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-300 max-w-2xl">
              If you're looking to build something meaningful, let's start a
              conversation.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 max-w-2xl"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-light text-gray-400 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-light text-gray-400 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                placeholder="Your Email"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-light text-gray-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-base md:text-lg font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              Send Message
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
          </form>
        </div>
      </div>
    </section>
  )
}

