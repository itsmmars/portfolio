import { 
  Text, 
  Stack,
  HStack,
  useDisclosure,
  Flex, 
  Box, 
  Link, 
  Heading,
  Icon
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { v4 } from 'uuid'
import { useRouter } from 'next/router'
import { FiArrowUpRight } from 'react-icons/fi'

type NavBarProps = {
  hide?: boolean
}

export const NavigationBar = ({ hide = false }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

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
    return (
      links.map((l) => {
        return (
          <Link 
            key={v4()} 
            as={NextLink}
            href={l.external ? l.link : `/${l.name.toLowerCase()}`}
            isExternal={l.external}
            textDecoration={`none`}
            _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
          >
            <Text whiteSpace="nowrap">{l.name} {l.external ? <Icon as={FiArrowUpRight} /> : ``}</Text>
          </Link>
          )
        }
      )
    )
  }

  return (
    <Flex 
      w={`100%`}
      p={`24px`}
      direction={[`column`, `row`]} 
      align={`center`} 
      fontSize={`11px`}
      backdropFilter={`blur(10px)`}
      borderBottom={`default`}>
      <Box flexGrow={1} w={[`unset`, `100%`]}>
        <Link 
          as={NextLink} 
          href={`/`} 
          textDecoration={`none`}
          _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
        >
          <Heading>Mike Filicetti</Heading>
        </Link>
        <Text casing={`uppercase`}>interesting developments llc</Text>
      </Box>
      <Box flexGrow={1} h={`0.5rem`} w={[`unset`, `100%`]}>
      
      </Box>
      {!hide && (
        <Box flexGrow={1} w={[`unset`, `100%`]} justifyContent={[`center`, `right`]}>
          <Stack 
            direction={[`column`, `row`]} 
            spacing={`20px`} 
            fontSize={[`14px`, `16px`]}
            justifyContent={[`center`, `right`]}
          >
            <HStack mb={[`1rem`, `0rem`]} spacing={`20px`}>
              {mapLinks()}
            </HStack>
            {/* TODO: add light/dark mode toggle
            <Box pr={`0.5rem`}>
              
            </Box> */}
          </Stack>
        </Box>
      )}
    </Flex>
  )
}
