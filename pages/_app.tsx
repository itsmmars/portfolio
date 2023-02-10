import '@fontsource/poppins'
import '@fontsource/montserrat'
import '@fontsource/babylonica'
import '@fontsource/pacifico'
import '@fontsource/caveat'
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
