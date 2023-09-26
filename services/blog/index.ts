export interface Article {
  title: string
  description: string
  slug: string
}

/**
 *
 * @returns All articles
 */
export async function getArticles(): Promise<Article[]> {
  return [
    { title: 'Article 1', description: 'Description 1', slug: 'Slug 1' },
    { title: 'Article 2', description: 'Description 2', slug: 'Slug 2' },
    { title: 'Article 3', description: 'Description 3', slug: 'Slug 3' },
  ]
}

/**
 *
 * @returns Single article
 */
export async function getArticleById(id: string): Promise<Article> {
  return { title: 'Article 1', description: 'Description 1', slug: 'Slug 1' }
}
