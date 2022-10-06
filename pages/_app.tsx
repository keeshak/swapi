import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Swapi({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Swapi
