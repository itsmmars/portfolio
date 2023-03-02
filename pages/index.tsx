import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { MFTextCycle } from '../components/base/MFTextCycle'
import { MFLinkLogo } from '../components/base/MFLinkLogo'
import projectData from '../constants/projects.json'
import { ProjProps } from '../components/base/types'
import { Layout } from '../components/base/Layout'
import useScroll from './api/useScroll'
import Head from 'next/head'
import { 
  Container, 
  Flex,
  VStack,  
  Text,
  Heading,
  ScaleFade,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

const Home = () => {
  const useLogo = (logo: string) => {
    return useColorModeValue(logo, logo.replace('.svg', '_alpha.svg'))
  }
  const hasScrolled = useScroll()

  // TODO: Filter programatically, not by index
  const rawProjArr = Object.values(projectData)
  const projArr = rawProjArr.filter((v, i) =>{
    return i !==2
  })

  const clients: ProjProps[] = projArr.map((proj) => {
    return {
      name: proj.name,
      logo: proj.logo,
      alt: proj.alt,
      url: proj.url
    }
  })

  const roles = [`SOFTWARE ENGINEER`, `PROJECT MANAGER`, `UI/UX STORYTELLER`]

  return (
    <>
      <Head>
        <title>Mike Filicetti</title>
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
            <Flex className='fade-in' justifyContent={`center`} flexDir={`column`}>
              <Flex 
                h={`100vh`}
                flexDir={`column`} 
                w={[`300px`, `unset`]}
                textAlign={`center`}
                justifyContent={`center`}
                alignItems={`center`}
              >
                <Box textAlign={`center`}>
                  <Text 
                    fontSize={[`9em`, `16em`]}
                    lineHeight={`0.5em`}
                    style={{ fontSmooth: `always`}}
                  >
                    mike
                  </Text>
                  <Text 
                    letterSpacing={`0.5em`}
                    textIndent={`0.5em`}
                    fontSize={[`2em`, `3.675em`]}
                  >
                      FILICETTI
                  </Text>
                  <MFTextCycle
                    text={roles}
                    textAlign={`center`} 
                    fontSize={[`1.05em`, `1.8em`]} 
                    letterSpacing={`0.33em`}
                    textIndent={`0.33em`} />
                  <Flex 
                    mt={[`3rem`, `none`]} 
                    w={[`300px`, `unset`]}
                  >
                    <Text 
                      fontWeight={`700`} 
                      fontSize={[`1.3em`, `1.8em`]}
                      color={`red.900`}
                      m={`auto`}>
                      Crafting seamless UI/UX solutions to drive your business forward.
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <ScaleFade in={hasScrolled} style={{ transition: `opacity 2000ms ease-in-out` }}>
              <VStack 
                w={`100vw`}
                mb={`5em`}
                direction={`column`} 
                spacing={[`0.5rem`, `2rem`]} 
                fontSize={[`l`, `xl`]} 
                fontWeight={700}>
                  <Heading size={`3xl`}>clients</Heading>
                  {clients.map((c, i) => (
                    <MFLinkLogo
                      name={c.name}
                      url={c.url}
                      alt={c.name}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      logo={useLogo(c.logo)}
                      key={i} />
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