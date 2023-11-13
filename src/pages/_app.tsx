import { CartContextProvider } from '@/contexts/Cart'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
