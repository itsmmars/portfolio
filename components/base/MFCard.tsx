import { ProjProps } from './types'
import { useState } from 'react'
import { 
  Text,
  Image,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react'

interface MFCardProps extends ProjProps {
  tech: string[]
  index: number
  flippedIndex: number;
  handleFlipCard: (index: number) => void
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
  handleFlipCard
}: MFCardProps) => {

  return (
    <Box
      position='relative'
      onClick={() => handleFlipCard(index)}
      cursor='pointer'
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
            {/* TODO: Demo button */}
            {/* <Button zIndex={`100000`}>Demo</Button> */}
          </HStack>
          <Text my={4}>{summary}</Text>
          <Text fontSize='xl' fontWeight='bold'>OVERVIEW</Text>
          <Text my={4}>{overview}</Text>
          <Text fontSize='xl' fontWeight='bold'>TECH USED</Text>
          <Text my={4}>{tech.join(', ')}</Text>
        </Box>
      </Box>
    </Box>
  )
}
