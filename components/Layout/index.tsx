import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { Content } from './index.styles'
import { Color } from 'styles/variables'

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

const TokensPages = styled.main`
  font-size: 1.6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.4rem;
  padding: 14.6rem 2.4rem 5.6rem;
  box-sizing: border-box;
  margin: -10.4rem auto 0;
  width: 100%;
  min-height: 80rem;
  ${Color.gradientMesh};
  background-size: 100vw 100vh;
  background-attachment: fixed;
`

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean; tokensPages?: boolean }>

export default function Layout({ children, fullWidth = false, tokensPages = false }: LayoutProps) {
  const ContentComponent = fullWidth ? FullWidthContent : tokensPages ? TokensPages : Content
  const FooterNoMargin = tokensPages ? true : false

  return (
    <>
      <Wrapper>
        <Header />
        <ContentComponent>{children || 'No content found'}</ContentComponent>
        <Footer noMargin={FooterNoMargin} />
      </Wrapper>
    </>
  )
}
