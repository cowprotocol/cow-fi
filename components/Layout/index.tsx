import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { Content } from './index.styles'
import { Color } from 'styles/variables'
import { SubTitle } from '@/components/Home/index.styles'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
`

const FullWidthContent = styled.main`
  margin: -10.4rem auto 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`

const FullWidthGradient = styled.main`
  font-size: 1.6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.4rem;
  padding: 14.6rem 0 5.6rem;
  box-sizing: border-box;
  margin: -10.4rem auto 0;
  width: 100%;
  min-height: 80rem;
  ${Color.gradientMesh};
  background-size: 100% 100%;
  background-attachment: fixed;
`

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean; fullWidthGradient?: boolean; fullWidthGradientVariant?: boolean }>

export default function Layout({ children, fullWidth = false, fullWidthGradientVariant = false }: LayoutProps) {
  const ContentComponent = fullWidth ? FullWidthContent : fullWidthGradientVariant ? FullWidthGradient : Content
  const FooterNoMargin = fullWidthGradientVariant ? true : false

  return (
    <>
      <Wrapper>
        <Header isLight={fullWidth || fullWidthGradientVariant} />
        <ContentComponent>{children || 'No content found'}</ContentComponent>
        <Footer noMargin={FooterNoMargin} />
      </Wrapper>
    </>
  )
}
