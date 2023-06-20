import Head from 'next/head'
import Layout from '@/components/Layout'
import { getAllTokensIds, getTokenData } from 'lib/tokens'
import { Heading, Title, Section, Symbol } from '@/const/styles/pages/token'

export default function Token({ data: { token } }) {
  if (!token) {
    return null
  }

  const name = token.name
  const desc = token.description.en || token.ico_data.description
  const links = token.links
  const image = token.image
  const symbol = token.symbol.toUpperCase()

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

  return {
    props: {
      id: params.id,
      data: { token },
    },
  }
}
