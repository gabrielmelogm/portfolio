import { Analytics } from "@vercel/analytics/react"

import '../../styles/globals.sass'
import Head from "next/head"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Gabriel Melo | Portfólio</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp