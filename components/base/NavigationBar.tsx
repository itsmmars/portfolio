import { 
  Text, 
  HStack,
  useDisclosure,
  Flex, 
  Box, 
  Link, 
  Heading,
  Icon,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { FiArrowUpRight, FiMenu } from 'react-icons/fi'
import ContactForm from './Contact'

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const links: {name: string, external: boolean, link?: string}[] = [
    { 
      name: `Portfolio`, 
      external: false, 
      link: `` 
    }, 
    { 
      name: `LinkedIn`, 
      external: true, 
      link: `https://www.linkedin.com/in/mikefili` 
    },
    { 
      name: `GitHub`, 
      external: true, 
      link: `https://github.com/itsmmars` 
    }
  ]

  const mapLinks = () => {
    return links.map((l, i) => (
      <Link 
        key={i} 
        as={NextLink}
        href={l.external ? l.link : `/${l.name.toLowerCase()}`}
        isExternal={l.external}
        textDecoration={`none`}
        _hover={{ color: `rgba(255, 255, 255, 0.7)` }}>
        <Text whiteSpace="nowrap">
          {l.name} {l.external ? <Icon as={FiArrowUpRight} /> : ``}
        </Text>
      </Link>
      )
    )
  }

  return (
    <Flex
      position={[`fixed`, `unset`]}
      as="nav"
      w={`100%`}
      p={`24px`}
      direction={`row`} 
      align={`center`} 
      backgroundColor={`transparent`}
      backdropFilter={`blur(10px)`}
      borderBottom={`default`}
      zIndex={4}
    >
      <Box flexGrow={1} w={[`unset`, `100%`]}>
        <Link 
          as={NextLink} 
          href={`/`} 
          textDecoration={`none`}
          _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
        >
          <Heading>Mike Filicetti</Heading>
        </Link>
        <Text fontSize={[`xs`, `md`]} casing={`uppercase`}>interesting developments llc</Text>
      </Box>
      <Button 
        position={`absolute`} 
        right={`0.5rem`} 
        top={`1.25rem`}
        onClick={onOpen}
        display={{ base: 'block', md: 'none' }}
        backgroundColor={`transparent`}
        backdropFilter={`blur(10px)`}>
        <Icon h={`3rem`} w={`3rem`} as={FiMenu} />
      </Button>
      <Drawer 
        placement={`right`} 
        onClose={onClose} 
        isOpen={isOpen}
        size={`full`}>
        <DrawerOverlay />
        <DrawerContent 
          backgroundColor={`transparent`}
          backdropFilter={`blur(10px)`}>
          <DrawerHeader pt={`2.5rem`}>
            <Box flexGrow={1} w={[`unset`, `100%`]}>
              <Link 
                as={NextLink} 
                href={`/`} 
                textAlign={`center`}
                textDecoration={`none`}
                _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
              >
                <Heading size={`3xl`}>Mike Filicetti</Heading>
              </Link>
              <DrawerCloseButton h={`2rem`} w={`2rem`} size={`lg`} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack 
              mb={[`1rem`, `0rem`]} 
              justifyContent={`space-between`}
              fontSize={`4xl`}>
              {mapLinks()}
            </VStack>
            <ContactForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack 
        mb={[`1rem`, `0rem`]} 
        spacing={`20px`}
        flexGrow={1}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        display={{ base: 'none', md: 'flex' }}>
        {mapLinks()}
      </HStack>
    </Flex>
  )
}