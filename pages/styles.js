import { Roboto, Roboto_Condensed } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const robotoCondensed = Roboto_Condensed({
  weight: ['700'],
  subsets: ['latin'],
})

export const fonts = `
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
  html,
  .roboto {
    font-family: ${roboto.style.fontFamily};
  }
  h1,
  h2,
  h3,
  .robotoCondensed {
    font-family: ${robotoCondensed.style.fontFamily};
  }
`
