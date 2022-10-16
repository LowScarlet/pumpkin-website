/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import useSWR from 'swr'
import { send_toast } from '../../../components/customToast'
import Layout from '../../../components/layout'
import { FETCH_FAIL } from '../../../components/redux/messages'
import styles from "../Style.module.css"

const Main = (props: any) => {
  // Initial setup
  const router = useRouter()
  const { code } = router.query
  const [fetchingLoading, setFetchingLoading] = useState(true)
  const [payload, setpayload] = useState<any>(null)
  const [payloadStatus, setpayloadStatus] = useState(0)
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const fetcher = async (...args: any) => {
    if (!code) return

    try {
      const res = await fetch(args, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()

      setpayload(data)
      setpayloadStatus(res.status)
    } catch {
      send_toast('error', FETCH_FAIL)
    }
    setFetchingLoading(false)
  }

  useSWR(`/api/account/third_party/discord?code=${code ? code : ''}`, fetcher)

  if (fetchingLoading) {
    return (<>
      <Head>
        <title>Third Party Account - Discord</title>
      </Head>
      <Layout>
        <section className={`p-4 p-md-5`} style={{ backgroundColor: 'black' }}>
          <div className="container py-4 text-center">
            <div className='px-sm-5 placeholder-glow'>
              <h1 className="display-4">
                <span className="bg-light placeholder col-12"></span>
              </h1>
              <p className="lead my-3 text-white-50">
                <span className="bg-secondary placeholder col-6"></span>
              </p>
              <span className='px-2'>
                <a href='#' className='btn btn-outline-primary disabled placeholder w-25'></a>
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>)
  }

  if (isAuthenticated == false) {
    return (<>
      <Head>
        <title>Third Party Account - Discord</title>
      </Head>
      <Layout>
        <section className={`${styles['bg-third-party']} p-4 p-md-5 text-bg-dark`}>
          <div className="container py-5 text-center">
            <div className='px-sm-5'>
              <h1 className="display-4">
                The event could not be processed!
              </h1>
              <p className="lead my-3 text-white-50">
                You must be authenticated first to continue this process!
              </p>
              <span className='px-2'>
                <button onClick={() => window.close()} className='btn btn-outline-primary'>Close window</button>
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>)
  }

  setTimeout("window.close()", 5000)
  return (<>
    <Head>
      <title>Third Party Account - Discord</title>
    </Head>
    <Layout>
      <section className={`${styles['bg-third-party']} p-4 p-md-5 text-bg-dark`}>
        <div className="container py-4 text-center">
          <div className='px-sm-5'>
            <h1 className="display-4">
              {payloadStatus} - The process was successful!
            </h1>
            <p className="lead my-3 text-white-50">
              {payload.detail}
            </p>
            <span className='px-2'>
              <button onClick={() => window.close()} className='btn btn-outline-primary'>Automatically closes in 5 seconds</button>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  </>)
}

export default Main