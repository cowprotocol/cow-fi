import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTokensData } from 'lib/tokens'
import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 2.4rem;
  }

  h1 > span {
    font-size: 1.3rem;
  }
`

const TokenTable = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const HeaderItem = styled.div`
  display: contents;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid ${transparentize(0.9, Color.lightBlue)};
  
  ${Media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  > div {
    font-weight: bold;
  }
`

const ListItem = styled(HeaderItem)`
`

const TokenLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.2;
  gap: 0.8rem;
  text-decoration: none;
  color: ${transparentize(0.2, Color.lightBlue)};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${Color.lightBlue};
    text-decoration: underline;
  }

  > img {
    --size: 24px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-color: ${Color.lightBlue};
  }

  > span {

  }

  > span > i {
    text-transform: uppercase;
    font-style: normal;
    color: ${transparentize(0.5, Color.lightBlue)};
  }
`

export default function Tokens({ tokens }) {
  return (
    <Layout>
      <Wrapper>
        <h1>Tokens <span>({tokens.length})</span></h1>
        <TokenTable>
          <HeaderItem>
            <div>Name</div>
            <div>Price</div>
            <div>Change</div>
            <div>Market Cap</div>
            <div>Volume</div>
          </HeaderItem>
          {tokens.map((token) => (
            <ListItem key={token.id}>
              <Link href={`/tokens/${token.id}`} passHref>
                <TokenLink>
                  <img src={token.image.large} alt={token.name} />
                  <span>{token.name} <i>({token.symbol})</i></span>
                </TokenLink>
              </Link>
              <span>-</span> {/* Replace "-" with {token.price} */}
              <span>-</span> {/* Replace "-" with {token.change} */}
              <span>-</span> {/* Replace "-" with {token.marketCap} */}
              <span>-</span> {/* Replace "-" with {token.volume} */}
            </ListItem>
          ))}
        </TokenTable>
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
