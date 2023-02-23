import { useColorMode, IconButton, ResponsiveValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

interface ToggleProps {
  position: any,
  top: number,
  right: number
}

export const MFDarkModeToggle = ({
  position,
  top,
  right
}: ToggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      position={position}
      top={top}
      right={right}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label='Toggle Theme'
      variant='custom'
      onClick={toggleColorMode}
    />
  )
}