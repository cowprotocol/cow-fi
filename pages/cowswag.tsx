import React from 'react'
import { Widget } from '@typeform/embed-react'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { Section, SectionContent, SectionH1, SectionImage } from '@/components/Home/index.styles'
import { Color, TextColor } from '@/styles/variables'

const IMAGE_PATH = '/images/'
const MAX_WIDTH_CONTENT = 126
const TYPEFORM_ID = 'U8gDXwrd' // Replace with your Typeform embed URL

export default function CoWSwag() {
  const pageTitle = `CoW Swag`
  const pageDescription = 'The official CoW Swap Swag store.'
  const pageImage = `${CONFIG.url.root}${IMAGE_PATH}cowswag-dark.png`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta key="description" name="description" content={pageDescription} />
        <meta key="ogTitle" property="og:title" content={pageTitle} />
        <meta key="ogDescription" property="og:description" content={pageDescription} />
        <meta key="ogImage" property="og:image" content={pageImage} />
        <meta key="twitterTitle" name="twitter:title" content={pageTitle} />
        <meta key="twitterDescription" name="twitter:description" content={pageDescription} />
        <meta key="twitterImage" name="twitter:image" content={pageImage} />
      </Head>

      <Section
        gapMobile={4}
        fullWidth
        firstSection
        padding={'8rem 8rem 4rem'}
        paddingMobile={'0 2.4rem 4rem'}
        flow="column"
      >
        {/*TODO: cowswag animated logo*/}
        <SectionImage width={'460px'} widthMobile="90%" margin="0 auto" className="zoomSlideIn">
          <img src={`${IMAGE_PATH}cowswag-animation.gif`} alt="CoW Swag" width="100%" />
        </SectionImage>
        <SectionContent flow="column" maxWidth={MAX_WIDTH_CONTENT}>
          <div>
            <SectionH1
              color={Color.cowammWhite}
              fontSize={6.6}
              fontSizeMobile={3.6}
              fontWeight={500}
              maxWidth={100}
              margin={'0 auto 4rem'}
            >
              Order your Swag now!
            </SectionH1>
            <Widget id={TYPEFORM_ID} style={{ width: '100%', height: '600px' }} className="my-form" />
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = CONFIG

  return {
    props: { siteConfigData },
  }
}
