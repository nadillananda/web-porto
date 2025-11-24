export interface JournalArticle {
  id: number
  title: string
  slug: string
  excerpt: string
}

export const journalArticles: JournalArticle[] = [
  {
    id: 1,
    title: 'The Architecture of Thought',
    slug: 'the-architecture-of-thought',
    excerpt:
      'In the silence of midnight debugging sessions, I find clarity. Code becomes poetry when structure meets intention, when every function serves a purpose beyond its immediate task.',
  },
  {
    id: 2,
    title: 'Designing in the Margins',
    slug: 'designing-in-the-margins',
    excerpt:
      'The most beautiful solutions often emerge from constraints. When limitations become creative catalysts, we discover possibilities that didn\'t exist in the realm of unlimited choice.',
  },
  {
    id: 3,
    title: 'Outside of Design and Coding',
    slug: 'the-rhythm-of-iteration',
    excerpt:
      'Building software is a dance between planning and discovery. Each iteration reveals new insights, each refactor brings us closer to something that feels inevitable in hindsight.',
  },
  {
    id: 4,
    title: 'Course and Certification',
    slug: 'code-as-communication',
    excerpt:
      'I pursue learning that deepens my understanding not just of how to do something, but why it matters. So I can create solutions with clarity, purpose, and long-term value.',
  },
]

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return journalArticles.map((article) => article.slug)
}

