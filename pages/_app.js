import { GridThemeProvider } from 'styled-bootstrap-grid'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from '@/lib/contextProvider'

import { fonts } from './styles'
import './styles.css'

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 15,
    maxWidth: {
      // defaults below
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
}

const styledTheme = {
  palette: {
    negative: {
      white: '#FFFFFF',
      black: '#000000',
    },
    positive: {
      pink: {
        light: '#FFBFDE',
        default: '#FF4DA3',
        dark: '#9C3165',
      },
      blue: {
        light: '#BDD2FF',
        default: '#1F69FF',
        dark: '#26488C',
      },
      yellow: '#FFEE66',
      green: {
        light: '#91E3EF',
        default: '#24818F',
        dark: '#103E45',
      },
    },
  },
}

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <style jsx global>
            {fonts}
          </style>
          <Component {...pageProps} />
        </GridThemeProvider>
      </ThemeProvider>
    </ContextProvider>
  )
}
