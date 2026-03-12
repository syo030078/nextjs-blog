import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css'
import theme from '@/lib/theme'
import { ColorModeSync } from '@/hooks/useColorModeSync'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSync />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
