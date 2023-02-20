import { Layout } from '../components/base/Layout'
import { 
  Text,
  Flex,
  Image,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import gigsData from '../constants/gigs.json'
import withLoadingSpinner from '../components/HOC/withLoadingSpinner'

interface GigProps {
  name: string
  logo?: string
  filter: boolean
  alt: string
  url: string
  imgUrl: string
  summary: string
  overview: string
  tech: string[]
}

const gigsArr = Object.values(gigsData)

const gigPropsArray: GigProps[] = gigsArr.map((gig) => {
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
        <Box w="100%" maxW="1200px" p={6}>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            {gigPropsArray.map((g, i) => (
              <Box
                key={i}
                position="relative"
                onClick={() => flipCard(i)}
                cursor="pointer"
                >
                <Box position="relative">
                  <Image
                    src={g.imgUrl}
                    alt={g.alt}
                    objectFit="cover"
                    boxSize="100%"
                    borderRadius='20px'
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    borderRadius='20px'
                    bg="linear-gradient(to bottom, transparent 0%, black 100%)"
                  >
                    <Text
                      mb={4}
                      ml={8}
                      fontSize={['2em', '4em']}
                      position="absolute"
                      color={'white'}
                      bottom="0"
                      left="0">
                      {g.name}
                    </Text>
                  </Box>
                </Box>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  display={flippedIndex === i ? 'block' : 'none'}
                  bgColor="white"
                  boxShadow="md"
                  p={4}
                  borderRadius='20px'
                  overflow={'auto'}
                >
                  <Box>
                    <Image
                      maxW={'240px'} 
                      mx={'auto'} 
                      my={4} 
                      src={g.logo} 
                      alt={g.alt}
                      className={g.filter ? `svg-filter` : ``} />
                    <Text fontSize="xl" fontWeight="bold">SUMMARY</Text>
                    <Text my={4}>{g.summary}</Text>
                    <Text fontSize="xl" fontWeight="bold">OVERVIEW</Text>
                    <Text my={4}>{g.overview}</Text>
                    <Text fontSize="xl" fontWeight="bold">TECH USED</Text>
                    <Text my={4}>{g.tech.join(', ')}</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Portfolio)
