import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTokensData } from 'lib/tokens'
import styled from 'styled-components';
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  > h1 {
    display: block;
    margin: 0 0 2.4rem;
  }
`

const TokenList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  flex-flow: column wrap;
  gap: 1.2rem;

  ${Media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

    > li > a {
      color: ${transparentize(0.2, Color.lightBlue)};
      text-decoration: none;
      transition: color 0.2s ease-in-out;
      line-height: 1.2;

      &:hover {
        color: ${Color.lightBlue};
        text-decoration: underline;
      }
    }

    > li > a > i {
      text-transform: uppercase;
      font-style: normal;
      color: ${transparentize(0.5, Color.lightBlue)};
    }
`

export default function Tokens({ tokens }) {
  return (
    <Layout>
      <Wrapper>
      <h1>Tokens ({tokens.length})</h1>
      <TokenList>
        {tokens.map((token) => (
          <li key={token.id}>
            <Link href={`/tokens/${token.id}`}>
              <a>{token.name} <i>({token.symbol})</i></a>
            </Link>
          </li>
        ))}
      </TokenList>
      </Wrapper>
    </Layout>
  )
}

export async function getStaticProps() {
  const tokens = getAllTokensData()

  return {
    props: {
      tokens,
    },
  }
}
