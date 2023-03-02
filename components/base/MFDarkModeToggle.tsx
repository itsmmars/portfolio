import { useColorMode, IconButton, ResponsiveValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'



export const MFDarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label='Toggle Theme'
      variant='custom'
      onClick={toggleColorMode}
    />
  )
}