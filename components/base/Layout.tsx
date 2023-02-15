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

  const circles: { size: number, left: number, top: number, color: string }[] = [
    {size: 890, left: 0, top: 0, color: `rgba(65, 179, 248, 0.11)`},
    {size: 876, left: 961, top: 46, color: `rgba(111, 251, 242, 0.08)`},
    {size: 706, left: 459, top: 191, color: `rgba(79, 248, 65, 0.04)`}
  ]

  return (
    <>
      <Container maxW="96em" px={0} h={{base: `auto`, lg: `100%`}}>
        {/* 2xl */}
        <VStack h="100vh" w="100%">
          <NavigationBar />
          <Box flexGrow={1}>
            {children}
          </Box>
          <Box>
            {/* {handleBackground()} */}
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
