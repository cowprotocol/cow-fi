import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  > div {
    display: flex;
    align-items: center;
  }

  > div > * {
    margin-right: 10px;
  }
`

export const Title = styled.h4`
  font-size: 2.6rem;
  margin: 0;
`

export const Symbol = styled.div`
  padding: 6px 10px;
  background: #777;
  border-radius: 4px;
  font-size: 14px;
`
