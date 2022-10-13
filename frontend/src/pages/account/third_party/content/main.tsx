/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Layout from "../../../../components/layout";
import styles from "../../Style.module.css"

// import styles from '../../Style.module.css'

export default function Main(props: any) {
    if (props.fetchingLoading || !props.code || !props.payload || !props.isAuthenticated) {
        return (<>
            <Head>
                <title>Third Party Account - Discord</title>
            </Head>
            <Layout>
                <section className={`p-4 p-md-5`} style={{backgroundColor: 'black'}}>
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

    if (props.isAuthenticated == false) {
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

    setTimeout("window.close()",5000)

    return (<>
        <Head>
            <title>Third Party Account - Discord</title>
        </Head>
        <Layout>
            <section className={`${styles['bg-third-party']} p-4 p-md-5 text-bg-dark`}>
                <div className="container py-4 text-center">
                    <div className='px-sm-5'>
                        <h1 className="display-4">
                            The process was successful!
                        </h1>
                        <p className="lead my-3 text-white-50">
                            {props.payload.detail}
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