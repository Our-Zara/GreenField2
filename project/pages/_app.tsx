import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "./signup.css"
import "./login.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
