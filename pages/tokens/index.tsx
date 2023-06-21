import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTokensData } from 'lib/tokens'
import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'
import { TokenLink } from '@/const/styles/pages/tokens'

const Wrapper = styled.div`
  --tokenSize: 2.6rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  color: ${Color.darkBlue};

  h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1.6rem;
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
  grid-template-columns: 0.1fr 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid ${transparentize(0.9, Color.darkBlue)};
  gap: 1.4rem;
  
  ${Media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  > div {
    font-weight: bold;
  }
`

const ListItem = styled(HeaderItem)`
`

const PlacerholderImage = styled.div`
 
  width: var(--tokenSize);
  height: var(--tokenSize);
  border-radius: var(--tokenSize);
  background-color: ${Color.darkBlue};
`

const SearchTokens = styled.input`
  width: 100%;
  border: 1px solid ${transparentize(0.9, Color.darkBlue)};
  border-radius: 1.6rem;
  background-color: ${transparentize(0.95, Color.darkBlue)};
  padding: 1rem 1rem;
  margin: 0 auto 1.6rem;
  color: ${transparentize(0.1, Color.darkBlue)};
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  outline: 0;
`

export default function Tokens({ tokens }) {
  const [search, setSearch] = useState('');
  const [filteredTokens, setFilteredTokens] = useState(tokens);

  useEffect(() => {
    setFilteredTokens(tokens.filter(token => 
      token.name.toLowerCase().includes(search.toLowerCase()) ||
      token.symbol.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search, tokens]);

  return (
    <Layout tokensPages={true}>
      <Wrapper>
        <h1>Tokens <span>({filteredTokens.length})</span></h1>
        <SearchTokens
          type="text"
          placeholder="Search tokens..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TokenTable>
          <HeaderItem>
            <div>#</div>
            <div>Name</div>
            <div>Price</div>
            <div>Change</div>
            <div>Market Cap</div>
            <div>Volume</div>
          </HeaderItem>
          {filteredTokens.map((token, index) => (
            <ListItem key={token.id}>
              <span>{index + 1}</span>
              <Link href={`/tokens/${token.id}`} passHref>
                <TokenLink>
                  {(token.image.large && token.image.large !== 'missing_large.png') ? 
                    <img src={token.image.large} alt={token.name} /> : 
                    <PlacerholderImage />}
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
  let tokens = getAllTokensData()

  tokens = tokens.sort((a, b) => {
    if (a.market_cap_rank === null) {
      return 1; // always place nulls last
    }
    if (b.market_cap_rank === null) {
      return -1; // always place nulls last
    }
    return a.market_cap_rank - b.market_cap_rank; // usual comparison
  });

  return {
    props: {
      tokens,
    },
  }
}

