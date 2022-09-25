/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import styles from './DiscordEmbed.module.css'

// Fetcher
const fetcher = (...args:any) => fetch(args).then((res) => res.json())

export default function Main() {
    // Get public data from discord widget
    let { data, error } = useSWR('https://discord.com/api/guilds/637896558435893248/widget.json', fetcher)

    return (
        <> {
            !error ? (
                <div className="container py-4">
                    <div className={`${styles['discord-banner']} p-4 p-md-5 text-bg-dark text-center`}>
                        <h1 className="display-4">
                            <i className="bi bi-discord"></i> Discord Community
                        </h1>
                        <p className="lead my-3 text-white-50">
                            Join our community on discord!
                        </p>
                        <span className='px-2'>
                            <Link href={`${data?.instant_invite}`}>
                                <a className='btn btn-primary' target="_blank">Join Now!</a>
                            </Link>
                        </span>
                        <span className='px-2'>
                            <Link href={'https://top.gg/servers/637896558435893248'}>
                                <a className='btn btn-success' target="_blank">Vote!</a>
                            </Link>
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )
        } </>
    )
}