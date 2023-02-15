import { extendTheme } from '@chakra-ui/react'
import { 
  Comfortaa,
} from '@next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })

const theme = extendTheme({
  colors: {
    red: `#e30613`
  },
  fonts: {
    heading: comfortaa.style.fontFamily,
    body: comfortaa.style.fontFamily,

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