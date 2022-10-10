/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import styles from '../../Style.module.css'

export default function Main(props: any) {
  if (props.fetchingLoading || !props.memberData) {
    return (
      <div className="shadow card placeholder-glow">
        <div className="card-body text-dark">
          <h5 className="card-title placeholder col-3"></h5>
          <div className='my-2 py-5 bg-light'></div>
          <table className="table table-sm table-borderless table-responsive text-center">
            <thead>
              <tr>
                <th scope="col"><span className='placeholder col-6'></span></th>
                <th scope="col"><span className='placeholder col-6'></span></th>
                <th scope="col"><span className='placeholder col-6'></span></th>
                <th scope="col"><span className='placeholder col-6'></span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='placeholder col-6'></span></td>
                <td><span className='placeholder col-6'></span></td>
                <td><span className='placeholder col-6'></span></td>
                <td><span className='placeholder col-6'></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return (
    <div className="shadow card">
      <div className="card-body text-dark">
        <h5 className="card-title"><i className="px-2 bi bi-link-45deg"></i>Money</h5>
        <div className={`${styles['money-banner']} my-2 py-5 bg-dark`}></div>
        <table className="table table-sm table-borderless table-responsive text-center">
          <thead>
            <tr>
              <th scope="col">Pumpkin Coin</th>
              <th scope="col">Gold Coin</th>
              <th scope="col">Silver Coin</th>
              {
                Object.keys(props.memberData.discord_account).length !== 0 ? (
                  <th scope="col">Discord Coin</th>
                ) : null
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.memberData.profile.pumpkincoin} <img src="/static/images/currency/pumpkin_coin.png" width={32} alt="" /></td>
              <td>{props.memberData.profile.goldcoin} <img src="/static/images/currency/gold_coin.png" width={32} alt="" /></td>
              <td>{props.memberData.profile.silvercoin} <img src="/static/images/currency/silver_coin.png" width={32} alt="" /></td>
              {
                Object.keys(props.memberData.discord_account).length !== 0 ? (
                  <td>{props.memberData.discord_account.discordcoin} <img src="/static/images/currency/discord_coin.png" width={32} alt="" /></td>
                ) : null
              }
            </tr>
          </tbody>
        </table>
        <motion.button
          className={`btn btn-outline-secondary w-100 ${!props.isAuthenticated ? ('disabled') : ('')}`}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          type="button"
        >
          {
            props.isSelf ? (
              'Top Up'
            ) : (
              'Transfer coin to this member!'
            )
          }
        </motion.button>
      </div>
    </div>
  )
}