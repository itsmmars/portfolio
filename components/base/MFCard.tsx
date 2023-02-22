import { ProjProps } from './types'
import { 
  Text,
  Image,
  Box,
  HStack,
  Button,
  Fade,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'

interface MFCardProps extends ProjProps {
  tech: string[]
  index: number
  flippedIndex: number
  handleFlipCard: (index: number) => void
  delay: number
}

export const MFCard = ({
  name,
  logo,
  filter,
  alt,
  url,
  imgUrl,
  summary,
  overview,
  tech,
  index,
  flippedIndex,
  handleFlipCard,
  delay
}: MFCardProps) => {

  return (
    <Fade in={true} delay={delay}>
      <Box
        position='relative'
        onClick={() => handleFlipCard(index)}
        cursor='pointer'
        boxShadow='md'
        >
        <Box position='relative'>
          <Image
            src={imgUrl}
            alt={alt}
            objectFit='cover'
            boxSize='100%'
          />
          <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            bg='linear-gradient(to bottom, transparent 0%, black 100%)'
          >
            <Text
              ml={[4, 6]}
              fontSize={['2em', '4em']}
              position='absolute'
              color={'white'}
              bottom='0'
              left='0'>
              {name}
            </Text>
          </Box>
        </Box>
        <Box
          position='absolute'
          top='0'
          left='0'
          w='100%'
          h='100%'
          display={flippedIndex === index ? 'block' : 'none'}
          bgColor='white'
          boxShadow='md'
          p={4}
          overflow={'auto'}
        >
          <Box>
            <Image
              maxW={'240px'} 
              mx={'auto'} 
              my={4} 
              src={logo} 
              alt={alt}
              className={filter ? `svg-filter` : ``} />
            <HStack justifyContent={`space-between`}>
              <Text fontSize='xl' fontWeight='bold'>SUMMARY</Text>
              <Link 
                isExternal
                as={NextLink} 
                href={url}
                _hover={{ textDecoration: `none` }} >
                  <Button variant='custom'>Check It Out</Button>                
              </Link>
            </HStack>
            <Text my={4}>{summary}</Text>
            <Text fontSize='xl' fontWeight='bold'>OVERVIEW</Text>
            <Text my={4}>{overview}</Text>
            <Text fontSize='xl' fontWeight='bold'>TECH USED</Text>
            <Text my={4}>{tech.join(', ')}</Text>
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}
