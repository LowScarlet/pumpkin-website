import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '../../Layout.module.css'

export default function Main() {
    // Get inital data
    const data = useSelector((state:any) => state.global.data)

    // Check if user is authenticated or not
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated)
    
    if (isAuthenticated || !data) {
        return (null)
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