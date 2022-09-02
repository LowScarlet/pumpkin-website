/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './Community.module.css'
import Discord_Embed from '../../components/discord_embed'
import { motion } from 'framer-motion'

const Community: NextPage = () => {
  return (
    <>
    <Head>
        <title>Community</title>
    </Head>
    <Layout>
    <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
        <div className="container py-4">
            <div className="col-md-6 px-0">
                <h1 className="display-4">
                    Pumpkin Project Community
                </h1>
                <p className="lead my-3 text-white-50">
                    Join the Pumpkin Project to access features like Events, Guilds and Parties!
                </p>
            </div>
        </div>
    </section>
    <section className='bg-wool-dark'>
        <Discord_Embed/>
        <div className="container py-2">
            <div className="py-3 row g-4">
                <div className="col-sm">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <div className={`card h-100 text-white bg-dark`}>
                        <div className={`${styles['featured-banner']} py-5`} style={{['background-image' as any]: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.4)), url('static/images/apps/community/event-bg.jpg')"}}/>
                        <div className="card-body">
                            <strong className="d-inline-block mb-2 text-primary">
                                Featured
                            </strong>
                            <h3 className="py-2 mb-0">
                                <img className="mx-3" src="/static/images/navbar/event_logo.png" width="50" height="50" alt=""/>
                                <strong className="featured-title">Event</strong>
                            </h3>
                            <p className="pb-2 card-text mb-auto text-muted">
                                Join and complete the available events and get attractive prizes!
                            </p>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <div className="col-sm">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <div className={`card h-100 text-white bg-dark`}>
                        <div className={`${styles['featured-banner']} py-5`} style={{['background-image' as any]: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.4)), url('static/images/apps/community/guild-bg.jpg')"}}/>
                        <div className="card-body">
                            <strong className="d-inline-block mb-2 text-primary">
                                Guild & Parties
                            </strong>
                            <h3 className="py-2 mb-0">
                                <img className="mx-3" src="/static/images/navbar/guild_logo.png" width="50" height="50" alt=""/>
                                <strong className="featured-title">Guild</strong>
                            </h3>
                            <p className="pb-2 card-text mb-auto text-muted">
                                Join or create a Guild, Compete with other Guilds to become one of the Top 3 Guilds!
                            </p>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <div className="col-sm">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <div className={`card h-100 text-white bg-dark`}>
                        <div className={`${styles['featured-banner']} py-5`} style={{['background-image' as any]: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.4)), url('static/images/apps/community/parties-bg.jpg')"}}/>
                        <div className="card-body">
                            <strong className="d-inline-block mb-2 text-primary">
                                Guild & Parties
                            </strong>
                            <h3 className="py-2 mb-0">
                                <img className="mx-3" src="/static/images/navbar/parties_logo.png" width="50" height="50" alt=""/>
                                <strong className="featured-title">Event</strong>
                            </h3>
                            <p className="pb-2 card-text mb-auto text-muted">
                                Mabar with your friends will be very easy with the Parties feature!
                            </p>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    </Layout>
    </>
  )
}

export default Community
