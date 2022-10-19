/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import millify from 'millify'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import styles from '../../Style.module.css'

export default function Main(props: any) {
  // Initial useState
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [isLike, setIsLike] = useState(false)
  const [isDislike, setIsDislike] = useState(false)

  const [likedislikeLoading, setlikedislikeLoading] = useState(false)

  const [bio, setBio] = useState("I have no data to show off!")

  const [editModal, setEditModal] = useState(false)

  const { fetchingLoading, memberData, isSelf } = props

  useEffect(() => {
    if (!fetchingLoading && memberData) {
      setLikes(memberData.profile.likes.length)
      setDislikes(memberData.profile.dislikes.length)

      if (isAuthenticated && !isSelf && memberData.other) {
        setIsLike(memberData.other.liked)
        setIsDislike(memberData.other.disliked)
      }

      if (memberData.profile.bio !== null) {
        if (memberData.profile.bio.length > 0) {
          setBio(memberData.profile.bio)
        }
      }
    }
  }, [fetchingLoading, isAuthenticated, isSelf, memberData])

  if (fetchingLoading || !memberData) {
    return (
      <div className="shadow card placeholder-glow">
        <div className="card-body text-dark">
          <div className='py-5 bg-light'></div>

          <div className="my-3">
            <div className="d-flex align-items-start">
              <div className={`${styles['member-avatar']} bg-dark placeholder w-100 rounded border border-5`} />
              <div className="w-100 ms-3">
                <h4 className="my-0">
                  <span className="placeholder col-6"></span>
                </h4>
                <p className="text-muted">
                  <span className="placeholder col-10"></span>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-pumpkin w-100 disabled placeholder col-6"></button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-danger w-100 disabled placeholder col-6"></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (<>
    <div className="shadow card">
      <div className="card-body text-dark">
        <div className={`${styles['member-banner']} py-5 bg-dark`} style={{ backgroundImage: `url('${memberData.profile.banner}')` }} />

        <div className="mt-3 mb-1">
          <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false" />
            <div className="dropdown-menu dropdown-menu-end">
              {
                isSelf ? (
                  <button onClick={() => setEditModal(!editModal)} className="dropdown-item">
                    <i className="pe-2 bi bi-gear-fill"></i>
                    Edit
                  </button>
                ) : null
              }
              {
                !isSelf ? (
                  <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                    <i className="pe-2 bi bi-flag-fill"></i>
                    Report
                  </button>
                ) : null
              }
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className={`${styles['member-avatar']} w-100 rounded border border-5`} style={{ backgroundImage: `url('${memberData.profile.avatar}')` }} />
            <div className="w-100 ms-3">
              <h4 className="my-0 text-uppercase">
                {memberData.user.get_full_name.length === 0 ? (
                  "Unknown Member"
                ) : (
                  memberData.user.get_full_name
                )}
              </h4>
              <p className="text-muted">@{memberData.user.username} - {memberData.profile.country}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <motion.button
              className={`text-light btn ${isLike ? ('btn-outline-secondary') : ('btn-pumpkin')} w-100 ${likedislikeLoading || isSelf || !isAuthenticated ? ('disabled') : null}`}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="button"
            // onClick={() => Toggle_Likes()}
            >
              <i className="px-2 bi bi-hand-thumbs-up"></i>{millify(likes)} {isLike ? ('Liked!') : ('Like')}
            </motion.button>
          </div>
          <div className="col">
            <motion.button
              className={`btn ${isDislike ? ('btn-outline-secondary') : ('btn-danger')} w-100 ${likedislikeLoading || isSelf || !isAuthenticated ? ('disabled') : null}`}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="button"
            // onClick={() => Toggle_Dislikes()}
            >
              <i className="px-2 bi bi-hand-thumbs-down"></i>{millify(dislikes)} {isDislike ? ('Disliked!') : ('Dislike')}
            </motion.button>
          </div>
          <div className="col-sm-100 mt-2">
            <motion.button
              className={`btn btn-outline-success w-100 ${!isAuthenticated ? ('disabled') : null}`}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="button"
            >
              <i className="px-2 bi bi-gift-fill"></i>{isSelf ? 'Inventory' : 'Send Gifts'}
            </motion.button>
          </div>
        </div>

        <div className='mt-4'>
          <h6 className='text-muted'>
            <i className="pe-2 bi bi-caret-right-fill" />About Me
          </h6>
          <p className='text-muted'>
            <small>
              {bio}
            </small>
          </p>
        </div>

      </div>
    </div>
    {
      isSelf ? (
        <Modal className='modal-dialog-centered modal-lg' toggle={() => setEditModal(!editModal)} isOpen={editModal}>
          <ModalHeader toggle={() => setEditModal(!editModal)}>
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="bi bi-gear-fill"></i> Edit your account!
            </h5>
          </ModalHeader>
          <ModalBody className='text-dark'>
            <div className="row g-0">
              <div className="col-12 col-md-4 pe-lg-5 text-center text-lg-start">
                <span>Profile</span>
                <p>
                  <small>
                    Your username is your identity on Pumpkin Project and is used to log in.
                  </small>
                </p>
              </div>
              <div className="col-sm-6 col-md-8">
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="Username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" id="Username" placeholder={memberData.user.username} />
                  </div>
                  <div className="col-6">
                    <label htmlFor="First_Name" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="first_name" id="First_Name" placeholder={memberData.user.first_name} />
                  </div>
                  <div className="col-6">
                    <label htmlFor="Last_Name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="last_name" id="Last_Name" placeholder={memberData.user.last_name} />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="Email" placeholder={memberData.user.email} />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="Bio" className="form-label">Bio</label>
                    <textarea className="form-control" name="bio" id="Bio" rows={4} placeholder={memberData.profile.bio}></textarea>
                  </div>
                  <button type='submit' className="btn btn-sm btn-success w-50">Save</button>
                </form>
              </div>
            </div>
            <div className="row g-0 mt-5">
              <div className="col-12 col-md-4 pe-lg-5 text-center text-lg-start">
                <span>Password</span>
                <p>
                  <small>
                    Changing your password will also reset your Token.
                  </small>
                </p>
              </div>
              <div className="col-sm-6 col-md-8">
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="CurrentPassword" className="form-label">Current Password</label>
                    <input type="password" className="form-control" name="curret_password" id="CurrentPassword" placeholder='Your current password' />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="NewPassword" className="form-label">Current Password</label>
                    <input type="password" className="form-control" name="new_password" id="NewPassword" placeholder='Your new password' />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="new_password" id="NewPassword" placeholder='Your new password (For Confirmation)' />
                  </div>
                  <button type='submit' className="btn btn-sm btn-success w-50">Save</button>
                </form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className='py-3 text-muted'>
            By using Pumpkin Project services, you are agreeing to our <Link href='/terms'><a className='text-pumpkin'>terms and conditions.</a></Link>
          </ModalFooter>
        </Modal>
      ) : null
    }
  </>)
}