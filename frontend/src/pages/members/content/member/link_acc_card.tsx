/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
  if (props.isLoading || !props.data) {
    return (
      <div className="shadow card">
        <div className="card-body text-dark">
          <h5 className="card-title placeholder col-3"></h5>
          <div className="accordion accordion-flush" id="linked-account-accordion-flush">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed">
                  <span className='placeholder col-6'></span>
                </button>
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed">
                  <span className='placeholder col-6'></span>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="shadow card">
      <div className="card-body text-dark">
        <h5 className="card-title"><i className="px-2 bi bi-link-45deg"></i>Linked Account</h5>
        <div className="accordion accordion-flush" id="linked-account-accordion-flush">
          <div className="accordion-item">
            <h2 className="accordion-header" id="linked-account-accordion-flush-heading-1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#linked-account-accordion-flush-collapse-1" aria-expanded="false" aria-controls="linked-account-accordion-flush-collapse-1">
                <i className="px-2 bi bi-discord"></i>Low_Scarlet
              </button>
            </h2>
            <div id="linked-account-accordion-flush-collapse-1" className="accordion-collapse collapse" aria-labelledby="linked-account-accordion-flush-heading-1" data-bs-parent="#linked-account-accordion-flush">
              <div className="accordion-body">
                <div className="row">
                  <div className="col-sm-8 px-0">
                    <table className="table table-sm table-borderless table-responsive">
                      <tbody>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Nickname</td>
                          <td>Low_Scarlet</td>
                        </tr>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Level</td>
                          <td>
                            75 (Max)
                          </td>
                        </tr>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Exp</td>
                          <td>
                            7540 / 10000 (75%)
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col text-center">
                    <img src="/static/images/currency/discord_coin.png" width="150" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="linked-account-accordion-flush-heading-2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <i className="px-2 bi bi-controller"></i>Low_Scarlet
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="linked-account-accordion-flush-heading-2" data-bs-parent="#linked-account-accordion-flush">
              <div className="accordion-body">
                <div className="row">
                  <div className="col-sm-8 px-0">
                    <table className="table table-sm table-borderless table-responsive">
                      <tbody>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Nickname</td>
                          <td>Low_Scarlet</td>
                        </tr>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Level</td>
                          <td>
                            75 (Max)
                          </td>
                        </tr>
                        <tr>
                          <td><i className="pe-2 bi bi-hash" />Exp</td>
                          <td>
                            7540 / 10000 (75%)
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col text-center">
                    <img src="/static/images/currency/discord_coin.png" width="150" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}