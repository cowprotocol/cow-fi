import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { getTokensIds as getTokensIds, getTokenDetails as getTokenDetails } from 'services/tokens'
import { TokenDetails as TokenDetailsPure, TokenDetailProps } from '@/components/TokenDetails'
import { GetStaticProps } from 'next'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export default function TokenDetailsPage({ token }: TokenDetailProps) {
  const { name, symbol, platforms } = token

  return (
    <>
      <Head>
        <title>
          {name} ({symbol}) price | CoW Protocol
        </title>
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

  return {
    props: {
      token: token,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
