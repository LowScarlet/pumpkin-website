/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Discord_Embed from '../components/discord_embed'
import Layout from '../components/layout'
import styles from './Index.module.css'

const Index: NextPage = (props: any) => {
    // Check is authenticated or not
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
    // Get User data as json
    const user_data = useSelector((state: any) => state.auth.user?.data)

    return (
        <>
            <Head>
                <title>Welcome to Pumpkin Project</title>
            </Head>
            <Layout>
                <header className="bg-black">
                    <div className={`${styles['welcome-header']} container-sm`}>
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="p-5 my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2 letterspacing-2">
                                        Welcome to<br />
                                        <span>Pumpkin Project</span>
                                    </h1>
                                    <p className="lead fw-normal text-white-50 mb-4">
                                        {
                                            !isAuthenticated ? (
                                                <>
                                                    Be a part of the Pumpkin Project family by signing up to become our member!
                                                </>
                                            ) : (
                                                <>
                                                    {user_data?.user.username}, You are currently a member of the Pumpkin Project. Use all services wisely!
                                                </>
                                            )
                                        }
                                    </p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        {
                                            !isAuthenticated ? (
                                                <motion.button
                                                    className='btn btn-primary btn-lg px-4 me-sm-3'
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                >
                                                    <Link href="/auth/login">
                                                        <a className="text-reset">
                                                            Join Now!
                                                        </a>
                                                    </Link>
                                                </motion.button>
                                            ) : (
                                                <motion.button
                                                    className='btn btn-primary btn-lg px-4 me-sm-3'
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                >
                                                    <Link href="/account">
                                                        <a className="text-reset">
                                                            My Account
                                                        </a>
                                                    </Link>
                                                </motion.button>
                                            )
                                        }
                                        <motion.button
                                            className='btn btn-outline-light btn-lg px-4'
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Link href="/community">
                                                <a className="text-reset">
                                                    Community
                                                </a>
                                            </Link>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 text-center"></div>
                        </div>
                    </div>
                </header>
                <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
                    <div className="container py-5 text-center">
                        <div className='px-sm-5'>
                            <h1 className="display-4">
                                About Us
                            </h1>
                            <p className="lead my-3 text-white-50">
                                Pumpkin Project is an internet community, We aim to be a place to gather and have fun with other members.
                                To make this happen we have a VISION and MISSION that we must complete!
                            </p>
                            <span className='px-2'>
                                <motion.button
                                    className='btn btn-outline-primary'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link href="/about">
                                        <a className='text-reset'>Read More</a>
                                    </Link>
                                </motion.button>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="py-3 bg-wool-dark" id="features">
                    <div className="container px-5 my-5">
                        <div className="row gx-5">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h2 className="fw-bolder mb-0">
                                    Suitable for those of you who have the following professions
                                </h2>
                            </div>
                            <div className="col-lg-8">
                                <div className="row gx-5 row-cols-1 row-cols-md-2">
                                    <div className="col mb-5 h-100">
                                        <div className='bg-primary py-2 mb-2'>
                                            <h2 className="h5 mb-0">
                                                <i className="px-3 bi bi-code-square"></i>Programer
                                            </h2>
                                        </div>
                                        <p className="mb-0">
                                            Are you a programmer and need help? we have many members who have expertise in coding interact with them!
                                        </p>
                                    </div>
                                    <div className="col mb-5 h-100">
                                        <div className='bg-primary py-2 mb-2'>
                                            <h2 className="h5 mb-0">
                                                <i className="px-3 bi bi-controller"></i>Gamer
                                            </h2>
                                        </div>
                                        <p className="mb-0">
                                            Who doesn't love games? all the members here of course love the game!
                                        </p>
                                    </div>
                                    <div className="col mb-5 mb-md-0 h-100">
                                        <div className='bg-primary py-2 mb-2'>
                                            <h2 className="h5 mb-0">
                                                <i className="px-3 bi bi-palette2"></i>Designer
                                            </h2>
                                        </div>
                                        <p className="mb-0">
                                            Are you a minecraft builder? then you have talent in minecraft building designer!
                                        </p>
                                    </div>
                                    <div className="col h-100">
                                        <div className='bg-primary py-2 mb-2'>
                                            <h2 className="h5 mb-0">
                                                <i className="px-3 bi bi-youtube"></i>Content Creator
                                            </h2>
                                        </div>
                                        <p className="mb-0">
                                            Generous content creators, definitely join us!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Discord_Embed />
                </section>
                <section className='bg-black'>
                    <div className={`bg-maintenance p-4 p-md-5 text-bg-dark text-center`}>
                        <h1 className="display-4 text-warning">
                            <i className="px-3 bi bi-exclamation-triangle"></i>Warning<i className="px-3 bi bi-exclamation-triangle"></i>
                        </h1>
                        <p className="lead my-3 text-white-50">
                            This website is under development, Pages may still be static!
                        </p>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Index
