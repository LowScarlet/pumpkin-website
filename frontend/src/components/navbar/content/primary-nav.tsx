/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { logout } from '../../authentication/actions/auth'
import styles from '../Navbar.module.css'

export default function Main(props: any) {
    // Initial dispatch
    const dispatch = useDispatch()

    // Initial useState
    const [logout_modal, setLogout_Modal] = useState(false)

    // Logout Handler
    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout() as any);
            setLogout_Modal(false);
    }

    // Skeleton
    if (props.isLoading || !props.data) {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-sm placeholder-glow">
                        <span className='placeholder me-2' style={{ width: 50, height: 50 }}></span>
                        <span className={`${styles['navbar-brand']} navbar-brand d-none d-md-block placeholder col-2`} />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className='placeholder me-2' style={{ width: 40, height: 40 }}></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    // Actual Content
    return (<>
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-sm">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/static/logo/brand-logo.png" width="50" height="50" alt="" />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={`${styles['navbar-brand']} navbar-brand d-none d-md-block`}>{props.data.project_name}</a>
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
                                props.isAuthenticated ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownProfile" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img className='me-2' src={props.user_data?.profile.avatar} width="40" height="40" alt="" />
                                            Account
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownBlog">
                                            <li><h6 className="dropdown-header">Member Account</h6></li>
                                            <li>
                                                <Link href="/account">
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
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setLogout_Modal(!logout_modal)}
                >
                    Cancel
                </Button>
                <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={logoutHandler}
                >
                    Logout
                </Button>
            </ModalFooter>
        </Modal>
    </>)
}