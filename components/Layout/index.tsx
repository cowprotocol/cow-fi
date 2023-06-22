import styled from 'styled-components'
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

const TokenDetail = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2.4rem;
  padding: 0 2.4rem;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 98rem;
  min-height: 80rem;
`

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean; tokenDetail?: boolean }>

export default function Layout({ children, fullWidth = false, tokenDetail = false }: LayoutProps) {
  const ContentComponent = fullWidth ? FullWidthContent : tokenDetail ? TokenDetail : Content

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
