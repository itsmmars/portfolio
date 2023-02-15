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
import { v4 } from 'uuid'

interface GigProps {
  name: string
  logo?: string
  filter?: boolean
  alt: string
  url: string
  summary: string
  overview: string
  tech: string[]
}

const gigs: GigProps[] = [
  {
    name: `PlutusDAO`, 
    logo: `/logo_ver1.svg`,
    url: `https://plutusdao.io`,
    alt: `Plutus DAO`,
    summary: `Web3 application built with TypeScript, Next.js, React.js, Ethers.js, and Chakra UI`,
    overview: `Working in parallel with the design director to make key product and design decisions throughout the lifecycle of the product, from pre-launch to release. Plutus is an Arbitrum-native governance aggregator aiming to maximize users' liquidity and rewards while simultaneously aggregating governance behind the PLS token. Plutus' objective is to become the de-facto Layer 2 governance blackhole for projects with veTokens. `,
    tech: [
        `TypeScript`,
        `Web3.js`, 
        `Next.js`, 
        `Ethers.js`, 
        `Sentry`, 
        `React`, 
        `GraphQL`, 
        `Chakra UI`,
        `HTML`,
        `CSS`, 
        `Git`, 
        `GitHub Orgs`, 
        `Vercel`
      ]
  }, 
  {
    name: `Keeper AI`, 
    logo: `/keeper-logo.svg`,
    url: `https://keeperai.com/`,
    filter: true,
    alt: ``,
    summary: `Enterprise level web application built with TypeScript, React.js, `,
    overview: `Keeper AI is a next generation HR tool used to show off the human side of potential hires. By consuming content from several APIs this enterprise level application allows candidates to use various media to show potential employers who they are at a deeper level.`,
    tech: [
        `TypeScript`, 
        `React.js`, 
        `HTML`, 
        `SCSS`, 
        `Bootstrap`,
        `Styled-Components`, 
        `Giphy API`, 
        `YouTube API`,
        `Google Search API`, 
        `Git`, 
        `GitHub`, 
        `Jenkins`,
        `Jest`
      ]
  },
  {
    name: `CUI Virtual Tour`, 
    logo: `/cui-logo.svg`,
    url: `https://www.cui.edu/virtual-tour-ug`,
    alt: ``,
    summary: `Virtual tour microsite for Concordia University of Irvine`,
    overview: `Interactive virtual tour of the CUI campus built on the Leaflet.js library. This expansive microsite replaced the previous tour solution and has seen a traffic increase of over 25% since deployment.`,
    tech: [
        `JavaScript`,
        `AngularJS`, 
        `Leaflet.js`, 
        `HTML`, 
        `CSS`,  
        `Git`, 
        `BitBucket`, 
        `DotNetNuke CMS`
      ]
  },
  {
    name: `CUI Website`, 
    logo: `/cui-logo.svg`,
    url: `https://www.cui.edu`,
    alt: ``,
    summary: `Concordia University of Irvine's official website`,
    overview: `Planning, analysis, design, implementation, testing, maintenance, and ownership of both CUI's website and internal applications. Working in a cross-functional team with designers, project managers, copywriters, and tech lead to identify, define, and deliver on client needs. I managed a team of 5 interns, delegating, coaching, and uplifting them in their role. Triaging, proiritization, and management of ticketed requests from faculty and staff.`,
    tech: [
        `JavaScript`,
        `AngularJS`, 
        `HTML`, 
        `CSS`,  
        `Git`, 
        `BitBucket`, 
        `DotNetNuke CMS`,
        `Zendesk`,
        `Salesforce`,
        `MailChimp`,
        `Remote Desktop Manager`,
        `G Suite`
      ]
  }
]

export default function Portfolio() {
  return (
    <Layout hideNavBar={false}>
      <Flex m={`1rem`} mt={[`7rem`, `0rem`]} flexDir={`column`}>
      <Accordion defaultIndex={0}>
        {gigs.map((g, i) => {
          return (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton>
                  <Box 
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
