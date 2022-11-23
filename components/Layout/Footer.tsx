import styled from 'styled-components';
import Link from 'next/link'
import { Color, Font, Media } from 'const/styles/variables'
import SocialList from 'components/SocialList'

const LogoImage = 'images/logo-light.svg'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 5.6rem;
  margin: 16rem auto 0;
  position: relative;

  ${Media.mediumDown} {
    flex-flow: column wrap;
    padding: 5.6rem 2.4rem;
  }

  &::before {
    content: "";
    width: 100%;
    display: block;
    height: 0.1rem;
    background: ${Color.gradient};
    position: absolute;
    top: 0;
    left: 0;
  }
`

const MenuSection = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: row;
  gap: 4.8rem;

  
  ${Media.mediumDown} {
    justify-content: space-around;
  }
  

  ${Media.mobile} {
    flex: 1 1 100%;
    flex-flow: column wrap;
  }
`

const LogoSection = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: column wrap;
  align-items: flex-end;

  ${Media.mediumDown} {
    justify-content: space-around;
    align-items: center;
    margin: 9rem auto 0;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: ${Color.text2};
  font-size: ${Font.sizeDefault};

  ${Media.mobile} {
    align-content: center;
  }

  > b {
    display: block;
    font-size: 1.6rem;
    color: ${Color.lightBlue};
    margin: 0 0 3rem;

    ${Media.mobile} {
      text-align: center;
      font-size: 1.9rem;
    }
  }
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: inherit;
  flex-flow: column wrap;
  gap: 2.4rem;
  color: inherit;
  padding: 0;
  margin: 0;

  ${Media.mobile} {
    text-align: center;
  }

  > li:not(:last-of-type) {
    ${Media.mediumUp} {
      margin: 0 3.6rem 0 0;
    }
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;

    ${Media.mediumDown} {
      margin: 0 0 2.4rem;
      display: block;
    }

    &:hover {
      color: ${Color.white};
    }
  }
`

const Logo = styled.div`
  width: 17rem;
  height: 5.7rem;
  background: url(${LogoImage}) no-repeat center/contain;
  cursor: pointer;
  margin: 0 0 4rem;
`

const CopyrightLinks = styled.ol`
  list-style-type: none;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  font-size: 1.4rem;
  color: ${Color.text2};
  line-height: 1.5;
  padding: 0;

  ${Media.mediumDown} {
    align-items: center;
  }
`

export default function Footer({ siteConfig, menu }) {
  const { social } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>

      {menu.length > 0 && <MenuSection>{menu.map(({ id, title, links }) => (
        <MenuWrapper key={id}>
          <b>{title}</b>
          <Menu>
            {links.map(({ title, url, target }, index) =>
              <li key={index}>
                <Link href={url}>
                  <a target={target}>
                    {title}
                  </a>
                </Link>
              </li>
            )}
          </Menu>
        </MenuWrapper>
      ))}</MenuSection>}


      <LogoSection>
        <Link passHref href='/'>
          <Logo />
        </Link>
        <SocialList social={social} labels={false} iconSize={2.8} gap={0.7} innerPadding={1} alignItems={'right'} />
        <CopyrightLinks>
          <li>©CoW Protocol - {currentYear}</li>
        </CopyrightLinks>
      </LogoSection>

    </Wrapper >
  )
}