import cookie from 'cookie'
import { BACKEND_URL } from '../../../components/config'

const Main = async (req:any, res:any) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '')
        const access = cookies.access ?? null

        const {code} = req.query
        
        if (access === null) {
            return res.status(401).json({
                detail: 'User unauthorized to make this request'
            })
        }

        try {
            const apiRes = await fetch(`${BACKEND_URL}/account/user/email_confirmation?code=${code}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
                }
            })
            const data = await apiRes.json()

            if (apiRes.status === 200) {
                return res.status(200).json(data)
            } else {
                return res.status(apiRes.status).json({
                    detail: data.detail
                })
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong when retrieving user'
            })
        }
    } else if (req.method === 'POST') {
        const cookies = cookie.parse(req.headers.cookie ?? '')
        const access = cookies.access ?? null
        
        if (access === null) {
            return res.status(401).json({
                detail: 'User unauthorized to make this request'
            })
        }

        try {
            const apiRes = await fetch(`${BACKEND_URL}/account/user/email_confirmation`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`,
                    'Secret-Code': `${process.env.SECRET_CODE}`
                }
            })
            const data = await apiRes.json()

            if (apiRes.status === 200) {
                return res.status(200).json(data)
            } else {
                return res.status(apiRes.status).json({
                    detail: data.detail
                })
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong when retrieving user'
            })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        })
    }
}
export default Main