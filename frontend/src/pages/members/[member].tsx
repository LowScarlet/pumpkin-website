/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './Members.module.css'
import { useRouter } from 'next/router'

const Members_Member: NextPage = () => {
  const router = useRouter()
  const { member } = router.query
  
  return (
    <>
    <Head>
      {
        member ? (
          <title>Members - {member}</title> 
        ) : (
          <title>Members</title> 
        )
      }
    </Head>
    <Layout>
      <section className={`${styles['bg']}`}>
        <div className='container-sm py-2'>
          <div className="row">
            <div className="col-xl-5">
              <div className="shadow card">
                <div className="card-body text-dark">
                  <div className='py-5 bg-dark'></div>

                  <div className="my-3">
                    <div className="dropdown float-end">
                      <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                          <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                              Settings
                          </button>
                          <a href="javascript:void(0);" className="dropdown-item">Report</a>
                      </div>
                    </div>
                      
                    <div className="d-flex align-items-start">
                      <img src="http://127.0.0.1:3000/static/images/user/default_avatar.png" width={64} className="rounded avatar-lg img-thumbnail" alt="profile-image"/>
                      <div className="w-100 ms-3">
                          <h4 className="my-0">TEGAR MAULANA FAHREZA</h4>
                          <p className="text-muted">@Low_Scarlet - Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary w-100"><i className="px-2 bi bi-hand-thumbs-up"></i>Like</button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-danger w-100"><i className="px-2 bi bi-hand-thumbs-down"></i>Dislike</button>
                    </div>
                    <div className="col-sm-100 mt-2">
                        <button type="button" className="btn btn-outline-success w-100"><i className="px-2 bi bi-gift-fill"></i>Give Gifts</button>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <h6>
                      <i className="pe-2 bi bi-caret-right-fill"/> <strong>About Me</strong>
                    </h6>
                    <p className='text-muted'>
                      I have no data I can show you!
                    </p>
                  </div>

                </div>
              </div>

              <div className="col my-4">
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
              </div>

            </div>
            <div className="col">

                <div className="col">
                    <div className="shadow card">
                        <div className="card-body text-center text-dark">
                            <div className="row">
                                <div className="col-4">
                                    <div className="border-bottom border-5 border-primary">
                                        <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="px-2 bi bi-hand-thumbs-up"></i>Likes</h5>
                                        <h2 className="mb-0 fw-bold">10</h2>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="border-bottom border-5 border-secondary">
                                        <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="px-2 bi bi-eye-fill"></i>Views</h5>
                                        <h2 className="mb-0 fw-bold">5</h2>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="border-bottom border-5 border-warning">
                                        <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="px-2 bi bi-exclamation-square"></i>Warns</h5>
                                        <h2 className="mb-0 fw-bold">0</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col mt-4">
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
                                      <td><i className="pe-2 bi bi-hash"/>Nickname</td>
                                      <td>Low_Scarlet</td>
                                    </tr>
                                    <tr>
                                      <td><i className="pe-2 bi bi-hash"/>Level</td>
                                      <td>
                                        75 (Max)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><i className="pe-2 bi bi-hash"/>Exp</td>
                                      <td>
                                        7540 / 10000 (75%)
                                        <div className="progress">
                                          <div className="progress-bar" role="progressbar"/>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                  </table>
                                </div>
                                <div className="col text-center">
                                    <img src="/static/images/currency/discord_coin.png" width="150" alt=""/>
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
                                      <td><i className="pe-2 bi bi-hash"/>Nickname</td>
                                      <td>Low_Scarlet</td>
                                    </tr>
                                    <tr>
                                      <td><i className="pe-2 bi bi-hash"/>Level</td>
                                      <td>
                                        75 (Max)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><i className="pe-2 bi bi-hash"/>Exp</td>
                                      <td>
                                        7540 / 10000 (75%)
                                        <div className="progress">
                                          <div className="progress-bar" role="progressbar"/>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                  </table>
                                </div>
                                <div className="col text-center">
                                    <img src="/static/images/currency/discord_coin.png" width="150" alt=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export default Members_Member