import cookie from 'cookie'

const Main = async  (req:any, res:any) => {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/'
                }
            ),
            cookie.serialize(
                'refresh', '', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/'
                }
            )
        ])

        return res.status(200).json({
            detail: 'Successfully logged out'
        })
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            detail: `Method ${req.method} now allowed`
        })
    }
}
export default Main