import { motion } from 'framer-motion'
import { DefaultSeo, NextSeo } from 'next-seo'
import { ReactNode, useEffect, useState } from 'react'
import useSWR from 'swr'
import SEO from '../../../next-seo.config'
import Footer from '../footer'
import Navbar from '../navbar'
import { useDispatch } from 'react-redux';
import { request_refresh } from '../authentication/actions/auth';

export default function Layout(props: any) {
    // Initial useDispatch
    const dispatch = useDispatch()

    // Initial useState
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    // Children
    const { children } = props

    useEffect(() => {
        // Fetching
        fetch(`/api/`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
                setLoading(false)
            })

        if (dispatch && dispatch !== null && dispatch !== undefined && !isLoading)
            dispatch(request_refresh() as any);
    }, [dispatch, isLoading])

    return (
        <>
            {/* SEO */}
            <DefaultSeo {...SEO} />
            <NextSeo
                description="Be a part of a member of the Indonesian pixel game community at Pumpkin Project! Have fun, Create projects and much more you can do here!"
            />

            {/* Navbar */}
            <Navbar isLoading={isLoading} data={data} />

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
            <Footer isLoading={isLoading} data={data} />
        </>
    )
}
