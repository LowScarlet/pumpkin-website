/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Under_Construction from '../components/under_construction'
import styles from './index.module.css'

const Main: NextPage = () => {
  return (
    <>
    <Head>
        <title>404 - Not Found</title>
    </Head>
    <Layout>
        <section className={`${styles['heroes-404']} p-4 p-md-5 text-bg-dark`}>
            <div className="container py-4 text-center">
                <div className='px-sm-5'>
                    <h1 className="display-4">
                        You find astronauts roasting marshmallows
                    </h1>
                    <p className="lead my-3 text-white-50">
                        Sorry, it looks like you can't be here because the page doesn't exist or is under construction, come another time
                    </p>
                    <span className='px-2'>
                        <Link href="/">
                            <a className='btn btn-outline-primary'>Back to Landing Page</a>
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    </Layout>
    </>
  )
}

export default Main