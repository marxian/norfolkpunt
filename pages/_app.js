import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import PlausibleProvider from 'next-plausible'

import '@fontsource/vollkorn/400.css'
import 'react-image-lightbox/style.css'

import theme from '../theme'

const MyApp = (props) => {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <PlausibleProvider domain="norfolkpunt.org" integrity={true}>
      <Head>
        <title>{`Norfolk Punt Owners Association`}</title>
        <meta
          name="Description"
          content="The Norfolk Punt is a performance racing dinghy with a long and fascinating history."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </PlausibleProvider>
  )
}

export default MyApp
