import React from 'react'
import { 
  Box, 
  Container, 
  VStack,
} from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Background } from './Background'
import { Footer } from './Footer'

type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container minW={`99vw`} px={0} h={{base: `auto`, lg: `100%`}}>
        {/* 2xl */}
        <VStack h="100vh" w="100%">
          <NavigationBar />
          <Background />
          <Box w={`100%`} flexGrow={1}>
            {children}
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
