import cookie from 'cookie'
import { BACKEND_URL } from '../../../../components/config'
import { FETCH_FAIL } from '../../../../components/redux/messages'

const Main = async (req:any, res:any) => {
    const { member } = req.query
    
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '')
        const access = cookies.access ?? null

        let apiRes
        let headers

        try {
            headers = access ? ({
                'Accept': 'application/json',
                'Authorization': `Bearer ${access}`,
            }) : ({
                'Accept': 'application/json',
            })

            apiRes = await fetch(`${BACKEND_URL}/member/${member}`, {
                method: 'GET',
                headers: headers
            })

            const data = await apiRes.json()

            if (apiRes.status === 200) {
                return res.status(200).json(data)
            } else {
                return res.status(apiRes.status).json({detail: data.detail})
            }
        } catch {
            return res.status(500).json({detail: FETCH_FAIL})
        }
    } else {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({detail: `Method ${req.method} not allowed`})
    }
}

export default Main