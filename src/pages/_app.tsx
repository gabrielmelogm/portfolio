import { Box, ChakraProvider } from '@chakra-ui/react'
import '../../styles/globals.sass'
import { theme } from '../../styles/theme'
import { AuthProvider } from '../hooks/useAuth'
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Box backgroundColor="background">
          <Component {...pageProps} />
          <Analytics />
        </Box>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp