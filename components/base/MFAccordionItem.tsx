import { 
  AccordionPanel, 
  Box,
  Text,
  Stack, 
  StackDivider, 
  List, 
  ListItem, 
  ListIcon,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Icon,
  Link
} from '@chakra-ui/react'
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa'
import NextLink from 'next/link'
import { ExpProps } from './types'

interface MFAccordionProps extends ExpProps {
  index: number
  bg: string
}

export const MFAccordionItem = ({
  name,
  url,
  role,
  start,
  end,
  location,
  summary,
  client,
  overview,
  index,
  bg
}: MFAccordionProps) => {
  return (
    <AccordionItem key={index} backgroundColor={bg}>
      <h2>
        <AccordionButton>
          <Box 
            fontSize={[`1.5em`, `2em`]}
            flex='1' 
            textAlign='left'
            textTransform='uppercase'>
              {name}
            <Link 
              isExternal
              as={NextLink} 
              href={url} 
              textDecoration={`none`}
              >
                <Icon ml='2' pt='2' as={FaExternalLinkAlt} />
            </Link>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Stack 
          divider={<StackDivider />} 
          spacing='4'
          >
          <Box>
            <Text fontSize={`2xl`}>
              {role}
            </Text>
            <Text pt={[``, `2`]} fontSize={[`lg`, `2xl`]}>
              {start} - {end} | {location}
            </Text>
            <Text pt='4'  fontSize={[`lg`, `2xl`]}>
              {summary}
            </Text>
          </Box>
          <Box>
            <Text fontSize={`2xl`}>
              OVERVIEW
            </Text>
            <Text pt='2' fontSize='xl'>
              <Text>
                {client ? client : ``}
              </Text>
              <List spacing={3}>
                {overview.map((o, i) => {
                  return (
                    <ListItem key={i}>
                      <ListIcon as={FaCheck} color='red.900' />
                      {o}
                    </ListItem>
                  )
                })}
              </List>
            </Text>
          </Box>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}