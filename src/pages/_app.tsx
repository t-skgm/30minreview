import { AppProps } from 'next/app'
import Head from 'next/head'
import { consts } from "@/consts"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">{consts.siteTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
