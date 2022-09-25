/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import styles from './UnderConstruction.module.css'

export default function Main() {
    return (
        <>
        <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
            <div className="container py-4 text-center">
                <div className='px-sm-5'>
                    <h1 className="display-4">
                        Pages under construction
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
        </>
    )
}