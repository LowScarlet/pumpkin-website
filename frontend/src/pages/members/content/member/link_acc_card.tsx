/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import useSWR from 'swr'
import { DISCORD_OAUTH2, FRONTEND_URL } from '../../../../components/config'
import { send_toast } from '../../../../components/customToast'
import { FETCH_FAIL } from '../../../../components/redux/messages'
import styles from '../../Style.module.css'

function Discord_Account(props: any) {
  const [discordModal, setDiscordModal] = useState(false)
  const { theNewWindow } = props
  const { fetchingLoading, isSelf, memberData, member_DiscordData, setMember_DiscordData } = props.props

  const discordUnlinkHandler = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/account/third_party/discord', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      // Get response as Json
      const data = await res.json()

      // Validation
      if (res.status === 200) {
        setMember_DiscordData({})
        send_toast('success', data.detail)
        setDiscordModal(false)
      } else {
        send_toast('error', data.detail)
      }
    } catch {
      send_toast('error', FETCH_FAIL)
    }
  }

  return (<>
    <div className="accordion-item">
      <h2 className="accordion-header" id="linked-account-accordion-flush-heading-1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#linked-account-accordion-flush-collapse-1" aria-expanded="false" aria-controls="linked-account-accordion-flush-collapse-1">
          <img src={`${member_DiscordData.avatar}`} width={32} className="img-fluid rounded text-end" alt={member_DiscordData.nickname} />
          <span className="px-2">{member_DiscordData.nickname}</span>
          <i className="bi bi-discord"></i>
        </button>
      </h2>
      <div id="linked-account-accordion-flush-collapse-1" className="accordion-collapse collapse" aria-labelledby="linked-account-accordion-flush-heading-1" data-bs-parent="#linked-account-accordion-flush">
        <div className="accordion-body p-0 pt-3">
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${member_DiscordData.avatar}`} width={"100%"} className="img-fluid rounded-start" alt={member_DiscordData.nickname} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><i className="bi bi-discord"></i> {member_DiscordData.nickname}</h5>
                  <table className="table table-sm table-borderless table-responsive">
                    <tbody>
                      <tr>
                        <td><i className="pe-2 bi bi-hash" />Level</td>
                        <td>
                          {member_DiscordData.level} {member_DiscordData.is_level_max ? ('(Max)') : ('')}
                        </td>
                      </tr>
                      <tr>
                        <td><i className="pe-2 bi bi-hash" />Exp</td>
                        <td>
                          {member_DiscordData.exp} / {member_DiscordData.levelup_exp_needed} ({member_DiscordData.exp / member_DiscordData.levelup_exp_needed * 100}%)
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${member_DiscordData.exp / member_DiscordData.levelup_exp_needed * 100}%` }} />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {
                    isSelf ? (
                      <div className='d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xl-start'>
                        <button onClick={() => setDiscordModal(!discordModal)} className='col btn btn-sm btn-danger'>
                          Unlink Account
                        </button>
                        <button onClick={(e) => {
                          theNewWindow(DISCORD_OAUTH2, 'Discord Account')
                        }} className='col btn btn-sm btn-primary'>
                          Refresh/Update
                        </button>
                      </div>
                    ) : (null)
                  }
                </div>
              </div>
            </div>
            {
              member_DiscordData.active === false ? (
                <div className="mt-3 alert alert-danger" role="alert">
                  Discord account is disabled because we don't have access back to your account, please refresh or update to update. <br /><br /> Do unlink the account if you want to change the discord account!
                </div>
              ) : (
                null
              )
            }
          </div>
        </div>
      </div>
    </div>
    <Modal className='modal-dialog-centered' toggle={() => setDiscordModal(!discordModal)} isOpen={discordModal}>
      <div className="modal-header text-dark ">
        <h5 className="modal-title" id="exampleModalLabel">
          Confirm your action
        </h5>
        <button
          aria-label="Close"
          className="btn-close"
          type="button"
          onClick={() => setDiscordModal(!discordModal)}
        >
          <span aria-hidden={true}></span>
        </button>
      </div>
      <ModalBody className='text-dark'>
        Are you sure about this action?
      </ModalBody>
      <ModalFooter>
        <Button
          color='secondary'
          type="button"
          onClick={() => setDiscordModal(!discordModal)}
        >
          Cancel
        </Button>
        <Button
          color='pumpkin'
          className='text-light'
          type="button"
          onClick={discordUnlinkHandler}
        >
          Unlink Discord Account
        </Button>
      </ModalFooter>
    </Modal>
  </>)
}

export default function Main(props: any) {
  // Inital useState
  const [modal, setModal] = useState(false)
  const { fetchingLoading, memberData, member_DiscordData, isSelf } = props

  const toggle = () => {
    setModal(!modal)
  }

  const theNewWindow = (href: any, title: any) => {
    if (typeof window !== "undefined") {
      const width = screen.width / 1.2
      const height = screen.width / 1.2
      const left = (screen.width / 2) - (width / 2)
      const top = (screen.height / 2) - (height / 2)
      window.open(href, title, `width=${width}, height=${height}, top=${top}, left=${left}`)
    }
  }

  if (fetchingLoading || !memberData) {
    return (
      <div className="shadow card placeholder-glow">
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

  return (<>
    <div className="shadow card">
      <div className="card-body text-dark">
        <h5 className="card-title"><i className="px-2 bi bi-link-45deg"></i>Third Party Account</h5>
        <div className={`${styles['linkend-account-banner']} py-5 bg-dark`}></div>
        <div className="accordion accordion-flush border" id="linked-account-accordion-flush">
          {
            Object.keys(member_DiscordData).length !== 0 ? (
              <Discord_Account {...{ props, theNewWindow }} />
            ) : (
              <div className='px-3 text-center text-muted'>
                {
                  isSelf ? (<>
                    <p>You haven't linked any third party account here!</p>
                    <button className="btn btn-pumpkin text-light w-100" onClick={toggle}>Link third party accounts!</button>
                  </>) : (<>
                    <p className='mb-0'>This member has not associated any third party accounts!</p>
                  </>)
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
    <Modal className='text-dark' isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Select Third Party Account</ModalHeader>
      <ModalBody className='mb-3'>
        <button onClick={(e) => {
          theNewWindow(DISCORD_OAUTH2, 'Discord Account')
        }}
          className={`btn btn-primary w-100 ${Object.keys(member_DiscordData).length !== 0 ? 'disabled' : ''}`}><i className="pe-2 bi bi-discord" />Discord Account</button>
      </ModalBody>
    </Modal>
  </>)
}