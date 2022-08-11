import { useState, 
  // useRef
 } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { transparentize } from 'polished'
import Button from 'components/Button'
import { Defaults, Color, Font, Media } from 'const/styles/variables'
import { InView } from 'react-intersection-observer'
import useMediaQuery from 'lib/hooks/useMediaQuery';
// import { useOnClickOutside } from 'hooks/useOnClickOutside';

const LogoImage = 'images/logo.svg'
const LogoIconImage = 'images/logo-icon.svg'
const MenuImage = 'images/icons/menu.svg'

const Pixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  display:block;
  background: transparent;
`

const Wrapper = styled.header`
  z-index: 10;
  width: 100%;
  height: 9.6rem;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0 5.6rem;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  transition: background 0.2s ease-in-out, height 0.2s ease-in-out;

  ${Media.mediumUp} {
    padding: 0 1.6rem;
    height: 6rem;
  }

  &.sticky {
    background: ${transparentize(0.1, Color.lightBlue)};
    backdrop-filter: blur(5px);
    height: 6rem;
  }

  > a {
    ${Media.mediumOnly} {
      margin: 0 2.4rem 0 auto;
    }
  }
`

const Content = styled.div`
  width: 100%;
  max-width: ${Defaults.pageMaxWidth};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: 1.9rem;
  color: ${Color.text1};
  padding: 0;
  margin: 0;

  .sticky & {
    font-size: 1.6rem;
  }

  ${Media.mediumDown} {
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${Color.black};
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    gap: 5rem;
    overflow-y: auto;

    &.visible {
      position: fixed;
      display: flex;
      padding: 12rem 6rem 6rem;
      font-size: 3.2rem;

      ${Media.mobile} {
        font-size: 2rem;
      }
    }

  }

  > li:not(:last-of-type) {
    margin: 0 3.6rem 0 0;

    ${Media.mediumDown} {
      margin: 0 0 3.6rem;
      line-height: 1;
    }
  }

  > li {
    ${Media.mediumDown} {
      margin: 0 0 3.6rem;
      line-height: 1;
      width: 100%;
      text-align: center;
    }
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${Color.darkBlue};
    }
  }

  // Any button/link right after the menu
  /* + a {
    ${Media.mobile} {
      min-height: 3.2rem;
      margin: 0 0 0 auto;
    }
  } */
`

const SubMenu = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  list-style: none;
`

const CloseIcon = styled.button`
  display: none;
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  color: ${Color.darkBlue};
  background: transparent;
  border: 0;

  &::before {
    content: '✕';
    display: block;
    font-size: 5rem;
    font-family: ${Font.arial};

    ${Media.mobile} {
      font-size: 3.2rem;
    }
  }

  ${Media.mediumDown} {
    display: flex;
  }
`

const MenuToggle = styled.button`
  display: flex;
  background: transparent;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  border-radius: ${Defaults.borderRadius};
  text-decoration: none;
  border: none;
  height: 4.2rem;
  width: 4.2rem;
  padding: 0;

  &::before {
    display: flex;
    content: "";
    background: url(${MenuImage}) no-repeat center/contain;
    width: 62%;
    height: 100%;
  }
`

const Logo = styled.div`
  width: 13.2rem;
  height: 4.2rem;
  background: url(${LogoImage}) no-repeat center/contain;
  cursor: pointer;

  .sticky & {
    width: 10.1rem;
    height: 3.2rem;
  }

  ${Media.mediumDown} {
    background: url(${LogoIconImage}) no-repeat center/contain;
    width: 3.6rem;
    height: 3.2rem;
    background-size: contain;
    background-position: left;

    .sticky & {
      width: 3.6rem;
      height: 3.2rem;
    }
  }
`

export default function Header({ siteConfig, menu }) {
  const swapURL = siteConfig.url.swap
  const isUpToSmall = useMediaQuery(`(max-width: ${Media.smallScreen})`);
  const isUpToMedium = useMediaQuery(`(max-width: ${Media.mediumEnd})`);
  // const isLargeAndUp = useMediaQuery(`(max-width: ${Media.LargeUp})`);
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
  const toggleBodyScroll = () => {
    !isMobileMenuOpen ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll')
  }
  const handleMobileMenuOnClick = () => {
    if (isUpToMedium) {
      setisMobileMenuOpen(!isMobileMenuOpen)
      toggleBodyScroll()
    }
  }

  // const node = useRef<HTMLOListElement>()
  // const [showMenu, setShowMenu] = useState(false)
  // useOnClickOutside(node, () => isLargeAndUp && setShowMenu(false)) // only trigger on large screens

  return (
    <InView threshold={1} delay={500}>
      {({ inView, ref }) => (
        <>
          <Pixel ref={ref} />
          <Wrapper className={!inView && 'sticky'}>

            <Content>

            <Link passHref href='/'>
              <Logo />
            </Link>

            {/* <Menu className={isMobileMenuOpen ? 'visible' : ""}>
              {menu.map(({ id, title, url, target, rel, items }) => (
                <li key={id}>
                  {url && <a onClick={handleMobileMenuOnClick} href={url} target={target} rel={rel}>{title}</a>}
                  {!url && items.length > 0 && <>
                  {title}

                  <SubMenu ref={node as any}>
                  {menu.map(({ id, title, url, target, rel, }) => (
                    <li key={id}>
                      <a onClick={handleMobileMenuOnClick} href={url} target={target} rel={rel}>{title}</a>
                    </li>
                  ))}
                  </SubMenu>
                  
                  </>}
                </li>
              ))}
              <CloseIcon onClick={handleMobileMenuOnClick} />
            </Menu> */}

            {!isUpToSmall && <Button variant={!inView ? 'small' : 'outline'} minHeight={4.8} fontSize={1.6} href={swapURL} label={'Trade on CoW Swap'} target="_blank" rel="noopener nofollow" />}
            {isUpToMedium && <MenuToggle onClick={handleMobileMenuOnClick} />}

            </Content>

          </Wrapper>
        </>
      )}
    </InView>
  )
}