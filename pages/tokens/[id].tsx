import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import {
  Wrapper,
  MainContent,
  StickyContent,
  SwapWidgetWrapper,
  SwapCardsWrapper,
  DetailHeading,
  Section,
  TokenTitle,
  TokenChart,
  NetworkTable,
  Stats,
  StatItem,
  StatTitle,
  StatValue,
} from '@/const/styles/pages/tokens'
import { SwapWidget } from '@/components/SwapWidget'
import { SwapLinkCard } from '@/components/SwapLinkCard'
import { NetworkHeaderItem } from '@/components/NetworkItem/styles'
import { NetworkItem } from '@/components/NetworkItem'

import { ChartSection } from '@/components/ChartSection'
import { formatUSDPrice } from 'util/formatUSDPrice'

type PlatformData = {
  contractAddress: string
  decimalPlace: number
}

export type Platforms = {
  [key: string]: PlatformData
}

type TokenDetailProps = {
  id: string
  name: string
  symbol: string
  desc: string
  image: {
    large: string
  }
  platforms: Platforms
  ath: string
  atl: string
  marketCap: string
  volume: string
  prices: any
  currentPrice: string
  priceChange24h: string
}

export default function TokenDetail({
  name,
  symbol,
  desc,
  image,
  marketCap,
  volume,
  ath,
  atl,
  platforms,
  priceChange24h,
}: TokenDetailProps) {
  const contractAddressEthereum = platforms.ethereum.contractAddress
  const contractAddressGnosis = platforms.xdai.contractAddress

  return (
    <>
      <Head>
        <title>
          {name} ({symbol}) price | CoW Protocol
        </title>
      </Head>

      <Layout tokensPages={true}>
        <Wrapper>
          <MainContent>
            <Breadcrumbs crumbs={[{ text: 'Tokens', href: '/tokens' }, { text: `${name} Price` }]} />

            <DetailHeading>
              <TokenTitle>
                <img src={image.large} alt={`${name} (${symbol})`} />
                <h1>{name}</h1>
                <span>{symbol}</span>
              </TokenTitle>
            </DetailHeading>

            <TokenChart>
              <ChartSection platforms={platforms} />
            </TokenChart>

            <Section>
              <TokenTitle>{symbol} Stats</TokenTitle>

              <Stats>
                <StatItem>
                  <StatTitle>Market Cap</StatTitle>
                  <StatValue>{formatUSDPrice(marketCap)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>24H Volume</StatTitle>
                  <StatValue>{formatUSDPrice(volume)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>All-time High</StatTitle>
                  <StatValue>{formatUSDPrice(ath)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>All-time Low</StatTitle>
                  <StatValue>{formatUSDPrice(atl)}</StatValue>
                </StatItem>
              </Stats>
            </Section>

            <Section>
              <h4>About {symbol} token</h4>
              <div dangerouslySetInnerHTML={{ __html: desc }}></div>

              <br />
              <br />

              <SwapCardsWrapper>
                <SwapLinkCard
                  contractAddress={contractAddressEthereum}
                  networkId={1}
                  networkName="Ethereum"
                  tokenSymbol={symbol}
                />
                <SwapLinkCard
                  contractAddress={contractAddressGnosis}
                  networkId={100}
                  networkName="Gnosis Chain"
                  tokenSymbol={symbol}
                />
              </SwapCardsWrapper>
            </Section>

            <Section>
              <h4>Explorers</h4>

              <NetworkTable>
                <NetworkHeaderItem>
                  <div>Network</div>
                  <div>Contract Address</div>
                  <div></div>
                </NetworkHeaderItem>

                {Object.entries(platforms).map(
                  ([network, platformData]) =>
                    platformData.contractAddress && (
                      <NetworkItem
                        key={`${network}-${platformData.contractAddress}`}
                        network={network}
                        platformData={{
                          address: platformData.contractAddress,
                          decimals: platformData.decimalPlace,
                          symbol,
                          name,
                        }}
                      />
                    )
                )}
              </NetworkTable>
            </Section>
          </MainContent>

          <StickyContent>
            <SwapWidgetWrapper>
              <SwapWidget tokenSymbol={symbol} tokenImage={image.large} platforms={platforms} />
            </SwapWidgetWrapper>
          </StickyContent>
        </Wrapper>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllTokensIds()

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps({ params }) {
  const token = await getTokenData(params.id)

  if (!token) {
    return {
      notFound: true,
    }
  }

  const { id: rawId, name: rawName, symbol: rawSymbol, description, ico_data, image, detail_platforms } = token

  const id = rawId
  const name = rawName
  const symbol = rawSymbol.toUpperCase()
  const desc = description?.en || ico_data?.description || '-'
  const marketCap = token.market_data?.market_cap?.usd || null
  const volume = token.market_data?.total_volume.usd || null
  const ath = token.market_data?.ath.usd || null
  const atl = token.market_data?.atl.usd || null
  const currentPrice = token.market_data?.current_price?.usd || null
  const priceChange24h = token.market_data?.price_change_percentage_24h?.toFixed(4) || null

  // Get only the Ethereum and Gnosis Chain contract addresses and decimal places
  const platforms = {
    ethereum: {
      contractAddress: detail_platforms.ethereum?.contract_address || '',
      decimalPlace: detail_platforms.ethereum?.decimal_place || 18,
    },
    xdai: {
      contractAddress: detail_platforms.xdai?.contract_address || '',
      decimalPlace: detail_platforms.xdai?.decimal_place || 18,
    },
  }

  return {
    props: {
      id,
      name,
      symbol,
      desc,
      image,
      platforms,
      marketCap,
      volume,
      ath,
      atl,
      currentPrice,
      priceChange24h,
    },
  }
}
