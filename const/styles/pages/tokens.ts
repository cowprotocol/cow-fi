import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 36rem;
  grid-gap: 3.2rem;
  width: 100%;
  max-width: 126rem;
  margin: 0 auto;
  position: relative;
  color: ${Color.darkBlue};

  h3 {
    font-size: 2.8rem;
    line-height: 1.2;
    margin: 0 0 1.2rem;
  }

  h4 {
    font-size: 2.2rem;
    line-height: 1.2;
    margin: 0 0 1.2rem;
  }
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
  border: 0.1rem solid ${transparentize(0.8, Color.darkBlue)};
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
  width: 100%;

  > p {
    line-height: 1.5;
    color: ${Color.text1};
  }

  a {
    color: ${Color.darkBlue};
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
    font-size: 2.2rem;
    font-weight: 600;
    margin: 0;
  }

  > span {
    padding: 0.6rem;
    background: ${transparentize(0.92, Color.darkBlue)};
    color: ${Color.text1};
    border-radius: 0.4rem;
    font-size: 1.4rem;
    letter-spacing: 0.05rem;
    font-weight: 600;
  }
`

export const TokenPrice = styled.div`
  font-size: 3.8rem;
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 0.8rem;

  > b {
    font-weight: 600;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2.2rem;
    color: ${transparentize(0.2, Color.darkBlue)};
  }

  > span > b {
    font-weight: normal;
    color: ${Color.success};
  }

  > span > i {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
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
  background: linear-gradient(
    to bottom,
    ${transparentize(0.95, Color.darkBlue)},
    ${transparentize(0.9, Color.darkBlue)}
  );
  min-height: 29rem;
  border-radius: 1.6rem;
`

export const NetworkTable = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  `

export const NetworkHeaderItem = styled.div`
  display: contents;
  display: grid;
  grid-template-columns: 14rem auto auto;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${transparentize(0.9, Color.darkBlue)};
  color: ${Color.text1};
  gap: 0.8rem;

  ${Media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  > div {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1;
  }
`

export const NetworkItem = styled(NetworkHeaderItem)`
  font-size: 1.6rem;
  color: ${Color.darkBlue};

  > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    font-weight: 600;
  }

  > a > img {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    object-fit: contain;
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.6rem;
    font-weight: normal;
    font-size: inherit;
  }

  > span {
    display: flex;
    flex-flow: row wrap;
    gap: 1.2rem;
    margin: 0 0 0 auto;
  }

  > span > a > img,
  > span > img {
    --size: 2.4rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    object-fit: contain;
  }
`

export const TokenLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.2;
  gap: 0.8rem;
  text-decoration: none;
  color: ${transparentize(0.2, Color.darkBlue)};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${Color.darkBlue};
    text-decoration: underline;
  }

  > img {
    width: var(--tokenSize);
    height: var(--tokenSize);
    border-radius: var(--tokenSize);
    background-color: ${Color.darkBlue};
  }

  > span {

  }

  > span > i {
    text-transform: uppercase;
    font-style: normal;
    color: ${transparentize(0.5, Color.darkBlue)};
  }
`

export const SwapCardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
`

export const SwapCard = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0.1rem solid ${transparentize(0.8, Color.darkBlue)};
  transition: border 0.2s ease-in-out;
  border-radius: 1.2rem;
  padding: 0;
  font-size: 1.4rem;

  &:hover {
    border: 0.1rem solid ${Color.darkBlue};

    > a > img:last-child {
      opacity: 1;
    }
  }

  > a {
    width: 100%;
    text-decoration: none;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    padding: 1.2rem;
  }

  > a > img:first-child {
    --size: 2.8rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
  }

  > a > img:last-child {
    --size: 1.8rem;
    width: var(--size);
    height: var(--size);
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
  }

  > a > b {
    line-height: 1.2;
    font-weight: 600;
  }

`

export const CopyIcon = styled.img`
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  --size: 1.7rem;
  width: var(--size);
  height: var(--size);

  &:hover {
    opacity: 1;
  }
`

export const CopyMessage = styled.span`
  color: ${Color.success};
  font-size: 1.3rem;
  margin: 0 0 0 0.2rem;
`