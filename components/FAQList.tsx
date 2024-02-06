import React from 'react'
import styled from 'styled-components'
import { Color, Font, Media } from 'styles/variables'

const Wrapper = styled.div<{ maxWidth?: number }>`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  margin: 2.4rem 0;
  width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : '100%')};

  ${Media.mobile} {
    width: 100%;
    gap: 2.4rem;
  }

  a {
    color: ${Color.darkBlue};
    font-weight: ${Font.weightMedium};
    text-decoration: underline;
  }

  details {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    line-height: 1;
    font-size: 2.4rem;
    font-weight: ${Font.weightNormal};
    position: relative;

    ${Media.mobile} {
      font-size: 2rem;
    }
  }

  details > summary {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: ${Font.weightMedium};
    cursor: pointer;
    margin: 0;
    padding: 2.4rem 2.8rem 2.4rem 0;
    list-style-type: none;
    line-height: 1.2;
    border-bottom: 0.2rem solid ${Color.border};
    position: relative;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      display: flex;
      align-items: center;
      text-align: center;
      margin: auto;
      position: absolute;
      font-size: 2.8rem;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  details > div {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
    padding: 0 0 2.4rem;
  }

  details[open] > div {
    border-bottom: 0.2rem solid ${Color.border};
  }

  details[open] > summary {
    border-bottom: 0.2rem solid transparent;
  }

  details[open] > summary::after {
    content: '−';
  }
`

interface FAQListProps {
  children: React.ReactNode
  maxWidth?: number
}

export function FAQList({ children, maxWidth }: FAQListProps) {
  return <Wrapper maxWidth={maxWidth}>{children}</Wrapper>
}
