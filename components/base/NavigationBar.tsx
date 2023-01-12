import { 
  Text, 
  Stack,
  HStack,
  useDisclosure,
  Flex, 
  Box, 
  Link, 
  Heading
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { v4 } from 'uuid'

type NavBarProps = {
  hide?: boolean
}

export const NavigationBar = ({ hide = false }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const links = [`Portfolio`, `LinkedIn`, `GitHub`]

  const mapLinks = () => {
    return (
      links.map((l) => {
        return (
          <Link 
            key={v4()} 
            onClick={() => router.push(`/${l.toLowerCase()}`)}
            _hover={{ color: `white.100` }}
          >
            <Text whiteSpace="nowrap">{l}</Text>
          </Link>
          )
        }
      )
    )
  }

  return (
    <Flex 
      w="100vw"
      p="24px"
      direction={[`column`, `row`]} 
      align={`center`} 
      fontSize="11px"
      backgroundColor={`rgba(23, 27, 22, 0.02)`}
      backdropFilter={`blur(10px)`}
      borderBottom={`default`}>
      <Box flexGrow={1} w={[`unset`, `100%`]}>
        <Heading>Mike Filicetti</Heading>
      </Box>
      <Box flexGrow={1} w={[`unset`, `100%`]}>
      
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
            <Box pr={`0.5rem`}>
              
            </Box>
          </Stack>
        </Box>
      )}
    </Flex>
  )
}
