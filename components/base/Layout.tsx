import React from 'react'
import { Box, Container, VStack } from '@chakra-ui/react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'
import { v4 } from 'uuid'

type LayoutProps = {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = ({ children, hideNavBar = false }: LayoutProps) => {
  const circles: { size: string, left: string, top: string, color: string }[] = [
    {size: `890px`, left: `0`, top: `0`, color: `rgba(65, 179, 248, 0.11)`},
    {size: `876px`, left: `961px`, top: `46px`, color: `rgba(111, 251, 242, 0.08)`},
    {size: `706px`, left: `459px`, top: `191px`, color: `rgba(79, 248, 65, 0.04)`}
  ]

  const handleBackground = () => {
    return <>
      {circles.map((c) => {
        return (
          <Box 
            key={v4()}
            zIndex={-1}
            w={c.size} 
            h={c.size} 
            borderRadius={`500px`} 
            position={`absolute`} 
            left={c.left}
            top={c.top}
            backgroundColor={c.color}
            filter={`blur(188px)`}
          />
        )
      })}
    </>
  }

  return (
    <>
      <Container maxW="96em" px={0} py={[`1rem`, `unset`]} h={{base: `auto`, lg: `100%`}}>
        {/* 2xl */}
        <VStack h="100vh" w="100%">
          <NavigationBar hide={hideNavBar} />
          <Box flexGrow={1}>
            {children}
          </Box>
          <Box>
            {handleBackground()}
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}
