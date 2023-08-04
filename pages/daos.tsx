import Head from 'next/head'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { CONFIG } from '@/const/meta'
import { Media, Color, Font } from 'styles/variables'
import { Section, SectionH1, SectionContent, SubTitle, CardWrapper, CardItem, TrustedBy } from '@/components/Home/index.styles'
import Layout from '@/components/Layout'
import SocialList from '@/components/SocialList'
import { LinkWithUtm } from 'modules/utm'
import Button from '@/components/Button'
import SVG from 'react-inlinesvg'

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const IMAGE_PATH = '/images/'
const DAO_LOGOS_PATH = '/images/dao-logos/'

const CONTENT = {
  slides: [
    { image: `${IMAGE_PATH}dao-surplus.svg`, title: 'Enjoy more price surplus than anywhere else', description: "Every DEX aggregator will tell you they have the best prices, but when it's down to the wire, CoW Swap does everything they do and then some. Whether it's peer-to-peer order matching, gas optimizations, or MEV protection — we'll improve your quoted price and forward the surplus back to you." },
    { image: `${IMAGE_PATH}dao-timing.svg`, title: 'Forget about timing trades', description: "Tired of scrambling to sign the multi-sig? Eyes glazed over from staring at candlesticks? CoW Swap automatically adjusts your trade's execution path and your slippage tolerance to fill your order at the best possible price, every time." },
    { image: `${IMAGE_PATH}dao-outsmart-bots.svg`, title: 'Outsmart bots', description: "Every DEX aggregator will tell you they have the best prices, but when it's down to the wire, CoW Swap does everything they do and then some. Whether it's peer-to-peer order matching, gas optimizations, or MEV protection — we'll improve your quoted price and forward the surplus back to you." },
    { image: `${IMAGE_PATH}dao-custom-tailor.svg`, title: 'Custom-tailor every order', description: "CoW Swap's conditional order framework allows you to set rules for your order execution that go beyond traditional order settings. Want to trigger a trade only when your wallet has a certain amount of funds in it? Want to schedule recurring trades? On CoW Swap you can do all that and more in just a few clicks." },
    { image: `${IMAGE_PATH}dao-do-more.svg`, title: 'Do more...', description: "The benefits don't end there: initiate trades from one wallet and route the funds to another wallet post-trade, batch multiple trades together to cut down on governance votes, and much more. All on CoW Swap." },
    { image: `${IMAGE_PATH}dao-manage-price-impact.svg`, title: 'Manage price impact', description: "The benefits don't end there: initiate trades from one wallet and route the funds to another wallet post-trade, batch multiple trades together to cut down on governance votes, and much more. All on CoW Swap." },
  ],
  orderTypes: [
    { icon: `${IMAGE_PATH}icon-milkman.svg`, title: 'Milkman Orders', description: "Ensure your trades are always close to the real-time market price thanks to our Milkman bot. Set the maximum deviation you'll accept, and Milkman will do the rest" },
    { icon: `${IMAGE_PATH}icon-twap-orders.svg`, title: 'TWAP Orders', description: "Time-weighted average price orders allow you to spread your trade out over time, averaging out your trading price, minimizing price impact, and allowing for lower slippage" },
    { icon: `${IMAGE_PATH}icon-limit-orders.svg`, title: 'Limit Orders', description: "CoW Swap's surplus-capturing limit orders allow you to set a price and just sit back while your order gets filled over time" },
    { icon: `${IMAGE_PATH}icon-buybacks.svg`, title: 'Token Buybacks', description: "Buy back tokens from retail traders and large investors alike by opening a partially fillable limit order for your token" },
    { icon: `${IMAGE_PATH}icon-price-walls.svg`, title: 'Price Walls', description: "Pick an asset, define a threshold price, and CoW Swap will automatically sell above the threshold, and buy below — making for a perfect continuous trade" },
    { icon: `${IMAGE_PATH}icon-basket-sells.svg`, title: 'Basket Sells', description: "CoW Swap and Yearn.fi recently launched Dump.services to help DAOs and traders sell multiple tokens in a single transaction" },
  ],
  trustedDAOs: [
    { icon: `${DAO_LOGOS_PATH}aave.svg`, title: 'Aave', description: "Aave DAO used CoW Swap to swap over $2 million directly into Balancer 80/20 liquidity pool", link: '#', volume: '$2 million' },
    { icon: `${DAO_LOGOS_PATH}nexus.svg`, title: 'Nexus Mutual', description: "In the largest DAO trade ever, Nexus Mutual relied on CoW Swap to trade 14,400 ETH for the rETH liquid staking token", link: '#', volume: '$27.3 million' },
    { icon: `${DAO_LOGOS_PATH}ens.svg`, title: 'ENS', description: "ENS DAO traded a whopping $16.5 million dollars of ETH for USDC through CoW Swap", link: '#', volume: '$16.5 million' },
    { icon: `${DAO_LOGOS_PATH}dfx.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}reflexer.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}citydao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}polygon.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}vitadao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}pleasrdao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}olympus.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}threshold.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}krausehouse.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}tokenlon.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}dxdao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}lido.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}idle.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}teller.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}maker.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}index.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}balancer.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}rhino.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}jpgd.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}benddao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}mstables.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}gnosis.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}synthetix.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}alchemix.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}stargate.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}shapeshift.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}stakedao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}cryptex.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}aura.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}frax.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}yearn.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}sherlock.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}badgerdao.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}solace.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}dreamdao.png`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}ondo.svg`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}abracadabra.png`, link: '#' },
    { icon: `${DAO_LOGOS_PATH}aragorn.svg`, link: '#' },
  ]
}

