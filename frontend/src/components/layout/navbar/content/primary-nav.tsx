/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { send_toast } from '../../../customToast'
import { logout } from '../../../redux/authentication/auth'
import { FETCH_FAIL } from '../../../redux/messages'
import styles from '../../Style.module.css'
import { useTheme } from 'next-themes'

export default function Main(props: any) {
    // Initial setup
    const dispatch = useDispatch()
    const [logout_modal, setLogout_Modal] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const { theme, setTheme } = useTheme()
    const { data, isAuthenticated, user_data } = props
  
    // Theme
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
      setIsDark(theme === 'dark')
    }, [theme])

    // Some button
    const logoutHandler = async (e: any) => {
        e.preventDefault()
        setSubmitLoading(true)
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            try {
                const res = await fetch('/api/auth/logout', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })

                // Get response as Json
                const data = await res.json()

                // Validation
                if (res.status === 200) {
                    dispatch(logout(res.status, data) as any)
                    send_toast('success', data.detail)
                    setLogout_Modal(false)
                } else {
                    send_toast('error', data.detail)
                }
            } catch {
                send_toast('error', FETCH_FAIL)
            }
        }
        setSubmitLoading(false)
    }

    // Skeleton view
    if (!data) {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-sm placeholder-glow">
                        <span className='bg-pumpkin placeholder me-2' style={{ width: 50, height: 50 }}></span>
                        <span className='bg-light placeholder col-2' />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='bg-light placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='bg-light placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='bg-light placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='bg-light placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='bg-light placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    // Here we go
    return (<>
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-sm">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/static/logo/brand-logo.png" width="40" alt="" />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={`${styles['navbar-brand']} navbar-brand`}>{data.project_name}</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle align-middle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='me-2' src="/static/images/navbar/community_logo.png" width="40" height="40" alt="" />
                                    <span>Community</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                    <li><h6 className="dropdown-header">Featured menu</h6></li>
                                    <li>
                                        <Link href="/community">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/community_logo.png" width="55" height="55" alt="" />
                                                    Community
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/events">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/event_logo.png" width="55" height="55" alt="" />
                                                    Events
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li><h6 className="dropdown-header">Guild & Party</h6></li>
                                    <li>
                                        <Link href="/guilds">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/guild_logo.png" width="55" height="55" alt="" />
                                                    Guilds
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/parties">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/parties_logo.png" width="55" height="55" alt="" />
                                                    Parties
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='me-2' src="/static/images/navbar/projects_logo.png" width="40" height="40" alt="" />
                                    Projects
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                    <li><h6 className="dropdown-header">Official Games/Servers</h6></li>
                                    <li>
                                        <Link href="/pumpkincraft">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/games_logo.png" width="55" height="55" alt="" />
                                                    Pumpkincraft
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='me-2' src="/static/images/navbar/store_logo.png" width="40" height="40" alt="" />
                                    Store
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                    <li><h6 className="dropdown-header">Official store</h6></li>
                                    <li>
                                        <Link href="/store/pumpkinstore">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/detail_logo.png" width="55" height="55" alt="" />
                                                    Pumpkin Store
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li><h6 className="dropdown-header">Partner store</h6></li>
                                    <li>
                                        <Link href="/store/leyzstore">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/detail_logo.png" width="55" height="55" alt="" />
                                                    Leyz Store
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='me-2' src="/static/images/navbar/about_logo.png" width="40" height="40" alt="" />
                                    About
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                    <li><h6 className="dropdown-header">Pumpkin Project</h6></li>
                                    <li>
                                        <Link href="/about">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    Us
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/team">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    Team
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/rules">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    Rules
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/contacts">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    Contacts
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/terms">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    Terms
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link href="/about/faqs">
                                            <a className="dropdown-item">
                                                <div className="px-3">
                                                    <img src="/static/images/navbar/contacts_logo.png" width="55" height="55" alt="" />
                                                    FAQs
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {
                                isAuthenticated && user_data ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img className='me-2' src={user_data.profile.avatar} width="40" height="40" alt="" />
                                            Account
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                            <li><h6 className="dropdown-header">Member Account</h6></li>
                                            <li>
                                                <Link href={`/members/${user_data.user.username}`}>
                                                    <a className="dropdown-item">
                                                        <div className="px-3">
                                                            <img src="/static/images/navbar/detail_logo.png" width="55" height="55" alt="" />
                                                            My Account
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/upgrade">
                                                    <a className="dropdown-item">
                                                        <div className="px-3">
                                                            <img src="/static/images/navbar/upgrade_logo.png" width="55" height="55" alt="" />
                                                            Upgrade Rank
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/redeem">
                                                    <a className="dropdown-item">
                                                        <div className="px-3">
                                                            <img src="/static/images/navbar/redeem_code_logo.png" width="55" height="55" alt="" />
                                                            Redeem
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <button className="dropdown-item"
                                                    onClick={() => setTheme(`${isDark ? 'system' : 'dark'}`)}
                                                >
                                                    <div className="px-3">
                                                        <img src={`/static/images/navbar/${isDark ? 'dark_mode' : 'light_mode'}_logo.png`} width="55" height="55" alt="" />
                                                        Theme: {isDark ? 'Dark' : 'Default'}
                                                    </div>
                                                </button>
                                            </li>
                                            <hr />
                                            <li>
                                                <button className="dropdown-item"
                                                    onClick={() => setLogout_Modal(!logout_modal)}
                                                >
                                                    <div className="px-3">
                                                        <img src="/static/images/navbar/logout_logo.png" width="55" height="55" alt="" />
                                                        Logout
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                ) : (
                                    <></>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <Modal className='modal-dialog-centered' toggle={() => setLogout_Modal(!logout_modal)} isOpen={logout_modal}>
            <div className="modal-header text-dark ">
                <h5 className="modal-title" id="exampleModalLabel">
                    Confirm your action
                </h5>
                <button
                    aria-label="Close"
                    className="btn-close"
                    type="button"
                    onClick={() => setLogout_Modal(!logout_modal)}
                >
                    <span aria-hidden={true}></span>
                </button>
            </div>
            <ModalBody className='text-dark'>
                Do you want to log out?
            </ModalBody>
            <ModalFooter>
                <Button
                    color='secondary'
                    type="button"
                    onClick={() => setLogout_Modal(!logout_modal)}
                    disabled={submitLoading}
                >
                    Cancel
                </Button>
                <Button
                    color='pumpkin'
                    className='text-light'
                    type="button"
                    onClick={logoutHandler}
                    disabled={submitLoading}
                >
                    {submitLoading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                    ) : (<></>)} Logout
                </Button>
            </ModalFooter>
        </Modal>
    </>)
}