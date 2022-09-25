/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './Guild.module.css'
import { motion } from "framer-motion"

const Guilds: NextPage = () => {
    return (
        <>
            <Head>
                <title>Guilds</title>
            </Head>
            <Layout>
                <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
                    <div className="container py-4 text-center">
                        <h1 className="display-4">
                            The Guild
                        </h1>
                        <p className="lead my-3 text-white-50">
                            Guild is a collection or group of people who organize to play, create, and even share data together, or in general can be called a community, faction, or clan.
                        </p>
                    </div>
                </section>

                <section className="bg-wool-dark py-5">
                    <div className="container-sm my-5">
                        <div className="text-center">
                            <h2 className="fw-bolder">Your Guild</h2>
                            <p className="lead fw-normal text-muted mb-5">
                                Check out the guild's profile!
                            </p>
                        </div>
                        <div className={`${styles['member-guild-bg']} p-4 mb-5 text-bg-dark`}>
                            <div className="py-2 row align-items-center">
                                <div className="col-md-6 px-0">
                                    <div className='py-2 px-3'>
                                        <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                        <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                        <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                    </div>
                                    <h1 className="display-4">
                                        <span className='px-3'>
                                            <img className='border' src="/static/images/other/moon.png" width="" height="75" alt="" />
                                        </span>
                                        HoneyMoon
                                    </h1>
                                    <div>
                                        <p className={`${styles['member-guild-description']} px-3`}>
                                            Guild ini merupakan guild khusus para staff Pumpkin Project!
                                        </p>
                                    </div>
                                    <div className='px-1'>
                                        <span className='px-2'>
                                            <a href="" className='btn btn-primary'>View Guild</a>
                                        </span>
                                        <span className='px-2'>
                                            <a href="" className='btn btn-outline-secondary'>Invite Member</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6 px-0">
                                    <div className='py-3'>
                                        <h2 className="fw-bolder"><i className="px-1 bi bi-people-fill"></i>Member List</h2>
                                        <ol className={`${styles['member-guild-list']} py-2 list-group shadow-sm`}>
                                            <li className="list-group-item d-flex justify-content-between align-items-start text-white bg-transparent">
                                                <img className="me-3" width="50" height="50" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Low_Scarlet
                                                    </div>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Rank: Wooden</span>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Level: 32</span>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start text-white bg-transparent">
                                                <img className="me-3" width="50" height="50" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Low_Scarlet
                                                    </div>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Rank: Wooden</span>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Level: 32</span>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start text-white bg-transparent">
                                                <img className="me-3" width="50" height="50" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Low_Scarlet
                                                    </div>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Rank: Wooden</span>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Level: 32</span>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start text-white bg-transparent">
                                                <img className="me-3" width="50" height="50" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Low_Scarlet
                                                    </div>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Rank: Wooden</span>
                                                    <span className="badge bg-secondary bg-gradient rounded-pill mb-2">Level: 32</span>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 text-center'>
                                <span className='px-2'><i className="text-primary px-2 bi bi-circle-fill small"></i>12 Members</span>
                                <span className='px-2'><i className="text-success px-2 bi bi-circle-fill small"></i>3 Staff</span>
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <div className="text-center">
                                    <h2 className="fw-bolder">Top 3 Guild</h2>
                                    <p className="lead fw-normal text-muted mb-5">
                                        Compete for the top Guild title.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row gx-5">
                            <div className="col-lg-4 mb-5">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <div className="card h-100 shadow border-0 bg-dark">
                                        <div className={`${styles['top-guild-bg']}`}>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='py-2'>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                            </div>
                                            <a className="text-decoration-none stretched-link text-white" href="#!"><div className="h5 card-title mb-3">
                                                <i className="bi bi-award-fill"></i>#1 FPI
                                            </div></a>
                                            <p className="card-text mb-0 text-muted">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                        </div>
                                        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                            <div className="d-flex align-items-end justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                    <div className="small">
                                                        <div className="fw-bold">FPI</div>
                                                        <div className="text-muted">
                                                            32 Members - 75k G-Points
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <div className="card h-100 shadow border-0 bg-dark">
                                        <div className={`${styles['top-guild-bg']}`}>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='py-2'>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                            </div>
                                            <a className="text-decoration-none stretched-link text-white" href="#!"><div className="h5 card-title mb-3">
                                                <i className="bi bi-award-fill"></i>#1 FPI
                                            </div></a>
                                            <p className="card-text mb-0 text-muted">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                        </div>
                                        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                            <div className="d-flex align-items-end justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                    <div className="small">
                                                        <div className="fw-bold">FPI</div>
                                                        <div className="text-muted">
                                                            32 Members - 75k G-Points
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <div className="card h-100 shadow border-0 bg-dark">
                                        <div className={`${styles['top-guild-bg']}`}>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='py-2'>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                                <span className='px-1'><span className="badge bg-primary bg-gradient rounded-pill mb-2">Gamer</span></span>
                                            </div>
                                            <a className="text-decoration-none stretched-link text-white" href="#!"><div className="h5 card-title mb-3">
                                                <i className="bi bi-award-fill"></i>#1 FPI
                                            </div></a>
                                            <p className="card-text mb-0 text-muted">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                        </div>
                                        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                            <div className="d-flex align-items-end justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                    <div className="small">
                                                        <div className="fw-bold">FPI</div>
                                                        <div className="text-muted">
                                                            32 Members - 75k G-Points
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Guilds
