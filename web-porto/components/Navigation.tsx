'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm md:text-base font-light tracking-wider">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Nadilla Ananda
          </Link>
        </div>
        <div className="flex gap-8 md:gap-12 lg:gap-16 text-xs md:text-sm font-extralight tracking-widest uppercase">
          <Link
            href="#portfolio"
            className="hover:opacity-70 transition-opacity"
          >
            Portfolio
          </Link>
          <Link href="#about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="#journal" className="hover:opacity-70 transition-opacity">
            Journal
          </Link>
          <Link
            href="#contact"
            className="hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

