import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journal from '@/components/Journal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Journal />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

