import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import LayoutWrapper from '../components/LayoutWrapper'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '../data/siteMetadata'

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme={siteMetadata.theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default Application
