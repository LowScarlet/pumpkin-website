/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Placeholder } from 'reactstrap'
import styles from './Footer.module.css'

export default function Navbar(props: any) {
    if (props.isLoading || !props.data) {
        return (<>
            <div className={`${styles['footer']} text-dark bg-light placeholder-glow`}>
                <div className="container px-5 text-center">
                    <div className="py-5">
                        <span className='placeholder col-6'></span>
                        <div className="socialmedia-button d-flex justify-content-center">
                            <div className='p-2'>
                                <span className='placeholder' style={{ width: 50, height: 50 }}></span>
                            </div>
                            <div className='p-2'>
                                <span className='placeholder' style={{ width: 50, height: 50 }}></span>
                            </div>
                            <div className='p-2'>
                                <span className='placeholder' style={{ width: 50, height: 50 }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto">
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

    return (
        <>
            <div className={`${styles['footer']} text-dark bg-light`}>
                <div className="container px-5 text-center">
                    <div className="py-5">
                        <h4 className="fw-bolder py-2 text-uppercase">
                            Follow {props.data.project_name}
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
                                    <Link href={`${props.data.social_media.youtube}`}>
                                        <a target="_blank"><img src='/static/images/button/youtube.png' width="50" alt="" /></a>
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
                                    <Link href={`${props.data.social_media.instagram}`}>
                                        <a target="_blank"><img src='/static/images/button/instagram.png' width="50" alt="" /></a>
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
                                    <Link href={`${props.data.discord_community.vanity}`}>
                                        <a target="_blank"><img src='/static/images/button/discord.png' width="50" alt="" /></a>
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
                                <a className="small m-0 text-white">Copyright &copy; <span>{props.data.web_name}</span> 2017 - 2022</a>
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