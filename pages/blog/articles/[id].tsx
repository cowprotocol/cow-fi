import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { Article, getArticleBySlug, getArticleSlugs } from 'services/cms'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

const Wrapper = styled.div`
  a {
    font-size: 1.2rem;
    color: white;
    margin: 1rem 0 0.5rem 0;
  }
`

export interface BlogPostProps {
  article: Article
}

export default function BlogPostPage({ article }: BlogPostProps) {
  const { id } = article
  const { title, description, slug } = article.attributes

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:description" content={description} key="og-description" />
        <meta name="twitter:title" content={title} key="twitter-title" />
      </Head>

      <Layout fullWidthGradientVariant={false}>
        <Wrapper data-slug={slug} data-id={id}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href="/blog">Go back</Link>
        </Wrapper>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {

  const slugs = await getArticleSlugs()

  return {
    fallback: false,
    paths: slugs.map((id) => ({ params: { id } })),
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  console.log('params', params)
  const article = await getArticleBySlug(params.id as string)

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
