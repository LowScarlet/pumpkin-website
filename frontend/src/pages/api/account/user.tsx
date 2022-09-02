import cookie from 'cookie';
import { API_URL } from '../../../components/config';

const ApiAccountUser = async (req:any, res:any) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? null;

        if (access === null) {
            return res.status(401).json({
                detail: 'User unauthorized to make this request'
            });
        }

        try {
            const apiRes = await fetch(`${API_URL()}/account/api/user`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
                }
            });
            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json({
                    data
                });
            } else {
                return res.status(apiRes.status).json({
                    detail: data.detail
                });
            }
        } catch(err) {
            console.log(err)
            return res.status(500).json({
                detail: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        });
    }
};

export default ApiAccountUser