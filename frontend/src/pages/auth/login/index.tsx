/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset_register_success } from '../../../components/redux/authentication/actions/auth'
import Layout from '../../../components/layout'
import styles from '../Auth.module.css'

const Auth_Login: NextPage = () => {
    // Init
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const loading = useSelector((state: any) => state.auth.loading);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {
        username,
        password,
    } = formData;

    // Reset register success
    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success() as any);
    }, [dispatch]);

    // Event *onChange
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Event *onSubmit
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(username, password) as any);
    };

    // Check if user is Authenticated or not
    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/');

    return (
        <>
            <Head>
                <title>Auth - Login</title>
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
                                            LOGIN
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
                                            <div className="form-outline mb-3">
                                                <input name="password" type="password" className="form-control text-center" placeholder="Password"
                                                    onChange={onChange}
                                                    value={password}
                                                    required
                                                />
                                            </div>
                                            <div className="form-check d-flex justify-content-end mb-3">
                                                <Link href="/account/forgot-password">
                                                    <a className="text-primary">I forgot my password</a>
                                                </Link>
                                            </div>
                                            <div className="text-center mb-4">
                                                {
                                                    loading ? (
                                                        <button disabled type="submit" className="btn btn-primary btn-block w-100">
                                                            <span className='pe-2'><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /></span>
                                                            Login
                                                        </button>
                                                    ) : (
                                                        <button type="submit" className="btn btn-primary btn-block w-100">
                                                            Login
                                                        </button>
                                                    )
                                                }
                                            </div>

                                            <div className="form-check d-flex justify-content-center">
                                                <span>Doesn't have one?<Link href="/auth/register"><a className="px-2 text-primary">Create an account!</a></Link></span>
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

export default Auth_Login
