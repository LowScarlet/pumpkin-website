/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Members.module.css'

export default function Main(props: any) {
    if (props.isLoading) {
      return (
        <div className="shadow card">
          <div className="card-body text-center text-dark">
            <div className="row">
              <div className="col-4">
                <div className="border-bottom border-5 border-primary">
                  <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                  <h2 className="mb-0 fw-bold">0</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="border-bottom border-5 border-success">
                  <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                  <h2 className="mb-0 fw-bold">0</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="border-bottom border-5 border-warning">
                  <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                  <h2 className="mb-0 fw-bold">0</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
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
                <div className="border-bottom border-5 border-success">
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
    )
  }