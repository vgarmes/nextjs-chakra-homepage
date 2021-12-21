import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
// import '../styles/globals.css'
//import '../styles/variables.css'
import type { AppProps } from 'next/app'
import theme from '../theme'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
