import Link from 'next/link'
import styles from '../Navbar.module.css'

export default function Main(props: any) {
    if (props.isAuthenticated) {
        return (<></>)
    }
    // Skeleton
    if (props.isLoading || !props.data) {
        return (
            <div className={`${styles['secondary-navbar']} text-end bg-black w-100 placeholder-glow`}>
                <div className="container-md py-1">
                    <span className="mx-2 placeholder col-2"/>
                    <span className="mx-2 placeholder col-2"/>
                </div>
            </div>
        )
    }
    // Actual Content
    return (
        <div className={`${styles['secondary-navbar']} text-end bg-black w-100 text-white text-uppercase`}>
            <div id="logreg-div" className="container-md py-1">
                <Link href="/auth/register"><a className="px-2 text-white">Register</a></Link> 
                <Link href="/auth/login"><a className="px-2 text-white">Login</a></Link> 
            </div>
        </div>
    )
}