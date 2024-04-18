import Layout from '@/components/Layout'
import { getTokensInfo } from 'services/tokens'
import { TokenInfo } from 'types'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { TokenList, TokenListProps } from '@/components/TokensList'
import { CONFIG } from '@/const/meta'
import Link from 'next/link'
import styled from 'styled-components'
import { Color } from '@/styles/variables'
import { Article, getArticles } from 'services/cms'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export interface BlogProps {
  articles: Article[]
}

const Wrapper = styled.div`
  h1 {
    font-size: 3rem;
    color: ${Color.white};
  }
`

const ArticleItem = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: ${Color.white};
    margin: 1rem 0 0.5rem 0;
  }
`

export default function BlogPage({ articles }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - {CONFIG.title}</title>
      </Head>
      <Layout fullWidthGradientVariant={false}>
        <Wrapper>
          <h1>Blog</h1>
          {articles.map((article) => {
            const { slug,title, description } = article.attributes
            return (
              <ArticleItem key={slug} data-slug={slug} data-id={article.id}>
                <Link href={`/blog/articles/${slug}`}>{title}</Link>
                <p>{description}</p>
              </ArticleItem>
            )
          })}
        </Wrapper>
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
