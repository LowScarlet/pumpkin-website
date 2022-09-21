import { API_URL } from '../../../components/config';
import cookie from 'cookie';

const ApiAccountVerify = async (req:any, res:any) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? null;

        if (access === null) {
            return res.status(403).json({
                error: 'User forbidden from making the request'
            });
        }

        const body = JSON.stringify({
            token: access
        });

        try {
            const apiRes = await fetch(`${API_URL()}/account/user/token/verify`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            });

            if (apiRes.status === 200) {
                return res.status(200).json({
                    detail: 'Authenticated successfully'
                });
            } else {
                return res.status(apiRes.status).json({
                    detail: 'Failed to authenticate'
                });
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong when trying to authenticate'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        });
    }
};

export default ApiAccountVerify