/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
    if (props.isLoading) {
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
            <div className='my-2 py-5 bg-dark'></div>
            <table className="table table-sm table-borderless table-responsive text-center">
              <thead>
                <tr>
                  <th scope="col">Pumpkin Coin</th>
                  <th scope="col">Gold Coin</th>
                  <th scope="col">Silver Coin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 <img src="/static/images/currency/pumpkin_coin.png" width={32} alt="" /></td>
                  <td>10 <img src="/static/images/currency/gold_coin.png" width={32} alt="" /></td>
                  <td>10 <img src="/static/images/currency/silver_coin.png" width={32} alt="" /></td>
                </tr>
              </tbody>
            </table>
            <button className='btn btn-outline-secondary w-100'>Top Up</button>
          </div>
        </div>
    )
  }