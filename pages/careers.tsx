import Head from 'next/head'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import Layout from '@/components/Layout'
import { Section, Title, SubTitle, TitleSmall, LinkContainer } from '@/components/Layout/index.styles'
import { DropDown, ExternalLink } from 'styles/global.styles'
import SVG from 'react-inlinesvg'

async function getJobs() {
  const jobsData = {}
  const { api } = CONFIG.greenhouse

  try {
    const response = await fetch(api)
    const data = await response.json()
    data.jobs.forEach((job) => {
      const deptName = job.departments[0].name
      deptName && jobsData[deptName] ? jobsData[deptName].push(job) : (jobsData[deptName] = [job])
    })
  } catch (error) {
    console.log(error)
  }

  return jobsData
}

export default function Jobs({ jobsData, siteConfigData }) {
  const { title } = siteConfigData
  const discordURL = CONFIG.social.discord.url
  const [department, setDepartment] = useState('All')
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value)
  }

  const jobsCount = Object.keys(jobsData).reduce((acc, cur) => acc + jobsData[cur].length, 0)
  const departments = Object.keys(jobsData).map((deptsName: string) => deptsName)
  const jobsCountForDepartment = department === 'All' ? jobsCount : jobsData[department].length

  return (
    <>
      <Head>
        <title>Careers - {title}</title>
      </Head>
      <Layout>
        <Section>
          <Title>Want to build the future of decentralized trading?</Title>
          <SubTitle>
            We are an ambitious, fast growing and international team working at the forefront of DeFi. We believe that
            we can make markets both more efficient and fair, by building the ultimate batch auction settlement layer
            across EVM compatible blockchains.
          </SubTitle>
        </Section>

        {jobsCount > 0 && (
          <TitleSmall>
            We&apos;re currently hiring for {jobsCountForDepartment} position{jobsCountForDepartment > 1 && 's'}
            {department !== 'All' && ` in ${department}`}:
          </TitleSmall>
        )}
        {jobsCount < 1 && <TitleSmall>There are currently no open positions.</TitleSmall>}

        {jobsCount > 0 && department.length > 0 && (
          <>
            <DropDown>
              <select onChange={handleDepartmentChange}>
                <option value="All" selected>
                  All ({jobsCount})
                </option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department} ({jobsData[department].length})
                  </option>
                ))}
              </select>
            </DropDown>
          </>
        )}

        {jobsCount > 0 && department === 'All'
          ? Object.keys(jobsData).map((deptName: string) => (
              <Section key={deptName} margin={'0 0 1.6rem'}>
                <SubTitle>{deptName}</SubTitle>
                {jobsData[deptName].map(({ absolute_url, title, location }, index) => (
                  <LinkContainer key={index} href={absolute_url} target="_blank" rel="noopener nofollow noreferrer">
                    <b>{title}</b>
                    <i>{location.name}</i>
                    <SVG src="images/icons/arrowRight.svg" cacheRequests={true} />
                  </LinkContainer>
                ))}
              </Section>
            ))
          : jobsCount > 0 && (
              <Section margin={'0 0 1.6rem'}>
                <SubTitle>{department}</SubTitle>
                {jobsData[department].map(({ absolute_url, title, location }, index) => (
                  <LinkContainer key={index} href={absolute_url} target="_blank" rel="noopener nofollow noreferrer">
                    <b>{title}</b>
                    <i>{location.name}</i>
                    <SVG src="images/icons/arrowRight.svg" cacheRequests={true} />
                  </LinkContainer>
                ))}
              </Section>
            )}

        <Section>
          <p>
            {jobsCount < 1 && 'Currently there are no open positions. Convinced you can contribute to Cow Protocol?'}
            {jobsCount > 0 && "Can't find the position you're looking for?"}{' '}
            <ExternalLink href={discordURL} target="_blank" rel="noopener nofollow">
              Get in touch
            </ExternalLink>
          </p>
        </Section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const jobsData = await getJobs()
  const siteConfigData = CONFIG

  return {
    props: { jobsData, siteConfigData },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 3600 seconds (1 hour)
    revalidate: 3600, // In seconds
  }
}
