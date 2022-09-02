/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './Parties.module.css'

const Parties: NextPage = () => {
  return (
    <>
    <Head>
        <title>Parties</title>
    </Head>
    <Layout>
    <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
        <div className="container py-4 text-center">
            <h1 className="display-4">
                The Parties
            </h1>
            <p className="lead my-3 text-white-50">
                Parties or commonly called Party is a term used to invite other gamers to join a group with the same goal, having fun.
            </p>
        </div>
    </section>

    <section className="bg-wool-dark py-5">
        <div className="container-sm my-5">
            <div className="text-center">
                <h2 className="fw-bolder">Your Parties</h2>
                <p className="lead fw-normal text-muted mb-5">
                    You can join up to 3 parties!
                </p>
            </div>
            <div className="nav nav-pills mb-3 d-flex justify-content-center" role="tablist">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <span className='pe-3'>
                        <img className='border' src="/static/images/other/moon.png" width="40" height="40" alt="" />
                    </span>
                    HoneyMoon
                </button>
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    <span className='pe-3'>
                        <img className='border' src="/static/images/other/moon.png" width="40" height="40" alt="" />
                    </span>
                    FPI
                </button>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
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
                                        <img className='border' src="/static/images/other/moon.png" width="75" height="75" alt="" />
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
                                    <h2 className="fw-bolder"><i className="px-3 bi bi-people-fill"></i>Member List</h2>
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
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
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
                                        <img className='border' src="/static/images/other/moon.png" width="75" height="75" alt="" />
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
                                    <h2 className="fw-bolder"><i className="px-3 bi bi-people-fill"></i>Member List</h2>
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

                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>3</div>
                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>4</div>
            </div>
            <div className="text-center">
                <h2 className="fw-bolder">Top 3 Parties</h2>
                <p className="lead fw-normal text-muted mb-5">
                    Compete for the top Parties title.
                </p>
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

export default Parties
