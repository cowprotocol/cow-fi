import Link from 'next/link'

import React from 'react'
import styled from 'styled-components'

import {
  Section,
  SectionContent,
  SubTitle,
} from '@/components/Home/index.styles'

import { Color } from '@/styles/variables'

import { Article, Category } from 'services/cms'
import { ArticleList } from './ArticleList'

const CategoryContentWrapper = styled.article`
a {
  font-size: 1.2rem;
  color: white;
  margin: 1rem 0 0.5rem 0;
}
`

interface CategorySectionProps {
    category: Category;
}


export function CategorySection({ category }: CategorySectionProps) {
  const { id } = category
  const { name, slug, description, image, articles } = category?.attributes || {}

  return (
    <>
      <Section fullWidth padding="0 8rem 4rem 8rem">
        <SectionContent flow="column">
          <div className="container">
            <h3>{name}</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              {description}
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'white'} flow="column" gap={14} padding="4rem 8rem 12rem 8rem">
        <SectionContent flow={'row'} maxWidth={100} textAlign={'left'}>
        <div className="container">
          <h3>Articles</h3>

            <CategoryContentWrapper data-slug={slug} data-id={id}>              
            <ArticleList articles={articles?.data as Article[]} />

            {/* 
            // TODO: Useful for debugging. Please let me have it here for now until first release :) 
            <pre style={{ lineHeight: '1.5em' }}>
              {JSON.stringify(category, null, 2)}
            </pre> 
            */}
          </CategoryContentWrapper>
          </div>
        </SectionContent>
      </Section>
    </>
  )
}