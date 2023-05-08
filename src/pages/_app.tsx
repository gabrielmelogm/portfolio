import { Analytics } from "@vercel/analytics/react"

import '../../styles/globals.sass'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp