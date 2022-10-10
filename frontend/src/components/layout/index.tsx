import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import Footer from './footer'
import Navbar from './navbar'

export default function Main(props: any) {
    // Initial setup
    const data = useSelector((state:any) => state.global.data)
    const { children } = props

    // Here we go
    return (<>
        {/* Navbar */}
        <Navbar data={data}/>

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
        <Footer data={data}/>
    </>)
}
