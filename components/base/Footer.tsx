import { 
  HStack,
  VStack,
  Icon, 
  Link,
  Text
} from '@chakra-ui/react'
import { v4 } from 'uuid'
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
      spacing={`20px`}>
      {links.map((l) => {
        return (
          <Link key={v4()} href={l.link} isExternal>
            <Icon as={l.icon} />
          </Link>
        )
      })}
    </HStack>
  )
}

export const Footer = () => {
  return (
    <VStack bottom="0" w="100%" justifyContent="right" spacing="12px">
      <Text>Let&apos;s Connect</Text>
      {mapLinks()}
    </VStack>
  )
}
