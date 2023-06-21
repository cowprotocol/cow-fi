import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Wrapper, MainContent, StickyContent, SwapWidget, SwapCardsWrapper, SwapCard, DetailHeading, Section, TokenTitle, TokenPrice, TokenChart, NetworkTable, NetworkHeaderItem, NetworkItem, TokenLink } from '@/const/styles/pages/tokens'

type PlatformData = {
  contractAddress: string;
  decimalPlace: number;
};

type Platforms = {
  [key: string]: PlatformData;
};

type TokenDetailProps = {
  id: string;
  name: string;
  symbol: string;
  desc: string;
  image: {
    large: string;
  }
  platforms: Platforms;
};

type SwapLinkCardProps = {
  contractAddress: string;
  networkId: number;
  networkName: string;
  tokenSymbol: string;
};

const SwapLinkCard = ({ contractAddress, networkId, networkName, tokenSymbol }: SwapLinkCardProps) => {
  return (
    contractAddress && (
      <SwapCard>
        <a
          href={`https://swap.cow.fi/#/${networkId}/swap/WETH/${contractAddress}?sellAmount=1`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`/images/${(networkName === 'Gnosis Chain' ? 'gnosis-chain' : networkName).toLowerCase()}.svg`} alt={networkName} />
          <b>Swap {tokenSymbol} token <br /> on {networkName}</b>
          <img src="/images/external-arrow.svg" alt="Go to CoW Swap" />
        </a>
      </SwapCard>
    )
  );
};


export default function TokenDetail({
  id,
  name,
  symbol,
  desc,
  image,
  platforms,
}: TokenDetailProps) {

  const contractAddressEthereum = platforms.ethereum.contractAddress;
  const contractAddressGnosis = platforms.xdai.contractAddress;

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
              <Breadcrumbs crumbs={[{ text: 'Tokens', href: '/tokens' }, { text: name, href: `/tokens/${id}` }]} />

              <DetailHeading>
                <TokenTitle>
                  <img src={image.large} alt={`${name} (${symbol})`} />
                  <h1>{name}</h1>
                  <span>{symbol}</span>
                </TokenTitle>

                <TokenPrice>
                  <b>$0.9993</b>
                  <span><b>+0.53%</b> <i>(24H)</i></span>
                </TokenPrice>
              </DetailHeading>

            </Section>

            <TokenChart>- Chart component -</TokenChart>

            <Section>
              <h3>{symbol} Stats</h3>
            </Section>

            <Section>
              <h4>About {symbol} coin</h4>
              <p>{desc}
                <br /><br />






                <SwapCardsWrapper>
                  <SwapLinkCard contractAddress={contractAddressEthereum} networkId={1} networkName="Ethereum" tokenSymbol={symbol} />
                  <SwapLinkCard contractAddress={contractAddressGnosis} networkId={100} networkName="Gnosis Chain" tokenSymbol={symbol} />
                </SwapCardsWrapper>


              </p>

            </Section>

            <Section>
              <h3>Explorers</h3>

              <NetworkTable>
                <NetworkHeaderItem>
                  <div>Network</div>
                  <div>Contract Address</div>
                  <div>Actions</div>
                </NetworkHeaderItem>

                {Object.entries(platforms).map(([network, platformData]) => (
                  <NetworkItem key={id}>
                    <a
                      href={network === 'xdai'
                        ? `https://gnosisscan.io/address/${platformData.contractAddress}`
                        : `https://etherscan.io/address/${platformData.contractAddress}`}
                      title={`${name} (${symbol}) on ${network === 'xdai' ? 'Gnosis Chain' : 'Ethereum'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {network === 'xdai' ? 'Gnosis Chain' : network.charAt(0).toUpperCase() + network.slice(1)}
                    </a>
                    <React.Fragment key={network}>
                      <div>{platformData.contractAddress}</div>

                      <span>
                        <button onClick={() => navigator.clipboard.writeText(String(platformData.contractAddress))}>Copy</button>

                        <a
                          href={`https://link.trustwallet.com/add_asset?asset=c20000714&t=${platformData.contractAddress}&n=${name}&s=${symbol}&d=${platformData.decimalPlace}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src='images/trust_platform.svg' alt="Add to Trust Wallet" />
                        </a>

                        <a
                          href={`https://metamask.app.link/addToken?contractAddress=${platformData.contractAddress}&symbol=${symbol}&decimals=${platformData.decimalPlace}&name=${name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src='images/metamask-fox.svg' alt="Add to Metamask" />
                        </a>
                      </span>
                    </React.Fragment>
                  </NetworkItem>
                ))}

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
    };
  }

  const { id: rawId, name: rawName, symbol: rawSymbol, description, ico_data, image, detail_platforms } = token;

  const id = rawId;
  const name = rawName;
  const symbol = rawSymbol.toUpperCase();
  const desc = description?.en || ico_data?.description || '-';

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
  };

  return {
    props: {
      id,
      name,
      symbol,
      desc,
      image,
      platforms,
    },
  }
}




