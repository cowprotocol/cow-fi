import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'

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

import { Content } from 'const/styles/pages/content'

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean }>

export default function Layout(props: LayoutProps) {
  const { children, fullWidth = false } = props
  const content = children ? children : 'No content found'
  const ContentComponent = fullWidth ? FullWidthContent : Content
  return (
    <>
      <Wrapper>
        <Header />
        <ContentComponent>{content}</ContentComponent>
        <Footer />
      </Wrapper>
    </>
  )
}