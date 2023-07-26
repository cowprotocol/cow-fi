import Head from 'next/head'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { CONFIG } from '@/const/meta'
import { Color } from 'styles/variables'
import { Section, SectionContent, SubTitle, CardWrapper, CardItem } from '@/components/Home/index.styles'
import Layout from '@/components/Layout'

const CONTENT = {
  orderTypes: [
    {icon: '/images/image.svg', title: 'Milkman Orders', description: "Ensure your trades are always close to the real-time market price thanks to our Milkman bot. Set the maximum deviation you'll accept, and Milkman will do the rest"},
    {icon: '/images/image.svg', title: 'TWAP Orders', description: "Time-weighted average price orders allow you to spread your trade out over time, averaging out your trading price, minimizing price impact, and allowing for lower slippage"},
    {icon: '/images/image.svg', title: 'Limit Orders', description: "CoW Swap’s surplus-capturing limit orders allow you to set a price and just sit back while your order gets filled over time"},
    {icon: '/images/image.svg', title: 'Token Buybacks', description: "Buy back tokens from retail traders and large investors alike by opening a partially fillable limit order for your token "},
    {icon: '/images/image.svg', title: 'Price Walls', description: "Pick an asset, define a threshold price, and CoW Swap will automatically sell above the threshold, and buy below — making for a perfect continuous trade"},
    {icon: '/images/image.svg', title: 'Basket Sells', description: "CoW Swap and Yearn.fi recently launched Dump.services to help DAOs and traders sell multiple tokens in a single transaction"},
  ],
  trustedDAOs: [
    {icon: '/images/image.svg', title: 'Yearn', description: "Yearn is a decentralized ecosystem of aggregators that utilize lending services such as Aave, Compound, Dydx, and Fulcrum to optimize your token lending", link: 'https://yearn.finance/'},
    {icon: '/images/image.svg', title: 'Yearn', description: "Yearn is a decentralized ecosystem of aggregators that utilize lending services such as Aave, Compound, Dydx, and Fulcrum to optimize your token lending", link: 'https://yearn.finance/'},
    {icon: '/images/image.svg', title: 'Yearn', description: "Yearn is a decentralized ecosystem of aggregators that utilize lending services such as Aave, Compound, Dydx, and Fulcrum to optimize your token lending", link: 'https://yearn.finance/'},
  ]
}

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function ForDAOs({ siteConfigData }) {
  return (
    <Layout fullWidthGradient={true}>
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

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Advanced order types</h3>
            <SubTitle>CoW Swap&apos;s order types help you get better prices for your trades, manage token launches, facilitate buybacks, and much more.</SubTitle>

            <CardWrapper>
              {CONTENT.orderTypes.map((orderType, index) => (
                <CardItem key={index}> 
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
                <CardItem key={index} variant="outlined-dark"> 
                  <img src={DAO.icon} alt="image" />
                  <h4>{DAO.title}</h4>
                  <p>{DAO.description}</p>
                  <a href={DAO.link} target="_blank" rel="noreferrer">Case study</a>
                </CardItem>
              ))}
            </CardWrapper>
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
