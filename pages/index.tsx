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
  HStack,
  Box,
  useMediaQuery
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

  const roles = [`SOFTWARE ENGINEER`, `PRODUCT MANAGER`, `UI/UX WIZARD`]

  const CycleRoles: React.FC = () => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0)
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }, 3000)
  
      return () => clearInterval(timer)
    }, [])
  
    return <Text fontSize={[`xs`, `1.8em`]}>{roles[currentStringIndex]}</Text>
  }
  
  const [isMobile] = useMediaQuery('(max-width: 768px)')

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
            <Fade delay={0.25} in={true}>
              <Flex justifyContent={`center`} flexDir={`column`}>
                <Flex 
                  mt={[`20rem`, `10em`]}
                  flexDir={`column`} 
                  w={[`300px`, `unset`]}
                >
                  <HStack>
                    <Box>
                      <Heading 
                        fontSize={[`4.35em`, `10em`]} 
                        ml={[`-7px`, `-14px`]} 
                        lineHeight={`0.8em`}
                        color={`red`}
                        style={{ fontVariant: 'small-caps'}}
                      >
                        Mike
                      </Heading>
                      <Text 
                        letterSpacing={`0.5em`} 
                        textTransform={`uppercase`}
                        fontSize={[`initial`, `2.3em`]}
                      >
                          Filicetti
                      </Text>
                      <CycleRoles />
                    </Box>
                    <Box>
                      <Image 
                        src='/mike.jpg' 
                        alt='mike'
                        borderRadius={`50%`} />
                    </Box>
                  </HStack>
                </Flex>
                <Flex 
                  mt={[`3rem`, `none`]} 
                  w={[`300px`, `unset`]}
                >
                  <Text 
                    fontWeight={`700`} 
                    fontSize={`xl`} 
                    color={`red`}
                    m={`auto`}>
                    Crafting seamless UI/UX solutions to drive your business forward.
                  </Text>
                </Flex>
              </Flex>
            </Fade>
            <ScaleFade in={hasScrolled} style={{ transition: `ease-in-out 2s` }}>
              <VStack 
                w={`100vw`}
                mt={`20em`}
                mb={`5em`}
                direction={`column`} 
                spacing={[`0.5rem`, `2rem`]} 
                fontSize={[`l`, `xl`]} 
                fontWeight={700}>
                  <Heading size={`3xl`} style={{ fontVariant: `small-caps`}}>Clients</Heading>
                  {gigs.map((g, i) => (
                    <Link 
                      key={i}
                      w={`50%`}
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