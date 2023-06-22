import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { formatUSD } from 'util/tokens'
import {
  Wrapper,
  MainContent,
  StickyContent,
  SwapWidget,
  SwapCardsWrapper,
  SwapCard,
  DetailHeading,
  Section,
  TokenTitle,
  TokenPrice,
  TokenChart,
  NetworkTable,
  NetworkHeaderItem,
  NetworkItem,
  CopyIcon,
  CopyMessage,
  Stats,
  StatItem,
  StatTitle,
  StatValue,
} from '@/const/styles/pages/tokens'
import { ParentSize } from '@visx/responsive'
import prices from '../../data/tokenPrice.json'
import { Chart } from '@/components/Chart'

type PlatformData = {
  contractAddress: string
  decimalPlace: number
}

type Platforms = {
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
}

type SwapLinkCardProps = {
  contractAddress: string
  networkId: number
  networkName: string
  tokenSymbol: string
}

const SwapLinkCard = ({ contractAddress, networkId, networkName, tokenSymbol }: SwapLinkCardProps) => {
  return (
    contractAddress && (
      <SwapCard>
        <a
          href={`https://swap.cow.fi/#/${networkId}/swap/${
            networkId === 100 ? 'WXDAI' : 'WETH'
          }/${contractAddress}?sellAmount=1`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            src={`/images/${(networkName === 'Gnosis Chain' ? 'gnosis-chain' : networkName).toLowerCase()}.svg`}
            alt={networkName}
          />
          <b>
            Swap {tokenSymbol} token <br /> on {networkName}
          </b>
          <img src="/images/external-arrow.svg" alt="Go to CoW Swap" />
        </a>
      </SwapCard>
    )
  )
}

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  useEffect(() => {
    let timer = null

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <>
      <CopyIcon src="/images/icons/click-to-copy.svg" alt="Copy contract address" onClick={copyToClipboard} />
      {copied && <CopyMessage>Copied!</CopyMessage>}
    </>
  )
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
  prices,
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
            <Section>
              <Breadcrumbs crumbs={[{ text: 'Tokens', href: '/tokens' }, { text: `${name} Price` }]} />

              <DetailHeading>
                <TokenTitle>
                  <img src={image.large} alt={`${name} (${symbol})`} />
                  <h1>{name}</h1>
                  <span>{symbol}</span>
                </TokenTitle>

                <TokenPrice>
                  <b>$0.9993</b>
                  <span>
                    <b>+8.31%</b> <i>(24H)</i>
                  </span>
                </TokenPrice>
              </DetailHeading>
            </Section>

            <TokenChart>
              <ParentSize>{({ width }) => <Chart prices={prices} width={width} height={248} />}</ParentSize>
            </TokenChart>

            <Section>
              <TokenTitle>{symbol} Stats</TokenTitle>

              <Stats>
                <StatItem>
                  <StatTitle>Market Cap</StatTitle>
                  <StatValue>{formatUSD(marketCap)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>24H Volume</StatTitle>
                  <StatValue>{formatUSD(volume)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>All-time High</StatTitle>
                  <StatValue>{formatUSD(ath)}</StatValue>
                </StatItem>

                <StatItem>
                  <StatTitle>All-time Low</StatTitle>
                  <StatValue>{formatUSD(atl)}</StatValue>
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
                      <NetworkItem key={platformData.contractAddress}>
                        <a
                          href={
                            network === 'xdai'
                              ? `https://gnosisscan.io/address/${platformData.contractAddress}`
                              : `https://etherscan.io/address/${platformData.contractAddress}`
                          }
                          title={`${name} (${symbol}) on ${network === 'xdai' ? 'Gnosis Chain' : 'Ethereum'}`}
                          target="_blank"
                          rel="noreferrer nofollow"
                        >
                          <img
                            src={`/images/${network === 'xdai' ? 'gnosis-chain' : network}.svg`}
                            alt={network === 'xdai' ? 'Gnosis Chain' : 'Ethereum'}
                          />
                          {network === 'xdai' ? 'Gnosis Chain' : network.charAt(0).toUpperCase() + network.slice(1)}
                        </a>
                        <React.Fragment key={network}>
                          <a
                            href={
                              network === 'xdai'
                                ? `https://gnosisscan.io/address/${platformData.contractAddress}`
                                : `https://etherscan.io/address/${platformData.contractAddress}`
                            }
                            title={`${name} (${symbol}) on ${network === 'xdai' ? 'Gnosis Chain' : 'Ethereum'}`}
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            <div>
                              <i>{platformData.contractAddress}</i>
                              <img src="/images/external-arrow.svg" alt="Go to explorer" />
                            </div>
                          </a>
                          <span>
                            <CopyToClipboard text={platformData.contractAddress} />
                            <a
                              href={`https://link.trustwallet.com/add_asset?asset=c20000714&t=${platformData.contractAddress}&n=${name}&s=${symbol}&d=${platformData.decimalPlace}`}
                              target="_blank"
                              rel="noreferrer nofollow"
                            >
                              <img src="/images/trust_platform.svg" alt="Add to Trust Wallet" />
                            </a>

                            <a
                              href={`https://metamask.app.link/addToken?contractAddress=${platformData.contractAddress}&symbol=${symbol}&decimals=${platformData.decimalPlace}&name=${name}`}
                              target="_blank"
                              rel="noreferrer nofollow"
                            >
                              <img src="/images/metamask-fox.svg" alt="Add to Metamask" />
                            </a>
                          </span>
                        </React.Fragment>
                      </NetworkItem>
                    )
                )}
              </NetworkTable>
            </Section>
          </MainContent>

          <StickyContent>
            <SwapWidget>
              <b>-Swap {symbol} widget -</b>
            </SwapWidget>
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
  const token = getTokenData(params.id)

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
      prices,
    },
  }
}
