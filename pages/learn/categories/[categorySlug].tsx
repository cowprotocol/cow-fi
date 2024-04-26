import React from 'react'

import Layout from '@/components/Layout'
import Head from 'next/head'

import { Category, getAllCategorySlugs, getCategories, getCategoryBySlug } from 'services/cms'

import { GetStaticPaths, GetStaticProps } from 'next'


import { CONFIG } from '@/const/meta'
import { OtherCategoriesSection } from '@/components/learn/OtherCategoriesSection'
import { CategorySection } from '@/components/learn/CategorySection'
import { SocialLearnSection } from '@/components/learn/SocialLearnSection'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export interface CategoryPageProps {
  category: Category
  categories: Category[]
}

export default function CategoryPage({ category, categories }: CategoryPageProps) {
  const { id } = category
  const { name, slug, description, image } = category?.attributes || {}
  const shareImageUrl = image?.data?.attributes?.url

  return (
    <Layout fullWidthGradientVariant={true} data-category-id={id} data-slug={slug}>
      <Head>
        <title>{name} - {CONFIG.title}</title>
        <title>{name} CoW</title>
        
        <meta name="description" content={description} key="description" />
        <meta property="og:description" content={description} key="og-description" />
        <meta property="og:title" content={name} key="og-title" />
        <meta name="twitter:title" content={name} key="twitter-title" />
        {shareImageUrl && (
          <>
            <meta key="ogImage" property="og:image" content={shareImageUrl} />
            <meta key="twitterImage" name="twitter:image" content={shareImageUrl} />
          </>
        )}
      </Head>

      <CategorySection category={category}  />      
      <OtherCategoriesSection categories={categories} />
      <SocialLearnSection />      
    </Layout>
  )
}

type CategoryQuery = { categorySlug: string}

export const getStaticPaths: GetStaticPaths<CategoryQuery> = async () => {
  const allSlugs = await getAllCategorySlugs()

  return {
    fallback: false,
    paths: allSlugs.map((categorySlug) => ({
      params: { categorySlug }
    })),
  }
}

export const getStaticProps: GetStaticProps<CategoryPageProps, CategoryQuery> = async ({ params }) => {
  const category = await getCategoryBySlug(params.categorySlug)
  const categories = await getCategories()

  if (!category) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
      categories,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
