import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`

export const DetailHeading = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  margin: 0 0 1.6rem;

  > div {
    display: flex;
    align-items: center;
  }
`

export const Breadcrumbs = styled.div`
  font-size: 1.4rem;
  margin: 0 0 1.6rem;
  color: ${transparentize(0.2, Color.lightBlue)};

  > a {
    color: ${Color.lightBlue};
  }
`

export const TokenTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    --size: 3.8rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
  }

  > h1 {
    font-size: 2.4rem;
    margin: 0;
  }

  > span {
    padding: 0.6rem 1rem;
    background: ${Color.lightBlue};
    color: ${Color.darkBlue};
    border-radius: 0.4rem;
    font-size: 1.4rem;
  }
`

export const TokenPrice = styled.div`
  font-size: 3.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 0.8rem;

  > span {
    display: flex;
    gap: 0.3rem;
    font-size: 1.6rem;
    color: ${transparentize(0.2, Color.lightBlue)};
  }

  > span > b {
    font-weight: normal;
    color: ${Color.success};
  }
`

export const TokenChart = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin: 0 auto 1.6rem;
  width: 100%;
  border: 0.1rem solid ${transparentize(0.8, Color.lightBlue)};
  min-height: 18rem;
  border-radius: 1.6rem;
`