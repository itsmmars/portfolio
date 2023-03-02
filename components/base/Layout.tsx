import React from 'react'
import { 
  Box, 
  Container, 
  VStack,
} from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Background } from './Background'
import { Footer } from './Footer'
import MFTopButton from './MFTopButton'

type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container minW={`100%`} px={0} h={{base: `auto`, lg: `100%`}}>
        <VStack h="100vh" w="100%">
          <NavigationBar />
          <Background />
          <Box w={`100%`} maxW={`96em`} flexGrow={1}>
            {children}
          </Box>
          <MFTopButton />
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
