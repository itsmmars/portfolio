import { 
  HStack,
  VStack,
  Icon, 
  Link,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links: {link: string, alt: string, icon: any}[] = [
  {
    link: `https://www.linkedin.com/in/mikefili`, 
    alt: `LinkedIn`,
    icon: FaGithub
  }, 
  {
    link: `https://github.com/itsmmars`, 
    alt: `GitHub`,
    icon: FaLinkedin
  } 
]

const mapLinks = () => {
  return (
    <HStack 
      fontSize={`16px`} 
      spacing={`20px`}
      my={`1rem`}>
      {links.map((l, i) => {
        return (
          <Link key={i} href={l.link} isExternal>
            <Icon w={10} h={10} as={l.icon} />
          </Link>
        )
      })}
    </HStack>
  )
}

export const Footer = () => {
  return (
    <VStack bottom={`0`} pb="2rem" w="100%" justifyContent="right" spacing="12px">
      <Text fontSize='2xl'>Let&apos;s Connect</Text>
      {mapLinks()}
    </VStack>
  )
}
