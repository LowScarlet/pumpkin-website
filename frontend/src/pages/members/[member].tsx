/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useSWR from 'swr'
import { send_toast } from '../../components/customToast'
import Layout from '../../components/layout'
import { FETCH_FAIL } from '../../components/redux/messages'
import Basic_Card from './content/member/basic_card'
import Link_Acc_Card from './content/member/link_acc_card'
import Money_Card from './content/member/money_card'
import Stats_Card from './content/member/stats_card'
import styles from './Style.module.css'

const Main = (props: any) => {
  // Initial setup
  const router = useRouter()

  const { member } = router.query

  const [fetchingLoading, setFetchingLoading] = useState(true)
  const [isSelf, setIsSelf] = useState(false)
  const [memberData, setMemberData] = useState<any>(null)
  const [member_DiscordData, setMember_DiscordData] = useState<any>(null)

  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
  const user_data = useSelector((state: any) => state.auth.user)

  const fetcher = async (...args: any) => {
    try {
      const res = await fetch(args, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()

      if (res.status === 200) {
        setMemberData({ user: data.user, profile: data.profile })
        setMember_DiscordData(data.discord_account)
      }
    } catch {
      send_toast('error', FETCH_FAIL)
    }
    setFetchingLoading(false)
  }

  useSWR(`/api/members/${member}`, member ? (fetcher) : (() => { }))

  useEffect(() => {
    if (isAuthenticated && user_data) {
      setIsSelf(user_data.user.username == member)
    } else {
      setIsSelf(false)
    }
  }, [isAuthenticated, member, user_data])

  if (!member || fetchingLoading) {
    return (<>
      <Head>
        <title>{member ? `Member - ${member}` : 'Member'}</title>
      </Head>
      <Layout>
        <section style={{ backgroundColor: '#bfccd4' }}>
          <div className='container-sm py-4'>
            <div className="row">
              <div className="col-xl-5">
                <div className='col mb-3'>
                  <Basic_Card />
                </div>
                <div className='col'>
                  <Stats_Card />
                </div>
              </div>
              <div className="col">
                <div className="col mt-3 mt-lg-0 mb-3">
                  <Link_Acc_Card />
                </div>
                <div className="col">
                  <Money_Card />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>)
  }

  if (!fetchingLoading && !memberData) {
    return (<>
      <Head>
        <title>404 - Member Not Found</title>
      </Head>
    </>)
  }

  const sharing_props = { memberData, setMemberData, member_DiscordData, setMember_DiscordData, fetchingLoading, isSelf }

  // Here we go
  return (<>
    <Head>
      <title>{member ? `Member - ${member}` : 'Member'}</title>
    </Head>
    <Layout>
      <section className={`${styles['bg']}`}>
        <div className='container-sm py-4'>
          <div className="row">
            <div className="col-xl-5">
              <div className='col mb-3'>
                <Basic_Card {...sharing_props} />
              </div>
              <div className='col'>
                <Stats_Card {...sharing_props} />
              </div>
            </div>
            <div className="col">
              <div className="col mt-3 mt-lg-0 mb-3">
                <Link_Acc_Card {...sharing_props} />
              </div>
              <div className="col">
                <Money_Card {...sharing_props} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>)
}

export default Main