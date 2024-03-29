import cookie from 'cookie'
import { BACKEND_URL } from '../../../components/config'

const Main = async (req: any, res: any) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '')
        const refresh = cookies.refresh ?? null

        if (refresh === null) {
            return res.status(401).json({
                detail: 'User unauthorized to make this request'
            })
        }

        const body = JSON.stringify({
            refresh
        })

        try {
            const apiRes = await fetch(`${BACKEND_URL}/account/user/token/refresh`, {
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
                        'refresh', refresh, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== 'development',
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                        path: '/'
                    }
                    )
                ])

                return res.status(200).json({
                    detail: 'Refresh request successful'
                })
            } else {
                return res.status(apiRes.status).json({
                    detail: 'Failed to fulfill refresh request'
                })
            }
        } catch (err) {
            return res.status(500).json({
                detail: 'Something went wrong when trying to fulfill refresh request'
            })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        })
    }
}
export default Main