import Head from 'next/head'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { CONFIG } from '@/const/meta'
import { Media, Color, Font } from 'styles/variables'
import {
  Section,
  SectionH1,
  SectionContent,
  SubTitle,
  CardWrapper,
  CardItem,
  TrustedBy,
} from '@/components/Home/index.styles'
import Layout from '@/components/Layout'
import SocialList from '@/components/SocialList'
import { LinkWithUtm } from 'modules/utm'
import { Button } from '@/components/Button'
import SVG from 'react-inlinesvg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const IMAGE_PATH = '/images/'
const DAO_LOGOS_PATH = '/images/dao-logos/'

const CONTENT = {
  slides: [
    {
      image: `${IMAGE_PATH}dao-enjoy-surplus.svg`,
      title: 'Enjoy more price surplus than anywhere else',
      description:
        'Every DEX aggregator will tell you they have the best prices, but at the end of the day, CoW Swap does everything they do and then some. With peer-to-peer order matching, gas optimization, and MEV protection, CoW Swap improves your quoted price and forwards the surplus back to you.',
    },
    {
      image: `${IMAGE_PATH}dao-custom-tailor-orders.svg`,
      title: 'Stop scrambling for signatures',
      description:
        "Tired of rushing to sign the multi-sig? Eyes glazed over from staring at candlesticks? CoW Swap automatically adjusts your trade's execution path to fill your order at the best possible price, every time.",
    },
    {
      image: `${IMAGE_PATH}dao-vote-once.svg`,
      title: 'Forget about voting twice ',
      description:
        "Milkman orders from CoW Swap let your DAO approve trades based on dynamic price feeds rather than fixed prices, so you don't have to re-vote if the market moves significantly.",
    },
    {
      image: `${IMAGE_PATH}dao-outsmart-bots.svg`,
      title: 'Outsmart the bots',
      description:
        "CoW Swap offers MEV protection that is one order of magnitude better than any other exchange. Solvers execute trades on your behalf so you're never exposed to on-chain attacks – and even when trade details are announced weeks in advance, CoW Swap stands between you and the MEV bots.",
    },
    {
      image: `${IMAGE_PATH}dao-manage-price-impact.svg`,
      title: 'Manage price impact',
      description:
        "Your trades move markets… but being the biggest isn't always the best. CoW Swap spreads your order across multiple liquidity pools so you make as little of a splash as possible.",
    },
    {
      image: `${IMAGE_PATH}dao-do-more.svg`,
      title: 'Do anything you can imagine',
      description:
        'With CoW Swap you can customize rules for your orders above and beyond traditional settings. Want to trigger a trade only when a wallet has n funds in it? Want to schedule recurring trades? CoW Swap lets you do all that and more in just a few clicks.',
    },
  ],

  orderTypes: [
    {
      icon: `${IMAGE_PATH}icon-milkman.svg`,
      title: 'Milkman Orders',
      description: (
        <>
          Ensure your trades are always close to the real-time market price thanks to the{' '}
          <LinkWithUtm
            href="https://github.com/charlesndalton/milkman"
            defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }}
            passHref
          >
            <a target="_blank" rel="nofollow noreferrer">
              Milkman bot
            </a>
          </LinkWithUtm>
          . Set the maximum deviation you&apos;ll accept, and Milkman will do the rest.
        </>
      ),
    },
    {
      icon: `${IMAGE_PATH}icon-twap-orders.svg`,
      title: 'TWAP Orders',
      description:
        'Time-weighted average price orders allow you to spread your trade out over time, averaging out your trading price, minimizing price impact, and allowing for lower slippage.',
    },
    {
      icon: `${IMAGE_PATH}icon-limit-orders.svg`,
      title: 'Limit Orders',
      description:
        "CoW Swap's surplus-capturing limit orders allow you to set a price and sit back while your order gets filled over time - perfect for token buybacks and other large trades.",
    },
    {
      icon: `${IMAGE_PATH}icon-price-walls.svg`,
      title: 'Price Walls',
      description:
        'Pick an asset, define a threshold price, and CoW Swap will automatically sell above the threshold, and buy below it.',
    },
    {
      icon: `${IMAGE_PATH}icon-basket-sells.svg`,
      title: 'Basket Sells',
      description: (
        <>
          <LinkWithUtm href="https://dump.services/" defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
            <a target="_blank" rel="nofollow noreferrer">
              Dump.services
            </a>
          </LinkWithUtm>
          , a collaboration between CoW Swap and Yearn, allows DAOs and traders to sell multiple tokens in a single
          transaction.
        </>
      ),
    },
    {
      icon: `${IMAGE_PATH}icon-logic.svg`,
      title: 'Place Your Logic Here',
      description:
        'ERC-1271 Smart Orders and CoW Hooks allow you to define your own complex trading logic; if you can think it, you can trade it.',
    },
  ],
  trustedDAOs: [
    {
      icon: `${DAO_LOGOS_PATH}aave.svg`,
      title: 'Aave',
      description: 'Aave DAO used CoW Swap to swap over $4 million directly into Balancer liquidity pool',
      link: 'https://medium.com/@cow-protocol/aave-trade-breakdown-e17a7563d7ba',
      volume: '$4 million',
    },
    {
      icon: `${DAO_LOGOS_PATH}nexus.svg`,
      title: 'Nexus Mutual',
      description:
        'In the largest DAO trade ever, Nexus Mutual relied on CoW Swap to trade 14,400 ETH for the rETH liquid staking token',
      link: 'https://medium.com/@cow-protocol/nexus-mutual-trade-breakdown-4aacc6a94be8',
      volume: '14,400 ETH',
    },
    {
      icon: `${DAO_LOGOS_PATH}ens.svg`,
      title: 'ENS',
      description: 'ENS DAO traded a whopping 10,000 of ETH ($16.5 million dollars) for USDC through CoW Swap',
      link: 'https://medium.com/@cow-protocol/ens-trade-breakdown-a8eb00ddd8c0',
      volume: '10,000 ETH',
    },
    { icon: `${DAO_LOGOS_PATH}karpatkey.svg`, title: 'Karpatkey', link: 'https://www.karpatkey.com/' },
    { icon: `${DAO_LOGOS_PATH}maker.svg`, title: 'MakerDAO', link: 'https://makerdao.com/' },
    { icon: `${DAO_LOGOS_PATH}lido.svg`, title: 'Lido', link: 'https://lido.fi/' },
    { icon: `${DAO_LOGOS_PATH}yearn.svg`, title: 'Yearn', link: 'https://yearn.finance/' },
    { icon: `${DAO_LOGOS_PATH}gnosis.svg`, title: 'Gnosis', link: 'https://www.gnosis.io/' },
    { icon: `${DAO_LOGOS_PATH}synthetix.svg`, title: 'Synthetix', link: 'https://synthetix.io/' },
    { icon: `${DAO_LOGOS_PATH}balancer.svg`, title: 'Balancer', link: 'https://balancer.fi/' },
    { icon: `${DAO_LOGOS_PATH}aura.svg`, title: 'Aura', link: 'https://aura.finance/' },
    { icon: `${DAO_LOGOS_PATH}vitadao.svg`, title: 'VitaDAO', link: 'https://www.vitadao.com/' },
    { icon: `${DAO_LOGOS_PATH}polygon.svg`, title: 'Polygon', link: 'https://polygon.technology/' },
    { icon: `${DAO_LOGOS_PATH}pleasrdao.svg`, title: 'PleasrDAO', link: 'https://pleasr.org/' },
    { icon: `${DAO_LOGOS_PATH}olympus.svg`, title: 'Olympus', link: 'https://www.olympusdao.finance/' },
    { icon: `${DAO_LOGOS_PATH}dxdao.svg`, title: 'DxDAO', link: 'https://dxdao.eth.limo/' },
    { icon: `${DAO_LOGOS_PATH}mstables.svg`, title: 'mStables', link: 'https://mstable.org/' },
    { icon: `${DAO_LOGOS_PATH}index.svg`, title: 'Index', link: 'https://indexcoop.com/' },
    { icon: `${DAO_LOGOS_PATH}rhino.svg`, title: 'Rhino', link: 'https://rhino.fi/' },
    { icon: `${DAO_LOGOS_PATH}jpgd.svg`, title: 'JPGD', link: 'https://jpegd.io/' },
    { icon: `${DAO_LOGOS_PATH}benddao.svg`, title: 'BendDAO', link: 'https://www.benddao.xyz/' },
    { icon: `${DAO_LOGOS_PATH}alchemix.svg`, title: 'Alchemix', link: 'https://alchemix.fi/' },
    { icon: `${DAO_LOGOS_PATH}stargate.svg`, title: 'Stargate', link: 'https://stargate.io/' },
    { icon: `${DAO_LOGOS_PATH}shapeshift.svg`, title: 'ShapeShift', link: 'https://shapeshift.com/' },
    { icon: `${DAO_LOGOS_PATH}stakedao.svg`, title: 'StakeDAO', link: 'https://stakedao.org/' },
    { icon: `${DAO_LOGOS_PATH}cryptex.svg`, title: 'Cryptex', link: 'https://cryptex.finance/' },
    { icon: `${DAO_LOGOS_PATH}frax.svg`, title: 'Frax', link: 'https://frax.finance/' },
    { icon: `${DAO_LOGOS_PATH}dfx.svg`, title: 'DFX', link: 'https://dfx.finance/' },
    { icon: `${DAO_LOGOS_PATH}reflexer.svg`, title: 'Reflexer', link: 'https://www.reflexer.finance/' },
    { icon: `${DAO_LOGOS_PATH}citydao.svg`, title: 'CityDAO', link: 'https://citydao.io/' },
    { icon: `${DAO_LOGOS_PATH}threshold.svg`, title: 'Threshold', link: 'https://threshold.network/' },
    { icon: `${DAO_LOGOS_PATH}krausehouse.svg`, title: 'KrauseHouse', link: 'https://krausehouse.ca/' },
    { icon: `${DAO_LOGOS_PATH}tokenlon.svg`, title: 'Tokenlon', link: 'https://tokenlon.im/' },
    { icon: `${DAO_LOGOS_PATH}idle.svg`, title: 'Idle', link: 'https://idle.finance/' },
    { icon: `${DAO_LOGOS_PATH}teller.svg`, title: 'Teller', link: 'https://teller.finance/' },
    { icon: `${DAO_LOGOS_PATH}sherlock.svg`, title: 'Sherlock', link: 'https://sherlock.xyz/' },
    { icon: `${DAO_LOGOS_PATH}badgerdao.svg`, title: 'BadgerDAO', link: 'https://badger.finance/' },
    { icon: `${DAO_LOGOS_PATH}solace.svg`, title: 'Solace', link: 'https://solace.fi/' },
    { icon: `${DAO_LOGOS_PATH}dreamdao.png`, title: 'DreamDAO', link: 'https://dreamdao.io/' },
    { icon: `${DAO_LOGOS_PATH}ondo.svg`, title: 'Ondo', link: 'https://ondo.finance/' },
    { icon: `${DAO_LOGOS_PATH}abracadabra.png`, title: 'Abracadabra', link: 'https://abracadabra.money/' },
    { icon: `${DAO_LOGOS_PATH}aragon.svg`, title: 'Aragorn', link: 'https://aragon.org/' },
  ],
}

