import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { MFAccordionItem } from '../components/base/MFAccordionItem'
import { ExpProps } from '../components/base/types'
import { Layout } from '../components/base/Layout'
import expData from '../constants/exp.json'
import Head from 'next/head'
import React from 'react'
import { 
  Flex,
  Accordion,
  useColorModeValue,
} from '@chakra-ui/react'

const expArr = Object.values(expData)

const ExpPropsArray: ExpProps[] = expArr.map((exp) => {
  return {
    name: exp.name,
    role: exp.role,
    location: exp.location,
    url: exp.url,
    client: exp.client,
    start: exp.start,
    end: exp.end,
    summary: exp.summary,
    overview: exp.overview
  }
})

const Experience = () => {
  const bg = useColorModeValue(
    `rgba(255, 255, 255, 0.99)`,
    `rgba(0, 0, 0, 0.9)`
    )
  return (
    <Layout hideNavBar={false}>
      <Head>
        <title>Mike Filicetti: Experience</title>
        <meta name="description" content="Mike Filicetti: Experience" />
      </Head>
      <Flex m={`1rem`} mt={[`7rem`, `0rem`]} flexDir={`column`}>
        <Accordion defaultIndex={0}>
          {ExpPropsArray.map((e, i) => {
            return (
              <MFAccordionItem
                key={i}
                name={e.name}
                url={e.url}
                role={e.role}
                start={e.start}
                end={e.end}
                location={e.location}
                summary={e.summary}
                client={e.client}
                overview={e.overview}
                index={i}
                bg={bg} />
              )
          })}
        </Accordion>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Experience)