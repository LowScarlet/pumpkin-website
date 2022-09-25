/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
  if (props.isLoading || !props.data) {
    return (
      <div className="shadow card">
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
                Object.keys(props.data.discord_account).length !== 0 ? (
                  <th scope="col">Discord Coin</th>
                ) : ('')
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.data.profile.pumpkincoin} <img src="/static/images/currency/pumpkin_coin.png" width={32} alt="" /></td>
              <td>{props.data.profile.goldcoin} <img src="/static/images/currency/gold_coin.png" width={32} alt="" /></td>
              <td>{props.data.profile.silvercoin} <img src="/static/images/currency/silver_coin.png" width={32} alt="" /></td>
              {
                Object.keys(props.data.discord_account).length !== 0 ? (
                  <td>{props.data.discord_account.discordcoin} <img src="/static/images/currency/discord_coin.png" width={32} alt="" /></td>
                ) : ('')
              }
            </tr>
          </tbody>
        </table>
        {
          props.isSelf ? (
            <button className='btn btn-outline-secondary w-100'>Top Up</button>
          ) : (
            <button className={`btn btn-outline-secondary w-100 ${!props.isAuthenticated ? ('disabled') : ('')}`}>Transfer coin to this member!</button>
          )
        }
      </div>
    </div>
  )
}