import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { ProjProps } from '../components/base/types'
import projectData from '../constants/projects.json'
import { Layout } from '../components/base/Layout'
import { MFCard } from '../components/base/MFCard'
import React, { useState } from 'react'
import Head from 'next/head'
import { 
  Flex,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'

interface ClientProps extends ProjProps {
  tech: string[]
}

const projArr = Object.values(projectData)

const projPropsArray: ClientProps[] = projArr.map((gig) => {
  return {
    name: gig.name,
    logo: gig.logo,
    filter: gig.filter,
    alt: gig.alt,
    url: gig.url,
    imgUrl: gig.imgUrl,
    summary: gig.summary,
    overview: gig.overview,
    tech: gig.tech
  }
})

const Portfolio = () => {
  const [flippedIndex, setFlippedIndex] = useState(-1)

  const flipCard = (index: number) => {
    setFlippedIndex(flippedIndex === index ? -1 : index)
  }

  return (
    <Layout>
      <Head>
        <title>Mike Filicetti: Portfolio</title>
        <meta name="description" content="Mike Filicetti: Portfolio Page" />
      </Head>
      <Flex mt={[`5em`, `unset`]} justifyContent="center">
        <Box w='100%' maxW='1200px' p={6}>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            {projPropsArray.map((p, i) => (
              <MFCard 
                name={p.name}
                logo={p.logo}
                filter={p.filter}
                alt={p.alt}
                url={p.url}
                imgUrl={p.imgUrl}
                summary={p.summary}
                overview={p.overview}
                tech={p.tech}
                key={i}
                flippedIndex={flippedIndex}
                handleFlipCard={flipCard}
                index={i}
                delay={i/Math.PI} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Portfolio)
