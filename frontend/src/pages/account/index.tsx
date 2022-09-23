/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Account() {
  // Init
  const router = useRouter()
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const user_data = useSelector((state: any) => state.auth.user?.data);
  
  // Redirect to /members/user if autenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/members/${user_data?.user.username}`, undefined, { shallow: false })
    } else {
      router.push('/auth', undefined)
    }
  })
}

export default Account
