import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { Content } from 'const/styles/pages/content'

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
  padding: 4.2rem 2.4rem;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 121rem;
  min-height: 80rem;
`

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean; tokensPages?: boolean }>

export default function Layout({ children, fullWidth = false, tokensPages = false }: LayoutProps) {
  const ContentComponent = fullWidth ? FullWidthContent : (tokensPages ? TokensPages : Content)
  
  return (
    <>
      <Wrapper>
        <Header />
        <ContentComponent>{children || 'No content found'}</ContentComponent>
        <Footer />
      </Wrapper>
    </>
  )
}