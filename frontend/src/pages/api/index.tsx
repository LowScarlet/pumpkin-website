import { API_URL } from '../../components/config';

const ApiProjectInfo = async (req:any, res:any) => {
    if (req.method === 'GET') {
        try {
            const apiRes = await fetch(`${API_URL()}/api/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
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
                detail: 'Something went wrong when retrieving data'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            detail: `Method ${req.method} not allowed`
        });
    }
};

export default ApiProjectInfo