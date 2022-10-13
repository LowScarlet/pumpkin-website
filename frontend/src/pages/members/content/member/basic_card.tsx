/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import millify from 'millify'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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

  useEffect(() => {
    if (!props.fetchingLoading && props.memberData) {
      setLikes(props.memberData.profile.likes.length)
      setDislikes(props.memberData.profile.dislikes.length)

      if (isAuthenticated && !props.isSelf && props.memberData.other) {
        setIsLike(props.memberData.other.liked)
        setIsDislike(props.memberData.other.disliked)
      }

      if (props.memberData.profile.bio !== null) {
        if (props.memberData.profile.bio.length > 0) {
          setBio(props.memberData.profile.bio)
        }
      }
    }
  }, [props.fetchingLoading, isAuthenticated, props.isSelf, props.memberData])

  // function Toggle_Likes() {
  //   if (isAuthenticated && !props.isSelf) {
  //     setlikedislikeLoading(true)
  //     fetch(`/api/members/${props.memberData.user.username}/toggle_like`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLikes(data.data.profile.likes.length)
  //         setDislikes(data.data.profile.dislikes.length)

  //         setIsLike(data.data.other.liked)
  //         setIsDislike(data.data.other.disliked)
  //       })

  //     setlikedislikeLoading(false)
  //   }
  // }

  // function Toggle_Dislikes() {
  //   if (isAuthenticated && !props.isSelf) {
  //     setlikedislikeLoading(true)
  //     fetch(`/api/members/${props.memberData.user.username}/toggle_dislike`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLikes(data.data.profile.likes.length)
  //         setDislikes(data.data.profile.dislikes.length)

  //         setIsLike(data.data.other.liked)
  //         setIsDislike(data.data.other.disliked)
  //       })
  //     setlikedislikeLoading(false)
  //   }
  // }

  if (props.fetchingLoading || !props.memberData) {
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

  return (
    <div className="shadow card">
      <div className="card-body text-dark">
        <div className={`${styles['member-banner']} py-5 bg-dark`} style={{ backgroundImage: `url('${props.memberData.profile.banner}')` }} />

        <div className="mt-3 mb-1">
          <div className="dropdown float-end">
            <a href="#" className="text-dark arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-front"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {
                props.isSelf ? (
                  <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                    <i className="pe-2 bi bi-gear-fill"></i>
                    Settings
                  </button>
                ) : null
              }
              {
                !props.isSelf ? (
                  <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                    <i className="pe-2 bi bi-flag-fill"></i>
                    Report
                  </button>
                ) : null
              }
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className={`${styles['member-avatar']} w-100 rounded border border-5`} style={{ backgroundImage: `url('${props.memberData.profile.avatar}')` }} />
            <div className="w-100 ms-3">
              <h4 className="my-0 text-uppercase">
                {props.memberData.user.get_full_name.length === 0 ? (
                  "Unknown Member"
                ) : (
                  props.memberData.user.get_full_name
                )}
              </h4>
              <p className="text-muted">@{props.memberData.user.username} - {props.memberData.profile.country}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <motion.button
              className={`text-light btn ${isLike ? ('btn-outline-secondary') : ('btn-pumpkin')} w-100 ${likedislikeLoading || props.isSelf || !isAuthenticated ? ('disabled') : null}`}
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
              className={`btn ${isDislike ? ('btn-outline-secondary') : ('btn-danger')} w-100 ${likedislikeLoading || props.isSelf || !isAuthenticated ? ('disabled') : null}`}
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
              <i className="px-2 bi bi-gift-fill"></i>{props.isSelf ? 'Inventory' : 'Send Gifts'}
            </motion.button>
          </div>
        </div>

        <div className='mt-4'>
          <h6>
            <i className="pe-2 bi bi-caret-right-fill" /> <strong>About Me</strong>
          </h6>
          <p className='text-muted'>
            {bio}
          </p>
        </div>

      </div>
    </div>
  )
}