/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../components/redux/authentication/actions/auth'
import Layout from '../../../components/layout'
import styles from '../Auth.module.css'

const Auth_Register: NextPage = () => {
    // Init
    const dispatch = useDispatch();
    const router = useRouter();
    const register_success = useSelector((state: any) => state.auth.register_success);
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const loading = useSelector((state: any) => state.auth.loading);
    const [formData, setFormData] = useState({
        first_name: '', last_name: '', username: '', email: '', password: '', re_password: '',
    });
    const {
        first_name, last_name, username, email, password, re_password
    } = formData;

    // Event *onChange
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Event *onSubmit
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(register(first_name, last_name, username, email, password, re_password) as any);
    };

    // Check if user is Authenticated or not
    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/');

    // If register success then redirect to auth login
    if (register_success)
        router.push('/auth/login');

    return (
        <>
            <Head>
                <title>Auth - Register</title>
            </Head>
            <Layout>
                <section className={`${styles['welcome-header']} py-5 text-center text-lg-start`}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Join us on the<br />
                                    <span className="text-primary">Pumpkin Project</span>
                                </h1>
                                <p>
                                    Be a part of the Pumpkin Project family by becoming our member!
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card text-dark py-5">
                                    <div className="auth-header text-center">
                                        <img className='auth-logo' src="/static/images/apps/auth/auth_logo.png" alt="" width="175" />
                                        <h3 className={`${styles['auth-title']} my-3`}>
                                            REGISTER
                                        </h3>
                                    </div>
                                    <div className="card-body px-sm-5 py-0">
                                        <form className="form" onSubmit={onSubmit}>
                                            <div className="form-outline mb-2">
                                                <input name="username" type="text" className="form-control text-center" placeholder="Username"
                                                    onChange={onChange}
                                                    value={username}
                                                    required
                                                />
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col form-outline">
                                                    <input name="first_name" type="text" className="form-control text-center" placeholder="First Name"
                                                        onChange={onChange}
                                                        value={first_name}
                                                        required
                                                    />
                                                </div>
                                                <div className="col form-outline">
                                                    <input name="last_name" type="text" className="form-control text-center" placeholder="Last Name"
                                                        onChange={onChange}
                                                        value={last_name}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-outline mb-2">
                                                <input name="email" type="email" className="form-control text-center" placeholder="E-Mail"
                                                    onChange={onChange}
                                                    value={email}
                                                    required
                                                />
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col form-outline">
                                                    <input name="password" type="password" className="form-control text-center" placeholder="Password"
                                                        onChange={onChange}
                                                        value={password}
                                                        required
                                                    />
                                                </div>
                                                <div className="col form-outline">
                                                    <input name="re_password" type="password" className="form-control text-center" placeholder="Confirm Password"
                                                        onChange={onChange}
                                                        value={re_password}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center py-2">
                                                <input required className="form-check-input" type="checkbox" value="" id="terms-checkbox" />
                                                <label className="form-check-label px-1" htmlFor='terms-checkbox'>I agree to all <Link href="/terms"><a className="text-primary">Terms And Conditions</a></Link></label>
                                            </div>
                                            <div className="text-center mb-4">
                                                {
                                                    loading ? (
                                                        <button disabled type="submit" className="btn btn-primary btn-block w-100">
                                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            Register
                                                        </button>
                                                    ) : (
                                                        <button type="submit" className="btn btn-primary btn-block w-100">
                                                            Register
                                                        </button>
                                                    )
                                                }
                                            </div>
                                            <div className="form-check d-flex justify-content-center">
                                                <span>Already created an account?<Link href="/auth/login"><a className="px-2 text-primary">Login!</a></Link></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Auth_Register
