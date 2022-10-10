import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import type { AppProps } from 'next/app'
import Head from "next/head"
import { Provider } from "react-redux"
import Init from "../components/layout/init"
import { useStore } from "../store"
import '../styles/scss/global.scss'
import '../styles/css/global.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import { useEffect } from "react"

function Main({ Component, pageProps }: AppProps) {
  // Initial setup
  const store = useStore(pageProps.initialReduxState)
  
  // useEffect
  useEffect(() => {
      require('bootstrap/dist/js/bootstrap')
  }, [])

  // Here we go
  return (<>
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/static/logo/brand-logo.ico" />
      </Head>
      <Init>
        <ToastContainer />
        <Component {...pageProps}/>
      </Init>
    </Provider>
  </>)
}
export default Main
