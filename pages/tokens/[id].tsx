import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { getTokensIds as getTokensIds, getTokenDetails as getTokenDetails } from 'services/tokens'
import { TokenDetails as TokenDetailsPure, TokenDetailProps } from '@/components/TokenDetails'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import { is } from 'make-plural'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export type TokenDetailPageProps = TokenDetailProps & {
  currentUrl: string;
}

export default function TokenDetailsPage({ token, currentUrl }: TokenDetailPageProps) {
  const { name, symbol, metaDescription, change24h, priceUsd } = token
  const change24 = parseFloat(change24h)
  const change24hFormatted = change24.toFixed(2)
  const isIncrease = parseFloat(change24h) >= 0;
  const changePlusMinus = isIncrease ? '+' : '-';
  const priceChangeEmoji = isIncrease ? '🟢' : '🔴';
  const changeDirection = isIncrease ? '▲' : '▼';
  const metaTitle = `${priceChangeEmoji} ${name} (${symbol}) $${priceUsd} (${changePlusMinus}${change24hFormatted}% ${changeDirection}) - ${CONFIG.metatitle_tokenDetail}`

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} /> 
        <meta name="twitter:title" content={CONFIG.title} />
      </Head>

      <Layout tokensPages={true}>
        <TokenDetailsPure token={token} />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const tokenIds = await getTokensIds()

  return {
    fallback: false,
    paths: tokenIds.map((id) => ({ params: { id } })),
  }
}

export const getStaticProps: GetStaticProps<TokenDetailProps> = async ({ params }) => {
  const token = await getTokenDetails(params.id as string)

  if (!token) {
    return {
      notFound: true,
    }
  }

  const currentUrl = `${CONFIG.url.root}/tokens/${token.id}`;

  return {
    props: {
      token: token,
      currentUrl: currentUrl,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
