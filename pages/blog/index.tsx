import Layout from '@/components/Layout'
import { getTokensInfo } from 'services/tokens'
import { TokenInfo } from 'types'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { TokenList, TokenListProps } from '@/components/TokensList'
import { CONFIG } from '@/const/meta'
import { Article, getArticles } from 'services/blog'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export interface BlogProps {
  articles: Article[]
}

export default function BlogPage({ articles }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - {CONFIG.title}</title>
      </Head>
      <Layout fullWidthGradientVariant={false}>
        {articles.map((article) => {
          return (
            <div key={article.slug}>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          )
        })}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articles = await getArticles()

  return {
    props: {
      articles,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
