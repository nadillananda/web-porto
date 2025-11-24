import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getAllArticleSlugs } from '../articles'
import type { Metadata } from 'next'
import CourseCertificationGallery from '@/components/CourseCertificationGallery'

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Journal`,
    description: article.excerpt,
  }
}

export default function JournalArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const isCertificationFeature = article.slug === 'code-as-communication'

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient - matching hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNCIvPjwvc3ZnPg==')] opacity-20 z-10 mix-blend-overlay" />
      </div>

      {/* Back Button */}
      <Link
        href="/#journal"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-sm font-light">Back</span>
      </Link>

      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-8 md:px-16 py-24 w-full animate-fade-in space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
        </div>

        {isCertificationFeature ? (
          <CourseCertificationGallery variant="full" />
        ) : (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
            <p className="text-lg text-gray-300 leading-relaxed">
              Content coming soon...
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

