/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './Members.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Error_1 from '../../components/error/error_1'
import Basic_Card from './content/member/basic_card'
import Rank_Card from './content/member/rank_card'
import Stats_Card from './content/member/stats_card'
import Link_Acc_Card from './content/member/link_acc_card'
import Money_Card from './content/member/money_card'
import { useSelector } from 'react-redux'

const Main: NextPage = () => {
  // Init
  const router = useRouter()
  const { member } = router.query

  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  // Get user data as json
  const user_data = useSelector((state:any) => state.auth.user?.data)

  // Initial useState
  const [data, setData] = useState(null)
  const [isSelf, setIsSelf] = useState(false)
  const [isLoading, setLoading] = useState(true)

  // Fetch Member Data
  useEffect(() => {
    if (user_data && member && user_data.user.username === member) {
      setIsSelf(true)
    }
    if (member && !isSelf) {
      fetch(`/api/members/${member}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data)
          setLoading(false)
        })
    } else {
      if (isAuthenticated && user_data) {
        setData(user_data)
        setLoading(false)
      }
    }
  }, [isAuthenticated, isSelf, member, user_data])

  // Condition after loading finish and there no data will render error template
  if (!isLoading && !data) return <Error_1 />

  // Here we go
  return (
    <>
      <Head>
        {
          member ? (
            <title>Members - {member}</title>
          ) : (
            <title>Members</title>
          )
        }
      </Head>
      <Layout>
        <section className={`${styles['bg']}`}>
          <div className='container-sm py-4'>
            <div className="row">
              <div className="col-xl-5">
                <Basic_Card isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} isSelf={isSelf}/>
                <div className="col my-4">
                  <Rank_Card isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} isSelf={isSelf} />
                </div>
              </div>
              <div className="col">
                <div className="col">
                  <Stats_Card isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} isSelf={isSelf} />
                </div>
                <div className="col mt-4">
                  <Link_Acc_Card isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} isSelf={isSelf} />
                </div>
                <div className="col mt-4">
                  <Money_Card isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} isSelf={isSelf} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Main