import { Box, Flex, Text } from '@chakra-ui/react'
import { MFTextCycle } from './MFTextCycle'

interface HeroProps {
  cycleText: string[]
}

export const MFHeroText = ({
  cycleText
}: HeroProps) => {
  return (
    <Flex 
      h={`100vh`}
      flexDir={`column`} 
      w={[`300px`, `unset`]}
      textAlign={`center`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Box textAlign={`center`}>
        <Text 
          fontSize={[`9em`, `16em`]}
          lineHeight={`0.5em`}
          style={{ fontSmooth: `always`}}
        >
          mike
        </Text>
        <Text 
          letterSpacing={`0.5em`}
          textIndent={`0.5em`}
          fontSize={[`2em`, `3.675em`]}
        >
          FILICETTI
        </Text>
        <MFTextCycle
          text={cycleText}
          textAlign={`center`} 
          fontSize={[`1.05em`, `1.8em`]} 
          letterSpacing={`0.33em`}
          textIndent={`0.33em`} />
        <Flex 
          mt={[`3rem`, `none`]} 
          w={[`300px`, `unset`]}
        >
          <Text 
            fontWeight={`700`} 
            fontSize={[`1.3em`, `1.8em`]}
            color={`red.900`}
            m={`auto`}>
            Crafting seamless UI/UX solutions to drive your business forward.
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}