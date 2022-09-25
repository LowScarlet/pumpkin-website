import { motion } from 'framer-motion'
import Footer from './footer'
import Navbar from './navbar'

export default function Main(props: any) {
    // Children
    const { children } = props

    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Content */}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1
                }}
                transition={{ duration: 0.5, times: [0, 0.5, 1] }}
            >{children}</motion.div>

            {/* Footer */}
            <Footer/>
        </>
    )
}
