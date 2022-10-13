/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useSWR from 'swr'
import { send_toast } from '../../../components/customToast'
import Layout from '../../../components/layout'
import { FETCH_FAIL } from '../../../components/redux/messages'
import Content from './content/main'

const Main = (props: any) => {
  // Initial setup
  const router = useRouter()
  const { code } = router.query
  const [fetchingLoading, setFetchingLoading] = useState(true)
  const [payload, setpayload] = useState<any>(null)
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const fetcher = async (...args: any) => {
    try {
      const res = await fetch(args, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()

      if (res.status === 200) {
        setpayload(data)
      }
    } catch {
      send_toast('error', FETCH_FAIL)
    }
    setFetchingLoading(false)
  }

  useSWR(`/api/account/third_party/discord?code=${code ? code : ''}`, fetcher)

  // Here we go
  return (<>
    <Content code={code} fetchingLoading={fetchingLoading} payload={payload} isAuthenticated={isAuthenticated} />
  </>)
}

export default Main