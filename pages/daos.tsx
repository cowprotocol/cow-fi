import Head from 'next/head'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { CONFIG } from '@/const/meta'
import { Media, Color, Font } from 'styles/variables'
import { Section, SectionContent, SubTitle, CardWrapper, CardItem } from '@/components/Home/index.styles'
import Layout from '@/components/Layout'

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CONTENT = {
  slides: [
    { image: '/images/dao-surplus.svg', title: 'Enjoy more price surplus than anywhere else', description: "Every DEX aggregator will tell you they have the best prices, but when it's down to the wire, CoW Swap does everything they do and then some. Whether it's peer-to-peer order matching, gas optimizations, or MEV protection — we'll improve your quoted price and forward the surplus back to you." },
    { image: '/images/dao-timing.svg', title: 'Forget about timing trades', description: "Tired of scrambling to sign the multi-sig? Eyes glazed over from staring at candlesticks? CoW Swap automatically adjusts your trade's execution path and your slippage tolerance to fill your order at the best possible price, every time." },
    { image: '/images/dao-surplus-2.svg', title: 'Enjoy more price surplus than anywhere else', description: "Every DEX aggregator will tell you they have the best prices, but when it's down to the wire, CoW Swap does everything they do and then some. Whether it's peer-to-peer order matching, gas optimizations, or MEV protection — we'll improve your quoted price and forward the surplus back to you." },
    { image: '/images/dao-custom-tailor.svg', title: 'Custom-tailor every order', description: "CoW Swap's conditional order framework allows you to set rules for your order execution that go beyond traditional order settings. Want to trigger a trade only when your wallet has a certain amount of funds in it? Want to schedule recurring trades? On CoW Swap you can do all that and more in just a few clicks." },
    { image: '/images/dao-do-more.svg', title: 'Do more...', description: "The benefits don't end there: initiate trades from one wallet and route the funds to another wallet post-trade, batch multiple trades together to cut down on governance votes, and much more. All on CoW Swap." },
  ],
  orderTypes: [
    { icon: '/images/icon-twap-orders.svg', title: 'Milkman Orders', description: "Ensure your trades are always close to the real-time market price thanks to our Milkman bot. Set the maximum deviation you'll accept, and Milkman will do the rest" },
    { icon: '/images/icon-twap-orders.svg', title: 'TWAP Orders', description: "Time-weighted average price orders allow you to spread your trade out over time, averaging out your trading price, minimizing price impact, and allowing for lower slippage" },
    { icon: '/images/icon-limit-orders.svg', title: 'Limit Orders', description: "CoW Swap's surplus-capturing limit orders allow you to set a price and just sit back while your order gets filled over time" },
    { icon: '/images/icon-buybacks.svg', title: 'Token Buybacks', description: "Buy back tokens from retail traders and large investors alike by opening a partially fillable limit order for your token" },
    { icon: '/images/icon-buybacks.svg', title: 'Price Walls', description: "Pick an asset, define a threshold price, and CoW Swap will automatically sell above the threshold, and buy below — making for a perfect continuous trade" },
    { icon: '/images/icon-basket-sells.svg', title: 'Basket Sells', description: "CoW Swap and Yearn.fi recently launched Dump.services to help DAOs and traders sell multiple tokens in a single transaction" },
  ],
  trustedDAOs: [
    { icon: '/images/logo-aave.svg', link: '#' },
    { icon: '/images/logo-nexus.svg', link: '#' },
    { icon: '/images/logo-ens.svg', link: '#' },
    { icon: '/images/logo-aave.svg', title: 'Aave', description: "Aave DAO used CoW Swap to swap over $2 million directly into Balancer 80/20 liquidity pool", link: '#' },
    { icon: '/images/logo-nexus.svg', title: 'Nexus Mutual', description: "In the largest DAO trade ever, Nexus Mutual relied on CoW Swap to trade 14,400 ETH for the rETH liquid staking token", link: '#' },
    { icon: '/images/logo-ens.svg', title: 'ENS', description: "ENS DAO traded a whopping $16.5 million dollars of ETH for USDC through CoW Swap", link: '#' },
    { icon: '/images/logo-aave.svg', link: '#' },
    { icon: '/images/logo-nexus.svg', link: '#' },
    { icon: '/images/logo-ens.svg', link: '#' },
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

  .daoSwiper > .swiper-wrapper > .swiper-slide {
    height: 49rem;
    max-width: 80%;
    margin: 0 auto;
    border-radius: 6rem;
    border: 0.1rem solid ${Color.border};
    color: ${Color.lightBlue};
    font-size: 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${Media.mobile} {
      height: auto;
      max-width: 95%;
      display: flex;
      flex-flow: column wrap;
    }

    > img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;

      ${Media.mobile} {
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

      ${Media.mobile} {
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

  .swiper-button-prev, .swiper-button-next {
    z-index: 20;

    ${Media.mobile} {
      display: none;
    }
  }
`

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function ForDAOs({ siteConfigData }) {
  return (
    <Layout FullWidthGradientVariant={true}>
      <Head>
        <title>
          {siteConfigData.title} - {siteConfigData.descriptionShort}
        </title>
      </Head>

      <Section fullWidth>
        <SectionContent>
          <div>
            <h1>CoW Swap for DAOs</h1>
            <SubTitle color={Color.text1} lineHeight={1.4}>The only DEX built to solve the unique challenges faced by DAOs</SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
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
                // disableOnInteraction: true,
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
            <SubTitle color={Color.text1} lineHeight={1.4}>CoW Swap&apos;s order types help you get better prices for your trades, <br/> manage token launches, facilitate buybacks, and much more.</SubTitle>

            <CardWrapper>
              {CONTENT.orderTypes.map((orderType, index) => (
                <CardItem key={index} imageHeight={8}>
                  <img src={orderType.icon} alt="image" />
                  <h4>{orderType.title}</h4>
                  <p>{orderType.description}</p>
                </CardItem>
              ))}
            </CardWrapper>

            <a href="#" target="_blank" rel="noopener">Learn more</a>

          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent>
          <div>
            <h3>Trusted by the experts</h3>
            <SubTitle lineHeight={1.4}>The smartest DAOs use CoW Swap to execute their trades</SubTitle>

            <CardWrapper>
              {CONTENT.trustedDAOs.map((DAO, index) => (
                <CardItem key={index} variant="outlined-dark" gap={3.6} textCentered className={!DAO.description ? 'iconOnly' : ''}>
                  <a href={DAO.link} target="_blank" rel="noreferrer"><img src={DAO.icon} alt={DAO.title} /></a>
                  {DAO.description && <span>
                    <p>{DAO.description}</p>
                    <a href={DAO.link} target="_blank" rel="noreferrer">Case study</a>
                  </span>
                  }
                  
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Get in touch</h3>
            
            <a href="#" target="_blank" rel="noopener">Learn more</a> 
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
