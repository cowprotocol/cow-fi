import styled from 'styled-components';
import { transparentize } from 'polished'
import { Color, Font, Media } from 'const/styles/variables'

export const Content = styled.main`
  margin: 0 auto;
  padding: 8rem 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 84rem;
  display: flex;
  flex-flow: column wrap;
  min-height: 80rem;

  ${Media.mobile} {
    height: auto;
    padding: 8rem 3.2rem;
    max-width: 100%;
    min-height: initial;
  }

  p {
    margin: 0 0 1.6rem;
    font-size: ${Font.sizeDefault};
    color: ${Color.grey};
    line-height: 1.4;
  }
`

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 0 6rem;
  position: relative;
  z-index: 1;
 `

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 1.2;
  margin: 0 0 4rem;

  ${Media.mobile} {
    font-size: 4rem;
  }
 `

export const SubTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: ${Font.weightLight};
  opacity: 0.75;

  ${Media.mobile} {
    font-size: 2rem;
  }
`

export const TitleSmall = styled.h3`
  font-size: 2.4rem;
  line-height: 1.2;
  margin: 0 0 2.4rem;
 `

 export const LinkContainer = styled.a`
    display: flex;
    flex-flow: column wrap;
    box-sizing: border-box;
    padding: 2.4rem 6.2rem 2.4rem 2.4rem;
    margin: 0 0 1.6rem;
    border-radius: 1.6rem;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.8rem;
    background: ${transparentize(0.9, Color.white)};
    border: 0.1rem solid ${transparentize(0.9, Color.white)};
    color: ${Color.white};
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out, border 0.2s ease-in-out;
    font-weight: ${Font.weightLight};
    text-decoration: none;
    position: relative;
    max-width: 100%;

      &:last-of-type {
        margin: 0 0 4.2rem;
      }

      &:link, &:visited {
        color: inherit;
      }

      &:hover {
        background: ${transparentize(0.9, Color.orange)};
        border: 0.1rem solid ${Color.orange};
        color: ${Color.orange};

        > svg { transform: translateX(0.6rem) }
        > svg > path { fill: ${Color.orange}} }
      }

      > b {
        line-height: 1.2;
      }

      > i {
        font-size: 1.6rem;
        font-style: normal;
        margin: 0.8rem 0 0;
      }

      > svg {
        display: block;
        position: absolute;
        right: 2.4rem;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 2.4rem;
        height: 2.4rem;
        transform: translateX(0);
        transition: transform 0.2s ease-in-out;
          
        > path { fill: ${transparentize(0.7, Color.white)}; }
      }
 `

 export const LoadingText = styled.p`
  font-size: 1.6rem;
  color: ${Color.white}
 `