import { extendTheme } from '@chakra-ui/react'
import {  } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    red: {
      100: `#fce6e7`,
      200: `#f9cdd0`,
      300: `#f7b4b8`,
      400: `#f49ba1`,
      500: `#f18389`,
      600: `#ee6a71`,
      700: `#eb515a`,
      800: `#e93842`,
      900: `#e30613`,
    }
  },
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,

  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        // define your custom color scheme for the button
        custom: {
          bg: 'red.900',
          color: 'white',
          _hover: {
            bg: 'red.800',
          },
          _active: {
            bg: 'red.700',
          },
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        height: `100%`,
        overflowY: `scroll`, // always show scrollbars
        overflowX: `hidden`
      },
      heading: {
        color: `red`,
      },
      body: {
        height: `100%`,
        color: `black`,
        backgroundColor: `white`,
        marginRight: `0`,
        display: `flex`,
        flexDirection: `column`
      },
      '.svg-filter': {
        filter: `invert(93%) sepia(99%) saturate(1%) hue-rotate(222deg) brightness(106%) contrast(100%)`
      }
    }
  }
})

export default theme