import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        height: `100%`,
        color: `#EAEAEA`,
        backgroundColor: `#111`,
        minHeight: `auto`,
        marginRight: `0`
      },
    }
  }
})

export default theme