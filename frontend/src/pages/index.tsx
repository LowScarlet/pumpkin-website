import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import { useSelector } from "react-redux"
import DiscordEmbed from "../components/discordEmbed"
import Layout from "../components/layout"
import styles from './Style.module.css'

const Main = () => {
    // Initial setup
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
    const data = useSelector((state: any) => state.global.data)
    const user_data = useSelector((state: any) => state.auth.user)

    // Some button
    const exploreButton = () => {
        const element = document.getElementById('content')
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 60,
                behavior: 'smooth',
            })
        }
    }

    // Skeleton view
    if (isAuthenticated === null || data === null) {
        return (<>
            <Head>
                <title>Welcome to Pumpkin Project</title>
            </Head>
            <Layout>
                <div className="bg-light placeholder-glow">
                    <header style={{ backgroundColor: 'black' }}>
                        <div className={`container-sm`}>
                            <div className="row gx-5 align-items-center justify-content-center">
                                <div className="col-lg-8 col-xl-7 col-xxl-6">
                                    <div className="p-5 px-sm-0 py-5 my-5 text-center text-xl-start">
                                        <h1 className="display-5 fw-bolder text-white mb-2 letterspacing-2">
                                            <span className='placeholder bg-light col-6'></span><br />
                                            <span className='placeholder bg-light col-8'></span>
                                        </h1>
                                        <p className="lead fw-normal text-white-50 mb-4">
                                            <span className='placeholder bg-secondary col-6'></span>
                                            <br />
                                            <span className='placeholder bg-secondary col-3'></span>
                                        </p>
                                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                            <button className="btn btn-pumpkin btn-lg px-4 me-sm-3 disabled placeholder w-100"></button>
                                            <button className="btn btn-secondary btn-lg px-4 me-sm-3 disabled placeholder w-100"></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-xxl-6 text-center"></div>
                            </div>
                        </div>
                    </header>
                </div>
            </Layout>
        </>)
    }

    // Here we go
    return (<>
        <Head>
            <title>Welcome to Pumpkin Project</title>
        </Head>
        <Layout>
            <div className="bg-light">
                <header className={`${styles['welcome-header']}`}>
                    <div className={`container-sm`}>
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="p-5 px-sm-0 py-5 my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2 letterspacing-2">
                                        Welcome to<br />
                                        <span>{data.project_name}</span>
                                    </h1>
                                    <p className="lead fw-normal text-white-50 mb-4">
                                        Be a part of the Pumpkin Project family by signing up to become our member!
                                    </p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <Link href={`${isAuthenticated && user_data ? `/members/${user_data.user.username}` : '/auth/login'}`}>
                                            <motion.a
                                                className='btn btn-pumpkin btn-lg px-4 me-sm-3 text-light'
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            >
                                                {`${isAuthenticated && user_data ? 'My Profile' : 'Join Now!'}`}
                                            </motion.a>
                                        </Link>
                                        <motion.a
                                            className='btn btn-outline-secondary btn-lg px-4 me-sm-3 text-decoration-none text-light'
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            onClick={() => exploreButton()}
                                        >
                                            Explore
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 text-center"></div>
                        </div>
                    </div>
                </header>
                <div id="content">
                    <div className="bg-black">
                        <DiscordEmbed />
                    </div>
                </div>
            </div>
        </Layout>
    </>)
}
export default Main