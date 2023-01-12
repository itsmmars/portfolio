import React from 'react'
import { Box, Container, VStack } from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'

type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children, hideNavBar = false }: LayoutProps) => {
  return (
    <>
      <Container maxW="96em" px={0} py={[`1rem`, `unset`]} h={{base: `auto`, lg: `100%`}}>
        {/* 2xl */}
        <VStack h="100%" w="100%">
          <NavigationBar hide={hideNavBar} />
          <Box flexGrow={1}>
            {children}
          </Box>
          <Box>
            
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
