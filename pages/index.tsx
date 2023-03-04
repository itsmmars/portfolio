import withLoadingSpinner from '../components/HOC/withLoadingSpinner'
import { MFLinkLogo } from '../components/base/MFLinkLogo'
import { MFHeroText } from '../components/base/MFHeroText'
import projectData from '../constants/projects.json'
import { ProjProps } from '../components/base/types'
import { Layout } from '../components/base/Layout'
import useScroll from './api/useScroll'
import Head from 'next/head'
import { 
  Container, 
  Flex,
  VStack,  
  Heading,
  ScaleFade,
  useColorMode,
  Fade,
} from '@chakra-ui/react'

const Home = () => {
  const hasScrolled = useScroll()
  const { colorMode } = useColorMode() 
  const light = colorMode === 'light'
  
  const rawProjArr = Object.values(projectData)
  const projArr = rawProjArr.filter((v, i, a) =>
    a.findIndex(t => (t.client === v.client)) === i
  )

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
        <meta name='description' content='Mike Filicetti: Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico?v=2' />
      </Head>
      <Layout hideNavBar={false}>
        <Container maxW='container.xl'>
          <Flex 
            flexDir='column'
            justifyContent='center'
            align='center'
            w='100%'
            m='auto'
          >
            <Fade 
              in={true} 
              delay={1/Math.PI} 
              style={{ transition: `1.5s ease-in-out`}}>
              <MFHeroText cycleText={roles} />
            </Fade>
            <ScaleFade 
              in={hasScrolled} 
              style={{ transition: `opacity 2000ms ease-in-out` }}>
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
                      logo={light ? c.logo : c.logo.replace('.svg', '_alpha.svg')}
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