import type { AppProps } from 'next/app'
import "./signup.css"
import "./login.css"

import Layout from './component/Layout'
//import "../styles/Layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}