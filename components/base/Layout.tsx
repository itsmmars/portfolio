import React from 'react'
import { 
  Box, 
  Container, 
  VStack,
  useMediaQuery
} from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'
import { v4 } from 'uuid'


type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children, hideNavBar = false }: LayoutProps) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <Container maxW="96em" px={0} h={{base: `auto`, lg: `100%`}}>
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
