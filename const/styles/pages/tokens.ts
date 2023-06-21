import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 36rem;
  grid-gap: 3.2rem;
  width: 100%;
  position: relative;
`

export const MainContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`

export const StickyContent = styled.div`
  position: sticky;
  top: 10rem;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  overflow: visible;
`


export const SwapWidget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${transparentize(0.8, Color.lightBlue)};
  height: 20rem;
  width: 100%;
  border-radius: 1.6rem;
  margin: 0 0 2rem;
  padding: 1rem;

   > b {
    font-size: 1.2rem;
   }
`

export const Section = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  > p {
    line-height: 1.5;
  }

  a {
    color: ${Color.lightBlue};
    transition: color 0.3s ease-in-out;
  }
`

export const DetailHeading = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
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

export const NetworkTable = styled.div`
  display: flex;
  flex-flow: column wrap;
  `

export const NetworkHeaderItem = styled.div`
  display: contents;
  display: grid;
  grid-template-columns: auto 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid ${transparentize(0.9, Color.lightBlue)};
  gap: 1.4rem;

  ${Media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  > div {
    font-weight: bold;
  }
`

export const NetworkItem = styled(NetworkHeaderItem)``

export const TokenLink = styled.a`
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
    width: var(--tokenSize);
    height: var(--tokenSize);
    border-radius: var(--tokenSize);
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