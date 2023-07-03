import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { getTokensIds as getTokensIds, getTokenDetails as getTokenDetails } from 'lib/tokens'
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
  StatValue
} from '@/const/styles/pages/tokens'
import { SwapWidget } from '@/components/SwapWidget'
import { SwapLinkCard } from '@/components/SwapLinkCard'
import { NetworkHeaderItem } from '@/components/NetworkItem/styles'
import { NetworkItem } from '@/components/NetworkItem'

import { ChartSection } from '@/components/ChartSection'
import { formatUSDPrice } from 'util/formatUSDPrice'
import { TokenDetails } from 'types'

export default function TokenDetail({
  name,
  symbol,
  image,
  marketCap,
  allTimeHigh,
  allTimeLow,
  volume,
  description,
  platforms,
}: TokenDetails) {
  const contractAddressEthereum = platforms?.ethereum?.contractAddress
  const contractAddressGnosis = platforms?.xdai?.contractAddress

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
                  <StatValue>{formatUSDPrice(allTimeHigh)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>All-time Low</StatTitle>
                  <StatValue>{formatUSDPrice(allTimeLow)}</StatValue>
                </StatItem>
              </Stats>
            </Section>

            <Section>
              <h1>About {symbol} token</h1>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>

              <br />
              <br />

              <SwapCardsWrapper>
                {contractAddressEthereum && (
                  <SwapLinkCard
                    contractAddress={contractAddressEthereum}
                    networkId={1}
                    networkName="Ethereum"
                    tokenSymbol={symbol}
                  />
                )}

                {contractAddressGnosis && (
                  <SwapLinkCard
                    contractAddress={contractAddressGnosis}
                    networkId={100}
                    networkName="Gnosis Chain"
                    tokenSymbol={symbol}
                  />
                )}
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
  const tokenIds = getTokensIds()

  return {
    fallback: false,
    paths: tokenIds.map((id) => ({ params: { id } })),
  }
}

export async function getStaticProps({ params }) {
  const token = await getTokenDetails(params.id)

  if (!token) {
    return {
      notFound: true,
    }
  }

  return {
    props: token,
  }
}
