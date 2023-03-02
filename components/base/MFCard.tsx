import { ProjProps } from './types'
import { 
  Text,
  Image,
  Box,
  HStack,
  Button,
  Fade,
  Link,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
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
  alt,
  url,
  imgUrl,
  summary,
  overview,
  tech,
  index,
  flippedIndex,
  handleFlipCard,
  delay,
  preview
}: MFCardProps) => {
  const bg = useColorModeValue('white', '#222222')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cmLogo = useColorModeValue(
    logo, 
    logo.replace('.svg', '_alpha.svg')
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
            alt={name}
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
              fontSize={['2.5em', '2.5em','3.675em']}
              position='absolute'
              color={useColorModeValue(`black`, `white`)}
              bottom='0'
              left='0'
              noOfLines={1}>
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
              src={name === 'Journeys Counseling' ? logo : cmLogo} 
              alt={name}
              />
            <HStack justifyContent={`space-between`}>
              <Text fontSize='xl' fontWeight='bold'>SUMMARY</Text>
              <HStack>
                {preview ? (
                  <Button onClick={onOpen} variant='custom'>
                    Preview
                  </Button>
                ) : (
                  ''
                )}
                <Link 
                  isExternal
                  as={NextLink} 
                  href={url}
                  _hover={{ textDecoration: `none` }} >
                    <Button variant='custom'>Check It Out</Button>                
                </Link>
              </HStack>
            </HStack>
            <Text my={4}>{summary}</Text>
            <Text fontSize='xl' fontWeight='bold'>OVERVIEW</Text>
            <Text my={4}>{overview}</Text>
            <Text fontSize='xl' fontWeight='bold'>TECH USED</Text>
            <Text my={4}>{tech.join(', ')}</Text>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
              <ModalOverlay />
              <ModalContent backgroundColor={bg}>
                <ModalHeader>{name} - Responsive Preview</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  {responsiveImg()}
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}
