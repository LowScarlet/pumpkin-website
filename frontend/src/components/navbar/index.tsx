/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Placeholder } from "reactstrap";
import { logout } from '../authentication/actions/auth';
import styles from './Navbar.module.css';
import Secondary_Nav from './content/secondary-nav'
import Primary_Nav from './content/primary-nav'

export default function Navbar(props:any) {
    // Check if user is authenticated or not
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated)

    // Get user data as json
    const user_data = useSelector((state:any) => state.auth.user?.data);
    
    return (
        <>
        <Secondary_Nav isAuthenticated={isAuthenticated} isLoading={props.isLoading} data={props.data} user_data={user_data}/>
        <Primary_Nav isAuthenticated={isAuthenticated} isLoading={props.isLoading} data={props.data} user_data={user_data}/>
        </>
    )
}