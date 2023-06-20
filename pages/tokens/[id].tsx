import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styled from 'styled-components'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Wrapper, MainContent, StickyContent, SwapWidget, DetailHeading, Section, TokenTitle, TokenPrice, TokenChart } from '@/const/styles/pages/tokens'

export default function Token({ id, name, symbol, desc, image, contractAddressEthereum, contractAddressGnosis }) {

  return (
    <>
      <Head>
        <title>
          Tokens - {name} ({symbol})
        </title>
      </Head>

      <Layout tokenDetail={true}>
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

  const {id: rawId, name: rawName, symbol: rawSymbol, description, ico_data, image, detail_platforms} = token;

  const id = rawId;
  const name = rawName;
  const symbol = rawSymbol.toUpperCase();
  const desc = description?.en || ico_data?.description || '-';

  const contractAddressEthereum = detail_platforms.ethereum?.contract_address || '';
  const contractAddressGnosis = detail_platforms.gnosis?.contract_address || '';

  return {
    props: {
      id,
      name,
      symbol,
      desc,
      image,
      contractAddressEthereum,
      contractAddressGnosis
    },
  }
}


