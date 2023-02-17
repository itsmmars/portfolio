import { Layout } from '../components/base/Layout'
import { 
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Flex,
  Image,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import gigsData from '../constants/gigs.json'
import { NextPage } from 'next'
import withLoadingSpinner from '../components/HOC/withLoadingSpinner'

interface GigProps {
  name: string
  logo?: string
  filter: boolean
  alt: string
  url: string
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
    summary: gig.summary,
    overview: gig.overview,
    tech: gig.tech
  }
})

const Portfolio: NextPage = () => {
  return (
    <Layout hideNavBar={false}>
      <Head>
        <title>Mike Filicetti: Portfolio</title>
        <meta name="description" content="Mike Filicetti: Portfolio Page" />
      </Head>
      <Flex m={`1rem`} mt={[`7rem`, `0rem`]} flexDir={`column`}>
      <Accordion defaultIndex={0}>
        {gigPropsArray.map((g, i) => {
          return (
            <AccordionItem key={i} backgroundColor={`rgba(255, 255, 255, 0.9)`}>
              <h2>
                <AccordionButton>
                  <Box 
                    fontSize={`2em`}
                    as="span" 
                    flex='1' 
                    textAlign='left'
                    textTransform='uppercase'>
                    {g.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Card 
                  color={`black`}
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  mb={`1.5rem`}
                  backgroundColor={`rgba(255, 255, 255, 0.05)`}
                >
                  <CardHeader>
                    <Link 
                      as={NextLink} 
                      href={g.url} 
                      textDecoration={`none`}
                      _hover={{ color: `rgba(0,0,0,0.7)` }}
                      >
                      <Image 
                        alt={g.alt} 
                        src={g.logo} 
                        w={`200px`} 
                        pt={`0.5rem`}
                        m={`auto`}
                        className={g.filter ? `svg-filter` : ``}/>
                    </Link>
                  </CardHeader>

                  <CardBody>
                    <Stack 
                      divider={<StackDivider />} 
                      spacing='4'
                      >
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Summary
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          {g.summary}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Overview
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          {g.overview}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          TECHNOLOGIES USED
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          {g.tech.join(`, `)}
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
        </Accordion>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Portfolio)