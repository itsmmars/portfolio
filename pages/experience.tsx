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
  List,
  ListIcon,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import expData from '../constants/exp.json'
import { NextPage } from 'next'
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa'
import withLoadingSpinner from '../components/HOC/withLoadingSpinner'

interface ExpProps {
  name: string
  role: string
  location: string
  url: string
  client?: string
  start: string
  end: string
  summary: string
  overview: string[]
}

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

const Experience: NextPage = () => {
  return (
    <Layout hideNavBar={false}>
      <Head>
        <title>Mike Filicetti: Portfolio</title>
        <meta name="description" content="Mike Filicetti: Portfolio Page" />
      </Head>
      <Flex m={`1rem`} mt={[`7rem`, `0rem`]} flexDir={`column`}>
        <Accordion defaultIndex={0}>
          {ExpPropsArray.map((e, i) => {
            return (
              <AccordionItem key={i} backgroundColor={`rgba(255, 255, 255, 0.9)`}>
                <h2>
                  <AccordionButton>
                    <Box 
                      fontSize={[`1.5em`, `2em`]}
                      as="span" 
                      flex='1' 
                      textAlign='left'
                      textTransform='uppercase'>
                      {e.name}
                      <Link 
                        isExternal
                        as={NextLink} 
                        href={e.url} 
                        textDecoration={`none`}
                        >
                          <Icon ml='2' pt='2' as={FaExternalLinkAlt} />
                      </Link>
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
                    <CardBody fontSize={[`lg`, `2xl`]}>
                      <Stack 
                        divider={<StackDivider />} 
                        spacing='4'
                        >
                        <Box>
                          <Text fontSize={`2xl`}>
                            {e.role}
                          </Text>
                          <Text pt={[``, `2`]} fontSize={[`lg`, `2xl`]}>
                            {e.start} - {e.end} | {e.location}
                          </Text>
                          <Text pt='4'  fontSize={[`lg`, `2xl`]}>
                            {e.summary}
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize={`2xl`}>
                            OVERVIEW
                          </Text>
                          <Text pt='2' fontSize='xl'>
                            <Text>
                              {e.client ? e.client : ``}
                            </Text>
                            <List spacing={3}>
                              {e.overview.map((o, i) => {
                                return (
                                  <ListItem key={i}>
                                    <ListIcon as={FaCheck} color='red' />
                                    {o}
                                  </ListItem>
                                )
                              })}
                            </List>
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
        <Link 
          w={`100%`}
          href={`/Mike Filicetti - 2023 Resume.pdf`}
          download={`Mike Filicetti - ${new Date().getFullYear()} Resume`} 
          textDecoration={`none`}
          _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
        >
          <Heading m={[`1rem`, `2rem`]} textAlign={`center`}>Download my Resume</Heading>
        </Link>
      </Flex>
    </Layout>
  )
}

export default withLoadingSpinner(Experience)