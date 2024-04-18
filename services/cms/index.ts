import { CmsClient, components } from "@cowprotocol/cms"; 

const PAGE_SIZE = 50

// export type { components } from "./gen-types"; 


export type Article = components["schemas"]["ArticleListResponseDataItem"]

/**
 * Open API Fetch client. See docs for usage https://openapi-ts.pages.dev/openapi-fetch/
 */
export const client = CmsClient({ 
  url: "https://cms.cow.fi/api" 
});


/**
 *
 * @returns Return all article slugs
 */
export async function getArticleSlugs(): Promise<string[]> {
  // Fetch a single page
  const fetchPage = async (pageNumber: number) => {
    console.log('[getArticleSlugs] fetching page', pageNumber)
    const { data, error } = await client.GET("/articles", {
      params: {
        query: {
          "pagination[page]": pageNumber,
          "pagination[pageSize]": PAGE_SIZE
        }
      }
    })
  
    if (error)  {
      throw error
    }

    const slugs = data.data.map((article) => article.attributes.slug)
    const { page, pageCount } = data.meta.pagination

    return { slugs, hasMorePages: page < pageCount }
  }

  // Fetch all pages
  const allSlugs = []
  let page = 0
  while(true) {
    const {slugs, hasMorePages} = await fetchPage(page)
    allSlugs.push(slugs)
    if (!hasMorePages) {
      break
    }

    page++
  }


  return allSlugs.flat()
}

/**
 *
 * @returns All articles
 */
export async function getArticles(params: { page?: number, pageSize?: number } = {}): Promise<Article[]> {
  const { page=0, pageSize=50 } = params

  console.log('[getArticles] fetching page', page)
  const { data, error, response } = await client.GET("/articles", {
    params: {
      query: {
        "pagination[page]": page,
        "pagination[pageSize]": pageSize
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
 *
 * @returns Single article
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!slug) {
    throw new Error('Slug is required')
  }
  
  console.log('[getArticleBySlug] get article for slug', slug)
  const { data, error } = await client.GET("/articles", {
    params: {
      query: {
        "filters[slug][$eq]": slug,
        "pagination[page]": 1,
        "pagination[pageSize]": 2
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
