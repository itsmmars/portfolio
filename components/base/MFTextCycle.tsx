import { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'

interface CycleProps {
  text: string[]
  textAlign?: any
  fontSize: string | string[]
  letterSpacing: string
  textIndent: string
}

export const MFTextCycle: React.FC<CycleProps> = ({
  text,
  textAlign,
  fontSize,
  letterSpacing,
  textIndent
}: CycleProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStringIndex((prevIndex) => (prevIndex + 1) % text.length)
    }, 3000)

    return () => clearInterval(timer)
  })

  return ( 
    <Text 
      textAlign={textAlign} 
      fontSize={fontSize} 
      letterSpacing={letterSpacing}
      textIndent={textIndent}>
        {text[currentStringIndex]}
    </Text> 
  )
}