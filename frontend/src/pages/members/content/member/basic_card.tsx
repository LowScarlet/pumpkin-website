/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import millify from 'millify'
import { useEffect, useState } from 'react'
import styles from '../../Members.module.css'

export default function Main(props: any) {
  // Initial useState
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [isLike, setIsLike] = useState(false)
  const [isDislike, setIsDislike] = useState(false)

  const [likedislikeLoading, setlikedislikeLoading] = useState(false)

  const [bio, setBio] = useState("I have no data to show off!")

  useEffect(() => {
    if (!props.isLoading && props.data) {
      setLikes(props.data.profile.likes.length)
      setDislikes(props.data.profile.dislikes.length)
      
      setIsLike(props.data.other.liked)
      setIsDislike(props.data.other.disliked)

      if (props.data.profile.bio.length > 0) {
        setBio(props.data.profile.bio)
      }
    }
  }, [props.data, props.isLoading])

  function Toggle_Likes() {
    setlikedislikeLoading(true)
    fetch(`/api/members/${props.data.user.username}/toggle_like`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.data.profile.likes.length)
        setDislikes(data.data.profile.dislikes.length)

        setIsLike(data.data.other.liked)
        setIsDislike(data.data.other.disliked)

        setlikedislikeLoading(false)
    })
  }

  function Toggle_Dislikes() {
    setlikedislikeLoading(true)
    fetch(`/api/members/${props.data.user.username}/toggle_dislike`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.data.profile.likes.length)
        setDislikes(data.data.profile.dislikes.length)

        setIsLike(data.data.other.liked)
        setIsDislike(data.data.other.disliked)

        setlikedislikeLoading(false)
    })
  }

  if (props.isLoading || !props.data) {
    return (
      <div className="shadow card">
        <div className="card-body text-dark">
          <div className='py-5 bg-light'></div>

          <div className="my-3">
            <div className="d-flex align-items-start">
              <div className={`${styles['member-avatar']} w-100 rounded border border-5`} />
              <div className="w-100 ms-3">
                <h4 className="my-0 placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h4>
                <p className="text-muted">
                  <span className="placeholder col-10"></span>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-primary w-100 disabled placeholder col-6"></button>
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
        <div className={`${styles['member-banner']} py-5 bg-dark`} style={{ backgroundImage: `url('${props.data.profile.banner}')` }} />

        <div className="my-3">
          <div className="dropdown float-end">
            <a href="#" className="text-dark arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-front"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                <i className="pe-2 bi bi-gear-fill"></i>
                Settings
              </button>
              <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#basic_settings_modal_">
                <i className="pe-2 bi bi-flag-fill"></i>
                Report
              </button>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className={`${styles['member-avatar']} w-100 rounded border border-5`} style={{ backgroundImage: `url('${props.data.profile.avatar}')` }} />
            <div className="w-100 ms-3">
              <h4 className="my-0">
                {props.data.user.get_full_name}
              </h4>
              <p className="text-muted">@{props.data.user.username} - {props.data.profile.country}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button onClick={() => Toggle_Likes()} className={`btn ${isLike ? ('btn-outline-secondary') : ('btn-primary')} w-100 ${likedislikeLoading ? ('disabled') : ('')}`}><i className="px-2 bi bi-hand-thumbs-up"></i>{millify(likes)} {isLike ? ('Liked!') : ('Like')}</button>
          </div>
          <div className="col">
            <button onClick={() => Toggle_Dislikes()} className={`btn ${isDislike ? ('btn-outline-secondary') : ('btn-danger')} w-100 ${likedislikeLoading ? ('disabled') : ('')}`}><i className="px-2 bi bi-hand-thumbs-down"></i>{millify(dislikes)} {isDislike ? ('Disliked!') : ('Dislike')}</button>
          </div>
          <div className="col-sm-100 mt-2">
            <button type="button" className="btn btn-outline-success w-100"><i className="px-2 bi bi-gift-fill"></i>Give Gifts</button>
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