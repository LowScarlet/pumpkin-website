/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app';
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/global/global.css';
import { useStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  // Initial useState
  const [isLoading, setIsloading] = useState(true)

  // Initial redux
  const store = useStore(pageProps.initialReduxState)

  // User Bootstrap for Styling
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  // Progress Bar
  NProgress.configure({ showSpinner: false })
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start()
  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done()
  })

  return (<>
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/static/logo/brand-logo.ico" />
      </Head>

      <ToastContainer
          hideProgressBar
          position="top-right"
          className="global-toast-container"
          toastClassName="global-toast"
          bodyClassName="global-body-toast"
      />
      
      <Component {...pageProps}/>
    </Provider>
    </>)
}

export default MyApp
