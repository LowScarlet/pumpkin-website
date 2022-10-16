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
        props.setDiscord_Account({})
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
          <i className="px-2 bi bi-discord"></i>{props.memberData.discord_account.nickname}
        </button>
      </h2>
      <div id="linked-account-accordion-flush-collapse-1" className="accordion-collapse collapse" aria-labelledby="linked-account-accordion-flush-heading-1" data-bs-parent="#linked-account-accordion-flush">
        <div className="accordion-body">
          <div className="row">
            <div className="col col-sm-0 px-0">
              <table className="table table-sm table-borderless table-responsive">
                <tbody>
                  <tr>
                    <td><i className="pe-2 bi bi-hash" />Nickname</td>
                    <td>{props.memberData.discord_account.nickname}</td>
                  </tr>
                  <tr>
                    <td><i className="pe-2 bi bi-hash" />Level</td>
                    <td>
                      {props.memberData.discord_account.level} {props.memberData.discord_account.is_level_max ? ('(Max)') : ('')}
                    </td>
                  </tr>
                  <tr>
                    <td><i className="pe-2 bi bi-hash" />Exp</td>
                    <td>
                      {props.memberData.discord_account.exp} / {props.memberData.discord_account.levelup_exp_needed} ({props.memberData.discord_account.exp / props.memberData.discord_account.levelup_exp_needed * 100}%)
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${props.memberData.discord_account.exp / props.memberData.discord_account.levelup_exp_needed * 100}%` }} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {
                props.isSelf ? (
                  <div className='text-center mb-1'>
                    <button onClick={() => setDiscordModal(!discordModal)} className='me-1 col btn btn-sm btn-danger'>
                      Unlink Account
                    </button>
                    <button onClick={(e) => {
                      props.theNewWindow(DISCORD_OAUTH2, 'Discord Account')
                    }} className='col btn btn-sm btn-primary'>
                      Refresh/Update
                    </button>
                  </div>
                ) : (null)
              }
            </div>
            <div className="col text-center">
              <img className='rounded' src={`${props.memberData.discord_account.avatar}`} width="150" alt="" />
            </div>
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
  const [discord_account, setDiscord_Account] = useState({})
  const [modal, setModal] = useState(false)

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

  useEffect(() => {
    if (!props.fetchingLoading && props.memberData) {
      setDiscord_Account(props.memberData.discord_account)
    }
  }, [props.memberData, props.fetchingLoading])

  if (props.fetchingLoading || !props.memberData) {
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
        <h5 className="card-title"><i className="px-2 bi bi-link-45deg"></i>Linked Account</h5>
        <div className="accordion accordion-flush" id="linked-account-accordion-flush">
          {
            Object.keys(discord_account).length !== 0 ? (
              <Discord_Account {...props} theNewWindow={theNewWindow} discord_account={discord_account} setDiscord_Account={setDiscord_Account}/>
            ) : (
              <div className='px-3 text-center text-muted'>
                {
                  props.isSelf ? (<>
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
          className={`btn btn-primary w-100 ${Object.keys(discord_account).length !== 0 ? 'disabled' : ''}`}><i className="pe-2 bi bi-discord" />Discord Account</button>
      </ModalBody>
    </Modal>
  </>)
}