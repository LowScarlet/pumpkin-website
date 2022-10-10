import { BACKEND_URL } from '../../../components/config'

const Main = async (req:any, res:any) => {
    if (req.method === 'POST') {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            re_password
        } = req.body

        const body = JSON.stringify({
            first_name,
            last_name,
            username,
            email,
            password,
            re_password
        })

        try {
            const apiRes = await fetch(`${BACKEND_URL}/account/user/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Secret-Code': `${process.env.SECRET_CODE}`
                },
                body: body
            })

            const data = await apiRes.json()

            if (apiRes.status === 201) {
                return res.status(201).json({
                    detail: data.detail
                })
            } else {
                return res.status(apiRes.status).json({
                    detail: data.detail
                })
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong when registering for an account'
            })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        })
    }
}
export default Main