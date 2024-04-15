import Layout from '@/components/Layout'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { CONFIG } from '@/const/meta'
import styled from 'styled-components'
import { Color } from '@/styles/variables'
import { Article, getArticles } from 'services/cms'
import { ArticleList } from '@/components/Article'

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

export default function BlogPage({ articles }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - {CONFIG.title}</title>
      </Head>
      <Layout fullWidthGradientVariant={false}>
        <Wrapper>
          <h1>Blog</h1>
          <ArticleList articles={articles} />          
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
