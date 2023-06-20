import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styled from 'styled-components'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { DetailHeading, Section, Breadcrumbs, TokenTitle, TokenPrice, TokenChart } from '@/const/styles/pages/tokens'

export default function Token({ name, symbol, desc, image }) {

  return (
    <>
      <Head>
        <title>
          Tokens - {name} ({symbol})
        </title>
      </Head>

      <Layout>
        <Section>
          <Breadcrumbs>
            <Link href="/tokens">Tokens</Link> {'>'} {name}
          </Breadcrumbs>

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
          <p>{desc}</p>
        </Section>
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

  const name = token.name;
  const symbol = token.symbol.toUpperCase();
  const desc = token.description?.en || token.ico_data?.description || '-';
  const image = token.image;

  return {
    props: {
      name,
      symbol,
      desc,
      image
    },
  }
}
