/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Navbar({data_api}:any) {
    return (
        <>
        <div className={`${styles['footer']} text-dark bg-light`}>
            <div className="container px-5 text-center">
                <div className="py-5">
                    <h4 className="fw-bolder py-2 text-uppercase">
                        Follow {data_api?.project_name}
                    </h4>
                    <div className="socialmedia-button d-flex justify-content-center">
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-primary'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    borderRadius: "25%"
                                }}
                                whileTap={{
                                  scale: 0.8,
                                  rotate: -360,
                                  borderRadius: "100%"
                                }}
                            >
                                <Link href={`${data_api?.social_media?.youtube}`}>
                                    <img src='/static/images/button/youtube.png' width="50" alt=""/>
                                </Link>
                            </motion.button>
                        </div>
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-primary'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    borderRadius: "25%"
                                }}
                                whileTap={{
                                  scale: 0.8,
                                  rotate: -360,
                                  borderRadius: "100%"
                                }}
                            >
                                <Link href={`${data_api?.social_media?.instagram}`}>
                                    <img src='/static/images/button/instagram.png' width="50" alt=""/>
                                </Link>
                            </motion.button>
                        </div>
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-primary'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    borderRadius: "25%"
                                }}
                                whileTap={{
                                  scale: 0.8,
                                  rotate: -360,
                                  borderRadius: "100%"
                                }}
                            >
                                <Link href={`${data_api?.discord_community?.vanity}`}>
                                    <img src='/static/images/button/discord.png' width="50" alt=""/>
                                </Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <Link href="/">
                            <a className="small m-0 text-white">Copyright &copy; <span>{data_api?.web_name}</span> 2017 - 2022</a>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link href="/about/terms">
                            <a className="link-light small" href="#!"><i className="px-2 bi bi-shield-fill-check"></i>Terms & Condition</a>
                        </Link>
                        <span className="text-white mx-1">&middot;</span>
                        <Link href="/about/contacts">
                            <a className="link-light small" href="#!"><i className="px-2 bi bi-person-badge-fill"></i>Contacts</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}