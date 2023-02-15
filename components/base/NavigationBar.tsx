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
  VStack,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { 
  FiArrowUpRight, 
  FiMenu
} from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFolderOpen } from 'react-icons/fa'
import React from 'react'
import NextLink from 'next/link'
import ContactForm from './Contact'
import { IconType } from 'react-icons'

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const links: {name: string, external: boolean, link?: string, icon: IconType}[] = [ 
    { 
      name: `Portfolio`, 
      external: false, 
      link: ``,
      icon: FaFolderOpen
    }, 
    { 
      name: `LinkedIn`, 
      external: true, 
      link: `https://www.linkedin.com/in/mikefili`,
      icon: FaLinkedin
    },
    { 
      name: `GitHub`, 
      external: true, 
      link: `https://github.com/itsmmars`,
      icon: FaGithub
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
        // _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
        >
          {isMobile ? (
            <Icon w={10} h={10} as={l.icon} />
          ) : (
            <Text whiteSpace="nowrap">
              {l.name} {l.external ? <Icon as={FiArrowUpRight} /> : ``}
            </Text>
          )}
      </Link>
      )
    )
  }

  return (
    <Flex
      position={[`fixed`, `unset`]}
      as="nav"
      w={`100%`}
      p={`20px`}
      direction={`row`} 
      align={`center`} 
      backgroundColor={`red`}
      borderBottom={`default`}
      boxShadow={`2px 2px 10px 2px rgba(0, 0, 0, 0.15)`}
      zIndex={4}
      color={`white`}
    >
      <Flex maxW={`96em`} w={`100%`} m={`auto`}>

        <Box 
          flexGrow={1} 
          w={[`unset`, `100%`]}
        >
          <Link 
            as={NextLink} 
            href={`/`} 
            textDecoration={`none`}
            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
          >
            <Heading fontFamily={`'Changa One', sans-serif`} size={`2xl`}>M</Heading>
          </Link>
        </Box>
        <Button 
          position={`absolute`} 
          right={`0.5rem`} 
          top={`1.25rem`}
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
          backgroundColor={`transparent`}
        >
          <Icon  w={10} h={10} as={FiMenu} />
        </Button>
        <Drawer 
          placement={`left`} 
          onClose={onClose} 
          isOpen={isOpen}
          size={`full`}>
          <DrawerOverlay />
          <DrawerContent 
            backgroundColor={`red`}
            color={`white`}>
            <DrawerHeader>
              <Link 
                as={NextLink} 
                href={`/`} 
                textAlign={`left`}
                textDecoration={`none`}
                _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
              >
                <Heading size={`md`}>Mike Filicetti</Heading>
              </Link>
              <DrawerCloseButton size={`xl`} pt={`0.25rem`} />
            </DrawerHeader>
            <DrawerBody>
              <VStack 
                mb={[`1rem`, `0rem`]} 
                justifyContent={`space-between`}
                fontSize={`3xl`}>
                  <Accordion w={`100%`} allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            See My Work
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack>
                          <Link 
                            as={NextLink} 
                            href={`/portfolio`} 
                            textDecoration={`none`}
                            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
                          >
                            <Text>Portfolio</Text>
                          </Link>
                          <Link 
                            href={`/Mike Filicetti - 2023 Resume.pdf`}
                            download={`Mike Filicetti - 2023 Resume`} 
                            textDecoration={`none`}
                            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
                          >
                            <Text>Download Resume</Text>
                          </Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Lets Connect
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ContactForm />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <HStack pt={4} mt={2} spacing={8}>
                    {mapLinks()}
                  </HStack>
              </VStack>
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
    </Flex>
  )
}