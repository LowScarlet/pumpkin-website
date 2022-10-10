import Link from 'next/link'
import styles from '../../Style.module.css'

export default function Main(props:any) {
    // Initial setup
    const {data, isAuthenticated} = props
    
    // Some check
    if (isAuthenticated || !data) return (null)

    // Here we go
    return (
        <div className={`${styles['secondary-navbar']} text-end bg-black w-100 text-uppercase`}>
            <div className="container-md py-1">
                <Link href="/auth/register"><a className="px-2 text-white text-decoration-none">Register</a></Link> 
                <Link href="/auth/login"><a className="px-2 text-white text-decoration-none">Login</a></Link> 
            </div>
        </div>
    )
}