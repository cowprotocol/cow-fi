import Link from 'next/link'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import { Color } from '@/styles/variables'
import { Article, ArticleBlock, SharedMediaComponent, SharedQuoteComponent, SharedRichTextComponent, SharedSliderComponent, SharedVideoEmbedComponent, isSharedMediaComponent, isSharedQuoteComponent, isSharedRichTextComponent, isSharedSliderComponent, isSharedVideoEmbedComponent } from "services/cms"
import styled from 'styled-components'
import { formatDate } from 'util/formatDate'

const ArticleListWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
`

const ArticleContentWrapper = styled.article`
a {
  font-size: 1.2rem;
  color: white;
  margin: 1rem 0 0.5rem 0;
}
`


const ArticleItemWrapper = styled.li`
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

const ArticleBlocksWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
`


const ArticleBlockWrapper = styled.li`
`

type ArticleAttributes = Article['attributes']

interface ArticleListProps {
  articles: Article[]
}

export function ArticleList({articles}: ArticleListProps) {
  return (
    <ArticleListWrapper>
      {articles.map((article) => <ArticleItem key={article?.attributes?.slug} article={article} />)}
    </ArticleListWrapper>
  )
}


export interface ArticleItemProps {
  article: Article
}

export function ArticleItem ({article}: ArticleItemProps) {
  const { slug,title, description, publishedAt, categories, cover, createdBy } = article?.attributes
  // TODO: For details: seo, §
  return (
    <ArticleItemWrapper key={slug} data-slug={slug} data-id={article.id}>
      <Link href={`/blog/articles/${slug}`}>{title}</Link>
      <ArticleDate dateIso={publishedAt} />
      <ArticleCreatedBy createdBy={createdBy} />
      <span>{ createdBy}</span>
      <p>{description}</p>
    </ArticleItemWrapper>
  )
}

export interface ArticleProps {
  article: Article
}

export function ArticleContent ({article}: ArticleProps) {
  const { id } = article
  const { title, description, publishedAt, slug, seo, authorsBio, blocks, categories, cover, createdBy } = article?.attributes || {}
  const { metaTitle, shareImage, metaDescription } = seo || {}
  const shareImageUrl = shareImage?.data?.attributes?.url


  

  return (
    <>
      <Head>
        <title>{title}</title>
        
        <meta name="description" content={metaDescription || description} key="description" />
        <meta property="og:description" content={metaDescription || description} key="og-description" />
        <meta property="og:title" content={metaTitle || title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        {shareImageUrl && (
          <>
            <meta key="ogImage" property="og:image" content={shareImageUrl} />
            <meta key="twitterImage" name="twitter:image" content={shareImageUrl} />
          </>
        )}
      </Head>

      <Layout fullWidthGradientVariant={false}>
        <ArticleContentWrapper data-slug={slug} data-id={id}>
          <code>
            {JSON.stringify(article)}
          </code>

          <h1>{title}</h1>
          <ArticleDate dateIso={publishedAt} />
          <ArticleAuthor authorsBio={authorsBio} />
          <div>CATEGORIES: {JSON.stringify(categories)}</div>
          <div>COVER: {JSON.stringify(cover)}</div>
          <ArticleCreatedBy createdBy={createdBy} />
          <p>{description}</p>

          {blocks && (
          <ArticleBlocksWrapper>
            {blocks.map(block => <ArticleBlockComponent key={block.id} block={block} />)}
          </ArticleBlocksWrapper>
          )}

          <Link href="/blog">Go back</Link>
        </ArticleContentWrapper>
      </Layout>
    </>
  )
}


export interface ArticleDateProps {
  dateIso: string
}
export function ArticleDate({dateIso}: ArticleDateProps){
  const date = new Date(dateIso)

  return <>{formatDate(date)}</>
}

export interface ArticleAuthorProps {
  authorsBio: ArticleAttributes['authorsBio']
}
export function ArticleAuthor({authorsBio}: ArticleAuthorProps){
  const author = authorsBio?.data?.attributes
  if (!author) {
    return null
  }

  return <>{JSON.stringify(authorsBio)}</>
}



export interface ArticleCreatedByProps {
  createdBy: ArticleAttributes['createdBy']
}
export function ArticleCreatedBy({createdBy}: ArticleCreatedByProps){
  const a = createdBy?.data?.attributes
  if (!a) {
    return null
  }

  return <>TODO: {JSON.stringify(a)}</>
}

export interface ArticleBlockProps {
  block: ArticleBlock
}

export function ArticleBlockComponent ({block}: ArticleBlockProps) {
  const item = (() => {
    const component = block.__component
    if (isSharedMediaComponent(block)) {
      return <ArticleSharedMediaComponent sharedMedia={block} />
    }

    if (isSharedQuoteComponent(block)) {
      return <ArticleSharedQuoteComponent sharedQuote={block} />
    }

    if (isSharedRichTextComponent(block)) {
      return <ArticleSharedRichTextComponent sharedRichText={block} />
    }

    if (isSharedSliderComponent(block)) {
      return <ArticleSharedSliderComponent sharedSlider={block} />
    }

    if (isSharedVideoEmbedComponent(block)) {
      return <ArticleSharedVideoEmbedComponent sharedVideoEmbed={block} />
    }

    // Unknown media time
    console.error('Unknown Article Block: ' + component)
    return null
  })()

  return (
    <ArticleBlockWrapper>
      {item}
    </ArticleBlockWrapper>
  )
}

export function ArticleSharedMediaComponent({sharedMedia}: {sharedMedia: SharedMediaComponent}) {
  return <>SharedMediaComponent: {JSON.stringify(sharedMedia)}</>
}

export function ArticleSharedQuoteComponent({sharedQuote}: {sharedQuote: SharedQuoteComponent}) {
  return <>SharedMediaComponent: {JSON.stringify(sharedQuote)}</>
}

export function ArticleSharedRichTextComponent({sharedRichText}: {sharedRichText: SharedRichTextComponent}) {
  return <>SharedMediaComponent: {JSON.stringify(sharedRichText)}</>
}

export function ArticleSharedSliderComponent({ sharedSlider }: {sharedSlider: SharedSliderComponent}) {
  return <>SharedMediaComponent: {JSON.stringify(sharedSlider)}</>
}

export function ArticleSharedVideoEmbedComponent({ sharedVideoEmbed }: {sharedVideoEmbed: SharedVideoEmbedComponent}) {
  return <>SharedMediaComponent: {JSON.stringify(sharedVideoEmbed)}</>
}
