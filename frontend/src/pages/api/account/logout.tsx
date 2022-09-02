import cookie from 'cookie';

const ApiAccountLogout = async  (req:any, res:any) => {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/api/'
                }
            ),
            cookie.serialize(
                'refresh', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/api/'
                }
            )
        ]);

        return res.status(200).json({
            detail: 'Successfully logged out'
        });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            detail: `Method ${req.method} now allowed`
        });
    }
};

export default ApiAccountLogout