const SwiperSlideWrapper = styled.div`
  --swiper-navigation-color: ${Color.lightBlue};
  --swiper-theme-color: ${Color.lightBlue};
  --swiper-pagination-bullet-inactive-color: ${Color.lightBlue};
  --swiper-pagination-bullet-size: 1.2rem;

  display: flex;
  flex-flow: column wrap;
  width: 100%;

  .daoSwiper {
    position: relative;
    overflow-y: visible; // Fix for swiper pagination
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
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::selection {
        -webkit-background-clip: initial;
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
      left: 100%;
    }
  }

  .swiper-button-prev {
    z-index: 20;

    ${Media.mobile} {
      left: auto;
      right: 100%;
    }
  }
`

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function ForDAOs({ siteConfigData }) {
  const { social } = siteConfigData
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
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
            <SectionH1 fontSize={7}><b><i>Superpower</i></b> <span className="text-weight-light">your DAO</span></SectionH1>
            <SubTitle color={Color.text1} fontSize={3} lineHeight={1.4} maxWidth={60}>CoW Swap is the only DEX built to solve the unique challenges faced by DAOs</SubTitle>
            <Button href="#benefits" onClick={handleCTAClick} paddingLR={4.2} label="Learn how" />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <TrustedBy>
          <p>Trusted by</p>
          <ul>
            {CONTENT.trustedDAOs.map(({ icon, title, volume }, index) => (
              volume &&
              <li key={index}>
                <SVG src={icon} title={title} />
                <small>with</small>
                <strong>{volume}</strong>
              </li>
            ))}
          </ul>
        </TrustedBy>
      </Section>

      <Section fullWidth colorVariant={'dark'} id="benefits">
        <SectionContent>
          <SwiperSlideWrapper>
            <h3>On CoW Swap, your DAO can</h3>
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
              navigation={true}
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
          </SwiperSlideWrapper>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Advanced order types</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>CoW Swap&apos;s order types help you get better prices for your trades, manage token launches, facilitate buybacks, and much more</SubTitle>

            <CardWrapper maxWidth={100}>
              {CONTENT.orderTypes.map((orderType, index) => (
                <CardItem key={index} imageHeight={8} imageRounded>
                  <img src={orderType.icon} alt="image" />
                  <h4>{orderType.title}</h4>
                  <p>{orderType.description}</p>
                </CardItem>
              ))}
            </CardWrapper>

            <LinkWithUtm href={'#'} defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
              <Button paddingLR={4.2} target="_blank" rel="noopener nofollow" label="Explore Advanced Order Types" />
            </LinkWithUtm>

          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent>
          <div>
            <h3>Trusted by the experts</h3>
            <SubTitle lineHeight={1.4}>The smartest DAOs use CoW Swap to execute their trades</SubTitle>

            {/* Only DAOs with a description text */}
            <CardWrapper maxWidth={85}>
              {CONTENT.trustedDAOs
                .filter(({ description }) => description)
                .map(({ description, icon, title, link }, index) => (
                  <CardItem key={index} variant="outlined-dark" gap={3.6} imageHeight={8} textCentered>
                    <a href={link} target="_blank" rel="noreferrer"><img src={icon} alt={title} /></a>
                    <span>
                      <p>{description}</p>
                      <a href={link} target="_blank" rel="noreferrer">Case study</a>
                    </span>
                  </CardItem>
                ))}
            </CardWrapper>

            {/* DAOs without a description text (only logo) */}
            <CardWrapper maxWidth={85} horizontalGrid={8} horizontalGridMobile={3}>
              {CONTENT.trustedDAOs
                .filter(({ description }) => !description)
                .map(({ icon, title, link }, index) => (
                  <CardItem key={index} padding={1.2} imageFullSize variant="outlined-dark" gap={3.6} textCentered contentCentered className='iconOnly'>
                    <a href={link} target="_blank" rel="noreferrer"><img src={icon} alt={title} /></a>
                  </CardItem>
                ))}
            </CardWrapper>

          </div>
        </SectionContent>
      </Section>

      <Section flow={'column'}>
        <SectionContent>
          <div>
            <h3>Get in touch</h3>
            <SubTitle maxWidth={60} color={Color.text1} lineHeight={1.4}>
              Learn more about CoW Protocol, get support, and have your say in shaping the future of decentralized finance
            </SubTitle>
            <SocialList social={social} colorDark />
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
