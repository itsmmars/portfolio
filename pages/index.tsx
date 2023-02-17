import { 
  Container, 
  Flex,
  VStack,  
  Text,
  Heading,
  ScaleFade,
  Link,
  Image,
  Fade,
  Box,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import useScroll from './api/useScroll'
import { Layout } from '../components/base/Layout'
import { NextPage } from 'next'
import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const hasScrolled = useScroll()

  interface GigProps {
    name: string
    logo?: string
    filter?: boolean
    alt: string
    url: string
  }

  const gigs: GigProps[] = [
    {
      name: `PlutusDAO`, 
      logo: `/logo_ver1.svg`,
      url: `https://plutusdao.io`,
      alt: `Plutus DAO`
    }, 
    {
      name: `Keeper AI`, 
      logo: `/keeper-logo.svg`,
      filter: true,
      url: `https://keeperai.com/`,
      alt: ``
    },
    {
      name: `CUI`, 
      logo: `/cui-logo.svg`,
      url: `https://www.cui.edu/`,
      alt: ``
    },
    {
      name: `Journeys Counseling`, 
      logo: `/journeys-logo.png`,
      url: `https://journeyscounseling.com/`,
      alt: ``
    }
  ]

  const roles = [`SOFTWARE ENGINEER`, `PROJECT MANAGER`, `UI/UX WIZARD`]

  const CycleRoles: React.FC = () => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0)
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }, 3000)
  
      return () => clearInterval(timer)
    }, [])
  
    return <Text textAlign={`center`} fontSize={[`1em`, `1.8em`]} letterSpacing={`0.33em`}>{roles[currentStringIndex]}</Text>
  }

  return (
    <>
      <Head>
        <title>Mike Filicetti: Portfolio</title>
        <meta name="description" content="Mike Filicetti: Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Layout hideNavBar={false}>
        <Container maxW="container.xl" centerContent px="0" h="calc(100% - 60px)">
          <Flex 
            direction="column" 
            justify="center"
            align="center"
            w="100%"
            textAlign={`left`}
            m="auto"
            className='test'
          >
            <Fade delay={0.5} in={true} style={{ transition: `opacity 500ms ease-in-out`}}>
              <Flex justifyContent={`center`} flexDir={`column`}>
                <Flex 
                  h={`100vh`}
                  flexDir={`column`} 
                  w={[`300px`, `unset`]}
                  textAlign={`center`}
                  justifyContent={`center`}
                  alignItems={`center`}
                >
                  <Box textAlign={`center`}>
                    <Heading 
                      fontSize={[`8em`, `16em`]}
                      lineHeight={`0.8em`}
                      style={{ fontSmooth: `always`}}
                    >
                      mike
                    </Heading>
                    <Text 
                      letterSpacing={`0.5em`}
                      textIndent={`0.5em`}
                      fontSize={[`1.825em`, `3.675em`]}
                    >
                        FILICETTI
                    </Text>
                    <CycleRoles />
                    <Flex 
                      mt={[`3rem`, `none`]} 
                      w={[`300px`, `unset`]}
                    >
                      <Text 
                        fontWeight={`700`} 
                        fontSize={[`1.3em`, `1.8em`]}
                        color={`red`}
                        m={`auto`}>
                        Crafting seamless UI/UX solutions to drive your business forward.
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Fade>
            <ScaleFade in={hasScrolled} style={{ transition: `opacity 2000ms ease-in-out` }}>
              <VStack 
                w={`100vw`}
                mt={[`8em`, `16em`]}
                mb={`5em`}
                direction={`column`} 
                spacing={[`0.5rem`, `2rem`]} 
                fontSize={[`l`, `xl`]} 
                fontWeight={700}>
                  <Heading size={`3xl`}>clients</Heading>
                  {gigs.map((g, i) => (
                    <Link 
                      key={i}
                      w={[`60%`, `50%`]}
                      as={NextLink} 
                      href={g.url} 
                      isExternal={true}
                      textDecoration={`none`}
                      _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
                    >
                      <Image 
                        my={`2em`}
                        alt={g.alt} 
                        src={g.logo} 
                        w={[`300px`, `100%`]} 
                        className={g.filter ? `svg-filter` : ``}
                        />
                    </Link>
                  ))}
              </VStack>
            </ScaleFade>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}

export default withLoadingSpinner(Home)