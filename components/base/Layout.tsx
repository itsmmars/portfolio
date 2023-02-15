import React from 'react'
import { 
  Box, 
  Container, 
  VStack,
  useMediaQuery
} from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'


type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children, hideNavBar = false }: LayoutProps) => {
  return (
    <>
      <Container minW={`99vw`} px={0} h={{base: `auto`, lg: `100%`}}>
        {/* 2xl */}
        <VStack h="100vh" w="100%">
          <NavigationBar />
          <Box w={`100%`} flexGrow={1}>
            {children}
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
