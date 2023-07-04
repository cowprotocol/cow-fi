import Layout from '@/components/Layout'
import { getTokensInfo } from 'services/tokens'
import { TokenInfo } from 'types'
import { GetStaticProps } from 'next'
import { TokenList, TokenListProps } from '@/components/TokensList'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export default function TokenListPage({ tokens }: { tokens: TokenInfo[] }) {
  return (
    <Layout tokensPages={true}>
      <TokenList tokens={tokens} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TokenListProps> = async () => {
  const tokens = await getTokensInfo()

  return {
    props: {
      tokens,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
