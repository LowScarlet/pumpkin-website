/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../components/redux/authentication/auth'
import Layout from '../../components/layout'
import styles from './Style.module.css'
import { FETCH_FAIL } from '../../components/redux/messages'
import { send_toast } from '../../components/customToast'

const Main = () => {
    // Initial setup
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
    const data = useSelector((state:any) => state.global.data)
    const [formData, setFormData] = useState({username: '', password: ''})
    const [submitLoading, setSubmitLoading] = useState(false)
    const [redirecting, setRedirecting] = useState(false)
    const {username, password} = formData

    // Event
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })

    // Some button
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setSubmitLoading(true)
        const body = JSON.stringify({
            username,
            password
        })
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: body
                })
        
                // Get response as Json
                const data = await res.json()
        
                // Validation
                if (res.status === 200) {
                    dispatch(login(res.status, data) as any)
                    send_toast('success', data.detail)
                } else {
                    send_toast('error', data.detail)
                }
            } catch {
                send_toast('error', FETCH_FAIL)
            }
        }
        setSubmitLoading(false)
    }

    // Some check
    if (isAuthenticated === null) {
        return (<></>)
    }
    
    if (isAuthenticated === true && !redirecting) {
        setRedirecting(true)
        router.push('/')
        return (<></>)
    }

    // Sekeleton view
    if (!data) {
        return (<>
            <Head>
                <title>Auth - Login</title>
            </Head>
            <Layout>
                <section className={`py-3 text-center text-lg-start placeholder-glow`} style={{backgroundColor: '#232530'}}>
                    <div className="d-flex justify-content-center">
                        <div className="card text-dark py-5" style={{minWidth: 400}}>
                            <div className="auth-header text-center">
                                <div className='bg-secondary placeholder py-5' style={{width:175}} />
                                <h3 className={`${styles['auth-title']} my-3`}>
                                    <span className='placeholder bg-dark col-3'></span>
                                </h3>
                            </div>
                            <div className="card-body px-sm-5 py-0">
                                <form className="form" onSubmit={onSubmit}>
                                    <div className="form-outline mb-2">
                                        <span className='placeholder bg-secondary col-12'></span>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <span className='placeholder bg-secondary col-12'></span>
                                    </div>
                                    <div className="form-check d-flex justify-content-end mb-3">
                                        <span className='placeholder bg-pumpkin col-6'></span>
                                    </div>
                                    <div className="text-center mb-4">
                                        <button type="submit" className='btn btn-pumpkin btn-block w-100 disabled placeholder'>
                                        </button>
                                    </div>
    
                                    <div className="form-check d-flex justify-content-center">
                                    <span className='placeholder bg-secondary col-8'></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>)
    }

    // Here we go
    return (<>
        <Head>
            <title>Auth - Login</title>
        </Head>
        <Layout>
            <section className={`${styles['welcome-header']} py-3 text-center text-lg-start`}>
                <div className="d-flex justify-content-center">
                    <div className="card text-dark py-5">
                        <div className="auth-header text-center">
                            <img src="/static/images/apps/auth/auth_logo.png" alt="" width="175" />
                            <h3 className={`${styles['auth-title']} my-3`}>
                                LOGIN
                            </h3>
                        </div>
                        <div className="card-body px-sm-5 py-0">
                            <form className="form" onSubmit={onSubmit}>
                                <div className="form-outline mb-2">
                                    <input name="username" type="text" className="form-control text-center" disabled={submitLoading} placeholder="Username"
                                        onChange={onChange} value={username} required
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <input name="password" type="password" className="form-control text-center" disabled={submitLoading} placeholder="Password"
                                        onChange={onChange} value={password} required autoComplete="on"
                                    />
                                </div>
                                <div className="form-check d-flex justify-content-end mb-3">
                                    <Link href="/auth/forgot-password">
                                        <a className="text-pumpkin">I forgot my password</a>
                                    </Link>
                                </div>
                                <div className="text-center mb-4">
                                    <button type="submit" className={`btn btn-pumpkin btn-block w-100 text-light ${submitLoading ? 'disabled' : ''}`}>
                                        {submitLoading ? (
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                        ) : (<></>)} Login
                                    </button>
                                </div>

                                <div className="form-check d-flex justify-content-center">
                                    <span>Doesn't have one?<Link href="/auth/register"><a className="px-2 text-pumpkin">Create an account!</a></Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </>)
}

export default Main
