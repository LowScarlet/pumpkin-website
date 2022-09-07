import { motion } from 'framer-motion'
import { DefaultSeo, NextSeo } from 'next-seo'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import useSWR from 'swr'
import SEO from '../../../next-seo.config'
import { PUBLIC_API_URL } from '../config'
import Footer from '../footer'
import Navbar from '../navbar'
import { useDispatch } from 'react-redux';
import { request_refresh } from '../authentication/actions/auth';

// Fetcher for useSWR
const fetcher = (...args:any) => fetch(args).then((res) => res.json())

// Interface
interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(request_refresh() as any);
    }, [dispatch]);

    // Get public data from backend
    let { data } = useSWR('/api/', fetcher)
    
    // Theme
    useEffect(() => {
        document.body.classList.add("d-flex");
        document.body.classList.add("flex-column");
        document.body.classList.add("h-100");
        document.body.classList.add("text-bg-dark");
    }, [])

    // Children
    const {children} = props;

    return (
        <>
        <DefaultSeo {...SEO}/>
        <NextSeo
            description="Be a part of a member of the Indonesian pixel game community at Pumpkin Project! Have fun, Create projects and much more you can do here!"
        />
        <Navbar data_api={data?.data}/>
            <motion.div
                initial={{ 
                    opacity: 0,
                }}
                animate={{
                    opacity: 1
                }}
                transition={{ duration: 0.5, times: [0, 0.5, 1] }}
            >
                {children}
            </motion.div>
        <Footer data_api={data?.data}/>
        </>
    )
}
