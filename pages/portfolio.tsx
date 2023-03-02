import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { ProjProps } from '../components/base/types'
import projectData from '../constants/projects.json'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { Layout } from '../components/base/Layout'
import { MFCard } from '../components/base/MFCard'
import useFlipCard from './api/useFlipCard'
import Head from 'next/head'
import React from 'react'

interface ClientProps extends ProjProps {
  tech: string[]
}

const projArr = Object.values(projectData)

const projPropsArray: ClientProps[] = projArr.map((proj) => {
  return {
    name: proj.name,
    logo: proj.logo,
    preview: proj.preview,
    alt: proj.alt,
    url: proj.url,
    imgUrl: proj.imgUrl,
    summary: proj.summary,
    overview: proj.overview,
    tech: proj.tech
  }
})

const Portfolio = () => {
  const flip = useFlipCard()
  console.log(flip)
  return (
    <Layout>
      <Head>
        <title>Mike Filicetti: Selected Works</title>
        <meta 
          name="description" 
          content="Mike Filicetti: Selected Works" />
      </Head>
      <Flex 
        mt={[`7em`, `unset`]} 
        justifyContent="center">
        <SimpleGrid 
          w='100%' 
          maxW='1200px' 
          p={[0, 6]}
          columns={[1, 2]} 
          spacing={[0, 6]}>
          {projPropsArray.map((p, i) => (
            <MFCard 
              name={p.name}
              logo={p.logo}
              preview={p.preview}
              alt={p.name}
              url={p.url}
              imgUrl={p.imgUrl}
              summary={p.summary}
              overview={p.overview}
              tech={p.tech}
              key={i}
              handleFlipCard={flip.flipCard}
              flippedIndex={flip.flippedIndex}
              index={i}
              delay={i/Math.PI} />
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Portfolio)
