import { motion } from 'framer-motion'
import { DefaultSeo, NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import SEO from '../../../next-seo.config'
import { useDispatch } from 'react-redux'
import { request_refresh } from '../redux/authentication/actions/auth'
import { initial_load } from '../redux/global/actions/init'

export default function Main(props: any) {
    // Initial useDispatch
    const dispatch = useDispatch()

    // Children
    const { children } = props

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(initial_load() as any);

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(request_refresh() as any);
    }, [dispatch])

    return (<>
        {/* SEO */}
        <DefaultSeo {...SEO} />
        <NextSeo
            description="Be a part of a member of the Indonesian pixel game community at Pumpkin Project! Have fun, Create projects and much more you can do here!"
        />

        {children}
    </>)
}
