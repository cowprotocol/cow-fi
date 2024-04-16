import { CmsClient, components } from "@cowprotocol/cms"; 
import { PaginationParam } from "types";

const PAGE_SIZE = 50

type Schemas = components["schemas"]
export type Article = Schemas["ArticleListResponseDataItem"]
export type SharedMediaComponent = Schemas["SharedMediaComponent"]
export type SharedQuoteComponent = Schemas["SharedQuoteComponent"]
export type SharedRichTextComponent = Schemas["SharedRichTextComponent"]
export type SharedSliderComponent = Schemas["SharedSliderComponent"]
export type SharedVideoEmbedComponent = Schemas["SharedVideoEmbedComponent"]


export type ArticleBlock = 
  SharedMediaComponent | 
  SharedQuoteComponent | 
  SharedRichTextComponent | 
  SharedSliderComponent | 
  SharedVideoEmbedComponent

  export function isSharedMediaComponent(component: ArticleBlock): component is SharedMediaComponent {
    return component.__component === 'SharedMediaComponent'
  }

  export function isSharedQuoteComponent(component: ArticleBlock): component is SharedQuoteComponent {
    return component.__component === 'SharedQuoteComponent'
  }

  export function isSharedRichTextComponent(component: ArticleBlock): component is SharedRichTextComponent {
    return component.__component === 'SharedRichTextComponent'
  }

  export function isSharedSliderComponent(component: ArticleBlock): component is SharedMediaComponent {
    return component.__component === 'SharedSliderComponent'
  }

  export function isSharedVideoEmbedComponent(component: ArticleBlock): component is SharedVideoEmbedComponent {
    return component.__component === 'SharedVideoEmbedComponent'
  }

/**
 * Open API Fetch client. See docs for usage https://openapi-ts.pages.dev/openapi-fetch/
 */
export const client = CmsClient({ 
  url: "https://cms.cow.fi/api" 
});


/**
 * Returns the article slugs for the given page.
 * 
 * @param params pagination params
 * @returns Slugs
 */
async function getArticlesSlugs(params: PaginationParam = {}): Promise<string[]> {
  const articles = await getArticles(params)  
  return articles.map((article) => article.attributes.slug)
}


/**
 * Returns all article slugs.
 * 
 * @returns Slugs
 */
export async function getAllArticleSlugs(): Promise<string[]> {
  // Fetch all pages
  const allSlugs = []
  let page = 0
  while(true) {
    const slugs = await getArticlesSlugs({ page, pageSize: PAGE_SIZE + 1 }) // Get one extra to check if there's more pages
    const hasMorePages = slugs.length > PAGE_SIZE
    allSlugs.push(hasMorePages ? slugs.slice(0, -1) : slugs)

    if (!hasMorePages) {
      break
    }

    // Keep fetching while there's more pages
    page++
  }


  return allSlugs.flat()
}

/**
 * Get articles sorted by descending published date.
 * 
 * @returns Articles for the given page
 */
export async function getArticles({ page=0, pageSize=PAGE_SIZE }: PaginationParam = {}): Promise<Article[]> {
  console.log('[getArticles] fetching page', page)
  const { data, error, response } = await client.GET("/articles", {
    params: {
      query: {
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        'sort': 'publishedAt:desc'
      }
    }
  })

  if (error) {
    console.error(`Error ${response.status} getting articles: ${response.url}. Page${page}`, error)
    throw error
  }

  return data.data
}

/**
 * Get article by slug.
 * 
 * @param slug Slug of the article
 * 
 * @throws Error if slug is not found
 * @throws Error if multiple articles are found with the same slug
 * 
 * @returns Article with the given slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!slug) {
    throw new Error('Slug is required')
  }
  
  console.log('[getArticleBySlug] get article for slug', slug)
  const { data, error } = await client.GET("/articles", {
    params: {

      // Use the query https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
      query: {
        // Filter by slug
        "filters[slug][$eq]": slug,

        // Populate
        'populate[0]': 'cover', 
        'populate[1]': 'blocks', 
        'populate[2]': 'seo', 
        'populate[3]': 'authorsBio',
        'populate[authorsBio][fields][0]': 'firstName',
        'populate[authorsBio][fields][1]': 'lastName',

        // Pagination
        "pagination[page]": 1,
        "pagination[pageSize]": 2, // Get 2 items to check for duplicates

        // Sort
        "sort": "publishedAt:desc"
      }
    }
  })

  if (error)  {
    console.error('Error getting slug: ' + slug, error)
    throw error
  }

  const { total } = data.meta.pagination

  if (total === 0) {
    return null
  }

  if (total > 1) {
    throw new Error(`Multiple articles found with slug ${slug}`)
  }

  return data.data[0]
}
