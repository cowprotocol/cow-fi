import Link from 'next/link'

import React from 'react'

import { Color } from '@/styles/variables'
import { Article, ArticleBlock, SharedMediaComponent, SharedQuoteComponent, SharedRichTextComponent, SharedSliderComponent, SharedVideoEmbedComponent, isSharedMediaComponent, isSharedQuoteComponent, isSharedRichTextComponent, isSharedSliderComponent, isSharedVideoEmbedComponent } from "services/cms"
import styled from 'styled-components'
import { formatDate } from 'util/formatDate'
import { Section, SectionContent, SubTitle } from '../Home/index.styles'
// import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';



const ArticleContentWrapper = styled.article`
a {
  font-size: 1.2rem;
  color: white;
  margin: 1rem 0 0.5rem 0;
}
`


const ArticleBlocksWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;
  padding: 0
`

export const ArticleDescription = styled.p`
  font-size: 1.5rem;
  color: ${Color.text1};
  line-height: 1.5;
  padding: 2rem 0 0 0;
`

const ArticleSubtitleWrapper = styled.div`
  color: ${Color.grey3};
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;  

  > div span {
    font-weight: normal;  
  }
`


const ArticleBlockWrapper = styled.li`
`


export interface ArticleSectionProps {
  article: Article
}

export function ArticleSection ({ article }: ArticleSectionProps) {
  const { id } = article
  const { title, description, publishedAt, slug, seo, authorsBio, blocks: block2, categories, cover, createdBy } = article?.attributes || {}

  const blocks =  [
    {
      type: 'paragraph',
      children: [{ type: 'text', text: 'A simple paragraph' }],
    },
  ]

  return (
    <>
      <Section fullWidth padding="0 8rem 4rem 8rem">
        <SectionContent flow="column">
          <div className="container">
            <h3>{title}</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              {description}
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'white'} flow="column" gap={14} padding="4rem 8rem 12rem 8rem">
        <SectionContent flow={'row'} maxWidth={100} textAlign={'left'}>
          <div className="container">
            {/* <BlocksRenderer content={blocks} /> */}
            ...content
          </div>

          <pre style={{ lineHeight: '1.5em', fontSize: '14px'}}>
            {JSON.stringify(article, null, 2)}
          </pre>
        </SectionContent>
      </Section>

      
      {/* <Section fullWidth colorVariant={'dark-gradient'}  padding="8rem 8rem 14rem 8rem">
        <SectionContent flow="column">
          <div className="container">
            <ArticleContentWrapper data-slug={slug} data-id={id}>        
              <h1>{title}</h1>
              <ArticleSubtitle dateIso={publishedAt} authorsBio={authorsBio} />
              <p>{description}</p>

              {blocks && (
              <ArticleBlocksWrapper>
                {blocks.map(block => <ArticleBlockComponent key={block.id} block={block} />)}
              </ArticleBlocksWrapper>
              )}

              <Link href="/learn">Go back</Link>
            </ArticleContentWrapper>
          </div>          
        </SectionContent>
      </Section>      */}

    </>
  )
}


export interface ArticleDateProps {
  dateIso: string
  authorsBio: Article['attributes']['authorsBio']
}
export function ArticleSubtitle({ dateIso, authorsBio }: ArticleDateProps){
  const date = new Date(dateIso)
  const author = authorsBio?.data?.attributes?.name

  return <ArticleSubtitleWrapper>
    <div>
      Published on: <span>{formatDate(date)}</span>
    </div>

    {author  && (
      <div>
        Author: <span>{author}</span>
      </div>
    )}
    </ArticleSubtitleWrapper>
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
