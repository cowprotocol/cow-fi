import styled from 'styled-components';
import { PropsWithChildren } from 'react'

import { CONFIG } from 'const/meta'
import { HEADER_LINKS, FOOTER_LINK_GROUPS } from '../../const/menu'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'

export type LayoutProps = PropsWithChildren<{
  siteConfigData?: any // needs fix
  metrics?: any // needs fix
  mainMenuData?: any // needs fix
  footerMenuData?: any // needs fix
}>

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
`

const Content = styled.main`
  margin: -10.4rem auto 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        <Header menu={HEADER_LINKS} siteConfig={CONFIG} />
        <Content>{children ? children : 'No content found'}</Content>
        <Footer menu={FOOTER_LINK_GROUPS} siteConfig={CONFIG} />
      </Wrapper>
    </>
  )
}