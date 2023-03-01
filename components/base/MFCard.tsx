import { ProjProps } from './types'
import { 
  Text,
  Image,
  Box,
  HStack,
  Button,
  Fade,
  Link,
  useColorModeValue
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
  const bg = useColorModeValue('white', 'black')
  const plutusLogo = useColorModeValue(
    `/logo_plutusdao.svg`, 
    `/logo_plutusdao_alpha.svg`
  )
  const gradient = useColorModeValue(
    'linear-gradient(to bottom, transparent 50%, white 100%)', 
    'linear-gradient(to bottom, transparent 50%, black 100%)'
  )
  const responsiveImg = () => {
    switch (name) {
      case ('CUI Website'):
        return <Image pt={4} src={`/responsive-cui-virtual-tour.png`} alt={alt} />
      case ('CUI Virtual Tour'):
        return <Image pt={4} src={`/responsive-cui-virtual-tour.png`} alt={alt} />
        case 'Journeys Counseling':
        return <Image pt={4} src={`/responsive-journeys-counseling.png`} alt={alt} />
      default:
        break
    }
  }


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
            bg={gradient}
          >
            <Text
              ml={[4, 6]}
              fontSize={['2.5em', '3.675em']}
              position='absolute'
              color={useColorModeValue(`black`, `white`)}
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
          bgColor={bg}
          boxShadow='md'
          p={4}
          overflow={'auto'}
        >
          <Box>
            <Image
              maxW={'240px'} 
              mx={'auto'} 
              my={4} 
              src={name === 'PlutusDAO' ? plutusLogo : logo} 
              alt={alt}
              className={useColorModeValue(
                (filter ? `svg-filter` : ``), 
                (filter ? `` : `svg-filter`)
                )} 
              />
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
            {responsiveImg()}
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}
