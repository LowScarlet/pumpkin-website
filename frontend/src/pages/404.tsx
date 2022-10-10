/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import styles from './Style.module.css'

const Main = () => {
    // Initial setup
    const data = useSelector((state:any) => state.global.data)

    // Skeleton view
    if (!data) {
        return (<>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            <Layout>
                <section className={`p-4 p-md-5`} style={{backgroundColor: '#1e1729'}}>
                    <div className="container py-4 text-center">
                        <div className='px-sm-5'>
                            <h1 className="display-4">
                                <span className='placeholder bg-light col-8'></span>
                            </h1>
                            <p className="lead my-3 text-white-50">
                            <span className='placeholder bg-secondary col-12'></span>
                            <span className='placeholder bg-secondary col-8'></span>
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
    
    // Here we go
    return (<>
        <Head>
            <title>404 - Not Found</title>
        </Head>
        <Layout>
            <section className={`${styles['heroes-404']} p-4 p-md-5 text-bg-dark`}>
                <div className="container py-4 text-center">
                    <div className='px-sm-5'>
                        <h1 className="display-4">
                            404 - Page not found
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
    </>)
}

export default Main