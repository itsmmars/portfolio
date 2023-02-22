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
import { FaGithub, FaLinkedin, FaFolderOpen, FaHistory } from 'react-icons/fa'
import React from 'react'
import NextLink from 'next/link'
import ContactForm from './Contact'
import { IconType } from 'react-icons'

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const links: {name: string, external: boolean, link?: string, icon: IconType}[] = [ 
    { 
      name: `Selected Works`, 
      external: false, 
      link: `/portfolio`,
      icon: FaFolderOpen
    }, 
    { 
      name: `Experience`, 
      external: false, 
      link: `/experience`,
      icon: FaHistory
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
        href={l.link}
        isExternal={l.external}
        textDecoration={`none`}
        fontSize={`2xl`}
        >
          <Text whiteSpace="nowrap">
            {l.name} {l.external ? <Icon as={FiArrowUpRight} /> : ``}
          </Text>
      </Link>
      )
    )
  }

  const mapMobileLinks = ()=> {
    const externalLinks = links.filter(l => l.external)
    return externalLinks.map((l, i) => (
      <Link 
        key={i} 
        as={NextLink}
        href={l.link}
        textDecoration={`none`}
        fontSize={`2xl`}
        >
          <Icon w={10} h={10} as={l.icon} />
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
      backgroundColor={`red.900`}
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
          <Heading fontFamily={`'Changa One', sans-serif`} size={`2xl`}>
            <Link 
              as={NextLink} 
              href={`/`} 
              textDecoration={`none`}
              _hover={{ color: `red.100` }}
            >
              M
            </Link>
          </Heading>
        </Box>
        <Button 
          position={`absolute`} 
          right={`0.5rem`} 
          top={`1.25rem`}
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
          backgroundColor={`transparent`}
        >
          <Icon w={10} h={10} as={FiMenu} />
        </Button>
        <Drawer 
          placement={`left`} 
          onClose={onClose} 
          isOpen={isOpen}
          size={`full`}>
          <DrawerOverlay />
          <DrawerContent 
            backgroundColor={`red.900`}
            color={`white`}>
            <DrawerHeader>
              <Link 
                as={NextLink} 
                href={`/`} 
                textAlign={`left`}
                textDecoration={`none`}
              >
                <Heading size={`md`}>Mike Filicetti</Heading>
              </Link>
              <DrawerCloseButton size={`xl`} pt={`0.25rem`} />
            </DrawerHeader>
            <DrawerBody>
              <VStack 
                mb={[`1rem`, `0rem`]} 
                justifyContent={`space-between`}
                fontSize={`2xl`}
                textAlign='left'>
                  <Accordion w={`100%`} allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box 
                            flex='1' 
                            textAlign='left'
                            fontSize={`2xl`}
                            >
                            See My Work
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack>
                          <Link 
                            w={`100%`}
                            as={NextLink} 
                            href={`/portfolio`} 
                            textDecoration={`none`}
                            onClick={onClose}
                            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
                          >
                            <Text>Selected Works</Text>
                          </Link>
                          <Link 
                            w={`100%`}
                            href={`/experience`}
                            textDecoration={`none`}
                            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
                          >
                            <Text>Experience</Text>
                          </Link>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box 
                            flex='1' 
                            textAlign='left'
                            fontSize={`2xl`}
                          >
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
                    {mapMobileLinks()}
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