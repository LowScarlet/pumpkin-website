/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
    if (props.isLoading) {
      return (
        <div className="shadow card">
          <div className="card-body text-dark">
            <div className='py-5 bg-light'></div>
  
            <div className="my-3">
              <div className="d-flex align-items-start">
                <div className={`${styles['member-avatar']} w-100 rounded border border-5`}></div>
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
          <div className='py-5 bg-dark'></div>
  
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
              <div className={`${styles['member-avatar']} w-100 rounded border border-5`}></div>
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
              <i className="pe-2 bi bi-caret-right-fill" /> <strong>About Me</strong>
            </h6>
            <p className='text-muted'>
              I have no data I can show you!
            </p>
          </div>
  
        </div>
      </div>
    )
  }