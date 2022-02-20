import '../styles/globals.css'

import siteConfig from '../data/siteConfig'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteConfig.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
