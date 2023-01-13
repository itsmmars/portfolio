import { Layout } from '../components/base/Layout'
import { 
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Flex,
  Image
} from '@chakra-ui/react'
import React from 'react'
import { v4 } from 'uuid'
import { textChangeRangeIsUnchanged } from 'typescript'

interface GigProps {
  name: string
  logo?: string
  alt: string
  summary: string
  overview: string
  tech: string[]
}

const gigs: GigProps[] = [
  {
    name: `PlutusDAO`, 
    logo: `/logo.svg`,
    alt: ``,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique convallis sagittis. Nunc id volutpat nibh.`,
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique convallis sagittis. Nunc id volutpat nibh. Cras consequat ultricies nisi sed consequat. Etiam interdum ipsum maximus elit placerat lobortis. In sagittis velit diam, in vulputate lorem aliquam id. Proin urna enim, viverra in sem non, vestibulum suscipit diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc laoreet nisi sit amet felis mollis, id fringilla diam ultricies.`,
    tech: [`Web3.js`, `Next.js`, `Ethers`, `Sentry`, `React`, `GraphQL`, `Chakra UI`]
  }, 
]

const mapGigs = () => {
  
}

export default function Portfolio() {
  return (
    <Layout hideNavBar={false}>
      <Flex m={`1rem`} flexDir={`column`}>
        <Heading 
          mb={`1rem`} 
          lineHeight={`inherit`} 
          textAlign={`center`}
        >
          Portfolio Page
        </Heading>
        {gigs.map((g) => {
          return (
            <Card key={v4()}>
              <CardHeader>
                <Image alt='' src={g.logo}/>
                <Heading pt='2' size='xs' textTransform='uppercase'>
                  {g.name}
                </Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
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
          )
        })}
      </Flex>
    </Layout>
  )
}
