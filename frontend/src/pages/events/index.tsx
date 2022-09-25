/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Under_Construction from '../../components/under_construction'
import styles from './Event.module.css'

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Layout>
        <Under_Construction />
      </Layout>
    </>
  )
}

export default Events
