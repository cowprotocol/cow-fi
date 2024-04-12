export interface Article {
  title: string
  description: string
  slug: string
}

/**
 *
 * @returns Return all article slugs
 */
export async function getArticleSlugs(): Promise<string[]> {
  return ['slug-1', 'slug-2', 'slug-3']
}

/**
 *
 * @returns All articles
 */
export async function getArticles(): Promise<Article[]> {
  return [
    { title: 'Article 1', description: 'Description 1', slug: 'slug-1' },
    { title: 'Article 2', description: 'Description 2', slug: 'slug-2' },
    { title: 'Article 3', description: 'Description 3', slug: 'slug-3' },
  ]
}

/**
 *
 * @returns Single article
 */
export async function getArticleBySlug(_slug: string): Promise<Article> {
  return { title: 'Article 1', description: 'Description 1', slug: 'slug-1' }
}
