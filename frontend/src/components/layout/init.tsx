import { DefaultSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import SEO from '../../../next-seo.config'
import { useDispatch } from 'react-redux'
import { request_refresh } from '../redux/authentication/auth'
import { initial_load } from '../redux/global/init'

export default function Main(props: any) {
    // Initial setup
    const dispatch = useDispatch()

    // useEffect
    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(request_refresh() as any)
            dispatch(initial_load() as any)
        }
    }, [dispatch])

    // Here we go
    return (<>
        <DefaultSeo {...SEO}/>
        {props.children}
    </>)
}
