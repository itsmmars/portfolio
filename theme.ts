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
      '.svg-filter': {
        filter: `invert(93%) sepia(99%) saturate(1%) hue-rotate(222deg) brightness(106%) contrast(100%)`
      }
    }
  }
})

export default theme