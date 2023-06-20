import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
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

export const Stats = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`

export const StatItem = styled.div`
  padding: 1rem 0;
  margin-right: 30px;
`

export const StatTitle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`

export const StatValue = styled.h5`
  font-size: 1.4rem;
  margin: 0;
`

export const SectionSeparator = styled.div`
  height: 1px;
  width: 100%;
  background: white;
  opacity: 0.3;
`
