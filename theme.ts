import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    red: `#e30613`
  },
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,

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
      },
      '.*': {
        outline: `1px dashed red`
      }
    }
  }
})

export default theme