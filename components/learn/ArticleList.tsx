import Link from 'next/link'

import React from 'react'

import { Color } from '@/styles/variables'
import { Article } from "services/cms"
import styled from 'styled-components'
import { ArticleDescription, ArticleSubtitle } from './ArticleSection'

const ArticleListWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;
  padding: 0  
`

const ArticleItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 126rem;
  
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
  padding: 2.5rem;
  color: ${Color.text1};

  a.link {
    font-size: 2rem;
    text-decoration: none;
    color: ${Color.darkBlue};
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`


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
  const { slug,title, description, publishedAt, categories, cover, authorsBio } = article?.attributes
  // TODO: For details: seo, §
  return (
    <ArticleItemWrapper key={slug} data-slug={slug} data-id={article.id}>
      <Link href={`/learn/articles/${slug}`} passHref><a className="link">{title}</a></Link>
      <ArticleSubtitle dateIso={publishedAt} authorsBio={authorsBio} />
      <ArticleDescription>{description}</ArticleDescription>
    </ArticleItemWrapper>
  )
}