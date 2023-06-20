import Head from 'next/head'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import {
  Heading,
  Title,
  Section,
  Symbol,
  StatItem,
  StatTitle,
  StatValue,
  Stats,
  SectionSeparator,
} from '@/const/styles/pages/token'

export default function Token({ data: { token } }) {
  if (!token) {
    return null
  }

  const name = token.name
  const desc = token.description?.en || token.ico_data?.description || '-'
  const links = token.links
  const image = token.image
  const symbol = token.symbol.toUpperCase()
  const marketCap = token.market_data?.market_cap?.usd || '-'
  const volume = token.market_data?.total_volume.usd || '-'
  const ath = token.market_data?.ath.usd || '-'
  const atl = token.market_data?.atl.usd || '-'

  return (
    <>
      <Head>
        <title>
          Tokens - {name} ({symbol})
        </title>
      </Head>

      <Layout>
        <Section>
          <Heading>
            <div>
              <img src={image.thumb} alt="" />
              <Title>{name}</Title>
              <Symbol>{symbol}</Symbol>
            </div>
          </Heading>
        </Section>

        <Section>Graph</Section>

        <Section>
          <Title>{symbol} Stats</Title>

          <Stats>
            <StatItem>
              <StatTitle>Market Cap</StatTitle>
              <StatValue>$ {marketCap}</StatValue>
            </StatItem>

            <StatItem>
              <StatTitle>24H Volume</StatTitle>
              <StatValue>$ {volume}</StatValue>
            </StatItem>

            <StatItem>
              <StatTitle>All-time High</StatTitle>
              <StatValue>$ {ath}</StatValue>
            </StatItem>

            <StatItem>
              <StatTitle>All-time Low</StatTitle>
              <StatValue>$ {atl}</StatValue>
            </StatItem>
          </Stats>
        </Section>

        <SectionSeparator />

        <Section>
          <h4>About {symbol} coin</h4>
          <p>{desc}</p>
        </Section>

        <Section>Explorers</Section>
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

  return {
    props: {
      id: params.id,
      data: { token },
    },
  }
}