const SwiperSlideWrapper = styled.div`
  --swiper-navigation-color: ${Color.lightBlue};
  --swiper-theme-color: ${Color.lightBlue};
  --swiper-pagination-bullet-inactive-color: ${Color.lightBlue};
  --swiper-pagination-bullet-size: 1.2rem;

  display: flex;
  flex-flow: column wrap;
  width: 100%;
  overflow: hidden;

  .daoSwiper {
    position: relative;
    padding: 0 0 5rem; // Fix for swiper pagination

    ${Media.mobile} {
      overflow-x: visible;
    }

    &::before,
    &::after {
      content: '';
      height: 100%;
      width: 16rem;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(90deg, ${Color.darkBlue}, ${transparentize(1, Color.darkBlue)} 100%);
      z-index: 10;

      ${Media.mobile} {
        display: none;
        content: none;
      }
    }

    &::after {
      background: linear-gradient(270deg, ${Color.darkBlue}, ${transparentize(1, Color.darkBlue)} 100%);
      left: initial;
      right: 0;
    }
  }

  .daoSwiper {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    max-width: 100%;
  }

  .daoSwiper > .swiper-wrapper {
    max-width: 80%;
    align-items: flex-start;
    justify-content: flex-start;

    ${Media.mobile} {
      max-width: 100%;
      align-items: stretch;
    }
  }

  .daoSwiper > .swiper-wrapper > .swiper-slide {
    height: 49rem;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 6rem;
    border: 0.1rem solid ${Color.border};
    color: ${Color.lightBlue};
    font-size: 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    ${Media.mediumDown} {
      height: auto;
      max-width: 95%;
      display: flex;
      flex-flow: column wrap;
    }

    > img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;

      ${Media.mediumDown} {
        height: 12rem;
        width: 100%;
        margin: 0 auto 2.4rem;
      }
    }

    > span {
      display: flex;
      flex-flow: column wrap;
      padding: 5.6rem;
      gap: 2.4rem;

      ${Media.mediumDown} {
        padding: 0 3.2rem 4.6rem;
      }
    }

    > span > h4 {
      margin: 0;
      font-size: 3.4rem;
      line-height: 1.2;
      color: ${Color.lightBlue};
      font-weight: ${Font.weightMedium};
      background: ${Color.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::selection {
        background-clip: initial;
        -webkit-text-fill-color: initial;
      }

      ${Media.mobile} {
        font-size: 2.4rem;
      }
    }

    > span > p {
      font-size: 1.8rem;
      line-height: 1.4;

      ${Media.mobile} {
        font-size: 1.6rem;
      }
    }
  }

  .swiper-button-next {
    z-index: 20;

    ${Media.mobile} {
      left: initial;
      right: 5px;
    }
  }

  .swiper-button-prev {
    z-index: 20;

    ${Media.mobile} {
      left: 5px;
      right: initial;
    }
  }
`

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function ForDAOs({ siteConfigData }) {
  const { social } = siteConfigData

  // Filter out Discord/Forum social links
  let socialFiltered = {}
  Object.entries(social).forEach(([key, value]) => {
    if (key !== 'forum' && key !== 'github') {
      socialFiltered[key] = value
    }
  })

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout fullWidthGradientVariant={true}>
      <Head>
        <title>
          {siteConfigData.title} - {siteConfigData.descriptionShort}
        </title>
      </Head>

      <Section fullWidth>
        <SectionContent flow="column" margin={'8rem auto 0'}>
          <div>
            <SectionH1 fontSize={7}>
              <b>
                <i>Savvy DAOs</i>
              </b>{' '}
              <span className="text-weight-light">
                <br />
                Choose CoW Swap
              </span>
            </SectionH1>
            <SubTitle color={Color.text1} fontSize={3} lineHeight={1.4} maxWidth={60}>
              The smartest DAOs trust CoW Swap with their most-important trades
            </SubTitle>
            <Button href="#benefits" onClick={handleCTAClick} paddingLR={4.2} label="Learn why" />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <TrustedBy>
          <p>Trusted by</p>
          <ul>
            {CONTENT.trustedDAOs.map(
              ({ icon, title, volume }, index) =>
                volume && (
                  <li key={index}>
                    <SVG src={icon} title={title} />
                    <small>with</small>
                    <strong>{volume}</strong>
                  </li>
                )
            )}
          </ul>
        </TrustedBy>
      </Section>

      <Section fullWidth colorVariant={'dark'} id="benefits">
        <SectionContent>
          <SwiperSlideWrapper>
            <h3>Expert trading for expert DAOs</h3>
            <SubTitle color={Color.lightBlue} lineHeight={1.4} maxWidth={80}>
              CoW Swap is the only DEX built to solve the unique challenges faced by DAOs
            </SubTitle>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={50}
              modules={[Autoplay, Pagination, Navigation]}
              className="daoSwiper"
            >
              {CONTENT.slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={slide.image} alt={slide.title} />
                  <span>
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </SwiperSlideWrapper>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Advanced order types</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              CoW Swap&apos;s many order types help you get better prices for your trades, manage token launches,
              facilitate buybacks, and much more
            </SubTitle>

            <CardWrapper maxWidth={100}>
              {CONTENT.orderTypes.map((orderType, index) => (
                <CardItem key={index} imageHeight={8} imageRounded>
                  <img src={orderType.icon} alt="image" />
                  <h4>{orderType.title}</h4>
                  <p>{orderType.description}</p>
                </CardItem>
              ))}
            </CardWrapper>

            <LinkWithUtm
              href={'https://blog.cow.fi/list/advanced-order-types-b391bd4390cb'}
              defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }}
              passHref
            >
              <Button paddingLR={4.2} label="Explore Advanced Order Types" target="_blank" rel="noopener nofollow" />
            </LinkWithUtm>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent>
          <div>
            <h3>Trusted by the best</h3>

            {/* Only DAOs with a description text */}
            <CardWrapper maxWidth={85}>
              {CONTENT.trustedDAOs
                .filter(({ description }) => description)
                .map(({ description, icon, title, link }, index) => (
                  <CardItem key={index} variant="outlined-dark" gap={3.6} imageHeight={8} textCentered>
                    <LinkWithUtm href={link} defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
                      <a target="_blank" rel="nofollow noreferrer">
                        <img src={icon} alt={title} />
                      </a>
                    </LinkWithUtm>
                    <span>
                      <p>{description}</p>
                      <LinkWithUtm href={link} defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
                        <a href={link} target="_blank" rel="nofollow noreferrer">
                          Case study
                        </a>
                      </LinkWithUtm>
                    </span>
                  </CardItem>
                ))}
            </CardWrapper>

            {/* DAOs without a description text (only logo) */}
            <CardWrapper maxWidth={85} horizontalGrid={8} horizontalGridMobile={4}>
              {CONTENT.trustedDAOs
                .filter(({ description }) => !description)
                .map(({ icon, title, link }, index) => (
                  <CardItem
                    key={index}
                    padding={1.2}
                    imageFullSize
                    variant="outlined-dark"
                    gap={3.6}
                    textCentered
                    contentCentered
                    className="iconOnly"
                  >
                    <LinkWithUtm href={link} defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
                      <a href={link} target="_blank" rel="nofollow noreferrer" title={title}>
                        <img src={icon} alt={title} />
                      </a>
                    </LinkWithUtm>
                  </CardItem>
                ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div>
            <h3>Get in touch</h3>
            <SubTitle maxWidth={60} color={Color.text1} lineHeight={1.4}>
              Learn more about how CoW Protocol can help your DAO by reaching out on Twitter or Discord
            </SubTitle>
            <SocialList social={socialFiltered} colorDark />
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = CONFIG

  return {
    props: {
      siteConfigData,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
