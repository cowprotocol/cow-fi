import Head from 'next/head'
import Link from 'next/link'
import Content from 'components/Layout/Content'
import { GetStaticProps } from 'next'
import { siteConfig } from '@/const/meta'
import { Title, Section } from 'const/styles/pages/content'

// pages/404.js
export default function Custom404({ siteConfigData }) {
  const { title } = siteConfigData

  return (
    <>
    <Head>
      <title>Page Not Found (404) - {title}</title>
    </Head>
    <Content>
      <Section>
        <Title>404 - Page Not Found</Title>
        <p>This page could not be found. Please go back to the <Link href="/">home page.</Link></p>
      </Section>
    </Content>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = siteConfig

  return {
    props: { siteConfigData },
  }
}