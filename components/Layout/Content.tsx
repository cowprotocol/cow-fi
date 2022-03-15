import styled from 'styled-components';
import { PropsWithChildren } from 'react'

import { siteConfig } from 'const/meta'
import { mainMenu, footerMenu } from '../../const/menu'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { Color, Font, Media } from 'const/styles/variables'
import { Content } from 'const/styles/pages/content'

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

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        <Header menu={mainMenu} siteConfig={siteConfig} />
        <Content>{children ? children : 'No content found'}</Content>
        <Footer menu={footerMenu} siteConfig={siteConfig} />
      </Wrapper>
    </>
  )
}