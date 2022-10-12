/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FRONTEND_URL } from '../../../../components/config'
import styles from '../../Style.module.css'

function Discord_Account(props: any) {
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
            <div className="col-sm-8 px-0">
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
            </div>
            <div className="col text-center">
              <img src={`${props.memberData.discord_account.avatar}`} width="150" alt="" />
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
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  const theNewWindow = (href: any, title: any) => {
    if (typeof window !== "undefined") {
      const width = screen.width/1.2
      const height = screen.width/1.2
      const left = (screen.width/2)-(width/2)
      const top = (screen.height/2)-(height/2)
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
              <Discord_Account {...props} />
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
            console.log('asdasd',process.env.PRODUCTION)
            const url = `https://discord.com/api/oauth2/authorize?client_id=1024709157393268868&redirect_uri=${FRONTEND_URL}%2Faccount%2Fthird_party%2Fdiscord&response_type=code&scope=identify%20guilds`
            theNewWindow(url, 'Discord Account')
          }} 
          className='btn btn-primary w-100'><i className="pe-2 bi bi-discord" />Discord Account</button>
      </ModalBody>
    </Modal>
  </>)
}