import cookie from 'cookie';
import { API_URL } from '../../../../components/config';

const Main = async (req:any, res:any) => {
    const { member } = req.query
    
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? null;

        let apiRes;

        try {
            if (access) {
                apiRes = await fetch(`${API_URL()}/member/${member}/toggle_dislike`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${access}`
                    }
                });
            } else {
                apiRes = await fetch(`${API_URL()}/member/${member}/toggle_dislike`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                    }
                });
            }
            
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
            return res.status(500).json({
                detail: 'Something went wrong with Api'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        });
    }
};

export default Main