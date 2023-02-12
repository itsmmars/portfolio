import '@fontsource/inter'
import '@fontsource/montserrat/100.css'
import '@fontsource/babylonica'
import '@fontsource/pacifico'
import '@fontsource/caveat'
import '@fontsource/comfortaa'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
