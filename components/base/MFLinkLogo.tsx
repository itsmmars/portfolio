import { Link, Image } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ProjProps } from './types'

export const MFLinkLogo = ({
  url,
  alt,
  logo,
  filter
}:ProjProps) => {
  return (
    <Link 
      w={[`80%`, `50%`]}
      as={NextLink} 
      href={url} 
      isExternal={true}
      textDecoration={`none`}
      _hover={{ color: `rgba(255, 255, 255, 0.7)` }}
    >
      <Image 
        my={`2em`}
        mx='auto'
        alt={alt} 
        src={logo} 
        w={[`300px`, `100%`]} 
        maxW='24em'
        className={filter ? `svg-filter` : ``}
        />
    </Link>
  )
}