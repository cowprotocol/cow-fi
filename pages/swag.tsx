import Head from 'next/head'
import { Widget } from '@typeform/embed-react'
import { createPopup } from '@typeform/embed'
import '@typeform/embed/build/css/popup.css'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import Layout from '@/components/Layout'
import { Button, ButtonVariant } from '@/components/Button'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { Section, SectionContent, SectionH1, SectionImage } from '@/components/Home/index.styles'
import { Color, Media } from '@/styles/variables'

const IMAGE_PATH = '/images/'
const MAX_WIDTH_CONTENT = 126
const TYPEFORM_ID = 'U8gDXwrd'

const WidgetWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 65rem;
`

export default function CoWSwag() {
  const pageTitle = `CoW Swag`
  const pageDescription = 'The official CoW Swap Swag store.'
  const pageImage = `${CONFIG.url.root}${IMAGE_PATH}og-social-image-cowswag.png`

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${Media.smallScreen})`)

    const handleTabletChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleTabletChange)
    setIsMobile(mediaQuery.matches)

    return () => mediaQuery.removeEventListener('change', handleTabletChange)
  }, [])

  const openPopup = () => {
    const { toggle } = createPopup(TYPEFORM_ID)
    toggle()
  }

  console.log('isMobile', isMobile)

  return (
    <>
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
      <Layout>
        <Section
          gap={2}
          gapMobile={1}
          fullWidth
          firstSection
          padding={'8rem 8rem 4rem'}
          paddingMobile={'0'}
          flow="column"
        >
          <SectionImage width={'460px'} widthMobile="100%" margin="0 auto" className="zoomSlideIn">
            <img src={`${IMAGE_PATH}cowswag-animation.gif`} alt="CoW Swag logo" width="100%" />
          </SectionImage>
          <SectionContent flow="column" maxWidth={MAX_WIDTH_CONTENT}>
            <div>
              <SectionH1
                color={Color.lightBlue}
                fontSize={6.2}
                fontSizeMobile={2.4}
                fontWeight={500}
                maxWidth={100}
                margin={'0 auto '}
              >
                Order your Swag now!
              </SectionH1>
              {isMobile ? (
                <Button
                  paddingMobileLR={4.2}
                  paddingMobileTB={1.2}
                  fontSizeMobile={2.4}
                  variant={ButtonVariant.LIGHT}
                  onClick={openPopup}
                  label="Click here to order"
                />
              ) : (
                <WidgetWrapper>
                  <Widget id={TYPEFORM_ID} style={{ width: '100%', height: '100%' }} />
                </WidgetWrapper>
              )}
            </div>
          </SectionContent>
        </Section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = CONFIG

  return {
    props: { siteConfigData },
  }
}
