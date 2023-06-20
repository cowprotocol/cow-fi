import React from 'react'
import styled from 'styled-components'
import { Color, Media } from 'const/styles/variables'
import { transparentize } from 'polished'
import Link from 'next/link'

export const StyledBreadcrumbs = styled.div`
  font-size: 1.4rem;
  margin: 0 0 1.6rem;
  color: ${transparentize(0.2, Color.lightBlue)};

  > a {
    color: ${Color.lightBlue};
  }
`

export const Breadcrumbs = ({ crumbs }) => (
  <StyledBreadcrumbs>
    {crumbs.map((crumb, i) => (
      <React.Fragment key={i}>
        <Link href={crumb.href}>{crumb.text}</Link>
        {i < crumbs.length - 1 && ' > '}
      </React.Fragment>
    ))}
  </StyledBreadcrumbs>
)
