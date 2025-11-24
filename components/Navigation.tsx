'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const aboutSection = document.getElementById('about')
      
      if (aboutSection) {
        const aboutOffset = aboutSection.offsetTop
        const scrollThreshold = aboutOffset - 200 // Start hiding before reaching About
        
        if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
          // Scrolling down past threshold - hide navbar
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY || currentScrollY < scrollThreshold) {
          // Scrolling up or before threshold - show navbar
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-6 md:py-8 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full gap-8 md:gap-12 lg:gap-16">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#journal">Journal</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-end">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white transition-opacity duration-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/80 backdrop-blur-md border-l border-white/10">
          <div className="flex flex-col h-full pt-20 px-8">
            <MobileNavLink href="#hero" onClick={closeMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={closeMenu}>
            About
            </MobileNavLink>
            <MobileNavLink href="#journal" onClick={closeMenu}>
            Journal
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMenu}>
            Contact
            </MobileNavLink>
          </div>
        </div>
      </div>
    </>
  )
}

// NavLink Component for Desktop
function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    
    // For hero section, scroll to top
    if (targetId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }
    
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white/80 hover:text-white uppercase text-xs md:text-sm font-extralight tracking-wide md:tracking-widest transition-all duration-300 relative group whitespace-nowrap cursor-pointer"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  )
}

// Mobile NavLink Component
function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick()
    const targetId = href.replace('#', '')
    
    // For hero section, scroll to top
    if (targetId === 'hero') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 300) // Wait for menu to close
      return
    }
    
    const element = document.getElementById(targetId)
    if (element) {
      setTimeout(() => {
        const offsetTop = element.offsetTop - 100 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        })
      }, 300) // Wait for menu to close
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white/80 hover:text-white uppercase text-sm font-extralight tracking-widest py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300 relative group cursor-pointer"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  )
}

