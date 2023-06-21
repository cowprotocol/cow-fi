import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Wrapper, MainContent, StickyContent, SwapWidget, DetailHeading, Section, TokenTitle, TokenPrice, TokenChart, NetworkTable, NetworkHeaderItem, NetworkItem, TokenLink } from '@/const/styles/pages/tokens'

export default function TokenDetail({ id, name, symbol, desc, image, contractAddressEthereum, contractAddressGnosis, platforms }) {

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

                {contractAddressEthereum && (
                  <a
                    href={`https://swap.cow.fi/#/1/swap/WETH/${contractAddressEthereum}?sellAmount=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swap on CoW Swap (Ethereum) ↗
                  </a>
                )}

                {contractAddressGnosis && (
                  <a
                    href={`https://swap.cow.fi/#/100/swap/WETH/${contractAddressGnosis}?sellAmount=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swap on CoW Swap (Gnosis Chain)) ↗
                  </a>
                )}
              </p>

            </Section>

            <Section>
              <h4>Explorers</h4>

              <NetworkTable>
                <NetworkHeaderItem>
                  <div>Network</div>
                  <div>Contract Address</div>
                  <div>Actions</div>
                </NetworkHeaderItem>

                {Object.entries(platforms).map(([network, contractAddress]) => (
                  <NetworkItem key={id}>
 <a 
      href={network === 'xdai'
        ? `https://gnosisscan.io/address/${contractAddress}`
        : `https://etherscan.io/address/${contractAddress}`}
      title={`${name} (${symbol}) on ${network === 'xdai' ? 'Gnosis Chain' : 'Ethereum'}`}
      target="_blank" 
      rel="noopener noreferrer"
    >
      {network === 'xdai' ? 'Gnosis Chain' : network.charAt(0).toUpperCase() + network.slice(1)}
    </a>


                    <React.Fragment key={network}>
                      <div>

                      </div>

                      <div>{contractAddress}</div>

                      <span>
                        <button onClick={() => navigator.clipboard.writeText(String(contractAddress))}>Copy</button>

                        <a href={`https://link.trustwallet.com/add_asset?asset=c20000714&t=${contractAddress}&n=${name}&s=${symbol}&d=18`} target="_blank" rel="noreferrer">
                          <img src='images/trust_platform.svg' alt="Add to Trust Wallet" />
                        </a>

                        <a href={`https://metamask.app.link/addToken?contractAddress=${contractAddress}&symbol=${symbol}&decimals=18&name=${name}`} target="_blank" rel="noreferrer">
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

  // Get only the Ethereum and Gnosis Chain contract addresses
  const platforms = {
    ethereum: detail_platforms.ethereum?.contract_address || '',
    xdai: detail_platforms.xdai?.contract_address || '',
  };

  return {
    props: {
      id,
      name,
      symbol,
      desc,
      image,
      platforms, // Pass the platforms object to the component
    },
  }
}




