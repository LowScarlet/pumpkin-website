/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import styles from '../../Members.module.css'

function Discord_Account(props: any) {
  return (<>
    <div className="accordion-item">
      <h2 className="accordion-header" id="linked-account-accordion-flush-heading-1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#linked-account-accordion-flush-collapse-1" aria-expanded="false" aria-controls="linked-account-accordion-flush-collapse-1">
          <i className="px-2 bi bi-discord"></i>{props.data.discord_account.nickname}
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
                    <td>{props.data.discord_account.nickname}</td>
                  </tr>
                  <tr>
                    <td><i className="pe-2 bi bi-hash" />Level</td>
                    <td>
                      {props.data.discord_account.level} {props.data.discord_account.is_level_max ? ('(Max)') : ('')}
                    </td>
                  </tr>
                  <tr>
                    <td><i className="pe-2 bi bi-hash" />Exp</td>
                    <td>
                      {props.data.discord_account.exp} / {props.data.discord_account.levelup_exp_needed} ({props.data.discord_account.exp / props.data.discord_account.levelup_exp_needed * 100}%)
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${props.data.discord_account.exp / props.data.discord_account.levelup_exp_needed * 100}%` }} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col text-center">
              <img src={`${props.data.discord_account.avatar}`} width="150" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default function Main(props: any) {
  // Inital useState
  const [discord_account, setDiscord_Account] = useState({})

  useEffect(() => {
    if (!props.isLoading && props.data) {
      setDiscord_Account(props.data.discord_account)
    }
  }, [props.data, props.isLoading])

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
          {
            Object.keys(discord_account).length !== 0 ? (
              <Discord_Account {...props} />
            ) : (
              <div className='px-3 text-center text-muted'>
                {
                  props.isSelf ? (<>
                    <p>You haven't linked any third party account here!</p>
                    <button className="btn btn-primary w-100">Link third party accounts!</button>
                  </>) : (<>
                    <p>This member has not associated any third party accounts!</p>
                  </>) 
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}