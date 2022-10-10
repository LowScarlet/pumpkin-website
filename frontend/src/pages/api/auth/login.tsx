import cookie from 'cookie'
import { BACKEND_URL } from '../../../components/config'

const Main = async (req:any, res:any) => {
    if (req.method === 'POST') {
        const { username, password } = req.body

        const body = JSON.stringify({
            username,
            password
        })

        try {
            const apiRes = await fetch(`${BACKEND_URL}/account/user/token`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            })

            const data = await apiRes.json()

            if (apiRes.status === 200) {
                res.setHeader('Set-Cookie', [
                    cookie.serialize(
                        'access', data.access, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            maxAge: 60 * 30,
                            sameSite: 'strict',
                            path: '/'
                        }
                    ),
                    cookie.serialize(
                        'refresh', data.refresh, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            maxAge: 60 * 60 * 24,
                            sameSite: 'strict',
                            path: '/'
                        }
                    )
                ])

                return res.status(200).json({
                    detail: 'Logged in successfully'
                })
            } else {
                return res.status(apiRes.status).json({
                    detail: data.detail
                })
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong when authenticating'
            })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            detail: `Method ${req.method} now allowed`
        })
    } 
}
export default Main