/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../Style.module.css'

export default function Main(props:any) {
    // Initial setup
    const {data} = props

    // Sekeleton view
    if (!data) {
        return (<>
            <div className='bg-black placeholder-glow'>
                <div className={'p-4 p-md-5 text-light text-center'} style={{backgroundColor: '#3d3850'}}>
                    <h1 className="display-4">
                        <span className='bg-warning placeholder col-4'></span>
                    </h1>
                    <p className="lead my-3 text-white-50">
                        <span className='bg-secondary placeholder col-6'></span>
                    </p>
                </div>
            </div>
            <div className='text-dark bg-light placeholder-glow'>
                <div className="container px-5 text-center">
                    <div className="py-5">
                        <span className='placeholder col-3'></span>
                        <div className="d-flex justify-content-center">
                            <div className='p-2'>
                                <span className='placeholder bg-pumpkin' style={{ width: 50, height: 50 }}></span>
                            </div>
                            <div className='p-2'>
                                <span className='placeholder bg-pumpkin' style={{ width: 50, height: 50 }}></span>
                            </div>
                            <div className='p-2'>
                                <span className='placeholder bg-pumpkin' style={{ width: 50, height: 50 }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-4 mt-auto placeholder-glow">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <span className='placeholder bg-light col-3'></span>
                        <span className='placeholder bg-light col-3'></span>
                    </div>
                </div>
            </div>
        </>)
    }

    // Here we go
    return (<>
        <div className='bg-black'>
            <div className={`${styles['bg-maintenance']} p-4 p-md-5 text-bg-dark text-center`}>
                <h1 className="display-4 text-warning">
                    <i className="px-3 bi bi-exclamation-triangle"></i>Warning<i className="px-3 bi bi-exclamation-triangle"></i>
                </h1>
                <p className="lead my-3 text-white-50">
                    This website is under development, Pages may still be static!
                </p>
            </div>
        </div>
        <div className={`${styles['footer']} text-dark bg-light`}>
            <div className="container px-5 text-center">
                <div className="py-5">
                    <h4 className="fw-bolder py-2 text-uppercase">
                        Follow {data.project_name}
                    </h4>
                    <div className="d-flex justify-content-center">
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-pumpkin'
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
                                <Link href={`${data.social_media.youtube}`}>
                                    <a target="_blank"><img src='/static/images/button/youtube.png' width="50" alt="" /></a>
                                </Link>
                            </motion.button>
                        </div>
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-pumpkin'
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
                                <Link href={`${data.social_media.instagram}`}>
                                    <a target="_blank"><img src='/static/images/button/instagram.png' width="50" alt="" /></a>
                                </Link>
                            </motion.button>
                        </div>
                        <div className='p-2'>
                            <motion.button
                                className='p-0 border-0 btn btn-pumpkin'
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
                                <Link href={`${data.discord_community.vanity}`}>
                                    <a target="_blank"><img src='/static/images/button/discord.png' width="50" alt="" /></a>
                                </Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-dark py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <Link href="/">
                            <a className="text-decoration-none small m-0 text-white">Copyright &copy; <span>{data.project_name}</span> 2017 - 2022</a>
                        </Link>
                    </div>
                    <div className="col-auto ">
                        <Link href="/about/terms">
                            <a className="text-decoration-none link-light small" href="#!"><i className="px-2 bi bi-shield-fill-check"></i>Terms & Condition</a>
                        </Link>
                        <span className="text-white mx-1">&middot;</span>
                        <Link href="/about/contacts">
                            <a className="text-decoration-none link-light small" href="#!"><i className="px-2 bi bi-person-badge-fill"></i>Contacts</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}