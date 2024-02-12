import { useState, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { transparentize, lighten } from 'polished'
import { Button, ButtonVariant } from 'components/Button'
import { Defaults, Color, Font, Media } from 'styles/variables'
import { InView } from 'react-intersection-observer'
import useMediaQuery from 'lib/hooks/useMediaQuery'
import { CustomLink as CustomLink } from '../CustomLink'
import { CONFIG } from '@/const/meta'
import { HEADER_LINKS } from '@/const/menu'
import { LinkWithUtm } from 'modules/utm'
import { sendGAEventHandler } from 'lib/analytics/sendGAEvent'
import { NavigationEvents } from 'lib/analytics/GAEvents'

const LogoImage = '/images/logo.svg'
const LogoImageThemedCoWAMM = '/images/logo-themed-cowamm.svg'
const LogoLightImage = '/images/logo-light.svg'
const LogoLightImageThemedCoWAMM = '/images/logo-light-themed-cowamm.svg'
const LogoIconImage = '/images/logo-icon.svg'
const LogoIconImageThemedCoWAMM = '/images/logo-icon-themed-cowamm.svg'
const LogoIconLightImage = '/images/logo-icon-light.svg'
const LogoIconLightImageThemedCoWAMM = '/images/logo-icon-light-themed-cowamm.svg'
const MenuImage = '/images/icons/menu.svg'
const MenuImageLight = '/images/icons/menu-light.svg'

interface PixelProps {
  children?: React.ReactNode
}

const StyledPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  display: block;
  background: transparent;
`

const Pixel = forwardRef<HTMLDivElement, PixelProps>((props, ref) => (
  <StyledPixel ref={ref}>{props.children}</StyledPixel>
))

Pixel.displayName = 'Pixel'

const Wrapper = styled.header`
  z-index: 10;
  width: 100%;
  height: 7.2rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0 5.6rem;
  margin: 0 auto;
  top: 0;
  left: 0;
  transition: background 0.2s ease-in-out, height 0.2s ease-in-out;

  ${Media.mediumDown} {
    padding: 0 1.6rem;
    height: 6rem;
  }

  &.sticky {
    background: ${transparentize(0.2, Color.white)};
    backdrop-filter: blur(1rem);
    box-shadow: 0 0.4rem 0.6rem 0 rgba(51, 57, 75, 0.1);
    position: fixed;
    top: 0;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: ${Defaults.pageMaxWidth}rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

const Menu = styled.ol<{ isLight?: boolean; isLightCoWAMM?: boolean }>`
  display: flex;
  list-style: none;
  font-size: 1.5rem;
  font-weight: ${Font.weightMedium};
  color: ${({ isLight, isLightCoWAMM }) =>
    isLightCoWAMM ? Color.cowammWhite : isLight ? Color.darkBlue : Color.lightBlue};
  padding: 0;
  margin: 0;

  .sticky & {
    color: ${({ isLightCoWAMM }) => (isLightCoWAMM ? Color.cowammBlack : Color.darkBlue)};
  }

  ${Media.mediumDown} {
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ isLightCoWAMM }) => (isLightCoWAMM ? Color.cowammBlack : Color.darkBlue)};
    color: ${({ isLightCoWAMM }) => (isLightCoWAMM ? Color.cowammWhite : Color.text2)};
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    gap: 3rem;
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

  // any buttons or links right after menu
  + a {
    background: transparent;
    border: 0.1rem solid ${({ isLight }) => (isLight ? Color.darkBlue : Color.lightBlue)};
    color: ${({ isLight, isLightCoWAMM }) =>
      isLightCoWAMM ? Color.cowammWhite : isLight ? Color.darkBlue : Color.lightBlue};

    .sticky & {
      background: transparent;
      border: 0.1rem solid ${Color.darkBlue};
      color: ${({ isLightCoWAMM }) => (isLightCoWAMM ? Color.cowammBlack : Color.darkBlue)};

      &:hover {
        color: ${({ isLightCoWAMM }) => (isLightCoWAMM ? Color.cowammBlack : Color.darkBlue)};
      }
    }

    ${Media.mediumDown} {
      margin: 0 2.4rem 0 auto;
      min-height: 3.2rem;
      border-radius: 1rem;
    }

    ${Media.mobile} {
      margin: 0 auto;
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
    color: inherit;

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
    font-weight: ${Font.weightLight};

    &:hover {
      color: inherit;
      text-decoration: underline;
    }

    ${Media.mediumDown} {
      color: ${Color.lightBlue};

      &:hover {
        color: ${lighten(0.1, Color.lightBlue)};
      }
    }
  }
`

const CloseIcon = styled.button`
  display: none;
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  color: ${Color.lightBlue};
  background: transparent;
  border: 0;

  &::before {
    content: '✕';
    display: block;
    font-size: 5rem;
    font-family: ${Font.arial};

    ${Media.mobile} {
      font-size: 3.2rem;
      color: ${Color.lightBlue};

      &:hover {
        color: ${lighten(0.1, Color.lightBlue)};
      }
    }
  }

  ${Media.mediumDown} {
    display: flex;
  }
`

const MenuToggle = styled.button<{ isLight?: boolean; isLightCowAMM?: boolean }>`
  display: none;
  background: transparent;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-radius: ${Defaults.borderRadius};
  text-decoration: none;
  border: none;
  height: 4.2rem;
  width: 4.2rem;
  padding: 0;

  &::before {
    display: flex;
    content: '';
    background: url(${MenuImage}) no-repeat center/contain;
    ${({ isLight }) => !isLight && `background: url(${MenuImageLight}) no-repeat center/contain`};
    width: 62%;
    height: 100%;

    .sticky & {
      background: url(${MenuImage}) no-repeat center/contain;
    }
  }

  ${Media.mediumDown} {
    display: flex;
  }
`

const Logo = styled.div<{ isLight?: boolean; isLightCoWAMM?: boolean; menuVisible?: boolean }>`
  width: 12.2rem;
  height: 3.8rem;
  background: ${({ isLight, isLightCoWAMM }) =>
      `url(${isLightCoWAMM ? LogoLightImageThemedCoWAMM : !isLight ? LogoLightImage : LogoImage})`}
    no-repeat center/contain;
  cursor: pointer;
  z-index: 10;

  .sticky & {
    background: ${({ isLightCoWAMM }) => `url(${isLightCoWAMM ? LogoImageThemedCoWAMM : LogoImage})`} no-repeat
      center/contain;
  }

  ${Media.mediumDown} {
    background: url(${LogoIconImage}) no-repeat center/contain;
    ${({ isLight, menuVisible }) =>
      (!isLight || menuVisible) && `background: url(${LogoIconLightImage}) no-repeat center/contain`};

    ${({ isLightCoWAMM, menuVisible }) =>
      (isLightCoWAMM || menuVisible) && `background: url(${LogoIconLightImageThemedCoWAMM}) no-repeat center/contain`};

    width: 3.6rem;
    height: 3.2rem;
    background-size: contain;
    background-position: left;

    .sticky & {
      width: 3.6rem;
      height: 3.2rem;
      background: url(${LogoIconImage}) no-repeat center/contain;

      ${({ isLightCoWAMM, menuVisible }) =>
        (isLightCoWAMM || menuVisible) && `background: url(${LogoIconImageThemedCoWAMM}) no-repeat center/contain`};
    }
  }
`

interface Props {
  isLight?: boolean
  isLightCoWAMM?: boolean
}

export default function Header({ isLight = false, isLightCoWAMM = false }: Props) {
  const swapURL = CONFIG.url.swap
  const isTouch = useMediaQuery(`(max-width: ${Media.mediumEnd})`)
  const [menuVisible, setIsMenuVisible] = useState(false)
  const toggleBodyScroll = () => {
    !menuVisible ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll')
  }
  const handleClick = () => {
    if (isTouch) {
      setIsMenuVisible(!menuVisible)
      toggleBodyScroll()
    }
  }

  return (
    <InView threshold={1} delay={500}>
      {({ inView, ref }) => (
        <>
          <Pixel ref={ref} />
          <Wrapper className={!inView && 'sticky'}>
            <Content>
              <Link passHref href="/">
                <Logo isLight={isLight} isLightCoWAMM={isLightCoWAMM} menuVisible={menuVisible} />
              </Link>

              <Menu className={menuVisible ? 'visible' : ''} isLight={isLight} isLightCoWAMM={isLightCoWAMM}>
                {HEADER_LINKS.map((link, index) => (
                  <li key={index}>
                    <CustomLink {...link} onClick={handleClick} />
                  </li>
                ))}
                <CloseIcon onClick={handleClick} />
              </Menu>

              <LinkWithUtm
                defaultUtm={{
                  ...CONFIG.utm,
                  utmContent: 'header-cta-button',
                }}
                href={swapURL}
                passHref
              >
                <Button
                  onClick={sendGAEventHandler(NavigationEvents.TRADE_ON_COWSWAP)}
                  variant={
                    !inView && isLightCoWAMM
                      ? ButtonVariant.COWAMM_OUTLINE_SMALL
                      : !inView
                      ? ButtonVariant.SMALL
                      : isLightCoWAMM
                      ? ButtonVariant.COWAMM_OUTLINE_LIGHT
                      : ButtonVariant.OUTLINE
                  }
                  borderRadius={isLightCoWAMM && 0}
                  minHeight={4.8}
                  fontSize={1.6}
                  label={'Trade on CoW Swap'}
                  target="_blank"
                  rel="noopener nofollow"
                />
              </LinkWithUtm>
              <MenuToggle isLight={isLight} onClick={handleClick} />
            </Content>
          </Wrapper>
        </>
      )}
    </InView>
  )
}
