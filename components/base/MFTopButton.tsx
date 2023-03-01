import { useState, useEffect } from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'

const MFTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    const threshold = 100
    setShowButton(currentPosition > threshold)
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <IconButton
      aria-label='Scroll to top'
      icon={<FaArrowUp />}
      onClick={handleClick}
      position='fixed'
      bottom={4}
      right={4}
      backgroundColor='red.900'
      _hover={{ backgroundColor: `red.800`}}
      color='white'
      opacity={showButton ? 1 : 0}
      transition='opacity 0.2s'
    />
  )
}

export default MFTopButton
