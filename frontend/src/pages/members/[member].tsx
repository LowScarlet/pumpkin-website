/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { post } from 'jquery'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useSWR from 'swr'
import { BACKEND_URL } from '../../components/config'
import { send_toast } from '../../components/customToast'
import Layout from '../../components/layout'
import { FETCH_FAIL } from '../../components/redux/messages'
import Basic_Card from './content/member/basic_card'
import Link_Acc_Card from './content/member/link_acc_card'
import Money_Card from './content/member/money_card'
import Stats_Card from './content/member/stats_card'
import Rank_Card from './content/member/rank_card'
import Guild_Parties_Card from './content/member/guild_parties'
import styles from './Style.module.css'

const Main = (props: any) => {
  // Initial setup
  const router = useRouter()

  const { member } = router.query
  console.log(router)

  const [fetchingLoading, setFetchingLoading] = useState(true)
  const [isSelf, setIsSelf] = useState(false)
  const [memberData, setMemberData] = useState<any>(null)
  const [member_DiscordData, setMember_DiscordData] = useState<any>(null)

  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
  const user_data = useSelector((state: any) => state.auth.user)

  const { rank_list, benefits_list } = props

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
                <div className='col mb-3'>
                  <Stats_Card />
                </div>
                <div className='col'>
                  <Rank_Card />
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
      <Layout>
        <section className={`${styles['heroes']}`}>
          <div className='container-sm p-5 text-center text-light' style={{ minHeight: '500px' }}>
            <img src="/static/images/apps/members/member-not-found.png" alt="" width={180} />
            <h4><strong>
              The member you wanted to see was not found!
            </strong></h4>
            <p className='text-muted'>
              You may have mistyped the username or maybe the member is no longer a member of the pumpkin project
            </p>
            <span className='px-2'>
              <Link href="/members">
                <a className='btn btn-outline-primary'>Find more members</a>
              </Link>
            </span>
          </div>
        </section>
      </Layout>
    </>)
  }

  const sharing_props = { memberData, setMemberData, member_DiscordData, setMember_DiscordData, fetchingLoading, isSelf, rank_list, benefits_list }

  // Here we go
  return (<>
    <Head>
      <title>{member ? `Member - ${member}` : 'Member'}</title>
    </Head>
    <Layout>
      <section className={`${styles['bg']}`}>
        <div className='container-sm py-4'>
          <div className="row">
            <div className="col-xl-5 mb-3">
              <div className='col mb-3'>
                <Basic_Card {...sharing_props} />
              </div>
              {/* <div className='col'>
                <Stats_Card {...sharing_props} />
              </div> */}
            </div>
            <div className="col">
              {/* <div className="col mb-3">
                <Link_Acc_Card {...sharing_props} />
              </div> */}

              <div className="col mb-3">
                {/* <div className='card shadow'>
                  <div className="card-body">
                    <h5 className="card-title"><i className="px-2 bi bi-box"></i>Account Rank & Guild</h5>
                    <div className="row row-cols-1 row-cols-md-2 gx-3">
                      <div className="col mb-3">
                        <Rank_Card {...sharing_props} />
                      </div>
                      <div className="col">
                        <Rank_Card {...sharing_props} />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="col">
                <Money_Card {...sharing_props} />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>)
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps() {
  const res = await fetch(`${BACKEND_URL}/account/ranks`)
  const rank_list = await res.json()

  const res2 = await fetch(`${BACKEND_URL}/account/benefits`)
  const benefits_list = await res2.json()

  return {
    props: {
      rank_list,
      benefits_list
    },
  }
}

export default Main