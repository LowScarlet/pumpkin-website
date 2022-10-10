/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Secondary_Nav from './content/secondary-nav'
import Primary_Nav from './content/primary-nav'
import { useSelector } from 'react-redux'

export default function Main(props:any) {
    // Initial setup
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated)
    const user_data = useSelector((state:any) => state.auth.user)
    const {data} = props

    // Here we go
    return (<>
        <Secondary_Nav data={data} isAuthenticated={isAuthenticated}/>
        <Primary_Nav data={data} isAuthenticated={isAuthenticated} user_data={user_data}/>
    </>)
}