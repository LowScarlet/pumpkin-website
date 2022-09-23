/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
    if (props.isLoading) {
      return (
        <div className="shadow card">
          <div className="card-body text-dark">
            <h5 className="card-title placeholder col-6"></h5>
            <div className="bg-light text-center py-5"></div>
          </div>
        </div>
      )
    }
    return (
        <div className="shadow card">
          <div className="card-body text-dark">
            <h5 className="card-title"><i className="px-2 bi bi-box"></i>Account Rank</h5>
            <div id="rank-banner" className="bg-dark text-center py-5">
              {/* <img src="/static/images/rank/{{rank.id}}.png" width="100" alt=""/> */}
            </div>
            <div className="accordion accordion-flush border" id="account-rank-accordion-flush">
              <div className="accordion-item">
                <h2 className="accordion-header" id="account-rank-accordion-flush-head-1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#account-rank-accordion-flush-collapse-1" aria-expanded="false" aria-controls="account-rank-accordion-flush-collapse-1">
                    <i className="px-2 bi bi-box"></i>Wooden Rank
                  </button>
                </h2>
                <div id="account-rank-accordion-flush-collapse-1" className="accordion-collapse collapse" aria-labelledby="account-rank-accordion-flush-head-1" data-bs-parent="#account-rank-accordion-flush">
                  <div className="accordion-body">
                    <h4 className="my-0 fw-normal">Benefits</h4>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li className="text-center">No benefits here :(</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-sm btn-lg btn-primary">
                      Upgrade Rank
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }